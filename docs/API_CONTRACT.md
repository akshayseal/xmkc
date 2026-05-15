# Initial API Contract

## Authentication

- `POST /api/auth/request-otp`
- `POST /api/auth/verify-otp`
- `POST /api/auth/logout`

## Users and Schools

- `GET /api/me`
- `GET /api/schools`
- `POST /api/schools`
- `POST /api/schools/:id/import-users`

## Modules and Quizzes

- `GET /api/modules`
- `POST /api/questions`
- `POST /api/questions/import-csv`
- `POST /api/quizzes`
- `GET /api/quizzes/:id`
- `POST /api/quizzes/:id/attempts`

## Leaderboards

- `GET /api/leaderboards/:quizId?scope=class`
- `GET /api/leaderboards/:quizId?scope=school`
- `GET /api/leaderboards/:quizId?scope=city`
- `GET /api/leaderboards/:quizId?scope=state`
- `GET /api/leaderboards/:quizId?scope=region`
- `GET /api/leaderboards/:quizId?scope=national`

## Report Cards

- `GET /api/students/:id/qq`
- `POST /api/report-cards/generate`
- `GET /api/report-cards/:id`
- `GET /api/report-cards/:id/pdf`
