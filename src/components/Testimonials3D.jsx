import { Quote, Star, Sparkles } from 'lucide-react';
import { TESTIMONIALS_3D } from '../data/portfolioData';

export default function Testimonials3D() {
  return (
    <section
      id="testimonials"
      aria-label="Testimonials Section"
      className="relative w-full py-32 bg-[#FAFAFA] overflow-hidden flex flex-col justify-center perspective-2000"
    >
      {/* Background Soft Purple Glow */}
      <div className="absolute top-1/2 right-10 w-[700px] h-[700px] rounded-full bg-purple-500/[0.06] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-purple-200/80 text-xs font-mono font-bold text-purple-700 shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENDORSEMENTS</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
            KIND WORDS FROM <span className="text-purple-gradient">COLLABORATORS</span>
          </h2>
        </div>

        {/* 3D Floating Asymmetrical Glass Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start preserve-3d">
          {TESTIMONIALS_3D.map((item, idx) => {
            const delays = ['0s', '1.2s', '2.4s'];
            const translateY = idx === 1 ? 'md:-translate-y-6' : idx === 2 ? 'md:translate-y-8' : '';

            return (
              <div
                key={item.author}
                className={`group p-8 sm:p-10 rounded-[2.5rem] bg-white/85 border border-purple-200/80 shadow-[0_30px_70px_-15px_rgba(109,40,217,0.15)] backdrop-blur-2xl hover:shadow-[0_35px_80px_-10px_rgba(109,40,217,0.22)] transition-all duration-500 hover:-translate-y-2 animate-float-slow ${translateY}`}
                style={{ animationDelay: delays[idx] }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center">
                    <Quote className="w-5 h-5" />
                  </div>

                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-purple-600 text-purple-600" />
                    ))}
                  </div>
                </div>

                <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium italic mb-8">
                  "{item.quote}"
                </p>

                <div className="pt-6 border-t border-purple-100 flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-purple-200"
                  />
                  <div>
                    <div className="font-editorial font-bold text-slate-900 text-base">
                      {item.author}
                    </div>
                    <div className="text-xs font-mono text-purple-700 font-semibold">
                      {item.role} • {item.company}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
