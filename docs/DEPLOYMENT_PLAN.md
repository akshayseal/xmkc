# XM Knowledge Club Deployment Plan

## Phase 1: Prototype

- Static frontend for product walkthroughs.
- Local Node server for preview and basic API checks.
- Seed data in `app.js`.

## Phase 2: Real Application

- Move the frontend to Next.js.
- Add real OTP authentication for email and phone.
- Add PostgreSQL using the initial model in `schema.sql`.
- Add role-based access for Student, Teacher, and XMKC Admin.

## Phase 3: Quiz Engine

- Add question bank CRUD.
- Add CSV upload validation and import.
- Add timed quiz attempts.
- Support MCQ, fill in the blanks, image, audio, puzzle, true/false, and typed answers.
- Store answer-level timing for QQ speed calculations.

## Phase 4: QQ, Reports, and Leaderboards

- Calculate QQ after every module quiz.
- Cache leaderboard snapshots by class, school, city, state, region, and national rank.
- Generate PDF report cards for mid-year and end-of-year reports.
- Add teacher comment workflow.

## Phase 5: Subscriptions and Scale

- Add school subscription plans.
- Add school onboarding and student import.
- Add admin billing dashboard.
- Add analytics for engagement, drop-offs, weak subjects, and renewal reporting.
