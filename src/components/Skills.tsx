import Card from './Card';
import type { Skill } from '../types';
 
interface SkillsProps {
  skills: Skill[];
}

// Mapeamento de cores para os níveis de habilidade
const levelColor: Record<string, string> = {
  beginner: 'bg-orange-200 text-orange-700 border-orange-200',
  intermediate: 'bg-red-300 text-red-700 border-red-200',
  advanced: 'bg-red-500 text-white border-red-800',
};

// Mapeamento de rótulos para os níveis de habilidade
const levelLabel: Record<string, string> = {
  beginner: 'Iniciante',
  intermediate: 'Intermediário',
  advanced: 'Avançado',
};
 
// ─── Skills ───────────────────────────────────────────────────────────────────

// Componente Skills que exibe as habilidades com seus respectivos níveis
export default function Skills({ skills }: SkillsProps) {
  return (
    <Card title="Habilidades" accent>
      <ul className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li key={skill.name} className="flex flex-col items-start gap-1">
            <span
              className={`
                rounded-full border px-4 py-1.5 text-sm font-semibold tracking-wide
                transition-transform hover:scale-105
                ${skill.level ? levelColor[skill.level] : 'bg-orange-50 text-orange-800 border-orange-200'}
              `}
            >
              {skill.name}
            </span>
            {/* Exibe o nível se disponível */}
            {skill.level && (
              <span className="pl-1 text-xs text-black-1400">
                {levelLabel[skill.level]}
              </span>
            )}
          </li>
        ))}
      </ul>
    </Card>
  );
}