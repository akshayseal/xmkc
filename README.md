# XM Knowledge Club Platform Prototype

This folder contains a self-contained first prototype for the XM Knowledge Club subscription platform.

## What is included

- OTP-style login/signup modal for email or phone.
- Role switching between Student, Teacher, and XMKC Admin.
- Student dashboard with QQ score, module journey, streaks, and engagement ideas.
- Quiz player with MCQ, image-based, and type-answer examples.
- Quiz Maker dashboard with manual question creation and CSV upload guidance.
- Leaderboard with class/school/city/state/region/national filter controls.
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
- `schema.sql`: first PostgreSQL schema draft.
- `docs/API_CONTRACT.md`: API route map for the deployable version.
- `docs/DEPLOYMENT_PLAN.md`: step-by-step rollout plan.
