import { useEffect, useState } from 'react';

const STARS = Array.from({ length: 18 }, (_, k) => ({
  left: `${(k * 53) % 98}%`,
  top: `${(k * 29) % 48}%`,
  animationDelay: `${(k % 5) * 0.4}s`,
}));

const WAYPOINTS = [10, 34, 58, 84];

/** Autonomous surface vehicle sailing between waypoints with live-looking telemetry. */
export function AsvScene() {
  const [t, setT] = useState({ lat: 12.9512, lon: 80.2134, hdg: 84, spd: 1.8, rssi: -71 });

  useEffect(() => {
    const id = window.setInterval(() => {
      setT((p) => ({
        lat: p.lat + (Math.random() - 0.45) * 0.0004,
        lon: p.lon + (Math.random() - 0.4) * 0.0005,
        hdg: (p.hdg + Math.round((Math.random() - 0.5) * 6) + 360) % 360,
        spd: 1.5 + Math.random() * 0.7,
        rssi: -(66 + Math.round(Math.random() * 12)),
      }));
    }, 900);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="glass a-cy stage rv lf" aria-hidden="true">
      <span className="px stlab">ASV.MISSION // LIVE TELEMETRY</span>
      <div className="sky" />
      {STARS.map((s, i) => <span key={i} className="star" style={s} />)}
      <div className="glass a-cy px hud">
        <b>LAT</b><span>{t.lat.toFixed(4)} N</span>
        <b>LON</b><span>{t.lon.toFixed(4)} E</span>
        <b>HDG</b><span>{String(t.hdg).padStart(3, '0')}°</span>
        <b>SPD</b><span>{t.spd.toFixed(1)} kn</span>
        <b>LORA</b><span>{t.rssi} dBm</span>
        <b>GPS</b><span><span className="blink">●</span> FIX</span>
      </div>
      <div className="sea">
        <div className="wave w1" /><div className="wave w2" /><div className="wave w3" />
      </div>
      <div className="route" />
      {WAYPOINTS.map((x, i) => (
        <span key={x}>
          <span className="wp" style={{ left: `${x}%` }} />
          <span className="px wpl" style={{ left: `${x}%` }}>WP{i + 1}</span>
        </span>
      ))}
      <div className="asv-move">
        <div className="asv-flip">
          <div className="asv">
            <div className="wake" />
            <div className="hull" /><div className="hstripe" />
            <div className="cabin" /><div className="mast" /><div className="ant" />
            <span className="ring" /><span className="ring r2" />
          </div>
        </div>
      </div>
      <div className="sonar">
        <div className="sweep" />
        <span className="blip" style={{ left: 28, top: 30 }} />
        <span className="blip" style={{ left: 60, top: 52 }} />
      </div>
    </div>
  );
}
