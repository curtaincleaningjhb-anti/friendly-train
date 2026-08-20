import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import WebSocket from "ws";

const baseUrl = process.env.AUDIT_BASE_URL ?? "https://matron-clothing-alarm.ngrok-free.dev";
const outputDir = path.resolve(process.env.AUDIT_OUTPUT_DIR ?? "/home/ubuntu/jhb-mobile-audit-2026-08-18");
const debuggingPort = 9444;
mkdirSync(outputDir, { recursive: true });

const viewports = [
  { name: "small-phone", width: 320, height: 568, deviceScaleFactor: 2, mobile: true },
  { name: "android-compact", width: 360, height: 800, deviceScaleFactor: 3, mobile: true },
  { name: "iphone-standard", width: 390, height: 844, deviceScaleFactor: 3, mobile: true },
  { name: "large-phone", width: 430, height: 932, deviceScaleFactor: 3, mobile: true },
  { name: "mobile-landscape", width: 844, height: 390, deviceScaleFactor: 2, mobile: true },
].filter((viewport) => !process.env.AUDIT_VIEWPORTS || process.env.AUDIT_VIEWPORTS.split(",").includes(viewport.name));

const chrome = spawn("/usr/bin/chromium", [
  "--headless=new",
  "--no-sandbox",
  "--disable-gpu",
  "--disable-dev-shm-usage",
  "--hide-scrollbars",
  `--remote-debugging-port=${debuggingPort}`,
  "--remote-debugging-address=127.0.0.1",
  "about:blank",
], { stdio: ["ignore", "ignore", "ignore"] });

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getJson(url, attempts = 60) {
  let lastError;
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return response.json();
    } catch (error) {
      lastError = error;
    }
    await delay(100);
  }
  throw lastError ?? new Error(`Unable to read ${url}`);
}

class CdpClient {
  constructor(url) {
    this.socket = new WebSocket(url);
    this.nextId = 1;
    this.pending = new Map();
    this.events = [];
    this.ready = new Promise((resolve, reject) => {
      this.socket.once("open", resolve);
      this.socket.once("error", reject);
    });
    this.socket.on("message", (data) => {
      const message = JSON.parse(data.toString());
      if (!message.id) {
        this.events.push(message);
        return;
      }
      const pending = this.pending.get(message.id);
      if (!pending) return;
      this.pending.delete(message.id);
      if (message.error) pending.reject(new Error(message.error.message));
      else pending.resolve(message.result);
    });
  }

  async send(method, params = {}) {
    await this.ready;
    const id = this.nextId++;
    const promise = new Promise((resolve, reject) => this.pending.set(id, { resolve, reject }));
    this.socket.send(JSON.stringify({ id, method, params }));
    return promise;
  }

  close() {
    this.socket.close();
  }
}

const auditExpression = `(() => {
  const findings = [];
  const add = (severity, category, message, selector = null, metrics = null) => findings.push({ severity, category, message, selector, metrics });
  const visible = (element) => {
    if (!element) return false;
    const style = getComputedStyle(element);
    const box = element.getBoundingClientRect();
    return style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity) > 0 && box.width > 0 && box.height > 0;
  };
  const rect = (element) => {
    const value = element.getBoundingClientRect();
    return { left: value.left, top: value.top, right: value.right, bottom: value.bottom, width: value.width, height: value.height };
  };
  const descriptor = (element) => element.tagName.toLowerCase() + (element.id ? '#' + element.id : '') + (element.classList.length ? '.' + [...element.classList].join('.') : '');
  const intersects = (a, b) => a.left < b.right - 1 && a.right > b.left + 1 && a.top < b.bottom - 1 && a.bottom > b.top + 1;
  const withinViewportX = (box) => box.left >= -1 && box.right <= innerWidth + 1;

  const viewportMeta = document.querySelector('meta[name="viewport"]')?.getAttribute('content') ?? '';
  if (!/width\s*=\s*device-width/i.test(viewportMeta)) add('high', 'viewport', 'Viewport meta tag does not declare width=device-width', 'meta[name="viewport"]', { content: viewportMeta });

  const pageWidth = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
  const overflowPixels = Math.max(0, pageWidth - innerWidth);
  const overflowElements = overflowPixels > 1 ? [...document.querySelectorAll('body *')]
    .filter(visible)
    .map((element) => ({ element: descriptor(element), ...rect(element) }))
    .filter((box) => box.left < -1 || box.right > innerWidth + 1)
    .sort((a, b) => (b.right - innerWidth) - (a.right - innerWidth))
    .slice(0, 15) : [];
  if (overflowPixels > 1) add('high', 'overflow', 'Page has horizontal overflow', 'html', { pageWidth, viewportWidth: innerWidth, overflowPixels, overflowElements });

  const header = document.querySelector('.site-header');
  if (!header || !visible(header)) add('high', 'header', 'Mobile header is missing or hidden', '.site-header');
  else {
    const box = rect(header);
    if (!withinViewportX(box)) add('high', 'header', 'Header exceeds horizontal viewport bounds', '.site-header', box);
    if (getComputedStyle(header).position !== 'fixed') add('medium', 'header', 'Header is not fixed on mobile', '.site-header', { position: getComputedStyle(header).position });
    const brand = header.querySelector('.brand');
    const menuSummary = header.querySelector('.mobile-menu summary');
    if (!visible(menuSummary)) add('high', 'navigation', 'Mobile menu trigger is hidden', '.mobile-menu summary');
    if (visible(document.querySelector('.desktop-nav'))) add('high', 'navigation', 'Desktop navigation remains visible at mobile width', '.desktop-nav');
    if (visible(brand) && visible(menuSummary) && intersects(rect(brand), rect(menuSummary))) add('high', 'header', 'Brand and mobile menu trigger overlap', '.site-header', { brand: rect(brand), menu: rect(menuSummary) });
  }

  for (const media of document.querySelectorAll('img, video, iframe, svg')) {
    if (!visible(media)) continue;
    const box = rect(media);
    if (!withinViewportX(box)) add('high', 'media', 'Visible media exceeds horizontal viewport bounds', descriptor(media), box);
  }

  const videoShell = document.querySelector('.story-video-shell');
  if (videoShell && visible(videoShell)) {
    const box = rect(videoShell);
    const ratio = box.width / box.height;
    if (Math.abs(ratio - 16 / 9) > 0.02) add('medium', 'video', 'Homepage ambassador video does not render at 16:9', '.story-video-shell', { ratio, box });
    const video = videoShell.querySelector('video');
    if (!video?.controls) add('high', 'video', 'Homepage video controls are missing', '.story-video video');
    if (video?.autoplay) add('high', 'video', 'Homepage video autoplays on mobile', '.story-video video');
  }

  const grids = ['.service-grid-six', '.sector-card-grid', '.area-card-grid', '.category-card-grid', '.editorial-card-grid'];
  const gridMetrics = {};
  for (const selector of grids) {
    const grid = document.querySelector(selector);
    if (!grid || !visible(grid)) continue;
    const cards = [...grid.children].filter(visible);
    const boxes = cards.map(rect);
    const heights = boxes.map((box) => Math.round(box.height * 10) / 10);
    gridMetrics[selector] = { count: boxes.length, minHeight: heights.length ? Math.min(...heights) : 0, maxHeight: heights.length ? Math.max(...heights) : 0 };
    for (let i = 0; i < boxes.length; i += 1) for (let j = i + 1; j < boxes.length; j += 1) {
      if (intersects(boxes[i], boxes[j])) add('high', 'cards', 'Cards overlap', selector, { first: boxes[i], second: boxes[j] });
    }
    for (const box of boxes) if (!withinViewportX(box)) add('high', 'cards', 'Card exceeds horizontal viewport bounds', selector, box);
  }

  for (const content of document.querySelectorAll('.service-card-copy, .sector-card-copy, .area-card-copy, .category-card > div')) {
    if (!visible(content)) continue;
    const parent = content.closest('.service-card, .sector-card, .area-card-grid > a, .category-card');
    if (!parent) continue;
    const contentBox = rect(content);
    const parentBox = rect(parent);
    if (contentBox.left < parentBox.left - 1 || contentBox.right > parentBox.right + 1 || contentBox.top < parentBox.top - 1 || contentBox.bottom > parentBox.bottom + 1) add('high', 'cards', 'Card content escapes its card', descriptor(content), { content: contentBox, card: parentBox });
  }

  for (const control of document.querySelectorAll('input, textarea, select, button')) {
    if (!visible(control)) continue;
    if (control.matches('.form-honeypot, [aria-hidden="true"], [tabindex="-1"]')) continue;
    const box = rect(control);
    if (!withinViewportX(box)) add('high', 'forms', 'Form control exceeds horizontal viewport bounds', descriptor(control), box);
    const fontSize = Number.parseFloat(getComputedStyle(control).fontSize);
    if ((control.matches('input:not([type="checkbox"]):not([type="radio"]), textarea, select')) && fontSize < 16) add('medium', 'forms', 'Text-entry control uses a font below 16px and may trigger mobile zoom', descriptor(control), { fontSize, box });
    if (control.matches('button, input[type="submit"]') && (box.width < 24 || box.height < 24)) add('medium', 'touch-target', 'Button target is smaller than 24px in one dimension', descriptor(control), box);
  }

  for (const target of document.querySelectorAll('a.button, .mobile-menu summary')) {
    if (!visible(target)) continue;
    const box = rect(target);
    if (box.width < 24 || box.height < 24) add('medium', 'touch-target', 'Primary interactive target is smaller than 24px in one dimension', descriptor(target), box);
  }

  for (const heading of document.querySelectorAll('h1, h2, h3')) {
    if (!visible(heading)) continue;
    const box = rect(heading);
    if (!withinViewportX(box)) add('high', 'typography', 'Heading exceeds horizontal viewport bounds', descriptor(heading), box);
  }

  const footerColumns = [...document.querySelectorAll('.footer-grid > div')].filter(visible).map(rect);
  for (let i = 0; i < footerColumns.length; i += 1) for (let j = i + 1; j < footerColumns.length; j += 1) {
    if (intersects(footerColumns[i], footerColumns[j])) add('high', 'footer', 'Footer columns overlap', '.footer-grid', { first: footerColumns[i], second: footerColumns[j] });
  }
  for (const column of document.querySelectorAll('.footer-grid > div')) {
    if (!visible(column)) continue;
    const columnBox = rect(column);
    if (!withinViewportX(columnBox)) add('high', 'footer', 'Footer column exceeds horizontal viewport bounds', descriptor(column), columnBox);
    for (const child of column.querySelectorAll('a, p, span, small, strong')) {
      if (!visible(child)) continue;
      const childBox = rect(child);
      if (childBox.left < columnBox.left - 1 || childBox.right > columnBox.right + 1) add('high', 'footer', 'Footer content escapes its column', descriptor(child), { child: childBox, column: columnBox });
    }
  }
  const footerLinks = document.querySelector('.footer-legal-links');
  let footerCenterDelta = null;
  if (!footerLinks || !visible(footerLinks)) add('high', 'footer', 'Footer utility links are missing', '.footer-legal-links');
  else {
    const box = rect(footerLinks);
    footerCenterDelta = Math.abs((box.left + box.right) / 2 - innerWidth / 2);
    if (footerCenterDelta > 2) add('medium', 'footer', 'Footer utility links are not centered', '.footer-legal-links', { footerCenterDelta, box });
  }

  const fixedElements = [...document.querySelectorAll('body *')].filter((element) => visible(element) && getComputedStyle(element).position === 'fixed');
  const floatingWhatsapp = document.querySelector('.floating-whatsapp');
  if (innerWidth <= 900 && innerHeight <= 620 && visible(floatingWhatsapp)) add('medium', 'fixed-elements', 'Floating WhatsApp control remains visible on a short mobile-landscape viewport', '.floating-whatsapp', rect(floatingWhatsapp));
  for (let i = 0; i < fixedElements.length; i += 1) for (let j = i + 1; j < fixedElements.length; j += 1) {
    if (intersects(rect(fixedElements[i]), rect(fixedElements[j]))) add('medium', 'fixed-elements', 'Fixed-position elements overlap', descriptor(fixedElements[i]) + ' / ' + descriptor(fixedElements[j]), { first: rect(fixedElements[i]), second: rect(fixedElements[j]) });
  }

  return {
    title: document.title,
    url: location.href,
    viewport: { width: innerWidth, height: innerHeight, devicePixelRatio },
    viewportMeta,
    pageWidth,
    pageHeight: Math.max(document.documentElement.scrollHeight, document.body.scrollHeight),
    overflowPixels,
    overflowElements,
    footerCenterDelta,
    gridMetrics,
    findings,
  };
})()`;

const menuExpression = `(() => {
  const details = document.querySelector('.mobile-menu');
  const summary = details?.querySelector('summary');
  if (!details || !summary) return { findings: [{ severity: 'high', category: 'navigation', message: 'Mobile menu markup is missing' }] };
  summary.click();
  const nav = details.querySelector('nav');
  const style = nav ? getComputedStyle(nav) : null;
  const box = nav?.getBoundingClientRect();
  const findings = [];
  if (!details.open) findings.push({ severity: 'high', category: 'navigation', message: 'Mobile menu does not open' });
  if (!nav || style.display === 'none' || style.visibility === 'hidden' || !box || box.width <= 0 || box.height <= 0) findings.push({ severity: 'high', category: 'navigation', message: 'Opened mobile navigation is not visible' });
  if (box && (box.left < -8 || box.right > innerWidth + 8)) findings.push({ severity: 'high', category: 'navigation', message: 'Opened mobile navigation exceeds horizontal viewport bounds', metrics: { left: box.left, right: box.right, width: box.width, viewportWidth: innerWidth } });
  if (box && (box.top < -1 || box.top > innerHeight - 24)) findings.push({ severity: 'high', category: 'navigation', message: 'Opened mobile navigation starts outside the usable viewport', metrics: { top: box.top, viewportHeight: innerHeight } });
  const linkCount = nav?.querySelectorAll('a').length ?? 0;
  if (linkCount < 10) findings.push({ severity: 'medium', category: 'navigation', message: 'Mobile navigation exposes unexpectedly few links', metrics: { linkCount } });
  return { open: details.open, linkCount, nav: box ? { left: box.left, top: box.top, right: box.right, bottom: box.bottom, width: box.width, height: box.height, scrollHeight: nav.scrollHeight, overflowY: style.overflowY } : null, findings };
})()`;

async function waitForPage() {
  await delay(420);
}

async function capture(client, filename) {
  const shot = await client.send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
  writeFileSync(path.join(outputDir, filename), Buffer.from(shot.data, "base64"));
}

async function main() {
  const sitemapResponse = await fetch(new URL("/sitemap.xml", baseUrl));
  if (!sitemapResponse.ok) throw new Error(`Sitemap returned ${sitemapResponse.status}`);
  const sitemap = await sitemapResponse.text();
  const routes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname || "/");
  const uniqueRoutes = [...new Set(routes)];
  if (!uniqueRoutes.length) throw new Error("No routes found in sitemap");

  const statusChecks = [];
  for (let index = 0; index < uniqueRoutes.length; index += 10) {
    const batch = uniqueRoutes.slice(index, index + 10);
    const rows = await Promise.all(batch.map(async (route) => {
      const response = await fetch(new URL(route, baseUrl), { redirect: "manual" });
      await response.body?.cancel();
      return { route, status: response.status, contentType: response.headers.get("content-type") ?? "" };
    }));
    statusChecks.push(...rows);
  }

  const targets = await getJson(`http://127.0.0.1:${debuggingPort}/json/list`);
  const pageTarget = targets.find((target) => target.type === "page");
  if (!pageTarget) throw new Error("No Chromium page target found");
  const client = new CdpClient(pageTarget.webSocketDebuggerUrl);
  await client.send("Page.enable");
  await client.send("Runtime.enable");
  await client.send("Log.enable");
  await client.send("Emulation.setTouchEmulationEnabled", { enabled: true, maxTouchPoints: 5 });

  const results = [];
  for (const viewport of viewports) {
    console.log(`Starting ${viewport.name} (${viewport.width}x${viewport.height}) across ${uniqueRoutes.length} routes...`);
    await client.send("Emulation.setDeviceMetricsOverride", {
      width: viewport.width,
      height: viewport.height,
      deviceScaleFactor: viewport.deviceScaleFactor,
      mobile: false,
      screenWidth: viewport.width,
      screenHeight: viewport.height,
    });

    for (let routeIndex = 0; routeIndex < uniqueRoutes.length; routeIndex += 1) {
      const route = uniqueRoutes[routeIndex];
      if (routeIndex % 10 === 0) console.log(`${viewport.name}: route ${routeIndex + 1}/${uniqueRoutes.length} (${route})`);
      const eventStart = client.events.length;
      await client.send("Page.navigate", { url: new URL(route, baseUrl).href });
      await waitForPage(client);
      const evaluated = await client.send("Runtime.evaluate", { expression: auditExpression, returnByValue: true });
      const value = evaluated.result.value;
      const browserErrors = client.events.slice(eventStart)
        .filter((event) => event.method === "Runtime.exceptionThrown" || (event.method === "Log.entryAdded" && event.params?.entry?.level === "error"))
        .map((event) => event.params?.exceptionDetails?.text ?? event.params?.entry?.text ?? event.method);
      for (const error of [...new Set(browserErrors)]) value.findings.push({ severity: "high", category: "browser", message: `Browser error: ${error}` });

      let menu = null;
      if (route === "/") {
        const menuResult = await client.send("Runtime.evaluate", { expression: menuExpression, returnByValue: true });
        menu = menuResult.result.value;
        value.findings.push(...menu.findings);
      }

      results.push({ route, viewportName: viewport.name, browserErrors, menu, ...value });

      if (route === "/" && viewport.name === "iphone-standard") {
        await client.send("Runtime.evaluate", { expression: "window.scrollTo(0, 0); document.querySelector('.mobile-menu')?.removeAttribute('open')", returnByValue: true });
        await delay(150);
        await capture(client, "home-390-top.png");
        await client.send("Runtime.evaluate", { expression: "document.querySelector('.mobile-menu summary')?.click()", returnByValue: true });
        await delay(150);
        await capture(client, "home-390-menu-open.png");
        await client.send("Runtime.evaluate", { expression: "document.querySelector('.mobile-menu')?.removeAttribute('open'); document.getElementById('about-video')?.scrollIntoView({ block: 'center' })", returnByValue: true });
        await delay(250);
        await capture(client, "home-390-about-video.png");
        await client.send("Runtime.evaluate", { expression: "document.querySelector('.contact-form')?.scrollIntoView({ block: 'center' })", returnByValue: true });
        await delay(250);
        await capture(client, "home-390-contact-form.png");
        await client.send("Runtime.evaluate", { expression: "document.querySelector('.footer-bottom')?.scrollIntoView({ block: 'end' })", returnByValue: true });
        await delay(250);
        await capture(client, "home-390-footer.png");
      }

      if (route === "/" && viewport.name === "small-phone") {
        await client.send("Runtime.evaluate", { expression: "window.scrollTo(0, 0); document.querySelector('.mobile-menu')?.removeAttribute('open')", returnByValue: true });
        await delay(150);
        await capture(client, "home-320-top.png");
      }
      if (route === "/" && viewport.name === "mobile-landscape") {
        await client.send("Runtime.evaluate", { expression: "window.scrollTo(0, 0); document.querySelector('.mobile-menu')?.removeAttribute('open')", returnByValue: true });
        await delay(150);
        await capture(client, "home-844x390-top.png");
      }
      if (route === "/services/curtain-blind-cleaning" && viewport.name === "iphone-standard") {
        await client.send("Runtime.evaluate", { expression: "window.scrollTo(0, 0); document.querySelector('.mobile-menu')?.removeAttribute('open')", returnByValue: true });
        await delay(150);
        await capture(client, "service-390-top.png");
      }
    }
    console.log(`Completed ${viewport.name}: ${results.filter((row) => row.viewportName === viewport.name).length} routes.`);
  }

  const statusFailures = statusChecks.filter((row) => row.status < 200 || row.status >= 400);
  const findingRows = results.flatMap((row) => row.findings.map((finding) => ({ route: row.route, viewportName: row.viewportName, ...finding })));
  const severityCounts = findingRows.reduce((counts, finding) => {
    counts[finding.severity] = (counts[finding.severity] ?? 0) + 1;
    return counts;
  }, {});
  const categoryCounts = findingRows.reduce((counts, finding) => {
    counts[finding.category] = (counts[finding.category] ?? 0) + 1;
    return counts;
  }, {});
  const affectedCombinations = results.filter((row) => row.findings.length).length;
  const summary = {
    generatedAt: new Date().toISOString(),
    baseUrl,
    routeCount: uniqueRoutes.length,
    viewportCount: viewports.length,
    combinationCount: results.length,
    statusFailures: statusFailures.length,
    affectedCombinations,
    totalFindings: findingRows.length,
    severityCounts,
    categoryCounts,
  };

  const output = { summary, viewports, routes: uniqueRoutes, statusChecks, results };
  writeFileSync(path.join(outputDir, "mobile-audit-results.json"), `${JSON.stringify(output, null, 2)}\n`);
  const csvRows = ["viewport,route,severity,category,message,selector", ...findingRows.map((row) => [row.viewportName, row.route, row.severity, row.category, row.message, row.selector ?? ""].map((value) => `"${String(value).replaceAll('"', '""')}"`).join(","))];
  writeFileSync(path.join(outputDir, "mobile-audit-findings.csv"), `${csvRows.join("\n")}\n`);

  console.log(JSON.stringify(summary, null, 2));
  for (const row of statusFailures) console.log(`STATUS ${row.status} ${row.route}`);
  const uniqueFindingLabels = [...new Set(findingRows.map((row) => `${row.severity} | ${row.category} | ${row.message}`))];
  for (const label of uniqueFindingLabels) console.log(label);
  client.close();
}

try {
  await main();
} finally {
  chrome.kill("SIGTERM");
}
