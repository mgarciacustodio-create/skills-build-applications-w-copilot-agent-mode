# Octofit Tracker frontend

The React 19 presentation tier uses React Router for the activity, leaderboard, teams, athletes, and workouts views.

## API configuration

For the Codespaces frontend, define `VITE_CODESPACE_NAME` in `octofit-tracker/frontend/.env.local` using your Codespace name without the `-8000` suffix or domain:

```dotenv
VITE_CODESPACE_NAME=your-codespace-name
```

Vite exposes this value through `import.meta.env`. Restart the Vite dev server after changing `.env.local`. The frontend calls `https://${VITE_CODESPACE_NAME}-8000.app.github.dev/api/[resource]/`. When the variable is unset, it safely uses `http://localhost:8000`.

## Run locally

```bash
npm install --prefix octofit-tracker/frontend
npm run dev --prefix octofit-tracker/frontend
```
