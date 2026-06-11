import projects from './projects.json';

export const portfolioData = {
  hero: {
    
    name: "Fadzai Mumbariki",
    title: "I build responsive, accessible, and user-focused web applications.",
    description: "Junior Software Developer passionate about creating scalable, accessible, and modern web applications..",
    image: "./assets/116606f4-5e39-4b70-9676-bd9e0b85df3b.jpeg",
    imageAlt: "Hero illustration",
    email: "your-email@example.com",
    cvLink: "#",
  },
  about: {
    eyebrow: "01 — PROFESSIONAL SUMMARY",
    heading: "Professional Summary",
    bio1: "Junior software developer with a strong focus on frontend engineering and modern web technologies such as React and TypeScript. I build responsive, accessible, and performance-driven applications using component-based architecture and clean coding principles. I am passionate about solving real-world problems through software and continuously advancing my skills in scalable system design and user experience development.",
    bio2: "My goal is to build impactful applications that deliver seamless user experiences and solve real-world problems through clean, scalable, and maintainable code.",
    skills: [
      "React (Vite ecosystem)",
      "TypeScript / JavaScript (ES6+)",
      "HTML5 & CSS3",
      "Styled Components",
      "Responsive & mobile-first design",
      "Component-based architecture",
      "UI/UX implementation",
    ],
    certifications: [
      { name: "UX Design Foundations", by: "" },
      { name: "Design Thinking", by: "" },
      { name: "Enhancing UX workflow with AI", by: "" },
      { name: "UI ComponentI", by: "" },
      { name: "Advanced UIComponent", by: "" },
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
