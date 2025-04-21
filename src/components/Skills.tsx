import React from 'react';
import { skills, ISkill } from '../utils/data';

const Skills: React.FC = () => {
  // Group skills by category
  const skillCategories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    tools: skills.filter(skill => skill.category === 'tools'),
    languages: skills.filter(skill => skill.category === 'languages')
  };

  return (
    <section id="skills" className="py-20 bg-[#0D0D0D]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              My Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([category, categorySkills]) => (
            <div key={category} className="bg-[#121212] rounded-xl p-6 shadow-lg hover:shadow-blue-900/10 transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-6 capitalize border-b border-gray-800 pb-2">
                {category}
              </h3>
              <div className="space-y-5">
              {categorySkills.map((skill: ISkill) => (
  <div key={skill.name} className="space-y-2">
    <div className="flex justify-between text-sm">
      <div className="flex items-center gap-2">
        {/* Use optional chaining to safely access the possibly undefined icon property */}
        {(skill as any).icon && (
          <img 
            src={`/images/skills/${(skill as any).icon}`} 
            alt={skill.name}
            className="w-5 h-5 object-contain"
            onError={(e) => {
              e.currentTarget.src = `https://via.placeholder.com/20?text=${skill.name[0]}`;
            }}
          />
        )}
        <span className="text-gray-300">{skill.name}</span>
      </div>
      <span className="text-blue-400">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-800 rounded-full h-2.5">
      <div
        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${skill.level}%` }}
      />
    </div>
  </div>
))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;