import React from 'react';
import { 
  Sparkles, 
  Sprout, 
  Radio, 
  Eye, 
  Satellite, 
  Mic, 
  SlidersHorizontal,
  ArrowRight,
  Compass
} from 'lucide-react';
import { STATE_NODES } from '../data/stateNodesData';

export const QuickTourBar = ({
  onSelectState,
  onSelectTab,
  onOpenVoiceModal,
  onOpenGeminiConfig
}) => {

  const handleScenarioPunjab = () => {
    const punjab = STATE_NODES.find(n => n.id === 'punjab');
    if (punjab) onSelectState(punjab);
    onSelectTab('advisory');
  };

  const handleScenarioMaharashtra = () => {
    const mh = STATE_NODES.find(n => n.id === 'maharashtra');
    if (mh) onSelectState(mh);
    onSelectTab('coop');
  };

  const handleScenarioDoctor = () => {
    onSelectTab('doctor');
  };

  const handleScenarioSatellite = () => {
    onSelectTab('satellite');
  };

  return (
    <div className="glass-panel" style={{
      padding: '12px 18px',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '12px',
      borderLeft: '4px solid var(--gold-primary)',
      background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(10, 31, 23, 0.8) 100%)'
    }}>
      {/* Title Tag */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Compass size={18} color="var(--gold-bright)" />
        <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#ffffff', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
          Quick Demo Flows:
        </span>
        <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
          Click any scenario to test end-to-end features instantly:
        </span>
      </div>

      {/* Preset Scenario Buttons */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        
        {/* Punjab Water-Saver */}
        <button
          onClick={handleScenarioPunjab}
          style={{
            background: 'rgba(16, 185, 129, 0.12)',
            border: '1px solid rgba(16, 185, 129, 0.35)',
            color: 'var(--emerald-bright)',
            padding: '6px 12px',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.78rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
          title="Load Punjab Alluvial Soil & DSR Advisory Flow"
        >
          <Sprout size={14} />
          <span>🌾 Punjab DSR Water-Saver</span>
        </button>

        {/* Maharashtra Pest Alert */}
        <button
          onClick={handleScenarioMaharashtra}
          style={{
            background: 'rgba(244, 63, 94, 0.12)',
            border: '1px solid rgba(244, 63, 94, 0.35)',
            color: '#fda4af',
            padding: '6px 12px',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.78rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
          title="Inspect Vidarbha Pink Bollworm Cross-Border Warning"
        >
          <Radio size={14} />
          <span>🐛 Vidarbha Pest Alert (Mesh)</span>
        </button>

        {/* Crop Doctor Vision */}
        <button
          onClick={handleScenarioDoctor}
          style={{
            background: 'rgba(245, 158, 11, 0.12)',
            border: '1px solid rgba(245, 158, 11, 0.35)',
            color: 'var(--gold-bright)',
            padding: '6px 12px',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.78rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
          title="Run Multimodal Leaf Pathology Diagnostics"
        >
          <Eye size={14} />
          <span>🔬 Crop Doctor Vision</span>
        </button>

        {/* Satellite Telemetry */}
        <button
          onClick={handleScenarioSatellite}
          style={{
            background: 'rgba(56, 189, 248, 0.12)',
            border: '1px solid rgba(56, 189, 248, 0.35)',
            color: 'var(--blue-accent)',
            padding: '6px 12px',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.78rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
          title="View Live NDVI Satellite Earth Observation"
        >
          <Satellite size={14} />
          <span>🛰️ Satellite NDVI Grid</span>
        </button>

        {/* Voice AI */}
        <button
          onClick={onOpenVoiceModal}
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid var(--border-subtle)',
            color: '#ffffff',
            padding: '6px 12px',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.78rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
          title="Ask Kisan Mitra Voice Assistant"
        >
          <Mic size={14} color="var(--emerald-bright)" />
          <span>🎙️ Voice AI</span>
        </button>

        {/* Gemini Config */}
        <button
          onClick={onOpenGeminiConfig}
          style={{
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.25) 0%, rgba(16, 185, 129, 0.25) 100%)',
            border: '1px solid var(--border-gold)',
            color: '#ffffff',
            padding: '6px 12px',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.78rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
          title="Open Google Gemini Settings"
        >
          <Sparkles size={14} color="var(--gold-bright)" />
          <span>⚡ Gemini Config</span>
        </button>

      </div>
    </div>
  );
};
