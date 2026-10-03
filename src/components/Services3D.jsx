import { useEffect, useRef, useState } from 'react';
import { Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import { SERVICES_3D } from '../data/portfolioData';

export default function Services3D() {
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
      id="services"
      aria-label="Services Section"
      className="relative w-full py-32 bg-[#FAFAFA] overflow-hidden flex flex-col justify-center perspective-1500"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-500/[0.06] blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-purple-200/80 text-xs font-mono font-bold text-purple-700 shadow-sm mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>DISCIPLINES & CAPABILITIES</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
            WHAT I <span className="text-purple-gradient">DO</span>
          </h2>
        </div>

        {/* Floating 3D Typography Stream */}
        <div className="space-y-4 sm:space-y-6">
          {SERVICES_3D.map((service, idx) => {
            const isEven = idx % 2 === 0;
            const xMovement = isEven ? (scrollY * 0.05) % 40 : -(scrollY * 0.05) % 40;
            const zDepth = (idx * 15) % 50;

            return (
              <div
                key={service.id}
                className="group relative p-6 sm:p-8 rounded-3xl bg-white/70 hover:bg-white border border-purple-100/80 hover:border-purple-300 shadow-sm hover:shadow-[0_20px_50px_-10px_rgba(109,40,217,0.15)] transition-all duration-500 backdrop-blur-xl flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-default"
                style={{
                  transform: `translate3d(${xMovement}px, 0, ${zDepth}px)`,
                }}
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-xs font-bold px-3 py-1.5 rounded-xl bg-purple-100 text-purple-700">
                    {service.id}
                  </span>

                  <div>
                    <h3 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 group-hover:text-purple-700 transition-colors tracking-tight">
                      {service.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-slate-500 font-medium mt-1">
                      {service.tag}
                    </p>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full bg-purple-50 group-hover:bg-purple-600 text-purple-700 group-hover:text-white flex items-center justify-center transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
