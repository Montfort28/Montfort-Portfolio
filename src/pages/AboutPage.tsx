// AboutPage.tsx
import React from 'react';
import About from '../components/About';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">About Me</h1>
        <p className="text-gray-400 mb-12">Learn more about my background and skills</p>
      </div>
      <About />
    </div>
  );
};

export default AboutPage;