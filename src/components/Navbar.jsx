import React from 'react';
import { 
  Sprout, 
  Languages, 
  MapPin, 
  Mic, 
  Key, 
  Sparkles,
  Zap,
  Bot
} from 'lucide-react';
import { LANGUAGES } from '../data/translations';
import { STATE_NODES } from '../data/stateNodesData';
import { getStoredApiKey, getStoredModel, getAiMode } from '../services/geminiService';

export const Navbar = ({ 
  currentLang, 
  onLangChange, 
  currentStateNode, 
  onStateChange, 
  onOpenVoiceModal,
  onOpenGeminiConfig,
  translations: t
}) => {
  const hasApiKey = !!getStoredApiKey();
  const currentModel = getStoredModel();
  const currentMode = getAiMode();

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(4, 16, 11, 0.92)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '12px 24px'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        {/* Brand Logo & Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '46px',
            height: '46px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <Sprout size={26} color="#ffffff" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <h1 style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.02em', margin: 0, color: '#ffffff' }}>
                {t.appTitle}
              </h1>
              <span className="badge-tag badge-emerald" style={{ fontSize: '0.68rem', padding: '2px 8px' }}>
                DPG • Bharat
              </span>
              <span className="badge-tag badge-gold" style={{ fontSize: '0.68rem', padding: '2px 8px' }}>
                <Sparkles size={10} /> Google AI
              </span>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0 }}>
              {t.appSubtitle}
            </p>
          </div>
        </div>

        {/* Controls: State Selector, Language, Gemini Key, Voice */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          
          {/* State Agricultural Node Selector */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '6px 12px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)'
          }}>
            <MapPin size={16} color="var(--emerald-bright)" />
            <select
              value={currentStateNode.id}
              onChange={(e) => {
                const node = STATE_NODES.find(n => n.id === e.target.value);
                if (node) onStateChange(node);
              }}
              style={{
                background: 'transparent',
                color: '#ffffff',
                border: 'none',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              {STATE_NODES.map((node) => (
                <option key={node.id} value={node.id} style={{ background: '#092116', color: '#ffffff' }}>
                  {node.state} ({node.name.split('(')[1] ? node.name.split('(')[1].replace(')', '') : node.state})
                </option>
              ))}
            </select>
          </div>

          {/* Language Selector (8 Indian Languages) */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '6px 12px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)'
          }}>
            <Languages size={16} color="var(--gold-bright)" />
            <select
              value={currentLang}
              onChange={(e) => onLangChange(e.target.value)}
              style={{
                background: 'transparent',
                color: '#ffffff',
                border: 'none',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code} style={{ background: '#092116', color: '#ffffff' }}>
                  {lang.native} ({lang.name})
                </option>
              ))}
            </select>
          </div>

          {/* Google Gemini AI Configuration Button */}
          <button
            onClick={onOpenGeminiConfig}
            className="btn-secondary"
            style={{
              padding: '7px 14px',
              fontSize: '0.82rem',
              border: hasApiKey ? '1px solid rgba(16, 185, 129, 0.5)' : '1px solid var(--border-gold)',
              background: hasApiKey ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.12)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
            title="Configure Google Gemini AI Key and Model"
          >
            {hasApiKey ? (
              <Zap size={14} color="var(--emerald-bright)" />
            ) : (
              <Key size={14} color="var(--gold-bright)" />
            )}
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 700, color: hasApiKey ? 'var(--emerald-bright)' : 'var(--gold-bright)', fontSize: '0.78rem' }}>
                {hasApiKey ? '⚡ Gemini Connected' : '🔑 Gemini Config'}
              </div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                {hasApiKey ? currentModel.replace('gemini-', 'Gemini ') : 'Local ICAR Active'}
              </div>
            </div>
          </button>

          {/* Kisan Mitra Voice Assistant Button */}
          <button
            onClick={onOpenVoiceModal}
            className="btn-primary animate-pulse-glow"
            style={{
              padding: '8px 16px',
              fontSize: '0.86rem',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
            }}
          >
            <Mic size={16} />
            <span>{t.voiceAssistant}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
