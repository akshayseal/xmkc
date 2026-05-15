const roleProfiles = {
  student: {
    id: "stu-aarav",
    name: "Aarav Mehta",
    role: "student",
    email: "aarav@dps.edu",
    phone: "+91 98765 00001",
    school: "Delhi Public School",
    className: "Class 6",
    section: "A",
    group: "Group 2",
    city: "Delhi",
    stateName: "Delhi",
    region: "North"
  },
  teacher: {
    id: "tea-priya",
    name: "Priya Nair",
    role: "teacher",
    email: "priya@dps.edu",
    school: "Delhi Public School",
    className: "Class 6",
    section: "All",
    group: "Group 2",
    city: "Delhi",
    stateName: "Delhi",
    region: "North"
  },
  admin: {
    id: "adm-xmkc",
    name: "XMKC Admin",
    role: "admin",
    email: "admin@xmkc.in",
    school: "XM Knowledge Club",
    className: "All Classes",
    section: "All",
    group: "All Groups",
    city: "National",
    stateName: "National",
    region: "National"
  }
};

const state = {
  isAuthenticated: false,
  authStep: "identity",
  loginMode: "login",
  identity: "",
  otp: "",
  role: "student",
  activeView: "dashboard",
  activeModuleId: "mod-world",
  activeQuizId: "quiz-world-1",
  quizStatus: "idle",
  currentQuestionIndex: 0,
  questionStartedAt: null,
  timerId: null,
  timeRemaining: 0,
  answers: [],
  lastResult: null,
  attempts: [
    { quizId: "quiz-science-1", moduleId: "mod-science", score: 70, accuracy: 70, speed: 74, subject: "Science", submittedAt: "2026-07-12" },
    { quizId: "quiz-culture-1", moduleId: "mod-culture", score: 80, accuracy: 80, speed: 78, subject: "Culture", submittedAt: "2026-08-08" }
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
      status: "live"
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
      status: "completed"
    },
    {
      id: "mod-culture",
      title: "Culture Quest",
      className: "Class 6",
      group: "Group 2",
      subject: "Culture",
      term: 1,
      materialType: "DOCX",
      materialName: "Culture Quest Notes.docx",
      materialNote: "Festivals, books, music, art and Indian heritage.",
      status: "completed"
    },
    {
      id: "mod-class8",
      title: "Global Power & Policy",
      className: "Class 8",
      group: "Group 3",
      subject: "Civics",
      term: 1,
      materialType: "PDF",
      materialName: "Global Power Notes.pdf",
      materialNote: "Visible only to Class 8 students.",
      status: "live"
    }
  ],
  quizzes: [
    { id: "quiz-world-1", moduleId: "mod-world", title: "India & The World Quiz", questionIds: ["q1", "q2", "q3", "q4"] },
    { id: "quiz-science-1", moduleId: "mod-science", title: "Science Around Us Quiz", questionIds: ["q5", "q6"] },
    { id: "quiz-culture-1", moduleId: "mod-culture", title: "Culture Quest Quiz", questionIds: ["q7", "q8"] }
  ],
  questions: [
    {
      id: "q1",
      moduleId: "mod-world",
      type: "mcq",
      prompt: "Which Indian city hosted the G20 Leaders' Summit in 2023?",
      options: ["Mumbai", "New Delhi", "Bengaluru", "Hyderabad"],
      answer: "New Delhi",
      timerSeconds: 30,
      explanation: "The 2023 G20 Leaders' Summit was held in New Delhi."
    },
    {
      id: "q2",
      moduleId: "mod-world",
      type: "image",
      prompt: "Identify the country represented by this visual clue.",
      media: "🗼",
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
      answer: "canberra",
      timerSeconds: 35,
      explanation: "Canberra is the capital city of Australia."
    },
    {
      id: "q4",
      moduleId: "mod-world",
      type: "text",
      prompt: "Type the answer: Which ocean lies to the south of India?",
      answer: "indian ocean",
      timerSeconds: 35,
      explanation: "The Indian Ocean lies to the south of India."
    },
    {
      id: "q5",
      moduleId: "mod-science",
      type: "mcq",
      prompt: "Which planet is known for its rings?",
      options: ["Mars", "Saturn", "Venus", "Mercury"],
      answer: "Saturn",
      timerSeconds: 25,
      explanation: "Saturn has the most visible ring system in our solar system."
    },
    {
      id: "q6",
      moduleId: "mod-science",
      type: "text",
      prompt: "Type the answer: What gas do plants absorb during photosynthesis?",
      answer: "carbon dioxide",
      timerSeconds: 35,
      explanation: "Plants absorb carbon dioxide and release oxygen during photosynthesis."
    },
    {
      id: "q7",
      moduleId: "mod-culture",
      type: "text",
      prompt: "Which festival is known as the festival of lights?",
      answer: "diwali",
      timerSeconds: 30,
      explanation: "Diwali is widely known as the festival of lights."
    },
    {
      id: "q8",
      moduleId: "mod-culture",
      type: "mcq",
      prompt: "The classical dance form Kathak is strongly associated with which region?",
      options: ["North India", "Kerala", "Assam", "Tamil Nadu"],
      answer: "North India",
      timerSeconds: 30,
      explanation: "Kathak developed as a major classical dance tradition of North India."
    }
  ],
  students: [
    { name: "Aarav Mehta", className: "Class 6", section: "A", school: "Delhi Public School", city: "Delhi", stateName: "Delhi", region: "North", qq: 82, participation: 76, strongest: "Culture", weakest: "Science" },
    { name: "Anaya Rao", className: "Class 6", section: "B", school: "Delhi Public School", city: "Delhi", stateName: "Delhi", region: "North", qq: 91, participation: 94, strongest: "Current Affairs", weakest: "Sports" },
    { name: "Kabir Sethi", className: "Class 6", section: "A", school: "Delhi Public School", city: "Delhi", stateName: "Delhi", region: "North", qq: 86, participation: 89, strongest: "Science", weakest: "Culture" },
    { name: "Meera Iyer", className: "Class 6", section: "C", school: "Sunrise International", city: "Bengaluru", stateName: "Karnataka", region: "South", qq: 84, participation: 88, strongest: "Science", weakest: "History" },
    { name: "Zoya Khan", className: "Class 6", section: "B", school: "Greenfield Academy", city: "Mumbai", stateName: "Maharashtra", region: "West", qq: 81, participation: 82, strongest: "Culture", weakest: "Science" }
  ],
  schools: [
    { name: "Delhi Public School", city: "Delhi", stateName: "Delhi", region: "North", students: 842 },
    { name: "Greenfield Academy", city: "Mumbai", stateName: "Maharashtra", region: "West", students: 516 },
    { name: "Sunrise International", city: "Bengaluru", stateName: "Karnataka", region: "South", students: 624 }
  ]
};

const navItems = [
  { id: "dashboard", label: "Dashboard", roles: ["student", "teacher", "admin"] },
  { id: "study", label: "Study Modules", roles: ["student", "teacher", "admin"] },
  { id: "quiz", label: "Play Quiz", roles: ["student"] },
  { id: "leaderboard", label: "Leaderboard", roles: ["student", "teacher", "admin"] },
  { id: "report", label: "My Report Card", roles: ["student"] },
  { id: "teacherReports", label: "Student Reports", roles: ["teacher"] },
  { id: "builder", label: "Module & Quiz Maker", roles: ["admin"] },
  { id: "admin", label: "Schools", roles: ["admin"] }
];

const viewTitles = {
  dashboard: "Dashboard",
  study: "Study Modules",
  quiz: "Play Quiz",
  results: "Quiz Results",
  leaderboard: "Leaderboard",
  report: "My Report Card",
  teacherReports: "Student Reports",
  builder: "Module & Quiz Maker",
  admin: "Schools"
};

function profile() {
  return roleProfiles[state.role];
}

function visibleModules() {
  const user = profile();
  if (state.role === "admin" || state.role === "teacher") return state.modules;
  return state.modules.filter((module) => module.className === user.className && module.group === user.group);
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

function average(values) {
  if (!values.length) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function calculateQQ() {
  const accuracy = average(state.attempts.map((attempt) => attempt.accuracy));
  const speed = average(state.attempts.map((attempt) => attempt.speed));
  const subjectScores = new Map();
  state.attempts.forEach((attempt) => subjectScores.set(attempt.subject, attempt.score));
  const scores = [...subjectScores.values()];
  const consistency = scores.length > 1 ? Math.max(0, 100 - (Math.max(...scores) - Math.min(...scores))) : 75;
  const trend = state.attempts.length > 1
    ? Math.max(50, Math.min(100, 75 + state.attempts[state.attempts.length - 1].score - state.attempts[0].score))
    : 75;
  const participation = Math.min(100, Math.round((state.attempts.length / Math.max(1, visibleModules().length)) * 100));
  return Math.round(accuracy * 0.5 + speed * 0.2 + consistency * 0.1 + trend * 0.1 + participation * 0.1);
}

function normalizeAnswer(value) {
  return String(value || "").trim().replace(/\s+/g, " ").toLowerCase();
}

function isCorrect(question, answer) {
  return normalizeAnswer(answer) === normalizeAnswer(question.answer);
}

function setView(view) {
  if (!canSeeView(view)) view = "dashboard";
  state.activeView = view;
  render();
}

function canSeeView(view) {
  const item = navItems.find((navItem) => navItem.id === view);
  if (view === "results") return state.role === "student";
  return !item || item.roles.includes(state.role);
}

function render() {
  renderAuth();
  document.getElementById("authPage").classList.toggle("hidden", state.isAuthenticated);
  document.getElementById("appShell").classList.toggle("hidden", !state.isAuthenticated);
  if (!state.isAuthenticated) return;

  renderNavigation();
  renderDashboard();
  renderStudy();
  renderQuiz();
  renderResults();
  renderLeaderboard();
  renderReport();
  renderTeacherReports();
  renderBuilder();
  renderAdmin();
}

function renderAuth() {
  const authPage = document.getElementById("authPage");
  authPage.innerHTML = `
    <div class="auth-card">
      <div class="auth-copy">
        <div class="brand large">
          <div class="brand-mark">XM</div>
          <div>
            <strong>XM Knowledge Club</strong>
            <span>Curiosity, quizzes and Quiz Quotient growth</span>
          </div>
        </div>
        <h1>${state.loginMode === "login" ? "Welcome back" : "Create your account"}</h1>
        <p>Students play curriculum-linked quizzes, teachers track school performance, and XMKC admins build modules and assessments.</p>
        <div class="auth-highlights">
          <span>OTP login</span>
          <span>Class-wise modules</span>
          <span>Live QQ updates</span>
        </div>
      </div>

      <div class="auth-form">
        <div class="segmented">
          <button class="${state.loginMode === "login" ? "active" : ""}" data-auth-mode="login">Login</button>
          <button class="${state.loginMode === "signup" ? "active" : ""}" data-auth-mode="signup">Signup</button>
        </div>
        <label>Email or phone
          <input id="identityInput" value="${state.identity}" placeholder="student@school.edu or +91..." />
        </label>
        <label>Profile type
          <select id="roleInput">
            <option value="student" ${state.role === "student" ? "selected" : ""}>Student</option>
            <option value="teacher" ${state.role === "teacher" ? "selected" : ""}>Teacher</option>
            <option value="admin" ${state.role === "admin" ? "selected" : ""}>XMKC Admin</option>
          </select>
        </label>
        ${
          state.authStep === "otp"
            ? `<label>Enter OTP
                <input id="otpInput" value="${state.otp}" inputmode="numeric" maxlength="6" placeholder="123456" />
              </label>`
            : ""
        }
        <button id="authPrimaryBtn" class="primary-button">
          ${state.authStep === "identity" ? "Send OTP" : "Verify OTP"}
        </button>
        <p class="muted small">Prototype note: any 6-digit OTP will work.</p>
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

  document.getElementById("authPrimaryBtn").addEventListener("click", () => {
    state.identity = document.getElementById("identityInput").value.trim();
    state.role = document.getElementById("roleInput").value;
    if (!state.identity) return;
    if (state.authStep === "identity") {
      state.authStep = "otp";
      state.otp = "";
      renderAuth();
      return;
    }
    state.otp = document.getElementById("otpInput").value.trim();
    if (state.otp.length !== 6) return;
    state.isAuthenticated = true;
    state.activeView = defaultViewForRole();
    render();
  });
}

function defaultViewForRole() {
  if (state.role === "teacher") return "teacherReports";
  if (state.role === "admin") return "builder";
  return "dashboard";
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
  document.getElementById("profileName").textContent = user.name;
  document.getElementById("profileMeta").textContent = `${capitalize(user.role)} · ${user.className} · ${user.school}`;
  document.getElementById("viewTitle").textContent = viewTitles[state.activeView] || "Dashboard";
  document.getElementById("otpStatus").textContent = `OTP verified: ${state.identity || user.email}`;
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function renderDashboard() {
  const dashboard = document.getElementById("dashboard");
  const qq = calculateQQ();
  const userModules = visibleModules();
  dashboard.innerHTML = `
    <div class="grid">
      <div class="metric span-4"><strong>${qq}</strong><span>Current Quiz Quotient</span></div>
      <div class="metric span-4"><strong>${state.attempts.length}</strong><span>Quizzes completed</span></div>
      <div class="metric span-4"><strong>${userModules.length}</strong><span>Visible modules for ${profile().className}</span></div>

      <div class="panel span-7">
        <p class="eyebrow">Year Journey</p>
        <h2>Modules assigned to this profile</h2>
        <div class="module-grid">
          ${userModules.map((module) => renderModuleRow(module)).join("")}
        </div>
      </div>

      <div class="panel span-5">
        <p class="eyebrow">Engagement</p>
        <h2>Keep students playing</h2>
        <div class="module-grid">
          ${renderHabit("Daily GK Sprint", "3 quick questions every morning", "7 day streak")}
          ${renderHabit("Weak Area Practice", "Smart revision from missed answers", "Science")}
          ${renderHabit("Class League", "Weekly class scoreboard reset", "2 days left")}
          ${renderHabit("Showcase Teams", "Build teams for annual quiz", "Coming soon")}
        </div>
      </div>
    </div>
  `;
}

function renderModuleRow(module) {
  const quiz = state.quizzes.find((item) => item.moduleId === module.id);
  const attempted = state.attempts.some((attempt) => attempt.quizId === quiz?.id);
  return `
    <div class="module-card">
      <div>
        <strong>${module.title}</strong>
        <p class="muted">${module.className} · ${module.group} · ${module.materialName}</p>
      </div>
      <span class="status-pill ${attempted ? "done" : "live"}">${attempted ? "Completed" : "Live"}</span>
    </div>
  `;
}

function renderHabit(title, description, label) {
  return `
    <div class="module-card">
      <div>
        <strong>${title}</strong>
        <p class="muted">${description}</p>
      </div>
      <span class="status-pill live">${label}</span>
    </div>
  `;
}

function renderStudy() {
  const study = document.getElementById("study");
  study.innerHTML = `
    <div class="grid">
      ${visibleModules().map((module) => `
        <div class="panel span-6">
          <p class="eyebrow">${module.className} · ${module.group}</p>
          <h2>${module.title}</h2>
          <p class="muted">${module.materialNote}</p>
          <div class="material-chip">${module.materialType}</div>
          <strong>${module.materialName}</strong>
          ${state.role === "student" ? `<button class="primary-button start-module" data-module-id="${module.id}">Study & Play Quiz</button>` : ""}
        </div>
      `).join("")}
    </div>
  `;

  document.querySelectorAll(".start-module").forEach((button) => {
    button.addEventListener("click", () => {
      const quiz = state.quizzes.find((item) => item.moduleId === button.dataset.moduleId);
      if (!quiz) return;
      state.activeModuleId = button.dataset.moduleId;
      state.activeQuizId = quiz.id;
      startQuiz();
    });
  });
}

function startQuiz() {
  stopTimer();
  state.quizStatus = "playing";
  state.currentQuestionIndex = 0;
  state.answers = [];
  state.lastResult = null;
  state.activeView = "quiz";
  render();
  startQuestionTimer();
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

function renderQuiz() {
  const quiz = document.getElementById("quiz");
  if (state.role !== "student") {
    quiz.innerHTML = `<div class="panel"><h2>Quiz play is only available to students.</h2></div>`;
    return;
  }

  if (state.quizStatus !== "playing") {
    const firstQuiz = state.quizzes.find((item) => visibleModules().some((module) => module.id === item.moduleId));
    quiz.innerHTML = `
      <div class="quiz-card">
        <p class="eyebrow">Ready</p>
        <h2>${firstQuiz?.title || "No quiz assigned"}</h2>
        <p class="muted">Start a quiz to update your Quiz Quotient after submission.</p>
        <button id="startQuizBtn" class="primary-button">Start Quiz</button>
      </div>
    `;
    document.getElementById("startQuizBtn")?.addEventListener("click", () => {
      state.activeQuizId = firstQuiz.id;
      state.activeModuleId = firstQuiz.moduleId;
      startQuiz();
    });
    return;
  }

  const question = currentQuestion();
  const questionCount = activeQuestions().length;
  const submittedAnswer = state.answers[state.currentQuestionIndex];
  const existingAnswer = submittedAnswer?.answer || "";
  quiz.innerHTML = `
    <div class="quiz-card">
      <div class="row between">
        <div>
          <p class="eyebrow">${activeQuiz().title}</p>
          <h2>Question ${state.currentQuestionIndex + 1} of ${questionCount}</h2>
        </div>
        <strong id="questionTimer" class="timer">00:${String(state.timeRemaining).padStart(2, "0")}</strong>
      </div>
      ${question.media ? `<div class="quiz-media">${question.media}</div>` : ""}
      <h3>${question.prompt}</h3>
      ${renderQuestionInput(question, existingAnswer)}
      <div id="answerFeedback">
        ${submittedAnswer ? renderAnswerFeedback(question, submittedAnswer) : ""}
      </div>
      <div class="row between quiz-actions">
        <button class="ghost-button" id="quitQuizBtn">Quit</button>
        ${
          submittedAnswer
            ? `<button class="primary-button" id="nextQuestionBtn">${state.currentQuestionIndex === questionCount - 1 ? "Finish Quiz" : "Next Question"}</button>`
            : `<button class="primary-button" id="submitAnswerBtn">Submit Answer</button>`
        }
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
    state.activeView = "dashboard";
    render();
  });
  document.getElementById("submitAnswerBtn")?.addEventListener("click", () => submitAnswer(false));
  document.getElementById("nextQuestionBtn")?.addEventListener("click", nextQuestionOrFinish);
  updateTimerDisplay();
}

function renderQuestionInput(question, existingAnswer) {
  if (question.type === "mcq" || question.type === "image") {
    return `
      <div class="quiz-options">
        ${question.options.map((option) => `
          <button class="option-button ${existingAnswer === option ? "selected" : ""}" data-option="${option}">${option}</button>
        `).join("")}
      </div>
    `;
  }

  return `<input id="typedAnswer" placeholder="Type your answer" value="${existingAnswer}" />`;
}

function getCurrentAnswer() {
  const question = currentQuestion();
  if (question.type === "mcq" || question.type === "image") {
    return document.querySelector(".option-button.selected")?.dataset.option || "";
  }
  return document.getElementById("typedAnswer")?.value || "";
}

function submitAnswer(timedOut) {
  const question = currentQuestion();
  const answer = timedOut ? "" : getCurrentAnswer();
  const spentSeconds = Math.max(1, Math.round((Date.now() - state.questionStartedAt) / 1000));
  const correct = isCorrect(question, answer);

  state.answers[state.currentQuestionIndex] = {
    questionId: question.id,
    answer,
    correct,
    spentSeconds,
    timedOut
  };

  stopTimer();
  renderQuiz();
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
    renderQuiz();
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
    answers: state.answers.map((answer) => ({
      ...answer,
      question: state.questions.find((question) => question.id === answer.questionId)
    }))
  };

  state.attempts.push(result);
  state.lastResult = result;
  state.quizStatus = "completed";
  state.activeView = "results";
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
        <button class="primary-button" id="goReportBtn">View Report Card</button>
      </div>
    </div>
  `;
  document.getElementById("goReportBtn").addEventListener("click", () => setView("report"));
}

function renderLeaderboard() {
  const leaderboard = document.getElementById("leaderboard");
  const rows = state.students
    .map((student) => student.name === "Aarav Mehta" ? { ...student, qq: calculateQQ() } : student)
    .sort((a, b) => b.qq - a.qq);

  leaderboard.innerHTML = `
    <div class="panel">
      <p class="eyebrow">Rank Explorer</p>
      <h2>Filter rankings by geography</h2>
      <div class="filters">
        ${["Class", "School", "City", "State", "Region", "National"].map((label) => `<button class="ghost-button">${label}</button>`).join("")}
      </div>
      ${rows.map((student, index) => `
        <div class="leader-row">
          <span class="rank">${index + 1}</span>
          <div>
            <strong>${student.name}</strong>
            <p class="muted">${student.className} ${student.section} · ${student.school} · ${student.city}</p>
          </div>
          <strong>QQ ${student.qq}</strong>
          <span class="muted">${student.region}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function renderReport() {
  const report = document.getElementById("report");
  const qq = calculateQQ();
  const subjectMap = new Map();
  state.attempts.forEach((attempt) => subjectMap.set(attempt.subject, attempt.score));
  const subjects = [...subjectMap.entries()];

  report.innerHTML = `
    <div class="report-page">
      <div class="report-header">
        <div>
          <p class="eyebrow">Mid-Year Report Card</p>
          <h2>${profile().name}</h2>
          <p class="muted">${profile().group} · ${profile().className} ${profile().section} · ${profile().school}</p>
        </div>
        <div class="qq-score">${qq}</div>
      </div>
      <div class="report-grid">
        <div>
          <h3>Quiz Quotient Breakdown</h3>
          ${renderBar("Accuracy", Math.round(average(state.attempts.map((attempt) => attempt.accuracy))))}
          ${renderBar("Speed", Math.round(average(state.attempts.map((attempt) => attempt.speed))))}
          ${renderBar("Participation", Math.min(100, Math.round((state.attempts.length / visibleModules().length) * 100)))}
          ${renderBar("Improvement", 84)}
        </div>
        <div>
          <h3>Subject Performance</h3>
          ${subjects.map(([label, value]) => renderBar(label, value)).join("")}
        </div>
      </div>
      <div class="panel note-panel">
        <p class="eyebrow">Teacher Comment</p>
        <p>Aarav shows strong curiosity and improving quiz discipline. Next focus: revise weak areas before playing timed quizzes.</p>
      </div>
    </div>
  `;
}

function renderBar(label, value) {
  return `
    <div class="bar">
      <span>${label}</span>
      <div class="progress-track"><div class="progress-fill" style="--value: ${Math.max(0, Math.min(100, value))}%"></div></div>
      <strong>${value}</strong>
    </div>
  `;
}

function renderTeacherReports() {
  const reports = document.getElementById("teacherReports");
  const teacher = profile();
  const rows = state.students.filter((student) => student.school === teacher.school);
  reports.innerHTML = `
    <div class="panel">
      <p class="eyebrow">School Report Cards</p>
      <h2>${teacher.school}</h2>
      <p class="muted">Teachers can view report cards for students in their own school. Quiz Maker is restricted to XMKC Admin.</p>
      <div class="table">
        <div class="table-row table-head"><span>Student</span><span>Class</span><span>QQ</span><span>Participation</span><span>Strongest</span><span>Weakest</span></div>
        ${rows.map((student) => `
          <div class="table-row"><span>${student.name}</span><span>${student.className} ${student.section}</span><span>${student.qq}</span><span>${student.participation}%</span><span>${student.strongest}</span><span>${student.weakest}</span></div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderBuilder() {
  const builder = document.getElementById("builder");
  builder.innerHTML = `
    <div class="grid">
      <div class="panel span-5">
        <p class="eyebrow">Create Module</p>
        <h2>Study material setup</h2>
        <div class="form-grid">
          <label>Module title<input id="moduleTitle" placeholder="Sports, Tech & Media" /></label>
          <label>Class
            <select id="moduleClass">
              <option>Class 4</option><option>Class 5</option><option selected>Class 6</option><option>Class 7</option><option>Class 8</option>
            </select>
          </label>
          <label>Group
            <select id="moduleGroup"><option>Group 1</option><option selected>Group 2</option><option>Group 3</option></select>
          </label>
          <label>Subject<input id="moduleSubject" placeholder="Current Affairs" /></label>
        </div>
        <label>Upload study material
          <input id="moduleMaterial" type="file" accept=".pdf,.ppt,.pptx,.doc,.docx" />
        </label>
        <label>Material summary<textarea id="moduleNote" rows="3" placeholder="What students will study"></textarea></label>
        <button id="createModuleBtn" class="primary-button">Create Module</button>
      </div>

      <div class="panel span-7">
        <p class="eyebrow">Question Maker</p>
        <h2>Create question inside a module</h2>
        <div class="form-grid">
          <label>Module
            <select id="questionModule">
              ${state.modules.map((module) => `<option value="${module.id}">${module.title} · ${module.className}</option>`).join("")}
            </select>
          </label>
          <label>Question type
            <select id="questionType">
              <option value="mcq">MCQ</option>
              <option value="fill">Fill in the blanks</option>
              <option value="text">Type the answer</option>
              <option value="image">Image based</option>
            </select>
          </label>
        </div>
        <label>Question prompt<textarea id="questionPrompt" rows="3" placeholder="Write the question"></textarea></label>
        <div id="mcqFields" class="form-grid">
          <label>Option A<input id="optionA" placeholder="Option A" /></label>
          <label>Option B<input id="optionB" placeholder="Option B" /></label>
          <label>Option C<input id="optionC" placeholder="Option C" /></label>
          <label>Option D<input id="optionD" placeholder="Option D" /></label>
          <label>Correct option
            <select id="correctOption"><option>A</option><option>B</option><option>C</option><option>D</option></select>
          </label>
          <label>Timer seconds<input id="timerSeconds" type="number" value="30" min="10" max="120" /></label>
        </div>
        <div id="textFields" class="form-grid hidden">
          <label>Correct answer<input id="textAnswer" placeholder="Case agnostic answer" /></label>
          <label>Timer seconds<input id="textTimerSeconds" type="number" value="30" min="10" max="120" /></label>
        </div>
        <label>Explanation<textarea id="questionExplanation" rows="3" placeholder="Explain the correct answer"></textarea></label>
        <button id="addQuestionBtn" class="primary-button">Add Question</button>
      </div>

      <div class="panel span-12">
        <p class="eyebrow">Published Modules</p>
        <h2>${state.modules.length} modules</h2>
        <div class="module-grid">${state.modules.map((module) => renderModuleRow(module)).join("")}</div>
      </div>
    </div>
  `;

  document.getElementById("questionType").addEventListener("change", toggleQuestionFields);
  document.getElementById("createModuleBtn").addEventListener("click", createModule);
  document.getElementById("addQuestionBtn").addEventListener("click", createQuestion);
}

function toggleQuestionFields() {
  const type = document.getElementById("questionType").value;
  document.getElementById("mcqFields").classList.toggle("hidden", !(type === "mcq" || type === "image"));
  document.getElementById("textFields").classList.toggle("hidden", type === "mcq" || type === "image");
}

function createModule() {
  const material = document.getElementById("moduleMaterial").files[0];
  const title = document.getElementById("moduleTitle").value.trim();
  if (!title) return;

  state.modules.push({
    id: `mod-${Date.now()}`,
    title,
    className: document.getElementById("moduleClass").value,
    group: document.getElementById("moduleGroup").value,
    subject: document.getElementById("moduleSubject").value.trim() || "General Knowledge",
    term: 1,
    materialType: material ? material.name.split(".").pop().toUpperCase() : "PDF",
    materialName: material ? material.name : "Study Material.pdf",
    materialNote: document.getElementById("moduleNote").value.trim() || "Study material uploaded by XMKC Admin.",
    status: "live"
  });
  renderBuilder();
}

function createQuestion() {
  const type = document.getElementById("questionType").value;
  const moduleId = document.getElementById("questionModule").value;
  const prompt = document.getElementById("questionPrompt").value.trim();
  const explanation = document.getElementById("questionExplanation").value.trim() || "Explanation will be expanded before publishing.";
  if (!prompt) return;

  let options = [];
  let answer = "";
  let timerSeconds = 30;

  if (type === "mcq" || type === "image") {
    options = ["optionA", "optionB", "optionC", "optionD"].map((id) => document.getElementById(id).value.trim());
    const answerIndex = ["A", "B", "C", "D"].indexOf(document.getElementById("correctOption").value);
    answer = options[answerIndex];
    timerSeconds = Number(document.getElementById("timerSeconds").value || 30);
    if (options.some((option) => !option) || !answer) return;
  } else {
    answer = document.getElementById("textAnswer").value.trim();
    timerSeconds = Number(document.getElementById("textTimerSeconds").value || 30);
    if (!answer) return;
  }

  const questionId = `q${Date.now()}`;
  state.questions.push({
    id: questionId,
    moduleId,
    type,
    prompt,
    options,
    answer,
    timerSeconds,
    explanation,
    media: type === "image" ? "🖼️" : ""
  });

  let quiz = state.quizzes.find((item) => item.moduleId === moduleId);
  if (!quiz) {
    const module = state.modules.find((item) => item.id === moduleId);
    quiz = { id: `quiz-${Date.now()}`, moduleId, title: `${module.title} Quiz`, questionIds: [] };
    state.quizzes.push(quiz);
  }
  quiz.questionIds.push(questionId);
  renderBuilder();
}

function renderAdmin() {
  const admin = document.getElementById("admin");
  admin.innerHTML = `
    <div class="grid">
      ${state.schools.map((school) => `
        <div class="metric span-4">
          <strong>${school.students}</strong>
          <span>${school.name}<br>${school.city}, ${school.stateName} · ${school.region}</span>
        </div>
      `).join("")}
      <div class="panel span-12">
        <p class="eyebrow">Subscription Controls</p>
        <h2>School onboarding checklist</h2>
        <div class="module-grid">
          ${renderAdminStep("Create school tenant", "done", "Done")}
          ${renderAdminStep("Import students and teachers", "live", "CSV")}
          ${renderAdminStep("Assign class groups", "live", "Group 1-3")}
          ${renderAdminStep("Enable annual plan", "locked", "Billing")}
        </div>
      </div>
    </div>
  `;
}

function renderAdminStep(title, status, label) {
  return `
    <div class="module-card">
      <div>
        <strong>${title}</strong>
        <p class="muted">Subscription setup and school rollout</p>
      </div>
      <span class="status-pill ${status}">${label}</span>
    </div>
  `;
}

document.getElementById("switchRoleBtn").addEventListener("click", () => {
  stopTimer();
  const roles = ["student", "teacher", "admin"];
  state.role = roles[(roles.indexOf(state.role) + 1) % roles.length];
  state.activeView = defaultViewForRole();
  state.quizStatus = "idle";
  render();
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  stopTimer();
  state.isAuthenticated = false;
  state.authStep = "identity";
  state.otp = "";
  state.quizStatus = "idle";
  render();
});

render();
