import { CSSProperties, FormEvent, useEffect, useState } from 'react';
import { AsvScene } from './components/portfolio/AsvScene';
import { CallingCard } from './components/portfolio/CallingCard';
import { ProjectGallery } from './components/portfolio/ProjectGallery';
import { RobotArm } from './components/portfolio/RobotArm';
import { classLogo, logoRows, navigationItems, portfolio } from './portfolioData';

const ACCENTS = ['a-or', 'a-cy', 'a-am', 'a-te'];
const BLOCKS = Array.from({ length: 12 }, (_, i) => ({
  cls: `fb ${ACCENTS[i % 4]}${i % 3 === 1 ? ' d2' : i % 3 === 2 ? ' d3' : ''}`,
  style: { '--s': `${18 + ((i * 37) % 34)}px`, left: `${(i * 83) % 92}%`, top: `${(i * 47 + 8) % 92}%` } as CSSProperties,
  par: 0.04 + (i % 4) * 0.035,
}));

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - (window.innerWidth < 980 ? 100 : 10);
  window.scrollTo({ top: y, behavior: 'smooth' });
}

/** Re-triggering scroll reveals, active-nav tracking, XP bar, scene fades, parallax and cursor glow. */
function useScrollEffects(setActive: (id: string) => void, enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;
    const reveals = Array.from(document.querySelectorAll<HTMLElement>('.rv'));
    // Reset so everything in view animates in fresh after the calling card.
    reveals.forEach((el) => el.classList.remove('in'));
    const groups = new Map<Element | null, number>();
    reveals.forEach((el) => {
      const i = groups.get(el.parentElement) ?? 0;
      el.style.transitionDelay = `${Math.min(i * 0.09, 0.45)}s`;
      groups.set(el.parentElement, i + 1);
    });
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.target.classList.toggle('in', en.isIntersecting)),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    reveals.forEach((el) => revealObserver.observe(el));

    const navObserver = new IntersectionObserver(
      (entries) => entries.forEach((en) => { if (en.isIntersecting) setActive(en.target.id); }),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    navigationItems.forEach(({ id }) => { const s = document.getElementById(id); if (s) navObserver.observe(s); });

    const scenes = Array.from(document.querySelectorAll<HTMLElement>('[data-scene]'));
    const parallax = Array.from(document.querySelectorAll<HTMLElement>('[data-par]'));
    const bar = document.getElementById('xpbar');
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      if (bar) bar.style.width = `${p * 100}%`;
      scenes.forEach((s, i) => { s.style.opacity = Math.max(0, 1 - Math.abs(p - i / 3) * 3.2).toFixed(3); });
      parallax.forEach((el) => { el.style.transform = `translate3d(0,${-window.scrollY * Number(el.dataset.par)}px,0)`; });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const glow = document.getElementById('cglow');
    const onMove = (e: MouseEvent) => { if (glow) { glow.style.left = `${e.clientX}px`; glow.style.top = `${e.clientY}px`; } };
    window.addEventListener('mousemove', onMove);

    return () => {
      revealObserver.disconnect();
      navObserver.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMove);
    };
  }, [setActive, enabled]);
}

function NavButtons({ active }: { active: string }) {
  return (
    <>
      {navigationItems.map((n) => (
        <button key={n.id} type="button" className={`px nb${active === n.id ? ' on' : ''}`} onClick={() => scrollToSection(n.id)} aria-current={active === n.id ? 'page' : undefined}>
          &gt; {n.label}
        </button>
      ))}
    </>
  );
}

export default function App() {
  const [active, setActive] = useState('home');
  // 'card': only the calling card is visible · 'leaving': card exits while the site fades in · 'done'
  const [intro, setIntro] = useState<'card' | 'leaving' | 'done'>(() => (window.location.hash.includes('skipintro') ? 'done' : 'card'));
  const [formNotice, setFormNotice] = useState('');
  const [sending, setSending] = useState(false);
  const siteVisible = intro !== 'card';
  useScrollEffects(setActive, siteVisible);

  // Lock scrolling while the card is up so the hidden page can't move underneath it.
  useEffect(() => {
    if (siteVisible) return;
    window.scrollTo(0, 0);
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = 'hidden';
    return () => { root.style.overflow = prev; };
  }, [siteVisible]);

  function replayCard() {
    setIntro('card');
  }

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSending(true);
    setFormNotice('Sending your message...');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: data.get('name'), email: data.get('email'), message: data.get('message'), website: data.get('website') }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.error || 'Unable to send your message right now.');
      form.reset();
      setFormNotice('Message sent. Thank you — I will get back to you soon.');
    } catch (error) {
      setFormNotice(error instanceof Error ? error.message : 'Unable to send your message right now.');
    } finally {
      setSending(false);
    }
  }

  const { current, previous } = portfolio.experience;

  return (
    <div className="root">
      <div className={`site${siteVisible ? ' ready' : ''}`} aria-hidden={!siteVisible}>
      {/* BACKGROUND */}
      <div className="bgfx">
        {[0, 1, 2, 3].map((i) => <div key={i} className={`scene sc${i + 1}`} data-scene={i} />)}
        <div className="grid-bg" data-par="0.08" />
        <div className="vign" />
        {BLOCKS.map((b, i) => <div key={i} className={b.cls} style={b.style} data-par={b.par} />)}
      </div>
      <div className="cglow" id="cglow" />
      <div className="xp" id="xpbar" />

      {/* SIDEBAR + MOBILE HEADER */}
      <aside className="side">
        <p className="px kicker">// PORTFOLIO.EXE</p>
        <h1 className="px brand">{portfolio.shortName}</h1>
        <div className="bar" />
        <nav className="nav" aria-label="Primary navigation"><NavButtons active={active} /></nav>
        <button type="button" className="px cardbtn" onClick={replayCard}>▶ CALLING CARD</button>
        <p className="px online"><span className="blink">●</span> ONLINE</p>
      </aside>
      <header className="mtop">
        <div className="row">
          <span className="px" style={{ fontSize: 12, color: 'var(--or)', textShadow: '2px 2px 0 var(--ord)' }}>{portfolio.shortName}</span>
          <button type="button" className="px btn sm cy" onClick={replayCard}>▶ CARD</button>
        </div>
        <nav className="mnav" aria-label="Mobile navigation"><NavButtons active={active} /></nav>
      </header>

      <main className="main">
        {/* HERO */}
        <section id="home" className="hero">
          <div>
            <div className="avatar px rv zm">
              {portfolio.photo ? <img src={portfolio.photo} alt={portfolio.name} /> : <><span style={{ fontSize: 22 }}>◈</span><span>YOUR PHOTO</span></>}
            </div>
            <h1 className="px h1 rv up">{portfolio.name}</h1>
            <p className="px role rv up">{portfolio.role}</p>
            <p className="body tagline rv up">{portfolio.tagline}</p>
            <p className="px status rv up"><span className="blink">●</span> {portfolio.status}</p>
            <div className="chips rv up">
              {portfolio.classes.map((c) => <span key={c.title} className={`px chip ${c.accent}`}>{c.short}</span>)}
            </div>
            <div className="ctas rv up">
              <button type="button" className="px btn" onClick={() => scrollToSection('projects')}>VIEW PROJECTS</button>
              <button type="button" className="px btn cy" onClick={() => scrollToSection('contact')}>CONTACT ME</button>
            </div>
          </div>
        </section>

        {/* TECH LOGOS */}
        <section className="rv fl" style={{ padding: '8px 0 24px' }} aria-label="Technologies">
          {[logoRows.ai, logoRows.web].map((row, r) => (
            <div key={r} className="mq">
              <div className={`track${r ? ' rev' : ''}`}>
                {[...row, ...row].map((l, i) => (
                  <div key={i} className="logo"><img src={l.src} alt={l.name} loading="lazy" /><span className="px">{l.name}</span></div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* ABOUT */}
        <section id="about" className="sec a-cy">
          <h2 className="px h2 rv lf">// ABOUT.ME</h2>
          <div className="g2">
            <div className="glass a-cy pad rv lf">
              <span className="px tag">MY.STORY</span>
              {portfolio.about.paragraphs.map((p) => <p key={p} className="body" style={{ color: 'rgba(128,232,255,.85)', margin: '0 0 14px' }}>{p}</p>)}
            </div>
            <div className="glass a-or pad rv rt">
              <span className="px tag">HIGHLIGHTS</span>
              {portfolio.about.highlights.map((h) => (
                <div key={h.text} className="li body a-or"><span className="ic">{h.icon}</span><span>{h.text}</span></div>
              ))}
            </div>
          </div>
        </section>

        {/* CLASSES + SKILLS */}
        <section id="skills" className="sec a-te">
          <h2 className="px h2 rv lf">// CLASS.SELECT</h2>
          <p className="body sub rv up">Roles I can step into, and the skills each one unlocks.</p>
          <div className="classes">
            {portfolio.classes.map((c) => (
              <div key={c.title} className={`glass rc rv fl ${c.accent}`}>
                <div className="top">
                  <div className="ico px">{c.icon}</div>
                  <div>
                    <span className="px cls">{c.cls}</span>
                    <h3 className="px">{c.title}</h3>
                  </div>
                </div>
                <p className="body desc">{c.desc}</p>
                <div className="px tree"><span>SKILL TREE</span><span>{c.skills.length} UNLOCKED</span></div>
                <div className="skl">
                  {c.skills.map((s, i) => <span key={s} style={{ '--i': i } as CSSProperties}>{s}</span>)}
                </div>
                <div className="mini">
                  {c.logos.map(([slug, name]) => <img key={slug + name} src={classLogo(slug, c.hex)} alt={name} title={name} loading="lazy" />)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="sec a-or">
          <h2 className="px h2 rv lf">// WORK.EXP</h2>

          <div className="exp">
            <div className="glass a-or ex rv lf">
              <span className="px tag">CURRENT.QUEST</span>
              <div className="head">
                <span className="px when ph">{current.when}</span>
                <span className="px badge"><span className="blink">●</span> ACTIVE</span>
              </div>
              <h3 className="px">{current.title}</h3>
              <div className="px focus">{current.focus}</div>
              <div className="px org">{current.org}</div>
              <ul>{current.bullets.map((b) => <li key={b} className="body">{b}</li>)}</ul>
              <div className="tags">{current.tags.map((t) => <span key={t} className="px tg">{t}</span>)}</div>
            </div>
            <RobotArm />
          </div>

          <div className="exp">
            <AsvScene />
            <div className="glass a-cy ex rv rt">
              <span className="px tag">QUEST.COMPLETE</span>
              <span className="px when ph">{previous.when}</span>
              <h3 className="px">{previous.title}</h3>
              <div className="px org">{previous.org}</div>
              <ul>{previous.bullets.map((b) => <li key={b} className="body">{b}</li>)}</ul>
              <div className="tags">{previous.tags.map((t) => <span key={t} className="px tg">{t}</span>)}</div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="sec a-cy">
          <h2 className="px h2 rv lf">// PROJECTS</h2>
          <ProjectGallery />
        </section>

        {/* CERTIFICATES */}
        <section id="certificates" className="sec a-am">
          <h2 className="px h2 rv lf">// CERTIFICATES</h2>
          <div className="g3">
            {portfolio.certificates.map((c) => (
              <div key={c.title} className="glass a-am cert rv fl">
                <span className="ci">{c.icon}</span>
                <div><h4 className="px">{c.title}</h4><p className="px">{c.issuer}</p><p className="px" style={{ color: '#777' }}>{c.date}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* WRITING */}
        <section id="writing" className="sec a-te">
          <h2 className="px h2 rv lf">// WRITING</h2>
          <div className="g2">
            <div className="glass a-te pad rv lf">
              <span className="px tag">LATEST.UPDATE</span>
              <h3 className="px" style={{ fontSize: 11, lineHeight: 1.8, color: 'var(--te)', margin: 0 }}>{portfolio.latestPost.title}</h3>
              <p className="body" style={{ color: 'rgba(128,255,232,.8)', margin: '14px 0' }}>{portfolio.latestPost.summary}</p>
              <p className="px" style={{ fontSize: 8, color: 'rgba(0,255,212,.7)' }}>{portfolio.latestPost.date} · {portfolio.latestPost.readingTime}</p>
              <a className="px btn cy" style={{ marginTop: 12 }} href={portfolio.latestPost.url} target="_blank" rel="noreferrer">READ UPDATE</a>
            </div>
            <div className="glass a-cy pad rv rt">
              <span className="px tag">NOW.LOG</span>
              {portfolio.activities.map((a) => (
                <div key={a.text} className="li body a-cy">
                  <span className="ic">{a.icon}</span>
                  <div><div>{a.text}</div><div style={{ opacity: .65, fontSize: 17 }}>{a.time}</div></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT — delivery is handled by api/contact.ts on Vercel. */}
        <section id="contact" className="sec a-or">
          <h2 className="px h2 rv lf">// CONTACT</h2>
          <div className="g2">
            <div className="glass a-or pad rv lf">
              <span className="px tag">GET.IN.TOUCH</span>
              <p className="body" style={{ color: 'rgba(255,179,102,.9)', margin: 0 }}>{portfolio.contact.availability}</p>
              <div className="ct px">
                <div><b>EMAIL</b><a href={`mailto:${portfolio.contact.email}`}>{portfolio.contact.email}</a></div>
                <div><b>PHONE</b><a href={portfolio.contact.phoneHref}>{portfolio.contact.phone}</a></div>
                <div><b>BASE</b>{portfolio.contact.location}</div>
              </div>
              <div className="socials">
                <a className="px btn sm cy" href={portfolio.contact.github} target="_blank" rel="noreferrer">GITHUB</a>
                <a className="px btn sm cy" href={portfolio.contact.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a>
                <a className="px btn sm" href={`mailto:${portfolio.contact.email}`}>EMAIL ME</a>
              </div>
            </div>
            <form className="glass a-or pad rv rt" onSubmit={handleContactSubmit}>
              <span className="px tag">SEND.MESSAGE</span>
              <label className="px field">&gt; YOUR.NAME<input required name="name" placeholder="Your name" /></label>
              <label className="px field">&gt; EMAIL.ADDRESS<input required name="email" type="email" placeholder="you@example.com" /></label>
              <label className="px field">&gt; MESSAGE<textarea required name="message" rows={5} placeholder="Tell me about your project..." /></label>
              <label className="hidden-field" aria-hidden="true">Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
              <button type="submit" className="px btn" style={{ width: '100%' }} disabled={sending}>{sending ? 'SENDING...' : 'SEND MESSAGE'}</button>
              {formNotice && <p role="status" aria-live="polite" className="body notice">{formNotice}</p>}
            </form>
          </div>
        </section>

        <footer className="foot">
          <p className="px" style={{ fontSize: 8, color: 'rgba(0,212,255,.7)', margin: 0 }}>{portfolio.shortName} · BUILT WITH REACT + VITE</p>
          <p className="px" style={{ fontSize: 7, color: 'rgba(255,255,255,.4)', margin: '14px 0 0' }}>© {new Date().getFullYear()} {portfolio.name}. ALL RIGHTS RESERVED.</p>
        </footer>
      </main>
      </div>

      {intro !== 'done' && <CallingCard onLeave={() => setIntro('leaving')} onDone={() => setIntro('done')} />}
    </div>
  );
}
