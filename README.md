# 🎨 Portfólio de Gustavo Reis

Um portfólio responsivo e moderno desenvolvido com **React**, **TypeScript**, **Vite** e **Tailwind CSS**. Este projeto apresenta minhas habilidades, projetos e experiências como desenvolvedor Full Stack.

## 📋 Descrição

Este portfólio é uma aplicação web interativa que exibe:
- ✨ Perfil profissional com foto e título
- 🛠️ Habilidades técnicas organizadas por nível de proficiência
- 📂 Portfólio de projetos com descrições e tecnologias utilizadas
- 📱 Informações de contato e links para redes sociais
- 📧 Seção de contato

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para criar interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Vite 8** - Build tool rápido e moderno
- **Tailwind CSS 4** - Framework CSS utilitário
- **ESLint** - Linter para garantir qualidade do código

## 📂 Estrutura do Projeto

```
cv-gustavo/
├── src/
│   ├── components/          # Componentes React reutilizáveis
│   │   ├── About.tsx        # Seção "Sobre mim"
│   │   ├── Button.tsx       # Componente de botão
│   │   ├── Card.tsx         # Componente de card
│   │   ├── Contact.tsx      # Seção de contato
│   │   ├── Footer.tsx       # Rodapé
│   │   ├── Header.tsx       # Cabeçalho
│   │   ├── Projects.tsx     # Seção de projetos
│   │   ├── Skills.tsx       # Seção de habilidades
│   ├── data/
│   │   └── portfolioData.ts # Dados centralizados (perfil, skills, projetos, contato)
│   ├── types/
│   │   └── index.ts         # Definições de tipos TypeScript
│   ├── App.tsx              # Componente principal
│   ├── App.css              # Estilos globais
│   └── main.tsx             # Entry point
├── public/
│   └── avatar.jpeg          # Foto de perfil
├── index.html               # HTML principal
├── package.json             # Dependências e scripts
├── vite.config.ts           # Configuração do Vite
├── tsconfig.json            # Configuração do TypeScript
└── eslint.config.js         # Configuração do ESLint
```

## 🎯 Como Usar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. Clone ou acesse o repositório:
```bash
cd cv-gustavo
```

2. Instale as dependências:
```bash
npm install
```

### Desenvolvimento

Execute o servidor de desenvolvimento:
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`

### Preview da Build

```bash
npm run preview
```

### Validação de Código

```bash
npm run lint
```

## ✏️ Personalizando o Portfólio

Todos os dados do portfólio estão centralizados em [src/data/portfolioData.ts](src/data/portfolioData.ts). Para personalizar:

1. **Perfil**: Atualize `profile` com seu nome, título, descrição e links sociais
2. **Habilidades**: Modifique o array `skills` com suas tecnologias
3. **Projetos**: Adicione seus projetos no array `projects`
4. **Contato**: Configure suas informações em `contact`
5. **Avatar**: Substitua a imagem em `public/avatar.jpeg`

### Exemplo de Estrutura de Dados

```typescript
export const profile: Profile = {
  name: 'Seu Nome',
  title: 'Sua Profissão',
  description: 'Breve descrição sobre você',
  area: 'Suas áreas de especialidade',
  avatar: ProfileImg,
  social: [
    { label: 'GitHub', url: '...', icon: 'github' },
    { label: 'LinkedIn', url: '...', icon: 'linkedin' },
  ],
};
```

## 🎨 Estilos e Tema

O projeto utiliza **Tailwind CSS** para estilização, com uma paleta de cores warm (tons de âmbar). Para customizar:

- **Cores**: Modifique as classes Tailwind nos componentes
- **Fonte**: Ajuste em `src/App.tsx`
- **Layout**: Os componentes usam um grid responsivo que se adapta para mobile

## 🔗 Links Importantes

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## 📱 Responsividade

O portfólio é totalmente responsivo e funciona bem em:
- 📱 Smartphones
- 📱 Tablets
- 💻 Desktops

## 📞 Contato

- **GitHub**: [GustaReis-bit](https://github.com/GustaReis-bit)
- **LinkedIn**: [gustavoreis05](https://www.linkedin.com/in/gustavoreis05/)
- **WhatsApp**: [+55 21 99676-6370](https://wa.me/5521996766370)

---

**Desenvolvido com ❤️ por Gustavo Reis**
