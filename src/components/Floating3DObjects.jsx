export default function Floating3DObjects({ mouseParallax = { x: 0, y: 0 } }) {
  const pX = mouseParallax.x || 0;
  const pY = mouseParallax.y || 0;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 preserve-3d">
      {/* 1. Large Transparent Purple Glass Sphere (Top Right) */}
      <div
        className="absolute -top-10 -right-10 w-44 h-44 sm:w-60 sm:h-60 rounded-full glass-sphere animate-float-slow opacity-80 transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${pX * 40}px, ${pY * 30}px, 60px)`,
        }}
      />

      {/* 2. Chrome Metallic Geometric Ring (Bottom Right) */}
      <div
        className="absolute bottom-16 right-4 sm:right-16 w-36 h-36 sm:w-48 sm:h-48 chrome-ring animate-spin-slow opacity-90 transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${pX * -30}px, ${pY * -25}px, 90px) rotateX(45deg) rotateY(${pX * 20}deg)`,
        }}
      />

      {/* 3. Small Purple Glass Sphere (Center Left) */}
      <div
        className="absolute top-1/3 -left-6 sm:left-12 w-20 h-20 sm:w-28 sm:h-28 rounded-full glass-sphere animate-float-slow opacity-70 transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${pX * -25}px, ${pY * -35}px, 40px)`,
          animationDelay: '1.8s'
        }}
      />

      {/* 4. Chrome Mini Ring (Top Left) */}
      <div
        className="absolute top-20 left-1/4 w-20 h-20 chrome-ring animate-spin-slow opacity-60 transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${pX * 20}px, ${pY * 20}px, 20px) rotateX(60deg)`,
          animationDuration: '35s'
        }}
      />

      {/* 5. Floating Glass Fragment Polygon (Near portrait) */}
      <div
        className="absolute top-24 right-1/3 w-16 h-24 bg-white/40 border border-purple-300/40 rounded-2xl backdrop-blur-md rotate-12 shadow-lg shadow-purple-500/10 transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${pX * 50}px, ${pY * 40}px, 110px) rotate(${pX * 15}deg)`,
        }}
      />

      {/* 6. Thin 3D Accent Lines */}
      <div
        className="absolute top-1/2 right-10 w-32 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent rotate-45 transition-transform duration-500"
        style={{ transform: `translate3d(${pX * 15}px, ${pY * 15}px, 30px) rotate(45deg)` }}
      />
      <div
        className="absolute bottom-1/3 left-1/3 w-40 h-[1px] bg-gradient-to-r from-transparent via-purple-400/40 to-transparent -rotate-12 transition-transform duration-500"
        style={{ transform: `translate3d(${pX * -20}px, ${pY * -15}px, 20px) rotate(-12deg)` }}
      />

      {/* 7. Soft Atmospheric Purple Radiant Glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-purple-500/[0.07] blur-[100px]" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-purple-600/[0.05] blur-[120px]" />
    </div>
  );
}
