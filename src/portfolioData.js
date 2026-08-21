import projects from './projects.json';

export const portfolioData = {
  hero: {
    name: "Fadzai Mumbariki",
    title: "Software Engineer",
    description: "Software Engineering student at Uncommon.org. Passionate about building responsive, high-performance web apps with clean UI/UX. Skilled in modern web technologies and committed to writing efficient, maintainable code.",
    image: "./assets/116606f4-5e39-4b70-9676-bd9e0b85df3b.jpeg",
    imageAlt: "Fadzai Mumbariki - Professional Portfolio",
    email: "fadzaimumbariki@gmail.com",
    phone: "+263 781 659 593",
    location: "Bulawayo",
    website: "https://fadzai-portfolio.vercel.app/",
    cvLink: "./assets/CV.pdf",
  },
  about: {
    eyebrow: "01 — PROFILE",
    heading: "About Me",
    bio1: "Software Engineering student at Uncommon.org. Passionate about building responsive, high-performance web apps with clean UI/UX. Skilled in modern web technologies and committed to writing efficient, maintainable code.",
    bio2: "Currently pursuing Software Engineering at Uncommon.org while also studying Digital Marketing. Experienced in building real-world projects including a luxury villa website with HTML, CSS, and JavaScript, and creating brand content strategies for Sunlight Brand.",
    skills: [
      "React, Vite, JavaScript",
      "HTML5, CSS3, Tailwind CSS",
      "Framer Motion",
      "Node.js, Express.js",
      "Responsive Design",
      "UI/UX",
      "API Integration",
      "Design Thinking",
      "Problem Solving",
      "Communication",
      "Time Management",
      "Digital Marketing",
    ],
    experience: [
      {
        role: "Content Creator",
        company: "Sunlight Brand",
        period: "2026 — Present",
        details: "TikTok-first video content and engagement-driven social strategies. Brand storytelling with Sunlight's green/yellow identity. Afro-pop aesthetic with mobile-native 9:16 framing.",
      },
      {
        role: "Student Volunteer",
        company: "Scratch",
        period: "2026 — Present",
        details: "Volunteering as a student mentor and contributor.",
      },
      {
        role: "Personal Project",
        company: "Luxury Villa Website",
        period: "2026",
        details: "Fully responsive design optimized for desktop, tablet, and mobile devices. Focused on clean UI/UX, smooth navigation, and high-performance user experiences.",
      },
    ],
    education: [
      {
        degree: "Software Engineering",
        school: "Uncommon.org",
        period: "2026 — Present",
      },
      {
        degree: "Digital Marketing",
        school: "Uncommon.org",
        period: "2026 — Present",
      },
    ],
    certifications: [
      { name: "Design Thinking", by: "Certification" },
      { name: "Fundamentals of UI", by: "Certification" },
      { name: "Enhancing UX Workflow", by: "Certification" },
    ],
  },
  projects: projects,
  contact: {
    eyebrow: "03 — LET'S CONNECT",
    heading: "Open to new opportunities.",
    body: "I am available for new roles and collaborations in frontend engineering, UI systems, and scalable web applications. Feel free to reach out via email or connect on GitHub and LinkedIn.",
    email: "fadzaimumbariki@gmail.com",
    phone: "+263 781 659 593",
    location: "Bulawayo",
    website: "https://fadzai-portfolio.vercel.app/",
    socials: [
      { name: "GitHub", link: "https://github.com/FadzaiMumbariki" },
      { name: "LinkedIn", link: "https://www.linkedin.com/in/fadzai-mumbariki/" },
      { name: "Email", link: "mailto:fadzaimumbariki@gmail.com" },
    ],
    references: [
      {
        name: "Tonderai Kawere",
        email: "tonderaikawere@gmail.com",
        phone: "0782528050",
      },
      {
        name: "Lyle Chadya",
        email: "lyle@uncommon.org",
        phone: "0775312695",
      },
    ],
  },
};