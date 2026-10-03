import { useState } from 'react';
import { 
  Atom, 
  FileCode2, 
  Globe, 
  Palette, 
  Wind, 
  GitBranch, 
  Laptop, 
  Layers, 
  Check,
  Sparkles 
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

const SKILL_ICONS = {
  Atom: Atom,
  FileCode2: FileCode2,
  Globe: Globe,
  Palette: Palette,
  Wind: Wind,
  GitBranch: GitBranch,
  Laptop: Laptop,
  Layers: Layers,
};

const CATEGORIES = ['All', 'Frontend', 'Styling', 'Languages', 'Core', 'Design', 'Tools'];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredSkills = activeCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((skill) => skill.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="skills" aria-label="Skills Section" className="relative py-24 sm:py-32 bg-[#090A0F] text-slate-100 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-indigo-300 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 text-balance">
            Tools I use to bring ideas to life.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            A battle-tested frontend toolkit focused on component modularity, fluid responsiveness, and high-performance render pipelines.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 rounded-full bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-indigo-500 text-white shadow-sm shadow-indigo-500/25'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Glassmorphic Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredSkills.map((skill) => {
            const Icon = SKILL_ICONS[skill.icon] || Atom;
            const isHovered = hoveredSkill === skill.name;

            return (
              <div
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="group relative p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-indigo-500/40 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.7),0_0_20px_0_rgba(99,102,241,0.12)] cursor-default overflow-hidden flex flex-col justify-between"
              >
                {/* Ambient hover gradient top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500/0 to-transparent group-hover:via-indigo-500/50 transition-all duration-500" />

                <div>
                  {/* Top Bar: Icon + Highlight Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 text-indigo-400 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-6 h-6 group-hover:rotate-6 transition-transform duration-300" />
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-slate-300 group-hover:text-indigo-200 group-hover:border-indigo-500/20 transition-colors">
                      {skill.highlight}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                {/* Bottom Proficiency Indicator */}
                <div className="pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="text-slate-400">Category: {skill.category}</span>
                  <span className="text-emerald-400 flex items-center gap-1 font-sans font-medium">
                    <Check className="w-3 h-3" />
                    {skill.level}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
