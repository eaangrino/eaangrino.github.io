'use client';

import {ShareIcon, XMarkIcon} from '@heroicons/react/24/outline';
import {useTranslations} from 'next-intl';
import {useState} from 'react';
import SocialIcon from './SocialIcon';

const links = [
  ['LinkedIn', 'https://linkedin.com/in/eaangrino'],
  ['GitHub', 'https://github.com/eaangrino'],
  ['Instagram', 'https://instagram.com/eaangrino'],
  ['Telegram', 'https://t.me/eaangrino'],
  ['StackBlitz', 'https://stackblitz.com/@eaangrino'],
] as const;

export default function SocialMediaBar() {
  const t = useTranslations('social');
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={`fixed inset-0 z-[60] bg-black/20 backdrop-blur-md transition-opacity duration-200 ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setOpen(false)}
        aria-label={t('close')}
        tabIndex={open ? 0 : -1}
      />

      <div className="fixed right-4 bottom-5 z-[70] hidden md:block">
        <div className="flex flex-col items-end gap-2">
          {links.map(([name, url], index) => {
            const delay = open ? (links.length - 1 - index) * 35 : index * 20;

            return (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-circle border-base-300 bg-base-100 text-base-content shadow-lg transition-[opacity,transform,background-color,color] duration-200 ease-out hover:bg-primary hover:text-primary-content ${
                  open
                    ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
                    : 'pointer-events-none translate-y-3 scale-90 opacity-0'
                }`}
                style={{transitionDelay: `${delay}ms`}}
                aria-label={name}
                title={name}
                tabIndex={open ? 0 : -1}
              >
                <SocialIcon name={name} />
              </a>
            );
          })}

          <div className="relative">
            {!open && (
              <div
                className="bg-primary/20 absolute inset-0 animate-ping rounded-full"
                aria-hidden="true"
              />
            )}
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="btn btn-primary btn-circle btn-lg relative z-10 shadow-2xl"
              aria-label={open ? t('close') : t('open')}
              aria-expanded={open}
            >
              <span
                className={`transition-transform duration-200 ${open ? 'rotate-90' : 'rotate-0'}`}
              >
                {open ? (
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <ShareIcon className="h-6 w-6" aria-hidden="true" />
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
