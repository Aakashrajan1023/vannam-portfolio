import { useEffect, useRef, useState } from 'react';
import { Sparkles, Compass, CheckCircle } from 'lucide-react';
import { PROCESS_STAGES } from '../data/portfolioData';

export default function Process3D() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section
      id="process"
      aria-label="Process Section"
      className="relative w-full py-32 bg-[#F7F5FC] overflow-hidden flex flex-col justify-center perspective-1500"
    >
      {/* Background Soft Purple Glow */}
      <div className="absolute top-1/2 left-1/4 w-[700px] h-[700px] rounded-full bg-purple-500/[0.07] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-purple-200/80 text-xs font-mono font-bold text-purple-700 shadow-sm mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>DESIGN TO CODE JOURNEY</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
            FROM IDEA <span className="text-purple-gradient">TO LAUNCH</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium mt-3">
            A continuous 6-stage engineering and design continuum.
          </p>
        </div>

        {/* 3D Process Stages Grid with Glowing Connection */}
        <div className="relative">
          {/* Glowing Purple Process Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-300 via-purple-600 to-purple-400 -translate-y-1/2 shadow-lg shadow-purple-500/30 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 relative z-10">
            {PROCESS_STAGES.map((stage, idx) => {
              const isSelected = activeStage === idx;

              return (
                <div
                  key={stage.step}
                  onClick={() => setActiveStage(idx)}
                  className={`p-6 rounded-[2rem] transition-all duration-500 cursor-pointer backdrop-blur-2xl flex flex-col justify-between border ${
                    isSelected
                      ? 'bg-white border-purple-400 shadow-[0_25px_60px_-12px_rgba(109,40,217,0.25)] -translate-y-3 scale-105'
                      : 'bg-white/70 border-purple-100/80 hover:border-purple-300 hover:bg-white/90 shadow-sm'
                  }`}
                >
                  <div>
                    {/* Step Number */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`font-mono text-xs font-bold px-2.5 py-1 rounded-xl ${
                          isSelected ? 'bg-purple-700 text-white shadow-md' : 'bg-purple-100 text-purple-700'
                        }`}
                      >
                        {stage.step}
                      </span>

                      <div className="w-2.5 h-2.5 rounded-full bg-purple-600" />
                    </div>

                    {/* Title */}
                    <h3 className="font-editorial font-extrabold text-xl text-slate-900 mb-1">
                      {stage.title}
                    </h3>

                    {/* Subtitle */}
                    <div className="text-xs font-mono font-bold text-purple-700 mb-3">
                      {stage.subtitle}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      {stage.desc}
                    </p>
                  </div>

                  {/* Stage indicator */}
                  <div className="pt-6 border-t border-purple-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>STAGE {stage.step}</span>
                    <span className="text-purple-600 font-bold">●</span>
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
