import Card from './Card';
import type { Project } from '../types';
 
interface ProjectsProps {
  projects: Project[];
}
 
export default function Projects({ projects }: ProjectsProps) {
  return (
    <section>
      <h2
        className="mb-6 font-display text-2xl font-black text-red-700 sm:text-3xl"
        
      >
        Projetos
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.name} title={project.name} accent>
            <p className="mb-4 text-sm leading-relaxed text-gray-600">
              {project.description}
            </p>
 
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-700 ring-1 ring-orange-200"
                >
                  {tech}
                </span>
              ))}
            </div>
 
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-red-600 hover:text-red-800"
              >
                Ver projeto →
              </a>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}