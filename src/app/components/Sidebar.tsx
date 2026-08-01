interface SidebarProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

const sections = [
  { id: 'home',         label: 'HOME'     },
  { id: 'about',        label: 'ABOUT.ME' },
  { id: 'skills',       label: 'SKILLS'   },
  { id: 'projects',     label: 'PROJECTS' },
  { id: 'certificates', label: 'CERTS'    },
  { id: 'stats',        label: 'BLOG'     },
  { id: 'contact',      label: 'CONTACT'  },
];

export function Sidebar({ onNavigate, activeSection }: SidebarProps) {
  return (
    <aside
      className="fixed left-0 top-0 h-screen w-64 bg-[#050810] border-r-[3px] border-[#FF6B00]/30 z-50 overflow-y-auto"
      style={{ boxShadow: '4px 0 24px rgba(255,107,0,0.07)' }}
    >
      {/* Scanline */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.008) 3px, rgba(255,255,255,0.008) 4px)' }} />

      <div className="p-6 relative z-10">
        {/* Logo */}
        <div className="mb-8 pb-6 border-b-[2px] border-[#FF6B00]/20">
          <span className="font-['Press_Start_2P'] text-[8px] text-[#FF6B00]/40 tracking-widest">// INIT_PORT</span>
          <h1
            className="font-['Press_Start_2P'] text-xl mt-2"
            style={{ color: '#FF6B00', textShadow: '0 0 14px rgba(255,107,0,0.7), 3px 3px 0px #993F00' }}
          >
            NAYAN
          </h1>
          <div className="mt-2 h-[2px] w-full" style={{ background: 'linear-gradient(to right, #FF6B00, #00D4FF, transparent)' }} />
          <p className="font-['Press_Start_2P'] text-[#00D4FF]/50 text-[8px] mt-2 tracking-wider">PORTFOLIO.EXE</p>
        </div>

        {/* Nav */}
        <nav className="space-y-3">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => onNavigate(s.id)}
              className={`w-full text-left px-4 py-3 border-[2px] transition-all duration-150 group relative overflow-hidden
                ${activeSection === s.id
                  ? 'border-[#FF6B00] bg-[#1A0A00] text-[#FF6B00]'
                  : 'border-[#FF6B00]/18 bg-transparent text-[#FFB366]/35 hover:border-[#FF6B00]/55 hover:text-[#FFB366]/70 hover:bg-[#0F0600]'
                }`}
              style={{ boxShadow: activeSection === s.id ? '3px 3px 0px #993F00' : 'none' }}
            >
              {activeSection === s.id && (
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,107,0,0.025) 3px, rgba(255,107,0,0.025) 4px)' }} />
              )}
              <span className="font-['Press_Start_2P'] text-[9px] tracking-wider relative z-10 flex items-center gap-2">
                <span className={activeSection === s.id ? 'text-[#FF6B00]' : 'text-[#FF6B00]/25 group-hover:text-[#FF6B00]/50'}>
                  &gt;
                </span>
                {s.label}
              </span>
            </button>
          ))}
        </nav>

        {/* Status */}
        <div className="mt-8 pt-6 border-t-[2px] border-[#00D4FF]/15">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 bg-[#00FFD4] animate-pulse" />
            <span className="font-['Press_Start_2P'] text-[8px] text-[#00FFD4]/60">ONLINE</span>
          </div>
          <div className="flex gap-3">
            {['#FF6B00','#00D4FF','#FFCC00'].map((c) => (
              <div key={c} className="w-4 h-4 border-2 border-black/50" style={{ backgroundColor: c }} />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
