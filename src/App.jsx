import React, { useEffect, useRef, useState } from 'react';
import profileImg from './assets/me.jpeg';

// ================= LIGHTWEIGHT SCROLL REVEAL COMPONENT =================
const ScrollReveal = ({ children, className = "" }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
        isIntersecting 
          ? "opacity-100 translate-y-0 filter blur-0" 
          : "opacity-0 translate-y-12 filter blur-[2px]"
      } ${className}`}
    >
      {children}
    </div>
  );
};

// ================= INLINE SVG ICONS =================
const Github = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
);
const Linkedin = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const Mail = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const Trophy = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"/><path d="M12 2a6 6 0 0 1 6 6c0 3.3-2 6-6 6s-6-2.7-6-6a6 6 0 0 1 6-6z"/></svg>
);
const Code2 = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
);
const BookOpen = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
);
const ExternalLink = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
);
const Check = ({ size = 16, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 6 9 17l-5-5"/></svg>
);
const ChevronDown = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m6 9 6 6 6-6"/></svg>
);
const Briefcase = ({ size = 20, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
);

function App() {
  return (
    <div className="bg-[#030303] text-zinc-100 min-h-screen relative overflow-x-hidden bg-grid-pattern selection:bg-cyan-500/30 selection:text-white">
    
    {/* Global Top Spotlight - Spills beautiful soft light downwards */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-gradient-to-b from-cyan-500/10 via-purple-500/5 to-transparent rounded-full blur-[120px] pointer-events-none z-0" />
    
      {/* Dynamic Background Accents */}
      <div className="absolute top-20 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-60"></div>
      <div className="absolute top-40 left-12 w-1.5 h-1.5 bg-green-500 rounded-full opacity-60"></div>
      <div className="absolute top-[600px] right-1/4 w-1.5 h-1.5 bg-purple-500 rounded-full opacity-60"></div>

      {/* ================= HERO SECTION ================= */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        <p className="text-zinc-500 tracking-[0.2em] text-xs font-semibold uppercase mb-4 cursor-default transition-all duration-300 hover:tracking-[0.35em] hover:text-cyan-400">
          Software Engineer • Competitive Programmer
        </p>
        
        <div className="overflow-hidden py-2 mb-6 block">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none max-w-4xl select-none animate-text-reveal will-change-transform text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-300 hover:to-cyan-400 transition-all duration-500">
            SAUMYA SINGH
          </h1>
        </div>
        
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-10 animate-fade-delayed">
          B.Tech CSE student building high-performance solutions through clean architectures and algorithmic precision.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-delayed">
          <a href="#work" className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-cyan-400 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-300 text-sm">
            View My Work
          </a>
<a
  href="./Saumya_Singh_Resume.pdf" 
  download="Saumya_Singh_Resume.pdf" 
  className="bg-black text-white font-semibold px-6 py-3 rounded-md border border-zinc-800 hover:bg-zinc-900 hover:border-purple-500/50 hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all duration-300 text-sm"
>            Download Resume
          </a>
        </div>

        <div className="flex gap-4 items-center animate-icons-delayed">
          <a href="https://github.com/saumyasingh-111" className="group p-3 bg-[#0e0e0e] border border-zinc-800/80 rounded-xl text-zinc-400 hover:text-white hover:border-zinc-500 hover:scale-110 hover:-translate-y-1 transition-all duration-300">
            <Github size={20} />
          </a>
          <div className="flex flex-col items-center gap-4">
            <a href="https://www.linkedin.com/in/saumya-singh-417a72316/" className="group p-3 bg-[#0e0e0e] border border-zinc-800/80 rounded-xl text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 hover:-translate-y-1 transition-all duration-300">
              <Linkedin size={20} />
            </a>
            <ChevronDown size={18} className="text-zinc-600 animate-bounce mt-2" />
          </div>
          <a href="mailto:saumyasingh3234@gmail.com" className="group p-3 bg-[#0e0e0e] border border-zinc-800/80 rounded-xl text-zinc-400 hover:text-purple-400 hover:border-purple-500/40 hover:scale-110 hover:-translate-y-1 transition-all duration-300">
            <Mail size={20} />
          </a>
        </div>
      </section>

     {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="w-full bg-[#060608] border-y border-zinc-900/60 py-24 relative overflow-hidden">
        {/* Subtle decorative background light flare just for this lane */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />
        
        {/* Added wrapper container here to fix alignment and edge-bleeding */}
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Image Container */}
            <div className="md:col-span-5 flex justify-center">
              <div className="group border border-zinc-800/80 p-2 rounded-2xl bg-[#0b0b0d] max-w-xs md:max-w-full relative overflow-hidden transition-all duration-500 hover:border-zinc-700 hover:shadow-[0_0_40px_rgba(34,211,238,0.05)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <img 
                  src={profileImg}
                  alt="Saumya Singh" 
                  className="rounded-xl filter brightness-95 grayscale-[10%] object-cover w-full aspect-[3/4] transition-all duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
                />
              </div>
            </div>

            {/* Right Column: Bio Content */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <p className="text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">// Biography</p>
                <h2 className="text-4xl font-black tracking-tight text-white relative inline-block group">
                  About Me
                  <span className="absolute bottom-0 left-0 w-12 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </h2>
              </div>
              
              <p className="text-zinc-400/90 leading-relaxed text-[15px]">
                I'm a computer science engineering student driven by a love for structural problem-solving, clean codebases, and intuitive digital experiences.
              </p>
              <p className="text-zinc-400/90 leading-relaxed text-[15px]">
                With a solid foundation in data structures and algorithmic complexity, I actively engage in competitive programming to test and sharpen my logic under runtime constraints. Concurrently, I build web architectures that balance responsive user layouts with clean back-end logic.
              </p>
              <p className="text-zinc-400/90 leading-relaxed text-[15px]">
                I thrive at the intersection of technical excellence and creative design, continuously finding patterns to build faster, cleaner solutions.
              </p>
            </div>

          </ScrollReveal>
        </div>
      </section>

      {/* ================= QUICK STATS CARDS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Card 1: Competitive Programming */}
            <div className="group p-6 bg-[#050507] border border-zinc-900/80 rounded-2xl flex flex-col justify-between min-h-[150px] transition-all duration-300 hover:-translate-y-1.5 hover:border-yellow-500/30 hover:shadow-[0_15px_30px_-10px_rgba(234,179,8,0.1)]">
              <div className="p-2.5 bg-zinc-900/30 border border-zinc-900 w-fit rounded-xl group-hover:bg-yellow-500/5 group-hover:border-yellow-500/20 transition-colors duration-300">
                <Trophy className="text-zinc-500 transition-colors duration-300 group-hover:text-yellow-400" size={20} />
              </div>
              <div className="mt-4">
                <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider mb-1">Competitive Programming</p>
                <h3 className="text-xl font-bold tracking-tight text-zinc-200 group-hover:text-white transition-colors">2★ CodeChef</h3>
              </div>
            </div>

            {/* Card 2: Full-Stack Dev */}
            <div className="group p-6 bg-[#050507] border border-zinc-900/80 rounded-2xl flex flex-col justify-between min-h-[150px] transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/30 hover:shadow-[0_15px_30px_-10px_rgba(6,182,212,0.1)]">
              <div className="p-2.5 bg-zinc-900/30 border border-zinc-900 w-fit rounded-xl group-hover:bg-cyan-500/5 group-hover:border-cyan-500/20 transition-colors duration-300">
                <Code2 className="text-zinc-500 transition-colors duration-300 group-hover:text-cyan-400" size={20} />
              </div>
              <div className="mt-4">
                <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider mb-1">Full-Stack Dev</p>
                <h3 className="text-xl font-bold tracking-tight text-zinc-200 group-hover:text-white transition-colors">MERN Stack</h3>
              </div>
            </div>

            {/* Card 3: Problems Solved */}
            <div className="group p-6 bg-[#050507] border border-zinc-900/80 rounded-2xl flex flex-col justify-between min-h-[150px] transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-500/30 hover:shadow-[0_15px_30px_-10px_rgba(168,85,247,0.1)]">
              <div className="p-2.5 bg-zinc-900/30 border border-zinc-900 w-fit rounded-xl group-hover:bg-purple-500/5 group-hover:border-purple-500/20 transition-colors duration-300">
                <BookOpen className="text-zinc-500 transition-colors duration-300 group-hover:text-purple-400" size={20} />
              </div>
              <div className="mt-4">
                <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider mb-1">Problems Solved</p>
                <h3 className="text-xl font-bold tracking-tight text-zinc-200 group-hover:text-white transition-colors">250+</h3>
              </div>
            </div>

            {/* Card 4: Major Projects */}
            <div className="group p-6 bg-[#050507] border border-zinc-900/80 rounded-2xl flex flex-col justify-between min-h-[150px] transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500/30 hover:shadow-[0_15px_30px_-10px_rgba(16,185,129,0.1)]">
              <div className="p-2.5 bg-zinc-900/30 border border-zinc-900 w-fit rounded-xl group-hover:bg-emerald-500/5 group-hover:border-emerald-500/20 transition-colors duration-300">
                <ExternalLink className="text-zinc-500 transition-colors duration-300 group-hover:text-emerald-400" size={20} />
              </div>
              <div className="mt-4">
                <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider mb-1">Major Projects</p>
                <h3 className="text-xl font-bold tracking-tight text-zinc-200 group-hover:text-white transition-colors">3+</h3>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* ================= FEATURED WORK SECTION ================= */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-12">
        <ScrollReveal>
          <h2 className="text-4xl font-bold tracking-tight mb-10 relative inline-block group">
            Featured Work
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Project 1 */}
            <div className="group p-6 bg-[#0a0a0a] border border-zinc-900 rounded-2xl flex flex-col justify-between min-h-[280px] transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.1)]">
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors duration-300">Artzy</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Full-stack accommodation platform with integrated session handling, user authentication, and schema validation logic.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Node.js', 'Express', 'MongoDB', 'Bootstrap'].map((tag) => (
                    <span key={tag} className="text-xs text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800/60">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <a href="https://github.com/saumyasingh-111/Artzy" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 bg-zinc-900 text-xs font-semibold px-4 py-2 rounded-lg border border-zinc-800 text-zinc-300 hover:bg-emerald-600 hover:border-emerald-500 transition-all duration-200">
                  <Github size={14} /> Code
                </a>
               <a href="https://wanderlust-ahm4.onrender.com/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 bg-zinc-900 text-xs font-semibold px-4 py-2 rounded-lg border border-zinc-800 text-zinc-300 hover:bg-emerald-600 hover:border-emerald-500 transition-all duration-200">
                  <ExternalLink size={14} /> Live
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group p-6 bg-[#0a0a0a] border border-zinc-900 rounded-2xl flex flex-col justify-between min-h-[280px] transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.1)]">
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-300">To-Do App</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Modern task management engine with decoupled reactive hooks and state synchronization layers.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React', 'JavaScript', 'CSS'].map((tag) => (
                    <span key={tag} className="text-xs text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800/60">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <a href="https://github.com/saumyasingh-111/Todo-List" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 bg-zinc-900 text-xs font-semibold px-4 py-2 rounded-lg border border-zinc-800 text-zinc-300 hover:bg-cyan-600 hover:border-cyan-500 transition-all duration-200">
                  <Github size={14} /> Code
                </a>
                
              </div>
            </div>

            {/* Project 3 */}
            <div className="group p-6 bg-[#0a0a0a] border border-zinc-900 rounded-2xl flex flex-col justify-between min-h-[280px] transition-all duration-300 hover:border-purple-500/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.1)]">
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors duration-300">Simon Says Game</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Asynchronous sequential memory evaluation script incorporating dynamic state delays and flash timers.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['HTML', 'CSS', 'JavaScript'].map((tag) => (
                    <span key={tag} className="text-xs text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800/60">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
               <a href="https://github.com/saumyasingh-111/simon-says-game" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 bg-zinc-900 text-xs font-semibold px-4 py-2 rounded-lg border border-zinc-800 text-zinc-300 hover:bg-purple-600 hover:border-purple-500 transition-all duration-200">
                  <Github size={14} /> Code
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

{/* ================= EXPERIENCE SECTION ================= */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-16">
        <ScrollReveal>
          <h2 className="text-4xl font-bold tracking-tight mb-12 relative inline-block group">
            Experience
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </h2>
          
          <div className="relative border-l border-zinc-900 pl-6 ml-2 space-y-10">
            {/* Talbros Card */}
            <div className="group relative">
              {/* Timeline Connector Bulb */}
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-zinc-800 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.6)] transition-all duration-300"></div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-zinc-200 group-hover:text-white transition-colors flex items-center gap-2">
                    <Briefcase size={18} className="text-zinc-600 group-hover:text-cyan-400 transition-colors" />
                    Software Engineering Intern
                  </h3>
                  <p className="text-zinc-400 text-sm font-medium mt-1">Talbros Automotive Components Ltd.</p>
                </div>
                <span className="text-xs font-semibold text-zinc-500 bg-zinc-900/40 px-3 py-1 rounded-full border border-zinc-800/80 w-fit">
                  2026
                </span>
              </div>
              
              <ul className="space-y-2 text-sm text-zinc-400 list-disc list-inside leading-relaxed pl-1">
                <li>Collaborated on designing modular components and scalable frontend structures to enhance core operational layouts.</li>
                <li>Participated in refining codebases, debugging asynchronous logical processing trees, and optimizing viewports.</li>
                <li>Gained hands-on insights into production architectures, balancing system efficiency constraints with cross-functional team pipelines.</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </section>

     {/* ================= SKILLS SECTION ================= */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
        <ScrollReveal>
          {/* Refined Section Header Layout */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">// Technical Stack</p>
              <h2 className="text-4xl font-black tracking-tight text-white">
                Skills & Expertise
              </h2>
            </div>
            <span className="h-[1px] bg-zinc-900 flex-grow md:mx-8 hidden md:block"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Category 1: Programming */}
            <div className="bg-[#050505] border border-zinc-900 p-7 rounded-2xl relative overflow-hidden group hover:border-zinc-800 transition-all duration-300">
              {/* Top border glowing laser link line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-zinc-400 font-bold text-sm tracking-wider uppercase mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                Programming
              </h3>
              
              <div className="flex flex-wrap gap-2.5">
                {['C++', 'JavaScript', 'Python', 'HTML', 'CSS'].map((skill) => (
                  <span key={skill} className="text-xs font-medium text-zinc-400 bg-zinc-900/40 border border-zinc-900/80 px-3.5 py-2 rounded-xl transition-all duration-200 hover:bg-zinc-900 hover:border-cyan-500/30 hover:text-zinc-200 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 2: Web Architecture */}
            <div className="bg-[#050505] border border-zinc-900 p-7 rounded-2xl relative overflow-hidden group hover:border-zinc-800 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-zinc-400 font-bold text-sm tracking-wider uppercase mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                Web Architecture
              </h3>
              
              <div className="flex flex-wrap gap-2.5">
                {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'].map((skill) => (
                  <span key={skill} className="text-xs font-medium text-zinc-400 bg-zinc-900/40 border border-zinc-900/80 px-3.5 py-2 rounded-xl transition-all duration-200 hover:bg-zinc-900 hover:border-purple-500/30 hover:text-zinc-200 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 3: Core Concepts */}
            <div className="bg-[#050505] border border-zinc-900 p-7 rounded-2xl relative overflow-hidden group hover:border-zinc-800 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-zinc-400 font-bold text-sm tracking-wider uppercase mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Core Concepts
              </h3>
              
              <div className="flex flex-wrap gap-2.5">
                {['DSA', 'OOP', 'Git/GitHub', 'DBMS', 'Responsive Design'].map((skill) => (
                  <span key={skill} className="text-xs font-medium text-zinc-400 bg-zinc-900/40 border border-zinc-900/80 px-3.5 py-2 rounded-xl transition-all duration-200 hover:bg-zinc-900 hover:border-emerald-500/30 hover:text-zinc-200 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </ScrollReveal>
      </section>

     {/* ================= COMPETITIVE PROGRAMMING SECTION ================= */}
      <section id="coding" className="w-full bg-[#060608] border-y border-zinc-900/60 py-24 relative overflow-hidden">
        {/* Subtle decorative background light flare to balance out the section */}
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Added wrapper container here to enforce perfect grid alignment */}
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div>
              <p className="text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">// Performance Metrics</p>
              <h2 className="text-4xl font-black tracking-tight text-white relative inline-block group mb-12">
                Competitive Programming
                <span className="absolute bottom-0 left-0 w-12 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1: CodeChef */}
              <div className="group p-8 bg-[#050507] border border-zinc-900/80 rounded-2xl transition-all duration-300 hover:border-orange-500/30 hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.08)]">
                <a 
                  href="https://www.codechef.com/users/saumya11132" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 mb-8 text-xl font-bold text-zinc-300 group-hover:text-orange-400 transition-colors"
                >
                  CodeChef 
                  <ExternalLink size={16} className="text-zinc-600 group-hover:text-orange-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-zinc-900/60 pb-3.5">
                    <span className="text-zinc-500 text-sm font-medium">Rating</span>
                    <span className="font-mono text-sm font-semibold text-zinc-300 group-hover:text-orange-300 transition-colors bg-zinc-900/40 px-2.5 py-1 rounded-md border border-zinc-900/60">
                      1493
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-zinc-900/60 pb-3.5">
                    <span className="text-zinc-500 text-sm font-medium">Stars</span>
                    <span className="font-mono text-sm font-semibold text-zinc-300 group-hover:text-orange-300 transition-colors bg-zinc-900/40 px-2.5 py-1 rounded-md border border-zinc-900/60">
                      2★
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-0.5">
                    <span className="text-zinc-500 text-sm font-medium">Problems Solved</span>
                    <span className="font-mono text-sm font-semibold text-zinc-300 group-hover:text-orange-300 transition-colors bg-zinc-900/40 px-2.5 py-1 rounded-md border border-zinc-900/60">
                      250+
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: Codeforces */}
              <div className="group p-8 bg-[#050507] border border-zinc-900/80 rounded-2xl transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.08)]">
                <a 
                  href="https://codeforces.com/profile/saumya_dev111" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 mb-8 text-xl font-bold text-zinc-300 group-hover:text-blue-400 transition-colors"
                >
                  Codeforces 
                  <ExternalLink size={16} className="text-zinc-600 group-hover:text-blue-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-zinc-900/60 pb-3.5">
                    <span className="text-zinc-500 text-sm font-medium">Rating</span>
                    <span className="font-mono text-sm font-semibold text-zinc-300 group-hover:text-blue-300 transition-colors bg-zinc-900/40 px-2.5 py-1 rounded-md border border-zinc-900/60">
                      985
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-zinc-900/60 pb-3.5">
                    <span className="text-zinc-500 text-sm font-medium">Rank</span>
                    <span className="font-mono text-sm font-semibold text-zinc-300 group-hover:text-blue-300 transition-colors bg-zinc-900/40 px-2.5 py-1 rounded-md border border-zinc-900/60">
                      Newbie
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-0.5">
                    <span className="text-zinc-500 text-sm font-medium">Contests</span>
                    <span className="font-mono text-sm font-semibold text-zinc-300 group-hover:text-blue-300 transition-colors bg-zinc-900/40 px-2.5 py-1 rounded-md border border-zinc-900/60">
                      10+
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= CONNECT & CONTACT SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center flex flex-col items-center">
        <ScrollReveal className="w-full flex flex-col items-center">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Let's Connect</h2>
          <p className="text-zinc-500 max-w-md font-light text-sm mb-8">
            I'm always open to new opportunities, collaborations, or discussing algorithmic puzzles.
          </p>
          
          <div className="flex gap-4 justify-center mb-12">
            <a href="mailto:saumyasingh3234@gmail.com" className="bg-white text-black font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2 text-xs transition-all hover:bg-cyan-400 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
              <Mail size={14} /> Email Me
            </a>
            <a href="https://www.linkedin.com/in/saumya-singh-417a72316/" className="bg-black text-white font-semibold px-5 py-2.5 rounded-lg border border-zinc-800 flex items-center gap-2 text-xs hover:bg-zinc-900 hover:border-purple-500/40 hover:scale-105 transition-all">
              <Linkedin size={14} /> LinkedIn
            </a>
          </div>

          <div className="group w-full max-w-3xl bg-[#0a0a0a] border border-zinc-900 rounded-2xl p-8 space-y-3 transition-all duration-500 hover:border-zinc-700 hover:bg-zinc-950/40">
            <p className="text-zinc-600 text-xs font-semibold tracking-wider uppercase">Contact Information</p>
            <p className="text-xl font-bold text-zinc-400 tracking-tight select-all group-hover:text-cyan-400 transition-colors">saumyasingh3234@gmail.com</p>
            <p className="text-lg font-bold text-zinc-400 tracking-tight group-hover:text-purple-400 transition-colors">+91 8795618652</p>
            <p className="text-zinc-500 text-xs font-medium pt-1">Kanpur, India</p>
          </div>
        </ScrollReveal>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-zinc-900 py-8 text-center text-xs text-zinc-600">
        <p>© 2026 Saumya Singh. Engineered with React and Tailwind CSS.</p>
      </footer>

    </div>
  );
}

export default App;