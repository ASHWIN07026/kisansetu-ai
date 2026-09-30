// KisanSetu AI - Soil Health Card Benchmark Matrix & Regenerative Crop Engine

export const SOIL_BENCHMARKS = {
  nitrogen: {
    low: { max: 280, label: 'Deficient (<280 kg/ha)', advice: 'Severe nitrogen deficit. Inoculate seeds with Azotobacter / Rhizobium and integrate leguminous cover crop.' },
    medium: { min: 280, max: 560, label: 'Optimal (280-560 kg/ha)', advice: 'Adequate vegetative nitrogen balance. Supplement with farmyard manure to sustain reserves.' },
    high: { min: 560, label: 'Excess (>560 kg/ha)', advice: 'High residual N. Risk of vegetative lodging and blast/rust susceptibility. Cut synthetic urea by 40%.' }
  },
  phosphorus: {
    low: { max: 10, label: 'Low (<10 kg/ha)', advice: 'Phosphorus fixation likely. Apply Phosphate Solubilizing Bacteria (PSB) @ 5kg/ha with compost.' },
    medium: { min: 10, max: 25, label: 'Adequate (10-25 kg/ha)', advice: 'Root development optimal. Maintain with rock phosphate and mycorrhizae.' },
    high: { min: 25, label: 'High (>25 kg/ha)', advice: 'High P reserve. Skip basal DAP/SSP to prevent zinc and iron micronutrient lockout.' }
  },
  potassium: {
    low: { max: 108, label: 'Low (<108 kg/ha)', advice: 'Poor drought and pest resistance. Apply Potash Mobilizing Bacteria (KMB) and wood ash.' },
    medium: { min: 108, max: 280, label: 'Adequate (108-280 kg/ha)', advice: 'Good cell wall resilience and grain filling capacity.' },
    high: { min: 280, label: 'High (>280 kg/ha)', advice: 'Rich natural illite/clay potash reserve. Eliminate MOP chemical application.' }
  },
  organicCarbon: {
    low: { max: 0.50, label: 'Critical (<0.50%)', advice: 'Severe soil microbial starvation. Compulsory in-situ green manuring with Dhaincha/Sunnhemp; apply 5 tonnes FYM.' },
    medium: { min: 0.50, max: 0.75, label: 'Moderate (0.50-0.75%)', advice: 'Moderate carbon sink. Apply biochar and retain crop residues on surface.' },
    high: { min: 0.75, label: 'Excellent (>0.75%)', advice: 'Rich living soil biome with high water holding capacity and mycorrhizal networks.' }
  },
  ph: {
    acidic: { max: 6.5, label: 'Acidic (<6.5)', advice: 'Risk of aluminum toxicity. Incorporate agricultural lime or dolomite @ 500kg/ha.' },
    neutral: { min: 6.5, max: 7.5, label: 'Neutral (6.5-7.5)', advice: 'Ideal microbial and nutrient bioavailability index.' },
    alkaline: { min: 7.5, max: 8.5, label: 'Alkaline (7.5-8.5)', advice: 'Calcareous soil. Apply gypsum @ 1-2 tonnes/ha and sulfur-oxidizing bio-cultures.' },
    saline: { min: 8.5, label: 'Saline / Sodic (>8.5)', advice: 'High exchangeable sodium percentage. Leach with flush irrigation; use saline-resistant halophytes.' }
  }
};

export const REGENERATIVE_CROP_RECOMMENDATIONS = {
  punjab: {
    primaryCrop: 'Climate-Resilient Direct-Seeded Basmati Rice (Pusa-1509)',
    primaryHindi: 'जलवायु-अनुकूल सीधी बिजाई बासमती (पूसा-1509)',
    companionCrop: 'Summer Green Gram (Moong SML-668) Cover Crop',
    companionHindi: 'ग्रीष्मकालीन मूंग (एसएमएल-668) आवरण फसल',
    season: 'Kharif-Zaid Continuum',
    carbonSequestration: '1,420 kg CO₂e / ha / year',
    waterSavedLiters: '2,800,000 Litres / ha',
    syntheticReductionPercent: '42% Synthetic NPK Cut',
    score: 94,
    agroReasoning: 'Under critical groundwater depletion in Punjab alluvial soils, replacing conventional puddled transplanted paddy with Direct Seeded Rice (DSR) saves ~30% irrigation water while eliminating methane puddle emissions. Planting Summer Moong in the fallow window fixes 38kg atmospheric nitrogen/hectare, restoring depleted organic carbon (OC 0.42%) and providing supplementary ₹28,000/acre farm income.',
    calendar: [
      { stage: 'Stage 1: Seed Priming & Bio-Shield (Day 0-7)', tasks: 'Treat seeds with Trichoderma harzianum @ 4g/kg seed + PSB liquid culture. Laser level field for uniform zero-till depth.' },
      { stage: 'Stage 2: Precision Sowing & Soil Moisture (Day 8-25)', tasks: 'Direct drill seeds at 20cm row spacing using Happy Seeder with residual wheat straw mulching.' },
      { stage: 'Stage 3: Vegetative & Microbial Boost (Day 26-60)', tasks: 'Apply Jeevamrutha microbial foliar spray (200L/ha) via irrigation channel. Deploy 4 yellow rust surveillance traps on field borders.' },
      { stage: 'Stage 4: Grain Filling & Cover Relay (Day 61-110)', tasks: 'Terminate irrigation 12 days before harvest. Broadcast Moong seed into standing crop residue 3 days pre-harvest for zero-turnaround relay.' }
    ]
  },
  maharashtra: {
    primaryCrop: 'Drought-Tolerant Grain Sorghum (Jowar CSH-15R) + Cotton Strip',
    primaryHindi: 'सूखा-रोधी ज्वार (सीएसएच-15आर) + कपास पट्टी फसल',
    companionCrop: 'Pigeonpea (Tur BDN-711) Intercrop (4:2 Ratio)',
    companionHindi: 'अरहर / तूर (बीडीएन-711) अंतरफसल (4:2 अनुपात)',
    season: 'Rainfed Kharif-Rabi Transition',
    carbonSequestration: '1,680 kg CO₂e / ha / year',
    waterSavedLiters: '3,200,000 Litres / ha',
    syntheticReductionPercent: '48% Synthetic NPK Cut',
    score: 96,
    agroReasoning: 'In Maharashtra Vertisols (black cotton soil) with alkaline pH 8.2 and low organic carbon, Deep-rooted Pigeonpea creates biological biopores that break hardpan compaction, allowing Jowar roots to tap subsoil moisture during 30-day rainfed dry spells. Nodulation fixes 45kg biological nitrogen, reducing urea dependency while suppressing pink bollworm moth migration.',
    calendar: [
      { stage: 'Stage 1: Soil Conditioning & Broad Bed Furrow (Day 0-10)', tasks: 'Construct Broad Bed & Furrows (BBF) to prevent waterlogging and harvest moisture. Inoculate with Rhizobium leguminosarum.' },
      { stage: 'Stage 2: Synchronized Sowing & Trap Crops (Day 11-30)', tasks: 'Sow 4 rows of Sorghum followed by 2 rows of Pigeonpea. Plant castor as perimeter barrier trap for bollworm.' },
      { stage: 'Stage 3: Moisture Conservation & IPM (Day 31-75)', tasks: 'Foliar spray Cow Urine + Neem leaf extract (5%) at flowering. Install 5 Gossyplure pheromone traps per acre.' },
      { stage: 'Stage 4: Post-Harvest In-situ Stalk Mulching (Day 76-140)', tasks: 'Chop sorghum stalks and leave as 4-inch soil mulch layer to preserve residual moisture for rabi chickpea.' }
    ]
  },
  karnataka: {
    primaryCrop: 'Bio-Fortified Finger Millet (Ragi KMR-630)',
    primaryHindi: 'जैव-संवर्धित रागी (केएमआर-630)',
    companionCrop: 'Horsegram (Kulthi CRHG-19) / Redgram (8:2 Intercrop)',
    companionHindi: 'कुल्थी / लाल चना (8:2 अंतरफसल)',
    season: 'Semi-Arid Kharif',
    carbonSequestration: '1,350 kg CO₂e / ha / year',
    waterSavedLiters: '2,400,000 Litres / ha',
    syntheticReductionPercent: '45% Synthetic NPK Cut',
    score: 93,
    agroReasoning: 'Karnataka red sandy loams with acidic tendency (pH 6.2) benefit immensely from C4 photosynthetic Finger Millet, which possesses ultra-high water-use efficiency (310 litres H₂O/kg dry matter). Intercropping with Horsegram blankets the soil surface, preventing splash erosion and weed emergence while maintaining rhizosphere microbial activity.',
    calendar: [
      { stage: 'Stage 1: Trenching & Biochar Conditioning (Day 0-10)', tasks: 'Apply 1 tonne/ha biochar enriched with Farm Yard Manure. Treat Ragi seeds with Azospirillum brasilense @ 10g/kg.' },
      { stage: 'Stage 2: Guni Method Planting & Aeration (Day 11-30)', tasks: 'Transplant 18-day old single Ragi seedlings at 25x25cm spacing. Sow Horsegram along border bunds.' },
      { stage: 'Stage 3: Eco-Defense against Fall Armyworm (Day 31-70)', tasks: 'Install 5 Metarhizium anisopliae bio-fungus traps. Apply wood ash + neem cake powder into leaf collars.' },
      { stage: 'Stage 4: Earhead Harvesting & Straw Feed Banking (Day 71-115)', tasks: 'Harvest mature earheads; cycle straw as nutritious livestock fodder bank to produce enriched vermicompost.' }
    ]
  },
  tamilnadu: {
    primaryCrop: 'Saline & Submergence-Resilient Paddy (CR-1009 Sub-1)',
    primaryHindi: 'लवण व जलमग्नता-सहनशील धान (सीआर-1009 सब-1)',
    companionCrop: 'Blackgram (Vamban-8) Stubble Relay + Sesbania (Daincha)',
    companionHindi: 'उड़द (वाम्बन-8) अवशेष रिले + ढैंचा हरी खाद',
    season: 'Samba / Thaladi Coastal Season',
    carbonSequestration: '1,890 kg CO₂e / ha / year',
    waterSavedLiters: '3,400,000 Litres / ha',
    syntheticReductionPercent: '50% Synthetic NPK Cut',
    score: 97,
    agroReasoning: 'For Tamil Nadu Cauvery delta regions facing coastal salinity (EC 1.85 dS/m, pH 8.5), CR-1009 Sub-1 withstands 15 days of total submergence while salt-tolerant endophytes sequester toxic Na+ ions. Relaying Blackgram in standing stubble 7 days prior to harvest harnesses residual capillary moisture without requiring land preparation tillage.',
    calendar: [
      { stage: 'Stage 1: Green Manure Trampling & Bio-Gypsum (Day 0-14)', tasks: 'Incorporate 45-day Sesbania aculeata green manure into soil. Apply Phosphobacteria bio-fertilizer.' },
      { stage: 'Stage 2: SRI Alternate Wetting & Drying Planting (Day 15-35)', tasks: 'Transplant 14-day seedlings at 25x25cm spacing. Install field water perforated pipe for AWD moisture control.' },
      { stage: 'Stage 3: Salinity Amelioration & Foliar Nourishment (Day 36-85)', tasks: 'Foliar spray Panchagavya 3% at active tillering. Regulate water depth to flush excess salts during neap tides.' },
      { stage: 'Stage 4: Stubble Relay Broadcasting & Stored Carbon (Day 86-135)', tasks: 'Broadcast Vamban-8 Blackgram seeds into mud 7 days before paddy harvest. Retain 15cm rice stubble as micro-shade.' }
    ]
  },
  bihar: {
    primaryCrop: 'Submergence-Resilient High-Yield Maize (Shaktiman-5)',
    primaryHindi: 'जलभराव-प्रतिरोधी संकर मक्का (शक्तिमान-5)',
    companionCrop: 'Lentil (Masoor KLS-218) + Foxnut (Makhana) Eco-Pond',
    companionHindi: 'मसूर (केएलएस-218) रिले + मखाना जलीय कृषि',
    season: 'Rabi-Zaid Gangetic Cycle',
    carbonSequestration: '1,560 kg CO₂e / ha / year',
    waterSavedLiters: '2,600,000 Litres / ha',
    syntheticReductionPercent: '44% Synthetic NPK Cut',
    score: 95,
    agroReasoning: 'North Bihar alluvium exhibits high fertility but suffers from waterlogging dynamics. Shaktiman-5 maize grown on raised beds with Lentil relay optimizes the Gangetic silt nutrient recharge. Integrating low-lying waterlogged fields with Makhana (Foxnut) transforms climate vulnerability into high-value aquaculture yielding ₹1.5 Lakhs net profit/hectare.',
    calendar: [
      { stage: 'Stage 1: Raised Bed Shaping & Bio-Priming (Day 0-10)', tasks: 'Shape 60cm raised beds with 30cm furrows. Inoculate seed with Azotobacter + PSB consortia.' },
      { stage: 'Stage 2: Ridge Sowing & Drainage Grids (Day 11-30)', tasks: 'Plant maize at 60x20cm on ridge crests. Ensure inter-plot drainage furrows feed into Makhana retention pond.' },
      { stage: 'Stage 3: Biological Weed Suppression & Ear Care (Day 31-75)', tasks: 'Broadcast Lentil relay in furrows as living mulch. Spray fermented butter milk against leaf blight.' },
      { stage: 'Stage 4: Cob Harvest & Stalk Bio-Charring (Day 76-125)', tasks: 'Harvest mature cobs. Process dry stalks in low-oxygen flame-cap kilns into biochar for soil carbon boost.' }
    ]
  },
  default: {
    primaryCrop: 'Climate-Smart Pearl Millet (Bajra) + Desi Chickpea Rotation',
    primaryHindi: 'जलवायु-स्मार्ट बाजरा + चना फसल चक्र',
    companionCrop: 'Cowpea (Lobia) Nitrogen-Fixing Ground Cover',
    companionHindi: 'लोबिया नाइट्रोजन-स्थिरीकरण भूमि आवरण',
    season: 'Kharif-Rabi Regenerative Sequence',
    carbonSequestration: '1,500 kg CO₂e / ha / year',
    waterSavedLiters: '2,900,000 Litres / ha',
    syntheticReductionPercent: '45% Synthetic NPK Cut',
    score: 95,
    agroReasoning: 'Optimized multi-tier regenerative strategy combining C4 cereal with symbiotic nitrogen-fixing legumes. Enhances soil microbial biodiversity, protects against unseasonal heatwaves, and preserves ground moisture.',
    calendar: [
      { stage: 'Stage 1: Land Prep & Microbial Priming', tasks: 'Seed inoculation with Trichoderma viride and Rhizobium. Retain 30% crop stubble.' },
      { stage: 'Stage 2: Ridge & Furrow Sowing', tasks: 'Precision row spacing with companion legume strip.' },
      { stage: 'Stage 3: Organic Foliar & IPM', tasks: 'Foliar application of Jeevamrutha and neem bio-shield.' },
      { stage: 'Stage 4: Harvest & Stubble Mulch', tasks: 'Zero-burn residue retention with minimum tillage.' }
    ]
  }
};
