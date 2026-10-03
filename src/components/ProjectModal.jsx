import { useEffect } from 'react';
import { X, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-2xl animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] bg-white border border-purple-100 shadow-[0_35px_90px_-15px_rgba(109,40,217,0.3)] text-slate-900 p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-100 hover:bg-purple-100 text-slate-600 hover:text-purple-700 transition-colors z-10"
          aria-label="Close Project Details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Image Header */}
        <div className="relative w-full h-64 sm:h-80 rounded-3xl overflow-hidden mb-8 border border-purple-100 shadow-md">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-700/90 backdrop-blur-md text-xs font-mono font-bold tracking-wider uppercase">
              {project.type}
            </span>
          </div>
        </div>

        {/* Title & Category */}
        <div className="mb-6">
          <div className="text-xs font-mono font-bold text-purple-700 uppercase tracking-widest mb-2">
            {project.category}
          </div>
          <h3 className="font-editorial text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
            {project.title}
          </h3>
        </div>

        {/* Disciplines Dual Badge */}
        <div className="flex items-center gap-2 mb-6">
          {project.disciplines.map((d) => (
            <span
              key={d}
              className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-[11px] font-mono font-bold uppercase"
            >
              {d}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 font-medium">
          {project.description}
        </p>

        {/* Stats Grid */}
        {project.stats && (
          <div className="grid grid-cols-3 gap-3 mb-8 p-4 rounded-2xl bg-purple-50/70 border border-purple-100">
            {Object.entries(project.stats).map(([k, v]) => (
              <div key={k} className="text-center">
                <div className="text-[10px] font-mono uppercase text-slate-500 mb-1">{k}</div>
                <div className="text-base sm:text-lg font-editorial font-bold text-purple-700">{v}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-3">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200/80 text-xs font-mono font-semibold text-slate-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-purple-100">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-purple-700 text-white font-mono font-bold text-xs hover:bg-purple-800 transition-all shadow-lg shadow-purple-600/30"
          >
            <ExternalLink className="w-4 h-4" />
            <span>LAUNCH LIVE EXPERIENCE</span>
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-purple-50 text-slate-800 hover:text-purple-700 font-mono font-bold text-xs transition-all border border-slate-200"
          >
            <GithubIcon className="w-4 h-4" />
            <span>SOURCE CODE</span>
          </a>
        </div>
      </div>
    </div>
  );
}
