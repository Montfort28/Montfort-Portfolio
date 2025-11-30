import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: 'HOME', path: '/' },
    { title: 'ABOUT', path: '/about' },
    { title: 'PROJECTS', path: '/projects' },
    { title: 'CONTACT', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Floating Pill Navigation with Logo - Hidden on mobile */}
      <nav className="hidden md:block fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500">
        <div className={`flex items-center gap-7 rounded-full backdrop-blur-xl border transition-all duration-500 ${scrolled
          ? 'px-4 py-3 space-x-2 bg-[#1a1a1a]/95 border-white/10 shadow-2xl'
          : 'px-6 py-4 space-x-4 bg-[#1a1a1a]/80 border-white/20'
          }`}>
          {/* Logo in Navbar */}
          <Link
            to="/"
            className="flex items-center group relative flex-shrink-0 pr-2 border-r border-white/10"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-clay to-clay/50 blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <span className="relative text-lg font-bold font-display bg-gradient-to-br from-clay via-ivory to-clay bg-clip-text text-transparent group-hover:from-ivory group-hover:via-clay group-hover:to-ivory transition-all duration-300">
                MM
              </span>
            </div>
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-3 py-2 text-xs font-bold tracking-[0.15em] transition-all duration-300 group overflow-hidden rounded-full ${location.pathname === item.path
                ? 'text-white bg-gradient-to-r from-clay/30 to-clay/10'
                : 'text-gray-300 hover:text-white'
                }`}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-clay/0 via-clay/20 to-clay/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 rounded-full"></span>
              <span className="relative">{item.title}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Header - Logo and Hamburger */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-gradient-to-r from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] border-b border-white/10 z-50 flex items-center justify-between px-4 backdrop-blur-md">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center group relative flex-shrink-0"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-clay to-clay/50 blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            <span className="relative text-lg font-bold font-display bg-gradient-to-br from-clay via-ivory to-clay bg-clip-text text-transparent group-hover:from-ivory group-hover:via-clay group-hover:to-ivory transition-all duration-300">
              MM
            </span>
          </div>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="relative w-10 h-10 flex items-center justify-center focus:outline-none group"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span className={`absolute h-0.5 w-6 bg-gradient-to-r from-clay to-clay/50 transition-all duration-500 transform origin-center ${isMenuOpen ? 'rotate-45 top-2' : 'top-0'
              }`}></span>
            <span className={`absolute h-0.5 w-6 bg-gradient-to-r from-clay to-clay/50 top-2.5 transition-all duration-500 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
            <span className={`absolute h-0.5 w-6 bg-gradient-to-r from-clay to-clay/50 transition-all duration-500 transform origin-center ${isMenuOpen ? '-rotate-45 top-2' : 'bottom-0'
              }`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="fixed md:hidden top-16 left-0 right-0 z-40 bg-gradient-to-b from-[#1a1a1a] via-[#1a1a1a] to-[#0f0f0f] border-b border-white/10 shadow-2xl animate-slideInDown">
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 px-4 text-xs uppercase tracking-[0.15em] font-bold transition-all duration-300 rounded-lg group relative overflow-hidden ${location.pathname === item.path
                  ? 'text-clay bg-clay/10'
                  : 'text-gray-300 hover:text-clay hover:bg-clay/5'
                  }`}
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-clay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;