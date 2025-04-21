export interface IProject {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    liveLink?: string;
    githubLink: string;
  }
  
  export interface ISkill {
    name: string;
    level: number; // 1-100
    category: 'frontend' | 'backend' | 'tools' | 'languages';
  }
  
  export interface ICertification {
    title: string;
    issuer: string;
    date: string;
    description: string;
  }
  
  export const projects: IProject[] = [
    {
      id: 1,
      title: "Safe Haven – Mental Health Platform",
      description: "A unique web-based platform to support users' mental health journeys. Includes Mind Garden, an interactive feature to visualize personal progress.",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      image: "/images/projects/safe-haven.jpg",
      githubLink: "https://github.com/Montfort28/safe-haven"
    },
    {
      id: 2,
      title: "Daily Health Reminder Web App",
      description: "A Vue.js application for setting personalized health reminders. Features offline data storage with IndexedDB and a dark mode toggle.",
      technologies: ["Vue.js", "Tailwind CSS", "IndexedDB"],
      image: "/images/projects/health-reminder.jpg",
      liveLink: "https://daily-health-reminder-web-app.vercel.app/",
      githubLink: "https://github.com/Montfort28/daily-health-reminder"
    },
    {
      id: 3,
      title: "To-Do List System",
      description: "A CRUD-based task manager with user authentication and session handling. Built with PHP and MySQL for backend functionality.",
      technologies: ["PHP", "MySQL", "JavaScript", "CSS", "HTML"],
      image: "/images/projects/todo-list.jpg",
      githubLink: "https://github.com/Montfort28/todo_app"
    },
    {
      id: 4,
      title: "Interactive Portfolio Website",
      description: "A personal portfolio website to showcase projects and skills. Features responsive design with engaging interactive elements.",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      image: "/images/projects/portfolio.jpg",
      githubLink: "https://github.com/Montfort28/portfolio"
    }
  ];
  
  export const skills: ISkill[] = [
    // Frontend
    { name: "HTML", level: 90, category: "frontend" },
    { name: "CSS", level: 88, category: "frontend" },
    { name: "JavaScript", level: 85, category: "frontend" },
    { name: "Tailwind CSS", level: 88, category: "frontend" },
    { name: "React.js", level: 70, category: "frontend" },
    { name: "Vue.js", level: 75, category: "frontend" },
    
    // Backend
    { name: "Node.js", level: 65, category: "backend" },
    { name: "Python", level: 60, category: "backend" },
    { name: "SQL", level: 60, category: "backend" },
    { name: "PHP", level: 70, category: "backend" },
    { name: "MySQL", level: 70, category: "backend" },
    
    // Tools
    { name: "Git/GitHub", level: 80, category: "tools" },
    { name: "VS Code", level: 85, category: "tools" },
    { name: "Figma", level: 75, category: "tools" },
    
    // Languages
    { name: "English", level: 90, category: "languages" },
    { name: "Kinyarwanda", level: 100, category: "languages" }
  ];
  
  export const certifications: ICertification[] = [
    {
      title: "Frontend Project Certificate",
      issuer: "Possinove",
      date: "April 2024",
      description: "Completed a 7-day challenge to build a Daily Health Reminder Web App using Vue.js, Tailwind CSS, and IndexedDB."
    },
    {
      title: "Beyond Success Leadership Program",
      issuer: "Dr. John C. Maxwell",
      date: "2024",
      description: "Participated in a leadership and personal growth initiative focused on maximizing potential and effective leadership strategies."
    }
  ];
  
  export const personalInfo = {
    name: "MUGISHA Louis Marie De Montfort",
    title: "Software Engineering Student & Full-Stack Developer",
    email: "Mugishamontfort28@gmail.com",
    phone: "+250 790 779 776",
    location: "Kigali, Rwanda",
    bio: "Motivated and detail-oriented final-year Software Engineering student with a passion for Full-Stack Development. Proficient in HTML, CSS, JavaScript, and Tailwind CSS.",
    about: `I am a motivated and detail-oriented final-year Software Engineering student at INES Ruhengeri, expected to graduate in October 2025. I have a passion for Full-Stack Development with proficiency in HTML, CSS, JavaScript, and Tailwind CSS, along with foundational knowledge of React.js, Vue.js, Python, and SQL.
  
    My experience includes building responsive, user-friendly web applications while maintaining a commitment to continuous learning. I am skilled in both front-end and back-end development, with a strong focus on creating efficient and scalable solutions.
    
    I'm especially interested in UI/UX design and emerging front-end technologies, and I'm currently enhancing my skills in React.js and Vue.js for creating dynamic web applications.`,
    education: {
      degree: "Bachelor of Software Engineering",
      institution: "INES Ruhengeri",
      location: "Musanze, Rwanda",
      graduationDate: "Expected October 2025"
    },
    social: {
      github: "https://github.com/Montfort28",
      linkedin: "https://www.linkedin.com/in/mugisha-montfort-5b9177346/",
    },
    resume: "/files/MUGISHA_Montfort_Resume.pdf",
    references: [
      {
        name: "Mr. MUNYENTWARI Clement",
        title: "Professor of Software-Based Modules",
        institution: "INES Ruhengeri",
        email: "mclement@ines.ac.rw",
        phone: "+250 788 807 133"
      },
      {
        name: "Mrs. MBONIMANA Consolee",
        title: "Lecturer of Software-Based Modules",
        institution: "INES Ruhengeri",
        email: "mconsolee@ines.ac.rw",
        phone: "+250 785 642 109"
      }
    ]
  };