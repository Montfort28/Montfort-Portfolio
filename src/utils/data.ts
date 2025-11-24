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
  category: 'frontend' | 'backend' | 'tools' | 'soft-skills';
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
    title: "Mental Health Platform",
    description: "A fullstack web platform supporting mental health journeys with a visual Mind Garden progress tool. Features secure authentication, real-time data sync, and intuitive UI/UX design.",
    technologies: ["Next.js", "Tailwind CSS", "PostgreSQL", "Node.js", "Prisma"],
    image: "/images/projects/mental-health.jpg",
    liveLink: "https://safe-haven-mental-health.vercel.app/",
    githubLink: "https://github.com/Montfort28/safe-haven"
  },
  {
    id: 2,
    title: "Daily Health Reminder App",
    description: "A fullstack health reminder application with offline data storage using IndexedDB. Features dark mode toggle, accessible UI, and seamless synchronization.",
    technologies: ["Vue.js", "Tailwind CSS", "IndexedDB", "JavaScript"],
    image: "/images/projects/health-reminder.jpg",
    liveLink: "https://daily-health-reminder-web-app.vercel.app/",
    githubLink: "https://github.com/Montfort28/daily-health-reminder-web-app"
  },
  {
    id: 3,
    title: "Educational Institutions Landing Page",
    description: "Fully responsive landing page built from Figma design. Features smooth animations, carousel functionality, and modern interactive elements using Framer Motion.",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    image: "/images/projects/educational-landing.jpg",
    liveLink: "https://educational-landing-page.vercel.app/",
    githubLink: "https://github.com/Montfort28/educational-landing"
  },
  {
    id: 4,
    title: "BouletteProof - BP Ticket System",
    description: "Enterprise ticketing system with Google OAuth integration, Slack notifications, and ClickUp task automation. Internship project showcasing production-level development skills.",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Google OAuth", "Slack API"],
    image: "/images/projects/bp-ticket-system.jpg",
    liveLink: "https://bp-ticket-system.vercel.app/",
    githubLink: "https://github.com/Montfort28/bp-ticket-system"
  }
];

export const skills: ISkill[] = [
  // Frontend
  { name: "React", level: 85, category: "frontend" },
  { name: "Next.js", level: 90, category: "frontend" },
  { name: "Vue.js", level: 80, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 95, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "PostgreSQL", level: 82, category: "backend" },
  { name: "Prisma ORM", level: 85, category: "backend" },
  { name: "REST APIs", level: 85, category: "backend" },
  { name: "OAuth / Authentication", level: 80, category: "backend" },

  // Tools
  { name: "GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 92, category: "tools" },
  { name: "Figma", level: 80, category: "tools" },
  { name: "Git & Rebase", level: 85, category: "tools" },

  // Soft Skills
  { name: "Teamwork & Agile", level: 90, category: "soft-skills" },
  { name: "Communication", level: 88, category: "soft-skills" },
  { name: "Problem Solving", level: 92, category: "soft-skills" },
  { name: "Attention to Detail", level: 90, category: "soft-skills" }
];

export const certifications: ICertification[] = [
  {
    title: "Daily Health Reminder Web App Challenge",
    issuer: "Possinove",
    date: "April 2024",
    description: "Completed a 7-day challenge to build a production-ready health reminder application using Vue.js, Tailwind CSS, and IndexedDB with offline functionality."
  },
  {
    title: "BouletteProof Internship",
    issuer: "Tech Company",
    date: "2024",
    description: "Full internship experience working on production systems with Google OAuth, Slack integrations, and enterprise-level database management using PostgreSQL and Prisma."
  }
];

export const personalInfo = {
  name: "Mugisha Louis Marie De Montfort",
  title: "Fullstack Engineer",
  role: "Fullstack Engineer (Next.js, PostgreSQL)",
  email: "mugishamontfort28@gmail.com",
  phone: "+250 790 779 776",
  location: "Kigali, Rwanda",
  oneLiner: "I build fast, modern, and scalable web applications using Next.js and clean UI design principles.",
  bio: "Fullstack developer with strong frontend experience in Next.js & Tailwind. Passionate about UI/UX with expertise in API integrations (Slack, ClickUp, OAuth) and team collaboration.",
  about: `Fullstack developer with strong frontend experience in Next.js & Tailwind CSS. Passionate about creating beautiful, intuitive user experiences while building scalable backend systems. 

I specialize in API integrations including Slack notifications, ClickUp automation, and OAuth implementations. With hands-on experience in Agile environments, I excel at code reviews, collaborative development, and maintaining clean code architecture.

My approach combines modern technologies with attention to detail, ensuring every project is both performant and visually stunning.`,
  education: {
    degree: "Bachelor of Software Engineering",
    institution: "INES Ruhengeri",
    location: "Musanze, Rwanda",
    graduationDate: "October 2025"
  },
  social: {
    github: "https://github.com/Montfort28",
    linkedin: "https://www.linkedin.com/in/mugisha-montfort-5b9177346/",
  },
  resume: "/Mugisha_Montfort_RESUME.PDF",
  profileImage: "/Mugisha_Docile.JPEG",
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