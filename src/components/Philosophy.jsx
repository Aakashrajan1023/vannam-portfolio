import { useEffect, useRef, useState } from 'react';
import { Sparkles, Compass } from 'lucide-react';

export default function Philosophy() {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="philosophy"
      ref={containerRef}
      aria-label="Design Philosophy"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#F7F5FC] overflow-hidden flex items-center justify-center perspective-1500 px-4 sm:px-6"
    >
      {/* Background Soft Purple Lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] rounded-full bg-purple-500/[0.08] blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center preserve-3d">
        {/* Section Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-purple-200/80 text-xs font-mono font-bold text-purple-700 shadow-sm mb-8 sm:mb-10">
          <Compass className="w-3.5 h-3.5 text-purple-600" />
          <span>MY APPROACH & PHILOSOPHY</span>
        </div>

        {/* 3D Multi-Layer Statement */}
        <div className="space-y-4 sm:space-y-6 preserve-3d max-w-full">
          
          {/* Line 1: GOOD DESIGN */}
          <div
            className="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-slate-900 tracking-tight leading-tight preserve-3d break-words"
            style={{ transform: `translate3d(0, 0, 30px)` }}
          >
            GOOD DESIGN
          </div>

          {/* Line 2: GETS ATTENTION. */}
          <div
            className="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-purple-gradient tracking-tight leading-tight preserve-3d break-words"
            style={{ transform: `translate3d(0, 0, 60px)` }}
          >
            GETS ATTENTION.
          </div>

          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto my-4 sm:my-6" />

          {/* Line 3: GREAT DEVELOPMENT */}
          <div
            className="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-slate-900 tracking-tight leading-tight preserve-3d break-words"
            style={{ transform: `translate3d(0, 0, 45px)` }}
          >
            GREAT DEVELOPMENT
          </div>

          {/* Line 4: MAKES IT WORK. */}
          <div
            className="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-purple-gradient tracking-tight leading-tight preserve-3d break-words"
            style={{ transform: `translate3d(0, 0, 80px)` }}
          >
            MAKES IT WORK.
          </div>
        </div>

        <p className="mt-8 sm:mt-12 max-w-xl mx-auto text-slate-600 text-sm sm:text-base font-medium leading-relaxed px-4 text-balance">
          I refuse to compromise on either side. True digital excellence is where visual beauty and engineering performance exist in total harmony.
        </p>
      </div>
    </section>
  );
}
