// ─── Tipos de Domínio ────────────────────────────────────────────────────────────

// Interface para o perfil do usuário
export interface Profile {
  name: string;
  title: string;
  description: string;
  area: string;
  avatar: string;
  social?: SocialLink[];
}

// Interface para links sociais
export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

// Interface para habilidades
export interface Skill {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
}

// Interface para projetos
export interface Project {
  name: string;
  description: string;
  technologies: string[];
  url?: string;
}

// Interface para informações de contato
export interface ContactInfo {
  email: string;
  phone?: string;
}


export interface Education {
  institution: string;
  course: string;
  period: string;
  description?: string;
  current?: boolean;
}
 
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  current?: boolean;
}
 
export interface Language {
  name: string;
  level: 'Básico' | 'Intermediário' | 'Avançado' | 'Fluente' | 'Nativo';
  flag: string;
}
// ─── Props do Componente Card ────────────────────────────────────────────────

// Interface para as props do componente Card
export interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
}