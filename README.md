# XM Knowledge Club Platform Prototype

This folder contains a lightweight live backend prototype for the XM Knowledge Club subscription platform.

## What is included

- Full login/signup screen with OTP-style email or phone verification.
- Student signup captures student name, class, and school dropdown.
- Admin access requires a secret code in the prototype.
- Admins create a password after entering the secret code; later admin login uses the password.
- Student dashboard with QQ score, module journey, streaks, and engagement ideas.
- Study module page with class-visible materials and multiple quizzes per module.
- Working quiz player with per-question timers, instant correct/incorrect feedback, and auto-submit on timeout.
- Post-quiz results page with total score, answer review, correct answers, and explanations.
- Quiz Quotient starts at 0 and updates after completed quizzes.
- XMKC Admin module builder with PDF/PPT/DOCX study material upload fields.
- Study material upload now saves files through the backend under `uploads/`.
- XMKC Admin question maker with CSV upload, optional image upload for every question, MCQ option boxes, and correct-option dropdown.
- Admin can lock and unlock individual quizzes.
- Teacher report dashboard for students in the teacher's school.
- Working leaderboard filters for class, school, city, state, region, and national.
- School admin interface with school list, student/teacher tabs, student counter, teacher-admin assignment, and CSV bulk upload for schools/students.
- School records include name, address, city, district, State/UT, and pincode.
- Node backend API with JSON-file persistence through `data/db.json`.
- XMKC logo-driven colour palette using orange, black and clean white surfaces.
- Report card page based on the Quiz Quotient framework.
- Admin school/subscription onboarding view.

## How to open

Open `index.html` in a browser, or run the local preview server:

```bash
npm start
```

Then visit `http://127.0.0.1:4173`.

## Suggested deployment path

1. Convert this prototype into a Next.js app.
2. Add real OTP authentication.
3. Add PostgreSQL data models for schools, users, modules, quizzes, attempts, QQ scores, and report cards.
4. Add CSV import with validation.
5. Add server-side leaderboard calculation with Redis caching.
6. Add PDF report card generation.
7. Deploy as a multi-tenant school subscription SaaS.

## Testing

With the local server running in one terminal:

```bash
npm start
```

Run smoke tests in another terminal:

```bash
npm test
```

To test a deployed URL:

```bash
BASE_URL=https://your-deployed-url.example npm test
```

## Useful files

- `server.js`: local preview server with starter API endpoints.
- `assets/xmkc-logo.png`: XMKC logo used in the interface.
- `data/db.json`: created automatically on first server run and used for backend persistence.
- `uploads/`: created automatically when study materials or question images are uploaded.
- `schema.sql`: PostgreSQL schema draft for schools, teacher admins, modules, quizzes, questions, attempts, QQ scores, and report cards.
- `docs/API_CONTRACT.md`: API route map for the deployable version.
- `docs/DEPLOYMENT_PLAN.md`: step-by-step rollout plan.

## Admin Login

For the first admin setup, choose `Signup`, select `XMKC Admin`, enter the secret code, and create an 8+ character password.

Default development secret:

```text
XMKC-ADMIN-2026
```

For Render, set an environment variable named `ADMIN_SECRET` and use that instead.

After setup, choose `Login`, select `XMKC Admin`, and use the admin email/password.
