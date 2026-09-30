import React from 'react';
import { 
  ShieldAlert, 
  Cpu, 
  Radio, 
  ArrowRightLeft
} from 'lucide-react';

export const StateMeshBanner = ({ stateNode, translations: t, onSwitchTab }) => {
  return (
    <div className="glass-panel" style={{
      padding: '24px',
      marginBottom: '24px',
      position: 'relative',
      overflow: 'hidden',
      borderLeft: '4px solid var(--emerald-primary)'
    }}>
      {/* Background ambient gradient */}
      <div style={{
        position: 'absolute',
        top: '-40px',
        right: '-40px',
        width: '260px',
        height: '260px',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        {/* Left Side: Active Node Profile */}
        <div style={{ flex: '1 1 500px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <span className="badge-tag badge-emerald">
              <Radio size={12} className="animate-pulse-glow" />
              {t.activeNode}
            </span>
            <span className="badge-tag badge-gold">
              {stateNode.zone}
            </span>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
              NODE_ID: {stateNode.id.toUpperCase()}-IN-01
            </span>
          </div>

          <h2 style={{ fontSize: '1.65rem', fontWeight: 800, marginBottom: '6px' }}>
            {stateNode.name}
          </h2>

          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
            <strong>Dominant Soil & Geology:</strong> {stateNode.soilType} • <strong>Monitored Districts:</strong> {stateNode.districts.join(', ')}
          </p>

          <div style={{
            background: 'rgba(244, 63, 94, 0.08)',
            border: '1px solid rgba(244, 63, 94, 0.25)',
            borderRadius: 'var(--radius-md)',
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <ShieldAlert size={18} color="var(--red-alert)" style={{ flexShrink: 0 }} />
            <div style={{ fontSize: '0.84rem', color: '#fecdd3' }}>
              <strong>Active Regional Stress Challenge:</strong> {stateNode.activeChallenge}
            </div>
          </div>
        </div>

        {/* Right Side: Cooperative Federation Stats */}
        <div style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          {/* Models Contributed */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '14px 18px',
            minWidth: '150px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--emerald-bright)', fontSize: '0.78rem', fontWeight: 600 }}>
              <Cpu size={14} /> Models Shared
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', margin: '4px 0 2px 0' }}>
              {stateNode.sharedModels.length} Public Models
            </div>
            <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
              Shared with {stateNode.sharedModels[0]?.sharedWith.slice(0, 2).join(', ')}
            </div>
          </div>

          {/* Active Vector Outbreak Alert */}
          <div style={{
            background: stateNode.vectorAlerts.length > 0 ? 'rgba(245, 158, 11, 0.08)' : 'rgba(255, 255, 255, 0.04)',
            border: stateNode.vectorAlerts.length > 0 ? '1px solid var(--border-gold)' : '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '14px 18px',
            minWidth: '170px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gold-bright)', fontSize: '0.78rem', fontWeight: 600 }}>
              <Radio size={14} /> Vector Warning
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', margin: '4px 0 2px 0' }}>
              {stateNode.vectorAlerts.length} Active Vector
            </div>
            <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
              Targeting: {stateNode.vectorAlerts[0]?.targetStates[0] || 'Peer states'}
            </div>
          </div>

          {/* Inter-State Resource Pool */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '14px 18px',
            minWidth: '160px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--blue-accent)', fontSize: '0.78rem', fontWeight: 600 }}>
              <ArrowRightLeft size={14} /> Resource Pool
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', margin: '4px 0 2px 0' }}>
              {stateNode.coopResourcePool.surplus.length} Surplus Items
            </div>
            <button
              onClick={() => onSwitchTab('coop')}
              style={{
                background: 'transparent',
                color: 'var(--emerald-bright)',
                fontSize: '0.74rem',
                fontWeight: 600,
                padding: 0,
                marginTop: '4px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              Open Inter-State Mesh →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
