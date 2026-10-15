import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import SkullLogo from './SkullLogo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu upon navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'WORK', path: '/work' },
    { name: 'THE ARTIST', path: '/artist' },
    { name: 'CUSTOM PIECES', path: '/custom' },
    { name: 'THE PROCESS', path: '/process' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#090909]/90 backdrop-blur-md border-b border-white/5 py-4 shadow-2xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Wordmark with Monogram */}
          <Link
            to="/"
            className="group flex items-center gap-3.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E9E4DC]"
          >
            {/* Badass Tattoo Skull Emblem */}
            <SkullLogo className="w-10 h-10" />
            <div className="flex flex-col">
              <span className="font-display text-2xl tracking-[0.1em] text-[#E9E4DC] group-hover:text-white transition-colors leading-none">
                DMITRIY TKACH
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#999995] uppercase font-sans mt-0.5 font-medium group-hover:text-[#E9E4DC] transition-colors">
                BLACK &amp; GREY · NJ / NY
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs font-semibold tracking-[0.16em] uppercase transition-all duration-300 relative py-1 ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-[#999995] hover:text-[#E9E4DC]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#76262B]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA: Prominent Book Your Session button */}
          <div className="flex items-center gap-4">
            <Link
              to="/book"
              className="relative inline-flex items-center justify-center px-5 sm:px-6 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-white bg-[#76262B] hover:bg-[#8e2e34] border border-[#76262B] shadow-lg shadow-[#76262B]/20 transition-all duration-300 active:scale-95"
            >
              BOOK YOUR SESSION
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#E9E4DC] hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#090909]/98 backdrop-blur-xl flex flex-col justify-between px-8 py-24 lg:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-8">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#999995]">
              NAVIGATION
            </span>
            <Link
              to="/"
              className="font-display text-4xl text-[#E9E4DC] hover:text-[#76262B] transition-colors"
            >
              HOME
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-display text-4xl text-[#E9E4DC] hover:text-[#76262B] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col gap-4">
            <p className="text-xs text-[#999995] font-sans">
              BLACK & GREY · SERVING NJ & NY
            </p>
            <Link
              to="/book"
              className="w-full text-center py-4 text-xs font-bold tracking-[0.16em] uppercase bg-[#76262B] text-white hover:bg-[#8e2e34] transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              BOOK YOUR SESSION <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
