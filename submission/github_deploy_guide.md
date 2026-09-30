# 🚀 GitHub Upload & Deployment Guide

## Step 1 — Upload to GitHub (Manual)

Since Git CLI may not be in PATH, use GitHub's web interface:

### Option A: GitHub Web Upload (Easiest)
1. Go to **https://github.com/new** → Create repo named `kisansetu-ai`
2. Make it **Public**, add description: `KisanSetu AI - National Interoperable Digital Agriculture Network & Open DPG for Indian Farmers`
3. Click **"uploading an existing file"** link on the new repo page
4. Drag and drop ALL files from `d:\TechLens` (except `node_modules` folder)
5. Commit with message: `feat: KisanSetu AI - National Interoperable Agro-Intelligence Platform`

### Option B: GitHub Desktop (Recommended)
1. Download: https://desktop.github.com/
2. File → Add Local Repository → select `d:\TechLens`
3. Click "Publish Repository" → make it Public

### Files to include (drag from d:\TechLens):
```
✅ index.html
✅ package.json  
✅ vite.config.js
✅ .env.example  (NOT .env — never share API keys!)
✅ .gitignore
✅ README.md
✅ src/ (entire folder)
✅ public/ (entire folder)
✅ submission/ (entire folder)
❌ node_modules/ (too large, exclude)
❌ dist/ (exclude)
❌ .env (contains API key!)
```

---

## Step 2 — Deploy Live on Vercel (Free, 2 Minutes)

### Method A: Vercel Web Deploy (No CLI needed)
1. Go to **https://vercel.com** → Sign up with GitHub
2. Click **"Import Project"** → Select your `kisansetu-ai` repo
3. Settings:
   - Framework: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Add Environment Variable: `VITE_GEMINI_API_KEY` = `your_key_here`
5. Click **Deploy** → You get a URL like `https://kisansetu-ai.vercel.app`

### Method B: Netlify Drop (Fastest)
1. Run `npm run build` in `d:\TechLens`
2. Go to **https://netlify.com/drop**
3. Drag the `dist` folder into the browser
4. Instant URL! (e.g., `https://random-name.netlify.app`)

---

## Step 3 — Submission Links

After deployment, your submission package will be:

| Item | Link |
|------|------|
| GitHub Repo | `https://github.com/<username>/kisansetu-ai` |
| Live Demo | `https://kisansetu-ai.vercel.app` |
| Demo Video | Upload to YouTube (unlisted) |
| Pitch Deck | `submission/pitch_deck.md` → convert to PDF |

---

## 🎬 Recording the Demo Video

### Windows Screen Recording
- Press **Win + G** → click Record (or use Xbox Game Bar)
- Or use **OBS Studio**: https://obsproject.com (free)
- Or **Loom**: https://loom.com (browser extension, free tier)

### What to Record
Follow `submission/demo_video_script.md` — 5 scenes, ~4 minutes total

### Upload
- YouTube: Upload as Unlisted → copy link for submission
- Or Google Drive: Upload MP4 → share link

---

## 🔑 Gemini API Key for Evaluators

Add to your submission description:
> "The app works in Demo Mode without an API key. For live Gemini AI, get a free key at https://aistudio.google.com/app/apikey and enter it in the '🔑 Gemini AI' button in the top navbar."
