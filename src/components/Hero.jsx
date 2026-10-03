import { useState, useRef, useEffect } from 'react';
import { ArrowRight, Sparkles, Terminal, Code2, Play, Eye, Layers, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const bgVideoRef = useRef(null);
  const cardVideoRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    // Autoplay handling for both video elements
    const playVideo = (vRef) => {
      if (vRef.current) {
        vRef.current.playbackRate = 0.9;
        const p = vRef.current.play();
        if (p !== undefined) {
          p.then(() => setVideoLoaded(true)).catch(() => setVideoLoaded(true));
        }
      }
    };

    playVideo(bgVideoRef);
    playVideo(cardVideoRef);
  }, []);

  // Interactive 3D tilt handler
  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates (-1 to 1)
    const normX = (x / rect.width) * 2 - 1;
    const normY = (y / rect.height) * 2 - 1;

    // Calculate 3D angles
    const rotateX = -normY * 12; // Max 12deg
    const rotateY = normX * 14;  // Max 14deg
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ rotateX, rotateY, glareX, glareY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  };

  const scrollToWork = (e) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      aria-label="Hero Section"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#07080d] perspective-1200"
    >
      {/* 1. Fullscreen Atmospheric Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <video
          ref={bgVideoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-30 scale-105 blur-[1px]' : 'opacity-0 scale-100'
          }`}
        >
          <source src="/hero-banner.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080d] via-[#07080d]/80 via-45% to-[#07080d]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080d] via-transparent to-[#07080d]/80" />
        
        {/* Dynamic 3D Spatial ambient lights */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-indigo-600/15 blur-[130px] transition-all duration-700 ease-out"
          style={{
            left: `${tilt.glareX}%`,
            top: `${tilt.glareY}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
      </div>

      {/* 2. Hero Content Grid with 3D Spatial Depth */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-screen">
        
        {/* Left Column: Expressive Syne Headline & Content */}
        <div className="lg:col-span-7 space-y-6">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md text-xs font-mono text-slate-300 shadow-sm animate-in fade-in duration-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-widest uppercase font-semibold text-[11px] text-slate-200">
              WEB DEVELOPER • CREATIVE TECHNOLOGIST
            </span>
          </div>

          {/* Name Tag */}
          <div className="text-sm sm:text-base font-mono tracking-widest text-indigo-400 font-bold uppercase">
            VIMAL VAIBHAV
          </div>

          {/* Main Headline (Expressive Syne Typography) */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.04] text-balance">
            Building digital experiences{' '}
            <span className="bg-gradient-to-r from-white via-indigo-100 to-indigo-400 bg-clip-text text-transparent">
              that feel exceptional.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl font-normal text-balance">
            I design and develop modern, high-performance websites and web applications with a strong focus on clean interfaces, seamless interactions, and exceptional user experiences.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              onClick={scrollToWork}
              className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-white text-slate-950 font-bold text-sm hover:bg-slate-100 transition-all duration-300 shadow-xl shadow-white/10 hover:shadow-white/25 hover:-translate-y-1"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 text-slate-900 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              onClick={scrollToContact}
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/[0.04] text-slate-200 border border-white/10 hover:bg-white/[0.08] hover:border-white/25 hover:text-white font-semibold text-sm transition-all duration-300 backdrop-blur-md hover:-translate-y-1"
            >
              <Sparkles className="w-4 h-4 text-indigo-400 group-hover:rotate-12 transition-transform" />
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Tech Badges */}
          <div className="pt-6 flex items-center gap-4 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>React.js</span>
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-indigo-400" />
              <span>Tailwind CSS</span>
            </div>
            <span className="text-slate-600">•</span>
            <span>3D & Modern UI</span>
          </div>
        </div>

        {/* Right Column: Interactive 3D Spatial Holographic Video Frame */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div
            className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-3xl preserve-3d transition-transform duration-300 ease-out cursor-pointer group"
            style={{
              transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
              boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.9), 0 0 40px 0 rgba(99, 102, 241, 0.2)'
            }}
          >
            {/* 3D Glass Outer Bezel */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.12] via-white/[0.02] to-indigo-500/[0.15] border border-white/20 backdrop-blur-2xl overflow-hidden p-3 shadow-inner">
              
              {/* Inner Video Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/80">
                <video
                  ref={cardVideoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                >
                  <source src="/hero-banner.mp4" type="video/mp4" />
                </video>

                {/* 3D Specular Glare Lighting following cursor */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.7) 0%, rgba(99,102,241,0.2) 40%, transparent 70%)`
                  }}
                />

                {/* Video Holographic Scanline Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                {/* 3D Floating Spatial Layer: Top Header */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between translate-z-30 pointer-events-none">
                  <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>3D ACTIVE</span>
                  </div>

                  <div className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300">
                    60 FPS
                  </div>
                </div>

                {/* 3D Floating Spatial Layer: Bottom Meta */}
                <div className="absolute bottom-4 left-4 right-4 translate-z-50 p-4 rounded-xl bg-black/60 backdrop-blur-xl border border-white/15 pointer-events-none">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-heading font-bold text-sm text-white">
                      Creative Dimension
                    </div>
                    <Compass className="w-4 h-4 text-indigo-400 animate-spin-slow" />
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    Spatial UI • Interactive Depth
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Floating Badge Left */}
            <div
              className="hidden sm:flex absolute -left-6 top-1/3 translate-z-50 px-4 py-2.5 rounded-2xl bg-[#0f1222]/90 border border-white/15 backdrop-blur-xl shadow-2xl items-center gap-2.5 pointer-events-none animate-float-slow"
            >
              <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <Code2 className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Architecture</div>
                <div className="text-xs font-bold text-white">Clean React</div>
              </div>
            </div>

            {/* 3D Floating Badge Right */}
            <div
              className="hidden sm:flex absolute -right-6 bottom-1/4 translate-z-50 px-4 py-2.5 rounded-2xl bg-[#0f1222]/90 border border-white/15 backdrop-blur-xl shadow-2xl items-center gap-2.5 pointer-events-none animate-float-slow"
              style={{ animationDelay: '1.5s' }}
            >
              <div className="w-7 h-7 rounded-lg bg-violet-500/20 text-violet-400 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Aesthetics</div>
                <div className="text-xs font-bold text-white">Ultra Modern</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors pointer-events-auto">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          aria-label="Scroll to About Section"
          className="flex flex-col items-center gap-2 group cursor-pointer"
        >
          <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 group-hover:text-white transition-colors">
            Explore Portfolio
          </span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-white/40 transition-colors">
            <div className="w-1 h-2 rounded-full bg-indigo-400 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
