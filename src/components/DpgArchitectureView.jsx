import React, { useState } from 'react';
import { 
  Code2, 
  CheckCircle,
  Play
} from 'lucide-react';
import { DPG_SPECIFICATION } from '../data/dpgSchemaData';

export const DpgArchitectureView = ({ translations: t }) => {
  const [selectedEndpoint, setSelectedEndpoint] = useState(DPG_SPECIFICATION.openEndpoints[0]);
  const [testResponse, setTestResponse] = useState(null);
  const [isRunningTest, setIsRunningTest] = useState(false);

  const handleRunEndpointTest = () => {
    setIsRunningTest(true);
    setTimeout(() => {
      setTestResponse(selectedEndpoint.responseSample);
      setIsRunningTest(false);
    }, 400);
  };

  return (
    <div style={{ marginBottom: '32px' }}>
      
      {/* Title */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <Code2 size={22} color="var(--emerald-bright)" />
          <h2 style={{ fontSize: '1.45rem', margin: 0 }}>{t.tabDpg}</h2>
          <span className="badge-tag badge-emerald" style={{ fontSize: '0.72rem' }}>
            {DPG_SPECIFICATION.standard}
          </span>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '960px' }}>
          Designed in accordance with Digital Public Goods Alliance (DPGA) standards, India AgriStack, and Beckn Protocol for federated inter-state agricultural networks.
        </p>
      </div>

      {/* DPG Principles Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '14px',
        marginBottom: '24px'
      }}>
        {DPG_SPECIFICATION.interoperabilityPrinciples.map((principle, idx) => (
          <div key={idx} className="glass-panel" style={{ padding: '16px', borderLeft: '3px solid var(--emerald-primary)' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <CheckCircle size={16} color="var(--emerald-bright)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '0.82rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                {principle}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive API Explorer & Sandbox */}
      <div className="glass-panel-elevated" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Open Interoperable API Endpoints</h3>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Registry ID: <strong>{DPG_SPECIFICATION.dpgRegistryId}</strong> • License: {DPG_SPECIFICATION.license}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            {DPG_SPECIFICATION.openEndpoints.map((ep, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedEndpoint(ep);
                  setTestResponse(null);
                }}
                style={{
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  background: selectedEndpoint.path === ep.path ? 'var(--emerald-deep)' : 'rgba(255, 255, 255, 0.05)',
                  color: selectedEndpoint.path === ep.path ? 'var(--emerald-bright)' : 'var(--text-muted)',
                  border: selectedEndpoint.path === ep.path ? '1px solid var(--emerald-bright)' : '1px solid var(--border-subtle)'
                }}
              >
                {ep.method} {ep.path.split('/').pop()}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Endpoint Card */}
        <div style={{
          background: 'rgba(0, 0, 0, 0.4)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          padding: '16px',
          marginBottom: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <span style={{
              background: selectedEndpoint.method === 'POST' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(56, 189, 248, 0.2)',
              color: selectedEndpoint.method === 'POST' ? 'var(--emerald-bright)' : 'var(--blue-accent)',
              fontWeight: 800,
              fontSize: '0.75rem',
              padding: '2px 8px',
              borderRadius: '4px'
            }}>
              {selectedEndpoint.method}
            </span>
            <code style={{ fontSize: '0.88rem', color: '#ffffff', fontFamily: 'var(--font-mono)' }}>
              {selectedEndpoint.path}
            </code>
          </div>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', margin: 0 }}>
            {selectedEndpoint.description}
          </p>
        </div>

        {/* JSON Request & Response Sandbox */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
          
          {/* Request Payload */}
          <div>
            <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '6px' }}>
              Request Payload (JSON):
            </div>
            <pre style={{
              background: '#04100b',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '14px',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--emerald-bright)',
              overflowX: 'auto',
              maxHeight: '260px'
            }}>
              {JSON.stringify(selectedEndpoint.requestSample || { query: 'all' }, null, 2)}
            </pre>
            <button
              onClick={handleRunEndpointTest}
              disabled={isRunningTest}
              className="btn-primary"
              style={{ width: '100%', marginTop: '10px', padding: '9px', fontSize: '0.82rem' }}
            >
              <Play size={14} />
              <span>{isRunningTest ? 'Executing Protocol...' : 'Test Endpoint Response'}</span>
            </button>
          </div>

          {/* Response Payload */}
          <div>
            <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '6px' }}>
              Federated Response (Status: 200 OK):
            </div>
            <pre style={{
              background: '#04100b',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '14px',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--gold-bright)',
              overflowX: 'auto',
              maxHeight: '260px'
            }}>
              {JSON.stringify(testResponse || selectedEndpoint.responseSample, null, 2)}
            </pre>
          </div>

        </div>

      </div>

    </div>
  );
};
