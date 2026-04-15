const http = require("http");
const fs = require("fs");
const path = require("path");

const port = Number(process.env.PORT || 3000);
const rootDir = path.join(__dirname, "..", "site");

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
};

function resolveRequestPath(requestUrl) {
  const url = new URL(requestUrl, `http://127.0.0.1:${port}`);
  const requestedPath = decodeURIComponent(url.pathname);

  if (requestedPath === "/") {
    return path.join(rootDir, "index.html");
  }

  const normalizedPath = requestedPath.replace(/^\/+/, "");
  let candidate = path.join(rootDir, normalizedPath);

  if (!path.extname(candidate)) {
    const htmlCandidate = `${candidate}.html`;
    if (fs.existsSync(htmlCandidate)) {
      candidate = htmlCandidate;
    } else {
      candidate = path.join(candidate, "index.html");
    }
  }

  return candidate;
}

function sendNotFound(response) {
  response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  response.end("404 - Arquivo nao encontrado.");
}

function sendServerError(response) {
  response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
  response.end("500 - Erro ao servir o arquivo.");
}

const server = http.createServer((request, response) => {
  const candidatePath = resolveRequestPath(request.url || "/");
  const relativeCandidate = path.relative(rootDir, candidatePath);

  if (relativeCandidate.startsWith("..") || path.isAbsolute(relativeCandidate)) {
    sendNotFound(response);
    return;
  }

  fs.stat(candidatePath, (statError, stats) => {
    if (statError || !stats.isFile()) {
      sendNotFound(response);
      return;
    }

    const extension = path.extname(candidatePath).toLowerCase();
    const contentType = mimeTypes[extension] || "application/octet-stream";

    response.writeHead(200, {
      "Content-Type": contentType,
      "Cache-Control": "no-store",
    });

    const stream = fs.createReadStream(candidatePath);
    stream.on("error", () => sendServerError(response));
    stream.pipe(response);
  });
});

server.listen(port, () => {
  console.log(`Dev server running at http://localhost:${port}`);
});

process.on("SIGINT", () => {
  server.close(() => process.exit(0));
});

process.on("SIGTERM", () => {
  server.close(() => process.exit(0));
});
