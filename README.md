# KisanSetu AI (किसान सेतु)
### National Interoperable Agro-Intelligence & Cooperative Digital Public Good (DPG)

> **Theme**: Agriculture Intelligence & Inter-State Cooperation  
> **Built For**: Small & Marginal Farmers across India  
> **Google AI Integration**: Google Gemini 1.5/2.0 Multimodal API, Vertex AI & Autonomous ICAR Agronomist Model  
> **Standards Alignment**: India AgriStack, Beckn Agriculture Protocol, Open Government Data (data.gov.in)

---

## 🌾 The Problem
Small and marginal farmers across India lack access to real-time, data-driven agricultural guidance. Over-reliance on outdated practices instead of satellite earth observation, soil health analytics, and hyper-local climate forecasting leads to catastrophic crop failure, groundwater depletion, and food insecurity. Furthermore, the **absence of interoperable digital infrastructure blocks cross-state collaboration**, causing states to operate in silos rather than pooling research, sharing climate-resilient models, and mitigating cross-border pest outbreaks.

## 🚀 The Solution: KisanSetu AI
**KisanSetu AI** is an open, interoperable digital public good designed to break state agricultural silos and deliver localized, climate-resilient agro-advisories to India's 140 million farmers.

---

## 🌟 Key Pillars & Features

### 1. 🛰️ Satellite & Soil-Driven Regenerative Advisory Engine
- **Soil Health Card (SHC) Analytics**: Benchmarked across Nitrogen (N), Phosphorus (P), Potassium (K), Soil pH, and Organic Carbon (OC %).
- **ISRO Bhuvan & Copernicus Sentinel-2 Telemetry**: Live NDVI (Normalized Difference Vegetation Index: 0.15–0.85) and NDMI (Soil Moisture Index) simulation with interactive GIS parcel canvas.
- **IMD Agromet 14-Day Weather Forecast**: Integrates rainfall anomalies, heatwave indicators, and drought stress indices.
- **Regenerative Impact Metrics**: Quantifies water conserved (liters/ha), carbon sequestered (kg CO₂e/ha/year), and synthetic fertilizer cut (%).
- **Phased 4-Stage Agro-Calendar**: Land prep -> Sowing -> Bio-IPM -> Zero-burn harvest mulching.

### 2. 🔬 Multimodal Crop Doctor & Vision Diagnostics (Google AI)
- **Computer Vision Pathology**: Upload field photos or test with verified Indian crop disease presets (Tomato Early Blight, Rice Leaf Blast, Cotton Pink Bollworm, Wheat Yellow Rust, Sugarcane Red Rot, Maize Fall Armyworm).
- **Gemini Vision Multimodal Analysis**: Pathogen identification, infection severity %, and confidence rating.
- **CIBRC-Approved Remediation**:
  - *Immediate Bio-Control*: Trichoderma viride, Pseudomonas fluorescens, Neem seed kernel extract (NSKE 5%), Jeevamrutha.
  - *Judicious Chemical Measures*: Exact dilution per liter with Pre-Harvest Interval (PHI) safety alerts.
  - *Regenerative Soil Immunity*: Crop rotation, trap crops, and biochar application.

### 3. 🤝 Inter-State Cooperative Federation & Data Mesh (**Core Theme**)
- **Cross-State Model Sharing**: Punjab shares Direct Seeded Rice (DSR) water-saving models with Haryana & Bihar; Maharashtra shares climate-resilient millet irrigation models with Karnataka; Tamil Nadu shares halophyte saline-tolerant paddy models with coastal states.
- **Cross-Border Disease Warning Vector Mesh**: Real-time outbreak broadcast network. When a pest spike occurs (e.g. Pink Bollworm in Vidarbha, Yellow Rust in Ropar), automated prophylactic alerts trigger bordering district Krishi Vigyan Kendras (KVKs).
- **Inter-State Seed & Bio-Input Pool**: Decentralized cooperative ledger enabling states to barter surplus certified seeds (e.g., HD-3086 Wheat, KMR-630 Ragi) for bio-fertilizers and drone spraying capacity.

### 4. 🎙️ Multilingual & Voice-First "Kisan Mitra" AI
- **8 Major Indian Languages**: Hindi (हिन्दी), Marathi (मराठी), Punjabi (ਪੰਜਾਬੀ), Telugu (తెలుగు), Tamil (தமிழ்), Kannada (ಕನ್ನಡ), Bengali (বাংলা), English.
- **Speech-to-Text & Text-to-Speech**: Full hands-free voice query and audio advisory readout via Web Speech API with regional Indian accents.
- **2G Feature Phone & WhatsApp Export**: One-click SMS/USSD formatter and WhatsApp broadcast generator designed for marginal farmers with basic mobile phones.

### 5. 🏛️ Digital Public Good (DPG) Open Architecture
- **Standards**: India AgriStack and Beckn Agriculture Protocol v2.1 compliant.
- **Open API Endpoints**:
  - `POST /api/v1/dpg/advisory/regenerative`
  - `POST /api/v1/dpg/mesh/broadcast-vector-alert`
  - `GET /api/v1/dpg/mesh/federated-models`
- **Zero-Vendor Lock-in**: Dual-mode engine supporting live Google Gemini API keys or the autonomous built-in ICAR Agro-Ecological knowledge engine.

---

## 🛠️ Tech Stack
- **Frontend & UI**: React 19, Vite, Lucide Icons, Canvas GIS Parcel Visualizer, Custom Vanilla CSS Design System (Glassmorphism, Emerald/Gold Nocturnal Agri-Theme).
- **AI & Reasoning**: Google Gemini API (`gemini-1.5-flash` / `gemini-2.0-flash`), Google AI Studio, ICAR Agronomist Knowledge Engine.
- **Voice & Speech**: Web Speech Recognition API & Web Speech Synthesis API.
- **Geospatial & Public Data**: ISRO Bhuvan / Sentinel-2 NDVI spectral channels, IMD Agromet outlook, Soil Health Card ontology.

---

## ⚡ Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open in browser
http://localhost:5173
```

---

## 🇮🇳 Built for India
Developed for the National Agriculture AI Hackathon / Track on **Agriculture Intelligence & Cooperation**.
