import { useEffect, useRef, useState } from 'react';
import { Palette, Code2, Sparkles, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO, FLOATING_KEYWORDS } from '../data/portfolioData';

export default function About() {
  const sectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-label="About Section"
      className="relative w-full min-h-screen py-32 bg-[#F7F5FC] overflow-hidden flex items-center justify-center perspective-1500"
    >
      {/* Floating Keywords Moving at Different Speeds */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        {FLOATING_KEYWORDS.map((kw, i) => {
          const yOffset = (scrollY * kw.speed) % 400 - 150;
          const xPositions = ['left-8 top-16', 'right-12 top-28', 'left-1/4 top-1/2', 'right-1/4 top-2/3', 'left-16 bottom-20', 'right-20 bottom-32', 'left-1/2 top-24'];
          
          return (
            <div
              key={kw.text}
              className={`absolute font-editorial font-extrabold uppercase tracking-tight ${kw.size} ${kw.color} ${xPositions[i % xPositions.length]} transition-transform duration-100 ease-out`}
              style={{
                transform: `translate3d(0, ${yOffset}px, 0)`,
              }}
            >
              {kw.text}
            </div>
          );
        })}
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-purple-200/80 text-xs font-mono font-bold text-purple-700 shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DUAL IDENTITY</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.02] text-balance">
            DESIGNER'S EYE.<br />
            <span className="text-purple-gradient">DEVELOPER'S MIND.</span>
          </h2>
        </div>

        {/* 3D Editorial Grid & Floating Glass Info Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Narrative Bio */}
          <div className="lg:col-span-6 space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
            <p className="font-medium text-slate-900 text-lg sm:text-xl leading-normal">
              {PERSONAL_INFO.bio}
            </p>
            <p className="text-slate-600">
              Most digital products suffer from a disconnect: designers create visions engineers struggle to implement, or engineers build rigid architectures that lack soul. I operate seamlessly across both worlds.
            </p>
            <p className="text-slate-600">
              From crafting fluid typography scales and spatial UI palettes in Figma to engineering modular, reusable React component systems with high-speed rendering pipelines—every dimension is considered.
            </p>

            {/* Core Pillars */}
            <div className="pt-4 grid grid-cols-2 gap-3 font-mono text-xs font-bold text-slate-800">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-white border border-purple-100 shadow-sm">
                <Palette className="w-4 h-4 text-purple-600" />
                <span>Pixel Perfection</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-white border border-purple-100 shadow-sm">
                <Code2 className="w-4 h-4 text-purple-600" />
                <span>Modern React</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-white border border-purple-100 shadow-sm">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>Spatial Motion</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-white border border-purple-100 shadow-sm">
                <Layers className="w-4 h-4 text-purple-600" />
                <span>Scalable Systems</span>
              </div>
            </div>
          </div>

          {/* Right: Floating Glass Information Panel */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md p-8 sm:p-10 rounded-[2.5rem] bg-white/85 backdrop-blur-2xl border border-white shadow-[0_30px_70px_-15px_rgba(109,40,217,0.14)] space-y-6 hover:shadow-[0_35px_80px_-12px_rgba(109,40,217,0.2)] transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-center justify-between pb-6 border-b border-purple-100">
                <div>
                  <div className="font-editorial font-extrabold text-2xl text-slate-900">
                    VIMAL VAIBHAV
                  </div>
                  <div className="text-xs font-mono text-purple-600 font-bold uppercase">
                    Web Developer + Digital Designer
                  </div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-purple-100 border border-purple-200 text-purple-700 flex items-center justify-center font-editorial font-bold text-lg">
                  VV
                </div>
              </div>

              <div className="space-y-4 text-sm font-medium text-slate-700">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-400 uppercase">Focus</span>
                  <span className="text-slate-900 font-bold">Creative Development</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-400 uppercase">Aesthetics</span>
                  <span className="text-purple-700 font-bold">Light Luxury & Minimal 3D</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-400 uppercase">Core Stack</span>
                  <span className="text-slate-900 font-bold">React • Tailwind • 3D Web</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-400 uppercase">Availability</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Open for Commissions
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-purple-100">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-purple-700 hover:bg-purple-800 text-white font-mono text-xs font-bold shadow-lg shadow-purple-600/25 transition-all"
                >
                  <span>REQUEST COLLABORATION</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
