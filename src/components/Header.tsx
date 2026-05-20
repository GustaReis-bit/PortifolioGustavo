import { useState } from 'react';
import type { Profile } from '../types';

interface HeaderProps {
  profile: Profile;
}

export default function Header({ profile }: HeaderProps) {
  const [nameHovered, setNameHovered] = useState(false);
  const [titleHovered, setTitleHovered] = useState(false);

  return (
    <header className="relative overflow-hidden px-5 pt-14 pb-16 text-white sm:px-10 sm:pt-20 sm:pb-20 lg:px-16 lg:pt-24 lg:pb-24">

      {/* Orbs animados */}
      <span className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 animate-orb-1 sm:h-80 sm:w-80" />
      <span className="pointer-events-none absolute -bottom-16 -left-8 h-56 w-56 rounded-full bg-black/10 animate-orb-2 sm:h-80 sm:w-80" />
      <span className="pointer-events-none absolute top-1/2 left-1/2 h-40 w-40 rounded-full bg-white/5 animate-orb-3" />

      <div className="relative z-10 mx-auto max-w-4xl flex flex-col items-center text-center">

        {/* Avatar */}
        <div className="relative animate-fade-down" style={{ animationDelay: '0ms' }}>
          <div className="absolute inset-0 rounded-full bg-white/30 animate-ping-slow" />
          <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white/50 shadow-2xl sm:h-36 sm:w-36 lg:h-40 lg:w-40">
            {profile.avatar ? (
              <img
                src={profile.avatar}
                alt={`Foto de ${profile.name}`}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-white/20 text-4xl font-bold sm:text-5xl">
                {profile.name.charAt(0)}
              </div>
            )}
          </div>
        </div>

        {/* Nome */}
        <h1
          className="mt-5 font-display text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl animate-fade-down cursor-default select-none"
          style={{ animationDelay: '150ms' }}
          onMouseEnter={() => setNameHovered(true)}
          onMouseLeave={() => setNameHovered(false)}
        >
          {profile.name.split('').map((char, i) => (
            <span
              key={i}
              className="inline-block transition-all duration-200"
              style={{
                transform: nameHovered
                  ? `translateY(${Math.sin(i * 0.8) * 8}px) rotate(${Math.sin(i) * 5}deg)`
                  : 'translateY(0) rotate(0deg)',
                color: nameHovered ? `hsl(${30 + i * 15}, 100%, 85%)` : 'white',
                transitionDelay: `${i * 30}ms`,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        {/* Título */}
        <p
          className="mt-2 text-base font-medium text-white/80 sm:text-xl lg:text-2xl animate-fade-down cursor-default select-none relative"
          style={{ animationDelay: '300ms' }}
          onMouseEnter={() => setTitleHovered(true)}
          onMouseLeave={() => setTitleHovered(false)}
        >
          <span
            className="absolute inset-0 rounded-full blur-md pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,200,100,0.4), transparent)',
              opacity: titleHovered ? 1 : 0,
              transform: titleHovered ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'opacity 0.3s, transform 0.3s',
            }}
          />
          {profile.title.split('').map((char, i) => (
            <span
              key={i}
              className="inline-block transition-all duration-300"
              style={{
                transform: titleHovered ? `translateY(${Math.sin(i * 0.6) * 6}px)` : 'translateY(0)',
                color: titleHovered ? '#fde68a' : '',
                transitionDelay: `${i * 25}ms`,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
          <span className="ml-1 inline-block w-0.5 h-5 bg-white/60 animate-blink align-middle" />
        </p>

        {/* Social + botão */}
        <div
          className="mt-5 flex flex-wrap justify-center items-center gap-2 sm:gap-3 animate-fade-down"
          style={{ animationDelay: '450ms' }}
        >
          {profile.social?.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/40 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur-sm transition-all duration-200 hover:bg-white/25 hover:scale-105 sm:px-4 sm:py-1.5 sm:text-sm"
            >
              {s.label}
            </a>
          ))}

          {profile.social && profile.social.length > 0 && (
            <span className="hidden h-4 w-px bg-white/30 sm:block" />
          )}

          {/* ✅ BOTÃO CORRIGIDO */}
          <a
            href="/CurriculoGustavo.pdf"
            download="CurriculoGustavo.pdf"
            className="flex items-center gap-1.5 rounded-full border-2 border-white/70 bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-red-700 hover:scale-105 sm:px-4 sm:py-1.5 sm:text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Baixar CV
          </a>
        </div>
      </div>
    </header>
  );
}