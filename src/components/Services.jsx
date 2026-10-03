import { CheckCircle2, Sparkles, ArrowRight, Code2, Atom, Layout, Zap } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';

const SERVICE_ICONS = {
  '01': Code2,
  '02': Atom,
  '03': Layout,
  '04': Zap,
};

export default function Services() {
  return (
    <section id="services" aria-label="Services Section" className="relative py-24 sm:py-32 bg-[#090A0F] text-slate-100 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-indigo-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-indigo-500" />
              <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase font-semibold">
                Core Offerings
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white text-balance">
              What I can build.
            </h2>
          </div>

          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            Specialized engineering and design capabilities delivering tailor-made digital solutions from concept to production.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => {
            const Icon = SERVICE_ICONS[service.id] || Sparkles;

            return (
              <div
                key={service.id}
                className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-indigo-500/40 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8),0_0_25px_0_rgba(99,102,241,0.1)] flex flex-col justify-between"
              >
                {/* Top Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs tracking-widest px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-indigo-400 font-semibold">
                      {service.id}
                    </span>

                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 text-indigo-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-heading text-2xl font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                    {service.title}
                  </h3>

                  <div className="text-xs font-mono text-indigo-400 mb-4">
                    {service.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-white/[0.06]">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA trigger */}
                <div className="pt-8">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 group-hover:text-indigo-300 transition-colors"
                  >
                    <span>Discuss a project</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
