/**
 * Keep personal details and project URLs in one place.
 * Replace empty URLs only with real, publicly accessible profiles/repositories.
 */
export const profile = {
  name: "Vaibhav",
  role: "Software Developer",
  headline: "Building software with purpose.",
  summary:
    "I'm a computer science graduate interested in backend engineering, clean architecture, and building reliable software with Java and C++.",
  location: "India",
  email: "sutar.vaibhav649@gmail.com", // Add your professional email, e.g. "hello@example.com"
  github: "https://github.com/sutarvaibhav649", // Add your GitHub profile URL
  linkedin: "https://linkedin.com/in/vaibhavsutar649", // Add your LinkedIn profile URL
  resumeUrl: "/vaibhav-resume.pdf", // Add a public PDF URL or a file in /public
};

export const projects = [
  {
    number: "01",
    name: "C++20 CLI Task Manager",
    category: "Backend / CLI",
    description:
      "A structured command-line task manager built with layered design, separating domain models, repository operations, and service-layer responsibilities.",
    technologies: ["C++20", "CMake", "OOP", "Repository pattern"],
    repositoryUrl: "https://github.com/sutarvaibhav649/todo_cli",
    demoUrl: "",
    status: "In development",
    mark: "{ }",
  },
  {
    number: "02",
    name: "Bank Management System",
    category: "Full-stack",
    description:
      "A full-stack application with a C++ backend using Drogon and a React frontend, exploring API-driven application design.",
    technologies: ["C++", "Drogon", "React", "REST APIs"],
    repositoryUrl: "",
    demoUrl: "",
    status: "Project",
    mark: "{ }",
  },
  {
    number: "03",
    name: "OpsMind AI",
    category: "AI / Full-stack",
    description:
      "An AI-oriented full-stack project built with the MERN stack for a technology innovation submission. Add verified architecture and demo details before publishing.",
    technologies: ["MERN", "AI / RAG", "Full-stack"],
    repositoryUrl: "https://github.com/sutarvaibhav649/opsmind-ai",
    demoUrl: "https://opsmind-ai-lemon.vercel.app/",
    status: "Project",
    mark: "✳",
  },
   {
    number: "04",
    name: "ProspectMiner AI",
    category: "AI / Full-stack",
    description:
      "ProspectMiner AI is a full-stack SaaS application developed as part of the Q4 AI Innovation Lab Roadmap at Infotact Solutions. It is designed to eliminate the manual, time-consuming process of building lead lists for sales teams.",
    technologies: ["MERN", "AI / RAG", "Full-stack"],
    repositoryUrl: "https://github.com/sutarvaibhav649/ProspectMiner-AI",
    demoUrl: "https://prospect-miner-ai.vercel.app/",
    status: "Project",
    mark: "✳",
  },

];

export const skillGroups = [
  { title: "Languages", items: "Java, C++, SQL, JavaScript" },
  { title: "Backend", items: "Spring Boot fundamentals, Drogon, REST API design" },
  { title: "Frontend", items: "React, HTML, CSS, responsive UI" },
  { title: "Developer tools", items: "Linux, Git, CMake, Docker, Vim" },
];

export const principles = [
  {
    title: "Clear boundaries",
    description:
      "Keep domain logic, persistence, and delivery concerns separate so each layer has a clear responsibility.",
  },
  {
    title: "Readable by default",
    description:
      "Prefer explicit naming, simple interfaces, and maintainable abstractions over cleverness for its own sake.",
  },
  {
    title: "Verify, then ship",
    description:
      "Build confidence with tests, input validation, error handling, and repeatable build and deployment steps.",
  },
];
