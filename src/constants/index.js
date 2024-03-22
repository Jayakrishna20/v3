import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  pricewise,
  react,
  flutter,
  unity,
  summiz,
  tailwindcss,
  typescript,
  netflix,
  music,
  reddit,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: flutter,
    name: "Flutter",
    type: "Android",
  },
  {
    imageUrl: unity,
    name: "Unity",
    type: "Game Dev",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Jayakrishna20",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/jayakrishnan20/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    github: "",
    link: "https://github.com/Jayakrishna20/pricewise",
  },
  {
    iconUrl: netflix,
    theme: "btn-back-green",
    name: "Netflix UI clone",
    description:
      "Built a Netflix UI clone in Flutter, integrating themoviedb.org API, employing domain-driven development principles for a seamless, intuitive user experience.",
    github: "https://github.com/Jayakrishna20/netflix-clone",
    
  },
  {
    iconUrl: music,
    theme: "btn-back-blue",
    name: "Lyriks - Music Player",
    description:
      "Cutting-edge music player: modern homepage, search, lyrics, song exploration, local and global charts. Responsive web app using Shazam Core API.",
    github: "https://github.com/Jayakrishna20/lyriks",
    link: "https://jk-lyriks-app.netlify.app/",
  },
  {
    iconUrl: reddit,
    theme: "btn-back-pink",
    name: "Full Stack Reddit Clone",
    description:
      "Built a Reddit clone with React, Firebase, Next.js, Chakra UI, TypeScript. Includes authentication, Firestore, cloud functions, security rules, deployment, and more.",
    github: "https://github.com/Jayakrishna20/reddit_clone",
    link: "https://jk-reddit-clone.vercel.app/",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    github: "https://github.com/Jayakrishna20/ai_summarizer",
    link: "https://jk-ai-summarizer.netlify.app/",
  },
];
