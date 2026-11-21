import { useCallback, useEffect, useRef, useState } from 'react';
import { portfolio } from '../../portfolioData';

const projects = portfolio.projects;

/**
 * Horizontal project gallery: native scroll + snap (trackpad, touch, shift+wheel),
 * mouse drag, arrow buttons, dots and keyboard. Cards tilt in 3D by distance from centre.
 */
export function ProjectGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startLeft: 0, moved: false });
  const [index, setIndex] = useState(0);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const mid = el.offsetLeft + el.offsetWidth / 2;
      const d = (mid - center) / el.offsetWidth; // -n..n cards away
      const c = Math.max(-1.5, Math.min(1.5, d));
      el.style.setProperty('--rot', `${(-c * 14).toFixed(2)}deg`);
      el.style.setProperty('--sc', (1 - Math.min(Math.abs(c), 1) * 0.1).toFixed(3));
      el.style.setProperty('--op', (1 - Math.min(Math.abs(c), 1.5) * 0.3).toFixed(3));
      if (Math.abs(d) < bestDist) { bestDist = Math.abs(d); best = i; }
    });
    setIndex(best);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    update();
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      track.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [update]);

  function goTo(i: number) {
    const track = trackRef.current;
    const el = track?.children[Math.max(0, Math.min(projects.length - 1, i))] as HTMLElement | undefined;
    if (!track || !el) return;
    track.scrollTo({ left: el.offsetLeft + el.offsetWidth / 2 - track.clientWidth / 2, behavior: 'smooth' });
  }

  // Mouse drag-to-scroll (touch and trackpads already scroll natively).
  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    const track = trackRef.current!;
    drag.current = { active: true, startX: e.clientX, startLeft: track.scrollLeft, moved: false };
  }
  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const d = drag.current;
    if (!d.active) return;
    const dx = e.clientX - d.startX;
    if (!d.moved && Math.abs(dx) > 6) {
      d.moved = true;
      trackRef.current!.classList.add('dragging');
      trackRef.current!.setPointerCapture(e.pointerId);
    }
    if (d.moved) trackRef.current!.scrollLeft = d.startLeft - dx;
  }
  function endDrag(e: React.PointerEvent<HTMLDivElement>) {
    const d = drag.current;
    if (!d.active) return;
    d.active = false;
    const track = trackRef.current!;
    if (d.moved) {
      track.classList.remove('dragging');
      if (track.hasPointerCapture(e.pointerId)) track.releasePointerCapture(e.pointerId);
      goTo(index);
    }
  }
  // Swallow the click that ends a drag so links inside cards don't fire.
  function onClickCapture(e: React.MouseEvent) {
    if (drag.current.moved) { e.preventDefault(); e.stopPropagation(); drag.current.moved = false; }
  }

  return (
    <div className="gallery rv up">
      <div className="gal-bar">
        <span className="px gal-count">
          <b>{String(index + 1).padStart(2, '0')}</b> / {String(projects.length).padStart(2, '0')}
        </span>
        <span className="px gal-hint">◀ DRAG · SWIPE · SCROLL ▶</span>
        <div className="gal-arrows">
          <button type="button" className="px btn sm cy" onClick={() => goTo(index - 1)} disabled={index === 0} aria-label="Previous project">◀</button>
          <button type="button" className="px btn sm cy" onClick={() => goTo(index + 1)} disabled={index === projects.length - 1} aria-label="Next project">▶</button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="gal-track"
        tabIndex={0}
        aria-label="Projects gallery"
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') { e.preventDefault(); goTo(index + 1); }
          if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(index - 1); }
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
      >
        {projects.map((p, i) => (
          <div key={p.title} className={`slide${i === index ? ' active' : ''}`}>
            <article className={`glass pc ${p.accent}`}>
              <div className="pimg">
                <div className="scan" />
                {p.image ? <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" draggable={false} /> : <span className="gl px">{p.glyph}</span>}
                <span className="px cat">{p.cat}</span>
                <span className="px pnum">#{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="pb">
                <h3 className="px">{p.title}</h3>
                <p className="body pd">{p.desc}</p>
                <div className="pt">{p.tech.map((t) => <span key={t} className="px">{t}</span>)}</div>
                <div className="pl">
                  {p.github && <a className="px btn sm cy" href={p.github} target="_blank" rel="noreferrer" draggable={false}>GITHUB ↗</a>}
                  {p.live && <a className="px btn sm" href={p.live} target="_blank" rel="noreferrer" draggable={false}>LIVE ↗</a>}
                  {!p.github && !p.live && <span className="px none">LINKS COMING SOON</span>}
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>

      <div className="gal-dots" role="tablist" aria-label="Choose project">
        {projects.map((p, i) => (
          <button key={p.title} type="button" role="tab" aria-selected={i === index} aria-label={p.title} className={`dot ${p.accent}${i === index ? ' on' : ''}`} onClick={() => goTo(i)} />
        ))}
      </div>
    </div>
  );
}
