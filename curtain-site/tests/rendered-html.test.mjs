import assert from "node:assert/strict";
import test from "node:test";

async function loadWorker() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${Math.random()}`);
  return (await import(workerUrl.href)).default;
}

const env = {
  ASSETS: {
    fetch: async () => new Response("Not found", { status: 404 }),
  },
};

const ctx = {
  waitUntil() {},
  passThroughOnException() {},
};

function metaContent(html, key, attribute = "name") {
  const expression = new RegExp(`<meta(?=[^>]*\\b${attribute}=["']${key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["'])(?=[^>]*\\bcontent=["']([^"']*)["'])[^>]*>`, "i");
  return html.match(expression)?.[1] ?? "";
}

function linkHref(html, rel) {
  const expression = new RegExp(`<link(?=[^>]*\\brel=["']${rel}["'])(?=[^>]*\\bhref=["']([^"']+)["'])[^>]*>`, "i");
  return html.match(expression)?.[1] ?? "";
}

function titleText(html) {
  return html.match(/<title>([^<]+)<\/title>/i)?.[1] ?? "";
}

test("renders production metadata and a page-scoped high-priority home hero", async () => {
  const worker = await loadWorker();
  const fetchHtml = async (path) => {
    const response = await worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), env, ctx);
    assert.equal(response.status, 200);
    return response.text();
  };

  const home = await fetchHtml("/");
  assert.doesNotMatch(home, /codex-preview/i);
  assert.match(titleText(home), /Curtain &amp; Fabric Cleaning Johannesburg/);
  assert.equal(linkHref(home, "canonical"), "https://www.jhbcurtaincleaning.co.za/");
  assert.ok(metaContent(home, "og:image", "property"), "home must have an Open Graph image");
  assert.match(home, /<img(?=[^>]+jhb-textile-hero\.webp)(?=[^>]+loading=["']eager["'])(?=[^>]+fetchPriority=["']high["'])[^>]*>/i);
  assert.match(home, /Why we don(?:’|&#x27;|')t publish prices online/i);
  assert.match(home, /Kathy visits within 48 hours/i);
  assert.doesNotMatch(home, /R800|R1,500|R3,000|R5,500/i);

  const service = await fetchHtml("/services/curtain-blind-cleaning");
  assert.doesNotMatch(service, /<img[^>]+jhb-textile-hero\.webp[^>]+fetchPriority=["']high["']/i);
});

test("every sitemap page has unique production metadata and resolvable internal links", async () => {
  const worker = await loadWorker();
  const fetchPath = (path) => worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), env, ctx);
  const sitemapResponse = await fetchPath("/sitemap.xml");
  assert.equal(sitemapResponse.status, 200, "sitemap.xml must render");
  const sitemap = await sitemapResponse.text();
  const paths = [...sitemap.matchAll(/<loc>https:\/\/www\.jhbcurtaincleaning\.co\.za([^<]*)<\/loc>/g)].map((match) => match[1] || "/");
  assert.equal(paths.length, 33, "canonical sitemap must contain 33 pages");
  assert.ok(paths.includes("/services"), "services overview must be in the sitemap");
  assert.ok(paths.includes("/sectors"), "sectors overview must be in the sitemap");
  assert.ok(paths.includes("/areas"), "areas overview must be in the sitemap");

  const rendered = new Map();
  const titles = new Map();
  const descriptions = new Map();

  for (const path of paths) {
    const response = await fetchPath(path);
    assert.equal(response.status, 200, `${path} returned ${response.status}`);
    const html = await response.text();
    rendered.set(path, html);

    const title = titleText(html);
    const description = metaContent(html, "description");
    const canonical = linkHref(html, "canonical");
    assert.ok(title, `${path} is missing a title`);
    assert.ok(description, `${path} is missing a description`);
    assert.equal(canonical, new URL(path, "https://www.jhbcurtaincleaning.co.za").href, `${path} canonical mismatch`);
    assert.ok(metaContent(html, "og:title", "property"), `${path} is missing og:title`);
    assert.ok(metaContent(html, "og:description", "property"), `${path} is missing og:description`);
    assert.ok(metaContent(html, "og:url", "property"), `${path} is missing og:url`);
    assert.ok(metaContent(html, "og:image", "property"), `${path} is missing og:image`);
    assert.ok(metaContent(html, "twitter:card"), `${path} is missing twitter:card`);

    assert.ok(!titles.has(title), `${path} duplicates title from ${titles.get(title)}`);
    assert.ok(!descriptions.has(description), `${path} duplicates description from ${descriptions.get(description)}`);
    titles.set(title, path);
    descriptions.set(description, path);

    for (const block of html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
      assert.doesNotThrow(() => JSON.parse(block[1]), `${path} has invalid JSON-LD`);
    }
  }

  const internalTargets = new Set();
  const inboundLinks = new Map(paths.map((path) => [path, new Set()]));
  for (const [sourcePath, html] of rendered) {
    for (const match of html.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["']/g)) {
      const href = match[1].replaceAll("&amp;", "&");
      if (/^(?:https?:|mailto:|tel:)/.test(href)) continue;
      const target = new URL(href, `http://localhost${sourcePath}`);
      if (target.origin !== "http://localhost") continue;
      internalTargets.add(`${target.pathname}${target.search}`);
      if (target.pathname !== sourcePath && inboundLinks.has(target.pathname)) inboundLinks.get(target.pathname).add(sourcePath);
      if (target.hash) {
        const targetHtml = rendered.get(target.pathname) ?? await (await fetchPath(target.pathname)).text();
        const id = target.hash.slice(1).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        assert.match(targetHtml, new RegExp(`\\bid=["']${id}["']`), `${sourcePath} links to missing ${target.hash} on ${target.pathname}`);
      }
    }
  }

  for (const target of internalTargets) {
    const response = await fetchPath(target);
    assert.ok(response.status >= 200 && response.status < 400, `${target} returned ${response.status}`);
  }

  for (const path of paths.filter((path) => path !== "/")) {
    assert.ok(inboundLinks.get(path)?.size, `${path} is orphaned and has no internal backlink`);
  }
});

test("form endpoints reject invalid submissions without external credentials", async () => {
  const worker = await loadWorker();
  const request = (path, body) => worker.fetch(new Request(`http://localhost${path}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  }), env, ctx);

  assert.equal((await request("/api/contact", { email: "invalid" })).status, 400);
  assert.equal((await request("/api/subscribe", { email: "invalid", consent: false })).status, 400);
});
