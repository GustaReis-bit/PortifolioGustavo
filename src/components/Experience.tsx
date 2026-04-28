import Card from './Card';
import type { Experience } from '../types';
 
interface ExperienceProps {
  experiences: Experience[];
}
 
// ─── Experience ───────────────────────────────────────────────────────────────
 
export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section>
      <h2
        className="mb-5 font-display text-2xl font-black text-red-700 sm:mb-6 sm:text-3xl"
      >
        Experiências
      </h2>
 
      {/* Estrutura da linha do tempo */}
      <div className="relative flex flex-col gap-4 sm:gap-5">
        {/* Linha vertical — oculta no mobile, visível em telas sm+ */}
        <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-red-300 via-orange-300 to-transparent sm:block" />
 
        {experiences.map((item, index) => (
          <div key={item.company + item.role} className="flex gap-4 sm:gap-5">
            {/* Indicador de evento da linha do tempo — apenas em sm+ */}
            <div className="relative hidden sm:flex shrink-0 flex-col items-center">
              <div
                className={`
                  z-10 mt-5 flex h-3 w-3 rounded-full ring-2 ring-white
                  ${item.current ? 'bg-red-600 ring-red-300' : 'bg-orange-400'}
                `}
              />
            </div>
 
            {/* Card — ocupa o espaço restante */}
            <div className="flex-1 min-w-0">
              <Card accent={index === 0}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  {/* Left: role info */}
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-base font-bold text-red-700 sm:text-lg">
                        {item.role}
                      </h3>
                      {item.current && (
                        <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-semibold text-orange-700 ring-1 ring-orange-200">
                          Atual
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-sm font-semibold text-gray-500">
                      🏢 {item.company}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
 
                  {/* Right: period */}
                  <span className="shrink-0 rounded-lg bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600 ring-1 ring-red-100 self-start">
                    📅 {item.period}
                  </span>
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}