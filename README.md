# Study PDF Dashboard (Vercel)

This is the **website/frontend only** repository. The Telegram bot/API is in a separate Render repository.

## Before deploying
Open `index.html` and find this line near the bottom:

```js
const API_BASE = 'https://YOUR-RENDER-SERVICE.onrender.com';
```

After deploying the bot on Render, replace `https://YOUR-RENDER-SERVICE.onrender.com` with the real Render service URL, for example `https://study-referral-bot.onrender.com`. Keep `https://` and do not add a trailing slash. Commit/save this edit before deploying Vercel.

## Vercel setup (phone-friendly)
1. Upload these files (`index.html` and `README.md`) to the separate GitHub repository for the website. Do not upload the bot's private credentials.
2. Open Vercel Dashboard → **Add New → Project**.
3. Import the website GitHub repository.
4. Framework Preset: **Other**. Build Command can be left blank. Output Directory: `.` if Vercel asks.
5. Press Deploy. Open the generated `.vercel.app` website.

## Important
- The site receives a signed dashboard token from the Telegram bot; it does not accept a user-entered Telegram ID.
- The token is saved in the current browser tab's session storage and removed from the visible URL after opening.
- Keep the dashboard link private. The backend rechecks channel membership and referral count before downloads.
- If the page says it cannot reach the server, confirm `API_BASE` points to the real Render URL and the Render service is running.
