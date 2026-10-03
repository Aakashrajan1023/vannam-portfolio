import { useEffect, useRef, useState } from 'react';

export default function DesignCodeStatement() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      
      const currentY = rect.top;
      const totalH = windowH + rect.height;
      const progress = 1 - (currentY + rect.height) / totalH;
      setScrollProgress(Math.max(0, Math.min(progress, 1)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const multiplier = isMobile ? 0.25 : 1;
  const designZ = (scrollProgress - 0.5) * 120 * multiplier;
  const meetsZ = (scrollProgress - 0.5) * 200 * multiplier;
  const codeZ = (scrollProgress - 0.5) * 280 * multiplier;

  return (
    <section
      id="statement"
      ref={containerRef}
      aria-label="Brand Message"
      className="relative w-full min-h-screen flex items-center justify-center bg-[#FAFAFA] py-20 sm:py-28 overflow-hidden perspective-2000 px-4 sm:px-6"
    >
      {/* Background Soft Purple Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] rounded-full bg-purple-500/[0.06] blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center preserve-3d">
        <div className="text-xs font-mono uppercase tracking-[0.2em] text-purple-600 font-bold mb-6 sm:mb-8">
          • CORE CREATIVE PRINCIPLE •
        </div>

        {/* 3 Responsive Words at Separate Z Depths */}
        <div className="flex flex-col items-center justify-center space-y-1 sm:space-y-2 preserve-3d">
          
          {/* 1. DESIGN (Purple Gradient) */}
          <div
            className="font-editorial text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-extrabold tracking-tight text-purple-gradient leading-[0.9] transition-transform duration-200 ease-out preserve-3d max-w-full break-words"
            style={{
              transform: `translate3d(0, 0, ${designZ}px)`,
            }}
          >
            DESIGN
          </div>

          {/* 2. MEETS (Light Gray) */}
          <div
            className="font-editorial text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[9rem] font-extrabold tracking-tight text-slate-300 leading-[0.9] transition-transform duration-200 ease-out preserve-3d max-w-full break-words"
            style={{
              transform: `translate3d(0, 0, ${meetsZ}px)`,
            }}
          >
            MEETS
          </div>

          {/* 3. CODE. (Black) */}
          <div
            className="font-editorial text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-extrabold tracking-tight text-slate-900 leading-[0.9] transition-transform duration-200 ease-out preserve-3d max-w-full break-words"
            style={{
              transform: `translate3d(0, 0, ${codeZ}px)`,
            }}
          >
            CODE.
          </div>
        </div>

        <p className="mt-8 sm:mt-12 max-w-xl mx-auto text-slate-600 text-sm sm:text-base lg:text-lg font-medium leading-relaxed px-4 text-balance">
          The seamless synthesis of aesthetic obsession and engineering rigor. Crafting web applications that don't just function flawlessly—they captivate.
        </p>
      </div>
    </section>
  );
}
