// KisanSetu AI - Authentic Pan-India State Agricultural Nodes & Cooperative Data Mesh

export const STATE_NODES = [
  {
    id: 'punjab',
    name: 'Punjab Agro-Mesh (PAU Ludhiana Node)',
    state: 'Punjab',
    zone: 'Zone VI: Trans-Gangetic Plains',
    soilType: 'Alluvial Loam / Deep Silty Clay',
    coordinates: { lat: 30.9010, lng: 75.8573 },
    districts: ['Bathinda', 'Ludhiana', 'Sangrur', 'Amritsar', 'Patiala'],
    activeChallenge: 'Critical groundwater depletion (>1.2m/year fall) & Paddy stubble burning post-Kharif',
    defaultTelemetry: {
      n: 185, // Low (kg/ha)
      p: 22,  // Medium
      k: 240, // High
      ph: 7.8, // Slightly alkaline
      oc: 0.42, // Low organic carbon (%)
      ec: 0.35, // Normal dS/m
      rainfall14d: 12, // mm (Deficit)
      droughtIndex: 'Moderate (Water-Table Stress)',
      ndvi: 0.48, // Moderate vigor
      ndmi: -0.15, // Moisture stress in topsoil
      satellitePass: 'Sentinel-2B / RISAT-1A SAR'
    },
    sharedModels: [
      {
        id: 'pau-dsr-v3',
        name: 'Direct Seeded Rice (DSR) Water Reduction AI Model v3.2',
        sharedWith: ['Haryana', 'Bihar', 'Uttar Pradesh'],
        accuracy: '94.8%',
        impact: 'Saves 35% irrigation water & 400 kWh/ha electricity vs puddled transplanting',
        status: 'Active Federation Model',
        downloadCount: 1420
      },
      {
        id: 'pau-happyseeder-v2',
        name: 'In-Situ Crop Residue Microbial Bio-Decomposer v2.4',
        sharedWith: ['Haryana', 'Delhi-NCR', 'Rajasthan'],
        accuracy: '91.2%',
        impact: 'Eliminates 92% stubble burning events; fixes 12kg N/ha into soil',
        status: 'Active Federation Model',
        downloadCount: 890
      }
    ],
    receivedModels: [
      {
        from: 'Maharashtra (MPKV Node)',
        name: 'Drought-Resilient Chickpea & Bio-Sulfur Inoculant Matrix',
        adoptedDate: '2026-06-15',
        benefit: 'Replaced late-season wheat with low-water pulse in Sangrur belt'
      }
    ],
    vectorAlerts: [
      {
        id: 'alert-pb-01',
        title: 'Yellow Rust (Puccinia striiformis) Early Spore Drifts',
        sourceDistrict: 'Ropar & Hoshiarpur Foothills',
        targetStates: ['Haryana (Ambala)', 'Himachal Pradesh (Una)'],
        severity: 'Moderate Warning',
        timestamp: '6 hours ago',
        advisoryAction: 'Deploy prophylactic bio-shield spray with Trichoderma viride or Azoxystrobin on border belts within 48h.'
      }
    ],
    coopResourcePool: {
      surplus: [
        { item: 'Certified Wheat HD-3086 Foundation Seeds', quantity: '4,500 Quintals', unit: 'Quintals', targetNeeded: 'Sorghum Bio-Inputs' },
        { item: 'Happy Seeder & Super Seeder Machinery Pool', quantity: '320 Units Available', unit: 'Machines', targetNeeded: 'Laser Levellers' }
      ],
      deficit: [
        { item: 'Bio-NPK Liquid Consortia (Cold Tolerant)', required: '8,000 Litres', partnerCandidate: 'Gujarat / Maharashtra' }
      ]
    }
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra Krishi-Grid (MPKV Rahuri & MahAgri)',
    state: 'Maharashtra',
    zone: 'Zone IX: Western Plateau & Hills',
    soilType: 'Medium to Deep Black Cotton Soil (Vertisols)',
    coordinates: { lat: 19.3919, lng: 74.6517 },
    districts: ['Yavatmal', 'Nashik', 'Solapur', 'Aurangabad', 'Akola'],
    activeChallenge: 'Rainfed moisture stress in Marathwada & Pink Bollworm infestation in Vidarbha cotton',
    defaultTelemetry: {
      n: 140, // Low
      p: 16,  // Low
      k: 310, // High
      ph: 8.2, // Alkaline
      oc: 0.38, // Low
      ec: 0.45,
      rainfall14d: 6, // Low
      droughtIndex: 'High Moisture Deficit',
      ndvi: 0.39,
      ndmi: -0.28,
      satellitePass: 'ISRO Bhuvan Cartosat-3 / Sentinel-2A'
    },
    sharedModels: [
      {
        id: 'mah-millet-v4',
        name: 'Climate-Smart Pearl Millet (Bajra) & Farm Pond Drip Optimizer v4.1',
        sharedWith: ['Karnataka', 'Telangana', 'Madhya Pradesh'],
        accuracy: '96.2%',
        impact: 'Doubles water-use efficiency; boosts drought recovery index by 42%',
        status: 'Active Federation Model',
        downloadCount: 2310
      },
      {
        id: 'mah-pbw-shield',
        name: 'Pink Bollworm Pheromone Degree-Day Trapping Predictor v2.1',
        sharedWith: ['Telangana', 'Gujarat', 'Andhra Pradesh'],
        accuracy: '93.5%',
        impact: 'Reduces chemical sprays by 60% through timely Trichogramma release',
        status: 'Active Federation Model',
        downloadCount: 1850
      }
    ],
    receivedModels: [
      {
        from: 'Punjab (PAU Node)',
        name: 'Laser Land Levelling & Zero-Till Furrow Irrigation Protocol',
        adoptedDate: '2026-07-20',
        benefit: 'Applied in Solapur pomegranate & onion belts with 28% water savings'
      }
    ],
    vectorAlerts: [
      {
        id: 'alert-mh-01',
        title: 'Pink Bollworm Moth Peak Emergence Alert',
        sourceDistrict: 'Yavatmal & Chandrapur',
        targetStates: ['Telangana (Adilabad)', 'Madhya Pradesh (Chhindwara)'],
        severity: 'Critical Cross-Border Alert',
        timestamp: '2 hours ago',
        advisoryAction: 'Deploy 5 pheromone traps/acre and release Trichogramma chilonis egg parasitoids @ 60,000/acre.'
      }
    ],
    coopResourcePool: {
      surplus: [
        { item: 'Certified Drought-Resilient Jowar (CSH-15R) Seeds', quantity: '6,200 Quintals', unit: 'Quintals', targetNeeded: 'Short-Duration Pulses' },
        { item: 'Trichoderma viride Bio-Fungicide Consortia', quantity: '14,000 kg', unit: 'kg', targetNeeded: 'Drip Laterals' }
      ],
      deficit: [
        { item: 'Certified Desi Chickpea (Digvijay) Seed', required: '3,500 Quintals', partnerCandidate: 'Madhya Pradesh' }
      ]
    }
  },
  {
    id: 'karnataka',
    name: 'Karnataka Raitha-Mesh (UAS Bangalore & RSK)',
    state: 'Karnataka',
    zone: 'Zone X: Southern Plateau & Hills',
    soilType: 'Red Sandy Loam & Laterite Soil',
    coordinates: { lat: 13.0768, lng: 77.5753 },
    districts: ['Mandya', 'Tumakuru', 'Dharwad', 'Belagavi', 'Ballari'],
    activeChallenge: 'Fall Armyworm in semi-arid Maize & erratic post-monsoon dry spells in red soil',
    defaultTelemetry: {
      n: 210,
      p: 28,
      k: 180,
      ph: 6.2, // Slightly acidic
      oc: 0.55,
      ec: 0.22,
      rainfall14d: 28,
      droughtIndex: 'Mild Stress',
      ndvi: 0.52,
      ndmi: 0.05,
      satellitePass: 'Sentinel-2 / PlanetScope NICFI'
    },
    sharedModels: [
      {
        id: 'kar-ragi-intercrop',
        name: 'Finger Millet (Ragi) + Redgram 8:2 Regenerative Canopy Model v3.0',
        sharedWith: ['Tamil Nadu', 'Andhra Pradesh', 'Odisha'],
        accuracy: '95.1%',
        impact: 'Guarantees protein yield even in 45-day drought spell; 30kg biological N fixation',
        status: 'Active Federation Model',
        downloadCount: 1640
      },
      {
        id: 'kar-faw-vision',
        name: 'Spodoptera (Fall Armyworm) Bio-Consortium Defense v2.0',
        sharedWith: ['Maharashtra', 'Bihar', 'Telangana'],
        accuracy: '92.9%',
        impact: 'Metarhizium anisopliae biological spray replaces organophosphates',
        status: 'Active Federation Model',
        downloadCount: 1290
      }
    ],
    receivedModels: [
      {
        from: 'Tamil Nadu (TNAU Node)',
        name: 'Micro-Sprinkler Aerobic Soil Moisture Controller',
        adoptedDate: '2026-08-01',
        benefit: 'Deployed in Mandya sugarcane belts to mitigate reservoir shortage'
      }
    ],
    vectorAlerts: [
      {
        id: 'alert-ka-01',
        title: 'Fall Armyworm (FAW) 2nd Instar Larvae Spike in Maize',
        sourceDistrict: 'Haveri & Davanagere',
        targetStates: ['Maharashtra (Kolhapur)', 'Andhra Pradesh (Kurnool)'],
        severity: 'High Watch Warning',
        timestamp: '5 hours ago',
        advisoryAction: 'Apply push-pull intercropping with Desmodium and spray Neem seed kernel extract (NSKE 5%) in leaf whorls.'
      }
    ],
    coopResourcePool: {
      surplus: [
        { item: 'Certified Finger Millet (Ragi KMR-630) Foundation Seed', quantity: '5,000 Quintals', unit: 'Quintals', targetNeeded: 'Sesame Seed' },
        { item: 'Liquid Pseudomonas fluorescens Culture', quantity: '9,500 Litres', unit: 'Litres', targetNeeded: 'Neem Cake' }
      ],
      deficit: [
        { item: 'Certified Green Gram (Moong) Seeds', required: '2,200 Quintals', partnerCandidate: 'Rajasthan / MP' }
      ]
    }
  },
  {
    id: 'tamilnadu',
    name: 'Tamil Nadu Agri-Portal (TNAU Coimbatore Node)',
    state: 'Tamil Nadu',
    zone: 'Zone XI: East Coast Plains & Hills',
    soilType: 'Coastal Saline & Red Loamy Alluvium',
    coordinates: { lat: 11.0125, lng: 76.9356 },
    districts: ['Thanjavur', 'Coimbatore', 'Madurai', 'Nagapattinam', 'Tirunelveli'],
    activeChallenge: 'Cauvery tail-end sea water intrusion, salinity & groundwater salinization',
    defaultTelemetry: {
      n: 175,
      p: 19,
      k: 220,
      ph: 8.5, // Saline / Alkaline tendency in coastal delta
      oc: 0.44,
      ec: 1.85, // Elevated EC (Salinity challenge)
      rainfall14d: 45, // Coastal showers
      droughtIndex: 'Low Drought / Saline Stress',
      ndvi: 0.61,
      ndmi: 0.18,
      satellitePass: 'Oceansat-3 / Sentinel-1 SAR'
    },
    sharedModels: [
      {
        id: 'tnau-saline-paddy',
        name: 'Halophyte Saline-Tolerant Paddy & Bio-Gypsum Amelioration v2.5',
        sharedWith: ['Odisha', 'West Bengal', 'Andhra Pradesh', 'Kerala'],
        accuracy: '94.3%',
        impact: 'Enables 3.8 tonnes/ha paddy in EC 2.5 saline coastal flats using CR-1009 Sub-1',
        status: 'Active Federation Model',
        downloadCount: 1980
      },
      {
        id: 'tnau-awd-methane',
        name: 'Alternate Wetting & Drying (AWD) Carbon Credit Engine v1.8',
        sharedWith: ['Punjab', 'Assam', 'Bihar'],
        accuracy: '96.0%',
        impact: 'Cuts irrigation water by 30% and reduces paddy methane emissions by 48%',
        status: 'Active Federation Model',
        downloadCount: 1540
      }
    ],
    receivedModels: [
      {
        from: 'Karnataka (UAS Node)',
        name: 'Ragi-Redgram Intercrop Biodiversity Algorithm',
        adoptedDate: '2026-05-12',
        benefit: 'Introduced in drylands of Dharmapuri and Krishnagiri'
      }
    ],
    vectorAlerts: [
      {
        id: 'alert-tn-01',
        title: 'Brown Plant Hopper (BPH) Population Exceeding ETL in Paddy',
        sourceDistrict: 'Thiruvarur & Nagapattinam',
        targetStates: ['Andhra Pradesh (Nellore)', 'Puducherry (Karaikal)'],
        severity: 'High Watch Warning',
        timestamp: '1 day ago',
        advisoryAction: 'Drain field water immediately for 3 days (AWD); avoid excess urea; spray Neem oil 3ml/L.'
      }
    ],
    coopResourcePool: {
      surplus: [
        { item: 'Saline-Tolerant Paddy CR-1009 Sub-1 Seeds', quantity: '7,800 Quintals', unit: 'Quintals', targetNeeded: 'Soybean Seeds' },
        { item: 'Phosphobacteria & Azospirillum Bio-Fertilizer Packs', quantity: '22,000 Packs', unit: 'Packs', targetNeeded: 'Boron Micronutrients' }
      ],
      deficit: [
        { item: 'Cold-Pressed High Azadirachtin Neem Seed Oil (10,000 ppm)', required: '4,000 Litres', partnerCandidate: 'Rajasthan / Gujarat' }
      ]
    }
  },
  {
    id: 'bihar',
    name: 'Bihar Krishi-Sangam (RPCAU Samastipur & BAU Sabour)',
    state: 'Bihar',
    zone: 'Zone IV: Middle Gangetic Plain',
    soilType: 'Rich Calcareous Alluvial Soil (North) & Sandy Loam (South)',
    coordinates: { lat: 25.9866, lng: 85.6738 },
    districts: ['Samastipur', 'Muzaffarpur', 'Darbhanga', 'Gaya', 'Bhagalpur'],
    activeChallenge: 'Recurring flash flood inundation in North vs seasonal drought in South Bihar',
    defaultTelemetry: {
      n: 230,
      p: 24,
      k: 160,
      ph: 7.4,
      oc: 0.62,
      ec: 0.28,
      rainfall14d: 65,
      droughtIndex: 'Low (Flood Inundation Risk)',
      ndvi: 0.65,
      ndmi: 0.32,
      satellitePass: 'Sentinel-1A Radar / Cartosat-2'
    },
    sharedModels: [
      {
        id: 'bihar-flood-maize',
        name: 'Submergence-Resilient Relay Cropping & Makhana Wetland AI v1.9',
        sharedWith: ['Assam', 'West Bengal', 'Eastern UP'],
        accuracy: '93.7%',
        impact: 'Protects harvest during 14-day waterlogging; generates ₹1.2L/acre via Foxnut integration',
        status: 'Active Federation Model',
        downloadCount: 1120
      }
    ],
    receivedModels: [
      {
        from: 'Punjab (PAU Node)',
        name: 'Direct Seeded Rice (DSR) Water Reduction AI Model v3.2',
        adoptedDate: '2026-06-25',
        benefit: 'Applied in drought-prone South Bihar districts of Gaya & Nawada'
      }
    ],
    vectorAlerts: [
      {
        id: 'alert-br-01',
        title: 'Banded Leaf and Sheath Blight in Spring Maize',
        sourceDistrict: 'Begusarai & Khagaria',
        targetStates: ['Jharkhand (Deoghar)', 'West Bengal (Malda)'],
        severity: 'Moderate Warning',
        timestamp: '8 hours ago',
        advisoryAction: 'Strip bottom 2-3 infected leaves; spray Pseudomonas fluorescens 10g/L.'
      }
    ],
    coopResourcePool: {
      surplus: [
        { item: 'High-Yield Hybrid Rabi Maize (Shaktiman-5) Seeds', quantity: '8,400 Quintals', unit: 'Quintals', targetNeeded: 'Drip Kits' },
        { item: 'Certified Makhana (Foxnut Swarna Vaidehi) Seedlings', quantity: '45,000 Units', unit: 'Seedlings', targetNeeded: 'Bio-Composters' }
      ],
      deficit: [
        { item: 'Short-Duration Blackgram (Urad Pant U-31)', required: '3,000 Quintals', partnerCandidate: 'Uttar Pradesh' }
      ]
    }
  },
  {
    id: 'telangana',
    name: 'Telangana Rythu-Net (PJTSAU Hyderabad Hub)',
    state: 'Telangana',
    zone: 'Zone X: Southern Plateau Semi-Arid',
    soilType: 'Red Chalkas (Sandy Clay) & Black Soils',
    coordinates: { lat: 17.3850, lng: 78.4867 },
    districts: ['Warangal', 'Karimnagar', 'Nalgonda', 'Khammam', 'Mahbubnagar'],
    activeChallenge: 'Invasive Black Thrips in Chilli crops and cotton root rot during dry spells',
    defaultTelemetry: {
      n: 160,
      p: 18,
      k: 250,
      ph: 7.2,
      oc: 0.46,
      ec: 0.31,
      rainfall14d: 18,
      droughtIndex: 'Moderate Stress',
      ndvi: 0.44,
      ndmi: -0.10,
      satellitePass: 'Sentinel-2A / Landsat-9'
    },
    sharedModels: [
      {
        id: 'ts-chilli-thrips',
        name: 'Invasive Black Thrips (Thrips parvispinus) Spectral Biomarker AI v2.2',
        sharedWith: ['Andhra Pradesh', 'Karnataka', 'Maharashtra'],
        accuracy: '95.6%',
        impact: 'Early leaf curl detection prevents 70% crop loss without heavy synthetic cocktails',
        status: 'Active Federation Model',
        downloadCount: 2040
      }
    ],
    receivedModels: [
      {
        from: 'Maharashtra (MPKV Node)',
        name: 'Pink Bollworm Pheromone Degree-Day Trapping Predictor v2.1',
        adoptedDate: '2026-07-10',
        benefit: 'Deployed in Adilabad & Warangal cotton farms'
      }
    ],
    vectorAlerts: [
      {
        id: 'alert-ts-01',
        title: 'Chilli Black Thrips Surge Following Dry Spell',
        sourceDistrict: 'Khammam & Mahabubabad',
        targetStates: ['Andhra Pradesh (Guntur)', 'Karnataka (Ballari)'],
        severity: 'High Watch Warning',
        timestamp: '3 hours ago',
        advisoryAction: 'Install blue sticky traps @ 30/acre; spray Lecanicillium lecanii @ 5g/L.'
      }
    ],
    coopResourcePool: {
      surplus: [
        { item: 'Certified Redgram (Telangana Ravali RG-1) Seeds', quantity: '4,100 Quintals', unit: 'Quintals', targetNeeded: 'Groundnut Seeds' },
        { item: 'Blue and Yellow Sticky Traps Production Reserve', quantity: '50,000 Units', unit: 'Packs', targetNeeded: 'Castor Cake' }
      ],
      deficit: [
        { item: 'Gypsum Soil Conditioner for Red Soils', required: '12,000 Bags', partnerCandidate: 'Rajasthan / Tamil Nadu' }
      ]
    }
  },
  {
    id: 'up',
    name: 'Uttar Pradesh Kisan-Setu (CSAU Kanpur & SVPUAT)',
    state: 'Uttar Pradesh',
    zone: 'Zone V: Upper Gangetic Plains',
    soilType: 'Deep Alluvial Sandy Loam to Clayey Loam',
    coordinates: { lat: 26.4499, lng: 80.3319 },
    districts: ['Meerut', 'Kanpur', 'Varanasi', 'Bareilly', 'Gorakhpur'],
    activeChallenge: 'Sugarcane red rot pathogen emergence & heavy chemical reliance in western sugarcane-wheat belt',
    defaultTelemetry: {
      n: 195,
      p: 21,
      k: 210,
      ph: 7.9,
      oc: 0.48,
      ec: 0.38,
      rainfall14d: 22,
      droughtIndex: 'Mild Stress',
      ndvi: 0.58,
      ndmi: 0.08,
      satellitePass: 'Sentinel-2B / RISAT'
    },
    sharedModels: [
      {
        id: 'up-sugarcane-redrot',
        name: 'Sugarcane Red Rot Thermal Hyperspectral Scanner Model v3.1',
        sharedWith: ['Bihar', 'Haryana', 'Punjab', 'Maharashtra'],
        accuracy: '94.2%',
        impact: 'Catches internal stalk fungal rotting 3 weeks before foliar yellowing manifests',
        status: 'Active Federation Model',
        downloadCount: 1670
      }
    ],
    receivedModels: [
      {
        from: 'Punjab (PAU Node)',
        name: 'In-Situ Crop Residue Microbial Bio-Decomposer v2.4',
        adoptedDate: '2026-08-18',
        benefit: 'Reduced paddy stubble fires by 76% in western UP districts'
      }
    ],
    vectorAlerts: [
      {
        id: 'alert-up-01',
        title: 'Sugarcane Top Borer and Red Rot Vulnerability Spike',
        sourceDistrict: 'Muzaffarnagar & Shamli',
        targetStates: ['Haryana (Yamunanagar)', 'Uttarakhand (Haridwar)'],
        severity: 'Moderate Warning',
        timestamp: '12 hours ago',
        advisoryAction: 'Rogue out infected clumps; drench root zone with Trichoderma viride enriched farmyard manure.'
      }
    ],
    coopResourcePool: {
      surplus: [
        { item: 'Certified Sugarcane Co-0238 Tissue Culture Seedlings', quantity: '120,000 Canes', unit: 'Canes', targetNeeded: 'Bio-Fungicides' },
        { item: 'Pigeonpea (Tur Narendra-1) High Yield Seeds', quantity: '3,800 Quintals', unit: 'Quintals', targetNeeded: 'Zinc Sulfate' }
      ],
      deficit: [
        { item: 'Decomposed Press-Mud Organic Bio-Enricher', required: '25,000 Tonnes', partnerCandidate: 'Maharashtra' }
      ]
    }
  }
];
