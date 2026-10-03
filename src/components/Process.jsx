import { useState } from 'react';
import { Sparkles, Compass, Palette, Code, CheckCircle, Rocket, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

const STEP_ICONS = {
  '01': Compass,
  '02': Palette,
  '03': Code,
  '04': CheckCircle,
  '05': Rocket,
};

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" aria-label="Process Section" className="relative py-24 sm:py-32 bg-[#090A0F] text-slate-100 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-indigo-300 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Workflow & Methodology</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 text-balance">
            From idea to experience.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            A structured, transparent engineering process designed to eliminate friction and deliver exceptional digital outcomes on time.
          </p>
        </div>

        {/* Timeline / Step Cards */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500/20 via-indigo-500/40 to-violet-500/20 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = STEP_ICONS[step.step] || Sparkles;
              const isSelected = activeStep === idx;

              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`group relative p-6 rounded-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gradient-to-b from-indigo-950/40 to-[#0e1122]/90 border border-indigo-500/50 shadow-[0_15px_35px_-10px_rgba(99,102,241,0.2)] -translate-y-2'
                      : 'bg-white/[0.02] border border-white/[0.06] hover:border-white/20 hover:bg-white/[0.04]'
                  } backdrop-blur-xl`}
                >
                  <div>
                    {/* Step badge & icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className={`font-mono text-xs font-bold px-2.5 py-1 rounded-lg ${
                          isSelected
                            ? 'bg-indigo-500 text-white shadow-sm'
                            : 'bg-white/[0.04] text-slate-400 border border-white/5'
                        }`}
                      >
                        {step.step}
                      </span>

                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-indigo-500/20 text-indigo-300'
                            : 'bg-white/[0.03] text-slate-400 group-hover:text-white'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                      {step.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs font-medium text-slate-300 mb-3">
                      {step.summary}
                    </p>

                    {/* Detail Description */}
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>

                  {/* Indicator Dot */}
                  <div className="pt-6 flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full transition-all ${
                        isSelected ? 'bg-indigo-400 scale-125' : 'bg-slate-700'
                      }`}
                    />
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      Stage {step.step}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
