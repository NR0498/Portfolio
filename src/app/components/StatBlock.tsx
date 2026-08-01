interface StatBlockProps {
  icon: string;
  label: string;
  value: string | number;
  color?: string;
}

export function StatBlock({ icon, label, value, color = '#FFD700' }: StatBlockProps) {
  return (
    <div className="bg-[#2A2A2A] border-[3px] border-t-[#4A4A4A] border-l-[#4A4A4A] border-r-[#0A0A0A] border-b-[#0A0A0A] p-4 text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="font-['Press_Start_2P'] text-xs mb-2" style={{ color }}>
        {value}
      </div>
      <div className="font-['Press_Start_2P'] text-white text-[0.6rem] opacity-80">
        {label}
      </div>
    </div>
  );
}
