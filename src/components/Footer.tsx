import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../utils/data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#070707] via-[#0f0f0f] to-[#060606] border-t border-clay/10 backdrop-blur-lg shadow-inner-glow">
      <div className="container mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Brand */}
          <div className="animate-fadeInUp">
            <Link to="/" className="flex items-center group mb-4">
              <span className="text-2xl font-display font-bold bg-gradient-to-r from-clay via-ivory to-clay bg-clip-text text-transparent group-hover:from-ivory group-hover:via-clay group-hover:to-ivory transition-all">
                MM
              </span>
            </Link>
            <p className="text-ivory/60 leading-relaxed max-w-xs">
              Fullstack engineer crafting modern, scalable web applications with Next.js, PostgreSQL, and beautiful UI/UX design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-slideInLeft">
            <h4 className="font-display font-semibold text-white mb-6">Quick Links</h4>
            <nav className="space-y-3">
              <Link to="/" className="block text-ivory/60 hover:text-clay transition-colors">Home</Link>
              <Link to="/projects" className="block text-ivory/60 hover:text-clay transition-colors">Projects</Link>
              <Link to="/about" className="block text-ivory/60 hover:text-clay transition-colors">About</Link>
              <Link to="/contact" className="block text-ivory/60 hover:text-clay transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="animate-slideInRight">
            <h4 className="font-display font-semibold text-white mb-6">Follow</h4>
            <div className="space-y-3">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-ivory/60 hover:text-clay transition-colors group"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5 0-.23-.01-.97-.01-1.89-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.82c.85 0 1.71.12 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.58 1.03 2.67 0 3.82-2.34 4.66-4.57 4.91.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.16.58.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                </svg>
                <span className="group-hover:translate-x-1 transition-transform">GitHub</span>
              </a>

              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-ivory/60  hover:text-clay transition-colors group"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="group-hover:translate-x-1 transition-transform">LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-2 text-ivory/60 hover:text-clay transition-colors group"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="group-hover:translate-x-1 transition-transform">Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-clay/30 to-transparent my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-ivory/60">
          <p>
            © {currentYear} Mugisha Louis Marie De Montfort. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
