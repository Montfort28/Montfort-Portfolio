import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface IProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubLink: string;
    liveLink?: string;
  };
}

const ProjectCard: React.FC<IProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-clay/20 hover:border-clay/60 backdrop-blur-sm hover-lift h-full flex flex-col"
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Glowing background on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-clay/0 via-clay/10 to-clay/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Image Container */}
      <div className="relative overflow-hidden h-64 bg-gradient-to-br from-gray-800 to-gray-900">
        {/* Animated overlay shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none z-10"></div>

        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.15 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/400x256?text=' + encodeURIComponent(project.title);
          }}
        />

        {/* Enhanced overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-clay/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-3xl"></div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10 flex flex-col flex-grow">
        <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-clay group-hover:to-ivory transition-all duration-300">
          {project.title}
        </h3>

        <p className="text-sm text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-4 flex flex-wrap gap-2 flex-grow items-center">
          {project.technologies.map((tech, index) => (
            <motion.span
              key={index}
              className="text-xs font-bold px-3 py-1 rounded-full inline-flex items-center justify-center bg-gradient-to-r from-clay/20 to-ivory/20 text-clay border-2 border-clay/60 group-hover:border-clay group-hover:from-clay/40 group-hover:to-ivory/40 transition-all duration-300 uppercase tracking-wider h-7"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Buttons Section */}
        <div className="flex gap-3 relative z-20">
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 relative px-4 py-3 bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-clay/50 text-white rounded-lg flex items-center justify-center gap-2 group/btn font-bold text-sm transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-clay/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-clay/20 to-clay/40 transform translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500"></div>
            <svg className="w-4 h-4 relative group-hover/btn:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5 0-.23-.01-.97-.01-1.89-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.82c.85 0 1.71.12 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.58 1.03 2.67 0 3.82-2.34 4.66-4.57 4.91.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.16.58.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
            </svg>
            <span className="relative">Code</span>
          </motion.a>

          {project.liveLink && (
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 relative px-4 py-3 bg-gradient-to-r from-clay to-clay/60 text-white rounded-lg flex items-center justify-center gap-2 group/btn font-bold text-sm transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-clay/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-ivory/0 to-ivory/30 transform translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500"></div>
              <svg className="w-4 h-4 relative group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
