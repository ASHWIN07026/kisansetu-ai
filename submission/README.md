# KisanSetu AI — Submission Package Index

## 📦 Submission Checklist

| # | Requirement | Status | Location |
|---|------------|--------|----------|
| 1 | Source Code (GitHub) | ✅ Ready | See below |
| 2 | Demo Video (3–5 min) | 📋 Script ready | `demo_video_script.md` |
| 3 | Pitch Deck (10–12 slides) | ✅ Complete | `pitch_deck.md` |
| 4 | Brief Description (2–3 lines) | ✅ Complete | `brief_description.md` |
| 5 | Deployed Link | 🔗 Local: `http://localhost:5173` | See deployment guide |

---

## 1. Source Code — GitHub Repository

**Steps to publish:**
```bash
# Initialize git (from d:\TechLens)
git init
git add .
git commit -m "feat: KisanSetu AI - National Interoperable Agro-Intelligence Platform"

# Create repo on GitHub, then push
git remote add origin https://github.com/<your-username>/kisansetu-ai.git
git branch -M main
git push -u origin main
```

**Make sure to add to the repo description:**
> "KisanSetu AI (किसान सेतु) — National Interoperable Digital Agriculture Network & Open DPG for Indian Smallholder Farmers. Built with Google Gemini AI, ISRO Bhuvan, IMD Agromet."

**Topics to add to GitHub repo:**
`agriculture`, `ai`, `google-gemini`, `india`, `digital-public-good`, `farmers`, `react`, `multilingual`, `satellite-data`, `crop-disease`

---

## 2. Demo Video

**Script:** See `demo_video_script.md`

**Recording tools:**
- **OBS Studio** (free, recommended) — Download: https://obsproject.com
- **Loom** — browser extension, quick screen recording
- **Screen record** in Windows (Win + G, then record)

**Upload to:**
- YouTube (unlisted or public)
- Google Drive (share link)

**Duration:** 3–5 minutes (recommended: 4 minutes)

---

## 3. Pitch Deck

**File:** `pitch_deck.md` (12 slides)

**To convert to PowerPoint/PDF:**
- Copy content into Google Slides
- Or use Gamma.app (AI presentation tool) — paste markdown for instant slides
- Or export as PDF using VS Code Markdown Preview

---

## 4. Brief Description

**File:** `brief_description.md`

**2-3 Line Summary:**
> KisanSetu AI is an AI-powered, interoperable digital agriculture platform for Indian smallholder farmers that provides hyper-localised regenerative crop advisories using satellite data, soil health cards, and IMD weather feeds, powered by Google Gemini. It includes a multimodal crop disease diagnostic tool (Crop Doctor Vision) and a multilingual voice assistant supporting 8 Indian languages. Built as an open Digital Public Good aligned with India's AgriStack and Beckn protocols, it enables inter-state cooperative knowledge sharing for climate-resilient farming at national scale.

---

## 5. Deployed Link

### Option A — Local (Demo/Judging)
```
http://localhost:5173
```
Run with: `cd d:\TechLens && npm run dev`

### Option B — Deploy to Vercel (Free, Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd d:\TechLens
vercel --prod
```
Vercel will give you a URL like: `https://kisansetu-ai.vercel.app`

### Option C — Deploy to Netlify
```bash
# Build first
npm run build

# Drag and drop the 'dist' folder to netlify.com/drop
# OR use CLI: npm i -g netlify-cli && netlify deploy --prod --dir=dist
```

### Option D — GitHub Pages
```bash
npm run build
# Copy dist/ to gh-pages branch or use gh-pages npm package
```

---

## 🔑 Gemini API Key — For Evaluators

The app works in **Demo Mode** (no API key needed) with pre-loaded authentic agricultural data.

For **live Gemini AI** integration:
1. Get free API key from: https://aistudio.google.com/app/apikey
2. Click the **"🔑 Gemini AI"** button in the top navbar
3. Enter your API key and select model (gemini-1.5-flash recommended)
4. Click Save — all AI features activate immediately

**OR** set in `.env` file:
```
VITE_GEMINI_API_KEY=your_key_here
```

---

## 📁 Project Structure

```
d:\TechLens\
├── index.html              # App entry point with SEO meta
├── vite.config.js          # Vite build config
├── package.json            # Dependencies
├── .env                    # API key config (not committed)
├── .env.example            # Template for evaluators
├── README.md               # Full documentation
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Root component + routing
│   ├── index.css           # Global design system
│   ├── components/
│   │   ├── Navbar.jsx               # Top nav + language + state selector
│   │   ├── StateMeshBanner.jsx      # State telemetry banner
│   │   ├── QuickTourBar.jsx         # 1-click scenario navigation
│   │   ├── RegenerativeAdvisory.jsx # AI crop advisory engine
│   │   ├── SatelliteViewer.jsx      # ISRO/IMD satellite dashboard
│   │   ├── CropDoctorVision.jsx     # Multimodal disease diagnostics
│   │   ├── CooperativeMesh.jsx      # Inter-state cooperation mesh
│   │   ├── DpgArchitectureView.jsx  # Open DPG spec viewer
│   │   ├── KisanMitraVoiceModal.jsx # Voice assistant (8 languages)
│   │   ├── GeminiConfigModal.jsx    # API key config modal
│   │   └── SmsWhatsAppExport.jsx    # Low-bandwidth advisory export
│   ├── data/
│   │   ├── translations.js          # 8-language translation strings
│   │   ├── stateNodesData.js        # 7 state agricultural nodes
│   │   ├── cropDiseasesData.js      # Indian crop pathology database
│   │   ├── soilCropsMatrix.js       # Soil benchmarks + crop matrices
│   │   └── dpgSchemaData.js         # DPG open API specification
│   └── services/
│       ├── geminiService.js         # Google Gemini API integration
│       └── voiceAssistant.js        # Web Speech API wrapper
└── submission/
    ├── README.md                    # This file
    ├── brief_description.md         # 2-3 line summary
    ├── pitch_deck.md                # 12-slide pitch deck
    └── demo_video_script.md         # Demo recording script
```

---

## 🏆 Competition Requirements — Verification

### ✅ End-to-End Flow
- Farmer selects state → enters soil data → receives AI advisory → exports via SMS ✓
- Farmer uploads crop photo → gets disease diagnosis + remedy ✓
- Voice query in regional language → spoken advisory response ✓

### ✅ Mandatory Integration — Google Gemini AI
- `gemini-1.5-flash` for text advisory generation ✓
- Gemini Vision (`gemini-1.5-flash`) for crop disease image analysis ✓
- Gemini for voice advisory text generation ✓
- Configurable API key in UI (no hardcoded keys) ✓

### ✅ Digital Public Good
- Apache 2.0 open-source license ✓
- Beckn Agriculture Protocol v2.1 compatible ✓
- India AgriStack / IDEA Protocol schemas ✓
- Open API 3.0 specification published ✓
- No proprietary lock-in ✓

### ✅ Cooperation Theme
- 7 state node federation with live cooperative data mesh ✓
- Cross-state pest/disease outbreak alert propagation ✓
- Federated model sharing architecture ✓
- Inter-state seed bank and water conservation exchange ✓

### ✅ Scalability
- PWA-ready (mobile installable) ✓
- SMS/WhatsApp low-bandwidth advisory export ✓
- 8 Indian language support ✓
- Voice interface (no literacy required) ✓
- API-first design for state government integration ✓

---

*KisanSetu AI — किसान सेतु | Built for Agriculture Intelligence Track | Theme: Cooperation*
