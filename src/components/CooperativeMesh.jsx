import React, { useState } from 'react';
import { 
  Network, 
  Cpu, 
  Radio, 
  ArrowRightLeft, 
  PlusCircle, 
  Building,
  Check
} from 'lucide-react';
import { STATE_NODES } from '../data/stateNodesData';

export const CooperativeMesh = ({ currentStateNode, translations: t }) => {
  const [activeSubTab, setActiveSubTab] = useState('models'); // 'models' | 'vectors' | 'resources'
  const [deployedModels, setDeployedModels] = useState({});
  const [broadcastedAlerts, setBroadcastedAlerts] = useState([]);
  const [transfersInitiated, setTransfersInitiated] = useState({});
  const [showProposeModal, setShowProposeModal] = useState(false);
  const [newModelName, setNewModelName] = useState('');
  const [newModelImpact, setNewModelImpact] = useState('');

  // Deploy peer model into local state node
  const handleDeployModel = (modelId) => {
    setDeployedModels(prev => ({
      ...prev,
      [modelId]: true
    }));
  };

  // Broadcast new cross-border outbreak alert
  const handleBroadcastAlert = (alert) => {
    setBroadcastedAlerts(prev => [...prev, alert.id]);
  };

  // Initiate resource transfer
  const handleInitiateTransfer = (itemKey) => {
    setTransfersInitiated(prev => ({
      ...prev,
      [itemKey]: true
    }));
  };

  // Propose custom model
  const handleProposeSubmit = (e) => {
    e.preventDefault();
    if (newModelName.trim()) {
      setShowProposeModal(false);
      setNewModelName('');
      setNewModelImpact('');
    }
  };

  return (
    <div style={{ marginBottom: '32px' }}>
      
      {/* Title */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <Network size={22} color="var(--emerald-bright)" />
          <h2 style={{ fontSize: '1.45rem', margin: 0 }}>{t.coopMeshHeading}</h2>
          <span className="badge-tag badge-emerald" style={{ fontSize: '0.72rem' }}>
            National Interoperable DPG
          </span>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '960px' }}>
          {t.coopMeshDesc}
        </p>
      </div>

      {/* Navigation Sub-Tabs */}
      <div style={{
        display: 'flex',
        gap: '12px',
        borderBottom: '1px solid var(--border-subtle)',
        paddingBottom: '12px',
        marginBottom: '20px',
        flexWrap: 'wrap'
      }}>
        <button
          onClick={() => setActiveSubTab('models')}
          style={{
            padding: '8px 18px',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.88rem',
            fontWeight: 600,
            background: activeSubTab === 'models' ? 'var(--emerald-deep)' : 'transparent',
            color: activeSubTab === 'models' ? 'var(--emerald-bright)' : 'var(--text-muted)',
            border: activeSubTab === 'models' ? '1px solid var(--emerald-bright)' : '1px solid transparent'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Cpu size={16} />
            <span>{t.modelSharing}</span>
          </div>
        </button>

        <button
          onClick={() => setActiveSubTab('vectors')}
          style={{
            padding: '8px 18px',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.88rem',
            fontWeight: 600,
            background: activeSubTab === 'vectors' ? 'rgba(244, 63, 94, 0.15)' : 'transparent',
            color: activeSubTab === 'vectors' ? '#fda4af' : 'var(--text-muted)',
            border: activeSubTab === 'vectors' ? '1px solid var(--red-alert)' : '1px solid transparent'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Radio size={16} className="animate-pulse-glow" />
            <span>{t.earlyWarning}</span>
          </div>
        </button>

        <button
          onClick={() => setActiveSubTab('resources')}
          style={{
            padding: '8px 18px',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.88rem',
            fontWeight: 600,
            background: activeSubTab === 'resources' ? 'rgba(245, 158, 11, 0.15)' : 'transparent',
            color: activeSubTab === 'resources' ? 'var(--gold-bright)' : 'var(--text-muted)',
            border: activeSubTab === 'resources' ? '1px solid var(--gold-bright)' : '1px solid transparent'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ArrowRightLeft size={16} />
            <span>{t.resourcePool}</span>
          </div>
        </button>
      </div>

      {/* SUBTAB 1: FEDERATED MODEL SHARING */}
      {activeSubTab === 'models' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              Open-access AI models shared across Indian State Agricultural Universities (SAUs) & ICAR institutes.
            </div>
            <button
              onClick={() => setShowProposeModal(true)}
              className="btn-gold"
              style={{ padding: '7px 14px', fontSize: '0.82rem' }}
            >
              <PlusCircle size={14} />
              <span>{t.shareModelBtn}</span>
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '18px' }}>
            {STATE_NODES.map((node) => (
              <div key={node.id} className="glass-panel" style={{ padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Building size={16} color="var(--emerald-bright)" />
                    <strong style={{ fontSize: '0.95rem' }}>{node.state} Node</strong>
                  </div>
                  <span className="badge-tag badge-emerald" style={{ fontSize: '0.68rem' }}>
                    {node.sharedModels.length} Models Contributed
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {node.sharedModels.map((model) => {
                    const isDeployed = deployedModels[model.id];
                    return (
                      <div key={model.id} style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-md)',
                        padding: '14px'
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                          <h4 style={{ fontSize: '0.92rem', color: '#ffffff', margin: 0 }}>
                            {model.name}
                          </h4>
                          <span style={{ fontSize: '0.74rem', color: 'var(--emerald-bright)', fontFamily: 'var(--font-mono)' }}>
                            Acc: {model.accuracy}
                          </span>
                        </div>

                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
                          {model.impact}
                        </p>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                          <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                            Shared with: <strong>{model.sharedWith.join(', ')}</strong>
                          </span>

                          <button
                            onClick={() => handleDeployModel(model.id)}
                            style={{
                              padding: '5px 12px',
                              borderRadius: 'var(--radius-sm)',
                              fontSize: '0.75rem',
                              fontWeight: 600,
                              background: isDeployed ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                              color: isDeployed ? 'var(--emerald-bright)' : '#ffffff',
                              border: isDeployed ? '1px solid var(--emerald-bright)' : '1px solid var(--border-subtle)'
                            }}
                          >
                            {isDeployed ? (
                              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <Check size={12} /> Active in {currentStateNode.state}
                              </span>
                            ) : (
                              `Deploy in ${currentStateNode.state}`
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUBTAB 2: CROSS-BORDER DISEASE VECTOR EARLY WARNING */}
      {activeSubTab === 'vectors' && (
        <div>
          <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
            Real-time inter-state vector alert system. Outbreaks in one state automatically broadcast prophylactic protocols to bordering district KVKs.
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '18px' }}>
            {STATE_NODES.flatMap(n => n.vectorAlerts.map(a => ({ ...a, stateName: n.state }))).map((alert) => {
              const isSent = broadcastedAlerts.includes(alert.id);
              return (
                <div key={alert.id} className="glass-panel" style={{
                  padding: '20px',
                  borderLeft: '4px solid var(--red-alert)',
                  background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.06) 0%, rgba(10, 31, 23, 0.7) 100%)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span className="badge-tag badge-alert" style={{ fontSize: '0.7rem' }}>
                      {alert.severity}
                    </span>
                    <span style={{ fontSize: '0.74rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                      {alert.timestamp}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '6px' }}>
                    {alert.title}
                  </h3>

                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                    <strong>Origin:</strong> {alert.stateName} ({alert.sourceDistrict})<br />
                    <strong>Target Border Zones:</strong> <span style={{ color: 'var(--gold-bright)' }}>{alert.targetStates.join(', ')}</span>
                  </div>

                  <div style={{
                    background: 'rgba(0, 0, 0, 0.35)',
                    padding: '10px 12px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8rem',
                    color: '#e2e8f0',
                    marginBottom: '14px',
                    borderLeft: '3px solid var(--emerald-primary)'
                  }}>
                    <strong>Prophylactic Bio-Shield Directive:</strong> {alert.advisoryAction}
                  </div>

                  <button
                    onClick={() => handleBroadcastAlert(alert)}
                    style={{
                      width: '100%',
                      padding: '8px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      background: isSent ? 'rgba(16, 185, 129, 0.2)' : 'rgba(244, 63, 94, 0.2)',
                      color: isSent ? 'var(--emerald-bright)' : '#fda4af',
                      border: isSent ? '1px solid var(--emerald-bright)' : '1px solid rgba(244, 63, 94, 0.4)'
                    }}
                  >
                    {isSent ? '✓ Alert Broadcasted to All Border KVKs' : 'Broadcast Alert to Neighboring Districts'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* SUBTAB 3: INTER-STATE RESOURCE POOL */}
      {activeSubTab === 'resources' && (
        <div>
          <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
            Decentralized cooperative barter pool: Indian states exchange certified foundation seeds, bio-fertilizer consortia, and drone fleets across state borders.
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '18px' }}>
            {STATE_NODES.map((node) => (
              <div key={node.id} className="glass-panel" style={{ padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Building size={16} color="var(--gold-bright)" />
                    <strong style={{ fontSize: '0.95rem' }}>{node.state} Agri-Pool</strong>
                  </div>
                  <span className="badge-tag badge-gold" style={{ fontSize: '0.68rem' }}>
                    Beckn Contract Enabled
                  </span>
                </div>

                {/* Surplus List */}
                <div style={{ marginBottom: '14px' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--emerald-bright)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
                    State Surplus (Available for Exchange):
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {node.coopResourcePool.surplus.map((item, idx) => {
                      const itemKey = `${node.id}-surplus-${idx}`;
                      const isRequested = transfersInitiated[itemKey];
                      return (
                        <div key={idx} style={{
                          background: 'rgba(255, 255, 255, 0.03)',
                          padding: '8px 10px',
                          borderRadius: 'var(--radius-sm)',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          border: '1px solid var(--border-subtle)'
                        }}>
                          <div>
                            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#ffffff' }}>
                              {item.item}
                            </div>
                            <div style={{ fontSize: '0.72rem', color: 'var(--emerald-bright)' }}>
                              Reserve: {item.quantity} • Target: {item.targetNeeded}
                            </div>
                          </div>
                          <button
                            onClick={() => handleInitiateTransfer(itemKey)}
                            style={{
                              padding: '4px 10px',
                              borderRadius: 'var(--radius-sm)',
                              fontSize: '0.72rem',
                              fontWeight: 600,
                              background: isRequested ? 'rgba(16, 185, 129, 0.2)' : 'rgba(245, 158, 11, 0.15)',
                              color: isRequested ? 'var(--emerald-bright)' : 'var(--gold-bright)',
                              border: isRequested ? '1px solid var(--emerald-bright)' : '1px solid var(--border-gold)'
                            }}
                          >
                            {isRequested ? 'Transfer Requested' : 'Request Item'}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Deficit List */}
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--blue-accent)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
                    State Deficit (Looking for Partner State):
                  </div>
                  {node.coopResourcePool.deficit.map((item, idx) => (
                    <div key={idx} style={{
                      background: 'rgba(56, 189, 248, 0.05)',
                      padding: '8px 10px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)'
                    }}>
                      <div style={{ color: '#ffffff', fontWeight: 600 }}>{item.item}</div>
                      <div style={{ fontSize: '0.72rem' }}>Needed: {item.required} • Candidate: {item.partnerCandidate}</div>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      )}

      {/* Propose AI Model Modal */}
      {showProposeModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
          padding: '20px'
        }}>
          <div className="glass-panel-elevated" style={{ maxWidth: '500px', width: '100%', padding: '28px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>
              Propose Agricultural AI Model to National DPG Grid
            </h3>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '18px' }}>
              Publish your state university's trained machine learning model under open public license for pan-India farmer benefit.
            </p>

            <form onSubmit={handleProposeSubmit}>
              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '4px' }}>
                  Model Title & Version
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Saline-Soil Chickpea Bio-Yield Forecaster v1.0"
                  value={newModelName}
                  onChange={(e) => setNewModelName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    color: '#ffffff',
                    fontSize: '0.88rem'
                  }}
                />
              </div>

              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '4px' }}>
                  Quantified Climate / Regenerative Impact
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="e.g. Cuts nitrogen runoff by 25% and improves legume yield by 18% in calcareous soils..."
                  value={newModelImpact}
                  onChange={(e) => setNewModelImpact(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    color: '#ffffff',
                    fontSize: '0.88rem',
                    resize: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={() => setShowProposeModal(false)}
                  className="btn-secondary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Publish to Federation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
