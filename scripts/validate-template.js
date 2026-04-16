const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const siteDir = path.join(rootDir, "site");
const configPath = path.join(siteDir, "js", "site.config.js");

const errors = [];

function assert(condition, message) {
  if (!condition) {
    errors.push(message);
  }
}

function walkFiles(dir, options = {}) {
  const ignore = options.ignore || [];
  const results = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(rootDir, fullPath).replace(/\\/g, "/");

    if (ignore.some((prefix) => relativePath.startsWith(prefix))) {
      continue;
    }

    if (entry.isDirectory()) {
      results.push(...walkFiles(fullPath, options));
      continue;
    }

    results.push(fullPath);
  }

  return results;
}

function collectStringPaths(value, collector = []) {
  if (typeof value === "string") {
    collector.push(value);
    return collector;
  }

  if (Array.isArray(value)) {
    value.forEach((item) => collectStringPaths(item, collector));
    return collector;
  }

  if (value && typeof value === "object") {
    Object.values(value).forEach((item) => collectStringPaths(item, collector));
  }

  return collector;
}

assert(fs.existsSync(configPath), "Arquivo de config nao encontrado em site/js/site.config.js.");

const config = require(configPath);

const requiredGroups = [
  "seo",
  "brand",
  "theme",
  "navigation",
  "home",
  "landing",
  "pages",
  "contact",
  "social",
  "assets",
  "sections",
];

for (const group of requiredGroups) {
  assert(group in config, `Grupo obrigatorio ausente no config: ${group}.`);
}

const allowedThemes = ["editorial", "studio", "corporate", "magalu"];
const allowedFormModes = ["whatsapp", "http", "link"];

assert(
  allowedThemes.includes(config.theme),
  `Tema invalido: ${config.theme}. Use editorial, studio ou corporate.`
);

assert(
  allowedFormModes.includes(config.contact?.form?.mode),
  `Modo de formulario invalido: ${config.contact?.form?.mode}. Use whatsapp, http ou link.`
);

const expectedFiles = [
  "site/index.html",
  "site/landing.html",
  "site/pages/company.html",
  "site/pages/showcase.html",
  "site/pages/docs.html",
  "site/css/styles.css",
  "site/js/head.js",
  "site/js/template.js",
  "site/js/docs.js",
  "site/examples/marcelo-moveis/index.html",
];

for (const relativeFile of expectedFiles) {
  assert(fs.existsSync(path.join(rootDir, relativeFile)), `Arquivo esperado ausente: ${relativeFile}.`);
}

const possibleAssetPaths = collectStringPaths({
  seo: config.seo,
  assets: config.assets,
  pages: config.pages,
  home: config.home,
  landing: config.landing,
});

for (const assetPath of possibleAssetPaths) {
  if (!assetPath.startsWith("/")) {
    continue;
  }

  if (
    assetPath.startsWith("http://") ||
    assetPath.startsWith("https://") ||
    assetPath.startsWith("//")
  ) {
    continue;
  }

  const diskPath = path.join(siteDir, assetPath.replace(/^\//, "").replace(/\//g, path.sep));
  const isLikelyFile = path.extname(diskPath) !== "";
  if (isLikelyFile) {
    assert(fs.existsSync(diskPath), `Caminho referenciado no config nao existe: ${assetPath}.`);
  }
}

const activeSiteFiles = walkFiles(siteDir, { ignore: ["site/examples"] });
const legacyPattern = /Marcelo M(?:\u00F3|o)veis|marcelo\.moveis|site_marcelo_madeiras|552899/iu;

for (const filePath of activeSiteFiles) {
  const extension = path.extname(filePath).toLowerCase();
  if (![".html", ".css", ".js", ".json", ".md", ".svg", ".txt"].includes(extension)) {
    continue;
  }

  const content = fs.readFileSync(filePath, "utf8");
  assert(
    !legacyPattern.test(content),
    `Referencia legada encontrada fora da pasta de exemplo: ${path.relative(rootDir, filePath)}`
  );
}

if (errors.length) {
  console.error("Falha na validacao do template:");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log("Template validado com sucesso.");
