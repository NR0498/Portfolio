interface SkillBarProps {
  skill: string;
  level: number;
  icon?: string;
}

export function SkillBar({ skill, level, icon }: SkillBarProps) {
  const hearts = Math.floor(level / 10);
  const halfHeart = level % 10 >= 5;
  
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="font-['Press_Start_2P'] text-white text-xs">{icon} {skill}</span>
        <span className="font-['Press_Start_2P'] text-[#FFD700] text-xs">{level}%</span>
      </div>
      <div className="h-8 bg-[#1A1A1A] border-[3px] border-[#000000] relative overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#4A9D4A] to-[#3A7D3A] border-r-[3px] border-[#2A5D2A] transition-all duration-500"
          style={{ width: `${level}%` }}
        >
          <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_8px,rgba(255,255,255,0.1)_8px,rgba(255,255,255,0.1)_16px)]"></div>
        </div>
      </div>
    </div>
  );
}
