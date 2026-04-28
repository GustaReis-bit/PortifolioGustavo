import Card from './Card';
import type { Profile } from '../types';
 
interface AboutProps {
  profile: Profile;
}
 
// ─── About ────────────────────────────────────────────────────────────────────

// Componente About que exibe informações pessoais do perfil
export default function About({ profile }: AboutProps) {
  return (
    <Card title="Sobre Mim" accent>
      <dl className="space-y-4 text-sm text-gray-600 sm:text-base">
        <div>
          <dt className="text-xs font-bold uppercase tracking-widest text-red-900">
            Nome completo
          </dt>
          <dd className="mt-0.5 font-medium text-gray-800">{profile.name}</dd>
        </div>
 
        <div>
          <dt className="text-xs font-bold uppercase tracking-widest text-red-900">
            Sobre
          </dt>
          <dd className="mt-0.5 leading-relaxed">{profile.description}</dd>
        </div>
 
        <div>
          <dt className="text-xs font-bold uppercase tracking-widest text-red-900">
            Área de interesse
          </dt>
          <dd className="mt-0.5 font-medium text-gray-800">{profile.area}</dd>
        </div>
      </dl>
    </Card>
  );
}