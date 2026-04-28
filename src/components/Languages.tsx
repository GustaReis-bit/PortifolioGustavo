// ─── Idiomas ─────────────────────────────────────────────────────────────────
// Componente Idiomas que exibe competências de idioma com barras de progresso
import Card from './Card';
import type { Language } from '../types';
 
interface LanguagesProps {
  languages: Language[];
}
 
const levelWidth: Record<string, string> = {
  'Básico':        'w-1/5',
  'Intermediário': 'w-3/5',
  'Avançado':      'w-4/5',
  'Fluente':       'w-11/12',
  'Nativo':        'w-full',
};
 
const levelColor: Record<string, string> = {
  'Básico':        'bg-orange-200',
  'Intermediário': 'bg-orange-400',
  'Avançado':      'bg-red-400',
  'Fluente':       'bg-red-600',
  'Nativo':        'bg-red-700',
};
 
// ─── Languages ────────────────────────────────────────────────────────────────
 
export default function Languages({ languages }: LanguagesProps) {
  return (
    <Card title="Idiomas" accent>
      <ul className="flex flex-col gap-4">
        {languages.map((lang) => (
          <li key={lang.name}>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-700">
                {lang.flag} {lang.name}
              </span>
              <span className="text-xs font-semibold text-orange-600">
                {lang.level}
              </span>
            </div>
            {/* Barra de progresso do nível de idioma */}
            <div className="h-2 w-full rounded-full bg-orange-100">
              <div
                className={`h-2 rounded-full transition-all duration-500 ${levelWidth[lang.level]} ${levelColor[lang.level]}`}
              />
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}