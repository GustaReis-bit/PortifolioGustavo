interface ButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'outline';
  className?: string;
}
 
// ─── Button ───────────────────────────────────────────────────────────────────
// Renderiza como <a> quando href é fornecido, caso contrário como <button>.

// Componente Button para renderar botões ou links com estilos personalizados
export default function Button({
  label,
  onClick,
  href,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  // Classes base para o botão
  const base =
    'inline-flex items-center gap-2 rounded-full px-7 py-3 font-semibold ' +
    'text-sm tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 ' +
    'focus:ring-orange-400 focus:ring-offset-2 active:scale-95';
 
  // Variantes de estilo para o botão
  const variants = {
    primary:
      'bg-gradient-to-r from-red-600 to-orange-500 text-white ' +
      'shadow-md shadow-orange-300/50 hover:from-red-700 hover:to-orange-600 hover:shadow-lg',
    outline:
      'border-2 border-red-600 text-red-700 hover:bg-red-600 hover:text-white',
  };
 
  // Combinação das classes
  const classes = `${base} ${variants[variant]} ${className}`;
 
  // Renderiza como link se href for fornecido
  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {label}
      </a>
    );
  }
 
  // Renderiza como botão
  return (
    <button type="button" onClick={onClick} className={classes}>
      {label}
    </button>
  );
}