# XM Knowledge Club Deployment Plan

## Current Version

This project is now a lightweight full-stack Node app:

- Static frontend served by `server.js`
- Backend APIs under `/api/*`
- JSON persistence in `data/db.json`
- Uploaded study materials and question images in `uploads/`
- Admin password setup/login after secret-code verification

This is good for pilot testing on Render. For production scale, move persistence to PostgreSQL/Supabase and file storage to S3/Cloudflare R2.

## Render Pilot Deployment

1. Push the full folder to GitHub, including `assets/xmkc-logo.png`.
2. In Render, create a new Web Service from the GitHub repo.
3. Use:
   - Build command: `npm install`
   - Start command: `npm start`
4. Add environment variable:
   - `ADMIN_SECRET`: choose a private admin setup code.
5. Deploy.
6. Open the Render URL.
7. Create the first admin from Signup > XMKC Admin.

## Production Upgrade Path

1. Replace JSON storage with PostgreSQL.
2. Replace local `uploads/` with S3/R2 object storage.
3. Add real OTP through SMS/email provider.
4. Add signed sessions/JWT.
5. Add role and school-level authorization on every API route.
6. Add server-side CSV validation jobs.
7. Add report-card PDF generation.
8. Add backups, audit logs, and monitoring.
