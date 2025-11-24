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
    <section id="projects" className="py-20 bg-gradient-to-br from-ivory via-beige to-neutral-gray">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <p className="text-sm uppercase tracking-[0.2em] text-clay font-semibold mb-4">
            Featured Work
          </p>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-espresso mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-espresso/60 max-w-2xl mx-auto mb-8">
            Showcasing my strongest work across fullstack development, UI/UX design, and modern web technologies.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-clay to-ivory mx-auto"></div>
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
          <p className="text-espresso/70 mb-6">
            Want to see more projects and contributions?
          </p>
          <a
            href="https://github.com/Montfort28"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-clay to-ivory text-white font-semibold rounded-lg hover:shadow-glow-clay transition-all duration-300 group"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5 0-.23-.01-.97-.01-1.89-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.82c.85 0 1.71.12 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.58 1.03 2.67 0 3.82-2.34 4.66-4.57 4.91.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.16.58.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
            </svg>
            View All Projects on GitHub
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Testimonial Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-soft border border-neutral-gray">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="w-12 h-12 mx-auto mb-6 text-clay/30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl italic font-light text-espresso/70 mb-6">
              "I believe in building products that are not just functional, but delightful. Every pixel, every interaction matters."
            </p>
            <div>
              <p className="text-clay font-display font-bold text-lg">Mugisha Montfort</p>
              <p className="text-espresso/60 text-sm">Fullstack Engineer & UI/UX Enthusiast</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
