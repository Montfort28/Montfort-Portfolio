import React from 'react';

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
  return (
    <div className="group relative bg-[#1E1E1E] p-6 rounded-xl shadow-lg transition-all hover:shadow-2xl hover:scale-105 duration-300">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
        />

        {/* Apply blur effect on the background */}
        <div className="absolute inset-0 bg-black opacity-10 backdrop-blur-md rounded-xl pointer-events-none"></div>
      </div>

      <h3 className="text-lg font-semibold text-white mt-4">{project.title}</h3>
      <p className="text-sm text-gray-400 mt-2">{project.description}</p>
      <div className="mt-4 flex gap-2">
        {project.technologies.map((tech, index) => (
          <span key={index} className="text-xs text-black-500 bg-blue-700 py-1 px-3 rounded-full">
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons Section */}
      <div className="mt-4 flex justify-between items-center">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline transition-all duration-300 transform hover:scale-105"
        >
          View Code
        </a>

        {/* Conditionally render Live Demo button */}
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline transition-all duration-300 transform hover:scale-105"
          >
            Live Demo
          </a>
        )}
      </div>

      {/* Hover overlay effect */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
    </div>
  );
};

export default ProjectCard;
