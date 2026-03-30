import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../data/mockData';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.05)]'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <img
              src="/FIT_LOGO.jpg"
              alt="Fit Essence Logo"
              className="h-11 w-11 rounded-full object-cover ring-2 ring-fit-green/30 group-hover:ring-fit-green transition-all"
            />
            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-tight text-fit-black leading-none">
                Fit Essence
              </span>
              <span className="text-[10px] font-medium text-fit-gray tracking-wider uppercase">
                Catering
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[13px] font-semibold text-gray-600 hover:text-fit-black transition-colors rounded-lg hover:bg-gray-50"
              >
                {link.label}
              </a>
            ))}
            <div className="ml-4 pl-4 border-l border-gray-200">
              <a
                href="https://www.instagram.com/fitessence_catering"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-fit-black text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-fit-green hover:text-black transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-fit-green/20"
              >
                <span>Pedir Ahora</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6 text-fit-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl z-50 lg:hidden animate-fade-in">
            <div className="px-5 py-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-lg font-bold text-fit-black hover:bg-fit-light hover:text-fit-green-dark rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="https://www.instagram.com/fitessence_catering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-fit-black text-white text-center py-4 rounded-2xl font-bold text-lg hover:bg-fit-green hover:text-black transition-all"
                >
                  Pedir Ahora
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
