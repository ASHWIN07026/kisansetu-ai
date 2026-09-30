// KisanSetu AI - Verified Indian Crop Pathology & Disease Diagnostics Data

// High-fidelity SVG visual patterns representing leaf pathology for Indian crops
export const generateLeafSvg = (type) => {
  switch (type) {
    case 'tomato_early_blight':
      return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
        <defs>
          <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="%232d6a4f"/>
            <stop offset="60%" stop-color="%2352b788"/>
            <stop offset="100%" stop-color="%23d8f3dc"/>
          </linearGradient>
          <radialGradient id="targetSpot" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="%231a0e08"/>
            <stop offset="35%" stop-color="%23582f0e"/>
            <stop offset="70%" stop-color="%23936639"/>
            <stop offset="90%" stop-color="%23e9c46a"/>
            <stop offset="100%" stop-color="rgba(233,196,106,0)"/>
          </radialGradient>
        </defs>
        <rect width="400" height="300" fill="%230f1e17"/>
        <path d="M 50,150 C 70,50 320,60 360,150 C 330,240 80,250 50,150 Z" fill="url(%23leafGrad)"/>
        <path d="M 50,150 Q 200,150 360,150" stroke="%231b4332" stroke-width="4" fill="none"/>
        <path d="M 120,150 Q 160,100 200,90" stroke="%231b4332" stroke-width="2" fill="none"/>
        <path d="M 170,150 Q 220,110 260,105" stroke="%231b4332" stroke-width="2" fill="none"/>
        <path d="M 130,150 Q 170,190 210,205" stroke="%231b4332" stroke-width="2" fill="none"/>
        <path d="M 200,150 Q 240,200 280,200" stroke="%231b4332" stroke-width="2" fill="none"/>
        <!-- Concentric Ring Blight Lesions (Alternaria Target Spots) -->
        <circle cx="160" cy="115" r="32" fill="url(%23targetSpot)"/>
        <circle cx="160" cy="115" r="22" stroke="%233e1f07" stroke-width="2" fill="none"/>
        <circle cx="160" cy="115" r="12" stroke="%231f0f04" stroke-width="2" fill="%232b1306"/>
        <circle cx="250" cy="165" r="26" fill="url(%23targetSpot)"/>
        <circle cx="250" cy="165" r="16" stroke="%233e1f07" stroke-width="1.5" fill="none"/>
        <circle cx="120" cy="180" r="20" fill="url(%23targetSpot)"/>
        <circle cx="290" cy="120" r="18" fill="url(%23targetSpot)"/>
        <text x="20" y="35" fill="%23e2e8f0" font-family="sans-serif" font-size="14" font-weight="bold">Target Board Rings (Alternaria solani)</text>
      </svg>`;

    case 'rice_blast':
      return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
        <defs>
          <linearGradient id="paddyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="%23134e4a"/>
            <stop offset="70%" stop-color="%232dd4bf"/>
            <stop offset="100%" stop-color="%2399f6e4"/>
          </linearGradient>
          <linearGradient id="spindleLesion" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stop-color="%2378350f"/>
            <stop offset="25%" stop-color="%23d97706"/>
            <stop offset="50%" stop-color="%23e2e8f0"/>
            <stop offset="75%" stop-color="%23d97706"/>
            <stop offset="100%" stop-color="%2378350f"/>
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="%230b1715"/>
        <!-- Slender Long Rice Blade -->
        <path d="M 30,220 C 120,180 250,110 380,50 C 370,120 220,230 40,260 Z" fill="url(%23paddyGrad)"/>
        <path d="M 35,240 C 130,195 260,125 380,50" stroke="%230f766e" stroke-width="2.5" fill="none"/>
        <!-- Spindle-shaped Blast Lesions with Ashen Grey Centers -->
        <ellipse cx="180" cy="165" rx="38" ry="12" transform="rotate(-30 180 165)" fill="url(%23spindleLesion)" stroke="%23451a03" stroke-width="1.5"/>
        <ellipse cx="180" cy="165" rx="18" ry="5" transform="rotate(-30 180 165)" fill="%23f1f5f9"/>
        <ellipse cx="260" cy="120" rx="30" ry="10" transform="rotate(-32 260 120)" fill="url(%23spindleLesion)" stroke="%23451a03" stroke-width="1.5"/>
        <ellipse cx="260" cy="120" rx="14" ry="4" transform="rotate(-32 260 120)" fill="%23f1f5f9"/>
        <ellipse cx="110" cy="210" rx="24" ry="8" transform="rotate(-28 110 210)" fill="url(%23spindleLesion)"/>
        <text x="20" y="35" fill="%23e2e8f0" font-family="sans-serif" font-size="14" font-weight="bold">Diamond Spindle Lesion (Magnaporthe oryzae)</text>
      </svg>`;

    case 'cotton_pink_bollworm':
      return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
        <defs>
          <linearGradient id="cottonLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="%231e3a1e"/>
            <stop offset="100%" stop-color="%233a7d44"/>
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="%23121d13"/>
        <!-- Palmate Cotton Leaf with Curling Margins -->
        <path d="M 200,270 L 190,160 Q 120,180 60,190 Q 90,130 110,100 Q 150,110 180,120 Q 190,50 200,30 Q 210,50 220,120 Q 250,110 290,100 Q 310,130 340,190 Q 280,180 210,160 Z" fill="url(%23cottonLeaf)" stroke="%23132a13" stroke-width="2"/>
        <!-- Yellowish Chlorotic Vein Thickening & Leaf Curl -->
        <path d="M 200,270 Q 200,100 200,30" stroke="%23ca8a04" stroke-width="3" fill="none"/>
        <path d="M 195,160 Q 140,140 110,100" stroke="%23ca8a04" stroke-width="2.5" fill="none"/>
        <path d="M 205,160 Q 260,140 290,100" stroke="%23ca8a04" stroke-width="2.5" fill="none"/>
        <!-- Rosetted Flower & Boll Borehole -->
        <circle cx="200" cy="180" r="18" fill="%23f43f5e" opacity="0.85"/>
        <circle cx="200" cy="180" r="6" fill="%230f172a"/>
        <ellipse cx="140" cy="120" rx="8" ry="4" fill="%23e11d48"/>
        <ellipse cx="260" cy="130" rx="7" ry="4" fill="%23e11d48"/>
        <text x="20" y="35" fill="%23e2e8f0" font-family="sans-serif" font-size="14" font-weight="bold">Rosetted Flower & Larval Borehole (Pectinophora)</text>
      </svg>`;

    case 'wheat_yellow_rust':
      return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
        <defs>
          <linearGradient id="wheatBlade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="%23166534"/>
            <stop offset="50%" stop-color="%2322c55e"/>
            <stop offset="100%" stop-color="%2315803d"/>
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="%230f1a14"/>
        <!-- Wheat Blade Vertical Strip -->
        <rect x="130" y="10" width="140" height="280" rx="10" fill="url(%23wheatBlade)"/>
        <!-- Parallel Yellow Rust Pustules in Linear Stripes -->
        <g fill="%23eab308">
          <ellipse cx="155" cy="40" rx="3" ry="8"/><ellipse cx="155" cy="65" rx="3" ry="10"/><ellipse cx="155" cy="95" rx="3" ry="12"/><ellipse cx="155" cy="130" rx="3" ry="14"/><ellipse cx="155" cy="170" rx="3" ry="10"/><ellipse cx="155" cy="205" rx="3" ry="12"/><ellipse cx="155" cy="245" rx="3" ry="9"/>
          <ellipse cx="175" cy="50" rx="3.5" ry="12"/><ellipse cx="175" cy="85" rx="3.5" ry="14"/><ellipse cx="175" cy="120" rx="3.5" ry="16"/><ellipse cx="175" cy="160" rx="3.5" ry="15"/><ellipse cx="175" cy="195" rx="3.5" ry="14"/><ellipse cx="175" cy="235" rx="3.5" ry="11"/>
          <ellipse cx="200" cy="35" rx="4" ry="14"/><ellipse cx="200" cy="75" rx="4" ry="16"/><ellipse cx="200" cy="115" rx="4" ry="18"/><ellipse cx="200" cy="155" rx="4" ry="18"/><ellipse cx="200" cy="195" rx="4" ry="15"/><ellipse cx="200" cy="230" rx="4" ry="14"/><ellipse cx="200" cy="265" rx="3.5" ry="10"/>
          <ellipse cx="225" cy="60" rx="3" ry="11"/><ellipse cx="225" cy="95" rx="3.5" ry="13"/><ellipse cx="225" cy="135" rx="3.5" ry="15"/><ellipse cx="225" cy="175" rx="3.5" ry="13"/><ellipse cx="225" cy="215" rx="3" ry="11"/>
          <ellipse cx="245" cy="80" rx="2.5" ry="9"/><ellipse cx="245" cy="110" rx="3" ry="11"/><ellipse cx="245" cy="150" rx="3" ry="12"/><ellipse cx="245" cy="190" rx="3" ry="10"/><ellipse cx="245" cy="225" rx="2.5" ry="8"/>
        </g>
        <text x="20" y="35" fill="%23fef08a" font-family="sans-serif" font-size="14" font-weight="bold">Parallel Stripe Pustules (Puccinia striiformis)</text>
      </svg>`;

    case 'sugarcane_red_rot':
      return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
        <defs>
          <linearGradient id="caneStalk" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="%23854d0e"/>
            <stop offset="50%" stop-color="%23ca8a04"/>
            <stop offset="100%" stop-color="%713f12"/>
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="%23131713"/>
        <!-- Cane Stalk Cross Section Split -->
        <rect x="120" y="20" width="160" height="260" rx="14" fill="url(%23caneStalk)"/>
        <!-- Internal Pith Blood Red Discoloration with White Cross-Bands -->
        <rect x="145" y="30" width="110" height="240" rx="8" fill="%23991b1b"/>
        <ellipse cx="200" cy="80" rx="45" ry="14" fill="%23f8fafc" opacity="0.85"/>
        <ellipse cx="200" cy="150" rx="42" ry="15" fill="%23f8fafc" opacity="0.85"/>
        <ellipse cx="200" cy="215" rx="40" ry="14" fill="%23f8fafc" opacity="0.85"/>
        <text x="20" y="35" fill="%23fca5a5" font-family="sans-serif" font-size="14" font-weight="bold">Red Rot Internal Pith with White Bands (Colletotrichum)</text>
      </svg>`;

    case 'maize_fall_armyworm':
    default:
      return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
        <defs>
          <linearGradient id="maizeLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="%2315803d"/>
            <stop offset="100%" stop-color="%2384cc16"/>
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="%23101e12"/>
        <!-- Broad Corn Leaf Blade -->
        <path d="M 40,250 C 100,120 220,60 370,40 C 320,130 200,230 50,270 Z" fill="url(%23maizeLeaf)"/>
        <!-- Shot-hole window pane feeding holes and sawdust-like frass -->
        <circle cx="160" cy="140" r="14" fill="%230f1e12"/>
        <circle cx="210" cy="110" r="20" fill="%230f1e12"/>
        <ellipse cx="250" cy="90" rx="16" ry="10" fill="%230f1e12"/>
        <circle cx="130" cy="180" r="11" fill="%230f1e12"/>
        <!-- Coarse frass pellets (caterpillar fecal matter) -->
        <circle cx="195" cy="130" r="4" fill="%2378350f"/>
        <circle cx="225" cy="125" r="5" fill="%2378350f"/>
        <circle cx="150" cy="165" r="3.5" fill="%2378350f"/>
        <!-- Inverted Y-shape mark on head capsule -->
        <path d="M 235,100 L 235,93 L 231,88 M 235,93 L 239,88" stroke="%23fef08a" stroke-width="2" fill="none"/>
        <text x="20" y="35" fill="%23fef08a" font-family="sans-serif" font-size="14" font-weight="bold">Shot-Hole Windowpane & Frass (Spodoptera frugiperda)</text>
      </svg>`;
  }
};

export const CROP_DISEASES = [
  {
    id: 'tomato_early_blight',
    name: 'Tomato Early Blight',
    hindiName: 'टमाटर का अगेती झुलसा',
    scientificName: 'Alternaria solani',
    crop: 'Tomato (Solanaceae)',
    affectedStates: ['Maharashtra (Nashik)', 'Karnataka (Kolar)', 'Punjab', 'Himachal Pradesh'],
    severity: 'High (48% Foliar Damage)',
    severityLevel: 'high',
    confidence: '97.4%',
    symptoms: 'Concentric dark brown circular rings forming "target board" lesions on older leaves, surrounded by yellow chlorotic halo. Rapid defoliation in warm, humid weather (>28°C, RH >80%).',
    svgType: 'tomato_early_blight',
    organicRemedies: [
      'Foliar spray with Trichoderma harzianum @ 5g/L water in early morning.',
      'Neem Seed Kernel Extract (NSKE 5%) or Azadirachtin 10,000 ppm @ 2.5ml/L to inhibit spore germination.',
      'Apply Cow urine + Jeevamrutha foliar spray (1:10 dilution) every 7 days to trigger systemic acquired resistance (SAR).'
    ],
    chemicalRemedies: [
      'If foliar infection exceeds 40%: Spray Mancozeb 75% WP @ 2.0g/L or Chlorothalonil 75% WP @ 2.0g/L.',
      'Systemic rotation: Difenoconazole 25% EC @ 0.5ml/L or Azoxystrobin 23% SC @ 1ml/L (CIBRC approved).',
      'Safety: Maintain 7-day Pre-Harvest Interval (PHI); use protective rubber gloves and mask.'
    ],
    regenerativeProtocol: 'Mulch field with paddy straw or dried leaves to prevent soil-to-leaf rain splash of fungal conidia. Implement crop rotation with non-solanaceous crops (Moong, Bajra) for 2 seasons.'
  },
  {
    id: 'rice_blast',
    name: 'Rice Leaf & Neck Blast',
    hindiName: 'धान का झुलसा रोग (ब्लास्ट)',
    scientificName: 'Magnaporthe oryzae',
    crop: 'Paddy / Rice (Gramineae)',
    affectedStates: ['Punjab (Ludhiana)', 'West Bengal (Burdwan)', 'Tamil Nadu (Thanjavur)', 'Andhra Pradesh'],
    severity: 'Critical (62% Leaf Area Infested)',
    severityLevel: 'critical',
    confidence: '98.2%',
    symptoms: 'Spindle-shaped (diamond/eye-like) lesions with grayish-white centers and brownish-red borders on leaf blades. Lesions coalesce causing total leaf necrosis; node blast causes panicles to snap.',
    svgType: 'rice_blast',
    organicRemedies: [
      'Foliar application of Pseudomonas fluorescens (talc formulation) @ 10g/L at tillering and panicle emergence.',
      'Broadcast fermented buttermilk (chhaas) + Ferrous sulfate spray to boost silica accumulation in leaf epidermis.',
      'Avoid high nitrogen fertilizer application during cloudy or overcast spells.'
    ],
    chemicalRemedies: [
      'CIBRC-Recommended: Tricyclazole 75% WP @ 0.6g/L or Isoprothiolane 40% EC @ 1.5ml/L water.',
      'Alternative: Kasugamycin 3% SL @ 2.0ml/L or Tebuconazole 25.9% EC @ 1.0ml/L.',
      'Ensure 500 liters of spray fluid per hectare for complete leaf coverage.'
    ],
    regenerativeProtocol: 'Adopt Alternate Wetting & Drying (AWD) water management. Apply silicon-rich rice husk ash (RHA) @ 2 tonnes/ha during land preparation to reinforce plant cellular walls.'
  },
  {
    id: 'cotton_pink_bollworm',
    name: 'Cotton Pink Bollworm & Rosetting',
    hindiName: 'कपास की गुलाबी सुंडी',
    scientificName: 'Pectinophora gossypiella',
    crop: 'Cotton (Malvaceae)',
    affectedStates: ['Maharashtra (Yavatmal, Akola)', 'Telangana (Adilabad)', 'Gujarat (Rajkot)', 'Punjab (Bathinda)'],
    severity: 'Critical (Economic Threshold Level Exceeded)',
    severityLevel: 'critical',
    confidence: '96.8%',
    symptoms: 'Flower buds twisted into unopened "rosetted" flowers with webbing. Larvae bore into developing bolls, feeding on seeds and staining lint pinkish-brown with exit holes.',
    svgType: 'cotton_pink_bollworm',
    organicRemedies: [
      'Install Gossyplure Pheromone Traps @ 5 to 8 traps/acre for mass trapping and monitoring.',
      'Release Trichogramma bactrae egg parasitoids @ 60,000 to 1,00,000/acre at 7-day intervals (3-4 releases).',
      'Spray Neem oil (10,000 ppm) @ 3ml/L or Beauveria bassiana @ 5g/L during early square formation.'
    ],
    chemicalRemedies: [
      'If trap catch exceeds 8 moths/trap/night for 3 consecutive days: Spray Chlorpyrifos 20% EC @ 2.5ml/L.',
      'Or Emamectin Benzoate 5% SG @ 0.4g/L or Spinetoram 11.7% SC @ 0.8ml/L.',
      'Rotate chemical classes to prevent pesticide resistance; do not apply pyrethroids repeatedly.'
    ],
    regenerativeProtocol: 'Synchronize sowing across village blocks. Terminate crop by December to destroy diapausing pupae in stalks; deep summer plowing to expose pupae to predatory birds.'
  },
  {
    id: 'wheat_yellow_rust',
    name: 'Wheat Stripe / Yellow Rust',
    hindiName: 'गेहूं का पीला रतुआ (येलो रस्ट)',
    scientificName: 'Puccinia striiformis',
    crop: 'Wheat (Poaceae)',
    affectedStates: ['Punjab (Ropar, Gurdaspur)', 'Haryana (Ambala)', 'Himachal Pradesh (Una)', 'Jammu & Kashmir'],
    severity: 'High (35% Stripe Density)',
    severityLevel: 'high',
    confidence: '95.9%',
    symptoms: 'Bright yellow powdery pustules arranged in parallel linear stripes on the upper leaf surface along leaf veins. When touched, yellow spore powder sticks to fingers.',
    svgType: 'wheat_yellow_rust',
    organicRemedies: [
      'Prophylactic foliar spray with fermented butter milk (10-day old sour curd) @ 50ml/L with 2g Asafoetida (Hing).',
      'Foliar spray of Trichoderma viride @ 5g/L + 1% jaggery solution as sticking agent.',
      'Seed bio-priming with Trichoderma @ 4g/kg seed during sowing.'
    ],
    chemicalRemedies: [
      'Immediate intervention upon first detection: Propiconazole 25% EC (Tilt) @ 1.0ml/L (or 200ml in 200L water/acre).',
      'Alternative: Tebuconazole 25.9% EC @ 1.0ml/L or Azoxystrobin 18.2% + Difenoconazole 11.4% SC @ 1ml/L.',
      'Spray within 48 hours of cross-border spore warning to arrest fungal spread.'
    ],
    regenerativeProtocol: 'Replace rust-susceptible older cultivars with resistant certified varieties (PBW-725, HD-3086, DBW-187). Intercrop with mustard or chickpea every 8-10 rows to establish biological windbreaks.'
  },
  {
    id: 'sugarcane_red_rot',
    name: 'Sugarcane Red Rot',
    hindiName: 'गन्ने का लाल सड़न रोग',
    scientificName: 'Colletotrichum falcatum',
    crop: 'Sugarcane (Poaceae)',
    affectedStates: ['Uttar Pradesh (Muzaffarnagar)', 'Bihar', 'Haryana', 'Maharashtra'],
    severity: 'Critical (Internal Pith Rotting)',
    severityLevel: 'critical',
    confidence: '94.5%',
    symptoms: 'Third or fourth leaf from top yellows, withers, and droops. When split lengthwise, the internal stalk pith reveals characteristic blood-red tissues interrupted with transverse white patches and an alcoholic odor.',
    svgType: 'sugarcane_red_rot',
    organicRemedies: [
      'Seed cane (sett) treatment with Trichoderma viride @ 10g/L water for 30 minutes before planting.',
      'Soil application of Trichoderma viride @ 2.5 kg mixed with 250 kg enriched Farm Yard Manure (FYM)/acre.',
      'Treat sett canes with hot water at 52°C for 30 minutes or aerated steam to eliminate systemic internal mycelium.'
    ],
    chemicalRemedies: [
      'Sett dip treatment in Carbendazim 50% WP @ 1g/L or Thiophanate Methyl 70% WP @ 1g/L for 15 minutes before sowing.',
      'Foliar spray is ineffective once internal stalk vascular rotting begins; focus on preventing new sett transmission.',
      'Quarantine infected field: Do not use setts from affected crops for propagation.'
    ],
    regenerativeProtocol: 'Rogue out and incinerate infected stools immediately. Follow 2-year crop rotation with green manure crops (Dhaincha / Sunnhemp) or Paddy to drown resting fungal chlamydospores in anaerobic mud.'
  },
  {
    id: 'maize_fall_armyworm',
    name: 'Maize Fall Armyworm',
    hindiName: 'मक्का का फॉल आर्मीवर्म',
    scientificName: 'Spodoptera frugiperda',
    crop: 'Maize / Corn (Poaceae)',
    affectedStates: ['Karnataka (Davanagere, Haveri)', 'Telangana', 'Bihar (Begusarai)', 'Maharashtra'],
    severity: 'Moderate to High (Leaf Whorl Feeding)',
    severityLevel: 'moderate',
    confidence: '96.1%',
    symptoms: 'Characteristic "window pane" feeding holes on young leaves, progressing to ragged "shot holes". Caterpillars shelter deep inside the whorl, leaving copious sawdust-like frass (excreta). Head capsule shows distinct inverted yellow Y.',
    svgType: 'maize_fall_armyworm',
    organicRemedies: [
      'Application of dry sand or wood ash (mixed with lime 9:1) into leaf whorls to desiccate caterpillar skin.',
      'Spray entomopathogenic fungi Metarhizium anisopliae or Beauveria bassiana @ 5g/L directed into the whorl.',
      'Deploy pheromone traps @ 5/acre and intercrop with Desmodium (Push-Pull technique) and border Napier grass.'
    ],
    chemicalRemedies: [
      'If whorl damage exceeds 10% in vegetative stage: Spray Chlorantraniliprole 18.5% SC @ 0.4ml/L.',
      'Or Spinetoram 11.7% SC @ 0.5ml/L or Emamectin Benzoate 5% SG @ 0.4g/L directly into whorls.',
      'Use knapsack sprayer with nozzle cap removed for coarse stream into plant central whorl.'
    ],
    regenerativeProtocol: 'Plant bird perches (T-shaped bamboo sticks @ 15/acre) to attract mynas and drongos. Practice zero-tillage relay cropping with blackgram or cowpea to preserve beneficial carabid predatory beetles.'
  }
];
