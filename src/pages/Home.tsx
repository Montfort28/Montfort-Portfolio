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
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-gray to-transparent my-0" />
      <About />

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-gray to-transparent my-0" />
      <Projects />

      {/* Section Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-gray to-transparent my-0" />
      <Contact />
    </div>
  );
};

export default Home;