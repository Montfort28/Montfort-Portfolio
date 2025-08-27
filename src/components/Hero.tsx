import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const techStack = [
    { name: "HTML", imagePath: "/images/tech/html.png", color: "#ea3e30" },
    { name: "CSS", imagePath: "/images/tech/css.png", color: "#264de4" },
    { name: "JavaScript", imagePath: "/images/tech/javascript.png", color: "#f0db4f" },
    { name: "Tailwind CSS", imagePath: "/images/tech/tailwindcss.png", color: "#38bdf8" },
    { name: "React.js", imagePath: "/images/tech/react.png", color: "#61dafb" },
    { name: "Vue.js", imagePath: "/images/tech/vue.png", color: "#42b883" },
    { name: "Node.js", imagePath: "/images/tech/nodejs.png", color: "#68a063" },
    { name: "SQL", imagePath: "/images/tech/mysql.png", color: "#00758f" },
    { name: "python", imagePath: "/images/tech/python.png", color: "#ffd343" },
    { name: "nextjs", imagePath: "/images/tech/nextjs.png", color: "#000000" },
  ];


  return (
    <section className="relative min-h-screen flex items-center bg-[#121212]">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500 opacity-5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-500 opacity-5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 z-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-3/5 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-gray-300">Hello, I'm</span>
              <br />
              <span className="text-blue-500">Mugisha Louis Marie</span>
              <br />
              <span className="text-white">De Montfort</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-400">
              Full-Stack Developer
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl">
              Final-year Software Engineering student passionate about building responsive, 
              user-friendly web applications with modern technologies.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg shadow-blue-500/20">
                Contact Me
              </Link>
              <a 
                href="/Montfort Mugisha_CV.pdf" 
                download="Montfort Mugisha_CV.pdf" 
                className="px-8 py-3 flex items-center gap-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:bg-opacity-10 font-medium rounded-lg transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </a>
            </div>
          </div>

          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative">
              {/* Profile image with glowing effect */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#1E1E1E] shadow-2xl relative z-10">
                <img 
                  src="/Mugisha_Docile.jpeg" 
                  alt="Mugisha Louis Marie De Montfort" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/300?text=MM';
                  }}
                />
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30"></div>
            </div>
          </div>
        </div>

        {/* Tech stack with image placeholders and glow effect */}
        <div className="mt-20 text-center">
  <h3 className="text-gray-400 mb-6 uppercase tracking-wider text-sm">Tech Stack</h3>
  <div className="flex flex-wrap justify-center gap-6 md:gap-10">
    {techStack.map((tech, index) => (
      <div
        key={index}
        className="flex flex-col items-center group hover:scale-105 transition-transform duration-300"
      >
        <div
          className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#1E1E1E] flex items-center justify-center mb-2 overflow-hidden border-2 border-gray-800 transition-all duration-300"
          style={{
            borderColor: tech.color,
            boxShadow: `0 0 10px ${tech.color}30`, // subtle glow on hover
          }}
        >
          {/* Optional background glow */}
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300"
            style={{ backgroundColor: tech.color }}
          ></div>

          <img
            src={tech.imagePath}
            alt={tech.name}
            className="relative w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/48?text=Icon';
            }}
          />
        </div>
        <span
          className="text-sm transition-colors duration-300 group-hover:brightness-125"
          style={{ color: tech.color }}
        >
          {tech.name}
        </span>
      </div>
    ))}
  </div>
</div>


        {/* Developer mantra */}
        <div className="mt-16 text-center">
          <blockquote className="italic text-gray-300 text-xl">
            "Code. Learn. Evolve. Every line of code is a step forward."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Hero;
