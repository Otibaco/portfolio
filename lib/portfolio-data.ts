import { PenTool, Code, Smartphone, Zap } from 'lucide-react'

export const profileData = {
  name: 'Orji Franklin',
  title: 'Full-Stack Developer',
  avatar: '/me.jpeg',
  email: 'orjifranklin42@gmail.com',
  phone: '+2349169307673',
  birthday: 'November 4, Unknown Year',
  location: 'Onitsha, Anambra State, Nigeria',
  social: {
    github: 'https://github.com/Otibaco',
    twitter: 'https://x.com/orji_frank54398',
    linkedin: 'https://www.linkedin.com/in/orji-franklin-15467b358/',
  },
}

export const aboutData = {
  description: [
    "I'm Orji Franklin, a Software Engineer (Full-Stack & Mobile) based in Anambra State, Nigeria. I build practical, maintainable web and mobile applications with a strong focus on backend systems.",
    "My work centers on Java, Spring Boot, REST APIs, React, Next.js, and React Native. I focus on solving real problems, writing clean code, and delivering reliable applications from development to deployment.",
  ],

  services: [
    {
      icon: Code,
      title: 'Frontend Development',
      description:
        'Building responsive web applications using React, Next.js, TypeScript, and Tailwind CSS.',
    },
    {
      icon: Zap,
      title: 'Backend Development',
      description:
        'Developing backend systems and REST APIs using Java, Spring Boot, Node.js, PostgreSQL, MongoDB, and Redis.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description:
        'Creating cross-platform mobile applications with React Native (Expo) and native Android development using Java and Kotlin.',
    },
    {
      icon: PenTool,
      title: 'System Maintenance & Debugging',
      description:
        'Debugging, improving, and maintaining existing systems with a focus on performance, reliability, and clean architecture.',
    },
  ],

  testimonials: [
    {
      avatar: '/business-man2.jpg',
      name: 'Chinedu Okafor',
      text: 'Delivered a solid solution that worked as expected. Reliable and professional throughout the project.',
    },
    {
      avatar: '/professional-woman-diverse.png',
      name: 'Aisha Bello',
      text: 'Good communication and strong backend knowledge. Focused on practical, working solutions.',
    },
    {
      avatar: '/business-man.jpg',
      name: 'Tunde Adeyemi',
      text: 'Writes clean and maintainable code. Understands real project requirements.',
    },
    {
      avatar: '/business-woman.jpg',
      name: 'Ngozi Nwoye',
      text: 'Professional and detail-oriented. Delivered quality work on time.',
    },
  ],

  clients: [
    { name: 'Freelance Clients', logo: '/startup-logo.png' },
    { name: 'Local Businesses', logo: '/design-agency-logo.png' },
    { name: 'Startup Projects', logo: '/tech-company-logo.jpg' },
    { name: 'Educational Projects', logo: '/web-agency-logo.jpg' },
  ],
}

export const resumeData = {
  education: [
    {
      title: 'Diploma of Higher Education – Software Engineering',
      period: 'Nov 2022 – Nov 2024',
      description:
        'Studied software engineering fundamentals, web and mobile development. Focused on backend systems using Java, Spring Boot, APIs, databases, and application deployment.',
    },
  ],

  experience: [
    {
      title: 'Programming Instructor (Java)',
      company: 'National Institute of Information Technology, Onitsha',
      period: 'Jan 2025 – Present',
      description:
        'Teach Java, Spring Boot, Hibernate, REST APIs, and backend development fundamentals. Guide students in building backend systems and simple microservice-based applications. Integrate frontend modules using React and TypeScript for full-stack projects. Mentored over 100 students through hands-on coding and real-world project work.',
    },
    {
      title: 'Full-Stack & Mobile Software Developer (Freelance)',
      company: 'Freelance',
      period: 'Jul 2024 – Present',
      description:
        'Build and maintain backend systems using Spring Boot, Node.js, Redis, and secure authentication. Develop cross-platform mobile applications with React Native (Expo). Create responsive web applications using React, Next.js, and Tailwind CSS. Manage full development lifecycle including design, development, testing, and deployment.',
    },
  ],

  skills: [
    { name: 'Java', level: 90 },
    { name: 'Spring Boot & REST APIs', level: 90 },
    { name: 'JavaScript & TypeScript', level: 85 },
    { name: 'React.js & Next.js', level: 85 },
    { name: 'React Native (Expo)', level: 80 },
    { name: 'Android Development (Java / Kotlin)', level: 75 },
    { name: 'Databases (PostgreSQL, MongoDB, Firebase)', level: 75 },
    { name: 'Git & GitHub', level: 80 },
    { name: 'Docker (Basic Usage)', level: 70 },
    { name: 'Debugging & Code Maintenance', level: 85 },
  ],
}


export const portfolioData = {
  categories: ['all', 'web development', 'applications', 'mobile apps'],

  projects: [
    {
      title: 'E-Commerce Web Application',
      category: 'web development',
      image: '/modern-ecommerce-website.png',
      description:
        'A full-stack e-commerce web application with product listing, authentication, and order management built using Spring Boot and Next.js.',
      tech: ['Spring Boot', 'Next.js', 'PostgreSQL', 'Tailwind CSS'],
      liveUrl: '',
      githubUrl: 'https://github.com/orjifranklin42/ecommerce-app',
    },
    {
      title: 'Task Management Application',
      category: 'applications',
      image: '/task-management-interface.png',
      description:
        'A task management application that allows users to create, track, and manage tasks with authentication and real-time updates.',
      tech: ['React', 'TypeScript', 'Firebase'],
      liveUrl: '',
      githubUrl: 'https://github.com/orjifranklin42/task-manager',
    },
    {
      title: 'Personal Portfolio Website',
      category: 'web development',
      image: '/minimalist-portfolio-design.jpg',
      description:
        'A responsive personal portfolio website showcasing projects, skills, and experience.',
      tech: ['Next.js', 'Tailwind CSS'],
      liveUrl: 'https://your-portfolio-url.vercel.app',
      githubUrl: 'https://github.com/orjifranklin42/portfolio',
    },
    {
      title: 'Chocolite Movement Website',
      category: 'web development',
      image: '/chocolite-website.png',
      description:
        'A content-driven web platform built for the Chocolite Movement, focused on cultural identity, historical storytelling, and social awareness. The project features a responsive design, structured narrative sections, and optimized performance for modern browsers.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      liveUrl: 'https://www.chocolitegroup.com',
      githubUrl: '',
    },

    {
      title: '2$weet DeFi Web Platform',
      category: 'web development',
      image: '/crypto-webapp2.png', // screenshot of the project
      description:
        'A decentralized finance web platform built on Ethereum, featuring real-time token balances, one-click wallet connection, and instant on-chain swaps. Implemented using Next.js, TypeScript, Node.js backend, and Web3 hooks (wagmi & viem) for wallet and blockchain interactions.',
      tech: ['Next.js', 'TypeScript', 'Node.js', 'Wagmi', 'Viem', 'Web3', 'Vercel'],
      liveUrl: 'https://2sweet.io',
      githubUrl: '', // only include if you have a repo you can show
    },
    {
      title: 'Mobile Utility Application',
      category: 'mobile apps',
      image: '/mobile-app-interface.png',
      description:
        'A cross-platform mobile application built with React Native (Expo) featuring API integration and clean UI.',
      tech: ['React Native (Expo)', 'TypeScript', 'Firebase'],
      liveUrl: '',
      githubUrl: 'https://github.com/orjifranklin42/mobile-app',
    },
  ],
}


export const blogData = {
  posts: [
    {
      title: 'Building Practical Web Applications with React and Next.js',
      category: 'Web Development',
      date: 'Jan 2025',
      readTime: '6 min',
      image: '/web-development-coding.png',
      excerpt:
        'A practical guide to building maintainable and responsive web applications using React and Next.js.',
      tags: ['React', 'Next.js', 'Web Development'],
      slug: 'practical-react-nextjs-apps',
    },
    {
      title: 'Understanding REST APIs with Spring Boot',
      category: 'Backend',
      date: 'Feb 2025',
      readTime: '7 min',
      image: '/software-architecture.jpg',
      excerpt:
        'An introduction to designing and building REST APIs using Java and Spring Boot.',
      tags: ['Java', 'Spring Boot', 'REST APIs'],
      slug: 'spring-boot-rest-apis',
    },
    {
      title: 'Getting Started with React Native (Expo)',
      category: 'Mobile',
      date: 'Mar 2025',
      readTime: '6 min',
      image: '/mobile-development.png',
      excerpt:
        'A beginner-friendly guide to building cross-platform mobile applications using React Native and Expo.',
      tags: ['React Native', 'Expo', 'Mobile Development'],
      slug: 'react-native-expo-basics',
    },
  ],
}

export const contactData = {
  email: 'orjifranklin42@gmail.com',
  phone: '+2349169307673',
  location: 'Anambra State, Nigeria',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.123456!2d6.791234!3d6.214567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040abcd1234%3A0x123456abcdef!2sAnambra%20State%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus',
};
