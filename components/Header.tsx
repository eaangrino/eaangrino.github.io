'use client';

import {MoonIcon, SunIcon} from '@heroicons/react/24/outline';
import {useTranslations} from 'next-intl';
import {useEffect, useState} from 'react';
import LanguageSelector from './LanguageSelector';
import {useTheme} from './useTheme';

const ids = ['home', 'projects', 'skills', 'experience'] as const;

export default function Header() {
  const t = useTranslations('header');
  const {isDarkMode, toggleTheme} = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<(typeof ids)[number]>('home');
  const nav = [
    [t('navigation.personalWebsite'), 'home'],
    [t('navigation.projects'), 'projects'],
    [t('navigation.skills'), 'skills'],
    [t('navigation.experience'), 'experience'],
  ] as const;

  useEffect(() => {
    const update = () => {
      const marker = window.scrollY + 160;
      let current: (typeof ids)[number] = 'home';

      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= marker) current = id;
      });

      setActive(current);
    };

    update();
    addEventListener('scroll', update, {passive: true});
    addEventListener('resize', update);

    return () => {
      removeEventListener('scroll', update);
      removeEventListener('resize', update);
    };
  }, []);

  const go = (id: (typeof ids)[number]) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4 md:px-8">
        <div className="border-base-300/60 bg-base-100/80 rounded-2xl border backdrop-blur-xl">
          <div className="flex items-center justify-between py-3 pr-2 pl-3">
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="btn btn-ghost btn-circle btn-sm md:hidden"
              aria-label={t('toggleMenu')}
              aria-expanded={menuOpen}
            >
              <span aria-hidden="true" className="text-xl">
                {menuOpen ? '×' : '☰'}
              </span>
            </button>

            <nav className="bg-base-200/80 hidden items-center rounded-full p-0.5 md:flex" aria-label="Primary">
              {nav.map(([label, id]) => (
                <button
                  type="button"
                  key={id}
                  onClick={() => go(id)}
                  className={`rounded-full px-3 py-1.5 text-sm font-medium ${
                    active === id
                      ? 'bg-base-100 shadow-sm'
                      : 'text-base-content/65 hover:text-base-content'
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <div className="relative">
                <div
                  className="bg-primary/20 absolute inset-0 animate-ping rounded-full"
                  aria-hidden="true"
                />
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="btn btn-ghost btn-circle btn-sm relative z-10"
                  aria-label={t('toggleTheme')}
                >
                  {isDarkMode ? (
                    <SunIcon className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <MoonIcon className="h-4 w-4" aria-hidden="true" />
                  )}
                </button>
              </div>
              <LanguageSelector />
            </div>
          </div>

          {menuOpen && (
            <nav className="border-base-300/60 border-t px-2 pb-3 md:hidden">
              {nav.map(([label, id]) => (
                <button
                  type="button"
                  key={id}
                  onClick={() => go(id)}
                  className="hover:bg-base-200 block w-full rounded-lg px-3 py-2 text-left text-sm"
                >
                  {label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
