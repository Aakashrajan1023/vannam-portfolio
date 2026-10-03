import { useState } from 'react';
import { Sparkles, Palette, Code2, ArrowLeftRight } from 'lucide-react';
import { DESIGN_SKILLS, DEV_SKILLS } from '../data/portfolioData';

export default function Skills3D() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section
      id="skills"
      aria-label="Skills Section"
      className="relative w-full min-h-screen py-24 sm:py-32 bg-[#FAFAFA] overflow-hidden flex flex-col justify-center perspective-1500"
    >
      {/* Background Center Radiant Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] rounded-full bg-purple-500/[0.07] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-purple-200/80 text-xs font-mono font-bold text-purple-700 shadow-sm mb-4">
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>3D SPLIT-WORLD MATRIX</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
            WHERE DESIGN <span className="text-purple-gradient">MEETS CODE</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm lg:text-base font-medium mt-3">
            Two disciplines converging into a singular, high-precision digital craft.
          </p>
        </div>

        {/* 3D Split World Container (Responsive Grid) */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* LEFT SIDE: DESIGN WORLD */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center shadow-sm">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-editorial font-extrabold text-xl sm:text-2xl text-slate-900">
                  DESIGN
                </h3>
                <span className="text-xs font-mono text-purple-600 font-bold uppercase">
                  Aesthetic & Spatial Vision
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DESIGN_SKILLS.map((skill) => (
                <div
                  key={skill.name}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className={`p-4 rounded-2xl transition-all duration-300 backdrop-blur-xl border ${
                    hoveredSkill === skill.name
                      ? 'bg-purple-600 text-white border-purple-600 shadow-xl shadow-purple-600/30 -translate-y-1 sm:scale-105'
                      : 'bg-white/85 text-slate-900 border-purple-100/80 hover:border-purple-300 shadow-sm'
                  }`}
                >
                  <div className="font-editorial font-bold text-sm mb-1 tracking-tight">
                    {skill.name}
                  </div>
                  <p className={`text-[11px] leading-snug ${hoveredSkill === skill.name ? 'text-purple-100' : 'text-slate-500'}`}>
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CENTER: 3D Converging Hub */}
          <div className="lg:col-span-2 hidden lg:flex flex-col items-center justify-center relative py-6">
            <div className="absolute inset-y-0 w-[2px] bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
            
            <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-purple-500 shadow-2xl shadow-purple-600/40 flex flex-col items-center justify-center p-2 text-center animate-spin-slow">
              <Sparkles className="w-5 h-5 text-purple-600 animate-pulse" />
            </div>

            <div className="mt-3 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-[10px] font-mono font-bold text-purple-700 tracking-wider">
              SYNTHESIS
            </div>
          </div>

          {/* RIGHT SIDE: DEVELOPMENT WORLD */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center shadow-sm">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-editorial font-extrabold text-xl sm:text-2xl text-slate-900">
                  DEVELOPMENT
                </h3>
                <span className="text-xs font-mono text-purple-600 font-bold uppercase">
                  Engineering & Performance
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DEV_SKILLS.map((skill) => (
                <div
                  key={skill.name}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className={`p-4 rounded-2xl transition-all duration-300 backdrop-blur-xl border ${
                    hoveredSkill === skill.name
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-900/30 -translate-y-1 sm:scale-105'
                      : 'bg-white/85 text-slate-900 border-purple-100/80 hover:border-purple-300 shadow-sm'
                  }`}
                >
                  <div className="font-editorial font-bold text-sm mb-1 tracking-tight">
                    {skill.name}
                  </div>
                  <p className={`text-[11px] leading-snug ${hoveredSkill === skill.name ? 'text-slate-300' : 'text-slate-500'}`}>
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
