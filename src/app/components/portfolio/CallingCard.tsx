import { useEffect, useState } from 'react';
import { portfolio } from '../../portfolioData';

const MONOGRAM = ['f..f.ccc.', 'ff.f.c..c', 'f.ff.ccc.', 'f..f.c.c.', 'f..f.c..c'].join('').split('');

interface CallingCardProps {
  /** Called when the card starts its exit — the site begins fading in underneath. */
  onLeave: () => void;
  /** Called once the exit animation has finished. */
  onDone: () => void;
}

export function CallingCard({ onLeave, onDone }: CallingCardProps) {
  const [leaving, setLeaving] = useState(false);
  const [flipped, setFlipped] = useState(false);

  function start() {
    if (leaving) return;
    setLeaving(true);
    onLeave();
    window.setTimeout(onDone, 900);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') start();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  return (
    <div className={`intro${leaving ? ' leaving' : ''}`} onClick={start} role="dialog" aria-label="Calling card">
      <button type="button" className="px skip" onClick={start}>SKIP [ESC]</button>
      <div className="stagep">
        <div className="spin">
          <div
            className={`ccard${flipped ? ' flipped' : ''}`}
            onClick={(e) => { e.stopPropagation(); setFlipped((f) => !f); }}
          >
            <div className="face glass cf">
              <div className="holo" />
              <div className="photo px">
                {portfolio.photo ? (
                  <img src={portfolio.photo} alt={portfolio.name} />
                ) : (
                  <>
                    <span style={{ fontSize: 20 }}>◈</span>
                    <span>YOUR PHOTO</span>
                    <span className="mono">photo.jpg</span>
                  </>
                )}
              </div>
              <div className="cinfo">
                <span className="px clab">// CALLING.CARD</span>
                <h2 className="px cname">NAYAN<br />RAJ</h2>
                <span className="px ctitle">AI/ML ENGINEER<br />ROBOTICS · FULL-STACK</span>
                <div className="cchips px">
                  <span>ML/AI</span><span>DATA</span><span>ROBOTICS</span><span>CV</span><span>FULL-STACK</span>
                </div>
                <div className="cmeta px">
                  <span>✉ {portfolio.contact.email}</span>
                  <span>☎ {portfolio.contact.phone}</span>
                  <span>⌂ github.com/NR0498</span>
                </div>
              </div>
              <span className="chipset" />
            </div>
            <div className="face back glass cb">
              <div className="mono-logo">
                {MONOGRAM.map((c, i) => <i key={i} className={c === '.' ? '' : c} />)}
              </div>
              <span className="px" style={{ fontSize: 9, color: 'var(--cy)' }}>PLAYER 1 · READY</span>
              <span className="px hint2">{portfolio.contact.location.toUpperCase()}</span>
            </div>
          </div>
        </div>
      </div>
      <span className="px hint2">CLICK CARD TO FLIP</span>
      <button type="button" className="px btn start" onClick={start}>PRESS START ▶</button>
    </div>
  );
}
