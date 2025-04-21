import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../utils/data';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  showLabels?: boolean;
  vertical?: boolean;
  iconClassName?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  className = '',
  iconSize = 20,
  showLabels = false,
  vertical = false,
  iconClassName = ''
}) => {
  return (
    <div className={`flex ${vertical ? 'flex-col space-y-4' : 'space-x-4'} ${className}`}>
      <a 
        href={personalInfo.social.github}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center ${vertical ? 'justify-start' : 'justify-center'} hover:text-blue-400 transition-colors`}
        aria-label="GitHub"
      >
        <FaGithub size={iconSize} className={iconClassName} />
        {showLabels && <span className="ml-2">GitHub</span>}
      </a>
      
      <a 
        href={personalInfo.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center ${vertical ? 'justify-start' : 'justify-center'} hover:text-blue-400 transition-colors`}
        aria-label="LinkedIn"
      >
        <FaLinkedin size={iconSize} className={`text-blue-500 ${iconClassName}`} />
        {showLabels && <span className="ml-2">LinkedIn</span>}
      </a>
      
      <a 
        href={`mailto:${personalInfo.email}`}
        className={`flex items-center ${vertical ? 'justify-start' : 'justify-center'} hover:text-blue-400 transition-colors`}
        aria-label="Email"
      >
        <FaEnvelope size={iconSize} className={iconClassName} />
        {showLabels && <span className="ml-2">Email</span>}
      </a>
    </div>
  );
};

export default SocialLinks;