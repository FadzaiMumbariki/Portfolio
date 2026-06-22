import projects from './projects.json';

export const portfolioData = {
  hero: {
    name: "Fadzai Mumbariki",
    title: "Software Engineer",
    description: "Software Engineering student at Uncommon.org. Passionate about building responsive, high-performance web apps with clean UI/UX.",
    image: "./assets/116606f4-5e39-4b70-9676-bd9e0b85df3b.jpeg",
    imageAlt: "Fadzai Mumbariki - Professional Portfolio",
    email: "fadzaimumbariki@gmail.com",
    cvLink: "/assets/CV.pdf",
  },
  about: {
    eyebrow: "01 — PROFILE",
    heading: "About Me",
    bio1: "Software Engineering student at Uncommon.org. Passionate about building responsive, high-performance web apps with clean UI/UX.",
    bio2: "Currently pursuing Software Engineering at Uncommon.org while also studying Digital Marketing. Experienced in building real-world projects including e-commerce sites, weather apps, and brand content strategies.",
    skills: [
      "React.js / Next.js",
      "Tailwind CSS",
      "Node.js / Express.js",
      "Responsive Design",
      "UI/UX",
      "API Integration",
      "Design Thinking",
      "Problem Solving",
    ],
    certifications: [
      { name: "Software Engineering", by: "Uncommon.org (2026-Present)" },
      { name: "Digital Marketing", by: "Uncommon.org (2026-Present)" },
      { name: "Student Volunteer", by: "Scratch (2026-Present)" },
    ],
  },
  projects: projects,
  contact: {
    eyebrow: "03 — LET'S CONNECT",
    heading: "Open to new opportunities.",
    body: "I am available for new roles and collaborations in frontend engineering, UI systems, and scalable web applications. Feel free to reach out via email or connect on GitHub and LinkedIn.",
    socials: [
      { name: "GitHub", link: "https://github.com/FadzaiMumbariki" },
      { name: "LinkedIn", link: "https://www.linkedin.com/in/fadzai-mumbariki/" },
      { name: "Email", link: "mailto:fadzaimumbariki@gmail.com" },
    ],
  },
};
