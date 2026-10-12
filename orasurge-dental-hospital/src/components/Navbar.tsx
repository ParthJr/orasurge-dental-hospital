import { useState, useEffect } from 'react';
import { Calendar, Phone, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [activeNav, setActiveNav] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section spy
      const sections = ['home', 'approach', 'treatments', 'featured', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveNav(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActiveNav(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'approach', label: 'OUR APPROACH' },
    { id: 'treatments', label: 'TREATMENTS' },
    { id: 'featured', label: 'CLINICAL SPECS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#101419]/90 backdrop-blur-xl border-b border-[rgba(137,147,161,0.2)] py-2.5 shadow-lg shadow-black/40'
          : 'bg-[#101419]/70 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Left: Brand Wordmark with Precision Cross/Orbital Symbol */}
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C7FF45] rounded"
        >
          {/* Geometric abstract mark: precision-aligned cross with orbital boundary */}
          <div className="relative w-8 h-8 rounded-lg bg-[#202832] border border-[rgba(137,147,161,0.3)] flex items-center justify-center overflow-hidden group-hover:border-[#C7FF45] transition-colors">
            {/* Orbital ring */}
            <div className="absolute inset-1 rounded-full border border-[rgba(75,141,255,0.4)]" />
            {/* Precision crosshair lines */}
            <div className="w-4 h-[1.5px] bg-[#C7FF45] shadow-[0_0_6px_rgba(199,255,69,0.7)]" />
            <div className="absolute h-4 w-[1.5px] bg-[#C7FF45] shadow-[0_0_6px_rgba(199,255,69,0.7)]" />
            <div className="absolute w-1 h-1 rounded-full bg-[#F5F7FA]" />
          </div>

          <div className="flex flex-col">
            <span className="font-['Space_Grotesk'] text-base sm:text-lg font-bold tracking-wider text-[#F5F7FA] uppercase leading-none group-hover:text-[#C7FF45] transition-colors">
              ORASURGE
            </span>
            <span className="font-['Rajdhani'] text-[10px] sm:text-[11px] font-semibold text-[#8993A1] tracking-widest uppercase">
              DENTAL HOSPITAL · GANDHINAGAR
            </span>
          </div>
        </button>

        {/* Center: Floating Technical Capsule Nav (as in user screenshot) */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center p-1 rounded-full bg-[#161B22]/85 border border-[rgba(137,147,161,0.25)] shadow-inner backdrop-blur-md"
        >
          {navItems.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-['Rajdhani'] font-semibold tracking-wider transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-[#202832] text-[#C7FF45] shadow-[0_0_12px_rgba(199,255,69,0.25)] border border-[rgba(199,255,69,0.4)]'
                    : 'text-[#8993A1] hover:text-[#F5F7FA]'
                }`}
              >
                {isActive && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C7FF45] mr-1.5 shadow-[0_0_6px_rgba(199,255,69,0.8)]" />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-3">
          {/* Quick Call Button */}
          <a
            href="tel:09825198854"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[rgba(137,147,161,0.25)] bg-[#181C21] text-xs font-mono text-[#8993A1] hover:text-[#4B8DFF] hover:border-[#4B8DFF]/40 transition-colors"
            title="Direct Call Desk"
          >
            <Phone className="w-3.5 h-3.5 text-[#4B8DFF]" />
            <span className="hidden lg:inline">098251 98854</span>
          </a>

          {/* Primary CTA: Book Consultation in Laser Lime */}
          <button
            onClick={onBookClick}
            className="group relative inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#C7FF45] text-[#101419] font-['Rajdhani'] font-bold text-xs sm:text-sm tracking-wider uppercase rounded shadow-[0_0_14px_rgba(199,255,69,0.35)] hover:shadow-[0_0_22px_rgba(199,255,69,0.55)] hover:bg-[#D4FF66] transition-all duration-200 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Consultation</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded bg-[#202832] text-[#F5F7FA] border border-[rgba(137,147,161,0.25)] hover:text-[#C7FF45] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#101419]/98 border-b border-[#202832] px-4 py-6 space-y-4 backdrop-blur-2xl">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`flex items-center justify-between px-4 py-3 rounded text-left font-['Rajdhani'] text-sm tracking-wider uppercase transition-colors ${
                  activeNav === item.id
                    ? 'bg-[#202832] text-[#C7FF45] font-bold border border-[#C7FF45]/30'
                    : 'text-[#8993A1] hover:text-[#F5F7FA] hover:bg-[#181C21]'
                }`}
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#8993A1]" />
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#202832] flex flex-col gap-3">
            <a
              href="tel:09825198854"
              className="flex items-center justify-center gap-2 py-2.5 rounded bg-[#202832] text-[#F5F7FA] font-mono text-xs border border-[rgba(137,147,161,0.3)]"
            >
              <Phone className="w-4 h-4 text-[#4B8DFF]" />
              <span>Call 098251 98854 (Direct Desk)</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="flex items-center justify-center gap-2 py-3 rounded bg-[#C7FF45] text-[#101419] font-['Rajdhani'] font-bold text-sm uppercase tracking-wider shadow-[0_0_16px_rgba(199,255,69,0.4)]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
