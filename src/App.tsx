// Importação dos componentes da aplicação
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Languages from './components/Languages';
import Footer from './components/Footer';

// Importação dos dados do portfólio utilizados pelas seções
import { profile, skills, projects, contact, education, experiences, languages } from './data/portfolioData';

// Componente principal da aplicação
export default function App() {
  return (
    <div className="min-h-screen w-full font-sans text-gray-800">
      {/* Cabeçalho da página */}
      <Header profile={profile} />

      {/* Conteúdo principal da página */}
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <div className="flex flex-col gap-6">
            <About profile={profile} />
            <Skills skills={skills} />
          </div>
          <div className="flex flex-col gap-6">
            <Contact contact={contact} />
            <Languages languages={languages} />
          </div>
        </div>

        {/* Seção de experiências profissionais */}
        <div className="mt-8 sm:mt-10 lg:mt-14">
          <Experience experiences={experiences} />
        </div>

        {/* Seção de formação acadêmica */}
        <div className="mt-8 sm:mt-10 lg:mt-14">
          <Education education={education} />
        </div>

        {/* Seção de projetos */}
        <div className="mt-8 sm:mt-10 lg:mt-14">
          <Projects projects={projects} />
        </div>
      </main>

      {/* Rodapé da página */}
      <Footer name={profile.name} />
    </div>
  );
}