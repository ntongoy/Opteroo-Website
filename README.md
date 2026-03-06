# Opteroo Website

Marketing website frontend for Opteroo, built with Create React App + CRACO.

## Versioning

- **Format:** Semantic versioning `MAJOR.MINOR.PATCH` (e.g. `0.1.1`)
- **When to bump:** `PATCH` for bug fixes, `MINOR` for new features, `MAJOR` for breaking changes

### Version notes

| Version | Notes |
|---------|-------|
| **0.1.1** (2026-03-05) | **EOI admin email via serverless:** Added `api/eoi-admin-notify` Vercel function to send admin notifications when new EOI is submitted. LeadCaptureDialog triggers it on success when API returns `trigger_admin_email: true`. Requires `MAIL_ADMIN_EMAIL`, `SMTP_*` env vars. Use `vercel dev` for local testing. |

## Prerequisites

- Node.js 20+ (Node 22+ recommended)
- npm 10+

## Local Setup (npm only)

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open:

`http://localhost:3000`

## Environment Variables

Copy `.env.example` to `.env` and adjust:

```bash
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `REACT_APP_BACKEND_URL` | Laravel API base URL. Use `http://127.0.0.1:8181` for local dev; `https://opteroo-api-staging.on-forge.com` for staging. |
| `WDS_SOCKET_PORT` | Webpack HMR socket port. Use `443` behind HTTPS proxy; `3000` for local. |
| `ENABLE_HEALTH_CHECK` | Set to `true` to enable health-check plugin/endpoints. |

## Available Scripts

- `npm start`: Runs the app in development mode.
- `npm run build`: Creates a production build in `build/`.
- `npm test`: Runs tests in watch mode.

## Build Notes

- In CI environments where `CI=true`, warnings are treated as errors by CRA.
- For local builds that should allow warnings:

```bash
CI=false npm run build
```

## Deploy to Vercel

1. Push the repo to GitHub and go to [vercel.com](https://vercel.com).
2. **Import** the repository (New Project → Import Git Repository).
3. Vercel will auto-detect Create React App. Confirm:
   - **Build Command:** `CI=false npm run build` (or set in vercel.json)
   - **Output Directory:** `build`
4. Add **Environment Variables** in Project Settings → Environment Variables:
   - `REACT_APP_BACKEND_URL` = `https://opteroo-api-staging.on-forge.com` (or your API URL)
   - For EOI admin notifications (`/api/eoi-admin-notify`): `MAIL_ADMIN_EMAIL`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD` (see `.env.example`)
5. Deploy. Preview and production deploys will use these settings.

> `vercel.json` is included with build config and SPA rewrites.
>
> **CORS:** Add your Vercel URL(s) to `CORS_ALLOWED_ORIGINS` in the Laravel API `.env`, e.g. `https://your-project.vercel.app,https://your-project-*.vercel.app`.

## Troubleshooting

- Port conflict on `3000`:
  - Stop the process using that port, or start on another port:
  - `PORT=3001 npm start`
- Backend URL mismatch:
  - Ensure `REACT_APP_BACKEND_URL` in `.env` points to the API you intend to use.
  - After changing `.env`, restart the dev server so CRA reloads env variables.
- CORS errors to API:
  - Confirm the backend allows requests from your frontend origin (for example `http://localhost:3000`).
  - Verify you are using the correct protocol/domain in `REACT_APP_BACKEND_URL` and that the API is reachable.
