export type Skill = {
  name: string;
  iconUrl: string;
  iconUrlAlt?: string;
  details?: 'node' | 'aws';
  isBlack?: boolean;
};

const devicon = 'https://raw.githubusercontent.com/devicons/devicon/master/icons';
const vector = 'https://www.vectorlogo.zone/logos';

export const primarySkills: Skill[] = [
  {
    name: 'Node.js',
    iconUrl: '/nodejs-original-wordmark.svg',
    iconUrlAlt: '/nodejs-original-wordmark-alt.svg',
    details: 'node',
  },
  {name: 'TypeScript', iconUrl: `${devicon}/typescript/typescript-original.svg`},
  {name: 'Angular Material', iconUrl: `${devicon}/angular/angular-original.svg`},
  {name: 'React', iconUrl: `${devicon}/react/react-original-wordmark.svg`},
  {
    name: 'Next.js',
    iconUrl: '/nextjs_icon_132160.svg',
    isBlack: true,
  },
  {name: 'NestJS', iconUrl: '/nestjs.svg'},
  {name: 'Python', iconUrl: `${devicon}/python/python-original.svg`},
  {
    name: 'AWS',
    iconUrl: '/amazonwebservices-original-wordmark.svg',
    iconUrlAlt: '/amazonwebservices-original-wordmark-alt.svg',
    details: 'aws',
  },
  {name: 'Kotlin', iconUrl: `${devicon}/kotlin/kotlin-original.svg`},
  {
    name: 'PostgreSQL',
    iconUrl: '/postgresql-original.svg',
    iconUrlAlt: '/postgresql-original-alt.svg',
  },
  {name: 'Oracle SQL', iconUrl: '/sql-dev3.svg'},
  {name: 'MySQL', iconUrl: `${devicon}/mysql/mysql-original-wordmark.svg`},
  {name: 'Java', iconUrl: `${devicon}/java/java-original.svg`},
  {name: '.NET', iconUrl: `${devicon}/dotnetcore/dotnetcore-original.svg`},
  {name: 'Flutter', iconUrl: `${devicon}/flutter/flutter-original.svg`},
  {name: 'Ionic', iconUrl: 'https://ionicframework.com/apple-icon-180x180.png'},
];

export const toolSkills: Skill[] = [
  {name: 'Docker', iconUrl: '/docker-icon-svgrepo-com.svg'},
  {name: 'Git', iconUrl: `${vector}/git-scm/git-scm-icon.svg`},
  {name: 'Linux', iconUrl: `${devicon}/linux/linux-original.svg`},
  {name: 'Postman', iconUrl: `${vector}/getpostman/getpostman-icon.svg`},
  {
    name: 'Bash',
    iconUrl: `${vector}/gnu_bash/gnu_bash-icon.svg`,
    isBlack: true,
  },
  {name: 'Figma', iconUrl: `${devicon}/figma/figma-original.svg`},
  {name: 'Codex', iconUrl: 'https://cdn.oaistatic.com/assets/favicon-o20kmmos.svg'},
  {name: 'DeepSeek', iconUrl: '/deepseek.svg'},
  {name: 'ollama', iconUrl: '/ollama.svg', isBlack: true},
  {
    name: 'Gemini',
    iconUrl: 'https://www.gstatic.com/lamda/images/gemini_sparkle_aurora_33f86dc0c0257da337c63.svg',
  },
  {
    name: 'Claude',
    iconUrl: 'https://assets-proxy.anthropic.com/claude-ai/v2/assets/v1/cd02a42d9-Vq_H3mgS.svg',
  },
  {name: 'Meta AI', iconUrl: '/metaai-color.svg'},
  {
    name: 'MarkText',
    iconUrl: 'https://raw.githubusercontent.com/marktext/marktext/develop/docs/assets/logo-small.png',
  },
  {name: 'LM Studio', iconUrl: '/lm-studio.svg'},
  {
    name: 'SKILL.md',
    iconUrl: '/skill_md.svg',
    iconUrlAlt: '/skill_md_alt.svg',
  },
  {name: 'AGENTS.md', iconUrl: '/agents_md.svg', isBlack: true},
];
