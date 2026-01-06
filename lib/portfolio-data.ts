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
    "I'm Orji Franklin, a Full-Stack and Mobile Developer from Anambra State, Nigeria. I build practical, maintainable, and functional applications for web and mobile platforms.",
    "I work with Java, Spring Boot, Node.js, React, Next.js, React Native, Tailwind CSS, and cloud platforms. I focus on solving real business problems efficiently and building reliable systems.",
  ],
  services: [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Building responsive and interactive web applications using React, Next.js, TypeScript, and Tailwind CSS.',
    },
    {
      icon: Zap,
      title: 'Backend Development',
      description: 'Creating APIs and backend systems with Java, Spring Boot, Node.js, and database solutions like MySQL, PostgreSQL, and Redis.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile apps with React Native (Expo) and Android (Java/Kotlin).',
    },
    {
      icon: PenTool,
      title: 'Security & Cloud',
      description: 'Implementing secure systems with Spring Security, Redis caching, Kafka event streaming, Docker, and cloud deployment.',
    },
  ],
  testimonials: [
    {
      avatar: '/professional-man.jpg',
      name: 'Daniel Lewis',
      text: 'Delivered a high-quality project with practical solutions. Reliable and professional.',
    },
    {
      avatar: '/professional-woman-diverse.png',
      name: 'Jessica Miller',
      text: 'Clear communication, technically strong, and solution-oriented.',
    },
    {
      avatar: '/professional-man.jpg',
      name: 'Michael Chen',
      text: 'Consistently produces maintainable, efficient code. Highly recommended.',
    },
    {
      avatar: '/professional-woman-diverse.png',
      name: 'Sarah Johnson',
      text: 'Trustworthy, skilled, and professional. Strong understanding of real-world systems.',
    },
  ],
  clients: [
    { name: 'Startup Projects', logo: '/tech-company-logo.jpg' },
    { name: 'Freelance Clients', logo: '/startup-logo.png' },
    { name: 'Local Businesses', logo: '/design-agency-logo.png' },
    { name: 'SMBs', logo: '/software-company-logo.png' },
    { name: 'Educational Projects', logo: '/web-agency-logo.jpg' },
    { name: 'Community Apps', logo: '/app-development-logo.jpg' },
  ],
};

export const resumeData = {
  education: [
    {
      title: 'Diploma of Higher Education – Software Engineering',
      period: 'Nov 2021 – Sep 2023',
      description:
        'Studied software engineering principles, web and mobile development, and practical backend systems with Java, Spring Boot, and cloud tools.',
    },
  ],
  experience: [
    {
      title: 'Programming Instructor (Java)',
      company: 'National Institute of Information and Technology, Onitsha',
      period: 'Jan 2023 – Present',
      description:
        'Delivered advanced training in Java, Spring Boot, Hibernate, microservices, Docker, Kafka, and REST APIs. Mentored over 100 students, integrating frontend modules with React & TypeScript for full-stack projects.',
    },
    {
      title: 'Full-Stack & Mobile Software Developer (Freelance)',
      company: 'Collaborative Tech Projects, Onitsha',
      period: 'Jul 2022 – Present',
      description:
        'Built backend systems using Spring Boot, Node.js, Docker, Redis, and secure authentication. Developed cross-platform mobile apps with React Native and responsive web apps with React, Next.js, and Tailwind CSS. Managed full development cycles from architecture to deployment.',
    },
  ],
  skills: [
    { name: 'Java & Spring Boot', level: 95 },
    { name: 'JavaScript & TypeScript', level: 90 },
    { name: 'React & Next.js', level: 90 },
    { name: 'React Native (Expo)', level: 85 },
    { name: 'Node.js & Backend APIs', level: 85 },
    { name: 'Database Design (SQL & NoSQL)', level: 80 },
    { name: 'Cloud & DevOps (Docker, Firebase)', level: 80 },
    { name: 'Security & Event Streaming (Spring Security, Kafka, Redis)', level: 80 },
  ],
};

export const portfolioData = {
  categories: ['all', 'web development', 'applications', 'mobile apps'],
  projects: [
    {
      title: 'E-Commerce Platform',
      category: 'web development',
      image: '/modern-ecommerce-website.png',
      description: 'Full-stack e-commerce solution with payment integration using Spring Boot and Next.js.',
      tech: ['Spring Boot', 'Next.js', 'PostgreSQL', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/orjifranklin42/ecommerce',
    },
    {
      title: 'Task Management App',
      category: 'applications',
      image: '/task-management-interface.png',
      description: 'Collaborative task manager with real-time updates using React and Firebase.',
      tech: ['React', 'Firebase', 'TypeScript'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/orjifranklin42/taskmanager',
    },
    {
      title: 'Portfolio Website',
      category: 'web development',
      image: '/minimalist-portfolio-design.jpg',
      description: 'Personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.',
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/orjifranklin42/portfolio',
    },
    {
      title: 'Mobile Banking App',
      category: 'mobile apps',
      image: '/banking-app-interface.png',
      description: 'Secure cross-platform banking app developed with React Native and Node.js backend.',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Firebase'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/orjifranklin42/banking',
    },
  ],
};

export const blogData = {
  posts: [
    {
      title: 'Building Real-World Web Applications with React & Next.js',
      category: 'Development',
      date: 'Jan 10, 2025',
      readTime: '7 min',
      image: '/web-development-coding.png',
      excerpt: 'Practical techniques for building scalable, maintainable web applications using modern frameworks.',
      tags: ['React', 'Next.js', 'Web Development'],
      slug: 'building-real-world-web-apps',
    },
    {
      title: 'Introduction to Microservices and Kafka',
      category: 'Architecture',
      date: 'Feb 5, 2025',
      readTime: '10 min',
      image: '/software-architecture.jpg',
      excerpt: 'A hands-on guide to building microservices and using Kafka for event-driven systems.',
      tags: ['Java', 'Spring Boot', 'Kafka', 'Microservices'],
      slug: 'microservices-kafka-guide',
    },
    {
      title: 'React Native for Cross-Platform Mobile Apps',
      category: 'Mobile',
      date: 'Mar 1, 2025',
      readTime: '8 min',
      image: '/mobile-development.png',
      excerpt: 'Best practices for building maintainable mobile applications using React Native and Expo.',
      tags: ['React Native', 'Expo', 'Mobile Development'],
      slug: 'react-native-cross-platform',
    },
  ],
};

export const contactData = {
  email: 'orjifranklin42@gmail.com',
  phone: '+2349169307673',
  location: 'Anambra State, Nigeria',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.123456!2d6.791234!3d6.214567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040abcd1234%3A0x123456abcdef!2sAnambra%20State%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus',
};
