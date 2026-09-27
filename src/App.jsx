import { useEffect, useRef, useState } from 'react';
import profileImg from './assets/about/me.jpeg';
import aiManthanImg from './assets/activities/ai-manthan.png';
import bobHacksImg from './assets/hackathons/bob-hacks.png';
import iitgImg from './assets/hackathons/iitg-prakriti.jpg';
import bhartiyaImg from './assets/hackathons/bhartiya-antariksh.png';
import talbrosImg from './assets/experience/talbros.png';
import conferenceImg from './assets/activities/conference-volunteering.jpg';

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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isIntersecting 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
};

// ================= MINIMAL LUXURY SVG ICONS =================
const Github = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
);
const Linkedin = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const Mail = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const ExternalLink = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
);
const Download = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
);
const ArrowUpRight = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
);
const Trophy = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"/><path d="M12 2a6 6 0 0 1 6 6c0 3.3-2 6-6 6s-6-2.7-6-6a6 6 0 0 1 6-6z"/></svg>
);
const Star = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);
const Briefcase = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
);
const Code2 = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
);
const BookOpen = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
);
const Award = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
);
const Menu = ({ size = 22, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);
const X = ({ size = 22, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#work" },
    { label: "Hackathons", href: "#hackathons" },
    { label: "Activities", href: "#activities" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "CP", href: "#coding" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="bg-[#FAF7F2] text-[#1A1715] min-h-screen relative overflow-x-hidden selection:bg-[#E8C5C8] selection:text-[#1A1715]">
      
      {/* ================= MINIMAL LUXURY STICKY NAVBAR ================= */}
      <header className="sticky top-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E8E2D9] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Brand Monogram / Signature */}
          <a href="#hero" className="group flex flex-col items-start focus:outline-none">
            <span className="font-serif-display text-xl tracking-[0.18em] font-semibold text-[#1A1715] group-hover:text-[#C97A7E] transition-colors uppercase">
              Saumya Singh
            </span>
            <span className="text-[9px] tracking-[0.3em] uppercase text-[#736B63] font-medium">
              Portfolio 2026
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.22em] font-medium text-[#5A5550] hover:text-[#1A1715] hover:border-b hover:border-[#DDA7A5] pb-1 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Resume */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="./Saumya_Singh_Resume.pdf"
              download="Saumya_Singh_Resume.pdf"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-semibold px-4 py-2 border border-[#D5CCC0] rounded-full text-[#1A1715] hover:bg-[#F2ECE3] hover:border-[#1A1715] transition-all duration-300"
            >
              <Download size={13} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1A1715] hover:text-[#C97A7E] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-[#E8E2D9] bg-[#FAF7F2] px-6 py-6 space-y-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs uppercase tracking-[0.25em] font-semibold text-[#5A5550] hover:text-[#C97A7E] py-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-[#E8E2D9]">
                <a
                  href="./Saumya_Singh_Resume.pdf"
                  download="Saumya_Singh_Resume.pdf"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold px-4 py-2 bg-[#1A1715] text-[#FAF7F2] rounded-full"
                >
                  <Download size={13} /> Download Resume
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ================= HERO SECTION ================= */}
      <section id="hero" className="min-h-[75vh] sm:min-h-[80vh] flex flex-col justify-center items-center text-center px-6 relative py-14 sm:py-20 max-w-4xl mx-auto w-full">
        
        {/* Subtle Luxury Ambient Radial Flare (Very soft nude blush) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[650px] h-[350px] bg-[#F7EBE8]/50 rounded-full blur-[100px] pointer-events-none -z-10" />

        {/* Small Eyebrow Text */}
        <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DDA7A5]"></span>
          <p className="text-[#736B63] tracking-[0.25em] text-[10px] sm:text-[11px] font-semibold uppercase">
            Software Engineer • Competitive Programmer
          </p>
          <span className="w-1.5 h-1.5 rounded-full bg-[#DDA7A5]"></span>
        </div>

        {/* Flowing Cursive / Signature "Saumya" */}
        <div className="py-0 sm:py-1">
          <h1 className="font-signature text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11rem] font-normal text-[#1A1715] leading-[1.05] sm:leading-[1] select-none transition-all duration-700 animate-text-reveal">
            Saumya
          </h1>
        </div>

        {/* Short Introduction */}
        <p className="text-[#5A5550] text-base sm:text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed mt-3 sm:mt-4 mb-8 sm:mb-9 animate-fade-delayed">
          B.Tech CSE student building through problem solving, competitive programming, and technology.
        </p>

        {/* Minimal Luxury Buttons */}
        <div className="flex flex-wrap gap-4 justify-center items-center mb-8 sm:mb-9 animate-fade-delayed">
          <a
            href="#work"
            className="bg-[#1A1715] text-[#FAF7F2] tracking-[0.18em] text-xs uppercase font-medium px-8 py-3.5 rounded-full hover:bg-[#332F2B] hover:scale-[1.02] transition-all duration-300 shadow-sm"
          >
            View My Work
          </a>
          <a
            href="./Saumya_Singh_Resume.pdf"
            download="Saumya_Singh_Resume.pdf"
            className="inline-flex items-center gap-2 bg-[#FFFFFF] text-[#1A1715] border border-[#D5CCC0] tracking-[0.18em] text-xs uppercase font-medium px-7 py-3.5 rounded-full hover:bg-[#F2ECE3] hover:border-[#1A1715] hover:scale-[1.02] transition-all duration-300 shadow-xs"
          >
            <Download size={14} />
            Download Resume
          </a>
        </div>

        {/* Refined Social Icons */}
        <div className="flex gap-4 justify-center items-center animate-icons-delayed">
          <a
            href="https://github.com/saumyasingh-111"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="group p-3 bg-white border border-[#E5DED4] rounded-full text-[#5A5550] hover:text-[#1A1715] hover:border-[#C97A7E] hover:scale-105 transition-all duration-300 shadow-xs"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/saumya-singh-417a72316/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="group p-3 bg-white border border-[#E5DED4] rounded-full text-[#5A5550] hover:text-[#1A1715] hover:border-[#C97A7E] hover:scale-105 transition-all duration-300 shadow-xs"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:saumyasingh3234@gmail.com"
            aria-label="Send Email"
            className="group p-3 bg-white border border-[#E5DED4] rounded-full text-[#5A5550] hover:text-[#1A1715] hover:border-[#C97A7E] hover:scale-105 transition-all duration-300 shadow-xs"
          >
            <Mail size={18} />
          </a>
        </div>

      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="w-full py-28 border-t border-[#E8E2D9] bg-[#FAF7F2] relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Editorial Framed Portrait */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-sm">
                
                {/* Asymmetric Luxury Background Mat */}
                <div className="absolute -inset-3 bg-[#F2ECE3] rounded-2xl -rotate-1 group-hover:rotate-0 transition-transform duration-500 -z-10 border border-[#E5DED4]"></div>
                
                <div className="relative bg-white p-3 rounded-xl border border-[#E5DED4] shadow-sm overflow-hidden">
                  <img 
                    src={profileImg}
                    alt="Saumya Singh" 
                    className="rounded-lg object-cover object-[center_35%] w-full aspect-[3/4] transition-all duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="pt-3 pb-1 px-1 flex justify-between items-center text-[10px] tracking-[0.2em] uppercase text-[#736B63] font-medium">
                    <span>Saumya Singh</span>
                    <span>CSE • 2026</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Editorial Biography */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <p className="text-[#C97A7E] text-[11px] font-semibold tracking-[0.25em] uppercase mb-2">
                  01 / Biography
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A1715]">
                  Engineering with logic, elegance & curiosity.
                </h2>
                <div className="w-16 h-[2px] bg-[#DDA7A5] mt-4"></div>
              </div>
              
              <p className="text-[#5A5550] leading-relaxed text-[15px] sm:text-[16px] font-light">
                I'm a computer science engineering student driven by a love for structural problem-solving, clean codebases, and intuitive digital experiences.
              </p>
              <p className="text-[#5A5550] leading-relaxed text-[15px] sm:text-[16px] font-light">
                With a solid foundation in data structures and algorithmic complexity, I actively engage in competitive programming to test and sharpen my logic under runtime constraints. Concurrently, I build web architectures that balance responsive user layouts with clean back-end logic.
              </p>
              <p className="text-[#5A5550] leading-relaxed text-[15px] sm:text-[16px] font-light">
                I thrive at the intersection of technical excellence and creative design, continuously finding patterns to build faster, cleaner solutions.
              </p>

              {/* Minimal Luxury Quote / Note */}
              <div className="pt-4 border-t border-[#E8E2D9] flex items-center gap-3">
                <span className="font-serif-display italic text-lg text-[#C97A7E]">"</span>
                <p className="text-xs uppercase tracking-[0.18em] text-[#736B63] font-medium">
                  Building dependable software through algorithmic precision.
                </p>
              </div>
            </div>

          </ScrollReveal>
        </div>
      </section>

      {/* ================= QUICK STATS / HIGHLIGHTS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Stat 1: Competitive Programming */}
            <div className="group p-6 bg-white border border-[#E5DED4] rounded-2xl flex flex-col justify-between min-h-[140px] transition-all duration-300 hover:-translate-y-1 hover:border-[#DDA7A5] shadow-xs">
              <div className="flex justify-between items-start">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#736B63] font-semibold">Competitive</span>
                <Trophy className="text-[#DDA7A5] transition-colors group-hover:text-[#C97A7E]" size={18} />
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold tracking-tight text-[#1A1715]">2★ CodeChef</h3>
                <p className="text-[#736B63] text-xs font-light mt-0.5">Rating 1493 • Active Contestant</p>
              </div>
            </div>

            {/* Stat 2: Full-Stack Dev */}
            <div className="group p-6 bg-white border border-[#E5DED4] rounded-2xl flex flex-col justify-between min-h-[140px] transition-all duration-300 hover:-translate-y-1 hover:border-[#DDA7A5] shadow-xs">
              <div className="flex justify-between items-start">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#736B63] font-semibold">Architecture</span>
                <Code2 className="text-[#DDA7A5] transition-colors group-hover:text-[#C97A7E]" size={18} />
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold tracking-tight text-[#1A1715]">MERN Stack</h3>
                <p className="text-[#736B63] text-xs font-light mt-0.5">Full-Stack Web Engineering</p>
              </div>
            </div>

            {/* Stat 3: Problems Solved */}
            <div className="group p-6 bg-white border border-[#E5DED4] rounded-2xl flex flex-col justify-between min-h-[140px] transition-all duration-300 hover:-translate-y-1 hover:border-[#DDA7A5] shadow-xs">
              <div className="flex justify-between items-start">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#736B63] font-semibold">Practice</span>
                <BookOpen className="text-[#DDA7A5] transition-colors group-hover:text-[#C97A7E]" size={18} />
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold tracking-tight text-[#1A1715]">250+</h3>
                <p className="text-[#736B63] text-xs font-light mt-0.5">Algorithmic Problems Solved</p>
              </div>
            </div>

            {/* Stat 4: Major Projects */}
            <div className="group p-6 bg-white border border-[#E5DED4] rounded-2xl flex flex-col justify-between min-h-[140px] transition-all duration-300 hover:-translate-y-1 hover:border-[#DDA7A5] shadow-xs">
              <div className="flex justify-between items-start">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#736B63] font-semibold">Creations</span>
                <ExternalLink className="text-[#DDA7A5] transition-colors group-hover:text-[#C97A7E]" size={18} />
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold tracking-tight text-[#1A1715]">Projects</h3>
                <p className="text-[#736B63] text-xs font-light mt-0.5">Production & Interactive Apps</p>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* ================= FEATURED WORK / PROJECTS ================= */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-24 border-t border-[#E8E2D9]">
        <ScrollReveal>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <p className="text-[#C97A7E] text-[11px] font-semibold tracking-[0.25em] uppercase mb-2">
                02 / Portfolio
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A1715]">
                Featured Projects
              </h2>
            </div>
            <p className="text-[#736B63] text-xs uppercase tracking-[0.2em] font-medium max-w-xs">
              Functional engineering built with modern web technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            
            {/* Project 1: Artzy */}
            <div className="group bg-white border border-[#E5DED4] rounded-2xl p-8 flex flex-col justify-between transition-all duration-500 hover:border-[#DDA7A5] hover:shadow-md">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-serif-display text-2xl font-bold text-[#C97A7E]">01</span>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#736B63] bg-[#FAF7F2] border border-[#E5DED4] px-3 py-1 rounded-full font-semibold">
                    Full-Stack Application
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1715] mb-3 group-hover:text-[#C97A7E] transition-colors">
                  Artzy
                </h3>

                <p className="text-[#5A5550] text-sm leading-relaxed mb-6 font-light">
                  Full-stack accommodation platform with integrated session handling, user authentication, and schema validation logic. Engineered with responsive design and robust data modeling.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {['Node.js', 'Express', 'MongoDB', 'Bootstrap', 'REST API'].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-[#5A5550] bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#E5DED4] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-[#E8E2D9]">
                <a
                  href="https://github.com/saumyasingh-111/Artzy"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1A1715] text-[#FAF7F2] text-xs tracking-wider uppercase font-medium px-5 py-2.5 rounded-full hover:bg-[#332F2B] transition-colors"
                >
                  <Github size={14} /> View Code
                </a>
                <a
                  href="https://wanderlust-ahm4.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#1A1715] border border-[#D5CCC0] text-xs tracking-wider uppercase font-medium px-5 py-2.5 rounded-full hover:bg-[#F2ECE3] hover:border-[#1A1715] transition-colors"
                >
                  <ArrowUpRight size={14} /> Live Demo
                </a>
              </div>
            </div>

            {/* Project 2: Simon Says Game */}
            <div className="group bg-white border border-[#E5DED4] rounded-2xl p-8 flex flex-col justify-between transition-all duration-500 hover:border-[#DDA7A5] hover:shadow-md">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-serif-display text-2xl font-bold text-[#C97A7E]">02</span>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#736B63] bg-[#FAF7F2] border border-[#E5DED4] px-3 py-1 rounded-full font-semibold">
                    Interactive Logic Engine
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1715] mb-3 group-hover:text-[#C97A7E] transition-colors">
                  Simon Says Game
                </h3>

                <p className="text-[#5A5550] text-sm leading-relaxed mb-6 font-light">
                  Asynchronous sequential memory evaluation script incorporating dynamic state delays, randomized cue triggers, and flash timers for progressive difficulty evaluation.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {['HTML5', 'CSS3', 'JavaScript', 'DOM Logic', 'Async / Await'].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-[#5A5550] bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#E5DED4] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-[#E8E2D9]">
                <a
                  href="https://github.com/saumyasingh-111/simon-says-game"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1A1715] text-[#FAF7F2] text-xs tracking-wider uppercase font-medium px-5 py-2.5 rounded-full hover:bg-[#332F2B] transition-colors"
                >
                  <Github size={14} /> View Code
                </a>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* ================= NEW HACKATHONS SECTION ================= */}
      <section id="hackathons" className="w-full py-24 bg-[#F5EFEB] border-t border-[#E8E2D9] relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[#C97A7E] text-[11px] font-semibold tracking-[0.25em] uppercase mb-2">
                03 / Competitions
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A1715]">
                Hackathons & Challenges
              </h2>
              <div className="w-16 h-[2px] bg-[#DDA7A5] mx-auto mt-4 mb-4"></div>
              <p className="text-[#736B63] text-sm font-light">
                High-intensity collaborative problem solving and technical innovation sprints.
              </p>
            </div>

            {/* Hackathon Editorial Timeline / Showcase Cards */}
            <div className="space-y-12">
              
              {/* Entry 1: BOB Hacks '26 */}
              <div className="group bg-white border border-[#E5DED4] rounded-2xl p-6 md:p-8 lg:p-10 shadow-xs transition-all duration-500 hover:border-[#DDA7A5] hover:shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Text Details */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="bg-[#FAF7F2] text-[#C97A7E] border border-[#DDA7A5] font-semibold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                        <Trophy size={13} /> 3rd Place
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-[#736B63] font-medium">
                        UIET CSJMU × IBM
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-[#1A1715] font-semibold bg-[#FAF7F2] border border-[#E5DED4] px-3 py-1 rounded-full">
                        Team: She Codes
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1715]">
                      BOB Hacks '26 AI Hackathon
                    </h3>

                    <p className="text-[#5A5550] text-sm sm:text-base leading-relaxed font-light">
                      Participated with team <span className="font-semibold text-[#1A1715]">She Codes</span> in the prestigious AI hackathon jointly hosted by UIET CSJMU and IBM. Our team advanced through rigorous qualifying stages to reach the grand finale, securing 3rd place overall and winning a cash prize of ₹20,000 for our technical solution.
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2 text-xs text-[#736B63]">
                      <span className="bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#E5DED4]">Artificial Intelligence</span>
                      <span className="bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#E5DED4]">IBM Cloud</span>
                      <span className="bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#E5DED4]">Team: She Codes</span>
                    </div>
                  </div>

                  {/* Image Presentation */}
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="overflow-hidden rounded-xl border border-[#E5DED4] bg-[#FAF7F2] w-full max-h-[320px]">
                      <img
                        src={bobHacksImg}
                        alt="BOB Hacks 26 Felicitation Ceremony"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                </div>
              </div>

              {/* Entry 2: IIT Guwahati — Prakriti EcoInnovate Challenge */}
              <div className="group bg-white border border-[#E5DED4] rounded-2xl p-6 md:p-8 lg:p-10 shadow-xs transition-all duration-500 hover:border-[#DDA7A5] hover:shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Image Presentation (Alternating) */}
                  <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
                    <div className="overflow-hidden rounded-xl border border-[#E5DED4] bg-[#FAF7F2] w-full max-h-[320px]">
                      <img
                        src={iitgImg}
                        alt="IIT Guwahati Prakriti EcoInnovate Challenge"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="bg-[#FAF7F2] text-[#1A1715] border border-[#D5CCC0] font-semibold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                        <Award size={13} className="text-[#C97A7E]" /> Result: Top 10
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-[#736B63] font-medium">
                        IIT Guwahati
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-[#1A1715] font-semibold bg-[#FAF7F2] border border-[#E5DED4] px-3 py-1 rounded-full">
                        Team: Rasmalai
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1715]">
                      IIT Guwahati — Prakriti EcoInnovate Challenge 2026
                    </h3>

                    <p className="text-[#5A5550] text-sm sm:text-base leading-relaxed font-light">
                      Competed on-campus at IIT Guwahati with team <span className="font-semibold text-[#1A1715]">Rasmalai</span> in the Prakriti EcoInnovate Challenge. Reached the Top 10 with our innovative technical framework tackling environmental sustainability.
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2 text-xs text-[#736B63]">
                      <span className="bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#E5DED4]">IIT Guwahati</span>
                      <span className="bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#E5DED4]">Team: Rasmalai</span>
                      <span className="bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#E5DED4]">Result: Top 10</span>
                      <span className="bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#E5DED4]">Sustainable Tech</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Entry 3: Bhartiya Antariksh Hackathon */}
              <div className="group bg-white border border-[#E5DED4] rounded-2xl p-6 md:p-8 lg:p-10 shadow-xs transition-all duration-500 hover:border-[#DDA7A5] hover:shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Text Details */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="bg-[#FAF7F2] text-[#5A5550] border border-[#E5DED4] font-medium text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
                        Participation & Idea Submission
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-[#736B63] font-medium">
                        ISRO & Hack2skill
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1715]">
                      Bhartiya Antariksh Hackathon 2026
                    </h3>

                    <p className="text-[#5A5550] text-sm sm:text-base leading-relaxed font-light">
                      Participated in the national space innovation initiative organized by the Indian Space Research Organisation (ISRO) and powered by Hack2skill. Successfully formulated and submitted technical concepts aimed at solving real-world space challenges as part of this nationwide initiative.
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2 text-xs text-[#736B63]">
                      <span className="bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#E5DED4]">ISRO</span>
                      <span className="bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#E5DED4]">Space Technology</span>
                      <span className="bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#E5DED4]">Certificate of Participation</span>
                    </div>
                  </div>

                  {/* Certificate Image */}
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="overflow-hidden rounded-xl border border-[#E5DED4] bg-[#FAF7F2] w-full max-h-[320px]">
                      <img
                        src={bhartiyaImg}
                        alt="Bhartiya Antariksh Hackathon Certificate of Participation"
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= NEW ACTIVITIES / ENGAGEMENT SECTION ================= */}
      <section id="activities" className="max-w-6xl mx-auto px-6 py-24 border-t border-[#E8E2D9]">
        <ScrollReveal>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <p className="text-[#C97A7E] text-[11px] font-semibold tracking-[0.25em] uppercase mb-2">
                04 / Involvement
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A1715]">
                Activities & Engagement
              </h2>
            </div>
            <p className="text-[#736B63] text-xs uppercase tracking-[0.2em] font-medium max-w-xs">
              Extracurricular leadership, public presentations, and academic conferences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Activity A: AI Manthan (Featured Card with Governor Anandiben Patel Award Image) */}
            <div className="lg:col-span-6 bg-white border border-[#E5DED4] rounded-2xl p-8 flex flex-col justify-between transition-all duration-500 hover:border-[#DDA7A5] hover:shadow-md">
              <div className="space-y-5">
                <div className="flex justify-between items-center">
                  <span className="bg-[#FAF7F2] text-[#C97A7E] border border-[#DDA7A5] text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
                    Project Exhibition & Award
                  </span>
                  <span className="text-xs text-[#736B63] font-medium">CSJMU Kanpur</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1715]">
                  AI Manthan Exhibition & Felicitation
                </h3>

                <p className="text-[#5A5550] text-sm sm:text-base leading-relaxed font-light">
                  Participated in the AI Manthan exhibition where our team demonstrated our project at a dedicated stall for attendees, peers, and distinguished evaluators. We had the distinct honor of having our project recognized and awarded by Smt. Anandiben Patel, the Hon'ble Governor of Uttar Pradesh, during the state felicitation ceremony.
                </p>

                {/* Photo of Governor Felicitation */}
                <div className="overflow-hidden rounded-xl border border-[#E5DED4] bg-[#FAF7F2] mt-4">
                  <img
                    src={aiManthanImg}
                    alt="AI Manthan Felicitation with UP Governor Anandiben Patel"
                    className="w-full aspect-[16/10] object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="p-3 text-[11px] text-[#736B63] italic text-center bg-white border-t border-[#E5DED4]">
                    Felicitation ceremony at CSJMU Kanpur with Hon'ble Governor Anandiben Patel.
                  </div>
                </div>
              </div>
            </div>

            {/* Activity B: International Conference Volunteering */}
            <div className="lg:col-span-6 bg-white border border-[#E5DED4] rounded-2xl p-8 flex flex-col justify-between transition-all duration-500 hover:border-[#DDA7A5] hover:shadow-md">
              <div className="space-y-5">
                <div className="flex justify-between items-center">
                  <span className="bg-[#FAF7F2] text-[#5A5550] border border-[#E5DED4] text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
                    Volunteering Experience
                  </span>
                  <span className="text-xs text-[#736B63] font-medium">CSJM University</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1715]">
                  International Conference on Sustainable Computing, AI, ML, and Data Analytics
                </h3>

                <p className="text-[#5A5550] text-sm sm:text-base leading-relaxed font-light">
                  Volunteered at the 2-day International Conference held at CSJM University. Actively supported event logistics, speaker coordination, and session facilitation across tracks focused on Sustainable Computing, Artificial Intelligence, Machine Learning, and Data Analytics.
                </p>

                {/* Photo of Conference Volunteering */}
                <div className="overflow-hidden rounded-xl border border-[#E5DED4] bg-[#FAF7F2] mt-4">
                  <img
                    src={conferenceImg}
                    alt="Volunteering at International Conference on Sustainable Computing, AI, ML, and Data Analytics"
                    className="w-full aspect-[16/10] object-cover object-center hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="p-3 text-[11px] text-[#736B63] italic text-center bg-white border-t border-[#E5DED4]">
                    Volunteering team at the 2-day International Conference at CSJM University.
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E8E2D9] flex flex-wrap items-center justify-between gap-2 text-xs text-[#736B63]">
                <div className="flex flex-wrap gap-1.5">
                  <span className="bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#E5DED4]">Sustainable Computing</span>
                  <span className="bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#E5DED4]">AI & ML</span>
                  <span className="bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#E5DED4]">Data Analytics</span>
                </div>
                <span className="font-semibold text-[#1A1715] bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#E5DED4]">Event Volunteer</span>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* ================= EXPERIENCE SECTION ================= */}
      <section id="experience" className="w-full py-24 bg-[#F5EFEB] border-t border-[#E8E2D9]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <div>
                <p className="text-[#C97A7E] text-[11px] font-semibold tracking-[0.25em] uppercase mb-2">
                  05 / Work History
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A1715]">
                  Professional Experience
                </h2>
              </div>
              <p className="text-[#736B63] text-xs uppercase tracking-[0.2em] font-medium max-w-xs">
                Industry experience in enterprise software development and engineering workflows.
              </p>
            </div>

            {/* Case Study Editorial Experience Card */}
            <div className="bg-white border border-[#E5DED4] rounded-2xl p-8 lg:p-12 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Left: Experience Details */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#C97A7E] bg-[#FAF7F2] border border-[#DDA7A5] px-3.5 py-1 rounded-full inline-flex items-center gap-1.5">
                        <Briefcase size={13} /> Software Engineering Intern
                      </span>
                      <span className="text-xs text-[#736B63] font-medium">
                        2026
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1715]">
                      Talbros Automotive Components Ltd.
                    </h3>
                  </div>

                  <ul className="space-y-4 text-sm sm:text-base text-[#5A5550] leading-relaxed font-light">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C97A7E] mt-2 flex-shrink-0"></span>
                      <span>Collaborated on designing modular components and scalable frontend structures to enhance core operational layouts.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C97A7E] mt-2 flex-shrink-0"></span>
                      <span>Participated in refining codebases, debugging asynchronous logical processing trees, and optimizing viewports.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C97A7E] mt-2 flex-shrink-0"></span>
                      <span>Gained hands-on insights into production architectures, balancing system efficiency constraints with cross-functional team pipelines.</span>
                    </li>
                  </ul>

                  <div className="pt-2 flex flex-wrap gap-2 text-xs">
                    <span className="bg-[#FAF7F2] text-[#5A5550] px-3 py-1 rounded-full border border-[#E5DED4]">Frontend Architecture</span>
                    <span className="bg-[#FAF7F2] text-[#5A5550] px-3 py-1 rounded-full border border-[#E5DED4]">Code Optimization</span>
                    <span className="bg-[#FAF7F2] text-[#5A5550] px-3 py-1 rounded-full border border-[#E5DED4]">Production Workflows</span>
                  </div>
                </div>

                {/* Right: Talbros Building Image */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div className="relative group overflow-hidden rounded-xl border border-[#E5DED4] bg-[#FAF7F2] w-full max-h-[340px] shadow-xs">
                    <img
                      src={talbrosImg}
                      alt="Talbros Automotive Components Ltd."
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <p className="text-[11px] text-[#736B63] tracking-wider uppercase mt-3 font-medium text-center">
                    Talbros Engineering Facility
                  </p>
                </div>

              </div>
            </div>

          </ScrollReveal>
        </div>
      </section>

      {/* ================= COMPETITIVE PROGRAMMING SECTION ================= */}
      <section id="coding" className="max-w-6xl mx-auto px-6 py-24 border-t border-[#E8E2D9]">
        <ScrollReveal>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <p className="text-[#C97A7E] text-[11px] font-semibold tracking-[0.25em] uppercase mb-2">
                06 / Metrics
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A1715]">
                Competitive Programming
              </h2>
            </div>
            <p className="text-[#736B63] text-xs uppercase tracking-[0.2em] font-medium max-w-xs">
              Algorithmic logic, time complexity analysis, and competitive contest metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Card 1: CodeChef Highlight with 2★ Certificate/Achievement Visual */}
            <div className="group bg-white border border-[#E5DED4] rounded-2xl p-8 flex flex-col justify-between transition-all duration-500 hover:border-[#DDA7A5] hover:shadow-md">
              <div>
                
                {/* Certificate-style Header Badge */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#C97A7E] font-bold">
                      Verified Achievement
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1715] mt-1">
                      CodeChef
                    </h3>
                  </div>
                  <a
                    href="https://www.codechef.com/users/saumya11132"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full border border-[#E5DED4] hover:border-[#1A1715] text-[#5A5550] hover:text-[#1A1715] transition-colors"
                    aria-label="View CodeChef Profile"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                {/* 2-Star Visual Achievement Plate */}
                <div className="p-6 bg-gradient-to-br from-[#FAF7F2] via-[#F6EFEB] to-[#FAF7F2] rounded-xl border border-[#E8E2D9] mb-8 text-center relative overflow-hidden group-hover:border-[#DDA7A5] transition-all">
                  <div className="flex justify-center gap-1 text-[#DDA7A5] mb-2">
                    <Star size={20} className="fill-[#C97A7E] text-[#C97A7E]" />
                    <Star size={20} className="fill-[#C97A7E] text-[#C97A7E]" />
                  </div>
                  <div className="text-3xl font-black tracking-tight text-[#1A1715]">
                    2★ Division Rated
                  </div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#736B63] font-semibold mt-1">
                    Peak Rating: 1493
                  </p>
                </div>

                {/* Numerical Metrics */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-[#E8E2D9] pb-3">
                    <span className="text-sm text-[#736B63] font-light">Current Rating</span>
                    <span className="font-serif-display text-lg font-bold text-[#1A1715]">1493</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#E8E2D9] pb-3">
                    <span className="text-sm text-[#736B63] font-light">Stars Classification</span>
                    <span className="font-serif-display text-lg font-bold text-[#C97A7E]">2★</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="text-sm text-[#736B63] font-light">Problems Solved</span>
                    <span className="font-serif-display text-lg font-bold text-[#1A1715]">250+</span>
                  </div>
                </div>

              </div>

              <div className="pt-6 border-t border-[#E8E2D9] mt-6">
                <a
                  href="https://www.codechef.com/users/saumya11132"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex justify-center items-center gap-2 bg-[#1A1715] text-[#FAF7F2] text-xs uppercase tracking-wider font-medium py-3 rounded-full hover:bg-[#332F2B] transition-colors"
                >
                  View CodeChef Profile <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Card 2: Codeforces Metrics */}
            <div className="group bg-white border border-[#E5DED4] rounded-2xl p-8 flex flex-col justify-between transition-all duration-500 hover:border-[#DDA7A5] hover:shadow-md">
              <div>
                
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#736B63] font-bold">
                      Contest Profile
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1715] mt-1">
                      Codeforces
                    </h3>
                  </div>
                  <a
                    href="https://codeforces.com/profile/saumya_dev111"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full border border-[#E5DED4] hover:border-[#1A1715] text-[#5A5550] hover:text-[#1A1715] transition-colors"
                    aria-label="View Codeforces Profile"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                {/* Rating Plate */}
                <div className="p-6 bg-gradient-to-br from-[#FAF7F2] via-[#F4EDE5] to-[#FAF7F2] rounded-xl border border-[#E8E2D9] mb-8 text-center group-hover:border-[#DDA7A5] transition-all">
                  <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#736B63] mb-1">
                    Rank Status
                  </div>
                  <div className="text-3xl font-black tracking-tight text-[#1A1715]">
                    Newbie
                  </div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#736B63] font-semibold mt-1">
                    Rating: 985
                  </p>
                </div>

                {/* Numerical Metrics */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-[#E8E2D9] pb-3">
                    <span className="text-sm text-[#736B63] font-light">Contest Rating</span>
                    <span className="font-serif-display text-lg font-bold text-[#1A1715]">985</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#E8E2D9] pb-3">
                    <span className="text-sm text-[#736B63] font-light">Global Rank</span>
                    <span className="font-serif-display text-lg font-bold text-[#1A1715]">Newbie</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="text-sm text-[#736B63] font-light">Contests Participated</span>
                    <span className="font-serif-display text-lg font-bold text-[#1A1715]">10+</span>
                  </div>
                </div>

              </div>

              <div className="pt-6 border-t border-[#E8E2D9] mt-6">
                <a
                  href="https://codeforces.com/profile/saumya_dev111"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex justify-center items-center gap-2 bg-white text-[#1A1715] border border-[#D5CCC0] text-xs uppercase tracking-wider font-medium py-3 rounded-full hover:bg-[#F2ECE3] hover:border-[#1A1715] transition-colors"
                >
                  View Codeforces Profile <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section id="skills" className="w-full py-24 bg-[#F5EFEB] border-t border-[#E8E2D9]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <div>
                <p className="text-[#C97A7E] text-[11px] font-semibold tracking-[0.25em] uppercase mb-2">
                  07 / Capabilities
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A1715]">
                  Skills & Expertise
                </h2>
              </div>
              <p className="text-[#736B63] text-xs uppercase tracking-[0.2em] font-medium max-w-xs">
                Core technologies and engineering foundations applied across projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Category 1: Programming */}
              <div className="bg-white border border-[#E5DED4] p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:border-[#DDA7A5] hover:shadow-sm">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-serif-display text-xl font-bold text-[#C97A7E]">01</span>
                    <span className="w-2 h-2 rounded-full bg-[#DDA7A5]"></span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1715] mb-2">
                    Programming
                  </h3>
                  <p className="text-xs text-[#736B63] font-light mb-6">
                    Core languages for algorithmic logic and web scripting.
                  </p>
                  
                  <div className="flex flex-wrap gap-2.5">
                    {['C++', 'JavaScript', 'Python', 'HTML', 'CSS'].map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium text-[#1A1715] bg-[#FAF7F2] border border-[#E5DED4] px-3.5 py-1.5 rounded-full hover:border-[#DDA7A5] hover:bg-white transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Category 2: Web Architecture */}
              <div className="bg-white border border-[#E5DED4] p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:border-[#DDA7A5] hover:shadow-sm">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-serif-display text-xl font-bold text-[#C97A7E]">02</span>
                    <span className="w-2 h-2 rounded-full bg-[#DDA7A5]"></span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1715] mb-2">
                    Web Architecture
                  </h3>
                  <p className="text-xs text-[#736B63] font-light mb-6">
                    Frameworks and backend environments for production apps.
                  </p>
                  
                  <div className="flex flex-wrap gap-2.5">
                    {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'].map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium text-[#1A1715] bg-[#FAF7F2] border border-[#E5DED4] px-3.5 py-1.5 rounded-full hover:border-[#DDA7A5] hover:bg-white transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Category 3: Core Concepts */}
              <div className="bg-white border border-[#E5DED4] p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:border-[#DDA7A5] hover:shadow-sm">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-serif-display text-xl font-bold text-[#C97A7E]">03</span>
                    <span className="w-2 h-2 rounded-full bg-[#DDA7A5]"></span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1715] mb-2">
                    Core Concepts
                  </h3>
                  <p className="text-xs text-[#736B63] font-light mb-6">
                    Computer science fundamentals and engineering workflows.
                  </p>
                  
                  <div className="flex flex-wrap gap-2.5">
                    {['DSA', 'OOP', 'Git/GitHub', 'DBMS', 'Responsive Design'].map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium text-[#1A1715] bg-[#FAF7F2] border border-[#E5DED4] px-3.5 py-1.5 rounded-full hover:border-[#DDA7A5] hover:bg-white transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= CONNECT & CONTACT SECTION ================= */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-28 border-t border-[#E8E2D9]">
        <ScrollReveal className="w-full flex flex-col items-center text-center">
          
          <p className="text-[#C97A7E] text-[11px] font-semibold tracking-[0.25em] uppercase mb-2">
            08 / Communication
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1715] mb-4">
            Let's Connect
          </h2>
          <div className="w-16 h-[2px] bg-[#DDA7A5] mx-auto mb-6"></div>
          
          <p className="text-[#5A5550] max-w-lg font-light text-base sm:text-lg mb-12 leading-relaxed">
            I'm always open to discussing software engineering opportunities, collaborative projects, or algorithmic problems.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <a
              href="mailto:saumyasingh3234@gmail.com"
              className="bg-[#1A1715] text-[#FAF7F2] font-semibold px-7 py-3.5 rounded-full flex items-center gap-2 text-xs uppercase tracking-[0.18em] transition-all hover:bg-[#332F2B] hover:scale-105 shadow-sm"
            >
              <Mail size={16} /> Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/saumya-singh-417a72316/"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-[#1A1715] font-semibold px-7 py-3.5 rounded-full border border-[#D5CCC0] flex items-center gap-2 text-xs uppercase tracking-[0.18em] hover:bg-[#F2ECE3] hover:border-[#1A1715] hover:scale-105 transition-all shadow-xs"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>

          {/* Minimal Editorial Contact Plate */}
          <div className="w-full max-w-3xl bg-white border border-[#E5DED4] rounded-2xl p-8 sm:p-10 space-y-4 shadow-xs">
            <p className="text-[#736B63] text-[11px] font-semibold tracking-[0.25em] uppercase">
              Direct Contact Details
            </p>
            <p className="text-xl sm:text-2xl font-bold text-[#1A1715] tracking-tight select-all hover:text-[#C97A7E] transition-colors">
              saumyasingh3234@gmail.com
            </p>
            <p className="text-lg font-medium text-[#5A5550] tracking-tight">
              +91 8795618652
            </p>
            <p className="text-[#736B63] text-xs uppercase tracking-widest pt-2 font-medium">
              Kanpur, Uttar Pradesh, India
            </p>
          </div>

        </ScrollReveal>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[#E8E2D9] py-12 text-center text-xs text-[#736B63] bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-6 space-y-2">
          <p className="tracking-wider uppercase font-medium text-[#1A1715]">
            © 2026 Saumya Singh
          </p>
          <p className="text-[11px] text-[#8E867E]">
            Made with love &lt;3
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;