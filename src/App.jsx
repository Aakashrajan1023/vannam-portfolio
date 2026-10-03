import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import DesignCodeStatement from './components/DesignCodeStatement';
import About from './components/About';
import Skills3D from './components/Skills3D';
import Projects3D from './components/Projects3D';
import Philosophy from './components/Philosophy';
import Services3D from './components/Services3D';
import Process3D from './components/Process3D';
import Testimonials3D from './components/Testimonials3D';
import Contact3D from './components/Contact3D';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Toast from './components/Toast';

export default function App() {
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll for high-end luxury feel
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  return (
    <div className="relative min-h-screen bg-[#FAFAFA] text-[#0A0A0E] selection:bg-purple-600/20 selection:text-purple-900 overflow-x-hidden font-sans">
      {/* Interactive 3D Custom Cursor (Desktop) */}
      <CustomCursor />

      {/* Floating Glass Navigation */}
      <Navbar />

      {/* Main 3D Continuous Experience */}
      <main>
        {/* 1. Fullscreen Cinematic 3D Hero */}
        <Hero3D />

        {/* 2. Massive Editorial Brand Statement: DESIGN MEETS CODE. */}
        <DesignCodeStatement />

        {/* 3. 3D Editorial About Section */}
        <About />

        {/* 4. 3D Split-World Skills Matrix (Design + Dev) */}
        <Skills3D />

        {/* 5. Signature 3D Horizontal Showcase */}
        <Projects3D />

        {/* 6. Design Philosophy / My Approach */}
        <Philosophy />

        {/* 7. Floating 3D Typography Services */}
        <Services3D />

        {/* 8. 3D Design to Code Process Journey */}
        <Process3D />

        {/* 9. Floating Glass Testimonials */}
        <Testimonials3D />

        {/* 10. Dramatic Light-Purple Contact Finale */}
        <Contact3D onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Notification Toast */}
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}
    </div>
  );
}
