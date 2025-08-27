// Home.tsx
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <div className="relative">
      <Hero />

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-16" />
      <About />

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-16" />
      <Projects />

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-16" />
      <Contact />
    </div>
  );
};

export default Home;