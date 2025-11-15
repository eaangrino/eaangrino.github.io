export default {
  header: {
    logo: 'Edgar Angrino',
    navigation: {
      home: 'Inicio',
      about: 'Acerca de',
      skills: 'Habilidades',
      services: 'Servicios',
      portfolio: 'Portafolio',
      contact: 'Contáctame',
    },
    toggleTheme: 'Cambiar modo oscuro',
    toggleMenu: 'Alternar menú de navegación',
    languageSelector: 'Seleccionar idioma',
  },
  hero: {
    greeting: 'Hola, soy',
    role: 'Analista y Desarrollador de Software',
    description: {
      first: 'Experiencia sólida construyendo aplicaciones web escalables y responsivas.',
      second: 'Experto en React y TypeScript, enfocado en código limpio y mantenible.',
      third: 'Entregando soluciones consistentes y de calidad en desarrollo frontend y backend moderno.',
      fourth: 'Hábil en el despliegue de soluciones web confiables utilizadas en entornos de producción reales.',
      fifth: 'Me baso en patrones reutilizables para asegurar resultados mantenibles y predecibles.'
    },
    contactButton: 'Contáctame',
  },
  skills: {
    title: 'Habilidades',
    subtitle: 'Mi nivel técnico',
    categories: {
      frontendStrong: 'Frontend - Experiencia Sólida',
      frontendGood: 'Frontend - Buen Conocimiento',
      backendStrong: 'Backend - Experiencia Sólida',
      backendGood: 'Backend - Buen Conocimiento',
      devopsStrong: 'DevOps - Buen Conocimiento',
      devopsBasic: 'DevOps - Comprensión Básica',
      databaseGood: 'Base de Datos - Buen Conocimiento',
      mobileBasic: 'Móvil - Conocimiento Básico',
      tools: 'Herramientas',
    },
  },
  about: {
    title: 'Acerca de Mí',
    // subtitle: 'Mi Introducción',
    description: 'Desarrollador React y TypeScript con experiencia backend en Node.js, trabajando en aplicaciones web de nivel de producción.',
    collapse: {
      title: 'Conoce más sobre mi experiencia y enfoque',
      content: {
        paragraph1: 'Soy un Desarrollador Fullstack especializado en construir aplicaciones web personalizadas usando React, TypeScript, Node.js y AWS. Me enfoco en escribir código limpio, mantenible y escalable, siempre buscando mejorar la reutilización de código y consistencia entre proyectos.',
        paragraph2: 'Con más de {{experience}} de experiencia práctica, he trabajado en desarrollo frontend y backend, desplegando soluciones listas para producción usando AWS Amplify, Lambda y Docker. Mi trabajo frontend enfatiza interfaces responsivas y accesibles, principalmente usando TailwindCSS, DaisyUI y React Hook Form.',
        paragraph3: 'Me baso en patrones reutilizables, pruebas de código y prácticas probadas para asegurar que mis proyectos sean fáciles de mantener y evolucionar. También estoy constantemente explorando herramientas como Terraform, flujos de trabajo asistidos por IA y nuevos stacks para mantenerme actualizado y eficiente.',
        paragraph4: 'Mi trabajo no es solo entregar funcionalidades, sino construir sistemas que sean claros, confiables y alineados con las necesidades reales del negocio.',
      },
    },
    downloadCV: 'Descargar CV',
    stats: {
      experience: {
        number: '{{years}}',
        label: 'Años',
        sublabel: 'experiencia',
      },
      projects: {
        number: '6+',
        label: 'Proyectos',
        sublabel: 'completados',
      },
      companies: {
        number: '2',
        label: 'Empresas',
        sublabel: 'trabajadas',
      },
    },
  },
  contact: {
    title: 'Contáctame',
    subtitle: 'Ponte en contacto',
    contactInfo: {
      callMe: 'Llamarme',
      email: 'Correo electrónico',
      localisation: 'Ubicación',
    },
    form: {
      name: 'Nombre',
      email: 'Email',
      project: 'Proyecto',
      message: 'Mensaje',
      sendMessage: 'Enviar Mensaje',
    },
    contactDetails: {
      phone: '+57 000 000-0000',
      email: 'eaangrino@gmail.com',
      location: 'Colombia',
    },
  },
  footer: {
    name: 'Edgar Angrino',
    copyright: '© Edgar Angrino. Todos los derechos reservados.',
  },
  construction: {
    message: 'Sitio en construcción - ¡Próximamente!',
  },
  experience: {
    title: 'Experiencia',
    subtitle: 'Mi trayectoria personal',
    tabs: {
      work: 'Experiencia',
      education: 'Educación',
    },
  },
  services: {
    title: 'Servicios',
    subtitle: 'Lo que ofrezco',
    services: {
      frontendDeveloper: 'Desarrollador Frontend',
      backendDeveloper: 'Desarrollador Backend',
      uiUxDesigner: 'Diseñador UI/UX',
    },
  },
  portfolio: {
    title: 'Portafolio',
    subtitle: 'Listado de proyectos en los que he trabajado',
    viewButton: 'Ver',
    close: 'Cerrar',
    link: 'Enlace',
    backButton: 'Volver',
    project: {
      itemOne: {
        title: 'ArtesLafaux - Landing Page',
        tech: 'React + TypeScript + TailwindCSS + DaisyUI + Vite',
        description:
          'Landing page para artista digital, con galería de imágenes, sección de contacto y diseño responsivo.',
      },
      itemTwo: {
        title: 'eaangrino - Portafolio Personal',
        tech: 'React + TypeScript + TailwindCSS + DaisyUI + Vite',
        description:
          'Portafolio personal completamente responsivo para mostrar habilidades, experiencia y proyectos.',
      }
    }
  },
}; 