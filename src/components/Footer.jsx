import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white border-t border-purple-100 text-slate-600 py-16 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-purple-100 items-start">
          
          {/* Brand & Manifesto */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-700 text-white flex items-center justify-center font-editorial font-extrabold text-xs">
                VV
              </div>
              <span className="font-editorial font-extrabold text-lg text-slate-900 tracking-tight">
                {PERSONAL_INFO.name.toUpperCase()}
              </span>
            </div>

            <p className="text-sm text-slate-600 max-w-sm leading-relaxed font-medium">
              Designing meaningful digital experiences and engineering them into reality.
            </p>

            <div className="text-xs font-mono text-purple-700 font-bold">
              WEB DEVELOPER + DIGITAL DESIGNER
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider">
              INDEX
            </div>
            <ul className="space-y-2 text-xs font-mono font-bold text-slate-700">
              {['WORK', 'ABOUT', 'DESIGN', 'DEVELOPMENT', 'CONTACT'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase() === 'work' ? 'projects' : item.toLowerCase()}`}
                    className="hover:text-purple-700 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider">
              CONNECT
            </div>
            <ul className="space-y-2 text-xs font-mono font-bold text-slate-700">
              <li>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-purple-700 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-purple-600" />
                  <span>GITHUB</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-purple-700 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-purple-600" />
                  <span>LINKEDIN</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-2 hover:text-purple-700 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-purple-600" />
                  <span>DIRECT EMAIL</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 font-semibold">
          <div>
            © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </div>

          <div className="text-purple-700">
            DESIGN MEETS CODE
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-800 transition-all group"
            aria-label="Back to Top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
