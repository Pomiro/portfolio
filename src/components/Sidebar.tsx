import React from 'react';
import { GitHub, Telegram } from './Icons';

const NAV_LINKS = [
  { name: 'О себе', href: '#about' },
  { name: 'Опыт', href: '#experience' },
  { name: 'Проекты', href: '#projects' },
];

const SOCIAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com/pomiro', Icon: GitHub },
  { name: 'Telegram', href: 'https://t.me/pomiro', Icon: Telegram },
];

const Sidebar = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">Михаил Попов</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Архитектор AI-решений
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-400">
          Специализируюсь на интеграции AI-решений для оптимизации операционных процессов и повышения эффективности бизнеса. Консультирую и реализую.
        </p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a className="group flex items-center py-3" href={link.href}>
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    {link.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Social Links moved here */}
        <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
          {SOCIAL_LINKS.map(({ name, href, Icon }) => (
            <li key={name} className="mr-5 text-xs shrink-0">
              <a className="block hover:text-slate-200" href={href} target="_blank" rel="noreferrer noopener" aria-label={`${name} (opens in a new tab)`}>
                <span className="sr-only">{name}</span>
                <Icon className="h-[30px] w-[30px]" />
              </a>
            </li>
          ))}
        </ul>

      </div>
      
    </header>
  );
};

export default Sidebar;