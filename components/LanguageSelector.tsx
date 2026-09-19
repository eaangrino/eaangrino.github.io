'use client';

import {CheckIcon, ChevronDownIcon} from '@heroicons/react/24/outline';
import {useLocale, useTranslations} from 'next-intl';
import {usePathname} from 'next/navigation';
import {useEffect, useRef, useState, type ReactElement} from 'react';

type Language = {
  code: 'en' | 'es';
  name: string;
  flag: string;
  flagSvg: ReactElement;
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return isMobile;
}

const languages: Language[] = [
  {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
    flagSvg: (
      <svg viewBox="0 0 640 480" className="h-4 w-5 rounded-sm" aria-hidden="true">
        <path fill="#B22234" d="M0 0h640v480H0z" />
        <path
          fill="#FFF"
          d="M0 0h640v37H0zM0 74h640v37H0zM0 148h640v37H0zM0 222h640v37H0zM0 296h640v37H0zM0 370h640v37H0zM0 444h640v37H0z"
        />
        <path fill="#3C3B6E" d="M0 0h320v259H0z" />
        <g fill="#FFF">
          {[
            [24, 24],
            [72, 24],
            [120, 24],
            [168, 24],
            [216, 24],
            [264, 24],
            [48, 48],
            [96, 48],
            [144, 48],
            [192, 48],
            [240, 48],
            [288, 48],
            [24, 72],
            [72, 72],
            [120, 72],
            [168, 72],
            [216, 72],
            [264, 72],
            [48, 96],
            [96, 96],
            [144, 96],
            [192, 96],
            [240, 96],
            [288, 96],
            [24, 120],
            [72, 120],
            [120, 120],
            [168, 120],
            [216, 120],
            [264, 120],
            [48, 144],
            [96, 144],
            [144, 144],
            [192, 144],
            [240, 144],
            [288, 144],
            [24, 168],
            [72, 168],
            [120, 168],
            [168, 168],
            [216, 168],
            [264, 168],
            [48, 192],
            [96, 192],
            [144, 192],
            [192, 192],
            [240, 192],
            [288, 192],
            [24, 216],
            [72, 216],
            [120, 216],
            [168, 216],
            [216, 216],
            [264, 216],
          ].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="4.5" />
          ))}
        </g>
      </svg>
    ),
  },
  {
    code: 'es',
    name: 'Español',
    flag: '🇨🇴',
    flagSvg: (
      <svg viewBox="0 0 640 480" className="h-4 w-5 rounded-sm" aria-hidden="true">
        <path fill="#FCD116" d="M0 0h640v240H0z" />
        <path fill="#003893" d="M0 240h640v120H0z" />
        <path fill="#CE1126" d="M0 360h640v120H0z" />
      </svg>
    ),
  },
];

export default function LanguageSelector() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations('header');
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const current = languages.find((item) => item.code === locale) ?? languages[1];

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, []);

  const hrefFor = (nextLocale: string) => {
    const parts = pathname.split('/').filter(Boolean);

    if (parts[0] === 'en' || parts[0] === 'es') parts[0] = nextLocale;
    else parts.unshift(nextLocale);

    return `/${parts.join('/')}/${typeof window !== 'undefined' ? window.location.hash : ''}`;
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="btn btn-sm border-base-300/80 bg-base-100/70 rounded-xl px-2.5 shadow-sm hover:bg-base-200/85 md:px-3"
        aria-label={t('languageSelector')}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <span className="text-base leading-none" aria-hidden="true">
          {isMobile ? current.flag : current.flagSvg}
        </span>
        <span className="text-[0.72rem] font-semibold tracking-[0.03em] sm:text-xs">
          {current.code.toUpperCase()}
        </span>
        <ChevronDownIcon
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          className="bg-base-100/95 ring-base-300 absolute top-full right-0 z-50 mt-2 min-w-[150px] overflow-hidden rounded-xl shadow-lg ring-1 backdrop-blur-md"
          role="menu"
        >
          <div className="space-y-0.5 p-1">
            {languages.map((language) => {
              const selected = locale === language.code;

              return (
                <a
                  key={language.code}
                  href={hrefFor(language.code)}
                  hrefLang={language.code}
                  lang={language.code}
                  aria-current={selected ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-base-200 ${
                    selected ? 'bg-primary/10 text-primary' : 'text-base-content'
                  }`}
                  role="menuitem"
                >
                  <span className="text-base" aria-hidden="true">
                    {isMobile ? language.flag : language.flagSvg}
                  </span>
                  <span className="font-medium">{language.name}</span>
                  {selected && <CheckIcon className="ml-auto h-4 w-4" aria-hidden="true" />}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
