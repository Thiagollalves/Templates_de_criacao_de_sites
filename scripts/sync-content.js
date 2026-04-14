const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const siteDir = path.join(rootDir, "site");
const outDir = path.join(siteDir, "content");

const copyTargets = [
  {
    from: path.join(rootDir, "docs", "facebook-marketing-api-best-practices.md"),
    to: path.join(outDir, "policies", "facebook-marketing-api-best-practices.md"),
  },
  {
    from: path.join(rootDir, "docs", "facebook-page-ownership-best-practices.md"),
    to: path.join(outDir, "policies", "facebook-page-ownership-best-practices.md"),
  },
  {
    from: path.join(rootDir, "docs", "politica-mensagens-whatsapp.md"),
    to: path.join(outDir, "policies", "politica-mensagens-whatsapp.md"),
  },
];

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function copyFile(sourcePath, destPath) {
  ensureDir(path.dirname(destPath));
  fs.copyFileSync(sourcePath, destPath);
}

function copyDir(sourceDir, destDir) {
  if (!fs.existsSync(sourceDir)) {
    return { copied: 0, missing: true };
  }

  let copied = 0;
  ensureDir(destDir);

  for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
    const sourcePath = path.join(sourceDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      const result = copyDir(sourcePath, destPath);
      copied += result.copied;
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    copyFile(sourcePath, destPath);
    copied += 1;
  }

  return { copied, missing: false };
}

function main() {
  ensureDir(outDir);

  const errors = [];

  for (const target of copyTargets) {
    if (!fs.existsSync(target.from)) {
      errors.push(`Arquivo nao encontrado: ${path.relative(rootDir, target.from)}`);
      continue;
    }
    copyFile(target.from, target.to);
  }

  const clientDocsSource = path.join(rootDir, "docs", "client-info", "docs");
  const clientDocsTarget = path.join(outDir, "client");
  const clientResult = copyDir(clientDocsSource, clientDocsTarget);
  if (clientResult.missing) {
    errors.push(`Pasta nao encontrada: ${path.relative(rootDir, clientDocsSource)}`);
  }

  if (errors.length) {
    console.error("Falha ao sincronizar conteudo:");
    errors.forEach((message) => console.error(`- ${message}`));
    process.exit(1);
  }

  console.log("Conteudo sincronizado para site/content/ com sucesso.");
}

main();

