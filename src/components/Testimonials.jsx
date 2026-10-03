import { Star, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/portfolioData';

export default function Testimonials() {
  return (
    <section id="testimonials" aria-label="Testimonials Section" className="relative py-24 sm:py-32 bg-[#090A0F] text-slate-100 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-indigo-300 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Endorsements</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 text-balance">
            Kind words from people I've worked with.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Feedback from engineering leaders, product managers, and founders on collaboration, speed, and execution quality.
          </p>
        </div>

        {/* 3 Glassmorphic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <div
              key={item.author}
              className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-indigo-500/40 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8),0_0_20px_0_rgba(99,102,241,0.1)] flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon & Star Rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                    <Quote className="w-4 h-4" />
                  </div>

                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote text */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Details with Avatar */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-11 h-11 rounded-full object-cover border border-white/10 group-hover:border-indigo-500/40 transition-colors"
                  loading="lazy"
                />
                <div>
                  <div className="font-heading font-bold text-sm text-white group-hover:text-indigo-200 transition-colors">
                    {item.author}
                  </div>
                  <div className="text-xs text-slate-400">
                    {item.role} • <span className="text-indigo-400">{item.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
