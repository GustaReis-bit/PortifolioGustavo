import Card from './Card';
import type { Education } from '../types';
 
interface EducationProps {
  education: Education[];
}
 
// ─── Education ────────────────────────────────────────────────────────────────
 
export default function Education({ education }: EducationProps) {
  return (
    <section>
      <h2
        className="mb-5 font-display text-2xl font-black text-red-700 sm:mb-6 sm:text-3xl"
          
      >
        Formação
      </h2>

      <div className="flex flex-col gap-4 sm:gap-5">
        {education.map((item) => (
          <Card key={item.institution + item.course} accent>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-base font-bold text-red-700 sm:text-lg">
                    {item.course}
                  </h3>
                  {item.current && (
                    <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-semibold text-orange-700 ring-1 ring-orange-200">
                      Em andamento
                    </span>
                  )}
                </div>

                <p className="mt-0.5 text-sm font-semibold text-gray-500">
                  🏛️ {item.institution}
                </p>

                {item.description && (
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                )}
              </div>
 
              <span className="shrink-0 rounded-lg bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600 ring-1 ring-red-100 self-start">
                📅 {item.period}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}