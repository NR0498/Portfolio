interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  icon: string;
}

export function CertificateCard({ title, issuer, date, icon }: CertificateCardProps) {
  return (
    <div
      className="bg-[#07080F] border-[3px] border-[#FFCC00]/40 p-5 relative hover:border-[#FFCC00] hover:-translate-y-1 transition-all duration-200 group overflow-hidden"
      style={{ boxShadow: '4px 4px 0px #665200, inset 0 0 40px rgba(255,204,0,0.025)' }}
    >
      <div className="absolute top-0 right-0 w-8 h-8 bg-[#FFCC00]/15 border-l-[2px] border-b-[2px] border-[#FFCC00]/40" />
      <div className="absolute bottom-0 left-0 w-8 h-8 bg-[#FFCC00]/08 border-r-[2px] border-t-[2px] border-[#FFCC00]/25" />
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,204,0,0.015) 3px, rgba(255,204,0,0.015) 4px)' }} />

      <div className="flex items-start gap-4 relative z-10">
        <div className="text-3xl opacity-60 group-hover:opacity-90 transition-opacity">{icon}</div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 bg-[#FFCC00] animate-pulse" />
            <h4 className="font-['Press_Start_2P'] text-[#FFCC00]/70 group-hover:text-[#FFCC00] text-[10px] transition-colors">{title}</h4>
          </div>
          <p className="font-['Press_Start_2P'] text-[#FFCC00]/40 text-[9px] mb-1">{issuer}</p>
          <p className="font-['Press_Start_2P'] text-[#555] text-[8px]">{date}</p>
        </div>
      </div>
    </div>
  );
}
