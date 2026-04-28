import type { CardProps } from '../types';

export default function Card({ title, children, className = '', accent = false }: CardProps) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl border border-white/40
        shadow-md shadow-black/10
        transition-all duration-300 hover:shadow-lg hover:shadow-black/15
        hover:-translate-y-1 w-full
        ${className}
      `}
      style={{
        background: 'rgba(255, 255, 255, 0.41)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      {accent && (
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-red-500 to-orange-400" />
      )}
      <div className={`p-5 sm:p-6 ${accent ? 'pl-6 sm:pl-7' : ''}`}>
        {title && (
          <h3 className="mb-3 font-display text-lg font-bold tracking-tight text-red-800 sm:mb-4 sm:text-xl">
            {title}
          </h3>
        )}
        {children}
      </div>
    </div>
  );
}