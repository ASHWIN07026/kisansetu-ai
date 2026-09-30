import React, { useState } from 'react';
import { 
  Navbar 
} from './components/Navbar';
import { 
  StateMeshBanner 
} from './components/StateMeshBanner';
import { 
  QuickTourBar 
} from './components/QuickTourBar';
import { 
  RegenerativeAdvisory 
} from './components/RegenerativeAdvisory';
import { 
  SatelliteViewer 
} from './components/SatelliteViewer';
import { 
  CropDoctorVision 
} from './components/CropDoctorVision';
import { 
  CooperativeMesh 
} from './components/CooperativeMesh';
import { 
  DpgArchitectureView 
} from './components/DpgArchitectureView';
import { 
  KisanMitraVoiceModal 
} from './components/KisanMitraVoiceModal';
import { 
  SmsWhatsAppExport 
} from './components/SmsWhatsAppExport';
import { 
  GeminiConfigModal 
} from './components/GeminiConfigModal';

import { STATE_NODES } from './data/stateNodesData';
import { translations } from './data/translations';

import { 
  Sprout, 
  Satellite, 
  Eye, 
  Network, 
  Code2,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export function App() {
  const [currentLang, setCurrentLang] = useState('en');
  const [currentStateNode, setCurrentStateNode] = useState(STATE_NODES[0]);
  const [activeTab, setActiveTab] = useState('advisory'); // 'advisory' | 'satellite' | 'doctor' | 'coop' | 'dpg'
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);
  const [isGeminiModalOpen, setIsGeminiModalOpen] = useState(false);
  const [smsModalData, setSmsModalData] = useState(null);
  const [, setConfigCounter] = useState(0);

  const t = translations[currentLang] || translations.en;

  const handleConfigUpdated = () => {
    setConfigCounter(prev => prev + 1);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Sticky Navbar with Live Status & Gemini Config */}
      <Navbar
        currentLang={currentLang}
        onLangChange={setCurrentLang}
        currentStateNode={currentStateNode}
        onStateChange={setCurrentStateNode}
        onOpenVoiceModal={() => setIsVoiceModalOpen(true)}
        onOpenGeminiConfig={() => setIsGeminiModalOpen(true)}
        translations={t}
      />

      <main className="app-container" style={{ flex: 1, marginTop: '20px' }}>
        
        {/* 1-Click Guided Scenario Bar for Effortless Exploration */}
        <QuickTourBar
          onSelectState={(node) => setCurrentStateNode(node)}
          onSelectTab={(tab) => setActiveTab(tab)}
          onOpenVoiceModal={() => setIsVoiceModalOpen(true)}
          onOpenGeminiConfig={() => setIsGeminiModalOpen(true)}
        />

        {/* Active State Node Banner & Regional Challenge */}
        <StateMeshBanner
          stateNode={currentStateNode}
          translations={t}
          onSwitchTab={(tab) => setActiveTab(tab)}
        />

        {/* Primary Navigation Tabs */}
        <div style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '12px',
          marginBottom: '28px',
          scrollbarWidth: 'none'
        }}>
          <button
            onClick={() => setActiveTab('advisory')}
            style={{
              padding: '10px 20px',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.9rem',
              fontWeight: 700,
              background: activeTab === 'advisory' ? 'var(--emerald-deep)' : 'rgba(255, 255, 255, 0.03)',
              color: activeTab === 'advisory' ? 'var(--emerald-bright)' : 'var(--text-muted)',
              border: activeTab === 'advisory' ? '1px solid var(--emerald-bright)' : '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              whiteSpace: 'nowrap'
            }}
          >
            <Sprout size={18} />
            <span>{t.tabAdvisory}</span>
          </button>

          <button
            onClick={() => setActiveTab('satellite')}
            style={{
              padding: '10px 20px',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.9rem',
              fontWeight: 700,
              background: activeTab === 'satellite' ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.03)',
              color: activeTab === 'satellite' ? 'var(--blue-accent)' : 'var(--text-muted)',
              border: activeTab === 'satellite' ? '1px solid var(--blue-accent)' : '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              whiteSpace: 'nowrap'
            }}
          >
            <Satellite size={18} />
            <span>{t.tabSatellite}</span>
          </button>

          <button
            onClick={() => setActiveTab('doctor')}
            style={{
              padding: '10px 20px',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.9rem',
              fontWeight: 700,
              background: activeTab === 'doctor' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(255, 255, 255, 0.03)',
              color: activeTab === 'doctor' ? 'var(--gold-bright)' : 'var(--text-muted)',
              border: activeTab === 'doctor' ? '1px solid var(--gold-bright)' : '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              whiteSpace: 'nowrap'
            }}
          >
            <Eye size={18} />
            <span>{t.tabDoctor}</span>
          </button>

          <button
            onClick={() => setActiveTab('coop')}
            style={{
              padding: '10px 20px',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.9rem',
              fontWeight: 700,
              background: activeTab === 'coop' ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(245, 158, 11, 0.2) 100%)' : 'rgba(255, 255, 255, 0.03)',
              color: activeTab === 'coop' ? '#ffffff' : 'var(--text-muted)',
              border: activeTab === 'coop' ? '1px solid var(--emerald-bright)' : '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              whiteSpace: 'nowrap'
            }}
          >
            <Network size={18} color="var(--emerald-bright)" />
            <span>{t.tabCoop}</span>
            <span className="badge-tag badge-gold" style={{ fontSize: '0.65rem', padding: '1px 6px' }}>
              Theme
            </span>
          </button>

          <button
            onClick={() => setActiveTab('dpg')}
            style={{
              padding: '10px 20px',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.9rem',
              fontWeight: 700,
              background: activeTab === 'dpg' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.03)',
              color: activeTab === 'dpg' ? '#ffffff' : 'var(--text-muted)',
              border: activeTab === 'dpg' ? '1px solid #ffffff' : '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              whiteSpace: 'nowrap'
            }}
          >
            <Code2 size={18} />
            <span>{t.tabDpg}</span>
          </button>
        </div>

        {/* Tab Content Display */}
        {activeTab === 'advisory' && (
          <RegenerativeAdvisory
            stateNode={currentStateNode}
            currentLang={currentLang}
            translations={t}
            onOpenSmsModal={(data) => setSmsModalData(data)}
          />
        )}

        {activeTab === 'satellite' && (
          <SatelliteViewer
            telemetry={currentStateNode.defaultTelemetry}
            stateNode={currentStateNode}
            translations={t}
          />
        )}

        {activeTab === 'doctor' && (
          <CropDoctorVision
            currentLang={currentLang}
            translations={t}
          />
        )}

        {activeTab === 'coop' && (
          <CooperativeMesh
            currentStateNode={currentStateNode}
            translations={t}
          />
        )}

        {activeTab === 'dpg' && (
          <DpgArchitectureView
            translations={t}
          />
        )}

      </main>

      {/* Google Gemini AI Configuration Modal */}
      <GeminiConfigModal
        isOpen={isGeminiModalOpen}
        onClose={() => setIsGeminiModalOpen(false)}
        onConfigUpdated={handleConfigUpdated}
      />

      {/* Kisan Mitra Voice Assistant Modal */}
      <KisanMitraVoiceModal
        isOpen={isVoiceModalOpen}
        onClose={() => setIsVoiceModalOpen(false)}
        currentLang={currentLang}
        stateNode={currentStateNode}
        translations={t}
      />

      {/* Low-Bandwidth SMS / WhatsApp Modal */}
      <SmsWhatsAppExport
        data={smsModalData}
        isOpen={!!smsModalData}
        onClose={() => setSmsModalData(null)}
        translations={t}
      />

      {/* Footer */}
      <footer style={{
        background: 'rgba(2, 10, 6, 0.95)',
        borderTop: '1px solid var(--border-subtle)',
        padding: '30px 24px',
        marginTop: 'auto'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <Sprout size={18} color="var(--emerald-bright)" />
              <strong style={{ fontSize: '0.95rem', color: '#ffffff' }}>KisanSetu AI (किसान सेतु)</strong>
              <span className="badge-tag badge-emerald" style={{ fontSize: '0.65rem' }}>Open DPG</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', margin: 0 }}>
              National Interoperable Digital Agriculture Network & Cooperative Knowledge Mesh • Built for Indian Smallholder Farmers
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            <span>Google AI Studio & Vertex AI</span>
            <span>•</span>
            <span>ISRO Bhuvan</span>
            <span>•</span>
            <span>ICAR & IMD Agromet</span>
            <span>•</span>
            <span>India AgriStack / Beckn</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
