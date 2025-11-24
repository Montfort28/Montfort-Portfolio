import React from 'react';
import { skills, ISkill } from '../utils/data';

const Skills: React.FC = () => {
  // Group skills by category
  const skillCategories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    tools: skills.filter(skill => skill.category === 'tools'),
    'soft-skills': skills.filter(skill => skill.category === 'soft-skills')
  };

  const categoryLabels = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    tools: 'Development Tools',
    'soft-skills': 'Soft Skills'
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <p className="text-sm uppercase tracking-[0.2em] text-clay font-semibold mb-4">
            Technical Arsenal
          </p>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-espresso mb-6">
            Skills & Expertise
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-clay to-ivory mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {Object.entries(skillCategories).map(([category, categorySkills]) => (
            <div
              key={category}
              className="bg-gradient-to-br from-neutral-gray to-ivory rounded-2xl p-8 shadow-soft hover:shadow-xl transition-all duration-300 border border-white/50"
            >
              <h3 className="text-2xl font-display font-bold text-espresso mb-8">
                {categoryLabels[category as keyof typeof categoryLabels]}
              </h3>

              <div className="space-y-6">
                {categorySkills.map((skill: ISkill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-base font-semibold text-espresso">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-clay">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-neutral-gray rounded-full h-3 overflow-hidden">
                      <div
                        className="h-3 rounded-full bg-gradient-to-r from-clay to-ivory transition-all duration-700 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: 'Years Experience', value: '2+' },
            { label: 'Projects Completed', value: '15+' },
            { label: 'Technologies', value: '20+' },
            { label: 'Happy Collaborators', value: '10+' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-ivory to-beige rounded-xl border border-neutral-gray"
            >
              <p className="text-3xl font-display font-bold text-clay mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-espresso/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;