// ProjectsPage.tsx
import React from 'react';
import Projects from '../components/Projects';

const ProjectsPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">My Projects</h1>
        <p className="text-gray-400 mb-12">A showcase of my technical work and capabilities</p>
      </div>
      <Projects />
    </div>
  );
};

export default ProjectsPage;