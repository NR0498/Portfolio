import { FormEvent, useState } from 'react';
import { motion } from 'motion/react';
import { CertificateCard } from './components/CertificateCard';
import { CursorGlow } from './components/CursorGlow';
import { MinecraftBackground } from './components/MinecraftBackground';
import { MinecraftButton } from './components/MinecraftButton';
import { MinecraftCard } from './components/MinecraftCard';
import { ProjectCard } from './components/ProjectCard';
import { ScrollReveal } from './components/ScrollReveal';
import { Sidebar } from './components/Sidebar';
import { portfolio } from './portfolioData';

type Accent = 'orange' | 'cyan' | 'amber' | 'teal';

const sectionStyles: Record<Accent, { accent: string; shadow: string }> = {
  orange: { accent: '#FF6B00', shadow: '#993F00' },
  cyan: { accent: '#00D4FF', shadow: '#005566' },
  amber: { accent: '#FFCC00', shadow: '#665200' },
  teal: { accent: '#00FFD4', shadow: '#006655' },
};

function SectionHeading({ label, accent = 'cyan' }: { label: string; accent?: Accent }) {
  const colors = sectionStyles[accent];

  return (
    <div className="mb-12 inline-block relative">
      <h2
        className="font-['Press_Start_2P'] text-2xl md:text-4xl tracking-wider relative z-10"
        style={{ color: colors.accent, textShadow: `4px 4px 0 ${colors.shadow}` }}
      >
        // {label}
      </h2>
      <div
        className="absolute -bottom-2 left-0 h-[3px] w-full"
        style={{ background: `linear-gradient(to right, ${colors.accent}, ${colors.shadow}, transparent)` }}
      />
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [formNotice, setFormNotice] = useState('');

  function scrollToSection(sectionId: string) {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // DEMO CONTACT FORM — connect this to Formspree, Resend, or your own API when ready.
  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormNotice(`Demo mode: email ${portfolio.contact.email} directly until a form service is connected.`);
  }

  return (
    <div className="min-h-screen bg-[#050810] font-sans text-white">
      <MinecraftBackground />
      <div className="hidden md:block"><CursorGlow /></div>
      <Sidebar
        activeSection={activeSection}
        brand={portfolio.shortName}
        onNavigate={scrollToSection}
      />

      <main className="relative z-10 px-5 pb-8 pt-20 md:ml-64 md:px-8 md:pt-8">
        {/* HERO — update name, role, tagline, and image in portfolioData.ts */}
        <section id="home" className="scroll-mt-24 min-h-[78vh] flex items-center justify-center py-16 relative overflow-hidden">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              className="mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 180, damping: 18, delay: 0.1 }}
            >
              <div className="relative mx-auto h-36 w-36 md:h-44 md:w-44">
                <div className="absolute inset-0 animate-pulse blur-2xl opacity-40" style={{ background: 'radial-gradient(circle, #FF6B00, transparent 70%)' }} />
                <img
                  src={portfolio.heroImage}
                  alt={`${portfolio.name} profile placeholder`}
                  className="relative h-full w-full object-cover border-[4px] border-[#FF6B00]"
                  style={{ boxShadow: '6px 6px 0 #993F00' }}
                />
              </div>
            </motion.div>

            <motion.h1
              className="font-['Press_Start_2P'] text-4xl leading-tight md:text-6xl tracking-wide"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.65 }}
              style={{ color: '#FF6B00', textShadow: '6px 6px 0 #993F00' }}
            >
              {portfolio.name}
            </motion.h1>
            <p className="font-['Press_Start_2P'] mt-6 text-xs leading-relaxed text-[#00D4FF] md:text-base" style={{ textShadow: '3px 3px 0 #005566' }}>
              {portfolio.role}
            </p>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-[#FFB366]/70 md:text-base">
              {portfolio.tagline}
            </p>
            <p className="font-['Press_Start_2P'] mt-6 text-[9px] text-[#00FFD4]/70">
              ● {portfolio.status.toUpperCase()}
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <div className="w-full sm:w-48"><MinecraftButton onClick={() => scrollToSection('projects')}>View Projects</MinecraftButton></div>
              <div className="w-full sm:w-48"><MinecraftButton variant="secondary" onClick={() => scrollToSection('contact')}>Contact Me</MinecraftButton></div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-24 py-16 md:py-20">
          <ScrollReveal><SectionHeading label="ABOUT.ME" accent="cyan" /></ScrollReveal>
          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal delay={0.1} direction="left">
              <MinecraftCard title="MY.STORY" accent="cyan">
                {portfolio.about.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mb-4 text-sm leading-relaxed text-[#80E8FF]/70 last:mb-0">{paragraph}</p>
                ))}
              </MinecraftCard>
            </ScrollReveal>
            <ScrollReveal delay={0.2} direction="right">
              <MinecraftCard title="HIGHLIGHTS" accent="orange">
                <ul className="space-y-3">
                  {portfolio.about.achievements.map((achievement) => (
                    <li key={achievement.text} className="flex items-center gap-3 border-[2px] border-[#FF6B00]/25 bg-[#110700] px-3 py-3">
                      <span className="text-[#FF6B00]">{achievement.icon}</span>
                      <span className="font-['Press_Start_2P'] text-[9px] leading-relaxed text-[#FFB366]/75">{achievement.text}</span>
                    </li>
                  ))}
                </ul>
              </MinecraftCard>
            </ScrollReveal>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="scroll-mt-24 py-16 md:py-20">
          <ScrollReveal><SectionHeading label="SKILLS" accent="orange" /></ScrollReveal>
          <div className="grid gap-8 md:grid-cols-2">
            {portfolio.skillGroups.map((group, index) => {
              const colors = sectionStyles[group.accent as Accent];
              return (
                <ScrollReveal key={group.title} delay={index * 0.15} direction={index === 0 ? 'left' : 'right'}>
                  <MinecraftCard title={group.title} accent={group.accent as Accent}>
                    <div className="flex flex-wrap gap-3">
                      {group.items.map((skill) => (
                        <div key={skill.label} className="flex items-center gap-2 border-[2px] px-3 py-3" style={{ borderColor: `${colors.accent}55`, background: '#050810' }}>
                          <span style={{ color: colors.accent }}>{skill.icon}</span>
                          <span className="font-['Press_Start_2P'] text-[9px] text-white/75">{skill.label}</span>
                        </div>
                      ))}
                    </div>
                  </MinecraftCard>
                </ScrollReveal>
              );
            })}
          </div>
          <ScrollReveal delay={0.3}>
            <MinecraftCard title="TOOLKIT" accent="amber" className="mt-8">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {portfolio.tools.map((tool) => <div key={tool} className="border-[2px] border-[#FFCC00]/30 bg-[#100D00] px-3 py-3 text-center font-['Press_Start_2P'] text-[8px] text-[#FFCC00]/80">{tool}</div>)}
              </div>
            </MinecraftCard>
          </ScrollReveal>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-24 py-16 md:py-20">
          <ScrollReveal><SectionHeading label="PROJECTS" accent="cyan" /></ScrollReveal>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {portfolio.projects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.12}><ProjectCard {...project} /></ScrollReveal>
            ))}
          </div>
        </section>

        {/* CERTIFICATES */}
        <section id="certificates" className="scroll-mt-24 py-16 md:py-20">
          <ScrollReveal><SectionHeading label="CERTIFICATES" accent="amber" /></ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {portfolio.certificates.map((certificate, index) => (
              <ScrollReveal key={certificate.title} delay={index * 0.12}><CertificateCard {...certificate} /></ScrollReveal>
            ))}
          </div>
        </section>

        {/* WRITING / ACTIVITY */}
        <section id="writing" className="scroll-mt-24 py-16 md:py-20">
          <ScrollReveal><SectionHeading label="WRITING" accent="teal" /></ScrollReveal>
          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal delay={0.1}>
              <MinecraftCard title="LATEST.UPDATE" accent="teal">
                <h3 className="font-['Press_Start_2P'] text-[11px] leading-relaxed text-[#00FFD4]">{portfolio.latestPost.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#80FFE8]/70">{portfolio.latestPost.summary}</p>
                <p className="font-['Press_Start_2P'] mt-5 text-[8px] text-[#00FFD4]/70">{portfolio.latestPost.date} · {portfolio.latestPost.readingTime}</p>
                <a className="mt-6 block w-full" href={portfolio.latestPost.url} target="_blank" rel="noreferrer"><MinecraftButton variant="secondary">Read Update</MinecraftButton></a>
              </MinecraftCard>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <MinecraftCard title="NOW.LOG" accent="cyan">
                <div className="space-y-3">
                  {portfolio.activities.map((activity) => (
                    <div key={activity.text} className="flex gap-3 border-[2px] border-[#00D4FF]/25 bg-[#001520] px-3 py-3">
                      <span className="text-[#00D4FF]">{activity.icon}</span>
                      <div><p className="font-['Press_Start_2P'] text-[8px] leading-relaxed text-[#80E8FF]">{activity.text}</p><p className="font-['Press_Start_2P'] mt-2 text-[7px] text-[#00D4FF]/65">{activity.time}</p></div>
                    </div>
                  ))}
                </div>
              </MinecraftCard>
            </ScrollReveal>
          </div>
        </section>

        {/* CONTACT — mailto link works immediately; the form intentionally stays in demo mode. */}
        <section id="contact" className="scroll-mt-24 py-16 md:py-20">
          <ScrollReveal><SectionHeading label="CONTACT" accent="orange" /></ScrollReveal>
          <div className="mx-auto max-w-2xl">
            <ScrollReveal delay={0.15}>
              <MinecraftCard title="GET.IN.TOUCH" accent="orange">
                <p className="text-sm leading-relaxed text-[#FFB366]/75">{portfolio.contact.availability}</p>
                <p className="font-['Press_Start_2P'] mt-3 text-[9px] text-[#FFB366]/60">{portfolio.contact.location}</p>
                <form className="mt-7 space-y-5" onSubmit={handleContactSubmit}>
                  <label className="block font-['Press_Start_2P'] text-[9px] text-[#FFB366]/80">&gt; YOUR.NAME<input required name="name" className="mt-2 block w-full border-[2px] border-[#FF6B00]/45 bg-[#110700] px-4 py-3 text-sm text-white outline-none focus:border-[#FF6B00]" placeholder="Your name" /></label>
                  <label className="block font-['Press_Start_2P'] text-[9px] text-[#FFB366]/80">&gt; EMAIL.ADDRESS<input required name="email" type="email" className="mt-2 block w-full border-[2px] border-[#FF6B00]/45 bg-[#110700] px-4 py-3 text-sm text-white outline-none focus:border-[#FF6B00]" placeholder="you@example.com" /></label>
                  <label className="block font-['Press_Start_2P'] text-[9px] text-[#FFB366]/80">&gt; MESSAGE<textarea required name="message" rows={5} className="mt-2 block w-full resize-none border-[2px] border-[#FF6B00]/45 bg-[#110700] px-4 py-3 text-sm text-white outline-none focus:border-[#FF6B00]" placeholder="Tell me about your project..." /></label>
                  <MinecraftButton>Send Message</MinecraftButton>
                </form>
                {formNotice && <p role="status" className="mt-4 text-sm leading-relaxed text-[#FFCC00]">{formNotice}</p>}
                <div className="mt-8 flex flex-wrap gap-3 border-t-[2px] border-[#FF6B00]/25 pt-6">
                  {portfolio.contact.socials.map((social) => (
                    <a key={social.label} href={social.url} target={social.url.startsWith('mailto:') ? undefined : '_blank'} rel={social.url.startsWith('mailto:') ? undefined : 'noreferrer'} className="border-[2px] border-[#00D4FF]/50 bg-[#001520] px-3 py-3 font-['Press_Start_2P'] text-[9px] text-[#80E8FF] transition hover:border-[#00D4FF] hover:text-[#00D4FF]" aria-label={social.label}>{social.shortLabel}</a>
                  ))}
                  <a href={`mailto:${portfolio.contact.email}`} className="border-[2px] border-[#FF6B00]/50 bg-[#110700] px-3 py-3 font-['Press_Start_2P'] text-[9px] text-[#FFB366] transition hover:border-[#FF6B00]">EMAIL ME</a>
                </div>
              </MinecraftCard>
            </ScrollReveal>
          </div>
        </section>

        <footer className="mt-8 border-t-[2px] border-[#FF6B00]/25 py-8 text-center">
          <p className="font-['Press_Start_2P'] text-[8px] text-[#00D4FF]/70">{portfolio.shortName} · BUILT WITH REACT + VITE</p>
          <p className="font-['Press_Start_2P'] mt-3 text-[7px] text-white/40">© {new Date().getFullYear()} {portfolio.name}. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
