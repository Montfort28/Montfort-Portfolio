import React, { useState } from 'react';
import { personalInfo } from '../utils/data';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'experience' | 'education'>('about');

  const highlights = [
    {
      icon: '✓',
      title: 'Fullstack Expert',
      description: 'Next.js, PostgreSQL, Node.js'
    },
    {
      icon: '◆',
      title: 'UI/UX Focused',
      description: 'Beautiful, accessible interfaces'
    },
    {
      icon: '↗',
      title: 'Performance-Driven',
      description: 'Fast, scalable applications'
    },
    {
      icon: '◎',
      title: 'Team Player',
      description: 'Agile, collaborative mindset'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-neutral-gray via-ivory to-beige">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <p className="text-sm uppercase tracking-[0.2em] text-clay font-semibold mb-4">
            Get to know me
          </p>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-espresso mb-6">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-clay to-ivory mx-auto"></div>
        </div>

        {/* Main Content with Image and Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          {/* Left: Profile Image with Creative Background */}
          <div className="flex justify-center animate-slideInLeft">
            <div className="relative">
              {/* Decorative background shapes */}
              <div className="absolute -inset-8 bg-gradient-to-br from-clay/20 to-ivory/20 rounded-3xl blur-2xl transform -rotate-6"></div>
              <div className="absolute -inset-4 bg-white/50 rounded-2xl blur-xl transform rotate-3"></div>

              <div className="relative w-72 h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/Mugisha_Montfort_Profile.jpeg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/288x384?text=Profile';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 via-transparent to-transparent"></div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl px-6 py-4 shadow-lg border border-neutral-gray">
                <p className="text-xs font-semibold text-clay uppercase tracking-wider">Based in</p>
                <p className="text-lg font-display font-bold text-espresso">{personalInfo.location}</p>
              </div>
            </div>
          </div>

          {/* Right: Bio and Quick Info */}
          <div className="animate-slideInRight space-y-6">
            <div>
              <p className="text-lg text-espresso/70 leading-relaxed mb-6">
                {personalInfo.about}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-xl p-4 border border-neutral-gray">
                  <p className="text-2xl font-display font-bold text-mauve">20+</p>
                  <p className="text-xs text-espresso/60 uppercase tracking-wider">Major Projects</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-neutral-gray">
                  <p className="text-2xl font-display font-bold text-peach">15+</p>
                  <p className="text-xs text-espresso/60 uppercase tracking-wider">Technologies</p>
                </div>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 border border-neutral-gray hover:shadow-lg hover:border-mauve transition-all duration-300"
                  >
                    <div className="text-3xl mb-2">{highlight.icon}</div>
                    <p className="font-semibold text-sm text-espresso">{highlight.title}</p>
                    <p className="text-xs text-espresso/50 mt-1">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Experience Section */}
        <div className="bg-white rounded-2xl shadow-soft border border-neutral-gray overflow-hidden">
          {/* Tab Buttons */}
          <div className="flex border-b border-neutral-gray">
            {['about', 'experience', 'education'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as typeof activeTab)}
                className={`flex-1 py-4 px-6 text-center font-semibold uppercase tracking-wider text-sm transition-all duration-300 ${activeTab === tab
                  ? 'text-white bg-gradient-to-r from-clay to-ivory'
                  : 'text-espresso hover:text-clay'
                  }`}
              >
                {tab === 'about' && 'About'}
                {tab === 'experience' && 'Experience'}
                {tab === 'education' && 'Education'}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8 md:p-12">
            {/* About Tab */}
            {activeTab === 'about' && (
              <div className="space-y-6 animate-fadeInUp">
                <p className="text-lg text-espresso/80 leading-relaxed">
                  I'm a passionate fullstack engineer specializing in modern web technologies. My journey began with curiosity about how websites work, evolving into a deep love for both the creative and technical aspects of development.
                </p>
                <p className="text-lg text-espresso/80 leading-relaxed">
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
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-clay text-xl mt-1">✓</span>
                      <p className="text-espresso/70">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Experience Tab */}
            {activeTab === 'experience' && (
              <div className="space-y-8 animate-fadeInUp">
                <div className="border-l-4 border-gradient-to-b from-clay to-ivory pl-6 pb-8">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-2xl font-semibold text-espresso">Software Developer</h3>
                      <p className="text-clay font-semibold">Bittwok, Kigali</p>
                    </div>
                    <span className="bg-clay/10 text-clay px-4 py-1 rounded-full text-sm font-semibold">Current</span>
                  </div>
                  <p className="text-espresso/60 text-sm mb-4">Nov 2025 - Present</p>
                  <ul className="space-y-2 text-espresso/70">
                    <li>• Developing frontend components for a tourism discovery and booking website using PHP and React</li>
                    <li>• Building interactive UI components with Tailwind CSS for improved user experience</li>
                    <li>• Integrating RESTful APIs to connect backend services with frontend application</li>
                    <li>• Working in a fast-paced startup environment at Norrsken House accelerator</li>
                    <li>• Collaborating with cross-functional team members on product development</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['React', 'PHP', 'Tailwind CSS', 'REST APIs', 'JavaScript', 'Frontend'].map((tech) => (
                      <span key={tech} className="text-xs font-semibold px-3 py-1 bg-clay/10 text-clay rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-l-4 border-gradient-to-b from-clay to-ivory pl-6 pb-8">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-2xl font-semibold text-espresso">Software Engineering Intern</h3>
                      <p className="text-clay font-semibold">BouletteProof</p>
                    </div>
                    <span className="bg-clay/10 text-clay px-4 py-1 rounded-full text-sm font-semibold">Internship</span>
                  </div>
                  <p className="text-espresso/60 text-sm mb-4">May - August 2025</p>
                  <ul className="space-y-2 text-espresso/70">
                    <li>• Implemented Google OAuth 2.0 authentication system</li>
                    <li>• Developed real-time Slack notification system for ticket updates</li>
                    <li>• Created automated task escalation through ClickUp API integration</li>
                    <li>• Practiced advanced Git workflows (rebase, merge, conflict resolution)</li>
                    <li>• Collaborated in Agile team with weekly sprints and code reviews</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['Next.js', 'PostgreSQL', 'Prisma', 'OAuth', 'Slack API', 'ClickUp API'].map((tech) => (
                      <span key={tech} className="text-xs font-semibold px-3 py-1 bg-clay/10 text-clay rounded-full">
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
                <div className="border-l-4 border-gradient-to-b from-clay to-ivory pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-2xl font-semibold text-espresso">Bachelor of Software Engineering</h3>
                      <p className="text-clay font-semibold">{personalInfo.education.institution}</p>
                    </div>
                    <span className="bg-clay/10 text-clay px-4 py-1 rounded-full text-sm font-semibold">{personalInfo.education.graduationDate}</span>
                  </div>
                  <p className="text-espresso/60 text-sm">📍 {personalInfo.education.location}</p>
                  <p className="text-espresso/70 mt-4">
                    Pursued a degree in Software Engineering with strong focus on fullstack development, cloud technologies, and modern software architecture patterns.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-clay/10 to-ivory/10 rounded-xl p-6 border border-neutral-gray">
                  <h4 className="font-semibold text-espresso mb-4">Certifications & Achievements</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-clay text-xl">★</span>
                      <div>
                        <p className="font-semibold text-espresso text-sm">Daily Health Reminder Challenge</p>
                        <p className="text-espresso/60 text-xs">Possinove - 7-day challenge completed April 2025</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-clay text-xl">★</span>
                      <div>
                        <p className="font-semibold text-espresso text-sm">Beyond Success Leadership Program</p>
                        <p className="text-espresso/60 text-xs">Dr. John C. Maxwell - 2024</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-clay text-xl">★</span>
                      <div>
                        <p className="font-semibold text-espresso text-sm">Data Analysis Bootcamp</p>
                        <p className="text-espresso/60 text-xs">Udemy - 2025</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Philosophy Quote */}
        <div className="mt-16 text-center animate-fadeInUp">
          <div className="inline-block bg-white rounded-2xl px-8 py-6 shadow-soft border border-neutral-gray max-w-3xl">
            <p className="text-xl md:text-2xl italic font-light text-espresso/70">
              "Code is poetry written for machines, but designed for humans. The best code solves problems elegantly while remaining a joy to read and maintain."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;