import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../utils/data';

const Hero = () => {
  const techStack = [
    { name: "React", imagePath: "/images/tech/react.png", color: "#61dafb" },
    { name: "Next.js", imagePath: "/images/tech/nextjs.png", color: "#000000" },
    { name: "Vue.js", imagePath: "/images/tech/vue.png", color: "#42b883" },
    { name: "TypeScript", imagePath: "/images/tech/typescript.png", color: "#3178c6" },
    { name: "Tailwind CSS", imagePath: "/images/tech/tailwindcss.png", color: "#38bdf8" },
    { name: "Node.js", imagePath: "/images/tech/nodejs.png", color: "#68a063" },
    { name: "PostgreSQL", imagePath: "/images/tech/postgres.png", color: "#336791" },
    { name: "Prisma", imagePath: "/images/tech/prisma.png", color: "#0c344b" },
    { name: "Figma", imagePath: "/images/tech/figma.png", color: "#f24e1e" },
    { name: "GitHub", imagePath: "/images/tech/github.png", color: "#181717" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] overflow-hidden pt-4 md:pt-8 pb-10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Breathing gradient orbs */}
        <div className="absolute top-20 left-5 w-96 h-96 rounded-full bg-gradient-to-r from-clay/20 to-transparent blur-3xl animate-breathe" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-32 right-10 w-80 h-80 rounded-full bg-gradient-to-l from-clay/15 to-transparent blur-3xl animate-breathe" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-ivory/10 to-transparent blur-2xl animate-breathe" style={{ animationDelay: '2s' }}></div>

        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#C57B57', stopOpacity: 0 }} />
              <stop offset="50%" style={{ stopColor: '#C57B57', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#C57B57', stopOpacity: 0 }} />
            </linearGradient>
          </defs>
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="url(#lineGradient)" strokeWidth="2" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="url(#lineGradient)" strokeWidth="2" />
        </svg>
      </div>

      <div className="container mx-auto px-4 z-10 max-w-7xl mt-0 md:mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center mb-12">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2 animate-fadeInUp">
              <p className="text-xs uppercase tracking-[0.3em] text-clay font-bold mb-2 opacity-0 animate-fadeInUp text-center lg:text-left" style={{ animationDelay: '0.2s' }}>
                Welcome To My Universe
              </p>

              <div className="overflow-visible">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-2 animate-slideInLeft opacity-0" style={{ animationDelay: '0.3s' }}>
                  <span className="block text-white">
                    {personalInfo.name.split(' ').slice(0, 2).join(' ')}
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-clay via-ivory to-clay">
                    {personalInfo.name.split(' ').slice(2).join(' ')}
                  </span>
                </h1>
              </div>

              <div className="overflow-visible">
                <h2 className="text-xl md:text-2xl font-bold mb-3 animate-slideInLeft opacity-0" style={{ animationDelay: '0.4s' }}>
                  <span className="bg-gradient-to-r from-clay to-ivory bg-clip-text text-transparent">
                    {personalInfo.role}
                  </span>
                </h2>
              </div>
            </div>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl animate-fadeInUp opacity-0" style={{ animationDelay: '0.5s' }}>
              {personalInfo.oneLiner}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fadeInUp opacity-0" style={{ animationDelay: '0.6s' }}>
              <Link
                to="/projects"
                className="relative px-8 py-4 font-bold text-sm uppercase tracking-[0.1em] text-white group overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-clay to-clay/60 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 rounded-xl"></div>
                <span className="relative inline-flex items-center gap-2">
                  View My Projects
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <a
                href={personalInfo.resume}
                download
                className="relative px-8 py-4 border-2 border-clay font-bold text-sm uppercase tracking-[0.1em] text-clay rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group hover:text-white overflow-hidden hover:shadow-lg hover:shadow-clay/30"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-clay/0 to-clay/0 group-hover:from-clay group-hover:to-clay/60 transform translate-x-[-100%] group-hover:translate-x-0 transition-all duration-500 rounded-[10px]"></div>
                <span className="relative inline-flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download CV
                </span>
              </a>
            </div>

          </div>

          {/* Right Image */}
          <div className="flex flex-col items-center animate-slideInRight opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="relative group">
              {/* Animated gradient orbs background */}
              <div className="absolute -inset-8 bg-gradient-to-r from-clay/20 via-transparent to-ivory/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-br from-clay/30 to-ivory/10 blur-2xl opacity-40"></div>

              {/* Premium profile image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl border-2 border-clay/50 backdrop-blur-sm group-hover:border-clay transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-clay/50">
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-clay/50 to-ivory/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/320?text=Profile';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-clay/0 via-clay/10 to-ivory/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Animated floating badge - hidden on small screens */}
              <div className="absolute -bottom-6 -left-6 hidden lg:block bg-gradient-to-br from-clay to-clay/60 rounded-2xl p-4 shadow-lg backdrop-blur-md border border-clay/50 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-clay/50 animate-scaleInUp opacity-0" style={{ animationDelay: '0.8s' }}>
                <p className="text-xs font-bold uppercase tracking-widest text-white/80">Fullstack</p>
                <p className="text-xl font-display font-bold text-white">Engineer</p>
              </div>

              {/* Decorative floating elements */}
              <div className="absolute top-0 right-0 w-20 h-20 border border-clay/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-float"></div>
              <div className="absolute bottom-0 right-10 w-16 h-16 border border-ivory/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
            </div>

            {/* Social Links Below Image */}
            <div className="flex gap-4 justify-center mt-8 animate-fadeInUp opacity-0" style={{ animationDelay: '0.7s' }}>
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-ivory/50 hover:border-ivory transition-all duration-300 hover:shadow-lg hover:shadow-ivory/50 overflow-hidden flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-ivory/0 to-ivory/30 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 rounded-full"></div>
                <svg className="relative w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5 0-.23-.01-.97-.01-1.89-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.82c.85 0 1.71.12 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.58 1.03 2.67 0 3.82-2.34 4.66-4.57 4.91.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.16.58.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                </svg>
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-ivory/50 hover:border-ivory transition-all duration-300 hover:shadow-lg hover:shadow-ivory/50 overflow-hidden flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-ivory/0 to-ivory/30 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 rounded-full"></div>
                <svg className="relative w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-ivory/50 hover:border-ivory transition-all duration-300 hover:shadow-lg hover:shadow-ivory/50 overflow-hidden flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-ivory/0 to-ivory/30 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 rounded-full"></div>
                <svg className="relative w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-40 animate-fadeInUp opacity-0" style={{ animationDelay: '0.9s' }}>
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-clay font-bold mb-2">My Arsenal</p>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Technologies & Tools</h3>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">Cutting-edge technologies that power modern web experiences</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 md:gap-8 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center group cursor-pointer animate-scaleInUp opacity-0"
                style={{ animationDelay: `${1 + index * 0.05}s` }}
              >
                <div
                  className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center mb-3 overflow-hidden border-2 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-125 group-hover:-translate-y-2"
                  style={{
                    borderColor: `${tech.color}50`,
                  }}
                >
                  {/* Glowing background on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-300"
                    style={{ backgroundColor: tech.color }}
                  ></div>

                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-2xl"></div>

                  <img
                    src={tech.imagePath}
                    alt={tech.name}
                    className="relative w-10 h-10 md:w-12 md:h-12 object-contain transition-all duration-300 group-hover:scale-130 group-hover:drop-shadow-lg"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/48?text=Icon';
                    }}
                  />
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-clay text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* One-liner quote */}
        <div className="mt-16 text-center animate-fadeInUp opacity-0" style={{ animationDelay: '1.1s' }}>
          <div className="inline-block bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl px-8 md:px-12 py-8 shadow-2xl border border-gray-800/50 hover:border-clay/30 transition-all duration-500 max-w-3xl mx-auto group">
            <svg className="w-8 h-8 mx-auto mb-4 text-clay/40 group-hover:text-clay transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.021-5-7-5S0 3.75 0 5c0 5 0 7 .6 9.5.4 1.5 1 3 2.5 4.5s2.5 2 4 2c2.5 0 5-3 5-4 0-.2-.1-.4-.2-.5s-2.6 1-4 1c-2.5 0-3-2-3-4 0 0 0-1 2.5-1 2 0 4 1 4 3v4c0 4-3 6-7 6z" />
            </svg>
            <blockquote className="text-lg md:text-xl italic font-light text-gray-300 group-hover:text-white transition-colors duration-300">
              "Every line of code tells a story. Let's create something remarkable together."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;