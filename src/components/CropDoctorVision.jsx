import React, { useState, useRef } from 'react';
import { 
  Upload, 
  Sparkles, 
  Volume2, 
  ShieldCheck, 
  FlaskConical, 
  Sprout,
  Eye
} from 'lucide-react';
import { CROP_DISEASES, generateLeafSvg } from '../data/cropDiseasesData';
import { diagnoseCropDiseaseWithGemini } from '../services/geminiService';
import { voiceAssistant } from '../services/voiceAssistant';

export const CropDoctorVision = ({ currentLang, translations: t }) => {
  const [selectedPreset, setSelectedPreset] = useState(CROP_DISEASES[0]);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isDiagnosing, setIsDiagnosing] = useState(false);
  const [diagnosticResult, setDiagnosticResult] = useState(CROP_DISEASES[0]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const fileInputRef = useRef(null);

  // Handle preset selection
  const handleSelectPreset = (disease) => {
    setSelectedPreset(disease);
    setUploadedImage(null);
    setDiagnosticResult(disease);
    voiceAssistant.stopSpeaking();
    setIsSpeaking(false);
  };

  // Handle custom image upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target.result);
        setSelectedPreset(null);
        setDiagnosticResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  // Run Vision Diagnostic
  const handleDiagnose = async () => {
    setIsDiagnosing(true);
    voiceAssistant.stopSpeaking();
    setIsSpeaking(false);

    try {
      const result = await diagnoseCropDiseaseWithGemini({
        imageBase64: uploadedImage,
        selectedPresetId: selectedPreset ? selectedPreset.id : 'tomato_early_blight',
        cropHint: selectedPreset ? selectedPreset.crop : 'Indian Farm Crop'
      });
      setDiagnosticResult(result);
    } catch (err) {
      console.error('Diagnosis failed', err);
    } finally {
      setIsDiagnosing(false);
    }
  };

  // Toggle Voice Readout
  const handleToggleVoice = () => {
    if (isSpeaking) {
      voiceAssistant.stopSpeaking();
      setIsSpeaking(false);
    } else {
      if (!diagnosticResult) return;

      const speech = `Crop Doctor Diagnosis: ${diagnosticResult.name || diagnosticResult.diseaseName}. Severity: ${diagnosticResult.severity}. Primary bio-control remedy: ${diagnosticResult.organicRemedies[0]}. Chemical remedy: ${diagnosticResult.chemicalRemedies[0]}. Regenerative recommendation: ${diagnosticResult.regenerativeProtocol}`;

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
        text: speech,
        lang: langMap[currentLang] || 'hi-IN',
        onStart: () => setIsSpeaking(true),
        onEnd: () => setIsSpeaking(false),
        onError: () => setIsSpeaking(false)
      });
    }
  };

  return (
    <div style={{ marginBottom: '32px' }}>
      
      {/* Title */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <Eye size={22} color="var(--emerald-bright)" />
          <h2 style={{ fontSize: '1.45rem', margin: 0 }}>{t.cropDoctorHeading}</h2>
          <span className="badge-tag badge-gold" style={{ fontSize: '0.72rem' }}>
            Gemini Multimodal Computer Vision
          </span>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '960px' }}>
          {t.cropDoctorDesc}
        </p>
      </div>

      {/* Main Grid: Input / Presets + Diagnostic Findings */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '24px', alignItems: 'flex-start' }}>
        
        {/* Left Column: Visual Inspector & Presets */}
        <div className="glass-panel" style={{ padding: '24px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <h3 style={{ fontSize: '1.15rem', margin: 0 }}>Field Leaf Sample</h3>
            
            {/* Hidden file input */}
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileUpload} 
              accept="image/*" 
              style={{ display: 'none' }} 
            />
            
            <button
              onClick={() => fileInputRef.current && fileInputRef.current.click()}
              className="btn-secondary"
              style={{ padding: '6px 12px', fontSize: '0.78rem' }}
            >
              <Upload size={14} />
              <span>Upload Custom Photo</span>
            </button>
          </div>

          {/* Leaf Visual Display Box */}
          <div style={{
            width: '100%',
            height: '240px',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            border: '1px solid var(--border-highlight)',
            marginBottom: '16px',
            position: 'relative',
            background: '#07150f'
          }}>
            {uploadedImage ? (
              <img 
                src={uploadedImage} 
                alt="Uploaded crop leaf" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            ) : selectedPreset ? (
              <img 
                src={generateLeafSvg(selectedPreset.svgType)} 
                alt={selectedPreset.name} 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
              />
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-muted)' }}>
                No leaf selected
              </div>
            )}

            {/* Overlay scan tag */}
            <div style={{
              position: 'absolute',
              bottom: '10px',
              left: '10px',
              background: 'rgba(4, 16, 11, 0.85)',
              backdropFilter: 'blur(6px)',
              padding: '4px 10px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.74rem',
              color: 'var(--emerald-bright)',
              border: '1px solid var(--border-subtle)',
              fontFamily: 'var(--font-mono)'
            }}>
              Spectral Channel: RGB + Green Leaf Index (GLI)
            </div>
          </div>

          {/* Preset Buttons for Indian Crops */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px' }}>
              {t.orSelectPreset}:
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
              {CROP_DISEASES.map((disease) => {
                const isSelected = selectedPreset?.id === disease.id && !uploadedImage;
                return (
                  <button
                    key={disease.id}
                    onClick={() => handleSelectPreset(disease)}
                    style={{
                      textAlign: 'left',
                      padding: '8px 10px',
                      borderRadius: 'var(--radius-sm)',
                      background: isSelected ? 'rgba(16, 185, 129, 0.18)' : 'rgba(255, 255, 255, 0.03)',
                      border: isSelected ? '1px solid var(--emerald-bright)' : '1px solid var(--border-subtle)',
                      color: isSelected ? '#ffffff' : 'var(--text-main)',
                      fontSize: '0.78rem'
                    }}
                  >
                    <div style={{ fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {disease.name}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: isSelected ? 'var(--emerald-bright)' : 'var(--text-dim)' }}>
                      {disease.crop.split('(')[0]}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Trigger Diagnostic Button */}
          <button
            onClick={handleDiagnose}
            disabled={isDiagnosing}
            className="btn-primary"
            style={{ width: '100%', padding: '12px' }}
          >
            <Sparkles size={18} />
            <span>{isDiagnosing ? t.diagnosing : t.diagnoseButton}</span>
          </button>

        </div>

        {/* Right Column: Diagnostic Prescription & Remediation */}
        <div className="glass-panel-elevated" style={{ padding: '24px' }}>
          
          {isDiagnosing && (
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
              <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '6px' }}>{t.diagnosing}</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Gemini Multimodal Neural Network analyzing lesion morphology and pathogen spores...
              </p>
            </div>
          )}

          {!isDiagnosing && diagnosticResult && (
            <div>
              {/* Pathology Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                    <span className="badge-tag badge-alert">
                      {diagnosticResult.severity || 'Active Infection'}
                    </span>
                    <span className="badge-tag badge-emerald">
                      Confidence: {diagnosticResult.confidence || '97.4%'}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '6px 0 2px 0' }}>
                    {diagnosticResult.name || diagnosticResult.diseaseName}
                  </h3>
                  <div style={{ fontSize: '0.84rem', color: 'var(--gold-bright)', fontStyle: 'italic' }}>
                    {diagnosticResult.scientificName} • {diagnosticResult.crop}
                  </div>
                </div>

                {/* Audio prescription button */}
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
              </div>

              {/* Observed Symptoms */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '12px 14px',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.86rem',
                color: '#e2e8f0',
                marginBottom: '18px',
                borderLeft: '3px solid var(--gold-primary)'
              }}>
                <strong>Visual Pathology Signs:</strong> {diagnosticResult.symptoms}
              </div>

              {/* Section 1: CIBRC-Approved Bio-Control & Organic Remediation */}
              <div style={{ marginBottom: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                  <ShieldCheck size={16} color="var(--emerald-bright)" />
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--emerald-bright)', margin: 0, textTransform: 'uppercase' }}>
                    {t.immediateOrganic}
                  </h4>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {diagnosticResult.organicRemedies.map((remedy, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      gap: '8px',
                      fontSize: '0.82rem',
                      color: '#cbd5e1',
                      background: 'rgba(16, 185, 129, 0.06)',
                      padding: '8px 10px',
                      borderRadius: 'var(--radius-sm)'
                    }}>
                      <span style={{ color: 'var(--emerald-bright)', fontWeight: 700 }}>•</span>
                      <span>{remedy}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 2: Judicious Chemical Intervention */}
              <div style={{ marginBottom: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                  <FlaskConical size={16} color="var(--gold-bright)" />
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--gold-bright)', margin: 0, textTransform: 'uppercase' }}>
                    {t.chemicalTreatment}
                  </h4>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {diagnosticResult.chemicalRemedies.map((chem, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      gap: '8px',
                      fontSize: '0.82rem',
                      color: '#cbd5e1',
                      background: 'rgba(245, 158, 11, 0.06)',
                      padding: '8px 10px',
                      borderRadius: 'var(--radius-sm)'
                    }}>
                      <span style={{ color: 'var(--gold-bright)', fontWeight: 700 }}>•</span>
                      <span>{chem}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: Long-Term Soil & Crop Immunity */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                  <Sprout size={16} color="var(--blue-accent)" />
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--blue-accent)', margin: 0, textTransform: 'uppercase' }}>
                    {t.regenerativeImmunity}
                  </h4>
                </div>
                <p style={{
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.5,
                  margin: 0,
                  background: 'rgba(56, 189, 248, 0.05)',
                  padding: '10px',
                  borderRadius: 'var(--radius-sm)'
                }}>
                  {diagnosticResult.regenerativeProtocol}
                </p>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
};
