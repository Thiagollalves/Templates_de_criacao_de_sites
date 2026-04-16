const fs = require("fs");
const path = require("path");
const https = require("https");

const rootDir = path.resolve(__dirname, "..");
const outDir = path.join(rootDir, "output", "magalu");

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function decodeEntities(input) {
  if (!input) return "";
  return input
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'");
}

function stripTags(html) {
  return decodeEntities(
    String(html)
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
  );
}

function uniqBy(items, keyFn) {
  const seen = new Set();
  const out = [];
  for (const item of items) {
    const key = keyFn(item);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(item);
  }
  return out;
}

function normalizeUrl(url) {
  try {
    const parsed = new URL(url);
    parsed.hash = "";
    // Keep query string because Magalu uses it for paging/filters; but normalize trivial tracking.
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"].forEach((k) =>
      parsed.searchParams.delete(k)
    );
    return parsed.toString();
  } catch {
    return url;
  }
}

function resolveHref(href, baseUrl) {
  if (!href) return null;
  const trimmed = decodeEntities(href).trim();
  if (!trimmed) return null;
  if (
    trimmed.startsWith("javascript:") ||
    trimmed.startsWith("mailto:") ||
    trimmed.startsWith("tel:") ||
    trimmed.startsWith("#")
  ) {
    return null;
  }
  try {
    return normalizeUrl(new URL(trimmed, baseUrl).toString());
  } catch {
    return null;
  }
}

function extractTitle(html) {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return m ? stripTags(m[1]) : "";
}

function extractH1(html) {
  const m = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
  return m ? stripTags(m[1]) : "";
}

function extractAnchors(html, baseUrl) {
  const out = [];
  const re = /<a\b[^>]*href\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s>]+))[^>]*>([\s\S]*?)<\/a>/gi;
  let match;
  while ((match = re.exec(html))) {
    const rawHref = match[1] || match[2] || match[3] || "";
    const resolved = resolveHref(rawHref, baseUrl);
    if (!resolved) continue;
    const text = stripTags(match[4]);
    out.push({ href: resolved, text });
    if (out.length > 500) break; // safety
  }
  return uniqBy(out, (a) => `${a.href}::${a.text}`); // allow same href with different labels? keep one per pair
}

function extractNotableSnippets(text) {
  const snippets = {};

  // Prefer the company CNPJ shown in the footer (Magazine Luiza S/A - CNPJ: ...).
  const cnpjMagalu = text.match(/Magazine\s+Luiza\s+S\/A\s*-\s*CNPJ:\s*([0-9./-]+)/i);
  if (cnpjMagalu) {
    snippets.cnpj = cnpjMagalu[1];
  } else {
    const anyCnpj = text.match(/\b\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}\b/);
    if (anyCnpj) snippets.cnpj = anyCnpj[0];
  }

  const phone = text.match(/\b0?800\s*\d{3}\s*\d{4}\b/);
  if (phone) snippets.phone = phone[0].replace(/\s+/g, " ").trim();

  const cep = text.match(/\bCEP\s*\d{2}\.\d{3}-\d{3}\b/i);
  if (cep) snippets.cep = cep[0].replace(/\s+/g, " ").trim();

  // Capture the footer address in a stable-ish way.
  const footerAddress = text.match(
    /Endere[cç]o:\s*([^®]{10,300}?\bCEP\s*\d{2}\.\d{3}-\d{3})/i
  );
  if (footerAddress) {
    snippets.address = `Endereço: ${footerAddress[1].replace(/\s+/g, " ").trim()}`;
  } else {
    const address = text.match(/\bEndere[cç]o:\s*[^]{10,200}?\bCEP\s*\d{2}\.\d{3}-\d{3}\b/i);
    if (address) snippets.address = address[0].replace(/\s+/g, " ").trim();
  }

  const hours = text.match(/\b(?:Seg\.|Segunda)[^]{0,60}?\b\d{1,2}h\s*(?:a|às|as)\s*\d{1,2}h\b/i);
  if (hours) snippets.hours = hours[0].replace(/\s+/g, " ").trim();

  return snippets;
}

async function fetchText(url, options = {}) {
  const timeoutMs = options.timeoutMs ?? 20000;
  const userAgent =
    options.userAgent ??
    "Mozilla/5.0 (compatible; CodexTemplateBot/1.0; +https://example.invalid)";

  // Prefer global fetch when available (Node 18+). Fall back to https for older Node.
  if (typeof fetch === "function") {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const res = await fetch(url, {
        headers: {
          "user-agent": userAgent,
          accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "accept-language": "pt-BR,pt;q=0.9,en;q=0.7",
        },
        redirect: "follow",
        signal: controller.signal,
      });
      const text = await res.text();
      return { status: res.status, text };
    } finally {
      clearTimeout(timer);
    }
  }

  return new Promise((resolve, reject) => {
    const req = https.request(
      url,
      {
        method: "GET",
        headers: {
          "user-agent": userAgent,
          accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "accept-language": "pt-BR,pt;q=0.9,en;q=0.7",
        },
      },
      (res) => {
        const chunks = [];
        res.on("data", (chunk) => chunks.push(chunk));
        res.on("end", () => {
          resolve({ status: res.statusCode || 0, text: Buffer.concat(chunks).toString("utf8") });
        });
      }
    );
    req.setTimeout(timeoutMs, () => {
      req.destroy(new Error(`Timeout ao buscar ${url}`));
    });
    req.on("error", reject);
    req.end();
  });
}

function parseArgs(argv) {
  const args = {
    maxPages: 25,
    maxProductsPerCategory: 5,
    delayMs: 800,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    const next = argv[i + 1];
    if (token === "--maxPages" && next) args.maxPages = Number(next);
    if (token === "--maxProductsPerCategory" && next)
      args.maxProductsPerCategory = Number(next);
    if (token === "--delayMs" && next) args.delayMs = Number(next);
  }

  if (!Number.isFinite(args.maxPages) || args.maxPages <= 0) args.maxPages = 25;
  if (!Number.isFinite(args.maxProductsPerCategory) || args.maxProductsPerCategory <= 0)
    args.maxProductsPerCategory = 5;
  if (!Number.isFinite(args.delayMs) || args.delayMs < 0) args.delayMs = 800;

  return args;
}

function isCategoryUrl(url) {
  return (
    url.includes("www.magazineluiza.com.br/") &&
    /\/l\/[a-z]{2}\/?(\?|$)/i.test(url) // pattern: /<slug>/l/<dept>/
  );
}

function extractProductLinks(anchors) {
  // Product pages have /p/<id>/... pattern.
  return anchors
    .map((a) => a.href)
    .filter((href) => href.includes("www.magazineluiza.com.br/") && /\/p\//i.test(href))
    .map((href) => normalizeUrl(href));
}

function extractProductFields(text) {
  const fields = {};

  const codigo = text.match(/\bC[oó]digo\s+([a-z0-9]{6,})\b/i);
  if (codigo) fields.codigo = codigo[1];

  const prices = text.match(/R\$\s*\d{1,3}(?:\.\d{3})*,\d{2}/g);
  if (prices) fields.prices = uniqBy(prices, (p) => p).slice(0, 8);

  const pix = text.match(/\bno\s+Pix\b[\s\S]{0,40}\bdesconto\b/i);
  if (pix) fields.pixSnippet = pix[0].replace(/\s+/g, " ").trim();

  const rating = text.match(/\b\d\.\d\b\s*\(\d+\)/);
  if (rating) fields.ratingSnippet = rating[0].replace(/\s+/g, " ").trim();

  return fields;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  ensureDir(outDir);

  const generatedAt = new Date().toISOString();

  // Seed list (~20 pages total after expanding to product samples).
  const seeds = [
    "https://www.magazineluiza.com.br/",
    "https://www.magazineluiza.com.br/celulares-e-smartphones/l/te/",
    "https://www.magazineluiza.com.br/tv-e-video/l/et/",
    "https://www.magazineluiza.com.br/eletrodomesticos/l/ed/",
    "https://www.magazineluiza.com.br/moveis/l/mo/",
    "https://especiais.magazineluiza.com.br/seguranca/",
    "https://especiais.magazineluiza.com.br/seguranca/sites-oficiais/",
    "https://www.magazineluiza.com.br/busca/fale%2Bconosco/",
  ];

  const queue = [...seeds.map(normalizeUrl)];
  const visited = new Set();
  const pages = [];
  const productSamples = [];

  while (queue.length && pages.length < args.maxPages) {
    const url = queue.shift();
    const normalized = normalizeUrl(url);
    if (visited.has(normalized)) continue;
    visited.add(normalized);

    // Be polite and reduce risk of throttling.
    if (pages.length) {
      // eslint-disable-next-line no-await-in-loop
      await sleep(args.delayMs);
    }

    let status = 0;
    let html = "";
    try {
      // eslint-disable-next-line no-await-in-loop
      const res = await fetchText(normalized, { timeoutMs: 25000 });
      status = res.status;
      html = res.text || "";
    } catch (err) {
      pages.push({
        url: normalized,
        status,
        fetchedAt: generatedAt,
        error: String(err && err.message ? err.message : err),
      });
      continue;
    }

    const title = extractTitle(html);
    const h1 = extractH1(html);
    const anchors = extractAnchors(html, normalized);
    const text = stripTags(html);
    const notable = extractNotableSnippets(text);

    pages.push({
      url: normalized,
      status,
      fetchedAt: generatedAt,
      title,
      h1,
      notable,
      // Keep the first links to represent "main nav" & CTAs in a stable-ish way.
      links: anchors.slice(0, 80),
    });

    // Expand: for category pages, sample products (but do not crawl endlessly).
    if (isCategoryUrl(normalized)) {
      const productLinks = uniqBy(extractProductLinks(anchors), (u) => u).slice(
        0,
        args.maxProductsPerCategory
      );
      for (const link of productLinks) {
        if (pages.length + productSamples.length >= args.maxPages) break;
        if (visited.has(link)) continue;
        queue.push(link);
      }
    }

    // Capture product sample fields.
    if (/www\.magazineluiza\.com\.br\/.+\/p\//i.test(normalized)) {
      productSamples.push({
        url: normalized,
        title,
        h1,
        fields: extractProductFields(text),
      });
    }
  }

  const inventory = {
    generatedAt,
    args,
    seeds,
    visitedCount: visited.size,
    pages,
    productSamples,
  };

  const urlsPath = path.join(outDir, "urls.json");
  const inventoryPath = path.join(outDir, "inventory.json");
  const mdPath = path.join(outDir, "inventory.md");

  fs.writeFileSync(urlsPath, JSON.stringify(Array.from(visited).sort(), null, 2) + "\n");
  fs.writeFileSync(inventoryPath, JSON.stringify(inventory, null, 2) + "\n");

  const mdLines = [];
  mdLines.push(`# Inventario Magalu (snapshot)`);
  mdLines.push("");
  mdLines.push(`- Gerado em: ${generatedAt}`);
  mdLines.push(`- Total de paginas visitadas: ${pages.length}`);
  mdLines.push(`- Amostras de produto: ${productSamples.length}`);
  mdLines.push("");
  mdLines.push("## Seeds");
  mdLines.push("");
  for (const seed of seeds) mdLines.push(`- ${seed}`);
  mdLines.push("");
  mdLines.push("## Paginas (titulo / H1 / destaques)");
  mdLines.push("");
  for (const page of pages) {
    mdLines.push(`- URL: ${page.url}`);
    if (page.title) mdLines.push(`  - title: ${page.title}`);
    if (page.h1) mdLines.push(`  - h1: ${page.h1}`);
    const notableKeys = Object.keys(page.notable || {});
    if (notableKeys.length) {
      mdLines.push(`  - notable: ${notableKeys.map((k) => `${k}=${page.notable[k]}`).join(" | ")}`);
    }
  }
  mdLines.push("");
  mdLines.push("## Produtos (amostra de campos)");
  mdLines.push("");
  for (const p of productSamples.slice(0, 20)) {
    mdLines.push(`- URL: ${p.url}`);
    if (p.title) mdLines.push(`  - title: ${p.title}`);
    if (p.fields && Object.keys(p.fields).length) {
      mdLines.push(`  - fields: ${JSON.stringify(p.fields)}`);
    }
  }
  mdLines.push("");

  fs.writeFileSync(mdPath, mdLines.join("\n") + "\n");

  console.log(`Inventario gerado em: ${outDir}`);
  console.log(`- ${path.relative(rootDir, urlsPath)}`);
  console.log(`- ${path.relative(rootDir, inventoryPath)}`);
  console.log(`- ${path.relative(rootDir, mdPath)}`);
}

main().catch((err) => {
  console.error("Falha ao coletar inventario Magalu:");
  console.error(err);
  process.exit(1);
});
