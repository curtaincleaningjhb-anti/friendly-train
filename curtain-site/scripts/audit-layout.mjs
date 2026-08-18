import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import WebSocket from "ws";

const baseUrl = process.env.AUDIT_BASE_URL ?? "http://127.0.0.1:3000";
const outputDir = path.resolve(process.env.AUDIT_OUTPUT_DIR ?? "visual-audit");
const debuggingPort = 9333;
mkdirSync(outputDir, { recursive: true });

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

async function getJson(url, attempts = 40) {
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

function slugFor(route) {
  return route === "/" ? "home" : route.slice(1).replaceAll("/", "-");
}

const layoutExpression = `(() => {
  const visible = (element) => {
    const style = getComputedStyle(element);
    const rect = element.getBoundingClientRect();
    return style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity) > 0 && rect.width > 0 && rect.height > 0;
  };
  const rect = (element) => {
    const value = element.getBoundingClientRect();
    return { x: value.x, y: value.y, left: value.left, top: value.top, right: value.right, bottom: value.bottom, width: value.width, height: value.height };
  };
  const intersects = (a, b) => a.left < b.right - 1 && a.right > b.left + 1 && a.top < b.bottom - 1 && a.bottom > b.top + 1;
  const findings = [];
  const header = document.querySelector('.site-header');
  if (!header || !visible(header)) findings.push('Header is missing or hidden');
  else {
    const value = rect(header);
    if (value.left < -1 || value.right > innerWidth + 1 || value.top < -1 || value.bottom > innerHeight + 1) findings.push('Header exceeds viewport bounds');
    if (getComputedStyle(header).position !== 'fixed') findings.push('Header is not fixed');
  }
  const gridSelectors = ['.service-grid-six', '.sector-card-grid', '.area-card-grid', '.category-card-grid', '.editorial-card-grid'];
  const gridMetrics = {};
  for (const selector of gridSelectors) {
    const grid = document.querySelector(selector);
    if (!grid || !visible(grid)) continue;
    const cards = [...grid.children].filter(visible);
    const values = cards.map(rect);
    const heights = values.map((value) => Math.round(value.height * 10) / 10);
    gridMetrics[selector] = { count: cards.length, heights, min: Math.min(...heights), max: Math.max(...heights) };
    if (heights.length > 1 && Math.max(...heights) - Math.min(...heights) > 2) findings.push(selector + ' cards differ in height by more than 2px');
    for (let i = 0; i < values.length; i += 1) for (let j = i + 1; j < values.length; j += 1) {
      if (intersects(values[i], values[j])) findings.push(selector + ' cards overlap');
    }
  }
  const contentSelectors = ['.service-card-copy', '.sector-card-copy', '.area-card-copy', '.category-card > div'];
  for (const selector of contentSelectors) for (const content of document.querySelectorAll(selector)) {
    if (!visible(content)) continue;
    const parent = content.closest('.service-card, .sector-card, .area-card-grid > a, .category-card');
    if (!parent) continue;
    const contentRect = rect(content);
    const parentRect = rect(parent);
    if (contentRect.left < parentRect.left - 1 || contentRect.right > parentRect.right + 1 || contentRect.top < parentRect.top - 1 || contentRect.bottom > parentRect.bottom + 1) findings.push(selector + ' escapes its card');
  }
  const footerColumns = [...document.querySelectorAll('.footer-grid > div')].filter(visible).map(rect);
  for (let i = 0; i < footerColumns.length; i += 1) for (let j = i + 1; j < footerColumns.length; j += 1) {
    if (intersects(footerColumns[i], footerColumns[j])) findings.push('Footer columns overlap');
  }
  for (const column of document.querySelectorAll('.footer-grid > div')) {
    if (!visible(column)) continue;
    const columnRect = rect(column);
    for (const child of column.querySelectorAll('a, p, span, small, strong')) {
      if (!visible(child)) continue;
      const childRect = rect(child);
      if (childRect.left < columnRect.left - 1 || childRect.right > columnRect.right + 1) findings.push('Footer content escapes its column');
    }
  }
  const footerLinks = document.querySelector('.footer-legal-links');
  let footerCenterDelta = null;
  if (!footerLinks || !visible(footerLinks)) findings.push('Centered footer utility links are missing');
  else footerCenterDelta = Math.abs((rect(footerLinks).left + rect(footerLinks).right) / 2 - innerWidth / 2);
  if (footerCenterDelta !== null && footerCenterDelta > 2) findings.push('Footer utility links are not centered');
  const pageWidth = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
  const overflowElements = pageWidth > innerWidth + 1 ? [...document.querySelectorAll('body *')].filter(visible).map((element) => ({
    element: element.tagName.toLowerCase() + (element.id ? '#' + element.id : '') + (element.classList.length ? '.' + [...element.classList].join('.') : ''),
    ...rect(element),
  })).filter((value) => value.left < -1 || value.right > innerWidth + 1).sort((a, b) => (b.right - b.left) - (a.right - a.left)).slice(0, 12) : [];
  if (pageWidth > innerWidth + 1) findings.push('Page has horizontal overflow of ' + (pageWidth - innerWidth) + 'px');
  return { title: document.title, url: location.href, viewport: { width: innerWidth, height: innerHeight }, pageWidth, footerCenterDelta, gridMetrics, overflowElements, findings };
})()`;

async function main() {
  const targets = await getJson(`http://127.0.0.1:${debuggingPort}/json/list`);
  const pageTarget = targets.find((target) => target.type === "page");
  if (!pageTarget) throw new Error("No Chromium page target found");
  const client = new CdpClient(pageTarget.webSocketDebuggerUrl);
  await client.send("Page.enable");
  await client.send("Runtime.enable");
  await client.send("Log.enable");

  const routes = ["/", "/services", "/sectors", "/areas", "/guides", "/services/curtain-blind-cleaning", "/advice/curtain-cleaning-prices"];
  const viewports = [
    { name: "wide", width: 1872, height: 552 },
    { name: "desktop", width: 1440, height: 1000 },
    { name: "tablet", width: 1024, height: 900 },
    { name: "mobile", width: 390, height: 844 },
  ];
  const results = [];

  for (const viewport of viewports) {
    await client.send("Emulation.setDeviceMetricsOverride", { width: viewport.width, height: viewport.height, deviceScaleFactor: 1, mobile: false });
    for (const route of routes) {
      const eventStart = client.events.length;
      await client.send("Page.navigate", { url: new URL(route, baseUrl).href });
      await delay(850);
      const result = await client.send("Runtime.evaluate", { expression: layoutExpression, returnByValue: true });
      const browserErrors = client.events.slice(eventStart).filter((event) => event.method === "Runtime.exceptionThrown" || (event.method === "Log.entryAdded" && event.params?.entry?.level === "error")).map((event) => event.params?.exceptionDetails?.text ?? event.params?.entry?.text ?? event.method);
      const value = result.result.value;
      if (browserErrors.length) value.findings.push(`Browser errors: ${browserErrors.join(" | ")}`);
      results.push({ route, viewportName: viewport.name, browserErrors, ...value });

      if ((["/", "/services", "/sectors", "/areas"].includes(route) && ["desktop", "mobile"].includes(viewport.name)) || (route === "/" && viewport.name === "wide")) {
        await client.send("Runtime.evaluate", { expression: "window.scrollTo(0, 0)", returnByValue: true });
        await delay(150);
        const top = await client.send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
        writeFileSync(path.join(outputDir, `${slugFor(route)}-${viewport.name}-top.png`), Buffer.from(top.data, "base64"));
        if (route === "/") {
          for (const section of ["services", "sectors", "areas"]) {
            await client.send("Runtime.evaluate", { expression: `document.getElementById('${section}')?.scrollIntoView({ block: 'start' })`, returnByValue: true });
            await delay(750);
            await client.send("Runtime.evaluate", { expression: `document.getElementById('${section}')?.scrollIntoView({ block: 'start' })`, returnByValue: true });
            await delay(250);
            const sectionShot = await client.send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
            writeFileSync(path.join(outputDir, `home-${viewport.name}-${section}.png`), Buffer.from(sectionShot.data, "base64"));
          }
        }
        await client.send("Runtime.evaluate", { expression: "window.scrollTo(0, document.documentElement.scrollHeight)", returnByValue: true });
        await delay(900);
        await client.send("Runtime.evaluate", { expression: "document.querySelector('.footer-bottom')?.scrollIntoView({ block: 'end' })", returnByValue: true });
        await delay(350);
        const footer = await client.send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
        writeFileSync(path.join(outputDir, `${slugFor(route)}-${viewport.name}-footer.png`), Buffer.from(footer.data, "base64"));
      }
    }
  }

  writeFileSync(path.join(outputDir, "layout-audit-results.json"), `${JSON.stringify(results, null, 2)}\n`);
  const failures = results.filter((result) => result.findings.length);
  console.log(`Audited ${results.length} route/viewport combinations; ${failures.length} reported findings.`);
  for (const failure of failures) console.log(`${failure.viewportName} ${failure.route}: ${failure.findings.join("; ")}`);
  client.close();
  if (failures.length) process.exitCode = 1;
}

try {
  await main();
} finally {
  chrome.kill("SIGTERM");
}
