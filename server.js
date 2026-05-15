const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || (process.env.PORT ? "0.0.0.0" : "127.0.0.1");

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8"
};

function sendJson(response, payload, status = 200) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload, null, 2));
}

function handleApi(request, response) {
  if (request.url === "/api/health") {
    sendJson(response, {
      ok: true,
      service: "XM Knowledge Club Platform",
      version: "0.1.0"
    });
    return true;
  }

  if (request.url === "/api/qq-formula") {
    sendJson(response, {
      scale: "0-100",
      components: [
        { key: "accuracy", label: "Quiz Accuracy", weight: 50 },
        { key: "speed", label: "Speed", weight: 20 },
        { key: "consistency", label: "Subject Consistency", weight: 10 },
        { key: "trend", label: "Improvement Trend", weight: 10 },
        { key: "participation", label: "Participation Rate", weight: 10 }
      ]
    });
    return true;
  }

  return false;
}

function serveStatic(request, response) {
  const requestedPath = request.url === "/" ? "/index.html" : decodeURIComponent(request.url.split("?")[0]);
  const filePath = path.normalize(path.join(root, requestedPath));

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "Content-Type": contentTypes[path.extname(filePath)] || "text/plain; charset=utf-8"
    });
    response.end(data);
  });
}

const server = http.createServer((request, response) => {
  if (handleApi(request, response)) return;
  serveStatic(request, response);
});

server.listen(port, host, () => {
  console.log(`XM Knowledge Club prototype running at http://${host}:${port}`);
});
