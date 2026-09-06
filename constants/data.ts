export const name = "Wriddhi Hazra";
export type Name = typeof name;

export const logo = "wriddhi.com";
export type Logo = typeof logo;

export const siteUrl = "https://wriddhi.com";

export const email = "hey@wriddhi.com";

export const title = "Frontend Engineer";
export const titleAccent = "Application Architect";

export const metaTitle = `${name} — ${title} & ${titleAccent}`;

export const bio =
  "Building products with Next.js, Expo, and TypeScript. Specialized in high-throughput real-time WebRTC streaming, performance optimization, and interfaces people actually enjoy using.";
export type Bio = typeof bio;

export const keywords = [
  "Wriddhi Hazra",
  "Frontend Engineer",
  "Application Architect",
  "Next.js",
  "React",
  "TypeScript",
  "Expo",
  "WebRTC",
  "LiveKit",
  "Bengaluru",
] as const;

export const ogImage = {
  url: "/image.png",
  width: 256,
  height: 296,
  alt: `${name} — portrait`,
} as const;

export const twitterHandle = "@wriddhihazra";

export const heroTraits = [
  "Engineer",
  "Perfectionist",
  "Problem Solver",
  "Team Player",
] as const;

export const githubUrl = "https://github.com/wriddhi";

export const contactText =
  "Feel free to reach out for collaborations, questions, or any exciting opportunities. Always happy to talk shop about frontend systems, WebRTC, or shipping things that scale.";
export type ContactText = typeof contactText;

export const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Hobbies", href: "/#hobbies" },
  { name: "Contact", href: "/#contact" },
] as const;
export type NavLink = (typeof navLinks)[number];

export const contactOptions = {
  GitHub: githubUrl,
  LinkedIn: "https://linkedin.com/in/wriddhi-hazra",
  "Twitter(X)": "https://x.com/wriddhihazra",
  BlueSky: "https://bsky.app/profile/wriddhi.com",
  Email: `mailto:${email}`,
  Resume: "/resume.pdf",
} as const;
export type ContactOption = typeof contactOptions;

export const journeyIntro =
  "From intern to shipping production systems at scale. A timeline of technical growth and ownership.";

export type ExperienceEntry = {
  period: string;
  roleTitle: string;
  position: string;
  organisation: string;
  organisationUrl: string;
  logo: string;
  logoAlt: string;
  bullets: string[];
};

export const experiences: ExperienceEntry[] = [
  {
    period: "2024 - Present",
    roleTitle: "The Software Engineer",
    position: "SDE-1",
    organisation: "Omaza",
    organisationUrl: "https://omaza.in",
    logo: "/omaza.png",
    logoAlt: "Omaza",
    bullets: [
      "Worked on performance-critical user-facing webview frontends implementing cross-provider live streaming with WebRTC, and real-time chats with optimistic updates handling 25k+ requests / second.",
      "Implemented a real-time calling and chat system, rich analytics graphs and maps in an internal admin dashboard for lead management — resulting in a 60-65% efficiency increase in acquiring new leads for the sales team.",
      "Built fully end-to-end type-safe internal tooling to manage two-way callbacks between webview and native layer using the window.postMessage bridge, improving reliability and developer velocity across teams.",
    ],
  },
  {
    period: "Late 2024",
    roleTitle: "The Open Source Maintainer",
    position: "Frontend Lead",
    organisation: "Pujo Atlas",
    organisationUrl: "https://atlas.ourkolkata.in",
    logo: "/atlas.png",
    logoAlt: "Pujo Atlas",
    bullets: [
      "Built and scaled a Google Maps-based navigation web app to help users find the nearest Durga Pujo pandals across Kolkata, driving 872.49K searches and 114.83K journeys in just 5 days.",
      "Designed a location-aware ranking algorithm that prioritizes results by user proximity (not global popularity), supporting 10.8K visitors/day during peak Pujo traffic.",
      "Mentored students during Hacktoberfest 2024 in writing clean, scalable and maintainable code with strict code reviews and constructive feedback.",
    ],
  },
  {
    period: "Early 2024",
    roleTitle: "The Intern",
    position: "Frontend Intern",
    organisation: "Zscaler",
    organisationUrl: "https://zscaler.com",
    logo: "/zscaler.svg",
    logoAlt: "Zscaler",
    bullets: [
      "Migrated the frontend data layer to modern fetching + caching using Axios and React Query, improving loading states across 100+ components while removing redundant logic to boost overall performance.",
      "Standardized build tooling across a micro-frontend monorepo by unifying on Webpack (replacing Vite/Rollup), cutting build times by 20% and improving maintainability across 15+ applications.",
      "Implemented code-splitting to reduce initial JavaScript bundle size by 30%, leading to faster first-load performance and lower user wait time.",
      "Improved React front-end test coverage from 75% to 88% using Jest + React Testing Library, validated via SonarQube.",
    ],
  },
  {
    period: "2022 - 2023",
    roleTitle: "The Full-Stack Intern",
    position: "Full-Stack Intern",
    organisation: "ARS Inventif",
    organisationUrl: "https://arsinventif.com",
    logo: "/globe.svg",
    logoAlt: "ARS Inventif",
    bullets: [
      "Developed a facial recognition-based attendance system using Next.js, TypeScript, and PostgreSQL.",
      "Created an LMS platform integrated with attendance tracking and video storage in AWS S3.",
    ],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  href: string;
  github?: string;
  highlights: { title: string; detail: string }[];
  tech: string[];
};

export const projects: Project[] = [
  {
    name: "Pujo Atlas",
    tagline: "50k+ users",
    description:
      "Real-time Durga Puja navigation for Kolkata — location-aware ranking, fuzzy search, and marker clustering so people find the nearest pandal fast.",
    href: "https://atlas.ourkolkata.in/",
    github: "https://github.com/Pujo-Atlas-Kolkata/PujoAtlasKol-Web",
    highlights: [
      {
        title: "Peak traffic",
        detail: "10.8K visitors/day and 872K+ searches in 5 days",
      },
      {
        title: "Proximity-first",
        detail: "Ranking by user location, not global popularity",
      },
    ],
    tech: ["Next.js", "TypeScript", "Google Maps", "Tailwind"],
  },
  {
    name: "Bskypt",
    tagline: "4k users",
    description:
      "A Bluesky receipt and receipt-sharing tool for the AT Protocol crowd — lightweight, fast, and built for the open social web.",
    href: "https://bskypt.vercel.app",
    github: "https://github.com/wriddhi",
    highlights: [
      {
        title: "AT Protocol",
        detail: "Native Bluesky integrations without the bloat",
      },
      {
        title: "Adoption",
        detail: "Thousands of users sharing receipts daily",
      },
    ],
    tech: ["Next.js", "TypeScript", "AT Protocol"],
  },
  {
    name: "Zoid",
    tagline: "Beta",
    description:
      "An experimental product surface at zoid.wriddhi.com — shipping early, iterating in public, and testing ideas that don't fit elsewhere.",
    href: "https://zoid.wriddhi.com",
    github: "https://github.com/wriddhi",
    highlights: [
      {
        title: "In public",
        detail: "Beta builds for real feedback loops",
      },
      {
        title: "Playground",
        detail: "Room to try patterns before productizing them",
      },
    ],
    tech: ["Next.js", "TypeScript"],
  },
];

export type Hobby = {
  title: string;
  description: string;
  src: string;
  content: string;
};

export const hobbies: Hobby[] = [
  {
    title: "Chess",
    description: "Slow games, sharp tactics",
    src: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=800&auto=format&fit=crop",
    content:
      "I play for the long grind — openings I half-remember, endgames I overthink, and the quiet satisfaction of a clean tactic. Online blitz when I need a reset; longer games when I actually want to get better.",
  },
  {
    title: "Anime & Manga",
    description: "Stories between sprints",
    src: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
    content:
      "Weeknights are for catching up on series and flipping through manga. Big on character-driven stories, absurd comedy, and the occasional deep cut that somehow ends up on my mind at work the next day.",
  },
  {
    title: "Polaroid photography",
    description: "One frame, no redo",
    src: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?q=80&w=800&auto=format&fit=crop",
    content:
      "Instant film forces you to slow down — light, composition, then commit. I shoot friends, streets, and small moments I want to keep physical instead of buried in a camera roll.",
  },
];

export const hobbiesIntro =
  "Chess boards, manga stacks, and Polaroids — what I reach for off the clock.";

export const location = "Bengaluru, India";

export const showDeveloperText = true;
