import { useState } from 'react';
import { Mail, Send, Copy, Check, Sparkles, ArrowRight, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import MagneticButton from './MagneticButton';

export default function Contact3D({ onShowToast }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectScope: 'Design + Development',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    if (onShowToast) onShowToast('Email copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onShowToast) onShowToast('Your inquiry has been prepared!');
    const subject = encodeURIComponent(`Project Inquiry (${formData.projectScope}) from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nScope: ${formData.projectScope}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-[#F7F5FC] via-[#F3EEFF] to-[#FAFAFA] overflow-hidden flex flex-col justify-center px-4 sm:px-6 lg:px-8"
    >
      {/* Background Soft Purple Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] lg:w-[900px] h-[350px] sm:h-[650px] lg:h-[900px] rounded-full bg-purple-500/[0.1] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Responsive Headline Section */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4 px-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-purple-200/80 text-xs font-mono font-bold text-purple-700 shadow-sm mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET'S COLLABORATE</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 tracking-tight leading-[0.95] max-w-full break-words">
            LET'S MAKE<br />
            SOMETHING<br />
            <span className="text-purple-gradient text-4xl sm:text-6xl md:text-8xl lg:text-[7.5rem] drop-shadow-sm inline-block max-w-full">
              GREAT.
            </span>
          </h2>

          <div className="pt-3 sm:pt-4 font-mono text-xs sm:text-sm font-bold text-purple-800 tracking-wider uppercase">
            DESIGN IT. • BUILD IT. • SHIP IT.
          </div>
        </div>

        {/* Circular Purple Magnetic CTA Button */}
        <div className="flex justify-center mb-14 sm:mb-20">
          <MagneticButton
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            cursorType="open"
            strength={0.3}
            className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full bg-gradient-to-tr from-purple-800 via-purple-700 to-purple-500 text-white flex flex-col items-center justify-center p-4 text-center font-editorial font-extrabold text-sm sm:text-lg md:text-xl shadow-[0_20px_50px_rgba(109,40,217,0.35)] hover:shadow-[0_25px_60px_rgba(109,40,217,0.5)] transition-all hover:scale-105 active:scale-95 group"
          >
            <span>START A</span>
            <span>PROJECT</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mt-1 sm:mt-2 group-hover:translate-x-1.5 transition-transform" />
          </MagneticButton>
        </div>

        {/* Contact Details & Interactive Form Grid */}
        <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left: Contact Info & Direct Copy */}
          <div className="lg:col-span-5 space-y-6 w-full">
            <div className="p-6 sm:p-8 rounded-[2rem] bg-white/90 border border-purple-200/90 shadow-xl shadow-purple-600/5 backdrop-blur-2xl space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-purple-700 uppercase">
                  DIRECT EMAIL
                </span>
                <div className="font-editorial font-extrabold text-base sm:text-xl md:text-2xl text-slate-900 mt-1 break-all">
                  {PERSONAL_INFO.email}
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-800 font-mono text-xs font-bold transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>COPIED TO CLIPBOARD!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-purple-600" />
                    <span>COPY EMAIL ADDRESS</span>
                  </>
                )}
              </button>

              {/* Social Channels */}
              <div className="pt-4 border-t border-purple-100 space-y-3">
                <div className="text-xs font-mono uppercase text-slate-400 font-bold">
                  SOCIAL NETWORKS
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-purple-100 border border-slate-200/80 text-xs font-mono font-bold text-slate-800 hover:text-purple-800 transition-all"
                  >
                    <GithubIcon className="w-4 h-4 text-purple-600" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-purple-100 border border-slate-200/80 text-xs font-mono font-bold text-slate-800 hover:text-purple-800 transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4 text-purple-600" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-purple-100 border border-slate-200/80 text-xs font-mono font-bold text-slate-800 hover:text-purple-800 transition-all"
                  >
                    <Mail className="w-4 h-4 text-purple-600" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Inquiry Form */}
          <div className="lg:col-span-7 w-full">
            <div className="p-6 sm:p-8 md:p-10 rounded-[2rem] bg-white border border-purple-200 shadow-2xl shadow-purple-600/10">
              <h3 className="font-editorial text-xl sm:text-2xl font-extrabold text-slate-900 mb-5 sm:mb-6">
                Send a Message
              </h3>

              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-editorial font-bold text-lg sm:text-xl text-slate-900">Message Ready!</h4>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-sm mx-auto">
                    Your email client has been launched with your project details.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-purple-700 font-bold hover:underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase font-bold text-slate-600 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Parker"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-purple-50/50 border border-purple-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-purple-600 focus:bg-white transition-all font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase font-bold text-slate-600 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-purple-50/50 border border-purple-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-purple-600 focus:bg-white transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-slate-600 mb-1.5">
                      Project Scope
                    </label>
                    <select
                      value={formData.projectScope}
                      onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-purple-50/50 border border-purple-200 text-slate-900 text-sm focus:outline-none focus:border-purple-600 focus:bg-white transition-all font-medium"
                    >
                      <option value="Design + Development">Design + Full Development</option>
                      <option value="Visual UI/UX Design">Visual UI/UX Design & Systems</option>
                      <option value="React Frontend Engineering">React Frontend Engineering</option>
                      <option value="3D Interactive Experience">3D Interactive Experience</option>
                      <option value="Consulting">Technical & Creative Consulting</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-slate-600 mb-1.5">
                      Project Details
                    </label>
                    <textarea
                      required
                      rows="4"
                      placeholder="Tell me about your goals, timeline, and vision..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-purple-50/50 border border-purple-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-purple-600 focus:bg-white transition-all font-medium resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 px-6 rounded-2xl bg-purple-700 hover:bg-purple-800 text-white font-mono font-bold text-xs shadow-xl shadow-purple-600/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>START A CONVERSATION</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
