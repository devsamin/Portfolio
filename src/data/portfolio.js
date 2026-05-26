export { personalInfo } from "./site";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const aboutIntro = {
  short:
    "Full-Stack Developer Focused On Building Scalable Backend Systems And Intuitive User Experiences. I Transform Complex Problems Into Clean, Efficient, And Maintainable Software Solutions.",
  profileImage: "/profile.jpg",
};

export const aboutDetails = {
  education: {
    title: "Education",
    items: [
      {
        degree: "Diploma in Computer Science",
        school: "Bangladesh Sweden Polytechnic Institute",
        period: "2022 — 2025",
        detail:
          "Coursework in software engineering, web development, databases, and data structures with hands-on project work.",
      },
    ],
  },
  coreSkills: [
    "Python & Django REST Framework",
    "React, Next.js & Tailwind CSS",
    "PostgreSQL, JWT Authentication",
    "Data Structures & Algorithms",
    "Competitive Programming",
    "Docker (Learning), Redis & Celery (Learning), WebSockets (Learning)",
    "Cursor, Claude, ChatGPT, Gemini, DeepSeek",
    "Git & GitHub / GitHub Copilot",
  ],
  experience: [
    "Built full-stack applications using Django REST Framework and React/Next.js",
    "Developed REST APIs with authentication (JWT), Git workflow, and deployment practice",
    "Worked on multiple personal and academic projects including job board and management systems",
    "Practicing real-world development workflows with Docker, NextAuth.js, and API integration",
  ],
  projects: [
    "Job Board Platform — Django REST API with employers, job seekers, applications, and filtering system",
    "Football Turf Booking System — full-stack platform for booking turfs with scheduling and management features",
    "Local Mart — e-commerce platform for local product listing and buying system",
    "Trust Bank System — Django-based banking system with core banking features",
    "DSA Practice Solutions — structured problem-solving in C++, Python, and algorithms",
  ],
  goals:
    "Become a skilled software engineer focused on building scalable and reliable products, contributing to open source, improving system design and cloud deployment skills, and continuously growing through real-world development experience while helping and mentoring other developers.",
};

export const skillTabs = [
  { id: "all", label: "All" },
  { id: "programming-language", label: "Programming Language" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "authentication", label: "Authentication" },
  { id: "deployment", label: "Deployment" },
  { id: "backend-tools", label: "Backend Tools" },
  { id: "problem-solving", label: "Problem Solving" },
  { id: "ai-tools", label: "AI Tools" },
];

export const filterableSkills = [
  {
    id: 1,
    name: "Python",
    category: "programming-language",
    categoryLabel: "Programming Language",
    icon: "python",
  },
  {
    id: 2,
    name: "C",
    category: "programming-language",
    categoryLabel: "Programming Language",
    icon: "c",
  },
  {
    id: 3,
    name: "C++",
    category: "programming-language",
    categoryLabel: "Programming Language",
    icon: "cpp",
  },
  {
    id: 4,
    name: "JavaScript",
    category: "programming-language",
    categoryLabel: "Programming Language",
    icon: "javascript",
  },

  {
    id: 5,
    name: "React",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: "react",
  },
  {
    id: 6,
    name: "Next.js",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: "nextjs",
  },
  {
    id: 7,
    name: "Tailwind CSS",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: "tailwind",
  },
  {
    id: 8,
    name: "Bootstrap",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: "bootstrap",
  },
  {
    id: 9,
    name: "DaisyUI",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: "daisyui",
  },
  {
    id: 10,
    name: "HTML & CSS",
    category: "frontend",
    categoryLabel: "Frontend",
    icon: "html",
  },

  {
    id: 11,
    name: "Django",
    category: "backend",
    categoryLabel: "Backend",
    icon: "django",
  },
  {
    id: 12,
    name: "Django REST Framework",
    category: "backend",
    categoryLabel: "Backend",
    icon: "drf",
  },
  {
    id: 13,
    name: "Node.js",
    category: "backend",
    categoryLabel: "Backend",
    icon: "node",
  },

  {
    id: 14,
    name: "PostgreSQL",
    category: "database",
    categoryLabel: "Database",
    icon: "postgres",
  },
  {
    id: 15,
    name: "MySQL",
    category: "database",
    categoryLabel: "Database",
    icon: "mysql",
  },
  {
    id: 16,
    name: "SQLite",
    category: "database",
    categoryLabel: "Database",
    icon: "sqlite",
  },
  {
    id: 17,
    name: "MongoDB",
    category: "database",
    categoryLabel: "Database",
    icon: "mongodb",
  },

  {
    id: 18,
    name: "JWT Authentication",
    category: "authentication",
    categoryLabel: "Authentication",
    icon: "jwt",
  },
  {
    id: 19,
    name: "OAuth 2.0",
    category: "authentication",
    categoryLabel: "Authentication",
    icon: "oauth",
  },
  {
    id: 20,
    name: "Django Auth",
    category: "authentication",
    categoryLabel: "Authentication",
    icon: "auth",
  },
  {
    id: 21,
    name: "NextAuth.js",
    category: "authentication",
    categoryLabel: "Authentication",
    icon: "nextauth",
  },

  {
    id: 22,
    name: "Docker",
    category: "deployment",
    categoryLabel: "Deployment",
    icon: "docker",
  },
  {
    id: 23,
    name: "Vercel",
    category: "deployment",
    categoryLabel: "Deployment",
    icon: "vercel",
  },
  {
    id: 24,
    name: "Netlify",
    category: "deployment",
    categoryLabel: "Deployment",
    icon: "netlify",
  },
  {
    id: 25,
    name: "Render",
    category: "deployment",
    categoryLabel: "Deployment",
    icon: "render",
  },
  {
    id: 26,
    name: "Railway",
    category: "deployment",
    categoryLabel: "Deployment",
    icon: "railway",
  },
  {
    id: 27,
    name: "Git & GitHub",
    category: "deployment",
    categoryLabel: "Deployment",
    icon: "git",
  },
  {
    id: 28,
    name: "GitHub Actions (CI/CD)",
    category: "deployment",
    categoryLabel: "Deployment",
    icon: "cicd",
  },

  {
    id: 29,
    name: "Redis",
    category: "backend-tools",
    categoryLabel: "Backend Tools",
    icon: "redis",
  },
  {
    id: 30,
    name: "Celery",
    category: "backend-tools",
    categoryLabel: "Backend Tools",
    icon: "celery",
  },
  {
    id: 31,
    name: "WebSockets",
    category: "backend-tools",
    categoryLabel: "Backend Tools",
    icon: "websocket",
  },

  {
    id: 32,
    name: "Competitive Programming",
    category: "problem-solving",
    categoryLabel: "Problem Solving",
    icon: "cp",
  },
  {
    id: 33,
    name: "Data Structures & Algorithms",
    category: "problem-solving",
    categoryLabel: "Problem Solving",
    icon: "dsa",
  },

  {
    id: 34,
    name: "Cursor AI",
    category: "ai-tools",
    categoryLabel: "AI Tools",
    icon: "cursor",
  },
  {
    id: 35,
    name: "Claude AI",
    category: "ai-tools",
    categoryLabel: "AI Tools",
    icon: "claude",
  },
  {
    id: 36,
    name: "ChatGPT",
    category: "ai-tools",
    categoryLabel: "AI Tools",
    icon: "chatgpt",
  },
  {
    id: 37,
    name: "Gemini AI",
    category: "ai-tools",
    categoryLabel: "AI Tools",
    icon: "gemini",
  },
  {
    id: 38,
    name: "GitHub Copilot",
    category: "ai-tools",
    categoryLabel: "AI Tools",
    icon: "copilot",
  },
];

export const achievements = [
  {
    id: 1,
    title: "LeetCode Problem Solving",
    description:
      "Solved problems covering arrays, trees, graphs, and dynamic programming.",
    icon: "code",
    badge: "DSA",
    credentialUrl: "https://leetcode.com/u/abdullahalsamin79/",
  },
  {
    id: 2,
    title: "CodeChef Profile",
    description:
      "Practicing competitive programming and improving problem-solving skills.",
    icon: "cpu",
    badge: "CP",
    credentialUrl: "https://www.codechef.com/users/devsamin",
  },
  {
    id: 3,
    title: "Codeforces Profile",
    description:
      "Active participation in competitive programming contests and practice.",
    icon: "terminal",
    badge: "CP",
    credentialUrl: "https://codeforces.com/profile/abdullahalsamin_79",
  },
  {
    id: 4,
    title: "CSE Fundamentals",
    description:
      "Strong foundation in core computer science subjects including DSA, OOP, DBMS, and problem-solving basics.",
    icon: "book",
    badge: "Fundamentals",
    credentialUrl:
      "https://drive.google.com/file/d/1Xdk-O79UEPQk4w-bt3y1tQBOX2aNVmDM/view?usp=sharing",
  },
  {
    id: 5,
    title: "Diploma in Computer Science",
    description:
      "Bangladesh Sweden Polytechnic Institute — software engineering focus.",
    icon: "graduation",
    badge: "Education",
    credentialUrl: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Football Turf Booking",
    description:
      "A full-stack football turf booking platform with real-time slot availability, secure JWT authentication, and online payments using Stripe.",
    tech: [
      "Django REST Framework",
      "React",
      "JWT Auth",
      "Stripe",
      "PostgreSQL",
    ],
    github: "https://github.com/devsamin/Football-Booking-Turf-Frontend",
    live: "https://football-turf-booking.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Local Market",
    description:
      "A modern e-commerce marketplace where users can browse products, manage carts, and place secure orders with integrated payment system.",
    tech: [
      "Django REST Framework",
      "React",
      "JWT Auth",
      "Stripe",
      "PostgreSQL",
    ],
    github: "https://github.com/devsamin/Local-Market-Backend",
    live: "https://local-mart-gray.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "Tic Tac Toe Game",
    description:
      "Interactive Tic Tac Toe game with AI opponent, two-player mode, and a clean responsive UI built using vanilla JavaScript.",
    tech: ["HTML", "CSS", "JavaScript", "Game Logic", "AI"],
    github: "https://github.com/devsamin/Tic-Tac-Toe-Game",
    live: "https://tic-tac-toe-game-eta-flax.vercel.app/",
    featured: false,
  },
  {
    id: 4,
    title: "Find Job Platform",
    description:
      "A job search platform with REST API backend and responsive frontend for browsing and exploring job listings efficiently.",
    tech: ["Django REST Framework", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/devsamin/Find-Job-Backend-Code",
    live: "https://find-job-lyart.vercel.app/",
    featured: true,
  },
  {
    id: 5,
    title: "Trust Bank System",
    description:
      "Secure banking system with account management, transaction tracking, and authentication built using Django.",
    tech: ["Django", "Authentication", "Transaction System"],
    github: "https://github.com/devsamin/Bank-Management",
    live: "https://trust-bank.onrender.com/",
    featured: false,
  },
  {
    id: 6,
    title: "Dragon News Portal",
    description:
      "Responsive news portal with Firebase authentication and categorized content using React, Tailwind, and DaisyUI.",
    tech: ["React", "Tailwind CSS", "DaisyUI", "Firebase Auth"],
    github: "https://github.com/devsamin/Dragon-News",
    live: "https://dragon-news-17140.web.app/",
    featured: false,
  },
  {
    id: 7,
    title: "React Calculator",
    description:
      "Modern calculator app with smooth UI and support for basic and advanced operations.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
    github: "https://github.com/devsamin/react-calculator",
    live: "https://react-calculator-samin.vercel.app/",
    featured: false,
  },
  {
    id: 8,
    title: "Library Management System",
    description:
      "System for managing books, members, and transactions in a library with user authentication.",
    tech: ["Django", "CRUD", "Authentication"],
    github: "https://github.com/devsamin/Library-Management-System",
    live: "https://library-management-system-1-pmcs.onrender.com/",
    featured: false,
  },
  {
    id: 9,
    title: "Car Shop",
    description:
      "Car sales platform with inventory management and admin dashboard for managing listings.",
    tech: ["Django", "Bootstrap", "Inventory Management"],
    github: "https://github.com/devsamin/Car-Shop",
    live: "https://car-shop-yexv.onrender.com/",
    featured: false,
  },
  {
    id: 10,
    title: "Task Management System",
    description:
      "Full CRUD task management system with authentication and REST API support.",
    tech: ["Django", "REST API", "CRUD", "Authentication"],
    github: "https://github.com/devsamin/Task-Management",
    live: "https://task-management-co20.onrender.com/",
    featured: false,
  },
  {
    id: 11,
    title: "Food Search App",
    description:
      "Web app for searching food recipes using external APIs with real-time search functionality.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "API"],
    github: "https://github.com/devsamin/Food-Search",
    live: "https://devsamin.github.io/Food-Search/",
    featured: false,
  },
];

export const timeline = [
  {
    type: "education",
    title: "Diploma in Computer Science",
    organization: "Bangladesh Sweden Polytechnic Institute",
    period: "2022 — 2025",
    description:
      "Focused on software engineering, web development, and data structures. Built multiple full-stack projects as coursework and personal initiatives.",
  },
  {
    type: "experience",
    title: "Full Stack Developer Intern",
    organization: "Universe Soft Tech",
    period: "Oct 2025 — Dec 2025",
    description:
      "Worked as a Full Stack Developer Intern, contributing to both frontend and backend development. Built and maintained web applications, fixed bugs, improved performance, and collaborated with the team following best coding practices.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Python",
      "Django",
      "REST API",
      "Git",
    ],
  },
  {
    type: "experience",
    title: "C Programming Mentor",
    organization: "BSPI Computer Club",
    period: "May 2026 — Present",
    description:
      "Mentoring students in C programming fundamentals, problem-solving, and programming logic. Helping beginners build a strong foundation in coding and guiding them through hands-on practice.",
    skills: ["C Programming", "Problem Solving", "Teaching", "Mentoring"],
  },
];
