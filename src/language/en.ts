export default {
  header: {
    logo: 'Edgar Angrino',
    navigation: {
      home: 'Home',
      personalWebsite: 'Personal Website',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact me',
    },
    toggleTheme: 'Toggle dark mode',
    toggleMenu: 'Toggle navigation menu',
    languageSelector: 'Select language',
  },
  hero: {
    eyebrow: 'Personal Website',
    greeting: 'Hi, I\'m',
    role: 'Software Engineer',
    description: {
      first: 'Focused on building scalable web applications and systems with Node.js.',
      second: 'Experienced with Node.js, SQL, Docker, and Linux-based environments.',
      third: 'Comfortable handling the full application flow, from UI to data processing.',
      fourth: 'I choose technologies based on the problem, not on a fixed stack.',
      fifth: 'Especially interested in system design and process optimization.',
      sixth: 'I integrate AI tools into engineering workflows with technical oversight.',
      seventh: 'I enjoy building complete solutions to complex problems through technology.',
    },
    contactButton: 'Contact Me',
  },
  skills: {
    title: 'Skills',
    subtitle: 'My technical level',
    cardSubtitle: 'Technologies and tools',
    categories: {
      primary: 'Primary',
      frontend: 'Frontend',
      backend: 'Backend',
      devops: 'DevOps',
      database: 'Database',
      mobile: 'Mobile',
      tools: 'Tools',
    },
  },
  about: {
    year: 'year',
    years: 'years',
    month: 'month',
    months: 'months',
    title: 'About Me',
    description: 'Software engineer focused on building scalable backend systems using Node.js and TypeScript, working primarily in Linux environments and Dockerized applications.',
    content: {
      paragraph1: 'I have built end-to-end solutions, covering everything from API development and business logic to SQL database management and deployments in real environments. I also have experience administering Linux servers and structuring production-oriented services.',
      paragraph2: 'My approach is practical and problem-driven: I choose technologies based on performance, maintainability, and system complexity, avoiding decisions based on trends.',
      paragraph3: 'I integrate artificial intelligence tools into the development workflow as support for productivity and analysis, always ensuring technical validation, refactoring, and quality before anything reaches production.',
      paragraph4: 'I am especially focused on system design, process optimization, and building software that can support real growth and real load.',
      paragraph5: '',
      paragraph6: '',
    },
    downloadCV: 'Download CV',
    sections: {
      eyebrow: 'About',
      storyEyebrow: 'More about me',
    },
    stats: {
      experience: {
        number: '{{years}}',
        label: 'Years',
        sublabel: 'experience',
      },
      projects: {
        number: '6+',
        label: 'Completed',
        sublabel: 'project',
      },
      companies: {
        number: '2',
        label: 'Companies',
        sublabel: 'worked',
      },
    },
  },
  contact: {
    title: 'Contact Me',
    subtitle: 'Get in touch',
    contactInfo: {
      callMe: 'Call Me',
      email: 'Email',
      localisation: 'Location',
    },
    form: {
      name: 'Name',
      email: 'Email',
      project: 'Project',
      message: 'Message',
      sendMessage: 'Send Message',
    },
    contactDetails: {
      phone: '+57 000 000-0000',
      email: 'eaangrino@gmail.com',
      location: 'Colombia',
    },
  },
  footer: {
    name: 'Edgar Angrino',
    copyright: '© Edgar Angrino. All rights reserved.',
    contactMe: 'Contact me',
  },
  construction: {
    message: 'Site under construction - Coming soon!',
  },
  experience: {
    title: 'Experience',
    subtitle: 'My personal journey',
    currentWork: 'Current role',
    tabs: {
      work: 'Work',
      education: 'Education',
    },
  },
  social: {
    open: 'Open social links',
    close: 'Close social links',
    title: 'Social links',
    hint: 'Press an icon to open my profile in a new tab.',
  },
  home: {
    projects: {
      eyebrow: 'Selected projects',
      title: 'A few projects I have been working on',
      description:
        'A selection of recent projects that reflect the kind of products, tools, and solutions I enjoy building.',
      cardLabel: 'Project {{index}}',
      visitProject: 'Visit project',
    },
  },
  services: {
    title: 'Services',
    subtitle: 'What I offer',
    services: {
      frontendDeveloper: 'Frontend Developer',
      backendDeveloper: 'Backend Developer',
      uiUxDesigner: 'UI/UX Designer',
    },
  },
  portfolio: {
    title: 'Portfolio',
    subtitle: 'List of projects I\'ve worked on',
    viewButton: 'View',
    close: 'Close',
    link: 'Link',
    backButton: 'Back',
    project: {
      itemOne: {
        title: 'ArtesLafaux - Landing Page',
        tech: 'React + TypeScript + TailwindCSS + DaisyUI + Vite',
        description:
          'Landing page for a digital artist, featuring an image gallery, contact section, and responsive design.',
      },
      itemTwo: {
        title: 'Personal Portfolio',
        tech: 'React + TypeScript + TailwindCSS + DaisyUI + Vite',
        description:
          'A personal portfolio website showcasing projects, skills, and experience with a modern UI and responsive layout.',
      },
      itemThree: {
        title: 'Mine Excavators',
        tech: 'Java + Minecraft Modding',
        description:
          'A Minecraft mod written in Java that adds excavator-style tools for faster terrain and block clearing.',
      },
      itemFour: {
        title: 'Mine Hammers',
        tech: 'Java + Minecraft Modding',
        description:
          'A Minecraft mod written in Java that adds hammer-based area mining mechanics for more efficient resource gathering.',
      },
      itemFive: {
        title: 'Multi-WhatsApp',
        tech: 'Electron + Vite + WhatsApp Web',
        description:
          'Desktop application that manages multiple concurrent WhatsApp Web sessions with persistent session handling and fast account switching. Built with Electron + Node.js, solving session isolation, state persistence, and multi-instance control.',
      },
    }
  },
};
