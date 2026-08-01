import { MinecraftButton } from './MinecraftButton';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

export function ProjectCard({ title, description, image, technologies }: ProjectCardProps) {
  return (
    <div
      className="bg-[#07080F] border-[3px] border-[#00D4FF]/40 overflow-hidden hover:border-[#00D4FF] hover:-translate-y-1 transition-all duration-200 relative group"
      style={{ boxShadow: '4px 4px 0px #005566' }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-10"
        style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,212,255,0.015) 3px, rgba(0,212,255,0.015) 4px)' }} />

      <div className="h-44 overflow-hidden border-b-[3px] border-[#00D4FF]/20 relative">
        <img src={image} alt={title} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080F] to-transparent" />
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-[#00D4FF] animate-pulse" />
          <h3 className="font-['Press_Start_2P'] text-[#00D4FF] text-[10px] tracking-wider">{title}</h3>
        </div>
        <p className="text-[#80E8FF]/50 text-sm mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => (
            <span key={i}
              className="px-2 py-1 bg-[#001A22] border-[2px] border-[#00D4FF]/25 font-['Press_Start_2P'] text-[8px] text-[#00D4FF]/55">
              {tech}
            </span>
          ))}
        </div>
        <MinecraftButton variant="secondary">View Project</MinecraftButton>
      </div>
    </div>
  );
}
