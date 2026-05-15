const assert = require("assert");

const baseUrl = process.env.BASE_URL || "http://127.0.0.1:4173";

async function get(path) {
  const response = await fetch(`${baseUrl}${path}`);
  const body = await response.text();
  return { response, body };
}

async function run() {
  const home = await get("/");
  assert.equal(home.response.status, 200, "Home page should load");
  assert.match(home.body, /XM Knowledge Club/, "Home page should include product name");
  assert.match(home.body, /app\.js/, "Home page should load the app script");

  const css = await get("/styles.css");
  assert.equal(css.response.status, 200, "CSS should load");
  assert.match(css.body, /--accent/, "CSS should include the design tokens");

  const app = await get("/app.js");
  assert.equal(app.response.status, 200, "App JavaScript should load");
  assert.match(app.body, /calculateQQ/, "App should include QQ calculation logic");
  assert.match(app.body, /startQuestionTimer/, "App should include the working quiz timer");
  assert.match(app.body, /renderTeacherReports/, "App should include teacher report views");
  assert.match(app.body, /Create Module/, "App should include admin module creation");
  assert.match(app.body, /Correct option/, "App should include MCQ correct-option selection");

  const health = await get("/api/health");
  assert.equal(health.response.status, 200, "Health API should load");
  assert.deepEqual(JSON.parse(health.body).ok, true, "Health API should return ok");

  const qqFormula = await get("/api/qq-formula");
  assert.equal(qqFormula.response.status, 200, "QQ formula API should load");
  assert.equal(JSON.parse(qqFormula.body).components.length, 5, "QQ formula should include 5 components");

  console.log(`Smoke tests passed for ${baseUrl}`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
