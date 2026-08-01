interface MinecraftButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
}

export function MinecraftButton({ children, onClick, active, variant = 'primary' }: MinecraftButtonProps) {
  const base = "relative px-6 py-3 transition-all duration-100 cursor-pointer select-none active:translate-x-[2px] active:translate-y-[2px] w-full";

  const styles = {
    primary: active
      ? "bg-[#1A0A00] border-[3px] border-[#FF6B00] text-[#FF6B00]"
      : "bg-[#0D0D0D] border-[3px] border-[#FF6B00]/50 text-[#FFB366]/70 hover:border-[#FF6B00] hover:text-[#FF6B00] hover:bg-[#1A0A00]",
    secondary:
      "bg-[#0D0D0D] border-[3px] border-[#00D4FF]/50 text-[#80E8FF]/70 hover:border-[#00D4FF] hover:text-[#00D4FF] hover:bg-[#001A22]",
    danger:
      "bg-[#0D0D0D] border-[3px] border-[#FF3300]/50 text-[#FF8866]/70 hover:border-[#FF3300] hover:text-[#FF3300] hover:bg-[#1A0500]",
  };

  const shadows = {
    primary: active ? '2px 2px 0px #993F00' : '4px 4px 0px #993F00',
    secondary: '4px 4px 0px #005566',
    danger: '4px 4px 0px #660000',
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]}`}
      style={{ boxShadow: shadows[variant] }}
    >
      <span className="font-['Press_Start_2P'] text-[10px] tracking-wider">
        {children}
      </span>
    </button>
  );
}
