import projects from './projects.json';

export const portfolioData = {
  hero: {
    
    name: "Fadzai Mumbariki",
    title: "Software Engineer & Digital Growth Strategist",
    description: "Bridging the gap between technical excellence and strategic growth. I engineer high-performance, SEO-optimized web applications designed for scale and user impact.",
    image: "./assets/116606f4-5e39-4b70-9676-bd9e0b85df3b.jpeg",
    imageAlt: "Fadzai Mumbariki - Professional Portfolio",
    email: "fadzaimumbariki@gmail.com",
    cvLink: "#",
  },
  about: {
    eyebrow: "01 — PROFESSIONAL SUMMARY",
    heading: "Professional Summary",
    bio1: "Junior software developer with a strong focus on frontend engineering and modern web technologies such as React and TypeScript. I build responsive, accessible, and performance-driven applications using component-based architecture and clean coding principles. I am passionate about solving real-world problems through software and continuously advancing my skills in scalable system design and user experience development.",
    bio2: "Beyond writing clean, scalable code, I bring a unique perspective to product development through my background in digital marketing. I understand the intersection of technology and growth, ensuring that the applications I build aren't just functionally sound, but also optimized for SEO, user acquisition, and conversion.",
    skills: [
      "React (Vite ecosystem)",
      "TypeScript / JavaScript (ES6+)",
      "HTML5 & CSS3",
      "Styled Components",
      "Responsive & mobile-first design",
      "Component-based architecture",
      "UI/UX implementation",
      "Digital Marketing & SEO",
    ],
    certifications: [
      { name: "UX Design Foundations", by: "Google" },
      { name: "Design Thinking", by: "IBM" },
      { name: "Enhancing UX workflow with AI", by: "LinkedIn Learning" },
      { name: "UI Architecture", by: "Interaction Design Foundation" },
      { name: "Advanced Component Design", by: "Frontend Masters" },
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
