// For name in main intro text
export const name = 'Wriddhi Hazra';
export type Name = typeof name;

// navbar left-most logo text
export const logo = 'wriddhi.com';
export type Logo = typeof logo;

// bio for main section
export const bio = `Full-stack developer skilled in crafting responsive and performant web applications. With experience in technologies like Next.js, React, TypeScript, and Docker, I enjoy solving complex problems and delivering scalable solutions.`;
export type Bio = typeof bio;

// about me text for about section
export const aboutMe =
  'I specialize in full-stack development with a focus on front-end technologies like React, Next.js, and Tailwind CSS, while also having back-end experience with Node.js, Express, and PostgreSQL. My open-source contributions and work on production-grade applications reflect my passion for coding and problem-solving.';
export type AboutMe = typeof aboutMe;

// A sub text for writing/blog section
export const writingText = `I often share my experiences in web development, open-source contributions, and lessons learned along the way. Whether it’s code tips or project insights, my writings are a reflection of my passion for the field.`;
export type WritingText = typeof writingText;

// A sub text for contact section
export const contactText = `Feel free to reach out for collaborations, questions, or any exciting opportunities! I'm always eager to connect with like-minded developers and contribute to interesting projects.`;
export type ContactText = typeof contactText;

// Links to put in the navigation bar as well as footer at bottom of the page
export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Resume', href: '/resume.pdf' },
  { name: 'About', href: '/#about' },
  { name: 'Blog', href: '/#blog' },
  { name: 'Contact', href: '/#contact' },
];
export type NavLink = (typeof navLinks)[number];

// Selected projects (side box) for main section of page
export const selectedProjects = [
  { name: 'Pujo Atlas', link: 'https://atlas.ourkolkata.in/' },
  { name: 'Zoid', link: 'https://zoid.wriddhi.com' },
];
export type SelectedProject = (typeof selectedProjects)[number];

// Skills section for about section of the page
export const skills = [
  'C',
  'C++',
  'Python',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'Docker',
  'TailwindCSS',
  'Jest',
  'React Testing Library',
  'Git',
  'GitHub Actions',
  'CI/CD',
  'REST APIs',
  'GraphQL',
  'AWS S3',
  'Websockets',
  'JIRA',
  'Confluence',
];
export type Skill = (typeof skills)[number];

// work experience box for about section of the page
export const workExperiences = [
  {
    organisationName: 'ARS Inventif',
    position: 'Full-Stack Intern',
    date: 'Nov 2022 - May 2023',
    info: [
      'Developed a facial recognition-based attendance system using Next.js, TypeScript, and PostgreSQL.',
      'Created an LMS platform integrated with attendance tracking and video storage in AWS S3.',
    ],
  },
  {
    organisationName: 'Zscaler',
    position: 'Frontend Intern',
    date: 'Feb 2024 - Aug 2024',
    info: [
      'Migrated to react-query and axios for better data handling in a React-Typescript app.',
      'Unified build tools using Webpack and reduced JavaScript bundle size by 30%.',
    ],
  },
  {
    organisationName: 'Pujo Atlas',
    position: 'Frontend Lead',
    date: 'Sep 2024 - Present',
    info: [
      'Lead development of a community app that provides real-time information on Durga Puja locations.',
      'Implemented fuzzy search and marker clustering for real-time Durga Puja locations.',
    ],
  },
];
export type WorkExperience = (typeof workExperiences)[number];

// contact box for contact section of the page
export const contactOptions = {
  Github: 'https://github.com/wriddhi',
  LinkedIn: 'https://linkedin.com/in/wriddhi-hazra',
  X: 'https://x.com/wriddhihazra',
};
export type ContactOption = typeof contactOptions;

// for enabling/disabling maintained by text in footer, if you want.
export const showDeveloperText = true;
