const base = process.env.VERIFY_BASE_URL ?? "http://127.0.0.1:3000";
const response = await fetch(`${base}/sitemap.xml`);
if (!response.ok) throw new Error(`sitemap returned ${response.status}`);
const sitemap = await response.text();
const paths = [...sitemap.matchAll(/<loc>https:\/\/www\.jhbcurtaincleaning\.co\.za([^<]*)<\/loc>/g)].map((match) => match[1] || "/");
if (paths.length !== 50) throw new Error(`expected 50 sitemap routes, found ${paths.length}`);

const failures = [];
for (const path of paths) {
  const page = await fetch(`${base}${path}`, { redirect: "manual", headers: { accept: "text/html" } });
  const html = await page.text();
  if (page.status !== 200) failures.push(`${path}: status ${page.status}`);
  const expectedCanonical = `https://www.jhbcurtaincleaning.co.za${path === "/" ? "" : path}`;
  const canonical = html.match(/<link(?=[^>]*rel="canonical")(?=[^>]*href="([^"]+)")[^>]*>/i)?.[1] ?? "";
  if (canonical !== expectedCanonical) failures.push(`${path}: canonical mismatch (${canonical})`);
  if (!page.headers.get("x-content-type-options")) failures.push(`${path}: security headers missing`);
}

const redirects = new Map([
  ["/services/rug-care", "/services/persian-oriental-rug-care"],
  ["/curtain-cleaning", "/services/curtain-blind-cleaning"],
  ["/persian-rugs", "/services/persian-oriental-rug-care"],
  ["/blog/curtain-cleaning-frequency", "/guides/how-often-clean-curtains-johannesburg"],
]);
for (const [source, destination] of redirects) {
  const page = await fetch(`${base}${source}`, { redirect: "manual" });
  if (![307, 308].includes(page.status)) failures.push(`${source}: expected redirect, got ${page.status}`);
  const location = page.headers.get("location") ?? "";
  if (!location.endsWith(destination)) failures.push(`${source}: redirects to ${location}`);
}

const keyPages = new Map([
  ["/advice/curtain-cleaning-prices", ["Curtain Cleaning Prices in Johannesburg", "What affects curtain cleaning prices"]],
  ["/guides/delicate-curtain-fabrics-silk-velvet-linen-sheers", ["Cleaning Delicate Curtain Fabrics", "Silk"]],
  ["/guides/curtain-stains-odours-mould-what-to-do", ["Curtain Stains, Odours and Mould", "Textile cleaning and building remediation"]],
  ["/case-studies", ["Curtain and Fabric Care Case Studies", "Unpublished template 1"]],
  ["/areas/johannesburg", ["On-site curtain cleaning in Johannesburg", "Johannesburg Central"]],
]);
for (const [path, terms] of keyPages) {
  const html = await (await fetch(`${base}${path}`)).text();
  for (const term of terms) if (!html.toLowerCase().includes(term.toLowerCase())) failures.push(`${path}: missing ${term}`);
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(`Verified ${paths.length} canonical routes, ${redirects.size} redirects and ${keyPages.size} key content pages at ${base}`);
