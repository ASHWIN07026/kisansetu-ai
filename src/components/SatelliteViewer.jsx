import React, { useState, useEffect, useRef } from 'react';
import { 
  Satellite
} from 'lucide-react';

export const SatelliteViewer = ({ telemetry, stateNode, translations: t }) => {
  const [activeLayer, setActiveLayer] = useState('ndvi'); // 'ndvi' | 'ndmi' | 'thermal'
  const canvasRef = useRef(null);

  // Render simulated geospatial satellite grid on Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw field boundary parcel grid (simulating ISRO Bhuvan cadastral plots)
    const cols = 6;
    const rows = 4;
    const plotW = width / cols;
    const plotH = height / rows;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * plotW;
        const y = r * plotH;
        
        // Pseudo-random plot variation seeded by position and active state
        const seed = Math.sin(r * 12.9898 + c * 78.233 + stateNode.coordinates.lat) * 43758.5453;
        const variation = (seed - Math.floor(seed)) * 0.25 - 0.12;

        let fillCol = '#10b981';

        if (activeLayer === 'ndvi') {
          const val = Math.min(0.85, Math.max(0.2, telemetry.ndvi + variation));
          if (val > 0.65) fillCol = 'rgba(16, 185, 129, 0.85)'; // lush
          else if (val > 0.50) fillCol = 'rgba(52, 211, 153, 0.7)'; // good
          else if (val > 0.38) fillCol = 'rgba(234, 179, 8, 0.75)'; // moderate
          else fillCol = 'rgba(239, 68, 68, 0.75)'; // stressed
        } else if (activeLayer === 'ndmi') {
          const val = telemetry.ndmi + variation;
          if (val > 0.15) fillCol = 'rgba(14, 165, 233, 0.85)'; // high moisture
          else if (val > -0.05) fillCol = 'rgba(56, 189, 248, 0.7)'; // normal
          else if (val > -0.2) fillCol = 'rgba(245, 158, 11, 0.75)'; // dry
          else fillCol = 'rgba(225, 29, 72, 0.8)'; // severe deficit
        } else {
          // Thermal stress
          const val = variation > 0 ? 'rgba(244, 63, 94, 0.75)' : 'rgba(245, 158, 11, 0.65)';
          fillCol = val;
        }

        ctx.fillStyle = fillCol;
        ctx.fillRect(x + 2, y + 2, plotW - 4, plotH - 4);

        // Plot boundary line
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(x + 2, y + 2, plotW - 4, plotH - 4);

        // Plot label
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.font = '10px JetBrains Mono, monospace';
        ctx.fillText(`P-${r * cols + c + 1}`, x + 6, y + 16);
      }
    }

    // Draw irrigation canal / drainage line through parcel
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.8)';
    ctx.lineWidth = 3;
    ctx.setLineDash([6, 4]);
    ctx.beginPath();
    ctx.moveTo(0, height * 0.4);
    ctx.bezierCurveTo(width * 0.3, height * 0.45, width * 0.7, height * 0.35, width, height * 0.42);
    ctx.stroke();
    ctx.setLineDash([]);

  }, [activeLayer, telemetry, stateNode]);

  return (
    <div className="glass-panel" style={{ padding: '24px', marginBottom: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '18px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <Satellite size={20} color="var(--emerald-bright)" />
            <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{t.satelliteTelemetry}</h3>
            <span className="badge-tag badge-emerald" style={{ fontSize: '0.72rem' }}>
              ISRO Bhuvan / Copernicus Sentinel Sync
            </span>
          </div>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', margin: 0 }}>
            Real-time multispectral earth observation for <strong>{stateNode.state}</strong> • Lat: {stateNode.coordinates.lat}°N, Lng: {stateNode.coordinates.lng}°E
          </p>
        </div>

        {/* Layer Selector */}
        <div style={{ display: 'flex', gap: '8px', background: 'rgba(0, 0, 0, 0.3)', padding: '4px', borderRadius: 'var(--radius-md)' }}>
          <button
            onClick={() => setActiveLayer('ndvi')}
            style={{
              padding: '6px 14px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.82rem',
              fontWeight: 600,
              background: activeLayer === 'ndvi' ? 'var(--emerald-deep)' : 'transparent',
              color: activeLayer === 'ndvi' ? 'var(--emerald-bright)' : 'var(--text-muted)',
              border: activeLayer === 'ndvi' ? '1px solid var(--emerald-bright)' : 'none'
            }}
          >
            NDVI (Vigor)
          </button>
          <button
            onClick={() => setActiveLayer('ndmi')}
            style={{
              padding: '6px 14px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.82rem',
              fontWeight: 600,
              background: activeLayer === 'ndmi' ? 'rgba(14, 165, 233, 0.25)' : 'transparent',
              color: activeLayer === 'ndmi' ? 'var(--blue-accent)' : 'var(--text-muted)',
              border: activeLayer === 'ndmi' ? '1px solid var(--blue-accent)' : 'none'
            }}
          >
            NDMI (Moisture)
          </button>
          <button
            onClick={() => setActiveLayer('thermal')}
            style={{
              padding: '6px 14px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.82rem',
              fontWeight: 600,
              background: activeLayer === 'thermal' ? 'rgba(245, 158, 11, 0.25)' : 'transparent',
              color: activeLayer === 'thermal' ? 'var(--gold-bright)' : 'var(--text-muted)',
              border: activeLayer === 'thermal' ? '1px solid var(--gold-bright)' : 'none'
            }}
          >
            Thermal Stress
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', alignItems: 'center' }}>
        
        {/* Interactive Simulated Satellite Imagery Canvas */}
        <div style={{
          position: 'relative',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          border: '1px solid var(--border-subtle)',
          background: '#04100b'
        }}>
          <canvas
            ref={canvasRef}
            width={540}
            height={280}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />

          {/* Compass & Sensor HUD overlay */}
          <div style={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            background: 'rgba(4, 16, 11, 0.85)',
            backdropFilter: 'blur(6px)',
            padding: '6px 10px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.74rem',
            fontFamily: 'var(--font-mono)',
            border: '1px solid var(--border-subtle)'
          }}>
            🛰 {telemetry.satellitePass} • Res: 10m Ground Sampling
          </div>

          <div style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'rgba(4, 16, 11, 0.85)',
            backdropFilter: 'blur(6px)',
            padding: '6px 10px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.72rem',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            border: '1px solid var(--border-subtle)'
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
            Cadastral Cadre Synced
          </div>
        </div>

        {/* Telemetry Metric Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
          
          {/* NDVI */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '14px'
          }}>
            <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
              Normalized Difference Vegetation (NDVI)
            </div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--emerald-bright)' }}>
              {telemetry.ndvi}
            </div>
            <div style={{ fontSize: '0.74rem', color: telemetry.ndvi > 0.5 ? 'var(--emerald-bright)' : 'var(--orange-warn)', marginTop: '2px' }}>
              {telemetry.ndvi > 0.5 ? 'Dense Healthy Canopy' : 'Moderate Biomass / Emergence'}
            </div>
          </div>

          {/* NDMI */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '14px'
          }}>
            <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
              Normalized Difference Moisture (NDMI)
            </div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--blue-accent)' }}>
              {telemetry.ndmi}
            </div>
            <div style={{ fontSize: '0.74rem', color: telemetry.ndmi > 0 ? 'var(--blue-accent)' : '#fda4af', marginTop: '2px' }}>
              {telemetry.ndmi > 0 ? 'Adequate Rootzone Moisture' : 'Subsurface Moisture Deficit'}
            </div>
          </div>

          {/* IMD Rainfall Forecast */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '14px'
          }}>
            <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
              IMD 14-Day Cumulative Rain
            </div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff' }}>
              {telemetry.rainfall14d} <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>mm</span>
            </div>
            <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)', marginTop: '2px' }}>
              IMD Agromet Advisory Ensemble
            </div>
          </div>

          {/* Drought Stress Risk */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '14px'
          }}>
            <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
              Drought Stress Index
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--gold-bright)' }}>
              {telemetry.droughtIndex}
            </div>
            <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)', marginTop: '2px' }}>
              SPEI Standardized Evapotranspiration
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
