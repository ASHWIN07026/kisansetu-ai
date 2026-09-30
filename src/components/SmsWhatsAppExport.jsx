import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Share2, 
  Smartphone
} from 'lucide-react';

export const SmsWhatsAppExport = ({ data, isOpen, onClose, translations: t }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !data) return null;

  // Formatted SMS text
  const smsText = `[KISAN-SETU BHARAT]
State: ${data.state}
Primary Crop: ${data.primaryCrop}
Companion Crop: ${data.companionCrop}
Water Saved: ${data.waterSaved || '2.8M L/ha'}
Advice: ${data.advice ? data.advice.slice(0, 160) + '...' : 'Practice zero-till sowing and organic bio-shield.'}
Govt Helpline: 1800-180-1551 (Kisan Call Center)`;

  const handleCopy = () => {
    navigator.clipboard.writeText(smsText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppShare = () => {
    const encoded = encodeURIComponent(smsText);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 110,
      padding: '16px'
    }}>
      <div className="glass-panel-elevated" style={{
        maxWidth: '560px',
        width: '100%',
        padding: '28px',
        position: 'relative'
      }}>
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '20px', right: '20px', background: 'transparent', color: 'var(--text-muted)' }}
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <Smartphone size={22} color="var(--emerald-bright)" />
          <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{t.smsTitle}</h3>
        </div>
        <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '18px' }}>
          {t.smsSub}
        </p>

        {/* Feature Phone Simulator Box */}
        <div style={{
          background: '#020b07',
          border: '2px solid rgba(16, 185, 129, 0.3)',
          borderRadius: 'var(--radius-md)',
          padding: '16px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.82rem',
          color: 'var(--emerald-bright)',
          lineHeight: 1.5,
          whiteSpace: 'pre-wrap',
          marginBottom: '20px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '6px',
            right: '8px',
            fontSize: '0.65rem',
            color: 'var(--text-dim)'
          }}>
            GSM 2G / USSD / SMS
          </div>
          {smsText}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
          <button
            onClick={handleCopy}
            className="btn-secondary"
            style={{ padding: '8px 16px' }}
          >
            {copied ? <Check size={16} color="var(--emerald-bright)" /> : <Copy size={16} />}
            <span>{copied ? 'Copied to Clipboard' : 'Copy SMS Text'}</span>
          </button>

          <button
            onClick={handleWhatsAppShare}
            className="btn-primary"
            style={{ padding: '8px 16px', background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)' }}
          >
            <Share2 size={16} />
            <span>Share to WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
};
