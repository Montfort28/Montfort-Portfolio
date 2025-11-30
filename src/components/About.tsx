import React, { useState } from 'react';
import { personalInfo } from '../utils/data';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'experience' | 'education'>('about');

  const highlights = [
    {
      icon: 'check',
      title: 'Fullstack Expert',
      description: 'Next.js, PostgreSQL, Node.js'
    },
    {
      icon: 'diamond',
      title: 'UI/UX Focused',
      description: 'Beautiful, accessible interfaces'
    },
    {
      icon: 'arrow',
      title: 'Performance-Driven',
      description: 'Fast, scalable applications'
    },
    {
      icon: 'circle',
      title: 'Team Player',
      description: 'Agile, collaborative mindset'
    }
  ];

  return (
    <section id="about" className="relative bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-l from-clay/20 to-transparent blur-3xl animate-breathe" style={{ animationDelay: '0s' }}></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-r from-ivory/10 to-transparent blur-3xl animate-breathe" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-8 md:pt-32 pb-24">
        {/* Header */}
        <div className="text-center mb-8 animate-fadeInUp">
          <p className="text-xs uppercase tracking-[0.3em] text-clay font-bold mb-2 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Get To Know Me
          </p>

          <div className="flex justify-center gap-1 mt-4 mb-12 md:mb-16">
            <div className="w-2 h-2 rounded-full bg-clay animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-clay animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 rounded-full bg-clay animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

        {/* Main Content with Image and Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center">
          {/* Left: Profile Image with Creative Background */}
          <div className="flex justify-center animate-slideInLeft opacity-0 mt-0 md:-mt-12 lg:-mt-20" style={{ animationDelay: '0.3s' }}>
            <div className="relative group">
              {/* Animated gradient orbs background */}
              <div className="absolute -inset-8 bg-gradient-to-r from-clay/20 via-transparent to-ivory/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute inset-0 w-72 h-96 rounded-full bg-gradient-to-br from-clay/30 to-ivory/10 blur-2xl opacity-40"></div>

              {/* Premium profile image container */}
              <div className="relative w-72 h-96 rounded-3xl overflow-hidden shadow-2xl border-2 border-clay/50 backdrop-blur-sm group-hover:border-clay transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-clay/50">
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-clay/50 to-ivory/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <img
                  src="/Mugisha_Montfort_Profile.jpeg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/288x384?text=Profile';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-clay/0 via-clay/10 to-ivory/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Decorative floating elements */}
              <div className="absolute top-0 right-0 w-20 h-20 border border-clay/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-float"></div>
              <div className="absolute bottom-0 right-10 w-16 h-16 border border-ivory/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>

              {/* Floating badge - now solid like Hero badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-clay to-clay/60 rounded-2xl p-4 shadow-lg backdrop-blur-md border border-clay/50 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-clay/50 animate-scaleInUp opacity-0" style={{ animationDelay: '0.8s' }}>
                <p className="text-xs font-bold uppercase tracking-widest text-white/80">Based In</p>
                <p className="text-lg font-display font-bold text-white">{personalInfo.location}</p>
              </div>
            </div>
          </div>

          {/* Right: Bio and Quick Info */}
          <div className="animate-slideInRight opacity-0 space-y-6" style={{ animationDelay: '0.4s' }}>
            <div>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                {personalInfo.about}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-clay/20 hover:border-clay hover:shadow-lg hover:shadow-clay/30 transition-all duration-500 transform hover:scale-105">
                  <p className="text-3xl font-display font-bold bg-gradient-to-r from-clay to-ivory bg-clip-text text-transparent">20+</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mt-2">Major Projects</p>
                </div>
                <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-ivory/20 hover:border-ivory hover:shadow-lg hover:shadow-ivory/30 transition-all duration-500 transform hover:scale-105">
                  <p className="text-3xl font-display font-bold bg-gradient-to-r from-ivory to-clay bg-clip-text text-transparent">15+</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mt-2">Technologies</p>
                </div>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((highlight, index) => {
                  const isWhiteCard = highlight.title === 'UI/UX Focused' || highlight.title === 'Team Player';
                  const borderColor = isWhiteCard ? 'border-white/30' : 'border-clay/20';
                  const hoverBorder = isWhiteCard ? 'hover:border-white' : 'hover:border-clay';
                  const hoverShadow = isWhiteCard ? 'hover:shadow-white/40' : 'hover:shadow-clay/30';

                  return (
                    <div
                      key={index}
                      className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-xl p-6 border ${borderColor} ${hoverBorder} hover:shadow-lg ${hoverShadow} transition-all duration-500 transform hover:scale-105 overflow-hidden`}
                      style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                    >
                      {/* Animated gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-clay/0 via-clay/10 to-ivory/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>

                      <div className="relative z-10">
                        <div className="mb-3 group-hover:scale-110 transition-transform duration-300 inline-flex items-center justify-center">
                          {highlight.icon === 'check' && (
                            <svg className="w-7 h-7 text-clay" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                          {highlight.icon === 'diamond' && (
                            <svg className="w-7 h-7 text-ivory" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2l4 7h5l-4 6h4l-9 7-9-7h4l-4-6h5l4-7z" />
                            </svg>
                          )}
                          {highlight.icon === 'arrow' && (
                            <svg className="w-7 h-7 text-clay" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                          )}
                          {highlight.icon === 'circle' && (
                            <svg className="w-7 h-7 text-ivory" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="9" strokeWidth={2} />
                            </svg>
                          )}
                        </div>
                        <p className="font-semibold text-sm text-white">{highlight.title}</p>
                        <p className="text-xs text-gray-400 mt-1">{highlight.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Experience Section */}
        <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-800/50 overflow-hidden">
          {/* Tab Buttons */}
          <div className="flex border-b border-gray-800/50 bg-gradient-to-r from-gray-900/50 to-transparent">
            {['about', 'experience', 'education'].map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as typeof activeTab)}
                className={`flex-1 py-4 px-6 text-center font-semibold uppercase tracking-wider text-xs transition-all duration-300 relative group ${activeTab === tab
                  ? 'text-white'
                  : 'text-gray-400 hover:text-gray-200'
                  }`}
              >
                <span className="relative z-10">
                  {tab === 'about' && 'About'}
                  {tab === 'experience' && 'Experience'}
                  {tab === 'education' && 'Education'}
                </span>
                {activeTab === tab && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-clay/30 to-ivory/20"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-clay to-ivory"></div>
                  </>
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8 md:p-12">
            {/* About Tab */}
            {activeTab === 'about' && (
              <div className="space-y-6 animate-fadeInUp">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate fullstack engineer specializing in modern web technologies. My journey began with curiosity about how websites work, evolving into a deep love for both the creative and technical aspects of development.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  What drives me is creating elegant solutions that not only work perfectly but also delight users. I believe in:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Clean, maintainable code',
                    'User-first design thinking',
                    'Continuous learning & growth',
                    'Team collaboration & communication',
                    'Performance & scalability',
                    'Attention to detail'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/40 transition-all duration-300 transform hover:translate-x-2">
                      <span className="text-clay text-xl mt-0.5 flex-shrink-0">✓</span>
                      <p className="text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Experience Tab */}
            {activeTab === 'experience' && (
              <div className="space-y-8 animate-fadeInUp">
                <div className="border-l-4 border-gradient-to-b from-clay to-ivory pl-6 pb-8 hover:pl-8 transition-all duration-300">
                  <div className="flex justify-between items-start mb-2 flex-wrap gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">Software Developer</h3>
                      <p className="text-clay font-semibold">Bittwok, Kigali</p>
                    </div>
                    <span className="bg-gradient-to-r from-clay/30 to-clay/10 text-clay px-4 py-1 rounded-full text-sm font-semibold border border-clay/50">Current</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">Nov 2025 - Present</p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Developing frontend components for a tourism discovery and booking website using PHP and React</li>
                    <li>• Building interactive UI components with Tailwind CSS for improved user experience</li>
                    <li>• Integrating RESTful APIs to connect backend services with frontend application</li>
                    <li>• Working in a fast-paced startup environment at Norrsken House accelerator</li>
                    <li>• Collaborating with cross-functional team members on product development</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['React', 'PHP', 'Tailwind CSS', 'REST APIs', 'JavaScript', 'Frontend'].map((tech) => (
                      <span key={tech} className="text-xs font-semibold px-3 py-1 bg-gradient-to-r from-clay/20 to-clay/10 text-clay rounded-full border border-clay/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-l-4 border-gradient-to-b from-ivory to-clay pl-6 pb-8 hover:pl-8 transition-all duration-300">
                  <div className="flex justify-between items-start mb-2 flex-wrap gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">Software Engineering Intern</h3>
                      <p className="text-ivory font-semibold">BouletteProof</p>
                    </div>
                    <span className="bg-gradient-to-r from-ivory/30 to-ivory/10 text-ivory px-4 py-1 rounded-full text-sm font-semibold border border-ivory/50">Internship</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">May - August 2025</p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Implemented Google OAuth 2.0 authentication system</li>
                    <li>• Developed real-time Slack notification system for ticket updates</li>
                    <li>• Created automated task escalation through ClickUp API integration</li>
                    <li>• Practiced advanced Git workflows (rebase, merge, conflict resolution)</li>
                    <li>• Collaborated in Agile team with weekly sprints and code reviews</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['Next.js', 'PostgreSQL', 'Prisma', 'OAuth', 'Slack API', 'ClickUp API'].map((tech) => (
                      <span key={tech} className="text-xs font-semibold px-3 py-1 bg-gradient-to-r from-ivory/20 to-ivory/10 text-ivory rounded-full border border-ivory/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Education Tab */}
            {activeTab === 'education' && (
              <div className="space-y-8 animate-fadeInUp">
                <div className="border-l-4 border-gradient-to-b from-clay to-ivory pl-6 hover:pl-8 transition-all duration-300">
                  <div className="flex justify-between items-start mb-2 flex-wrap gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">Bachelor of Software Engineering</h3>
                      <p className="text-clay font-semibold">{personalInfo.education.institution}</p>
                    </div>
                    <span className="bg-gradient-to-r from-clay/30 to-clay/10 text-clay px-4 py-1 rounded-full text-sm font-semibold border border-clay/50">{personalInfo.education.graduationDate}</span>
                  </div>
                  <p className="text-gray-400 text-sm"> {personalInfo.education.location}</p>
                  <p className="text-gray-300 mt-4">
                    Pursued a degree in Software Engineering with strong focus on fullstack development, cloud technologies, and modern software architecture patterns.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-clay/20 to-ivory/10 rounded-xl p-6 border border-gray-800/50 hover:border-clay/50 transition-all duration-300">
                  <h4 className="font-semibold text-white mb-4">Certifications & Achievements</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3 p-3 rounded-lg hover:bg-gray-800/40 transition-all duration-300">
                      <span className="text-clay text-xl flex-shrink-0">★</span>
                      <div>
                        <p className="font-semibold text-white text-sm">Daily Health Reminder Challenge</p>
                        <p className="text-gray-400 text-xs">Possinove - 7-day challenge completed April 2025</p>
                      </div>
                    </li>
                    <li className="flex gap-3 p-3 rounded-lg hover:bg-gray-800/40 transition-all duration-300">
                      <span className="text-clay text-xl flex-shrink-0">★</span>
                      <div>
                        <p className="font-semibold text-white text-sm">Beyond Success Leadership Program</p>
                        <p className="text-gray-400 text-xs">Dr. John C. Maxwell - 2024</p>
                      </div>
                    </li>
                    <li className="flex gap-3 p-3 rounded-lg hover:bg-gray-800/40 transition-all duration-300">
                      <span className="text-clay text-xl flex-shrink-0">★</span>
                      <div>
                        <p className="font-semibold text-white text-sm">Data Analysis Bootcamp</p>
                        <p className="text-gray-400 text-xs">Udemy - 2025</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Philosophy Quote */}
        <div className="mt-20 text-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <div className="inline-block bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl px-8 py-8 shadow-2xl border border-gray-800/50 hover:border-clay/30 transition-all duration-500 max-w-3xl group">
            <svg className="w-8 h-8 text-clay/50 mx-auto mb-4 group-hover:text-clay transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.021-5-7-5S0 3.75 0 5c0 5 0 7 .6 9.5.4 1.5 1 3 2.5 4.5s2.5 2 4 2c2.5 0 5-3 5-4 0-.2-.1-.4-.2-.5s-2.6 1-4 1c-2.5 0-3-2-3-4 0 0 0-1 2.5-1 2 0 4 1 4 3v4c0 4-3 6-7 6z" />
            </svg>
            <p className="text-xl md:text-2xl italic font-light text-gray-300">
              "Code is poetry written for machines, but designed for humans. The best code solves problems elegantly while remaining a joy to read and maintain."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;