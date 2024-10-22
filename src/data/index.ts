// For name in main intro text
export const name = "Wriddhi Hazra";

// navbar left-most logo text
export const logo = "wriddhi";

// bio for main section
export const bio = `A passionate web developer with a knack for creating dynamic and responsive web applications. With a background in computer science and a love for coding, I thrive on turning ideas into reality through technology.`;

// about me text for about section
export const aboutMe =
  "I specialize in front-end development with a focus on creating user-friendly interfaces. My skills include HTML, CSS, JavaScript, and frameworks like React and Vue.js. I also have experience in back-end development using Node.js and Express, making me a versatile full-stack developer.";

// A sub text for writing/blog section
export const writingText = `I typically keep my words few, but when I do pen them, it’s a glimpse into my passions and my adventure through the digital landscape.`;

// A sub text for contact section
export const contactText = `I’d love to hear from you! Whether you have questions, collaboration ideas, or just want to connect, feel free to reach out. I’m always open to engaging conversations and exploring new opportunities.`;

// Links to put in the navigation bar as well as footer at bottom of the page
export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Blog", href: "/#blog" },
  { name: "Contact", href: "/#contact" },
];
export type NavLink = (typeof navLinks)[number];

// Selected projects (side box) for main section of page
export const selectedProjects = [
  { name: "Project 1", link: "#" },
  { name: "Project 2", link: "#" },
  { name: "Project 3", link: "#" },
  { name: "Project 4", link: "#" },
];
export type SelectedProject = (typeof selectedProjects)[number];

// Skills section for about section of the page
export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Express",
  "Nodejs",
  "MongoDB",
  "Git",
  "GitHub",
  "Astrojs",
  "TailwindCSS",
];
export type Skill = (typeof skills)[number];

// work experience box for about section of the page
export const workExperiences = [
  {
    organisationName: "company 1",
    position: "Intern",
    date: "2022 - 2023",
    info: ["I worked on this", "I showed this skills"],
  },
  {
    organisationName: "company 2",
    position: "UI/UX Designer",
    date: "2024 - present",
    info: ["I worked on this", "I showed this skills"],
  },
  {
    organisationName: "company 3",
    position: "React Developer",
    date: "2022 - 2023",
    info: ["I worked on this", "I showed this skills"],
  },
];
export type WorkExperience = (typeof workExperiences)[number];

// contact box for contact section of the page
export const contactOptions = [
  { name: "Github", link: "https://github.com" },
  { name: "Instagram", link: "https://instagram.com" },
  { name: "LinkedIN", link: "https://linkedin.com" },
  { name: "X", link: "https://x.com" },
];
export type ContactOption = (typeof contactOptions)[number];
