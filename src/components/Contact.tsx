import Button from './Button';
import Card from './Card';
import type { ContactInfo } from '../types';
 
interface ContactProps {
  contact: ContactInfo;
}
 
// ─── Contact ──────────────────────────────────────────────────────────────────

// Componente Contact que exibe informações de contato e um botão para enviar email
export default function Contact({ contact }: ContactProps) {
  return (
    <Card title="Contato" accent className="text-center sm:text-left">
      <p className="mb-5 text-sm leading-relaxed text-gray-600 sm:text-base">
        Tem um projeto em mente ou quer bater um papo? Fique à vontade para
        entrar em contato!
      </p>
 
      {/* Exibe o telefone se disponível */}
      {contact.phone && (
        <p className="mb-5 text-sm text-gray-500">
          📞 <span className="font-medium text-gray-700">{contact.phone}</span>
        </p>
      )}
 
      {/* Botão para enviar email */}
      <Button
        label="✉️  Entrar em Contato"
        href={`mailto:${contact.email}`}
      />
    </Card>
  );
}