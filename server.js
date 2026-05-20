const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const dataDir = path.join(root, "data");
const dbPath = path.join(dataDir, "db.json");
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || (process.env.PORT ? "0.0.0.0" : "127.0.0.1");

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml"
};

const seedData = {
  schools: [
    { id: "school-dps", name: "Delhi Public School", address: "Mathura Road", city: "Delhi", stateName: "Delhi", pincode: "110003", region: "North", allowStudentRegistration: true, teacherAdminIds: ["tea-priya"] },
    { id: "school-greenfield", name: "Greenfield Academy", address: "Linking Road", city: "Mumbai", stateName: "Maharashtra", pincode: "400050", region: "West", allowStudentRegistration: true, teacherAdminIds: ["tea-rohan"] },
    { id: "school-sunrise", name: "Sunrise International", address: "MG Road", city: "Bengaluru", stateName: "Karnataka", pincode: "560001", region: "South", allowStudentRegistration: false, teacherAdminIds: [] }
  ],
  users: [
    { id: "stu-aarav", role: "student", name: "Aarav Mehta", email: "aarav@dps.edu", schoolId: "school-dps", className: "Class 6", section: "A", qq: 0, participation: 0, strongest: "-", weakest: "-" },
    { id: "stu-anaya", role: "student", name: "Anaya Rao", email: "anaya@dps.edu", schoolId: "school-dps", className: "Class 6", section: "B", qq: 0, participation: 0, strongest: "-", weakest: "-" },
    { id: "stu-kabir", role: "student", name: "Kabir Sethi", email: "kabir@dps.edu", schoolId: "school-dps", className: "Class 6", section: "A", qq: 0, participation: 0, strongest: "-", weakest: "-" },
    { id: "stu-meera", role: "student", name: "Meera Iyer", email: "meera@sunrise.edu", schoolId: "school-sunrise", className: "Class 6", section: "C", qq: 0, participation: 0, strongest: "-", weakest: "-" },
    { id: "stu-zoya", role: "student", name: "Zoya Khan", email: "zoya@greenfield.edu", schoolId: "school-greenfield", className: "Class 6", section: "B", qq: 0, participation: 0, strongest: "-", weakest: "-" },
    { id: "tea-priya", role: "teacher", name: "Priya Nair", email: "priya@dps.edu", schoolId: "school-dps", className: "All Classes" },
    { id: "tea-rohan", role: "teacher", name: "Rohan Shah", email: "rohan@greenfield.edu", schoolId: "school-greenfield", className: "All Classes" },
    { id: "adm-xmkc", role: "admin", name: "XMKC Admin", email: "admin@xmkc.in", schoolId: null, className: "All Classes" }
  ],
  modules: [
    { id: "mod-world", title: "India & The World", className: "Class 6", group: "Group 2", subject: "Current Affairs", term: 1, materialType: "PDF", materialName: "India & The World Study Pack.pdf", materialNote: "Maps, current affairs briefs, G20, states and capitals.", unlocked: true },
    { id: "mod-science", title: "Science Around Us", className: "Class 6", group: "Group 2", subject: "Science", term: 1, materialType: "PPT", materialName: "Science Around Us Slides.pptx", materialNote: "Planets, inventions, environment and everyday science.", unlocked: true },
    { id: "mod-class8", title: "Global Power & Policy", className: "Class 8", group: "Group 3", subject: "Civics", term: 1, materialType: "DOCX", materialName: "Global Power Notes.docx", materialNote: "Visible only to Class 8 students.", unlocked: true }
  ],
  quizzes: [
    { id: "quiz-world-1", moduleId: "mod-world", title: "Map & Capital Sprint", locked: false, questionIds: ["q1", "q2", "q3"] },
    { id: "quiz-world-2", moduleId: "mod-world", title: "Current Affairs Challenge", locked: true, questionIds: ["q4"] },
    { id: "quiz-science-1", moduleId: "mod-science", title: "Science Basics", locked: false, questionIds: ["q5", "q6"] }
  ],
  questions: [
    { id: "q1", moduleId: "mod-world", type: "mcq", prompt: "Which Indian city hosted the G20 Leaders' Summit in 2023?", imageName: "", options: ["Mumbai", "New Delhi", "Bengaluru", "Hyderabad"], answer: "New Delhi", timerSeconds: 30, explanation: "The 2023 G20 Leaders' Summit was held in New Delhi." },
    { id: "q2", moduleId: "mod-world", type: "mcq", prompt: "Identify the country represented by this visual clue.", imageName: "eiffel-tower.jpg", options: ["Japan", "France", "Italy", "Brazil"], answer: "France", timerSeconds: 25, explanation: "The Eiffel Tower is a famous landmark in Paris, France." },
    { id: "q3", moduleId: "mod-world", type: "fill", prompt: "Fill in the blank: The capital of Australia is ____.", imageName: "", options: [], answer: "canberra", timerSeconds: 35, explanation: "Canberra is the capital city of Australia." },
    { id: "q4", moduleId: "mod-world", type: "text", prompt: "Which ocean lies to the south of India?", imageName: "", options: [], answer: "indian ocean", timerSeconds: 35, explanation: "The Indian Ocean lies to the south of India." },
    { id: "q5", moduleId: "mod-science", type: "mcq", prompt: "Which planet is known for its rings?", imageName: "", options: ["Mars", "Saturn", "Venus", "Mercury"], answer: "Saturn", timerSeconds: 25, explanation: "Saturn has the most visible ring system in our solar system." },
    { id: "q6", moduleId: "mod-science", type: "text", prompt: "What gas do plants absorb during photosynthesis?", imageName: "leaf.png", options: [], answer: "carbon dioxide", timerSeconds: 35, explanation: "Plants absorb carbon dioxide and release oxygen during photosynthesis." }
  ],
  attempts: []
};

function ensureDb() {
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(dbPath)) fs.writeFileSync(dbPath, JSON.stringify(seedData, null, 2));
}

function readDb() {
  ensureDb();
  return JSON.parse(fs.readFileSync(dbPath, "utf8"));
}

function writeDb(data) {
  ensureDb();
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 2_000_000) request.destroy();
    });
    request.on("end", () => resolve(body ? JSON.parse(body) : {}));
    request.on("error", reject);
  });
}

function sendJson(response, payload, status = 200) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload, null, 2));
}

async function handleApi(request, response) {
  const url = new URL(request.url, `http://${request.headers.host || "localhost"}`);

  if (request.method === "GET" && url.pathname === "/api/health") {
    sendJson(response, { ok: true, service: "XM Knowledge Club Platform", version: "0.2.0" });
    return true;
  }

  if (request.method === "GET" && url.pathname === "/api/bootstrap") {
    sendJson(response, readDb());
    return true;
  }

  if (request.method === "POST" && url.pathname === "/api/state") {
    const payload = await readBody(request);
    const db = readDb();
    const nextDb = {
      ...db,
      schools: payload.schools || db.schools,
      users: payload.users || db.users,
      modules: payload.modules || db.modules,
      quizzes: payload.quizzes || db.quizzes,
      questions: payload.questions || db.questions,
      attempts: payload.attempts || db.attempts
    };
    writeDb(nextDb);
    sendJson(response, { ok: true });
    return true;
  }

  if (request.method === "GET" && url.pathname === "/api/qq-formula") {
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
    response.writeHead(200, { "Content-Type": contentTypes[path.extname(filePath)] || "text/plain; charset=utf-8" });
    response.end(data);
  });
}

const server = http.createServer(async (request, response) => {
  try {
    if (request.url.startsWith("/api/") && await handleApi(request, response)) return;
    serveStatic(request, response);
  } catch (error) {
    sendJson(response, { ok: false, error: error.message }, 500);
  }
});

server.listen(port, host, () => {
  console.log(`XM Knowledge Club running at http://${host}:${port}`);
});
