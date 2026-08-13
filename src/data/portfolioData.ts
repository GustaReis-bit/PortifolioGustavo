import type {
  Profile,
  Skill,
  Project,
  ContactInfo,
  Education,
  Experience,
  Language,
} from '../types';

// ─── Perfil ─────────────────────────────────────────────────────────────────

// Dados do perfil do usuário
export const profile: Profile = {
  name: 'Gustavo Reis',

  title: 'Full Stack Developer | Automation',

  description:
    'Desenvolvedor Full Stack e estudante de Análise e Desenvolvimento de Sistemas, ' +
    'com experiência prática em desenvolvimento de APIs, automação de processos, ' +
    'integrações de sistemas e e-commerce. ' +
    'Atuo com Node.js, TypeScript, React, NestJS, PostgreSQL, n8n e Shopify.',

  area: 'Desenvolvimento Full Stack, Automação & Integrações',

  avatar: '/avatar.jpeg',

  social: [
    {
      label: 'GitHub',
      url: 'https://github.com/GustaReis-bit',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/gustavoreis05/',
      icon: 'linkedin',
    },
    {
      label: 'WhatsApp',
      url: 'https://wa.me/5521996766370',
      icon: 'whatsapp',
    },
  ],
};

// ─── Habilidades ────────────────────────────────────────────────────────────

export const skills: Skill[] = [
  { name: 'TypeScript', level: 'intermediate' },
  { name: 'JavaScript', level: 'intermediate' },
  { name: 'Node.js', level: 'intermediate' },
  { name: 'NestJS', level: 'intermediate' },
  { name: 'React', level: 'intermediate' },
  { name: 'PostgreSQL', level: 'intermediate' },
  { name: 'REST APIs', level: 'intermediate' },
  { name: 'n8n', level: 'intermediate' },
  { name: 'Automação de Processos', level: 'intermediate' },
  { name: 'Shopify', level: 'intermediate' },
  { name: 'Git', level: 'intermediate' },
  { name: 'Docker', level: 'intermediate' },
];

// ─── Projetos ───────────────────────────────────────────────────────────────

// Lista de projetos do usuário
export const projects: Project[] = [
  {
    name: 'Rematrícula API',
    description:
      'API REST para gerenciamento acadêmico desenvolvida com NestJS e TypeORM, ' +
      'com gerenciamento de alunos, cursos, disciplinas, turmas, pré-requisitos e matrículas. ' +
      'Implementação de autenticação JWT e Google OAuth2, PostgreSQL e documentação com Swagger.',
    technologies: [
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'TypeORM',
      'JWT',
      'Google OAuth2',
      'Swagger',
    ],
    url: 'https://github.com/GustaReis-bit/Rematricula-API',
  },

  {
    name: 'Catálogo de Produtos',
    description:
      'Aplicação web para gerenciamento e visualização de produtos, ' +
      'com cadastro, edição, exclusão, consulta de detalhes, controle de estoque e categorização.',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'MockAPI',
    ],
    url: 'https://github.com/GustaReis-bit/catalogo-de-produtos.git',
  },

  {
    name: 'Portal de Alunos',
    description:
      'API RESTful para gerenciamento acadêmico, desenvolvida em NestJS com arquitetura modular, ' +
      'autenticação e recursos voltados ao gerenciamento de alunos e processos de rematrícula.',
    technologies: [
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'Supabase',
      'TypeORM',
      'JWT',
      'Google OAuth2',
      'Swagger',
    ],
    url: 'https://github.com/Portal-do-Aluno',
  },

  {
    name: 'Rio 200-Graus',
    description:
      'Loja virtual de produtos para cozinha, desenvolvida com foco em navegação intuitiva, ' +
      'design responsivo e experiência de usuário.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
    ],
    url: 'https://github.com/GustaReis-bit/Rio200-Graus',
  },

  {
    name: 'Portfólio Gustavo',
    description:
      'Portfólio profissional desenvolvido para apresentar projetos, habilidades, experiências ' +
      'e informações de contato, com interface moderna, responsiva e intuitiva.',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
    ],
    url: 'https://github.com/GustaReis-bit/PortifolioGustavo.git',
  },

  {
    name: 'Quiz Mobile',
    description:
      'Aplicativo mobile de quiz interativo, desenvolvido para responder perguntas, ' +
      'acompanhar pontuação e proporcionar uma experiência dinâmica de aprendizado.',
    technologies: [
      'Flutter',
      'Dart',
    ],
    url: 'https://github.com/GustaReis-bit/quiz_mobile.git',
  },
];

// ─── Formação ───────────────────────────────────────────────────────────────

export const education: Education[] = [
  {
    institution:
      'Faculdade de Educação Tecnológica do Estado do Rio de Janeiro (FAETERJ-Rio)',
    course: 'Análise e Desenvolvimento de Sistemas',
    period: '2024.2 — Presente',
    description:
      'Graduação com foco em desenvolvimento de software, programação, ' +
      'banco de dados, engenharia de sistemas e desenvolvimento de aplicações.',
    current: true,
  },

  {
    institution: 'StartCapgemini',
    course: 'Linguagem Java',
    period: '2024 — 2025',
    description:
      'Formação em programação Java, JavaScript, HTML, CSS, desenvolvimento de APIs RESTful, ' +
      'aplicações web e fundamentos de programação.',
  },
];

// ─── Experiências ───────────────────────────────────────────────────────────

export const experiences: Experience[] = [
  {
    company: 'Freelancer / Autônomo',
    role: 'Desenvolvedor de Automação e Integrações',
    period: '2026/Jul — Presente',
    description:
      'Desenvolvimento de automações e integrações entre sistemas utilizando n8n, APIs, CRM e WhatsApp. ' +
      'Atuação com Shopify, GraphQL, Admin API e Liquid, além de desenvolvimento e otimização de aplicações web. ' +
      'Projetos para OMAMA, The Scale, Ecom Express, Vulkan e Park Life Dog, envolvendo automação, ' +
      'integração de sistemas, UX/UI, CRO e e-commerce.',
    current: true,
  },

  {
    company: 'Prefeitura Municipal de Nova Iguaçu',
    role: 'Instrutor de T.I. | Suporte Técnico',
    period: '2025/Set — Presente',
    description:
      'Planejamento e condução de aulas de Lógica de Programação, Informática Básica, ' +
      'Inteligência Artificial e Google Workspace. Prestação de suporte técnico aos usuários, ' +
      'realizando diagnóstico e resolução de problemas de hardware, software e sistemas, ' +
      'além de manutenção de computadores e impressoras.',
    current: true,
  },

  {
    company: 'Marcenaria JirehCenter',
    role: 'Atendimento ao Cliente | Marceneiro',
    period: '2022/Mai — 2022/Dez',
    description:
      'Atendimento ao cliente, apoio na criação de projetos de marcenaria, ' +
      'desenvolvimento visual de projetos utilizando Promob e suporte às atividades administrativas da empresa.',
  },
];

// ─── Idiomas ────────────────────────────────────────────────────────────────

export const languages: Language[] = [
  {
    name: 'Português',
    level: 'Nativo',
    flag: '🇧🇷',
  },
  {
    name: 'Inglês',
    level: 'Intermediário',
    flag: '🇺🇸',
  },
  {
    name: 'Espanhol',
    level: 'Básico',
    flag: '🇪🇸',
  },
];

// ─── Contato ────────────────────────────────────────────────────────────────

export const contact: ContactInfo = {
  email: 'gustavoreis5905@email.com',
  phone: '+55 (21) 996766370',
};