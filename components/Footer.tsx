'use client';

import {useTranslations} from 'next-intl';
import SocialIcon from './SocialIcon';

const links = [
  ['LinkedIn', 'https://linkedin.com/in/eaangrino'],
  ['GitHub', 'https://github.com/eaangrino'],
  ['Instagram', 'https://instagram.com/eaangrino'],
  ['Telegram', 'https://t.me/eaangrino'],
  ['StackBlitz', 'https://stackblitz.com/@eaangrino'],
] as const;

export default function Footer() {
  const t = useTranslations('footer');
  return (
    <footer className="border-base-300/60 bg-base-100 border-t px-4 py-10 md:px-8 md:py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <svg className="text-base-content h-16 w-16 sm:h-20 sm:w-20" viewBox="0 0 700 700" fill="none" aria-hidden="true">
          <path opacity="0.9" d="M319.5 497.5V618L244.5 558V452L319.5 497.5ZM454.75 558L379.75 618V497.5L454.75 452V558ZM215.5 468V558L170 513V437.5L215.5 468ZM529.25 513L483.75 558V468L529.25 437.5V513ZM408.699 81L484.66 218.037L409.25 259.5V333.5L467.75 364L524.758 314.355L573.536 379.214L543.75 409H394.75L349.5 484L304.5 409H155.5L125.714 379.214L174.492 314.355L231.5 364L290 333.5V259.5L154.5 185L111.5 215.5V259.5L142.709 286.678L95.5 349L36 289.5L154.938 81H408.699ZM663.25 289.5L603.75 349L556.541 286.678L587.75 259.5V215.5L544.75 185L524.093 196.356L460.149 81H544.312L663.25 289.5Z" fill="currentColor" />
        </svg>
        <p className="text-base-content/70 text-sm sm:text-base">{t('copyright')} {new Date().getFullYear()}</p>
        <div><span className="font-medium">{t('contactMe')}</span><br /><a href="mailto:eaangrino@gmail.com" className="text-primary font-semibold">eaangrino@gmail.com</a></div>
        <div className="flex flex-wrap justify-center gap-3 md:hidden">
          {links.map(([name, url]) => <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-sm border-base-300 bg-base-100" aria-label={name}><SocialIcon name={name} /></a>)}
        </div>
      </div>
    </footer>
  );
}
