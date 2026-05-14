const state = {
  role: "student",
  activeView: "dashboard",
  currentQuestionIndex: 0,
  selectedAnswer: null,
  quizSubmitted: false,
  identity: "aarav@dps.edu",
  schools: [
    { name: "Delhi Public School", city: "Delhi", state: "Delhi", region: "North", students: 842 },
    { name: "Greenfield Academy", city: "Mumbai", state: "Maharashtra", region: "West", students: 516 },
    { name: "Sunrise International", city: "Bengaluru", state: "Karnataka", region: "South", students: 624 }
  ],
  questions: [
    {
      id: "q1",
      type: "mcq",
      module: "India & The World",
      subject: "Current Affairs",
      difficulty: "Intermediate",
      prompt: "Which Indian city hosted the G20 Leaders' Summit in 2023?",
      options: ["Mumbai", "New Delhi", "Bengaluru", "Hyderabad"],
      answer: "New Delhi",
      explanation: "The 2023 G20 Leaders' Summit was held in New Delhi."
    },
    {
      id: "q2",
      type: "image",
      module: "Science Around Us",
      subject: "Science",
      difficulty: "Foundational",
      prompt: "Identify the planet represented by this clue.",
      media: "🪐",
      options: ["Mars", "Saturn", "Venus", "Neptune"],
      answer: "Saturn",
      explanation: "Saturn is famous for its bright ring system."
    },
    {
      id: "q3",
      type: "text",
      module: "Culture Quest",
      subject: "Culture",
      difficulty: "Intermediate",
      prompt: "Type the answer: Which festival is known as the festival of lights?",
      answer: "diwali",
      explanation: "Diwali is widely known as the festival of lights."
    }
  ],
  attempts: [
    { quiz: "Module 1 Quiz", score: 84, speed: 76, subject: "Current Affairs" },
    { quiz: "Module 2 Quiz", score: 78, speed: 81, subject: "Science" },
    { quiz: "Module 3 Quiz", score: 92, speed: 72, subject: "Culture" }
  ],
  leaderboard: [
    { name: "Anaya Rao", class: "6B", school: "Delhi Public School", city: "Delhi", state: "Delhi", region: "North", qq: 91 },
    { name: "Aarav Mehta", class: "6A", school: "Delhi Public School", city: "Delhi", state: "Delhi", region: "North", qq: 88 },
    { name: "Kabir Sethi", class: "6A", school: "Delhi Public School", city: "Delhi", state: "Delhi", region: "North", qq: 86 },
    { name: "Meera Iyer", class: "6C", school: "Sunrise International", city: "Bengaluru", state: "Karnataka", region: "South", qq: 84 },
    { name: "Zoya Khan", class: "6B", school: "Greenfield Academy", city: "Mumbai", state: "Maharashtra", region: "West", qq: 81 }
  ]
};

const profileByRole = {
  student: {
    name: "Aarav Mehta",
    meta: "Student · Class 6 · Delhi Public School"
  },
  teacher: {
    name: "Priya Nair",
    meta: "Teacher · Group 2 Coordinator · Delhi Public School"
  },
  admin: {
    name: "XMKC Admin",
    meta: "Admin · Content, schools and subscriptions"
  }
};

const views = {
  dashboard: "Dashboard",
  quiz: "Play Quiz",
  leaderboard: "Leaderboard",
  report: "Report Card",
  builder: "Quiz Maker",
  admin: "Schools"
};

function calculateQQ() {
  const accuracy = average(state.attempts.map((attempt) => attempt.score));
  const speed = average(state.attempts.map((attempt) => attempt.speed));
  const consistency = 82;
  const trend = 88;
  const participation = 75;

  return Math.round(
    accuracy * 0.5 +
      speed * 0.2 +
      consistency * 0.1 +
      trend * 0.1 +
      participation * 0.1
  );
}

function average(values) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function render() {
  updateNavigation();
  renderDashboard();
  renderQuiz();
  renderLeaderboard();
  renderReport();
  renderBuilder();
  renderAdmin();
}

function updateNavigation() {
  document.querySelectorAll(".nav-item").forEach((button) => {
    const view = button.dataset.view;
    button.classList.toggle("active", view === state.activeView);
    button.classList.toggle("hidden", !canSeeView(view));
  });

  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("active", view.id === state.activeView);
  });

  const profile = profileByRole[state.role];
  document.getElementById("profileName").textContent = profile.name;
  document.getElementById("profileMeta").textContent = profile.meta;
  document.getElementById("viewTitle").textContent = views[state.activeView];
  document.getElementById("otpStatus").textContent = `OTP verified: ${state.identity}`;
}

function canSeeView(view) {
  if (view === "builder") return state.role === "teacher" || state.role === "admin";
  if (view === "admin") return state.role === "admin";
  return true;
}

function renderDashboard() {
  const qq = calculateQQ();
  const dashboard = document.getElementById("dashboard");
  dashboard.innerHTML = `
    <div class="grid">
      <div class="metric span-4"><strong>${qq}</strong><span>Current Quiz Quotient</span></div>
      <div class="metric span-4"><strong>#2</strong><span>School rank in Class 6</span></div>
      <div class="metric span-4"><strong>9/12</strong><span>Modules completed</span></div>

      <div class="panel span-7">
        <p class="eyebrow">Year Journey</p>
        <h2>12-module progress map</h2>
        <div class="module-grid">
          ${renderModule("Baseline Quiz", "done", "Completed")}
          ${renderModule("India & The World", "done", "QQ +84")}
          ${renderModule("Science Around Us", "done", "QQ +78")}
          ${renderModule("Culture Quest", "done", "QQ +92")}
          ${renderModule("Sports, Tech & Media", "live", "Next quiz")}
          ${renderModule("Summative Quiz", "locked", "Term end")}
        </div>
      </div>

      <div class="panel span-5">
        <p class="eyebrow">Engagement</p>
        <h2>Keep students playing</h2>
        <div class="module-grid">
          ${renderHabit("Daily GK Sprint", "3 quick questions every morning", "7 day streak")}
          ${renderHabit("Weak Area Practice", "Smart revision from missed answers", "Science")}
          ${renderHabit("Class League", "Weekly class scoreboard reset", "2 days left")}
          ${renderHabit("Showcase Teams", "Build team mode for annual quiz", "Coming soon")}
        </div>
      </div>
    </div>
  `;
}

function renderModule(title, status, label) {
  return `
    <div class="module-card">
      <div>
        <strong>${title}</strong>
        <p class="muted">Study material, timed quiz and QQ update</p>
      </div>
      <span class="status-pill ${status}">${label}</span>
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

function renderQuiz() {
  const quiz = document.getElementById("quiz");
  const question = state.questions[state.currentQuestionIndex];
  const isText = question.type === "text";

  quiz.innerHTML = `
    <div class="quiz-card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <p class="eyebrow">${question.module} · ${question.difficulty}</p>
          <h2>Question ${state.currentQuestionIndex + 1} of ${state.questions.length}</h2>
        </div>
        <strong>00:${String(28 - state.currentQuestionIndex * 4).padStart(2, "0")}</strong>
      </div>
      ${question.media ? `<div class="quiz-media">${question.media}</div>` : ""}
      <h3>${question.prompt}</h3>
      ${
        isText
          ? `<input id="typedAnswer" placeholder="Type your answer" value="${state.selectedAnswer || ""}" />`
          : `<div class="quiz-options">${question.options
              .map((option) => renderOption(option, question.answer))
              .join("")}</div>`
      }
      ${
        state.quizSubmitted
          ? `<p class="muted"><strong>Explanation:</strong> ${question.explanation}</p>`
          : ""
      }
      <div class="row" style="justify-content: space-between; margin-top: 18px;">
        <button class="ghost-button" id="prevQuestionBtn">Previous</button>
        <div class="row">
          <button class="primary-button" id="submitAnswerBtn">Submit Answer</button>
          <button class="primary-button" id="nextQuestionBtn">Next</button>
        </div>
      </div>
    </div>
  `;

  if (!isText) {
    document.querySelectorAll(".option-button").forEach((button) => {
      button.addEventListener("click", () => {
        state.selectedAnswer = button.dataset.option;
        state.quizSubmitted = false;
        renderQuiz();
      });
    });
  }

  document.getElementById("prevQuestionBtn").addEventListener("click", () => {
    state.currentQuestionIndex = Math.max(0, state.currentQuestionIndex - 1);
    state.selectedAnswer = null;
    state.quizSubmitted = false;
    renderQuiz();
  });

  document.getElementById("nextQuestionBtn").addEventListener("click", () => {
    state.currentQuestionIndex = Math.min(state.questions.length - 1, state.currentQuestionIndex + 1);
    state.selectedAnswer = null;
    state.quizSubmitted = false;
    renderQuiz();
  });

  document.getElementById("submitAnswerBtn").addEventListener("click", () => {
    if (isText) state.selectedAnswer = document.getElementById("typedAnswer").value.trim();
    state.quizSubmitted = true;
    renderQuiz();
  });
}

function renderOption(option, answer) {
  const selected = state.selectedAnswer === option;
  const correctnessClass = state.quizSubmitted && selected
    ? option === answer ? "correct" : "wrong"
    : "";

  return `
    <button class="option-button ${selected ? "selected" : ""} ${correctnessClass}" data-option="${option}">
      ${option}
    </button>
  `;
}

function renderLeaderboard() {
  const leaderboard = document.getElementById("leaderboard");
  leaderboard.innerHTML = `
    <div class="panel">
      <p class="eyebrow">Rank Explorer</p>
      <h2>Filter rankings by geography</h2>
      <div class="filters">
        ${["Class", "School", "City", "State", "Region", "National"].map((label) => `
          <button class="ghost-button leaderboard-filter">${label}</button>
        `).join("")}
      </div>
      <div>
        ${state.leaderboard
          .sort((a, b) => b.qq - a.qq)
          .map((student, index) => `
            <div class="leader-row">
              <span class="rank">${index + 1}</span>
              <div>
                <strong>${student.name}</strong>
                <p class="muted">${student.class} · ${student.school} · ${student.city}</p>
              </div>
              <strong>QQ ${student.qq}</strong>
              <span class="muted">${student.region}</span>
            </div>
          `)
          .join("")}
      </div>
    </div>
  `;
}

function renderReport() {
  const qq = calculateQQ();
  const report = document.getElementById("report");
  const subjects = [
    ["Current Affairs", 84],
    ["Science", 78],
    ["Culture", 92],
    ["History", 81],
    ["Sports & Tech", 74]
  ];

  report.innerHTML = `
    <div class="report-page">
      <div class="report-header">
        <div>
          <p class="eyebrow">Mid-Year Report Card</p>
          <h2>Aarav Mehta</h2>
          <p class="muted">Group 2 · Class 6A · Delhi Public School · Academic Year 2026-27</p>
        </div>
        <div class="qq-score">${qq}</div>
      </div>

      <div class="report-grid">
        <div>
          <h3>Quiz Quotient Breakdown</h3>
          ${renderBar("Accuracy", 85)}
          ${renderBar("Speed", 76)}
          ${renderBar("Consistency", 82)}
          ${renderBar("Trend", 88)}
          ${renderBar("Participation", 75)}
        </div>
        <div>
          <h3>Subject Performance</h3>
          ${subjects.map(([label, value]) => renderBar(label, value)).join("")}
        </div>
      </div>

      <div class="panel" style="margin-top: 18px;">
        <p class="eyebrow">Teacher Comment</p>
        <p>Aarav shows strong curiosity and fast improvement in culture and current affairs. Next term should focus on science revision and steadier participation.</p>
      </div>
    </div>
  `;
}

function renderBar(label, value) {
  return `
    <div class="bar">
      <span>${label}</span>
      <div class="progress-track"><div class="progress-fill" style="--value: ${value}%"></div></div>
      <strong>${value}</strong>
    </div>
  `;
}

function renderBuilder() {
  const builder = document.getElementById("builder");
  builder.innerHTML = `
    <div class="grid">
      <div class="panel span-5">
        <p class="eyebrow">Create Question</p>
        <h2>Question bank editor</h2>
        <div class="form-grid">
          <label>Question type
            <select id="questionType">
              <option>MCQ</option>
              <option>Fill in the blanks</option>
              <option>Image based</option>
              <option>Type the answer</option>
              <option>True / False</option>
            </select>
          </label>
          <label>Group
            <select id="questionGroup">
              <option>Group 1</option>
              <option>Group 2</option>
              <option>Group 3</option>
            </select>
          </label>
        </div>
        <label>Question prompt
          <textarea id="questionPrompt" rows="4" placeholder="Write the question"></textarea>
        </label>
        <div class="form-grid">
          <label>Options
            <input id="questionOptions" placeholder="A | B | C | D" />
          </label>
          <label>Correct answer
            <input id="questionAnswer" placeholder="Case agnostic for typed answers" />
          </label>
        </div>
        <button id="addQuestionBtn" class="primary-button">Add Question</button>
      </div>

      <div class="panel span-7">
        <p class="eyebrow">Bulk Upload</p>
        <h2>CSV upload format</h2>
        <p class="muted">Columns: type, group, module, subject, difficulty, prompt, option_a, option_b, option_c, option_d, answer, explanation, media_url</p>
        <textarea rows="5" placeholder="Paste CSV rows here for prototype validation"></textarea>
        <div class="row" style="margin-top: 12px;">
          <button class="primary-button">Validate CSV</button>
          <button class="ghost-button">Download Template</button>
        </div>
      </div>

      <div class="panel span-12">
        <p class="eyebrow">Question Bank</p>
        <h2>${state.questions.length} questions ready</h2>
        ${state.questions.map((question) => `
          <div class="question-card" style="margin-bottom: 10px;">
            <strong>${question.prompt}</strong>
            <p class="muted">${question.type.toUpperCase()} · ${question.module} · Answer: ${question.answer}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `;

  document.getElementById("addQuestionBtn").addEventListener("click", () => {
    const prompt = document.getElementById("questionPrompt").value.trim();
    const answer = document.getElementById("questionAnswer").value.trim();
    const options = document.getElementById("questionOptions").value.split("|").map((item) => item.trim()).filter(Boolean);

    if (!prompt || !answer) return;

    state.questions.push({
      id: `q${Date.now()}`,
      type: document.getElementById("questionType").value.toLowerCase(),
      module: "Draft Module",
      subject: "General Knowledge",
      difficulty: document.getElementById("questionGroup").value,
      prompt,
      options,
      answer,
      explanation: "Explanation can be added before publishing."
    });

    renderBuilder();
  });
}

function renderAdmin() {
  const admin = document.getElementById("admin");
  admin.innerHTML = `
    <div class="grid">
      ${state.schools.map((school) => `
        <div class="metric span-4">
          <strong>${school.students}</strong>
          <span>${school.name}<br>${school.city}, ${school.state} · ${school.region}</span>
        </div>
      `).join("")}
      <div class="panel span-12">
        <p class="eyebrow">Subscription Controls</p>
        <h2>School onboarding checklist</h2>
        <div class="module-grid">
          ${renderModule("Create school tenant", "done", "Done")}
          ${renderModule("Import students and teachers", "live", "CSV")}
          ${renderModule("Assign class groups", "live", "Group 1-3")}
          ${renderModule("Enable annual plan", "locked", "Billing")}
        </div>
      </div>
    </div>
  `;
}

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    state.activeView = button.dataset.view;
    render();
  });
});

document.getElementById("switchRoleBtn").addEventListener("click", () => {
  const roles = ["student", "teacher", "admin"];
  state.role = roles[(roles.indexOf(state.role) + 1) % roles.length];
  if (!canSeeView(state.activeView)) state.activeView = "dashboard";
  render();
});

document.getElementById("openLoginBtn").addEventListener("click", () => {
  document.getElementById("loginDialog").showModal();
});

document.getElementById("verifyOtpBtn").addEventListener("click", (event) => {
  event.preventDefault();
  const identity = document.getElementById("loginIdentity").value.trim();
  const otp = document.getElementById("otpInput").value.trim();
  if (identity && otp.length === 6) {
    state.identity = identity;
    document.getElementById("loginDialog").close();
    render();
  }
});

render();
