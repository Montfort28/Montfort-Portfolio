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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-beige via-ivory to-neutral-gray overflow-hidden pt-20 pb-10">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-5 w-96 h-96 rounded-full bg-clay/10 blur-3xl"></div>
        <div className="absolute bottom-32 right-10 w-80 h-80 rounded-full bg-ivory/30 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-clay/5 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-clay font-semibold mb-4">
                Welcome to my portfolio
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-espresso leading-tight mb-4">
                {personalInfo.name.split(' ').slice(0, 2).join(' ')}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-clay to-clay">
                  {personalInfo.name.split(' ').slice(2).join(' ')}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-clay font-semibold mb-4">
                {personalInfo.role}
              </p>
            </div>

            <p className="text-lg text-espresso/70 leading-relaxed max-w-2xl">
              {personalInfo.oneLiner}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/projects"
                className="px-8 py-4 bg-gradient-to-r from-clay to-ivory text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-glow-clay transform hover:scale-105 text-center"
              >
                View My Projects
              </Link>
              <a
                href={personalInfo.resume}
                download
                className="px-8 py-4 border-2 border-clay text-clay hover:bg-clay hover:text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-neutral-gray hover:bg-clay transition-all duration-300 hover:shadow-glow-clay"
              >
                <svg className="w-6 h-6 text-espresso group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5 0-.23-.01-.97-.01-1.89-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.82c.85 0 1.71.12 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.58 1.03 2.67 0 3.82-2.34 4.66-4.57 4.91.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.16.58.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                </svg>
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-neutral-gray hover:bg-ivory transition-all duration-300 hover:shadow-glow-warm"
              >
                <svg className="w-6 h-6 text-espresso group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="group p-3 rounded-full bg-neutral-gray hover:bg-gradient-to-r hover:from-clay hover:to-ivory transition-all duration-300 hover:shadow-glow-clay"
              >
                <svg className="w-6 h-6 text-espresso group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center animate-slideInRight">
            <div className="relative">
              {/* Decorative background rings */}
              <div className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-br from-clay/20 to-ivory/20 blur-xl"></div>
              <div className="absolute inset-12 w-56 h-56 rounded-full bg-gradient-to-br from-ivory/10 to-clay/10 blur-lg"></div>

              {/* Profile image with premium styling */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/320?text=Profile';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating accent cards */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-4 shadow-lg backdrop-blur-sm border border-neutral-gray">
                <p className="text-xs font-semibold text-espresso">Fullstack</p>
                <p className="text-2xl font-display font-bold text-clay">Engineer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-24">
          <p className="text-center text-sm uppercase tracking-[0.2em] text-clay font-semibold mb-8">
            Technologies I work with
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div
                  className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white flex items-center justify-center mb-3 overflow-hidden border-2 transition-all duration-300 hover:shadow-lg hover:scale-110"
                  style={{
                    borderColor: tech.color,
                    boxShadow: `0 0 20px ${tech.color}15`,
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"
                    style={{ backgroundColor: tech.color }}
                  ></div>

                  <img
                    src={tech.imagePath}
                    alt={tech.name}
                    className="relative w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-125"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/48?text=Icon';
                    }}
                  />
                </div>
                <span className="text-sm font-medium text-espresso transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* One-liner quote */}
        <div className="mt-20 text-center">
          <blockquote className="text-xl md:text-2xl italic text-espresso/60 font-light max-w-3xl mx-auto">
            "Every line of code tells a story. Let's create something remarkable together."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Hero;
