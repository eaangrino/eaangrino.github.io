'use client';

import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import {useTranslations} from 'next-intl';
import {useState} from 'react';
import {projects} from '@/data/projects';
import {useTheme} from './useTheme';

const INITIAL = 5;
function GithubMark() { return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 fill-current"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.72-4.03-1.42-4.03-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.05.13 3.01.4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.7.8.58A12 12 0 0 0 24 12C24 5.37 18.63 0 12 0Z"/></svg>; }

export default function ProjectsShowcase() {
  const home = useTranslations('home.projects');
  const portfolio = useTranslations('portfolio.project');
  const {isDarkMode} = useTheme();
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL);
  return <section id="projects" className="scroll-mt-28 px-4 py-14 md:px-8 md:py-20"><div className="mx-auto max-w-6xl">
    <div className="mb-10 max-w-3xl"><p className="text-primary mb-3 text-sm font-semibold tracking-[0.28em] uppercase">{home('eyebrow')}</p><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{home('title')}</h2><p className="text-base-content/70 mt-4 max-w-2xl text-base leading-7 sm:text-lg">{home('description')}</p></div>
    <div id="projects-list" className={`border-base-300/70 bg-base-100/80 divide-base-300/70 overflow-hidden rounded-2xl border divide-y backdrop-blur ${isDarkMode ? 'shadow-[0_18px_55px_rgba(255,255,255,0.06)]' : 'shadow-[0_18px_55px_rgba(15,23,42,0.07)]'}`}>
      {visible.map((project) => <article key={project.id} className="flex items-start gap-4 px-4 py-4 sm:gap-5 sm:px-5 sm:py-5"><div className="bg-base-200/70 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"><GithubMark/></div><div className="min-w-0 flex-1"><div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"><div><h3 className="text-lg font-semibold sm:text-xl">{portfolio(`${project.key}.title`)}</h3><p className="text-base-content/60 mt-1.5 text-sm leading-6">{portfolio(`${project.key}.description`)}</p></div>{project.link && <a href={project.link} target="_blank" rel="noreferrer" className="text-primary inline-flex shrink-0 items-center gap-2 text-sm font-semibold hover:opacity-75">{home('visitProject')}<ArrowTopRightOnSquareIcon className="h-4 w-4"/></a>}</div><span className="bg-base-200 text-base-content/70 mt-3 inline-flex rounded-full px-3 py-1.5 text-xs font-medium sm:text-sm">{portfolio(`${project.key}.tech`)}</span></div></article>)}
    </div>
    <div className="mt-6 flex justify-center"><button type="button" onClick={() => setShowAll((v) => !v)} aria-controls="projects-list" aria-expanded={showAll} className="btn btn-ghost text-primary rounded-xl px-5 font-semibold">{showAll ? home('showLess') : home('showAll', {count: projects.length})}</button></div>
  </div></section>;
}
