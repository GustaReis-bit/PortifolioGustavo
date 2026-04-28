// ─── Footer ───────────────────────────────────────────────────────────────────

// Propriedades esperadas pelo componente Footer
interface FooterProps {
  name: string;
}
 
// Componente de rodapé que exibe direitos autorais e nome do autor
export default function Footer({ name }: FooterProps) {
  return (
    <footer className="border-t border-orange-100 bg-transparent px-4 py-6 text-center text-xs text-gray-400 sm:py-8 sm:text-sm">
      <p>
        © {new Date().getFullYear()}{' '}
        <span className="font-semibold text-red-600">{name}</span> — Feito com
        React & Tailwind CSS
      </p>
    </footer>
  );
}