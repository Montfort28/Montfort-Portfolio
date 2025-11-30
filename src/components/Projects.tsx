import React from 'react';
import ProjectCard from './ProjectCard';
import { projects as projectsData } from '../utils/data';
import { motion, Variants, easeOut } from 'framer-motion';

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  return (
    <section id="projects" className="relative bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-gradient-to-l from-clay/10 to-transparent blur-3xl animate-breathe" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-ivory/5 to-transparent blur-3xl animate-breathe" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-8 md:pt-32 pb-24">
        {/* Header */}
        <div className="text-center mb-16 space-y-3 animate-fadeInUp">
          <p className="text-xs uppercase tracking-[0.3em] text-clay font-bold opacity-0 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Showcase of Excellence
          </p>
          <h2 className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent opacity-0 animate-fadeInUp mb-3" style={{ animationDelay: '0.2s' }}>
            Featured Projects
          </h2>
          <p className="text-base text-gray-300 max-w-3xl mx-auto opacity-0 animate-fadeInUp leading-relaxed" style={{ animationDelay: '0.3s' }}>
            Showcasing my strongest work across fullstack development, UI/UX design, and modern web technologies. Each project represents excellence, innovation, and attention to detail.
          </p>
          <div className="flex justify-center gap-2 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-clay to-ivory"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-clay to-ivory rounded-full"></div>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-clay to-ivory"></div>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          {projectsData.map((project) => (
            <motion.div key={project.id} variants={projectVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/Montfort28"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-clay to-clay text-white font-semibold rounded-lg hover:shadow-glow-clay transition-all duration-300 group"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5 0-.23-.01-.97-.01-1.89-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.82c.85 0 1.71.12 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.58 1.03 2.67 0 3.82-2.34 4.66-4.57 4.91.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.16.58.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
            </svg>
            <span className="relative">View All Projects on GitHub</span>
            <svg className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Testimonial Section */}
        <div className="mt-20 bg-gradient-to-br from-gray-900/60 to-black/40 backdrop-blur-xl rounded-2xl p-8 md:p-12 shadow-lg border border-clay/20 group hover:border-clay/40 transition-all duration-500">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="w-12 h-12 mx-auto mb-6 text-clay/40 group-hover:text-clay transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl italic font-light text-gray-300 mb-6">
              "I believe in building products that are not just functional, but delightful. Every pixel, every interaction matters."
            </p>
            <div>
              <p className="text-clay font-display font-bold text-lg">Mugisha Montfort</p>
              <p className="text-ivory/60 text-sm">Fullstack Engineer & UI/UX Enthusiast</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
