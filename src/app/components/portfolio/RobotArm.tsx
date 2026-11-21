import { useEffect, useState } from 'react';

const PROMPT = 'pick the yellow cube, place it on the right belt';

/** CSS pick-and-place arm with a language prompt and a detection box. */
export function RobotArm() {
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setTyped((n) => (n >= PROMPT.length + 30 ? 0 : n + 1)), 70);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="glass a-or stage rv rt" aria-hidden="true">
      <span className="px stlab">SO-101.SIM // PICK &amp; PLACE</span>
      <div className="px readout">
        <span>J1 · SHOULDER</span>
        <span>J2 · ELBOW</span>
        <span style={{ color: 'var(--te)' }}>POLICY: VLA</span>
      </div>
      <div className="glass a-te prompt">
        &gt; {PROMPT.slice(0, Math.min(typed, PROMPT.length))}<span className="cur" />
      </div>
      <div className="arm-floor" />
      <div className="belt l" />
      <div className="belt r" />
      <div className="blk src" />
      <div className="bbox" />
      <div className="blk dst" />
      <div className="abase"><span className="led" /></div>
      <div className="aturret" />
      <div className="seg1">
        <span className="joint j1" />
        <div className="seg2">
          <span className="joint j2" />
          <div className="grip" />
          <div className="fing a" />
          <div className="fing b" />
          <div className="carry" />
        </div>
      </div>
    </div>
  );
}
