// KisanSetu AI - Digital Public Good (DPG) & Open Interoperability Architecture Specifications

export const DPG_SPECIFICATION = {
  standard: 'India AgriStack / Beckn Agriculture Protocol v2.1',
  dpgRegistryId: 'DPG-IND-AGRI-2026-0941',
  license: 'MIT / Open Government Data License (OGDL-India)',
  interoperabilityPrinciples: [
    'Federated Data Mesh: Zero centralization of state land records or private farm sensor telemetry',
    'Open Knowledge Graph: Standardized ICAR agro-climatic taxonomy (Crops, Pests, Soils, Bio-Inputs)',
    'Edge-Verifiable AI: Compact model artifacts deployable at Village Krishi Vigyan Kendra (KVK) edge nodes',
    'Cross-Border Pub/Sub: Real-time vector early-warning dissemination via Beckn BAP/BPP gateway'
  ],
  openEndpoints: [
    {
      method: 'POST',
      path: '/api/v1/dpg/advisory/regenerative',
      description: 'Generates standardized regenerative crop & carbon advisory compliant with India AgriStack data standard.',
      requestSample: {
        stateNodeId: 'punjab-pau-01',
        districtCode: 'PB-LUDH',
        soilHealthCard: {
          nitrogen_kg_ha: 185,
          phosphorus_kg_ha: 22,
          potassium_kg_ha: 240,
          soil_ph: 7.8,
          organic_carbon_pct: 0.42
        },
        satelliteTelemetry: {
          ndvi: 0.48,
          ndmi: -0.15,
          constellation: 'Sentinel-2B_ISRO_Bhuvan'
        },
        targetSeason: 'Kharif-Zaid'
      },
      responseSample: {
        status: 'SUCCESS',
        dpgAdvisoryId: 'ADV-PB-2026-9812',
        primaryCrop: 'Basmati Rice (Pusa-1509 DSR)',
        companionCrop: 'Moong (SML-668) Green Manure',
        regenerativeScore: 94,
        metrics: {
          waterSavedLitersHa: 2800000,
          carbonSequestrationKgCo2eHa: 1420,
          syntheticNpkCutPct: 42
        },
        openCompliance: 'AgriStack-Standard-v2'
      }
    },
    {
      method: 'POST',
      path: '/api/v1/dpg/mesh/broadcast-vector-alert',
      description: 'Distributes cross-border pest/disease outbreak alerts to neighboring state agricultural universities and KVKs.',
      requestSample: {
        alertId: 'alert-mh-01',
        sourceStateNode: 'Maharashtra (MPKV Rahuri)',
        vectorName: 'Pink Bollworm (Pectinophora gossypiella)',
        severityLevel: 'CRITICAL_OUTBREAK',
        geoRadiusKm: 180,
        targetNeighborNodes: ['Telangana (PJTSAU)', 'Madhya Pradesh (JNKVV)'],
        immediateProphylacticAction: 'Deploy 5 pheromone traps/acre; release Trichogramma chilonis parasitoids'
      },
      responseSample: {
        acknowledgedBy: ['Telangana-PJTSAU', 'MadhyaPradesh-JNKVV'],
        broadcastLatencyMs: 142,
        federationStatus: 'PROPAGATED_TO_BORDER_KVKS'
      }
    },
    {
      method: 'GET',
      path: '/api/v1/dpg/mesh/federated-models',
      description: 'Lists all open-access AI agricultural models contributed by state agricultural nodes under Apache 2.0 license.',
      responseSample: {
        totalModels: 14,
        activeSyncNodes: 28,
        models: [
          { id: 'pau-dsr-v3', name: 'Direct Seeded Rice Optimizer', donorState: 'Punjab', license: 'Apache-2.0' },
          { id: 'mah-millet-v4', name: 'Millet Drip Micro-Irrigation', donorState: 'Maharashtra', license: 'Apache-2.0' },
          { id: 'tnau-saline-paddy', name: 'Halophyte Saline Paddy Matrix', donorState: 'Tamil Nadu', license: 'Apache-2.0' }
        ]
      }
    }
  ],
  jsonLdContext: {
    "@context": {
      "agri": "https://schema.org/agri/",
      "beckn": "https://becknprotocol.io/specification/agri/",
      "shc": "https://soilhealth.dac.gov.in/ontology/",
      "FarmerAdvisory": "agri:AgriculturalAdvisory",
      "SoilMetric": "shc:SoilHealthParameter",
      "RegenerativePractice": "agri:RegenerativeFarmingMethod"
    }
  }
};
