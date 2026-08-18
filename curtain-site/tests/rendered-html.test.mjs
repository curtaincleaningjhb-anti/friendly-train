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
  assert.match(home, /<figure[^>]+id=["']about-video["']/i, "about video must have a stable campaign anchor");
  assert.match(home, /<video(?=[^>]+controls)(?=[^>]+playsinline)(?=[^>]+preload=["']metadata["'])[^>]*>/i, "ambassador video must use mobile-safe controls and metadata preload");
  assert.match(home, /\/videos\/jhb-brand-ambassador\.mp4/i, "final ambassador video source is missing");
  assert.match(home, /<track(?=[^>]+kind=["']captions["'])(?=[^>]+jhb-brand-ambassador\.vtt)[^>]*>/i, "video captions are missing");
  assert.doesNotMatch(home, /<video[^>]+autoplay/i, "homepage video must not autoplay");

  const service = await fetchHtml("/services/curtain-blind-cleaning");
  assert.doesNotMatch(service, /<img[^>]+jhb-textile-hero\.webp[^>]+fetchPriority=["']high["']/i);
  assert.doesNotMatch(service, /zero-shrinkage|zero guest disruption|hypoallergenic|anti-bacterial/i);

  const pricing = await fetchHtml("/advice/curtain-cleaning-prices");
  assert.match(pricing, /Curtain Cleaning Prices in Johannesburg/i);
  assert.doesNotMatch(pricing, /R800|R1,500|R3,000|R5,500/i);

  const guides = await fetchHtml("/guides");
  assert.match(guides, /blackout-lined-curtain-cleaning/i);
  assert.match(guides, /curtain-stains-odours-mould-what-to-do/i);

  assert.match(home, /<header[^>]+site-header[^>]*>/i, "sticky header markup must render");
  assert.match(home, /<footer[^>]+id=["']site-footer["']/i, "footer must have a stable internal target");
  assert.match(home, /<nav[^>]+footer-legal-links[^>]+aria-label=["']Footer utility navigation["']/i);
  for (const path of ["/about", "/guides", "/advice", "/case-studies", "/gallery", "/newsletter", "/privacy-policy", "/terms-of-service"]) {
    assert.match(home, new RegExp(`href=["']${path.replaceAll("/", "\\/")}["']`), `footer utility link ${path} is missing`);
  }
  for (const path of ["/services", "/sectors", "/areas", "/#contact"]) {
    assert.match(home, new RegExp(`href=["']${path.replaceAll("/", "\\/")}["']`), `footer section backlink ${path} is missing`);
  }
});

test("every sitemap page has unique production metadata and resolvable internal links", async () => {
  const worker = await loadWorker();
  const fetchPath = (path) => worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), env, ctx);
  const sitemapResponse = await fetchPath("/sitemap.xml");
  assert.equal(sitemapResponse.status, 200, "sitemap.xml must render");
  const sitemap = await sitemapResponse.text();
  const paths = [...sitemap.matchAll(/<loc>https:\/\/www\.jhbcurtaincleaning\.co\.za([^<]*)<\/loc>/g)].map((match) => match[1] || "/");
  assert.equal(paths.length, 50, "canonical sitemap must contain 50 pages");
  assert.ok(paths.includes("/services"), "services overview must be in the sitemap");
  assert.ok(paths.includes("/sectors"), "sectors overview must be in the sitemap");
  assert.ok(paths.includes("/areas"), "areas overview must be in the sitemap");
  assert.ok(paths.includes("/areas/johannesburg"), "Johannesburg parent must be in the sitemap");
  assert.ok(paths.includes("/advice/curtain-cleaning-prices"), "pricing advice must be in the sitemap");
  assert.ok(paths.includes("/case-studies"), "case-study hub must be in the sitemap");

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

test("form integrations validate, filter bots and fail gracefully without provider credentials", async () => {
  const worker = await loadWorker();
  const request = (path, body) => worker.fetch(new Request(`http://localhost${path}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  }), env, ctx);

  assert.equal((await request("/api/contact", { email: "invalid" })).status, 400);
  assert.equal((await request("/api/subscribe", { email: "invalid", consent: false })).status, 400);

  const bot = await request("/api/contact", { website: "https://spam.example" });
  assert.equal(bot.status, 200);

  const contact = await request("/api/contact", {
    name: "Layout Audit",
    email: "audit@example.com",
    phone: "+27 75 011 9200",
    location: "Johannesburg",
    message: "Integration fallback test",
    website: "",
  });
  assert.equal(contact.status, 503);
  assert.match(await contact.text(), /call or WhatsApp/i);

  const subscription = await request("/api/subscribe", {
    name: "Layout Audit",
    email: "audit@example.com",
    interest: "Curtain care",
    consent: true,
  });
  assert.equal(subscription.status, 503);
  assert.match(await subscription.text(), /temporarily unavailable/i);
});
