import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { NAVIGATION_LINKS, PERSONAL_INFO } from '../data/portfolioData';
import MagneticButton from './MagneticButton';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 py-4 px-4 sm:px-8 ${
          isScrolled ? 'pt-3 pb-3' : 'pt-6 pb-4'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <nav
            aria-label="Main Navigation"
            className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${
              isScrolled
                ? 'bg-white/85 backdrop-blur-2xl border border-purple-200/60 shadow-[0_12px_36px_-8px_rgba(109,40,217,0.12)] scale-[0.98]'
                : 'bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.03)]'
            }`}
          >
            {/* Logo Monogram */}
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, '#hero')}
              className="flex items-center gap-3 group cursor-pointer"
              data-cursor="open"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-700 via-purple-600 to-purple-400 flex items-center justify-center font-editorial font-extrabold text-xs tracking-wider text-white shadow-md shadow-purple-600/30 group-hover:scale-105 transition-transform">
                VV
              </div>
              <div className="flex flex-col">
                <span className="font-editorial font-bold text-sm tracking-tight text-slate-900 group-hover:text-purple-700 transition-colors leading-none">
                  VIMAL VAIBHAV
                </span>
                <span className="text-[10px] font-mono text-purple-600 font-semibold tracking-wider">
                  DEV × DESIGN
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 bg-black/[0.03] border border-black/[0.04] rounded-full p-1">
              {NAVIGATION_LINKS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  data-cursor="pointer"
                  className="px-4 py-1.5 text-xs font-mono font-semibold text-slate-600 hover:text-purple-700 transition-all duration-200 rounded-full hover:bg-white/80"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Right Action CTA Button */}
            <div className="hidden md:block">
              <MagneticButton
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                cursorType="open"
                className="group inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-700 to-purple-600 text-white font-mono text-xs font-bold shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 transition-all duration-300 hover:scale-105"
              >
                <span>LET'S TALK</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </MagneticButton>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-slate-700 hover:text-purple-700 bg-white/80 border border-purple-100 shadow-sm"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-white/95 backdrop-blur-3xl pt-24 px-8 pb-10 flex flex-col justify-between animate-in fade-in duration-300">
          <div className="flex flex-col space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-purple-600 font-bold mb-2">
              INDEX
            </div>
            {NAVIGATION_LINKS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-3xl font-editorial font-extrabold text-slate-900 hover:text-purple-700 transition-colors py-2 border-b border-purple-100 flex items-center justify-between"
              >
                <span>{item.name}</span>
                <span className="text-xs font-mono text-purple-500">→</span>
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-purple-100">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-purple-700 text-white font-mono font-bold text-sm shadow-xl shadow-purple-600/30"
            >
              <Sparkles className="w-4 h-4" />
              <span>LET'S TALK</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
