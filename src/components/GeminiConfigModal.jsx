import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Key, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  X, 
  Eye, 
  EyeOff, 
  Zap, 
  Layers, 
  ShieldCheck, 
  RotateCcw,
  Check
} from 'lucide-react';
import { 
  getStoredApiKey, 
  saveApiKey, 
  clearApiKey, 
  getStoredModel, 
  saveModel, 
  getAiMode, 
  saveAiMode, 
  testGeminiApiKey, 
  GEMINI_MODELS 
} from '../services/geminiService';

export const GeminiConfigModal = ({ isOpen, onClose, onConfigUpdated }) => {
  const [apiKey, setApiKey] = useState('');
  const [selectedModel, setSelectedModel] = useState('gemini-1.5-flash');
  const [aiMode, setAiMode] = useState('auto'); // 'auto' | 'live' | 'icar'
  const [showKey, setShowKey] = useState(false);
  const [testStatus, setTestStatus] = useState(null); // { loading, success, message, error }
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setApiKey(getStoredApiKey());
      setSelectedModel(getStoredModel());
      setAiMode(getAiMode());
      setTestStatus(null);
      setSaveSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleTestKey = async () => {
    setTestStatus({ loading: true });
    const res = await testGeminiApiKey(apiKey, selectedModel);
    setTestStatus({
      loading: false,
      success: res.success,
      message: res.message,
      error: res.error,
      reply: res.reply
    });
  };

  const handleSave = () => {
    if (apiKey.trim()) {
      saveApiKey(apiKey.trim());
    } else {
      clearApiKey();
    }
    saveModel(selectedModel);
    saveAiMode(aiMode);

    setSaveSuccess(true);
    if (onConfigUpdated) onConfigUpdated();

    setTimeout(() => {
      onClose();
    }, 600);
  };

  const handleResetToDefault = () => {
    clearApiKey();
    saveModel('gemini-1.5-flash');
    saveAiMode('auto');
    setApiKey('');
    setSelectedModel('gemini-1.5-flash');
    setAiMode('auto');
    setTestStatus(null);
    if (onConfigUpdated) onConfigUpdated();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.82)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 120,
      padding: '16px'
    }}>
      <div className="glass-panel-elevated" style={{
        maxWidth: '620px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '28px',
        position: 'relative'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '20px', right: '20px', background: 'transparent', color: 'var(--text-muted)' }}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 16px rgba(245, 158, 11, 0.4)'
          }}>
            <Sparkles size={22} color="#ffffff" />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.3rem' }}>Google Gemini AI Configuration</h3>
            <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Configure your Google AI Studio model and live multimodal connection
            </p>
          </div>
        </div>

        {/* Quick Link to Google AI Studio */}
        <div style={{
          background: 'rgba(245, 158, 11, 0.08)',
          border: '1px solid rgba(245, 158, 11, 0.25)',
          borderRadius: 'var(--radius-md)',
          padding: '12px 14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '16px 0 20px 0',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ffffff' }}>
              Need a free Google AI Studio Key?
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Google provides free API credits with zero credit card required.
            </div>
          </div>
          <a
            href="https://aistudio.google.com/app/apikey"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              background: 'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)',
              color: '#ffffff',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.78rem',
              fontWeight: 700,
              textDecoration: 'none'
            }}
          >
            <span>Get Free Key</span>
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Section 1: API Key Input */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '6px' }}>
            Google Gemini API Key
          </label>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <input
              type={showKey ? 'text' : 'password'}
              placeholder="Paste AIzaSy... API key or leave blank for autonomous ICAR mode"
              value={apiKey}
              onChange={(e) => {
                setApiKey(e.target.value);
                setTestStatus(null);
              }}
              style={{
                width: '100%',
                padding: '12px 42px 12px 14px',
                background: 'rgba(0, 0, 0, 0.5)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                color: '#ffffff',
                fontSize: '0.88rem',
                fontFamily: 'var(--font-mono)'
              }}
            />
            <button
              type="button"
              onClick={() => setShowKey(!showKey)}
              style={{
                position: 'absolute',
                right: '12px',
                background: 'transparent',
                color: 'var(--text-muted)',
                padding: 0
              }}
            >
              {showKey ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
              Keys are stored securely in browser local storage or loaded from .env.
            </span>
            {apiKey && (
              <button
                type="button"
                onClick={handleTestKey}
                disabled={testStatus?.loading}
                style={{
                  background: 'transparent',
                  color: 'var(--emerald-bright)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '2px 6px'
                }}
              >
                <Zap size={12} />
                <span>{testStatus?.loading ? 'Pinging Google AI...' : 'Test Connection'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Live Test Status Banner */}
        {testStatus && (
          <div style={{
            background: testStatus.success ? 'rgba(16, 185, 129, 0.12)' : 'rgba(244, 63, 94, 0.12)',
            border: testStatus.success ? '1px solid var(--border-highlight)' : '1px solid rgba(244, 63, 94, 0.35)',
            borderRadius: 'var(--radius-md)',
            padding: '10px 14px',
            marginBottom: '18px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '10px'
          }}>
            {testStatus.success ? (
              <CheckCircle2 size={18} color="var(--emerald-bright)" style={{ flexShrink: 0, marginTop: '2px' }} />
            ) : (
              <AlertCircle size={18} color="var(--red-alert)" style={{ flexShrink: 0, marginTop: '2px' }} />
            )}
            <div style={{ fontSize: '0.82rem', color: testStatus.success ? 'var(--emerald-bright)' : '#fda4af' }}>
              <strong>{testStatus.success ? 'Verified:' : 'Connection Error:'}</strong>{' '}
              {testStatus.message || testStatus.error}
            </div>
          </div>
        )}

        {/* Section 2: Model Version Selector */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '8px' }}>
            Select Gemini Foundation Model
          </label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {GEMINI_MODELS.map((m) => {
              const isSelected = selectedModel === m.id;
              return (
                <div
                  key={m.id}
                  onClick={() => setSelectedModel(m.id)}
                  style={{
                    background: isSelected ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                    border: isSelected ? '1px solid var(--emerald-bright)' : '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '12px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      border: isSelected ? '5px solid var(--emerald-bright)' : '2px solid var(--text-dim)',
                      background: 'transparent'
                    }} />
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff' }}>
                        {m.name}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: isSelected ? 'var(--emerald-bright)' : 'var(--text-dim)' }}>
                        Performance: {m.speed} • Context: {m.tokens}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 3: AI Mode Selector */}
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '8px' }}>
            Intelligence Engine Mode
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
            <button
              type="button"
              onClick={() => setAiMode('auto')}
              style={{
                textAlign: 'left',
                padding: '10px',
                borderRadius: 'var(--radius-md)',
                background: aiMode === 'auto' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                border: aiMode === 'auto' ? '1px solid var(--emerald-bright)' : '1px solid var(--border-subtle)',
                color: '#ffffff'
              }}
            >
              <div style={{ fontSize: '0.84rem', fontWeight: 700 }}>⚡ Auto Cloud / Local</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Uses Gemini API when key is present, otherwise ICAR</div>
            </button>

            <button
              type="button"
              onClick={() => setAiMode('icar')}
              style={{
                textAlign: 'left',
                padding: '10px',
                borderRadius: 'var(--radius-md)',
                background: aiMode === 'icar' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                border: aiMode === 'icar' ? '1px solid var(--gold-bright)' : '1px solid var(--border-subtle)',
                color: '#ffffff'
              }}
            >
              <div style={{ fontSize: '0.84rem', fontWeight: 700 }}>🌱 Autonomous ICAR</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>100% offline knowledge base simulation</div>
            </button>
          </div>
        </div>

        {/* Bottom Actions */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)' }}>
          <button
            type="button"
            onClick={handleResetToDefault}
            className="btn-secondary"
            style={{ fontSize: '0.78rem', padding: '6px 12px' }}
          >
            <RotateCcw size={12} />
            <span>Reset Defaults</span>
          </button>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="btn-primary"
            >
              {saveSuccess ? (
                <>
                  <Check size={16} /> Saved!
                </>
              ) : (
                'Save & Apply'
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
