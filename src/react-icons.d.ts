// src/react-icons.d.ts
declare module 'react-icons/fa' {
    import { IconType } from 'react-icons';
    export const FaGithub: IconType;
    export const FaLinkedin: IconType;
    export const FaEnvelope: IconType;
    export const FaExternalLinkAlt: IconType;
    
  }
  
  declare module 'react-icons' {
    import { ComponentType, SVGAttributes } from 'react';
    export interface IconBaseProps extends SVGAttributes<SVGElement> {
      size?: string | number;
      color?: string;
      title?: string;
    }
    export type IconType = ComponentType<IconBaseProps>;
  }