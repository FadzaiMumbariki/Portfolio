from pathlib import Path
path = Path('src/portfolioData.js')
text = path.read_text(encoding='utf-8')
old = '''    bio2: "My goal is to build impactful applications that deliver seamless user experiences and solve real-world problems through clean, scalable, and maintainable code.",
    skills: [
      "React (Vite ecosystem)",
      "TypeScript / JavaScript (ES6+)",
      "HTML5 & CSS3",
      "Styled Components",
      "Responsive & mobile-first design",
      "Component-based architecture",
      "Git & GitHub version control",
      "Node.js & npm",
      "Vite build tool",
      "REST API integration",
      "VS Code",
    ],
    certifications: ['''
new = '''    bio2: "My goal is to build impactful applications that deliver seamless user experiences and solve real-world problems through clean, scalable, and maintainable code.",
    skills: [
      "React (Vite ecosystem)",
      "TypeScript / JavaScript (ES6+)",
      "HTML5 & CSS3",
      "Styled Components",
      "Responsive & mobile-first design",
      "Component-based architecture",
      "UI/UX implementation",
    ],
    certifications: ['''
if old not in text:
    raise SystemExit('old block not found')
path.write_text(text.replace(old, new), encoding='utf-8')
print('updated skills list')
