export const PERSONAL_INFO = {
  name: "Vimal Vaibhav",
  role: "Web Developer + Digital Designer",
  eyebrow: "DEVELOPER × DESIGNER",
  headlineFirst: "VIMAL",
  headlineLast: "VAIBHAV",
  mantra: ["I DESIGN.", "I BUILD.", "I CREATE."],
  statement: "Designing meaningful digital experiences and engineering them into reality.",
  bio: "Vimal Vaibhav is a developer and designer who bridges the gap between visual design and technology. He creates digital experiences that are visually refined, intuitive and technically robust.",
  email: "vimalvaibhav.dev@gmail.com",
  github: "https://github.com/vimalvaibhav",
  linkedin: "https://linkedin.com/in/vimal-vaibhav",
  twitter: "https://x.com/vimalvaibhav",
  location: "Available Worldwide",
  availability: "Accepting select design & engineering commissions",
};

export const NAVIGATION_LINKS = [
  { name: "WORK", href: "#projects" },
  { name: "ABOUT", href: "#about" },
  { name: "DESIGN", href: "#skills" },
  { name: "DEVELOPMENT", href: "#skills" },
  { name: "CONTACT", href: "#contact" }
];

export const FLOATING_KEYWORDS = [
  { text: "DESIGN", speed: 0.15, size: "text-2xl sm:text-4xl", color: "text-purple-600/30" },
  { text: "DEVELOPMENT", speed: 0.25, size: "text-3xl sm:text-5xl", color: "text-slate-900/20" },
  { text: "UI", speed: 0.18, size: "text-xl sm:text-3xl", color: "text-purple-500/25" },
  { text: "UX", speed: 0.22, size: "text-2xl sm:text-4xl", color: "text-slate-900/15" },
  { text: "INTERACTION", speed: 0.3, size: "text-3xl sm:text-6xl", color: "text-purple-700/20" },
  { text: "CREATIVITY", speed: 0.12, size: "text-2xl sm:text-4xl", color: "text-slate-900/25" },
  { text: "PERFORMANCE", speed: 0.28, size: "text-xl sm:text-3xl", color: "text-purple-600/30" }
];

export const DESIGN_SKILLS = [
  { name: "UI DESIGN", desc: "Design systems, typography hierarchy & visual balance" },
  { name: "UX DESIGN", desc: "User flows, wireframing, personas & usability architecture" },
  { name: "VISUAL DESIGN", desc: "Art direction, brand identity & creative layouts" },
  { name: "INTERACTION DESIGN", desc: "Micro-animations, spatial transitions & gestures" },
  { name: "DESIGN SYSTEMS", desc: "Token architecture, component libraries & styleguides" },
  { name: "PROTOTYPING", desc: "Interactive Figma flows & motion mockups" }
];

export const DEV_SKILLS = [
  { name: "REACT", desc: "Modular component architecture, custom hooks & state" },
  { name: "JAVASCRIPT", desc: "Modern ES6+, async programming & Web APIs" },
  { name: "HTML", desc: "Semantic markup, accessibility & SEO foundation" },
  { name: "CSS", desc: "Modern Flex/Grid, keyframes & 3D CSS transforms" },
  { name: "TAILWIND", desc: "Utility-first design tokens & bespoke configurations" },
  { name: "GIT", desc: "Version control, branching workflows & GitHub CI/CD" },
  { name: "RESPONSIVE DEVELOPMENT", desc: "Pixel perfection across mobile, tablet & desktop" }
];

export const SIGNATURE_PROJECTS = [
  {
    id: "01",
    type: "01 — BRAND EXPERIENCE",
    title: "Apex Luxe Spatial",
    category: "Design-Focused Project",
    disciplines: ["DESIGN", "DEVELOPMENT"],
    description: "A luxury spatial web experience combining high-fashion visual identity with custom interactive 3D fluid motions.",
    tech: ["Art Direction", "Figma", "React", "Three.js", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    stats: { aesthetics: "Awwwards Nominee", performance: "60 FPS", typography: "Syne / Serif" },
    demoUrl: "https://github.com/vimalvaibhav",
    githubUrl: "https://github.com/vimalvaibhav"
  },
  {
    id: "02",
    type: "02 — WEB APPLICATION",
    title: "Pulse SaaS Intelligence",
    category: "Development-Focused Project",
    disciplines: ["DESIGN", "DEVELOPMENT"],
    description: "High-throughput telemetry dashboard architected with real-time data streaming and a minimalist Linear-inspired UI system.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Data Visualizations"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    stats: { throughput: "10k req/sec", latency: "14ms", uiTokens: "100% Modular" },
    demoUrl: "https://github.com/vimalvaibhav",
    githubUrl: "https://github.com/vimalvaibhav"
  },
  {
    id: "03",
    type: "03 — E-COMMERCE EXPERIENCE",
    title: "Aura Flagship Store",
    category: "Design + Development",
    disciplines: ["DESIGN", "DEVELOPMENT"],
    description: "An Apple-level minimal commerce experience with magnetic drawer cart, fluid micro-interactions, and instant checkout.",
    tech: ["Figma to Code", "React", "Context API", "CSS Grid", "Performance"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    stats: { conversion: "+42%", speed: "0.38s load", a11y: "100/100" },
    demoUrl: "https://github.com/vimalvaibhav",
    githubUrl: "https://github.com/vimalvaibhav"
  },
  {
    id: "04",
    type: "04 — INTERACTIVE WEBSITE",
    title: "Nexus AI Studio",
    category: "Creative Development",
    disciplines: ["DESIGN", "DEVELOPMENT"],
    description: "Generative AI workspace featuring contextual canvas tools, gesture interactions, and elegant light-mode glass reflections.",
    tech: ["Creative Dev", "React.js", "Tailwind CSS", "WebSockets"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    stats: { streaming: "Sub-50ms", delight: "Interactive", rating: "5.0/5" },
    demoUrl: "https://github.com/vimalvaibhav",
    githubUrl: "https://github.com/vimalvaibhav"
  }
];

export const SERVICES_3D = [
  { id: "01", name: "DIGITAL DESIGN", tag: "Visual Identity & Direction" },
  { id: "02", name: "WEB DESIGN", tag: "Creative Layouts & Systems" },
  { id: "03", name: "UI / UX", tag: "Wireframes to Production" },
  { id: "04", name: "FRONTEND DEVELOPMENT", tag: "Scalable Architecture" },
  { id: "05", name: "REACT DEVELOPMENT", tag: "Component-Driven Systems" },
  { id: "06", name: "INTERACTIVE EXPERIENCES", tag: "3D Motion & WebGL" }
];

export const PROCESS_STAGES = [
  {
    step: "01",
    title: "IDEA",
    subtitle: "Discovery & Vision",
    desc: "Uncovering core objectives, audience behaviors, and defining the creative and technical vision."
  },
  {
    step: "02",
    title: "WIREFRAME",
    subtitle: "UX Architecture",
    desc: "Mapping seamless user journeys, structural hierarchy, and rapid low-fidelity prototypes."
  },
  {
    step: "03",
    title: "DESIGN",
    subtitle: "Visual Perfection",
    desc: "Crafting bespoke typography, art direction, 3D assets, and polished high-fidelity design systems."
  },
  {
    step: "04",
    title: "DEVELOP",
    subtitle: "Modern Code",
    desc: "Engineering clean, modular React and Tailwind code with robust state and high-performance algorithms."
  },
  {
    step: "05",
    title: "REFINE",
    subtitle: "Polish & Motion",
    desc: "Tuning micro-interactions, responsive breakpoints, smooth frame rates, and accessibility."
  },
  {
    step: "06",
    title: "LAUNCH",
    subtitle: "Production Ready",
    desc: "Deploying to edge CDN infrastructure with lightning-fast load times and ongoing evolution."
  }
];

export const TESTIMONIALS_3D = [
  {
    quote: "Vimal possesses that rare dual ability: he designs breathtaking interfaces and then writes clean, robust code to bring them to life with total precision.",
    author: "Elena Rostova",
    role: "Creative Director",
    company: "Aura Studios",
    depth: "translate-z-30",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "His eye for typography, spatial balance, and responsive performance makes every project feel like an award-winning digital experience.",
    author: "Marcus Chen",
    role: "VP of Product",
    company: "Synthetix Labs",
    depth: "translate-z-50",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "Vimal bridges design and engineering flawlessly. He delivered our e-commerce platform ahead of schedule with remarkable craft.",
    author: "Alex Morgan",
    role: "Founder & CEO",
    company: "Apex Spatial",
    depth: "translate-z-20",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  }
];
