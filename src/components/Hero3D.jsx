import { useState, useRef, useEffect } from 'react';
import { ArrowRight, Sparkles, Code2, Palette, Terminal, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import Floating3DObjects from './Floating3DObjects';
import MagneticButton from './MagneticButton';

export default function Hero3D() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [mouseParallax, setMouseParallax] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.9;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setVideoLoaded(true))
          .catch(() => setVideoLoaded(true));
      }
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const normX = (e.clientX / innerWidth) * 2 - 1;
      const normY = (e.clientY / innerHeight) * 2 - 1;
      setMouseParallax({ x: normX, y: normY });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToWork = (e) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // 3D Scroll Physics Calculations
  const scrollProgress = Math.min(scrollY / 800, 1);
  const typographyTranslateZ = scrollProgress * 100;
  const typographyOpacity = Math.max(1 - scrollProgress * 1.3, 0);
  const sideVideoTranslateZ = -scrollProgress * 150;
  const sideVideoScale = Math.max(1 - scrollProgress * 0.2, 0.8);

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAFA] perspective-1500 px-4 sm:px-6 lg:px-8"
    >
      {/* Clean Light Luxury Atmosphere Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {/* Soft Purple Atmospheric Radiant Glows */}
        <div
          className="absolute -top-32 -left-32 w-[350px] sm:w-[600px] lg:w-[700px] h-[350px] sm:h-[600px] lg:h-[700px] rounded-full bg-purple-500/[0.09] blur-[140px] transition-transform duration-700 ease-out"
          style={{
            transform: `translate3d(${mouseParallax.x * -30}px, ${mouseParallax.y * -30}px, 0)`,
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[350px] sm:w-[650px] lg:w-[750px] h-[350px] sm:h-[650px] lg:h-[750px] rounded-full bg-purple-400/[0.08] blur-[150px] transition-transform duration-700 ease-out"
          style={{
            transform: `translate3d(${mouseParallax.x * 25}px, ${mouseParallax.y * 25}px, 0)`,
          }}
        />

        {/* Subtle grid texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#7c3aed05_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed05_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-70" />
      </div>

      {/* Floating 3D Objects Layer */}
      <Floating3DObjects mouseParallax={mouseParallax} />

      {/* Main 2-Column Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-24 sm:pt-32 pb-16 sm:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center min-h-screen preserve-3d">
        
        {/* LEFT COLUMN: Editorial Typography */}
        <div
          className="lg:col-span-7 space-y-4 sm:space-y-6 preserve-3d transition-transform duration-300 ease-out text-left"
          style={{
            transform: `translate3d(${mouseParallax.x * -10}px, ${mouseParallax.y * -10}px, ${typographyTranslateZ}px)`,
            opacity: typographyOpacity
          }}
        >
          {/* Eyebrow Label Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-purple-200/80 shadow-sm text-xs font-mono font-bold text-purple-700 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
            </span>
            <span className="tracking-widest uppercase text-[10px] sm:text-[11px]">
              DEVELOPER × DESIGNER
            </span>
          </div>

          {/* Main Headline - Protected with whitespace-nowrap and balanced scaling */}
          <div>
            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold tracking-tight text-slate-900 leading-[0.95]">
              <span className="block whitespace-nowrap">VIMAL</span>
              <span className="block whitespace-nowrap text-slate-900">VAIBHAV</span>
            </h1>
          </div>

          {/* Mantra: I DESIGN. I BUILD. I CREATE. */}
          <div className="font-editorial text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight space-y-0.5 sm:space-y-1 pt-1">
            <div className="text-purple-gradient whitespace-nowrap">I DESIGN.</div>
            <div className="text-purple-gradient whitespace-nowrap">I BUILD.</div>
            <div className="text-slate-900 whitespace-nowrap">I CREATE.</div>
          </div>

          {/* Supporting Statement */}
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-medium pt-1 text-balance">
            Designing meaningful digital experiences and engineering them into reality.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 sm:pt-3">
            <MagneticButton
              href="#projects"
              onClick={scrollToWork}
              cursorType="project"
              className="group relative inline-flex items-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-purple-700 text-white font-mono text-xs sm:text-sm font-bold shadow-xl shadow-purple-600/30 hover:bg-purple-800 hover:shadow-purple-600/45 transition-all duration-300 hover:scale-105"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>

            <MagneticButton
              href="#contact"
              onClick={scrollToContact}
              cursorType="open"
              className="group inline-flex items-center gap-2 px-5 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-white text-slate-800 border border-purple-200 hover:border-purple-400 hover:text-purple-700 font-mono text-xs sm:text-sm font-bold shadow-md shadow-purple-500/5 transition-all duration-300 backdrop-blur-md hover:scale-105"
            >
              <Sparkles className="w-4 h-4 text-purple-600 group-hover:rotate-12 transition-transform" />
              <span>LET'S TALK</span>
            </MagneticButton>
          </div>

          {/* Discipline Badges */}
          <div className="pt-3 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono font-semibold text-slate-500">
            <div className="flex items-center gap-1.5 text-purple-700">
              <Palette className="w-3.5 h-3.5" />
              <span>Art Direction</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1.5 text-purple-700">
              <Code2 className="w-3.5 h-3.5" />
              <span>React & 3D Web</span>
            </div>
            <span className="text-slate-300">•</span>
            <span>Spatial Systems</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Side Portrait Video Component */}
        <div
          className="lg:col-span-5 flex items-center justify-center preserve-3d transition-transform duration-300 ease-out w-full"
          style={{
            transform: `translate3d(${mouseParallax.x * 15}px, ${mouseParallax.y * 15}px, ${sideVideoTranslateZ}px) scale(${sideVideoScale}) rotateY(${mouseParallax.x * 5}deg) rotateX(${mouseParallax.y * -5}deg)`,
          }}
        >
          {/* Side Video Card Frame */}
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[4/5] rounded-[2rem] sm:rounded-[2.5rem] p-3 sm:p-3.5 bg-gradient-to-b from-white via-purple-50/70 to-purple-100/90 border border-white shadow-[0_25px_60px_-15px_rgba(109,40,217,0.18)] preserve-3d backdrop-blur-xl">
            
            {/* Inner Video Container */}
            <div className="relative w-full h-full rounded-[1.6rem] sm:rounded-[2rem] overflow-hidden bg-slate-900 shadow-inner">
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover object-center"
              >
                <source src="/hero-banner.mp4" type="video/mp4" />
              </video>

              {/* Light Luxury Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/35 via-transparent to-white/10 pointer-events-none" />

              {/* 3D Specular Sheen */}
              <div
                className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at ${(mouseParallax.x + 1) * 50}% ${(mouseParallax.y + 1) * 50}%, rgba(255,255,255,0.8) 0%, rgba(139,92,246,0.3) 50%, transparent 80%)`
                }}
              />

              {/* Top Floating Badge */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between pointer-events-none">
                <div className="px-2.5 sm:px-3 py-1 rounded-full bg-white/85 backdrop-blur-md border border-white text-[9px] sm:text-[10px] font-mono font-bold text-purple-700 flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
                  <span>CREATIVE TECHNOLOGIST</span>
                </div>
              </div>

              {/* Bottom Floating Bar */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-3 sm:p-3.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/90 shadow-lg text-slate-900 pointer-events-none">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-editorial font-bold text-xs sm:text-sm text-slate-900">
                      Vimal Vaibhav
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-mono text-purple-700 font-semibold">
                      Design + Development
                    </div>
                  </div>
                  <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600 animate-spin-slow" />
                </div>
              </div>
            </div>

            {/* Floating Glass Pill Left */}
            <div
              className="hidden sm:flex absolute -left-5 top-1/4 px-3 py-1.5 rounded-2xl bg-white/95 border border-purple-200/90 backdrop-blur-xl shadow-lg shadow-purple-600/10 items-center gap-2 pointer-events-none animate-float-slow"
            >
              <div className="w-6 h-6 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
                <Palette className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-[8px] font-mono text-slate-400 uppercase font-bold">Design</div>
                <div className="text-[11px] font-bold text-slate-900 font-editorial">Pure Aesthetics</div>
              </div>
            </div>

            {/* Floating Glass Pill Right */}
            <div
              className="hidden sm:flex absolute -right-5 bottom-1/4 px-3 py-1.5 rounded-2xl bg-white/95 border border-purple-200/90 backdrop-blur-xl shadow-lg shadow-purple-600/10 items-center gap-2 pointer-events-none animate-float-slow"
              style={{ animationDelay: '1.5s' }}
            >
              <div className="w-6 h-6 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
                <Code2 className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-[8px] font-mono text-slate-400 uppercase font-bold">Code</div>
                <div className="text-[11px] font-bold text-slate-900 font-editorial">Modern React</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-slate-400 hover:text-purple-700 transition-colors pointer-events-auto">
        <a
          href="#statement"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#statement')?.scrollIntoView({ behavior: 'smooth' });
          }}
          aria-label="Scroll Down"
          className="flex flex-col items-center gap-1 group cursor-pointer"
        >
          <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400 group-hover:text-purple-700 font-bold transition-colors">
            EXPLORE
          </span>
          <div className="w-4 h-6 rounded-full border-2 border-purple-300 flex items-start justify-center p-0.5 group-hover:border-purple-600 transition-colors">
            <div className="w-1 h-1.5 rounded-full bg-purple-600 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
