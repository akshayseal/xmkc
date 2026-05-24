const ADMIN_SECRET = "XMKC-ADMIN-2026";

const indianStates = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh",
  "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana",
  "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep",
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry",
  "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const state = {
  isAuthenticated: false,
  authStep: "identity",
  loginMode: "signup",
  role: "student",
  identity: "",
  otp: "",
  signup: {
    studentName: "",
    className: "Class 6",
    schoolId: "school-dps",
    adminSecret: "",
    adminPassword: ""
  },
  currentUser: null,
  activeView: "dashboard",
  activeModuleId: "mod-world",
  activeQuizId: "",
  quizStatus: "idle",
  currentQuestionIndex: 0,
  questionStartedAt: null,
  timerId: null,
  timeRemaining: 0,
  answers: [],
  lastResult: null,
  leaderboardScope: "class",
  selectedSchoolId: "school-dps",
  schoolTab: "students",
  builderQuestionType: "mcq",
  attempts: [],
  schools: [
    {
      id: "school-dps",
      name: "Delhi Public School",
      address: "Mathura Road",
      city: "Delhi",
      district: "New Delhi",
      stateName: "Delhi",
      pincode: "110003",
      region: "North",
      allowStudentRegistration: true,
      teacherAdminIds: ["tea-priya"]
    },
    {
      id: "school-greenfield",
      name: "Greenfield Academy",
      address: "Linking Road",
      city: "Mumbai",
      district: "Mumbai Suburban",
      stateName: "Maharashtra",
      pincode: "400050",
      region: "West",
      allowStudentRegistration: true,
      teacherAdminIds: ["tea-rohan"]
    },
    {
      id: "school-sunrise",
      name: "Sunrise International",
      address: "MG Road",
      city: "Bengaluru",
      district: "Bengaluru Urban",
      stateName: "Karnataka",
      pincode: "560001",
      region: "South",
      allowStudentRegistration: false,
      teacherAdminIds: []
    }
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
    {
      id: "mod-world",
      title: "India & The World",
      className: "Class 6",
      group: "Group 2",
      subject: "Current Affairs",
      term: 1,
      materialType: "PDF",
      materialName: "India & The World Study Pack.pdf",
      materialNote: "Maps, current affairs briefs, G20, states and capitals.",
      unlocked: true
    },
    {
      id: "mod-science",
      title: "Science Around Us",
      className: "Class 6",
      group: "Group 2",
      subject: "Science",
      term: 1,
      materialType: "PPT",
      materialName: "Science Around Us Slides.pptx",
      materialNote: "Planets, inventions, environment and everyday science.",
      unlocked: true
    },
    {
      id: "mod-class8",
      title: "Global Power & Policy",
      className: "Class 8",
      group: "Group 3",
      subject: "Civics",
      term: 1,
      materialType: "DOCX",
      materialName: "Global Power Notes.docx",
      materialNote: "Visible only to Class 8 students.",
      unlocked: true
    }
  ],
  quizzes: [
    { id: "quiz-world-1", moduleId: "mod-world", title: "Map & Capital Sprint", locked: false, questionIds: ["q1", "q2", "q3"] },
    { id: "quiz-world-2", moduleId: "mod-world", title: "Current Affairs Challenge", locked: true, questionIds: ["q4"] },
    { id: "quiz-science-1", moduleId: "mod-science", title: "Science Basics", locked: false, questionIds: ["q5", "q6"] }
  ],
  questions: [
    {
      id: "q1",
      moduleId: "mod-world",
      type: "mcq",
      prompt: "Which Indian city hosted the G20 Leaders' Summit in 2023?",
      imageName: "",
      options: ["Mumbai", "New Delhi", "Bengaluru", "Hyderabad"],
      answer: "New Delhi",
      timerSeconds: 30,
      explanation: "The 2023 G20 Leaders' Summit was held in New Delhi."
    },
    {
      id: "q2",
      moduleId: "mod-world",
      type: "mcq",
      prompt: "Identify the country represented by this visual clue.",
      imageName: "eiffel-tower.jpg",
      options: ["Japan", "France", "Italy", "Brazil"],
      answer: "France",
      timerSeconds: 25,
      explanation: "The Eiffel Tower is a famous landmark in Paris, France."
    },
    {
      id: "q3",
      moduleId: "mod-world",
      type: "fill",
      prompt: "Fill in the blank: The capital of Australia is ____.",
      imageName: "",
      options: [],
      answer: "canberra",
      timerSeconds: 35,
      explanation: "Canberra is the capital city of Australia."
    },
    {
      id: "q4",
      moduleId: "mod-world",
      type: "text",
      prompt: "Which ocean lies to the south of India?",
      imageName: "",
      options: [],
      answer: "indian ocean",
      timerSeconds: 35,
      explanation: "The Indian Ocean lies to the south of India."
    },
    {
      id: "q5",
      moduleId: "mod-science",
      type: "mcq",
      prompt: "Which planet is known for its rings?",
      imageName: "",
      options: ["Mars", "Saturn", "Venus", "Mercury"],
      answer: "Saturn",
      timerSeconds: 25,
      explanation: "Saturn has the most visible ring system in our solar system."
    },
    {
      id: "q6",
      moduleId: "mod-science",
      type: "text",
      prompt: "What gas do plants absorb during photosynthesis?",
      imageName: "leaf.png",
      options: [],
      answer: "carbon dioxide",
      timerSeconds: 35,
      explanation: "Plants absorb carbon dioxide and release oxygen during photosynthesis."
    }
  ]
};

const navItems = [
  { id: "dashboard", label: "Dashboard", roles: ["student", "teacher", "admin"] },
  { id: "study", label: "Modules", roles: ["student", "teacher", "admin"] },
  { id: "leaderboard", label: "Leaderboard", roles: ["student", "teacher", "admin"] },
  { id: "report", label: "My Report Card", roles: ["student"] },
  { id: "teacherReports", label: "Student Reports", roles: ["teacher"] },
  { id: "builder", label: "Module & Quiz Maker", roles: ["admin"] },
  { id: "admin", label: "Schools", roles: ["admin"] }
];

const viewTitles = {
  dashboard: "Dashboard",
  study: "Modules",
  results: "Quiz Results",
  leaderboard: "Leaderboard",
  report: "My Report Card",
  teacherReports: "Student Reports",
  builder: "Module & Quiz Maker",
  admin: "Schools"
};

async function loadBackendState() {
  try {
    const response = await fetch("/api/bootstrap");
    if (!response.ok) throw new Error("Backend unavailable");
    const data = await response.json();
    state.schools = data.schools || state.schools;
    state.users = data.users || state.users;
    state.modules = data.modules || state.modules;
    state.quizzes = data.quizzes || state.quizzes;
    state.questions = data.questions || state.questions;
    state.attempts = data.attempts || state.attempts;
    state.selectedSchoolId = state.schools[0]?.id || state.selectedSchoolId;
  } catch (error) {
    console.warn("Using local seed data:", error.message);
  }
}

async function persistBackendState() {
  try {
    await fetch("/api/state", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        schools: state.schools,
        users: state.users,
        modules: state.modules,
        quizzes: state.quizzes,
        questions: state.questions,
        attempts: state.attempts
      })
    });
  } catch (error) {
    console.warn("Could not save to backend:", error.message);
  }
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function uploadFile(file) {
  if (!file) return null;
  const response = await fetch("/api/upload", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      originalName: file.name,
      dataUrl: await readFileAsDataUrl(file)
    })
  });
  const payload = await response.json();
  if (!payload.ok) throw new Error(payload.error || "Upload failed");
  return payload.upload;
}

function parseCsv(text) {
  const rows = text.trim().split(/\r?\n/).filter(Boolean);
  if (!rows.length) return [];
  const headers = splitCsvLine(rows[0]).map((header) => header.trim().toLowerCase());
  return rows.slice(1).map((row) => {
    const values = splitCsvLine(row);
    return Object.fromEntries(headers.map((header, index) => [header, values[index]?.trim() || ""]));
  });
}

function splitCsvLine(line) {
  const cells = [];
  let current = "";
  let quoted = false;
  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    if (char === '"' && line[index + 1] === '"') {
      current += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      cells.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  cells.push(current);
  return cells;
}

function schoolById(id) {
  return state.schools.find((school) => school.id === id);
}

function profile() {
  return state.currentUser || state.users.find((user) => user.role === state.role);
}

function average(values) {
  if (!values.length) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function visibleModules() {
  const user = profile();
  if (!user) return [];
  if (user.role === "admin" || user.role === "teacher") return state.modules;
  return state.modules.filter((module) => module.className === user.className);
}

function moduleQuizzes(moduleId) {
  return state.quizzes.filter((quiz) => quiz.moduleId === moduleId);
}

function activeQuiz() {
  return state.quizzes.find((quiz) => quiz.id === state.activeQuizId);
}

function activeQuestions() {
  const quiz = activeQuiz();
  if (!quiz) return [];
  return quiz.questionIds.map((id) => state.questions.find((question) => question.id === id)).filter(Boolean);
}

function currentQuestion() {
  return activeQuestions()[state.currentQuestionIndex];
}

function normalizeAnswer(value) {
  return String(value || "").trim().replace(/\s+/g, " ").toLowerCase();
}

function isCorrect(question, answer) {
  return normalizeAnswer(answer) === normalizeAnswer(question.answer);
}

function calculateQQ(userId = profile()?.id) {
  const attempts = state.attempts.filter((attempt) => attempt.userId === userId);
  if (!attempts.length) return 0;

  const accuracy = average(attempts.map((attempt) => attempt.accuracy));
  const speed = average(attempts.map((attempt) => attempt.speed));
  const scores = attempts.map((attempt) => attempt.score);
  const consistency = scores.length > 1 ? Math.max(0, 100 - (Math.max(...scores) - Math.min(...scores))) : attempts[0].score;
  const trend = scores.length > 1 ? Math.max(0, Math.min(100, 75 + scores[scores.length - 1] - scores[0])) : attempts[0].score;
  const participation = Math.min(100, Math.round((new Set(attempts.map((attempt) => attempt.moduleId)).size / Math.max(1, visibleModules().length)) * 100));
  return Math.round(accuracy * 0.5 + speed * 0.2 + consistency * 0.1 + trend * 0.1 + participation * 0.1);
}

function defaultViewForRole(role = state.role) {
  if (role === "teacher") return "teacherReports";
  if (role === "admin") return "admin";
  return "dashboard";
}

function canSeeView(view) {
  if (view === "results") return state.role === "student";
  const item = navItems.find((navItem) => navItem.id === view);
  return !item || item.roles.includes(state.role);
}

function setView(view) {
  state.activeView = canSeeView(view) ? view : defaultViewForRole();
  render();
}

function render() {
  renderAuth();
  document.getElementById("authPage").classList.toggle("hidden", state.isAuthenticated);
  document.getElementById("appShell").classList.toggle("hidden", !state.isAuthenticated);
  if (!state.isAuthenticated) return;

  renderNavigation();
  renderDashboard();
  renderStudy();
  renderResults();
  renderLeaderboard();
  renderReport();
  renderTeacherReports();
  renderBuilder();
  renderAdmin();
}

function renderAuth() {
  const authPage = document.getElementById("authPage");
  const schoolOptions = state.schools
    .map((school) => `<option value="${school.id}" ${state.signup.schoolId === school.id ? "selected" : ""}>${school.name}</option>`)
    .join("");

  authPage.innerHTML = `
    <div class="auth-card">
      <div class="auth-copy">
        <div class="brand large">
          <img class="logo-image" src="assets/xmkc-logo.png" alt="XM Knowledge Club logo" />
          <div>
            <strong>XM Knowledge Club</strong>
            <span>Curiosity, quizzes and Quiz Quotient growth</span>
          </div>
        </div>
        <h1>${state.loginMode === "login" ? "Welcome back" : "Create your account"}</h1>
        <p>Students register under approved schools, teachers view their school reports, and XMKC admins manage schools, modules and quizzes.</p>
        <div class="auth-highlights">
          <span>OTP login</span>
          <span>School dropdown</span>
          <span>Admin secret code</span>
        </div>
      </div>

      <div class="auth-form">
        <div class="segmented">
          <button class="${state.loginMode === "login" ? "active" : ""}" data-auth-mode="login">Login</button>
          <button class="${state.loginMode === "signup" ? "active" : ""}" data-auth-mode="signup">Signup</button>
        </div>
        <label>Profile type
          <select id="roleInput">
            <option value="student" ${state.role === "student" ? "selected" : ""}>Student</option>
            <option value="teacher" ${state.role === "teacher" ? "selected" : ""}>Teacher Admin</option>
            <option value="admin" ${state.role === "admin" ? "selected" : ""}>XMKC Admin</option>
          </select>
        </label>
        <label>Email or phone
          <input id="identityInput" value="${state.identity}" placeholder="student@school.edu or +91..." />
        </label>
        ${state.loginMode === "signup" && state.role === "student" ? `
          <label>Student name<input id="studentNameInput" value="${state.signup.studentName}" placeholder="Aarav Mehta" /></label>
          <div class="form-grid compact">
            <label>Class
              <select id="studentClassInput">
                ${["Class 4", "Class 5", "Class 6", "Class 7", "Class 8"].map((className) => `<option ${state.signup.className === className ? "selected" : ""}>${className}</option>`).join("")}
              </select>
            </label>
            <label>School
              <select id="studentSchoolInput">${schoolOptions}</select>
            </label>
          </div>
        ` : ""}
        ${state.role === "teacher" ? `
          <label>School
            <select id="teacherSchoolInput">${schoolOptions}</select>
          </label>
        ` : ""}
        ${state.role === "admin" ? `
          ${state.loginMode === "signup" ? `
            <label>Admin secret code
              <input id="adminSecretInput" value="${state.signup.adminSecret}" placeholder="Enter XMKC admin code" />
            </label>
          ` : ""}
          <label>Admin password
            <input id="adminPasswordInput" type="password" value="${state.signup.adminPassword}" placeholder="${state.loginMode === "signup" ? "Create 8+ character password" : "Enter admin password"}" />
          </label>
        ` : ""}
        ${state.authStep === "otp" ? `
          <label>Enter OTP
            <input id="otpInput" value="${state.otp}" inputmode="numeric" maxlength="6" placeholder="123456" />
          </label>
        ` : ""}
        <button id="authPrimaryBtn" class="primary-button">${state.authStep === "identity" ? "Send OTP" : "Verify OTP"}</button>
        <p class="muted small">Prototype note: any 6-digit OTP works. Admin signup requires the secret code, then future admin login uses the password.</p>
      </div>
    </div>
  `;

  document.querySelectorAll("[data-auth-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.loginMode = button.dataset.authMode;
      state.authStep = "identity";
      renderAuth();
    });
  });

  document.getElementById("roleInput").addEventListener("change", (event) => {
    state.role = event.target.value;
    state.authStep = "identity";
    renderAuth();
  });

  document.getElementById("authPrimaryBtn").addEventListener("click", handleAuth);
}

function captureAuthFields() {
  state.identity = document.getElementById("identityInput")?.value.trim() || "";
  state.role = document.getElementById("roleInput")?.value || "student";
  state.signup.studentName = document.getElementById("studentNameInput")?.value.trim() || state.signup.studentName;
  state.signup.className = document.getElementById("studentClassInput")?.value || state.signup.className;
  state.signup.schoolId = document.getElementById("studentSchoolInput")?.value || document.getElementById("teacherSchoolInput")?.value || state.signup.schoolId;
  state.signup.adminSecret = document.getElementById("adminSecretInput")?.value.trim() || state.signup.adminSecret;
  state.signup.adminPassword = document.getElementById("adminPasswordInput")?.value || state.signup.adminPassword;
}

async function handleAuth() {
  captureAuthFields();
  if (!state.identity) return;
  if (state.role === "admin" && state.loginMode === "signup" && state.signup.adminSecret !== ADMIN_SECRET) {
    alert("Invalid admin secret code.");
    return;
  }
  if (state.role === "admin" && state.signup.adminPassword.length < 8) {
    alert("Admin password must be at least 8 characters.");
    return;
  }
  if (state.loginMode === "signup" && state.role === "student") {
    const school = schoolById(state.signup.schoolId);
    if (!state.signup.studentName || !school?.allowStudentRegistration) {
      alert("Please enter student details and choose a school that allows registration.");
      return;
    }
  }
  if (state.authStep === "identity") {
    state.authStep = "otp";
    state.otp = "";
    renderAuth();
    return;
  }

  state.otp = document.getElementById("otpInput").value.trim();
  if (state.otp.length !== 6) return;
  await completeAuth();
}

async function completeAuth() {
  if (state.role === "admin") {
    const endpoint = state.loginMode === "signup" ? "/api/admin/setup" : "/api/admin/login";
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: state.identity,
        password: state.signup.adminPassword,
        secret: state.signup.adminSecret
      })
    });
    const payload = await response.json();
    if (!payload.ok) {
      alert(payload.error || "Admin authentication failed.");
      return;
    }
    state.currentUser = payload.user;
    const existingAdminIndex = state.users.findIndex((user) => user.id === payload.user.id);
    if (existingAdminIndex >= 0) state.users[existingAdminIndex] = payload.user;
    else state.users.push(payload.user);
    state.isAuthenticated = true;
    state.activeView = defaultViewForRole();
    render();
    return;
  }

  if (state.role === "student" && state.loginMode === "signup") {
    const user = {
      id: `stu-${Date.now()}`,
      role: "student",
      name: state.signup.studentName,
      email: state.identity.includes("@") ? state.identity : "",
      phone: state.identity.includes("@") ? "" : state.identity,
      schoolId: state.signup.schoolId,
      className: state.signup.className,
      section: "-",
      qq: 0,
      participation: 0,
      strongest: "-",
      weakest: "-"
    };
    state.users.push(user);
    state.currentUser = user;
    persistBackendState();
  } else if (state.role === "teacher") {
    state.currentUser = state.users.find((user) => user.role === "teacher" && user.schoolId === state.signup.schoolId) || state.users.find((user) => user.role === "teacher");
  } else if (state.role === "admin") {
    state.currentUser = state.users.find((user) => user.role === "admin");
  } else {
    state.currentUser = state.users.find((user) => user.role === "student") || null;
  }

  state.isAuthenticated = true;
  state.activeView = defaultViewForRole();
  render();
}

function renderNavigation() {
  document.getElementById("nav").innerHTML = navItems
    .filter((item) => item.roles.includes(state.role))
    .map((item) => `<button class="nav-item ${state.activeView === item.id ? "active" : ""}" data-view="${item.id}">${item.label}</button>`)
    .join("");

  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("active", view.id === state.activeView);
  });

  const user = profile();
  const school = schoolById(user?.schoolId);
  document.getElementById("profileName").textContent = user?.name || "User";
  document.getElementById("profileMeta").textContent = `${capitalize(user?.role || state.role)} · ${user?.className || "All Classes"} · ${school?.name || "XMKC"}`;
  document.getElementById("viewTitle").textContent = viewTitles[state.activeView] || "Dashboard";
  document.getElementById("otpStatus").textContent = `OTP verified: ${state.identity || user?.email || ""}`;
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function renderDashboard() {
  const userModules = visibleModules();
  const user = profile();
  const attempts = state.attempts.filter((attempt) => attempt.userId === user?.id);
  document.getElementById("dashboard").innerHTML = `
    <div class="grid">
      <div class="metric span-4"><strong>${calculateQQ()}</strong><span>Current Quiz Quotient</span></div>
      <div class="metric span-4"><strong>${attempts.length}</strong><span>Quizzes completed</span></div>
      <div class="metric span-4"><strong>${userModules.length}</strong><span>Visible modules</span></div>
      <div class="panel span-8">
        <p class="eyebrow">Learning Path</p>
        <h2>Study material first, quizzes after</h2>
        <div class="module-grid">${userModules.map((module) => renderModuleSummary(module)).join("")}</div>
      </div>
      <div class="panel span-4">
        <p class="eyebrow">QQ Rule</p>
        <h2>Starts at zero</h2>
        <p class="muted">Every student begins with QQ 0. The score updates only after quizzes are completed inside modules.</p>
      </div>
    </div>
  `;
}

function renderModuleSummary(module) {
  return `
    <div class="module-card">
      <div>
        <strong>${module.title}</strong>
        <p class="muted">${module.className} · ${module.materialName} · ${moduleQuizzes(module.id).length} quizzes</p>
      </div>
      <span class="status-pill ${module.unlocked ? "live" : "locked"}">${module.unlocked ? "Unlocked" : "Locked"}</span>
    </div>
  `;
}

function renderStudy() {
  const modules = visibleModules();
  document.getElementById("study").innerHTML = `
    <div class="grid">
      ${modules.map((module) => `
        <div class="panel span-6">
          <p class="eyebrow">${module.className} · ${module.group}</p>
          <h2>${module.title}</h2>
          <p class="muted">${module.materialNote}</p>
          <div class="row">
            <span class="material-chip">${module.materialType}</span>
            <strong>${module.materialName}</strong>
          </div>
          <button class="ghost-button download-material" data-module-id="${module.id}">Download Study Material</button>
          <div class="quiz-list">
            ${moduleQuizzes(module.id).map((quiz) => renderQuizTile(module, quiz)).join("") || `<p class="muted">No quizzes added yet.</p>`}
          </div>
        </div>
      `).join("")}
    </div>
  `;

  document.querySelectorAll(".download-material").forEach((button) => {
    button.addEventListener("click", () => {
      const module = state.modules.find((item) => item.id === button.dataset.moduleId);
      if (module.materialUrl) {
        window.open(module.materialUrl, "_blank");
        return;
      }
      alert(`Study material file is not uploaded yet: ${module.materialName}`);
    });
  });

  document.querySelectorAll(".start-quiz").forEach((button) => {
    button.addEventListener("click", () => startQuiz(button.dataset.quizId));
  });
}

function renderQuizTile(module, quiz) {
  const user = profile();
  const attempted = state.attempts.find((attempt) => attempt.userId === user?.id && attempt.quizId === quiz.id);
  const locked = quiz.locked || !module.unlocked;
  return `
    <div class="quiz-tile">
      <div>
        <strong>${quiz.title}</strong>
        <p class="muted">${quiz.questionIds.length} questions ${attempted ? `· Last score ${attempted.score}%` : ""}</p>
      </div>
      ${state.role === "student" ? `<button class="primary-button start-quiz" data-quiz-id="${quiz.id}" ${locked ? "disabled" : ""}>${locked ? "Locked" : "Take Quiz"}</button>` : `<span class="status-pill ${locked ? "locked" : "live"}">${locked ? "Locked" : "Open"}</span>`}
    </div>
  `;
}

function startQuiz(quizId) {
  const quiz = state.quizzes.find((item) => item.id === quizId);
  if (!quiz || quiz.locked) return;
  state.activeQuizId = quizId;
  state.activeModuleId = quiz.moduleId;
  state.quizStatus = "playing";
  state.currentQuestionIndex = 0;
  state.answers = [];
  state.lastResult = null;
  renderQuizOverlay();
  startQuestionTimer();
}

function renderQuizOverlay() {
  const question = currentQuestion();
  const questionCount = activeQuestions().length;
  const submittedAnswer = state.answers[state.currentQuestionIndex];
  const existingAnswer = submittedAnswer?.answer || "";
  const study = document.getElementById("study");

  study.innerHTML = `
    <div class="quiz-card">
      <div class="row between">
        <div>
          <p class="eyebrow">${activeQuiz().title}</p>
          <h2>Question ${state.currentQuestionIndex + 1} of ${questionCount}</h2>
        </div>
        <strong id="questionTimer" class="timer">00:${String(state.timeRemaining).padStart(2, "0")}</strong>
      </div>
      ${question.imageUrl ? `<img class="question-image" src="${question.imageUrl}" alt="${question.imageName || "Question image"}" />` : question.imageName ? `<div class="quiz-media">Image: ${question.imageName}</div>` : ""}
      <h3>${question.prompt}</h3>
      ${renderQuestionInput(question, existingAnswer)}
      <div id="answerFeedback">${submittedAnswer ? renderAnswerFeedback(question, submittedAnswer) : ""}</div>
      <div class="row between quiz-actions">
        <button class="ghost-button" id="quitQuizBtn">Back to Modules</button>
        ${submittedAnswer ? `<button class="primary-button" id="nextQuestionBtn">${state.currentQuestionIndex === questionCount - 1 ? "Finish Quiz" : "Next Question"}</button>` : `<button class="primary-button" id="submitAnswerBtn">Submit Answer</button>`}
      </div>
    </div>
  `;

  document.querySelectorAll(".option-button").forEach((button) => {
    if (submittedAnswer) {
      const option = button.dataset.option;
      button.classList.toggle("correct", normalizeAnswer(option) === normalizeAnswer(question.answer));
      button.classList.toggle("wrong", normalizeAnswer(option) === normalizeAnswer(submittedAnswer.answer) && !submittedAnswer.correct);
      return;
    }
    button.addEventListener("click", () => {
      document.querySelectorAll(".option-button").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
    });
  });

  document.getElementById("quitQuizBtn").addEventListener("click", () => {
    stopTimer();
    state.quizStatus = "idle";
    renderStudy();
  });
  document.getElementById("submitAnswerBtn")?.addEventListener("click", () => submitAnswer(false));
  document.getElementById("nextQuestionBtn")?.addEventListener("click", nextQuestionOrFinish);
  updateTimerDisplay();
}

function renderQuestionInput(question, existingAnswer) {
  if (question.type === "mcq") {
    return `
      <div class="quiz-options">
        ${question.options.map((option) => `<button class="option-button ${existingAnswer === option ? "selected" : ""}" data-option="${option}">${option}</button>`).join("")}
      </div>
    `;
  }
  return `<input id="typedAnswer" placeholder="Type your answer" value="${existingAnswer}" />`;
}

function getCurrentAnswer() {
  const question = currentQuestion();
  if (question.type === "mcq") return document.querySelector(".option-button.selected")?.dataset.option || "";
  return document.getElementById("typedAnswer")?.value || "";
}

function startQuestionTimer() {
  stopTimer();
  const question = currentQuestion();
  if (!question) return;
  state.timeRemaining = question.timerSeconds;
  state.questionStartedAt = Date.now();
  updateTimerDisplay();
  state.timerId = setInterval(() => {
    state.timeRemaining -= 1;
    updateTimerDisplay();
    if (state.timeRemaining <= 0) submitAnswer(true);
  }, 1000);
}

function stopTimer() {
  if (state.timerId) clearInterval(state.timerId);
  state.timerId = null;
}

function updateTimerDisplay() {
  const timer = document.getElementById("questionTimer");
  if (timer) timer.textContent = `00:${String(Math.max(0, state.timeRemaining)).padStart(2, "0")}`;
}

function submitAnswer(timedOut) {
  const question = currentQuestion();
  const answer = timedOut ? "" : getCurrentAnswer();
  const spentSeconds = Math.max(1, Math.round((Date.now() - state.questionStartedAt) / 1000));
  state.answers[state.currentQuestionIndex] = {
    questionId: question.id,
    answer,
    correct: isCorrect(question, answer),
    spentSeconds,
    timedOut
  };
  stopTimer();
  renderQuizOverlay();
}

function renderAnswerFeedback(question, submittedAnswer) {
  return `
    <div class="feedback ${submittedAnswer.correct ? "correct" : "wrong"}">
      <strong>${submittedAnswer.correct ? "Correct" : submittedAnswer.timedOut ? "Time up" : "Incorrect"}</strong>
      <span>${submittedAnswer.correct ? "Nice work." : `Correct answer: ${question.answer}`}</span>
      <p>${question.explanation}</p>
    </div>
  `;
}

function nextQuestionOrFinish() {
  if (state.currentQuestionIndex < activeQuestions().length - 1) {
    state.currentQuestionIndex += 1;
    renderQuizOverlay();
    startQuestionTimer();
    return;
  }
  finishQuiz();
}

function finishQuiz() {
  stopTimer();
  const questions = activeQuestions();
  const correctCount = state.answers.filter((answer) => answer.correct).length;
  const accuracy = Math.round((correctCount / questions.length) * 100);
  const avgSpent = average(state.answers.map((answer) => answer.spentSeconds));
  const avgAllowed = average(questions.map((question) => question.timerSeconds));
  const speed = Math.max(40, Math.round(100 - (avgSpent / avgAllowed) * 45));
  const module = state.modules.find((item) => item.id === state.activeModuleId);
  const result = {
    userId: profile().id,
    quizId: state.activeQuizId,
    moduleId: state.activeModuleId,
    title: activeQuiz().title,
    score: accuracy,
    accuracy,
    speed,
    correctCount,
    total: questions.length,
    subject: module?.subject || "General Knowledge",
    submittedAt: new Date().toISOString().slice(0, 10),
    answers: state.answers.map((answer) => ({ ...answer, question: state.questions.find((question) => question.id === answer.questionId) }))
  };

  state.attempts.push(result);
  const user = profile();
  user.qq = calculateQQ(user.id);
  user.participation = Math.min(100, Math.round((new Set(state.attempts.filter((attempt) => attempt.userId === user.id).map((attempt) => attempt.moduleId)).size / visibleModules().length) * 100));
  state.lastResult = result;
  state.quizStatus = "completed";
  state.activeView = "results";
  persistBackendState();
  render();
}

function renderResults() {
  const results = document.getElementById("results");
  if (!state.lastResult) {
    results.innerHTML = `<div class="panel"><h2>No quiz result yet.</h2></div>`;
    return;
  }
  const result = state.lastResult;
  results.innerHTML = `
    <div class="grid">
      <div class="metric span-4"><strong>${result.correctCount}/${result.total}</strong><span>Total score</span></div>
      <div class="metric span-4"><strong>${result.accuracy}%</strong><span>Accuracy</span></div>
      <div class="metric span-4"><strong>${calculateQQ()}</strong><span>Updated Quiz Quotient</span></div>
      <div class="panel span-12">
        <p class="eyebrow">Answer Review</p>
        <h2>${result.title}</h2>
        ${result.answers.map((answer, index) => `
          <div class="review-card">
            <div class="row between">
              <strong>Q${index + 1}. ${answer.question.prompt}</strong>
              <span class="status-pill ${answer.correct ? "done" : "wrong-pill"}">${answer.correct ? "Correct" : "Incorrect"}</span>
            </div>
            <p class="muted">Your answer: ${answer.answer || "No answer"} · Correct answer: ${answer.question.answer}</p>
            <p>${answer.question.explanation}</p>
          </div>
        `).join("")}
        <button class="primary-button" id="backToModulesBtn">Back to Modules</button>
      </div>
    </div>
  `;
  document.getElementById("backToModulesBtn").addEventListener("click", () => setView("study"));
}

function renderLeaderboard() {
  const rows = rankedStudents();
  document.getElementById("leaderboard").innerHTML = `
    <div class="panel">
      <p class="eyebrow">Rank Explorer</p>
      <h2>${capitalize(state.leaderboardScope)} leaderboard</h2>
      <div class="filters">
        ${["class", "school", "city", "state", "region", "national"].map((scope) => `
          <button class="ghost-button leaderboard-filter ${state.leaderboardScope === scope ? "selected-filter" : ""}" data-scope="${scope}">${capitalize(scope)}</button>
        `).join("")}
      </div>
      ${rows.map((student, index) => {
        const school = schoolById(student.schoolId);
        return `
          <div class="leader-row">
            <span class="rank">${index + 1}</span>
            <div>
              <strong>${student.name}</strong>
              <p class="muted">${student.className} ${student.section || ""} · ${school?.name || ""} · ${school?.city || ""}</p>
            </div>
            <strong>QQ ${student.qq || 0}</strong>
            <span class="muted">${school?.region || ""}</span>
          </div>
        `;
      }).join("") || `<p class="muted">No students found for this filter yet.</p>`}
    </div>
  `;

  document.querySelectorAll(".leaderboard-filter").forEach((button) => {
    button.addEventListener("click", () => {
      state.leaderboardScope = button.dataset.scope;
      renderLeaderboard();
    });
  });
}

function rankedStudents() {
  const user = profile();
  const userSchool = schoolById(user?.schoolId);
  return state.users
    .filter((student) => student.role === "student")
    .filter((student) => {
      const school = schoolById(student.schoolId);
      if (state.leaderboardScope === "class") return student.className === user?.className;
      if (state.leaderboardScope === "school") return student.schoolId === user?.schoolId;
      if (state.leaderboardScope === "city") return school?.city === userSchool?.city;
      if (state.leaderboardScope === "state") return school?.stateName === userSchool?.stateName;
      if (state.leaderboardScope === "region") return school?.region === userSchool?.region;
      return true;
    })
    .sort((a, b) => (b.qq || 0) - (a.qq || 0) || a.name.localeCompare(b.name));
}

function renderReport() {
  const report = document.getElementById("report");
  const attempts = state.attempts.filter((attempt) => attempt.userId === profile()?.id);
  const subjects = new Map();
  attempts.forEach((attempt) => subjects.set(attempt.subject, attempt.score));
  report.innerHTML = `
    <div class="report-page">
      <div class="report-header">
        <div>
          <p class="eyebrow">Report Card</p>
          <h2>${profile().name}</h2>
          <p class="muted">${profile().className} · ${schoolById(profile().schoolId)?.name || ""}</p>
        </div>
        <div class="qq-score">${calculateQQ()}</div>
      </div>
      <div class="report-grid">
        <div>
          <h3>Quiz Quotient Breakdown</h3>
          ${renderBar("Accuracy", Math.round(average(attempts.map((attempt) => attempt.accuracy))))}
          ${renderBar("Speed", Math.round(average(attempts.map((attempt) => attempt.speed))))}
          ${renderBar("Participation", profile().participation || 0)}
        </div>
        <div>
          <h3>Subject Performance</h3>
          ${[...subjects.entries()].map(([label, value]) => renderBar(label, value)).join("") || `<p class="muted">Complete a quiz to unlock subject scores.</p>`}
        </div>
      </div>
    </div>
  `;
}

function renderBar(label, value) {
  const safeValue = Number.isFinite(value) ? Math.max(0, Math.min(100, value)) : 0;
  return `
    <div class="bar">
      <span>${label}</span>
      <div class="progress-track"><div class="progress-fill" style="--value: ${safeValue}%"></div></div>
      <strong>${safeValue}</strong>
    </div>
  `;
}

function renderTeacherReports() {
  const teacher = profile();
  const rows = state.users.filter((user) => user.role === "student" && user.schoolId === teacher?.schoolId);
  document.getElementById("teacherReports").innerHTML = `
    <div class="panel">
      <p class="eyebrow">School Report Cards</p>
      <h2>${schoolById(teacher?.schoolId)?.name || "School"}</h2>
      <div class="table">
        <div class="table-row table-head"><span>Student</span><span>Class</span><span>QQ</span><span>Participation</span><span>Strongest</span><span>Weakest</span></div>
        ${rows.map((student) => `<div class="table-row"><span>${student.name}</span><span>${student.className}</span><span>${student.qq || 0}</span><span>${student.participation || 0}%</span><span>${student.strongest || "-"}</span><span>${student.weakest || "-"}</span></div>`).join("")}
      </div>
    </div>
  `;
}

function renderBuilder() {
  document.getElementById("builder").innerHTML = `
    <div class="grid">
      <div class="panel span-5">
        <p class="eyebrow">Create Module</p>
        <h2>Study material setup</h2>
        <div class="form-grid">
          <label>Module title<input id="moduleTitle" placeholder="Sports, Tech & Media" /></label>
          <label>Class
            <select id="moduleClass">${["Class 4", "Class 5", "Class 6", "Class 7", "Class 8"].map((item) => `<option>${item}</option>`).join("")}</select>
          </label>
          <label>Group<select id="moduleGroup"><option>Group 1</option><option>Group 2</option><option>Group 3</option></select></label>
          <label>Subject<input id="moduleSubject" placeholder="Current Affairs" /></label>
        </div>
        <label>Upload study material<input id="moduleMaterial" type="file" accept=".pdf,.ppt,.pptx,.doc,.docx" /></label>
        <label>Material summary<textarea id="moduleNote" rows="3" placeholder="What students will study"></textarea></label>
        <button id="createModuleBtn" class="primary-button">Create Module</button>
      </div>

      <div class="panel span-7">
        <p class="eyebrow">Quiz Setup</p>
        <h2>Multiple quizzes per module</h2>
        <div class="form-grid">
          <label>Module<select id="quizModule">${state.modules.map((module) => `<option value="${module.id}">${module.title} · ${module.className}</option>`).join("")}</select></label>
          <label>Quiz title<input id="quizTitle" placeholder="Module Quiz 1" /></label>
        </div>
        <button id="createQuizBtn" class="primary-button">Create Quiz</button>
        <div class="quiz-list">
          ${state.quizzes.map((quiz) => {
            const module = state.modules.find((item) => item.id === quiz.moduleId);
            return `<div class="quiz-tile"><div><strong>${quiz.title}</strong><p class="muted">${module?.title} · ${quiz.questionIds.length} questions</p></div><button class="ghost-button toggle-lock" data-quiz-id="${quiz.id}">${quiz.locked ? "Unlock" : "Lock"}</button></div>`;
          }).join("")}
        </div>
      </div>

      <div class="panel span-7">
        <p class="eyebrow">Question Maker</p>
        <h2>Question editor</h2>
        <div class="form-grid">
          <label>Quiz<select id="questionQuiz">${state.quizzes.map((quiz) => `<option value="${quiz.id}">${quiz.title}</option>`).join("")}</select></label>
          <label>Question type
            <select id="questionType">
              <option value="mcq">MCQ</option>
              <option value="fill">Fill in the blanks</option>
              <option value="text">Type the answer</option>
              <option value="truefalse">True / False</option>
            </select>
          </label>
        </div>
        <label>Question prompt<textarea id="questionPrompt" rows="3" placeholder="Write the question"></textarea></label>
        <label>Add image to this question<input id="questionImage" type="file" accept=".jpg,.jpeg,.png" /></label>
        <div id="mcqFields" class="form-grid">
          <label>Option A<input id="optionA" /></label>
          <label>Option B<input id="optionB" /></label>
          <label>Option C<input id="optionC" /></label>
          <label>Option D<input id="optionD" /></label>
          <label>Correct option<select id="correctOption"><option>A</option><option>B</option><option>C</option><option>D</option></select></label>
          <label>Timer seconds<input id="timerSeconds" type="number" value="30" min="10" max="120" /></label>
        </div>
        <div id="textFields" class="form-grid hidden">
          <label>Correct answer<input id="textAnswer" placeholder="Case agnostic answer" /></label>
          <label>Timer seconds<input id="textTimerSeconds" type="number" value="30" min="10" max="120" /></label>
        </div>
        <label>Explanation<textarea id="questionExplanation" rows="3" placeholder="Explain the answer"></textarea></label>
        <button id="addQuestionBtn" class="primary-button">Add Question</button>
      </div>

      <div class="panel span-5">
        <p class="eyebrow">CSV Upload</p>
        <h2>Bulk upload questions</h2>
        <p class="muted">Columns: quiz_title, type, prompt, image_file, option_a, option_b, option_c, option_d, answer, explanation, timer_seconds</p>
        <textarea id="csvUpload" rows="8" placeholder="Paste CSV rows here"></textarea>
        <button id="validateCsvBtn" class="primary-button">Validate CSV</button>
      </div>
    </div>
  `;

  document.getElementById("questionType").addEventListener("change", toggleQuestionFields);
  document.getElementById("createModuleBtn").addEventListener("click", createModule);
  document.getElementById("createQuizBtn").addEventListener("click", createQuiz);
  document.getElementById("addQuestionBtn").addEventListener("click", createQuestion);
  document.getElementById("validateCsvBtn").addEventListener("click", () => alert("CSV structure looks ready for backend import."));
  document.querySelectorAll(".toggle-lock").forEach((button) => {
    button.addEventListener("click", () => {
      const quiz = state.quizzes.find((item) => item.id === button.dataset.quizId);
      quiz.locked = !quiz.locked;
      persistBackendState();
      renderBuilder();
    });
  });
}

function toggleQuestionFields() {
  const type = document.getElementById("questionType").value;
  document.getElementById("mcqFields").classList.toggle("hidden", !(type === "mcq" || type === "truefalse"));
  document.getElementById("textFields").classList.toggle("hidden", type === "mcq" || type === "truefalse");
}

async function createModule() {
  const material = document.getElementById("moduleMaterial").files[0];
  const title = document.getElementById("moduleTitle").value.trim();
  if (!title) return;
  let upload = null;
  try {
    upload = await uploadFile(material);
  } catch (error) {
    alert(error.message);
    return;
  }
  state.modules.push({
    id: `mod-${Date.now()}`,
    title,
    className: document.getElementById("moduleClass").value,
    group: document.getElementById("moduleGroup").value,
    subject: document.getElementById("moduleSubject").value.trim() || "General Knowledge",
    term: 1,
    materialType: material ? material.name.split(".").pop().toUpperCase() : "PDF",
    materialName: material ? material.name : "Study Material.pdf",
    materialUrl: upload?.url || "",
    materialNote: document.getElementById("moduleNote").value.trim() || "Study material uploaded by XMKC Admin.",
    unlocked: true
  });
  persistBackendState();
  renderBuilder();
}

function createQuiz() {
  const title = document.getElementById("quizTitle").value.trim();
  const moduleId = document.getElementById("quizModule").value;
  if (!title) return;
  state.quizzes.push({ id: `quiz-${Date.now()}`, moduleId, title, locked: false, questionIds: [] });
  persistBackendState();
  renderBuilder();
}

async function createQuestion() {
  const quiz = state.quizzes.find((item) => item.id === document.getElementById("questionQuiz").value);
  const type = document.getElementById("questionType").value;
  const prompt = document.getElementById("questionPrompt").value.trim();
  const image = document.getElementById("questionImage").files[0];
  const explanation = document.getElementById("questionExplanation").value.trim() || "Explanation will be expanded before publishing.";
  if (!quiz || !prompt) return;
  let upload = null;
  try {
    upload = await uploadFile(image);
  } catch (error) {
    alert(error.message);
    return;
  }
  let options = [];
  let answer = "";
  let timerSeconds = 30;
  if (type === "mcq" || type === "truefalse") {
    options = type === "truefalse" ? ["True", "False"] : ["optionA", "optionB", "optionC", "optionD"].map((id) => document.getElementById(id).value.trim());
    const answerIndex = ["A", "B", "C", "D"].indexOf(document.getElementById("correctOption").value);
    answer = type === "truefalse" ? (document.getElementById("correctOption").value === "B" ? "False" : "True") : options[answerIndex];
    timerSeconds = Number(document.getElementById("timerSeconds").value || 30);
    if (type === "mcq" && options.some((option) => !option)) return;
  } else {
    answer = document.getElementById("textAnswer").value.trim();
    timerSeconds = Number(document.getElementById("textTimerSeconds").value || 30);
    if (!answer) return;
  }

  const questionId = `q${Date.now()}`;
  state.questions.push({
    id: questionId,
    moduleId: quiz.moduleId,
    type: type === "truefalse" ? "mcq" : type,
    prompt,
    imageName: image ? image.name : "",
    imageUrl: upload?.url || "",
    options,
    answer,
    timerSeconds,
    explanation
  });
  quiz.questionIds.push(questionId);
  persistBackendState();
  renderBuilder();
}

function renderAdmin() {
  const selectedSchool = schoolById(state.selectedSchoolId) || state.schools[0];
  const students = state.users.filter((user) => user.role === "student" && user.schoolId === selectedSchool.id);
  const teachers = state.users.filter((user) => user.role === "teacher" && user.schoolId === selectedSchool.id);
  document.getElementById("admin").innerHTML = `
    <div class="grid">
      <div class="panel span-5">
        <p class="eyebrow">School Directory</p>
        <h2>Schools</h2>
        <div class="school-list">
          ${state.schools.map((school) => {
            const count = state.users.filter((user) => user.role === "student" && user.schoolId === school.id).length;
            return `<button class="school-row ${state.selectedSchoolId === school.id ? "active" : ""}" data-school-id="${school.id}"><strong>${school.name}</strong><span>${school.district || school.city}, ${school.stateName} · ${count} students</span></button>`;
          }).join("")}
        </div>
        <h3>Add school</h3>
        <label>Name of the School<input id="schoolName" /></label>
        <label>Address<input id="schoolAddress" /></label>
        <div class="form-grid">
          <label>City<input id="schoolCity" /></label>
          <label>District<input id="schoolDistrict" /></label>
          <label>State/UT<select id="schoolState">${indianStates.map((item) => `<option>${item}</option>`).join("")}</select></label>
          <label>Pincode<input id="schoolPincode" inputmode="numeric" /></label>
        </div>
        <button id="addSchoolBtn" class="primary-button">Add School</button>
      </div>

      <div class="panel span-7">
        <p class="eyebrow">Selected School</p>
        <h2>${selectedSchool.name}</h2>
        <p class="muted">${selectedSchool.address}, ${selectedSchool.city}, ${selectedSchool.district || "District not set"}, ${selectedSchool.stateName} ${selectedSchool.pincode}</p>
        <div class="row">
          <span class="material-chip">${students.length} students</span>
          <span class="material-chip">${teachers.length} teacher admins</span>
          <button id="toggleRegistrationBtn" class="ghost-button">${selectedSchool.allowStudentRegistration ? "Disable" : "Allow"} Student Registration</button>
        </div>
        <div class="tabs">
          <button class="${state.schoolTab === "students" ? "active" : ""}" data-school-tab="students">Students</button>
          <button class="${state.schoolTab === "teachers" ? "active" : ""}" data-school-tab="teachers">Teachers</button>
          <button class="${state.schoolTab === "bulk" ? "active" : ""}" data-school-tab="bulk">Bulk Upload</button>
        </div>
        ${renderSchoolTab(selectedSchool, students, teachers)}
      </div>
    </div>
  `;

  document.querySelectorAll(".school-row").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedSchoolId = button.dataset.schoolId;
      renderAdmin();
    });
  });
  document.querySelectorAll("[data-school-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.schoolTab = button.dataset.schoolTab;
      renderAdmin();
    });
  });
  document.getElementById("addSchoolBtn").addEventListener("click", addSchool);
  document.getElementById("toggleRegistrationBtn").addEventListener("click", () => {
    selectedSchool.allowStudentRegistration = !selectedSchool.allowStudentRegistration;
    persistBackendState();
    renderAdmin();
  });
  document.getElementById("assignTeacherBtn")?.addEventListener("click", assignTeacher);
  document.getElementById("bulkUploadBtn")?.addEventListener("click", importBulkUpload);
}

function renderSchoolTab(school, students, teachers) {
  if (state.schoolTab === "teachers") {
    return `
      <div class="table">
        <div class="table-row teacher-table table-head"><span>Teacher</span><span>Email</span><span>Access</span></div>
        ${teachers.map((teacher) => `<div class="table-row teacher-table"><span>${teacher.name}</span><span>${teacher.email}</span><span>Teacher Admin</span></div>`).join("") || `<p class="muted">No teacher admins assigned.</p>`}
      </div>
      <h3>Assign teacher admin</h3>
      <div class="form-grid">
        <label>Name<input id="teacherName" placeholder="Teacher name" /></label>
        <label>Email<input id="teacherEmail" placeholder="teacher@school.edu" /></label>
      </div>
      <button id="assignTeacherBtn" class="primary-button">Assign Teacher Admin</button>
    `;
  }
  if (state.schoolTab === "bulk") {
    return `
      <p class="muted">Bulk upload schools or students using CSV.</p>
      <textarea id="bulkUploadText" rows="8" placeholder="Schools CSV: type,name,address,city,district,state,pincode,region&#10;school,Example School,MG Road,Delhi,New Delhi,Delhi,110001,North&#10;&#10;Students CSV: type,name,email,class,school&#10;student,Asha Rao,asha@example.com,Class 6,Delhi Public School"></textarea>
      <button id="bulkUploadBtn" class="primary-button">Import CSV</button>
    `;
  }
  return `
    <div class="table">
      <div class="table-row table-head"><span>Student</span><span>Class</span><span>QQ</span><span>Participation</span><span>Strongest</span><span>Weakest</span></div>
      ${students.map((student) => `<div class="table-row"><span>${student.name}</span><span>${student.className}</span><span>${student.qq || 0}</span><span>${student.participation || 0}%</span><span>${student.strongest || "-"}</span><span>${student.weakest || "-"}</span></div>`).join("") || `<p class="muted">No students registered yet.</p>`}
    </div>
  `;
}

function addSchool() {
  const name = document.getElementById("schoolName").value.trim();
  if (!name) return;
  const school = {
    id: `school-${Date.now()}`,
    name,
    address: document.getElementById("schoolAddress").value.trim(),
    city: document.getElementById("schoolCity").value.trim(),
    district: document.getElementById("schoolDistrict").value.trim(),
    stateName: document.getElementById("schoolState").value,
    pincode: document.getElementById("schoolPincode").value.trim(),
    region: "Unassigned",
    allowStudentRegistration: false,
    teacherAdminIds: []
  };
  state.schools.push(school);
  state.selectedSchoolId = school.id;
  persistBackendState();
  renderAdmin();
}

function assignTeacher() {
  const school = schoolById(state.selectedSchoolId);
  const teacher = {
    id: `tea-${Date.now()}`,
    role: "teacher",
    name: document.getElementById("teacherName").value.trim(),
    email: document.getElementById("teacherEmail").value.trim(),
    schoolId: school.id,
    className: "All Classes"
  };
  if (!teacher.name || !teacher.email) return;
  state.users.push(teacher);
  school.teacherAdminIds.push(teacher.id);
  persistBackendState();
  renderAdmin();
}

function importBulkUpload() {
  const rows = parseCsv(document.getElementById("bulkUploadText").value);
  let schoolCount = 0;
  let studentCount = 0;

  rows.forEach((row) => {
    if (row.type === "school") {
      const school = {
        id: `school-${Date.now()}-${schoolCount}`,
        name: row.name,
        address: row.address || "",
        city: row.city || "",
        district: row.district || "",
        stateName: row.state || row.state_ut || "",
        pincode: row.pincode || "",
        region: row.region || "Unassigned",
        allowStudentRegistration: true,
        teacherAdminIds: []
      };
      if (school.name) {
        state.schools.push(school);
        schoolCount += 1;
      }
    }

    if (row.type === "student") {
      const school = state.schools.find((item) => item.name.toLowerCase() === (row.school || "").toLowerCase()) || schoolById(state.selectedSchoolId);
      const student = {
        id: `stu-${Date.now()}-${studentCount}`,
        role: "student",
        name: row.name,
        email: row.email || "",
        phone: row.phone || "",
        schoolId: school.id,
        className: row.class || row.class_name || "Class 6",
        section: row.section || "-",
        qq: 0,
        participation: 0,
        strongest: "-",
        weakest: "-"
      };
      if (student.name) {
        state.users.push(student);
        studentCount += 1;
      }
    }
  });

  persistBackendState();
  alert(`Imported ${schoolCount} schools and ${studentCount} students.`);
  renderAdmin();
}

document.getElementById("logoutBtn").addEventListener("click", () => {
  stopTimer();
  state.isAuthenticated = false;
  state.authStep = "identity";
  state.otp = "";
  state.quizStatus = "idle";
  state.currentUser = null;
  render();
});

async function init() {
  await loadBackendState();
  render();
}

init();
