import React from 'react';
import ProjectCard from './ProjectCard';
import { IProject } from '../utils/data';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  // Project data with GitHub links and live demo links
  const projects: IProject[] = [
    {
      id: 1,
      title: "My Personal Developer Portfolio",
      description: "A responsive and modern developer portfolio showcasing my skills, projects, and contact info. Built using React.js / Next.js and styled with Tailwind CSS. Fully deployed on Vercel.",
      image: "/portfolio.jpg",
      technologies: ["React.js", "Tailwind CSS", "TypeScript"],
      githubLink: "https://github.com/Montfort28/My-Portfolio",
      liveLink: "https://montfort-portfolio.vercel.app/"
    },
    {
      id: 2,
      title: "Daily Health Reminder Web App",
      description: "A Vue.js application for setting personalized health reminders with offline data storage and dark mode support.",
      image: "/health-reminder.jpg",
      technologies: ["Vue.js", "Tailwind CSS", "IndexedDB"],
      liveLink: "https://daily-health-reminder-web-app.vercel.app/",
      githubLink: "https://github.com/Montfort28/daily-health-reminder-web-app"
    },
    {
      id: 3,
      title: "To-Do List System",
      description: "A CRUD-based task manager with user authentication and session handling, styled with CSS and interactive JavaScript features.",
      image: "/todo-list.jpg",
      technologies: ["PHP", "MySQL", "CSS", "JavaScript"],
      githubLink: "https://github.com/Montfort28/todo_app",
    },
    {
      id: 4,
      title: "Posinnove Webpage",
      description: "A professional website designed and developed for Posinnove, showcasing modern web development techniques.",
      image: "/posinnove.jpg",
      technologies: ["TailwindCSS", "JavaScript", "Next.js"],
      liveLink: "https://posinnove-webpage.vercel.app/",
      githubLink: "https://github.com/Montfort28/posinnove-webpage"
    }
  ];

  return (
    <section id="projects" className="pt-4 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={projectVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Montfort28"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E1E1E] hover:bg-gray-800 text-white rounded-lg transition-colors"
          >
            See More Projects on GitHub
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5 0-.23-.01-.97-.01-1.89-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.82c.85 0 1.71.12 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.58 1.03 2.67 0 3.82-2.34 4.66-4.57 4.91.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.16.58.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
            </svg>
          </a>
        </div>

        {/* Testimonial or Quote Section */}
        <div className="mt-16 bg-[#1E1E1E] p-8 rounded-xl">
          <blockquote className="text-center">
            <svg className="w-10 h-10 mx-auto mb-4 text-blue-500 opacity-40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl italic font-medium text-gray-300">
              "Great products come from great minds. I am dedicated to crafting elegant solutions to complex problems with clean, efficient code."
            </p>
            <footer className="mt-4">
              <p className="text-blue-400 font-semibold">Mugisha Louis Marie De Montfort</p>
              <p className="text-gray-500">Full-Stack Developer</p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Projects;
