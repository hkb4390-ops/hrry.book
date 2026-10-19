# HRRY PDF Rewards Website

Independent Vercel frontend. Uses React + TypeScript + Vite and the authenticated backend API.

## Commands
- Build command: `npm install && npm run build`
- Output directory: `dist`
- Local development: `npm run dev`

## Deploy from Android
1. Create a separate GitHub repository and upload all files in this folder.
2. Open Vercel in Chrome, import this repository.
3. Framework preset: Vite. Build command `npm run build`, output directory `dist`.
4. Add `VITE_API_BASE_URL` with the real HTTPS Render service URL (no trailing slash).
5. Deploy. If changing the variable later, redeploy.
6. Test landing page, Bind with Telegram, then complete Start in Telegram. Binding status is checked by the browser.
7. Backend `FRONTEND_URL` must exactly match the deployed site origin.

No private token or Firebase credential belongs in this repository. If the API is offline, the website shows an error rather than fake data.

## Supplied backend URL
You supplied `https://book-referal.onrender.com`. If this is the Render service for this backend, set `VITE_API_BASE_URL=https://book-referal.onrender.com` in Vercel and set the backend `FRONTEND_URL` to the exact deployed website origin. Before relying on it, open `https://book-referal.onrender.com/healthz` in a browser and confirm it returns JSON. I could not verify that URL from this build environment, so it is not treated as confirmed.
