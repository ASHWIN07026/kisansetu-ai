import React, { useState } from 'react';
import { 
  Sparkles, 
  Volume2, 
  Send, 
  CheckCircle, 
  Leaf, 
  Sliders,
  RotateCcw
} from 'lucide-react';
import { generateGeminiAdvisory } from '../services/geminiService';
import { voiceAssistant } from '../services/voiceAssistant';
import { SOIL_BENCHMARKS } from '../data/soilCropsMatrix';

export const RegenerativeAdvisory = ({
  stateNode,
  currentLang,
  translations: t,
  onOpenSmsModal
}) => {
  const [soil, setSoil] = useState({ ...stateNode.defaultTelemetry });
  const [isComputing, setIsComputing] = useState(false);
  const [advisoryResult, setAdvisoryResult] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Sync default telemetry when state changes
  React.useEffect(() => {
    setSoil({ ...stateNode.defaultTelemetry });
    setAdvisoryResult(null);
    voiceAssistant.stopSpeaking();
    setIsSpeaking(false);
  }, [stateNode]);

  // Compute Advisory using Gemini
  const handleComputeAdvisory = async () => {
    setIsComputing(true);
    voiceAssistant.stopSpeaking();
    setIsSpeaking(false);

    try {
      const result = await generateGeminiAdvisory({
        stateNode,
        soilData: soil,
        satelliteData: stateNode.defaultTelemetry,
        language: currentLang
      });
      setAdvisoryResult(result);
    } catch (err) {
      console.error(err);
    } finally {
      setIsComputing(false);
    }
  };

  // Toggle Voice Audio Readout
  const handleToggleVoice = () => {
    if (isSpeaking) {
      voiceAssistant.stopSpeaking();
      setIsSpeaking(false);
    } else {
      if (!advisoryResult) return;

      const speechText = `Kisan Advisory for ${stateNode.state}. Primary recommended crop: ${advisoryResult.primaryCrop}. Companion cover crop: ${advisoryResult.companionCrop}. Regenerative score: ${advisoryResult.score || advisoryResult.regenerativeScore} percent. Agro advice: ${advisoryResult.agroReasoning}`;

      const langMap = {
        en: 'en-IN',
        hi: 'hi-IN',
        mr: 'mr-IN',
        pa: 'pa-IN',
        te: 'te-IN',
        ta: 'ta-IN',
        kn: 'kn-IN',
        bn: 'bn-IN'
      };

      voiceAssistant.speak({
        text: speechText,
        lang: langMap[currentLang] || 'hi-IN',
        onStart: () => setIsSpeaking(true),
        onEnd: () => setIsSpeaking(false),
        onError: () => setIsSpeaking(false)
      });
    }
  };

  // Quick preset resets
  const handleResetTelemetry = () => {
    setSoil({ ...stateNode.defaultTelemetry });
  };

  return (
    <div style={{ marginBottom: '32px' }}>
      
      {/* Title & Introduction */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <Leaf size={22} color="var(--emerald-bright)" />
          <h2 style={{ fontSize: '1.45rem', margin: 0 }}>{t.regenerativeHeading}</h2>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '960px' }}>
          {t.regenerativeDesc}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '24px', alignItems: 'flex-start' }}>
        
        {/* Left Column: Soil Health Card Interactive Benchmarks */}
        <div className="glass-panel" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sliders size={18} color="var(--gold-bright)" />
              <h3 style={{ fontSize: '1.15rem', margin: 0 }}>{t.soilParameters}</h3>
            </div>
            <button
              onClick={handleResetTelemetry}
              style={{
                background: 'transparent',
                color: 'var(--text-dim)',
                fontSize: '0.78rem',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
              title="Reset to State Benchmark"
            >
              <RotateCcw size={12} /> Reset
            </button>
          </div>

          {/* Quick Preset Buttons for Indian Soils */}
          <div style={{ marginBottom: '14px', background: 'rgba(0,0,0,0.25)', padding: '10px', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
              💡 Quick Soil Presets (1-Click Fill):
            </div>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => setSoil({ n: 185, p: 22, k: 240, ph: 7.8, oc: 0.42 })}
                style={{ padding: '4px 8px', borderRadius: '4px', fontSize: '0.72rem', background: 'rgba(16, 185, 129, 0.12)', color: 'var(--emerald-bright)', border: '1px solid var(--border-subtle)', cursor: 'pointer' }}
              >
                Punjab Alluvial
              </button>
              <button
                type="button"
                onClick={() => setSoil({ n: 140, p: 16, k: 310, ph: 8.2, oc: 0.38 })}
                style={{ padding: '4px 8px', borderRadius: '4px', fontSize: '0.72rem', background: 'rgba(245, 158, 11, 0.12)', color: 'var(--gold-bright)', border: '1px solid var(--border-subtle)', cursor: 'pointer' }}
              >
                MH Black Cotton
              </button>
              <button
                type="button"
                onClick={() => setSoil({ n: 210, p: 28, k: 180, ph: 6.2, oc: 0.55 })}
                style={{ padding: '4px 8px', borderRadius: '4px', fontSize: '0.72rem', background: 'rgba(56, 189, 248, 0.12)', color: 'var(--blue-accent)', border: '1px solid var(--border-subtle)', cursor: 'pointer' }}
              >
                KA Red Loam
              </button>
              <button
                type="button"
                onClick={() => setSoil({ n: 175, p: 19, k: 220, ph: 8.5, oc: 0.44 })}
                style={{ padding: '4px 8px', borderRadius: '4px', fontSize: '0.72rem', background: 'rgba(244, 63, 94, 0.12)', color: '#fda4af', border: '1px solid var(--border-subtle)', cursor: 'pointer' }}
              >
                TN Coastal Saline
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* Nitrogen Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', marginBottom: '4px' }}>
                <span style={{ fontWeight: 600 }}>{t.nitrogen} (N)</span>
                <span style={{ color: 'var(--emerald-bright)', fontFamily: 'var(--font-mono)' }}>{soil.n} kg/ha</span>
              </div>
              <input
                type="range"
                min="50"
                max="600"
                value={soil.n}
                onChange={(e) => setSoil({ ...soil, n: Number(e.target.value) })}
                style={{ width: '100%', accentColor: 'var(--emerald-primary)' }}
              />
              <div style={{ fontSize: '0.72rem', color: soil.n < 280 ? 'var(--orange-warn)' : 'var(--text-dim)' }}>
                {soil.n < 280 ? SOIL_BENCHMARKS.nitrogen.low.advice : SOIL_BENCHMARKS.nitrogen.medium.label}
              </div>
            </div>

            {/* Phosphorus Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', marginBottom: '4px' }}>
                <span style={{ fontWeight: 600 }}>{t.phosphorus} (P₂O₅)</span>
                <span style={{ color: 'var(--gold-bright)', fontFamily: 'var(--font-mono)' }}>{soil.p} kg/ha</span>
              </div>
              <input
                type="range"
                min="5"
                max="60"
                value={soil.p}
                onChange={(e) => setSoil({ ...soil, p: Number(e.target.value) })}
                style={{ width: '100%', accentColor: 'var(--gold-primary)' }}
              />
              <div style={{ fontSize: '0.72rem', color: soil.p < 10 ? 'var(--orange-warn)' : 'var(--text-dim)' }}>
                {soil.p < 10 ? SOIL_BENCHMARKS.phosphorus.low.advice : SOIL_BENCHMARKS.phosphorus.medium.label}
              </div>
            </div>

            {/* Potassium Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', marginBottom: '4px' }}>
                <span style={{ fontWeight: 600 }}>{t.potassium} (K₂O)</span>
                <span style={{ color: 'var(--blue-accent)', fontFamily: 'var(--font-mono)' }}>{soil.k} kg/ha</span>
              </div>
              <input
                type="range"
                min="60"
                max="450"
                value={soil.k}
                onChange={(e) => setSoil({ ...soil, k: Number(e.target.value) })}
                style={{ width: '100%', accentColor: 'var(--blue-accent)' }}
              />
              <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                {soil.k > 280 ? SOIL_BENCHMARKS.potassium.high.advice : SOIL_BENCHMARKS.potassium.medium.label}
              </div>
            </div>

            {/* Soil pH Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', marginBottom: '4px' }}>
                <span style={{ fontWeight: 600 }}>{t.soilPh}</span>
                <span style={{ color: '#ffffff', fontFamily: 'var(--font-mono)' }}>{soil.ph} pH</span>
              </div>
              <input
                type="range"
                min="5.0"
                max="9.5"
                step="0.1"
                value={soil.ph}
                onChange={(e) => setSoil({ ...soil, ph: Number(e.target.value) })}
                style={{ width: '100%', accentColor: '#10b981' }}
              />
              <div style={{ fontSize: '0.72rem', color: (soil.ph > 8.0 || soil.ph < 6.5) ? 'var(--orange-warn)' : 'var(--emerald-bright)' }}>
                {soil.ph > 8.0 ? SOIL_BENCHMARKS.ph.alkaline.advice : (soil.ph < 6.5 ? SOIL_BENCHMARKS.ph.acidic.advice : 'Optimal neutral range')}
              </div>
            </div>

            {/* Organic Carbon Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', marginBottom: '4px' }}>
                <span style={{ fontWeight: 600 }}>{t.organicCarbon} (OC %)</span>
                <span style={{ color: soil.oc < 0.5 ? 'var(--red-alert)' : 'var(--emerald-bright)', fontFamily: 'var(--font-mono)' }}>
                  {soil.oc}%
                </span>
              </div>
              <input
                type="range"
                min="0.2"
                max="1.5"
                step="0.02"
                value={soil.oc}
                onChange={(e) => setSoil({ ...soil, oc: Number(e.target.value) })}
                style={{ width: '100%', accentColor: soil.oc < 0.5 ? 'var(--red-alert)' : 'var(--emerald-bright)' }}
              />
              <div style={{ fontSize: '0.72rem', color: soil.oc < 0.5 ? '#fda4af' : 'var(--text-dim)' }}>
                {soil.oc < 0.5 ? SOIL_BENCHMARKS.organicCarbon.low.advice : 'Adequate active carbon'}
              </div>
            </div>

            <button
              onClick={handleComputeAdvisory}
              disabled={isComputing}
              className="btn-primary"
              style={{
                width: '100%',
                padding: '13px',
                marginTop: '10px',
                fontSize: '0.95rem'
              }}
            >
              <Sparkles size={18} />
              {isComputing ? t.computing : t.generateAdvisory}
            </button>
          </div>
        </div>

        {/* Right Column: AI Regenerative Recommendation Result */}
        <div className="glass-panel-elevated" style={{ padding: '24px' }}>
          
          {!advisoryResult && !isComputing && (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto',
                border: '1px solid var(--border-subtle)'
              }}>
                <Sparkles size={30} color="var(--emerald-bright)" />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
                AI Ready for {stateNode.name.split('(')[0]}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', maxWidth: '420px', margin: '0 auto 20px auto' }}>
                Click <strong>"{t.generateAdvisory}"</strong> to run Google Gemini cross-analysis on soil nutrients, satellite NDVI vigor, and 14-day rainfall.
              </p>
              <button
                onClick={handleComputeAdvisory}
                className="btn-gold"
              >
                <Sparkles size={16} /> Compute Now
              </button>
            </div>
          )}

          {isComputing && (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                border: '4px solid rgba(16, 185, 129, 0.2)',
                borderTopColor: 'var(--emerald-bright)',
                animation: 'spin 1s infinite linear',
                margin: '0 auto 20px auto'
              }} />
              <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
              <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '6px' }}>{t.computing}</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Cross-referencing ICAR Agro-Ecological Sub-Region guidelines & IMD monsoon telemetry...
              </p>
            </div>
          )}

          {advisoryResult && (
            <div>
              {/* Header Badges & Actions */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="badge-tag badge-emerald">
                    {advisoryResult.isLiveGemini ? 'Google Gemini 1.5 Live' : 'Autonomous ICAR Engine'}
                  </span>
                  <span className="badge-tag badge-gold">
                    Score: {advisoryResult.score || advisoryResult.regenerativeScore}/100
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  {/* Voice Listen Button */}
                  <button
                    onClick={handleToggleVoice}
                    className="btn-secondary"
                    style={{
                      padding: '6px 12px',
                      fontSize: '0.78rem',
                      background: isSpeaking ? 'rgba(16, 185, 129, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                      border: isSpeaking ? '1px solid var(--emerald-bright)' : '1px solid var(--border-subtle)'
                    }}
                  >
                    {isSpeaking ? (
                      <>
                        <div style={{ display: 'flex', gap: '3px', alignItems: 'center', height: '14px' }}>
                          <span className="wave-bar" />
                          <span className="wave-bar" />
                          <span className="wave-bar" />
                        </div>
                        <span>{t.stopAudio}</span>
                      </>
                    ) : (
                      <>
                        <Volume2 size={14} color="var(--emerald-bright)" />
                        <span>{t.listenAdvisory}</span>
                      </>
                    )}
                  </button>

                  {/* SMS / WhatsApp Export */}
                  <button
                    onClick={() => onOpenSmsModal({
                      state: stateNode.state,
                      primaryCrop: advisoryResult.primaryCrop,
                      companionCrop: advisoryResult.companionCrop,
                      waterSaved: advisoryResult.waterSavedLiters,
                      carbon: advisoryResult.carbonSequestration,
                      advice: advisoryResult.agroReasoning
                    })}
                    className="btn-secondary"
                    style={{ padding: '6px 12px', fontSize: '0.78rem' }}
                    title="Export for 2G / SMS"
                  >
                    <Send size={14} color="var(--gold-bright)" />
                    <span>SMS / WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Recommended Crops Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginBottom: '16px' }}>
                <div style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: 'var(--radius-md)',
                  padding: '14px'
                }}>
                  <div style={{ fontSize: '0.74rem', color: 'var(--emerald-bright)', fontWeight: 600, textTransform: 'uppercase' }}>
                    {t.recommendedCrop}
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>
                    {advisoryResult.primaryCrop}
                  </div>
                </div>

                <div style={{
                  background: 'rgba(245, 158, 11, 0.1)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  borderRadius: 'var(--radius-md)',
                  padding: '14px'
                }}>
                  <div style={{ fontSize: '0.74rem', color: 'var(--gold-bright)', fontWeight: 600, textTransform: 'uppercase' }}>
                    {t.companionCrop}
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>
                    {advisoryResult.companionCrop}
                  </div>
                </div>
              </div>

              {/* Impact Metrics Bar */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '8px',
                background: 'rgba(0, 0, 0, 0.35)',
                padding: '12px',
                borderRadius: 'var(--radius-md)',
                marginBottom: '18px',
                textAlign: 'center'
              }}>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>Water Saved</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--blue-accent)' }}>
                    {advisoryResult.waterSavedLiters}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>Carbon Stored</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--emerald-bright)' }}>
                    {advisoryResult.carbonSequestration}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>Chemical Cut</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--gold-bright)' }}>
                    {advisoryResult.syntheticReductionPercent}
                  </div>
                </div>
              </div>

              {/* Agro Reasoning */}
              <div style={{ marginBottom: '18px' }}>
                <h5 style={{ fontSize: '0.84rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px' }}>
                  ICAR & Google Gemini Reasoning
                </h5>
                <p style={{ fontSize: '0.88rem', color: '#e2e8f0', lineHeight: 1.6, background: 'rgba(255, 255, 255, 0.03)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
                  {advisoryResult.agroReasoning}
                </p>
              </div>

              {/* 4-Stage Phased Agro-Calendar */}
              {advisoryResult.calendar && (
                <div>
                  <h5 style={{ fontSize: '0.84rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '10px' }}>
                    {t.agroCalendar}
                  </h5>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {advisoryResult.calendar.map((item, idx) => (
                      <div key={idx} style={{
                        display: 'flex',
                        gap: '12px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        padding: '10px 12px',
                        borderRadius: 'var(--radius-sm)',
                        borderLeft: '3px solid var(--emerald-primary)'
                      }}>
                        <CheckCircle size={16} color="var(--emerald-bright)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <div>
                          <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ffffff' }}>
                            {item.stage}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                            {item.tasks}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}

        </div>

      </div>

    </div>
  );
};
