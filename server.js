const http = require("http");
const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;
const CLIENT_DIR = path.join(ROOT_DIR, "dist");
const DATA_DIR = path.join(ROOT_DIR, "data");
const PORTFOLIO_FILE = path.join(DATA_DIR, "portfolio.json");
const MESSAGES_FILE = path.join(DATA_DIR, "messages.json");

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp"
};

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8"
  });
  response.end(JSON.stringify(payload));
}

function sanitizeText(value, maxLength) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function isInsideDirectory(basePath, candidatePath) {
  const relativePath = path.relative(basePath, candidatePath);
  return relativePath === "" || (!relativePath.startsWith("..") && !path.isAbsolute(relativePath));
}

async function ensureDataFiles() {
  await fs.mkdir(DATA_DIR, { recursive: true });

  try {
    await fs.access(MESSAGES_FILE);
  } catch {
    await fs.writeFile(MESSAGES_FILE, "[]", "utf8");
  }
}

async function readJson(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw);
}

async function writeJson(filePath, data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
}

function readRequestBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;

      if (body.length > 1_000_000) {
        reject(new Error("Request body too large"));
        request.destroy();
      }
    });

    request.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(body));
      } catch {
        reject(new Error("Invalid JSON body"));
      }
    });

    request.on("error", reject);
  });
}

async function handlePortfolioRequest(response) {
  const portfolio = await readJson(PORTFOLIO_FILE);
  sendJson(response, 200, portfolio);
}

async function handleContactRequest(request, response) {
  const payload = await readRequestBody(request);

  const submission = {
    name: sanitizeText(payload.name, 80),
    email: sanitizeText(payload.email, 120),
    interest: sanitizeText(payload.interest, 120),
    message: sanitizeText(payload.message, 2000)
  };

  const requiredFields = ["name", "email", "interest", "message"];
  const missingField = requiredFields.find((field) => !submission[field]);

  if (missingField) {
    sendJson(response, 400, {
      error: `Missing required field: ${missingField}`
    });
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(submission.email)) {
    sendJson(response, 400, { error: "Please provide a valid email address." });
    return;
  }

  const messages = await readJson(MESSAGES_FILE);
  messages.unshift({
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...submission
  });

  await writeJson(MESSAGES_FILE, messages);

  sendJson(response, 201, {
    message: "Message received. I will get back to you soon."
  });
}

async function serveClient(requestPath, response) {
  const relativePath = requestPath === "/" ? "index.html" : decodeURIComponent(requestPath.slice(1));
  const targetPath = path.join(CLIENT_DIR, relativePath);

  if (!isInsideDirectory(CLIENT_DIR, targetPath)) {
    sendJson(response, 403, { error: "Access denied." });
    return;
  }

  try {
    const file = await fs.readFile(targetPath);
    const contentType = MIME_TYPES[path.extname(targetPath).toLowerCase()] || "application/octet-stream";
    response.writeHead(200, { "Content-Type": contentType });
    response.end(file);
    return;
  } catch {
    if (path.extname(relativePath)) {
      sendJson(response, 404, { error: "Resource not found." });
      return;
    }
  }

  try {
    const fallback = await fs.readFile(path.join(CLIENT_DIR, "index.html"));
    response.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8"
    });
    response.end(fallback);
  } catch {
    response.writeHead(503, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Frontend build not found. Run `npm run build` first.");
  }
}

const server = http.createServer(async (request, response) => {
  try {
    const parsedUrl = new URL(request.url, `http://${request.headers.host || "localhost"}`);
    const requestPath = parsedUrl.pathname;

    if (request.method === "GET" && requestPath === "/api/portfolio") {
      await handlePortfolioRequest(response);
      return;
    }

    if (request.method === "POST" && requestPath === "/api/contact") {
      await handleContactRequest(request, response);
      return;
    }

    if (request.method === "GET") {
      await serveClient(requestPath, response);
      return;
    }

    sendJson(response, 405, { error: "Method not allowed." });
  } catch (error) {
    sendJson(response, 500, {
      error: error.message || "Unexpected server error."
    });
  }
});

ensureDataFiles()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Portfolio running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to start the portfolio server:", error);
    process.exit(1);
  });
