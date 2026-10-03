import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, Layers, Eye, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { SIGNATURE_PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import MagneticButton from './MagneticButton';

const PROJECT_CATEGORIES = ['ALL', 'BRAND EXPERIENCE', 'WEB APPLICATION', 'E-COMMERCE', 'INTERACTIVE'];

export default function Projects3D() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'ALL'
    ? SIGNATURE_PROJECTS
    : SIGNATURE_PROJECTS.filter((p) => p.type.toUpperCase().includes(activeCategory));

  return (
    <section
      id="projects"
      aria-label="Projects Section"
      className="relative w-full py-32 bg-[#FAFAFA] overflow-hidden perspective-1500"
    >
      {/* Background Soft Purple Glow */}
      <div className="absolute top-1/4 right-0 w-[700px] h-[700px] rounded-full bg-purple-500/[0.07] blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[600px] h-[600px] rounded-full bg-purple-600/[0.05] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-purple-200/80 text-xs font-mono font-bold text-purple-700 shadow-sm mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SELECTED WORK & CASE STUDIES</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[0.95]">
              SIGNATURE <span className="text-purple-gradient">PROJECTS.</span>
            </h2>
          </div>

          <p className="text-slate-600 text-sm sm:text-base font-medium max-w-md">
            Each project embodies the synthesis of bespoke art direction, intuitive interaction, and robust React frontend engineering.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12 p-2 rounded-2xl bg-white/80 border border-purple-100/90 backdrop-blur-xl shadow-sm w-fit">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-purple-700 text-white shadow-md shadow-purple-600/25'
                  : 'text-slate-600 hover:text-purple-700 hover:bg-purple-50/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Projects Showcase Grid */}
        <div className="space-y-10 sm:space-y-14">
          
          {/* 1. Large Featured Showcase Hero Card */}
          {filteredProjects.slice(0, 1).map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              data-cursor="view"
              className="group relative rounded-[3rem] p-8 sm:p-12 bg-white/90 border border-purple-200/80 hover:border-purple-400 shadow-[0_30px_80px_-20px_rgba(109,40,217,0.18)] hover:shadow-[0_40px_100px_-15px_rgba(109,40,217,0.28)] backdrop-blur-2xl transition-all duration-500 cursor-pointer overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Project Details */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3.5 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-mono font-bold uppercase tracking-wider">
                      {project.type}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                      Featured Milestone
                    </span>
                  </div>

                  <h3 className="font-editorial text-3xl sm:text-5xl font-extrabold text-slate-900 group-hover:text-purple-700 transition-colors leading-[1.05]">
                    {project.title}
                  </h3>

                  {/* Dual Discipline Tag */}
                  <div className="flex items-center gap-2 text-xs font-mono font-bold">
                    <span className="text-purple-700 bg-purple-50 px-3 py-1 rounded-lg border border-purple-200">
                      DESIGN
                    </span>
                    <span className="text-slate-400">+</span>
                    <span className="text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                      DEVELOPMENT
                    </span>
                  </div>

                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                    {project.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-xl bg-slate-100 border border-slate-200/80 text-xs font-mono font-semibold text-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-purple-700 text-white font-mono text-xs font-bold shadow-lg shadow-purple-600/30 hover:bg-purple-800 transition-all hover:scale-105"
                    >
                      <span>VIEW DEEP DIVE</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-2xl bg-slate-100 hover:bg-purple-50 border border-slate-200/80 text-xs font-mono font-bold text-slate-800 hover:text-purple-700 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>LIVE PREVIEW</span>
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-2xl bg-slate-100 hover:bg-purple-50 border border-slate-200/80 text-xs font-mono font-bold text-slate-800 hover:text-purple-700 transition-all"
                      aria-label="GitHub Source Code"
                    >
                      <GithubIcon className="w-4 h-4 text-purple-600" />
                    </a>
                  </div>
                </div>

                {/* Right: Expansive Visual Media Preview */}
                <div className="lg:col-span-6 relative aspect-[16/11] rounded-[2.5rem] overflow-hidden shadow-2xl border border-purple-100 group-hover:scale-[1.02] transition-transform duration-700 ease-out">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-50 group-hover:opacity-10 transition-opacity" />

                  {/* Interactive Badge */}
                  <div className="absolute bottom-6 right-6 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-white text-xs font-mono font-bold text-purple-700 flex items-center gap-2 shadow-lg">
                    <Eye className="w-3.5 h-3.5" />
                    <span>EXPLORE CASE</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* 2. Editorial Multi-Column Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.slice(1).map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                data-cursor="view"
                className="group relative rounded-[2.5rem] p-6 sm:p-8 bg-white/85 border border-purple-200/80 hover:border-purple-400 shadow-[0_20px_50px_-15px_rgba(109,40,217,0.12)] hover:shadow-[0_30px_70px_-10px_rgba(109,40,217,0.22)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6 border border-purple-100 shadow-sm">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />

                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-mono font-bold text-purple-700 uppercase shadow-sm">
                        {project.type}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-editorial text-2xl font-extrabold text-slate-900 group-hover:text-purple-700 transition-colors mb-2 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200/80 text-[11px] font-mono font-semibold text-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-4 border-t border-purple-100 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-purple-700 group-hover:underline flex items-center gap-1">
                    <span>VIEW DETAILS</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 transition-colors"
                      aria-label="GitHub Code"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explore All CTA on GitHub */}
        <div className="mt-16 text-center">
          <MagneticButton
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            cursorType="open"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white border border-purple-200 hover:border-purple-400 text-slate-900 hover:text-purple-700 font-mono text-xs font-bold shadow-lg shadow-purple-600/5 transition-all hover:scale-105"
          >
            <GithubIcon className="w-4 h-4 text-purple-600" />
            <span>EXPLORE ALL REPOSITORIES ON GITHUB</span>
            <ArrowRight className="w-4 h-4 text-purple-600" />
          </MagneticButton>
        </div>
      </div>

      {/* Project Case Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
