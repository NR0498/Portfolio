import { navigationItems } from '../portfolioData';

interface SidebarProps {
  activeSection: string;
  brand: string;
  onNavigate: (section: string) => void;
}

export function Sidebar({ activeSection, brand, onNavigate }: SidebarProps) {
  const navigation = (
    <nav aria-label="Primary navigation" className="flex gap-2 md:block md:space-y-3">
      {navigationItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onNavigate(item.id)}
            aria-current={isActive ? 'page' : undefined}
            className={`shrink-0 border-[2px] px-3 py-2 text-left transition md:w-full md:px-4 md:py-3 ${
              isActive
                ? 'border-[#FF6B00] bg-[#1A0A00] text-[#FF6B00]'
                : 'border-[#FF6B00]/25 text-[#FFB366]/70 hover:border-[#FF6B00]/65 hover:bg-[#0F0600]'
            }`}
            style={{ boxShadow: isActive ? '3px 3px 0 #993F00' : undefined }}
          >
            <span className="font-['Press_Start_2P'] text-[8px] tracking-wide">&gt; {item.label}</span>
          </button>
        );
      })}
    </nav>
  );

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b-[3px] border-[#FF6B00]/35 bg-[#050810]/95 px-4 py-3 backdrop-blur md:hidden">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-['Press_Start_2P'] text-xs text-[#FF6B00]" style={{ textShadow: '2px 2px 0 #993F00' }}>{brand}</span>
          <span className="font-['Press_Start_2P'] text-[7px] text-[#00FFD4]">● ONLINE</span>
        </div>
        <div className="overflow-x-auto pb-1">{navigation}</div>
      </header>

      <aside className="fixed left-0 top-0 z-50 hidden h-screen w-64 overflow-y-auto border-r-[3px] border-[#FF6B00]/30 bg-[#050810] md:block" style={{ boxShadow: '4px 0 24px rgba(255,107,0,0.07)' }}>
        <div className="p-6">
          <div className="mb-8 border-b-[2px] border-[#FF6B00]/20 pb-6">
            <p className="font-['Press_Start_2P'] text-[8px] text-[#FF6B00]/60">// PORTFOLIO.EXE</p>
            <h1 className="font-['Press_Start_2P'] mt-3 text-xl text-[#FF6B00]" style={{ textShadow: '3px 3px 0 #993F00' }}>{brand}</h1>
            <div className="mt-3 h-[2px]" style={{ background: 'linear-gradient(to right, #FF6B00, #00D4FF, transparent)' }} />
          </div>
          {navigation}
          <div className="mt-8 border-t-[2px] border-[#00D4FF]/20 pt-5"><p className="font-['Press_Start_2P'] text-[8px] text-[#00FFD4]"><span className="animate-pulse">●</span> ONLINE</p></div>
        </div>
      </aside>
    </>
  );
}
