import type { Profile, Skill, Project, ContactInfo } from '../types';
import ProfileImg from '../public/avatar.jpeg';
// ─── Perfil ─────────────────────────────────────────────────────────────────

// Dados do perfil do usuário
export const profile: Profile = {
  name: 'Gustavo Reis',
  title: 'Full Stack Developer',
  description:
    'Desenvolvedor iniciante apaixonado por tecnologia e desenvolvimento . ' +
    'Busco criar interfaces bonitas e acessíveis que resolvam problemas reais.',
  area: 'Desenvolvimento Frontend & UI/UX & backend',
  avatar: ProfileImg,
  social: [
    { label: 'GitHub', url: 'https://github.com/GustaReis-bit', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/gustavoreis05/', icon: 'linkedin' },
    { label: 'Whatsapp', url: 'https://wa.me/5521996766370', icon: 'whatsapp' },
  ],
};
 
// ─── Habilidades ──────────────────────────────────────────────────────────────────

// Lista de habilidades do usuário
export const skills: Skill[] = [
  { name: 'HTML', level: 'intermediate' },
  { name: 'CSS', level: 'intermediate' },
  { name: 'JavaScript', level: 'beginner' },
  { name: 'React', level: 'beginner' },
  { name: 'TypeScript', level: 'beginner' },
  { name: 'Tailwind CSS', level: 'beginner' },
  { name: 'Git', level: 'beginner' },
  { name: 'Bootstrap', level: 'beginner' },
  { name: 'NodeJS', level: 'intermediate' },
  { name: 'Java', level: 'advanced' },
  { name: ' C', level: 'advanced' }

];
 
// ─── Projetos ─────────────────────────────────────────────────────────────────
 
// Lista de projetos do usuário
export const projects: Project[] = [
  {
    name: 'Rio 200-Graus',
    description:
      'Rio 200 Graus é uma loja virtual que oferece produtos de cozinha como fogões e fornos de diferentes marcas e tipos. A aplicação foi desenvolvida utilizando HTML, CSS e é estruturada para proporcionar uma experiência de navegação intuitiva aos usuários.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Butstrap'],
    url: "https://github.com/GustaReis-bit/Rio200-Graus"
  },
  {
    name: 'Rematrícula API',
    description:
      'PI de rematrícula desenvolvida em NestJS com TypeORM e Supabase (Postgres). Fornece endpoints para gerenciamento de alunos, cursos, disciplinas, turmas, pré-requisitos, matrícula e autenticação (JWT + Google OAuth2).',
    technologies: ['NestJS', 'TypeScript', 'Postgres', 'supabase', 'TypeORM', 'JWT', 'Google OAuth2','swagger'],
    url:"https://github.com/GustaReis-bit/Rematricula-API"
  },
  {
    name: 'Portal de Alunos',
    description:
      'API RESTful completa para gerenciamento de rematrícula acadêmica, desenvolvida em NestJS com arquitetura modular, autenticação robusta e documentação interativa.',
    technologies: ['NestJS', 'TypeScript', 'Postgres', 'supabase', 'TypeORM', 'JWT', 'Google OAuth2','swagger'],
    url:"https://github.com/Portal-do-Aluno"
  },
];
 
// ─── Formação ───────────────────────────────────────────────────────────────
 
export const education: Education[] = [

  {
    institution: ' Faculdade de Educação Tecnológica do Estado do Rio de Janeiro (FETERJ)',
    course: 'Análise e Desenvolvimento de Sistemas',
    period: '2024.2 — Presente',
    description:
      'Graduação focada em desenvolvimento de software, estrutura de dados, banco de dados e engenharia de sistemas.',
    current: true,
  },
  {
    institution: 'StartCapgemini',
    course: 'Linguagem Java',
    period: '2024 — 2025',
    description:
      'Curso focado em areas com Java, tecnologias como Java;JavaScript;HTML;CSS. Alem de criaçoes de API RESTful, desenvolvimento de aplicações web e fundamentos de programação.',
  },
];
 
// ─── Experiências ───────────────────────────────────────────────────────────
 
export const experiences: Experience[] = [

  {
    company: 'Estagiário',
    role: 'Intrutor e Suporte Técnico',
    period: '2025 — Presente',
    description:
      'Atuo como instrutor e suporte técnico em diversas disciplinas, incluindo lógica de programação, desenvolvimento web e manutenção de hardware. Responsável por ministrar aulas, auxiliar alunos com dúvidas técnicas e garantir o bom funcionamento dos equipamentos de informática.',
    current: true,
  },
  {
    company: 'Marcenaria JirehCenter',
    role: 'Atendimento ao Cliente|Marceneiro',
    period: '2022/Mai — 2022/Dez',
    description:
      'Auxiliava em Criaçao de Projetos em uma Marcenaria, atendimento ao cliente, Criaçao Visual de projetos com o PROMOB e na parte administrativa da empresa.',
  },
];
 
// ─── Idiomas ─────────────────────────────────────────────────────────────────
 
export const languages: Language[] = [

  { name: 'Português', level: 'Nativo', flag: '🇧🇷' },
  { name: 'Inglês', level: 'Intermediário', flag: '🇺🇸' },
  { name: 'Espanhol', level: 'Básico', flag: '🇪🇸' },
];


// ─── Contato ─────────────────────────────────────────────────────────────────

// Informações de contato do usuário
export const contact: ContactInfo = {
  email: 'gustavoreis5905@email.com',
  phone: '+55 (21) 996766370',
};

