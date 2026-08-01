interface MinecraftCardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  accent?: 'orange' | 'cyan' | 'amber' | 'teal';
}

const accentMap = {
  orange: {
    border: 'border-[#FF6B00]',
    shadow: '4px 4px 0px #993F00, inset 0 0 30px rgba(255,107,0,0.04)',
    label: 'bg-[#FF6B00]',
    titleColor: 'text-[#FF6B00]',
  },
  cyan: {
    border: 'border-[#00D4FF]',
    shadow: '4px 4px 0px #005566, inset 0 0 30px rgba(0,212,255,0.04)',
    label: 'bg-[#00D4FF]',
    titleColor: 'text-[#00D4FF]',
  },
  amber: {
    border: 'border-[#FFCC00]',
    shadow: '4px 4px 0px #665200, inset 0 0 30px rgba(255,204,0,0.04)',
    label: 'bg-[#FFCC00]',
    titleColor: 'text-[#FFCC00]',
  },
  teal: {
    border: 'border-[#00FFD4]',
    shadow: '4px 4px 0px #006655, inset 0 0 30px rgba(0,255,212,0.04)',
    label: 'bg-[#00FFD4]',
    titleColor: 'text-[#00FFD4]',
  },
};

export function MinecraftCard({ children, title, className = '', accent = 'amber' }: MinecraftCardProps) {
  const a = accentMap[accent];
  return (
    <div
      className={`bg-[#07080F] border-[3px] ${a.border} p-6 relative ${className}`}
      style={{ boxShadow: a.shadow }}
    >
      {title && (
        <>
          <div className={`absolute top-0 left-0 ${a.label} px-3 py-1 -translate-y-1/2`}>
            <span className="font-['Press_Start_2P'] text-[10px] text-black tracking-wider">{title}</span>
          </div>
          <div className="mt-3" />
        </>
      )}
      <div className="text-white">
        {children}
      </div>
    </div>
  );
}
