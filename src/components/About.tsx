import React from 'react';

const About: React.FC = () => {
  const skills = [
    { 
      category: "Frontend", 
      items: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React.js", "Vue.js"] 
    },
    { 
      category: "Backend", 
      items: ["Node.js", "Express.js", "Python", "MySQL"] 
    },
    { 
      category: "Tools", 
      items: ["Git/GitHub", "VS Code", "Figma"] 
    },
    { 
      category: "Soft Skills", 
      items: ["Problem-solving", "Teamwork", "Communication", "Adaptability"] 
    }
  ];

  const hobbies = [
    {
      name: "Reading Novels",
      icon: "/images/hobbies/reading.png",
      description: "I enjoy immersing myself in fiction, particularly fantasy and science fiction novels."
    },
    {
      name: "Drawing",
      icon: "/images/hobbies/drawing.png",
      description: "I love sketching and digital illustration in my free time."
    },
    {
      name: "Creating Animations",
      icon: "/images/hobbies/animation.png",
      description: "I'm passionate about creating simple animations and motion graphics."
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          {/* About Me Content */}
          <div className="w-full md:w-3/5">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <div className="space-y-6 text-gray-300">
              <p>
                I'm a final-year Software Engineering student at INES Ruhengeri in Rwanda, 
                set to graduate in October 2025. I'm passionate about creating elegant, efficient 
                web applications that deliver exceptional user experiences.
              </p>
              
              <p>
                My journey in tech started with a curiosity about how websites work, which led me to 
                explore web development. I quickly fell in love with both the creative and technical 
                aspects of coding, and I've been honing my skills ever since.
              </p>
              
              <p>
                I specialize in Full-Stack Development with a stronger focus on frontend technologies. 
                I enjoy bringing designs to life with clean, responsive interfaces and am constantly 
                learning new technologies to expand my skillset.
              </p>
              
              <p>
                Outside of coding, I'm passionate about leadership development and recently participated 
                in the Beyond Success program by Dr. John C. Maxwell, which has helped me develop valuable 
                team collaboration and communication skills.
              </p>
            </div>
            
            {/* Education */}
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <div className="p-5 bg-[#1E1E1E] rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold">Bachelor of Software Engineering</h4>
                    <p className="text-gray-400">INES Ruhengeri, Musanze, Rwanda</p>
                  </div>
                  <span className="text-blue-500">Expected Oct 2025</span>
                </div>
              </div>
            </div>
            
            {/* Certifications */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Certifications</h3>
              <div className="space-y-4">
                <div className="p-5 bg-[#1E1E1E] rounded-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold">Beyond Success Leadership Program</h4>
                      <p className="text-gray-400">Dr. John C. Maxwell</p>
                    </div>
                    <span className="text-blue-500">2024</span>
                  </div>
                </div>
                
                <div className="p-5 bg-[#1E1E1E] rounded-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold">Frontend Project Certificate</h4>
                      <p className="text-gray-400">Possinove - Daily Health Reminder Web App</p>
                    </div>
                    <span className="text-blue-500">April 2024</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hobbies Section */}
            <div className="mt-12">
  <h3 className="text-xl font-bold mb-6">Hobbies & Interests</h3>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
    {hobbies.map((hobby, index) => (
      <div
        key={index}
        className="p-6 bg-[#1E1E1E] rounded-xl transition-all duration-300 hover:bg-[#2A2A2A] hover:shadow-xl hover:scale-[1.03]"
      >
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-blue-500 p-4 mb-4 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:rotate-6">
            <img
              src={hobby.icon}
              alt={hobby.name}
              className="w-15 h-15 object-contain"
              onError={(e) => {
                e.currentTarget.src = `https://via.placeholder.com/48?text=${hobby.name[0]}`;
              }}
            />
          </div>
          <h4 className="font-semibold text-gray-200 text-lg mb-1">{hobby.name}</h4>
          <p className="text-gray-400 text-sm">{hobby.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

          </div>
          
          {/* Skills Section */}
          <div className="w-full md:w-2/5">
            <div className="sticky top-24">
              <h2 className="text-3xl font-bold mb-6">My Skills</h2>
              <div className="w-20 h-1 bg-blue-500 mb-8"></div>
              
              <div className="space-y-8">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold mb-4 text-gray-200">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-3">
                      {skillGroup.items.map((skill, i) => (
                        <div 
                          key={i} 
                          className="px-4 py-2 bg-[#1E1E1E] border border-gray-700 rounded-lg text-gray-300 hover:border-blue-500 transition-colors"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Languages */}
              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4 text-gray-200">Languages</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">English</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-6 h-1 rounded-full ${i < 5 ? 'bg-blue-500' : 'bg-gray-700'}`}></div>
                      ))}
                    </div>
                    <span className="text-gray-400">Fluent</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Kinyarwanda</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-6 h-1 rounded-full ${i < 5 ? 'bg-blue-500' : 'bg-gray-700'}`}></div>
                      ))}
                    </div>
                    <span className="text-gray-400">Native</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;