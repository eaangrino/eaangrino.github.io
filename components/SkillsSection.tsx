'use client';

import {useTranslations} from 'next-intl';
import {useState, type ReactNode} from 'react';
import {primarySkills, toolSkills, type Skill} from '@/data/skills';
import DetailsModal from './DetailsModal';
import {useTheme} from './useTheme';

type DetailsKind = 'node' | 'aws';

type SkillGroupProps = {
  title: string;
  subtitle: string;
  icon: ReactNode;
  skills: Skill[];
  dark: boolean;
  onDetails: (kind: DetailsKind) => void;
};

function PrimaryGroupIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09l2.847.813-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.455L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.455L18 2.25l.259 1.036a3.375 3.375 0 0 0 2.455 2.455L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423L16.5 15.75l.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
      />
    </svg>
  );
}

function ToolsGroupIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function SkillGrid({
  skills,
  onDetails,
  dark,
}: {
  skills: Skill[];
  onDetails: (kind: DetailsKind) => void;
  dark: boolean;
}) {
  return (
    <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
      {skills.map((skill) => {
        const src = dark && skill.iconUrlAlt ? skill.iconUrlAlt : skill.iconUrl;
        const imageClasses = `h-12 w-12 object-contain ${
          skill.isBlack && dark ? 'brightness-0 invert' : ''
        }`;
        const card = (
          <figure
            className={`bg-base-200/65 flex min-h-[96px] flex-col items-center justify-center gap-2.5 rounded-xl border px-3 py-3.5 text-center transition-all ${
              skill.details
                ? 'border-primary ring-primary/30 hover:bg-base-200/90 ring-1'
                : 'border-base-300/70'
            }`}
          >
            <div className="flex h-11 w-11 items-center justify-center">
              {/* Mixed-origin, tiny lazy-loaded logos do not benefit from Next image optimization. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`${skill.name} logo`}
                loading="lazy"
                decoding="async"
                className={imageClasses}
              />
            </div>
            <figcaption className="text-base-content text-center text-[0.8rem] leading-tight font-semibold">
              {skill.name}
            </figcaption>
          </figure>
        );

        if (!skill.details) {
          return <div key={skill.name}>{card}</div>;
        }

        return (
          <button
            type="button"
            key={skill.name}
            onClick={() => onDetails(skill.details!)}
            aria-haspopup="dialog"
            className="focus-visible:outline-primary rounded-xl text-left focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {card}
          </button>
        );
      })}
    </div>
  );
}

function SkillGroup({title, subtitle, icon, skills, dark, onDetails}: SkillGroupProps) {
  return (
    <section className="border-base-300/70 bg-base-100/90 group rounded-[1.6rem] border p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1 dark:shadow-[0_18px_50px_rgba(255,255,255,0.08)]">
      <div className="mb-6 flex items-center rounded-2xl transition-colors duration-300">
        <div className="bg-primary/12 text-primary mr-3 flex h-11 w-11 items-center justify-center rounded-xl">
          <div className="text-primary">{icon}</div>
        </div>
        <div>
          <h3 className="text-base-content text-xl font-semibold">{title}</h3>
          <p className="text-base-content/60 text-sm">{subtitle}</p>
        </div>
      </div>

      <SkillGrid skills={skills} onDetails={onDetails} dark={dark} />
    </section>
  );
}

export default function SkillsSection() {
  const t = useTranslations('skills');
  const {isDarkMode} = useTheme();
  const [modal, setModal] = useState<DetailsKind | null>(null);

  const groups = [
    {
      title: t('categories.primary'),
      icon: <PrimaryGroupIcon />,
      skills: primarySkills,
    },
    {
      title: t('categories.tools'),
      icon: <ToolsGroupIcon />,
      skills: toolSkills,
    },
  ];

  return (
    <>
      <section
        id="skills"
        className="from-base-100 via-base-200/35 to-base-100 bg-gradient-to-b px-4 pt-28 pb-16 md:px-8 md:pt-36 md:pb-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl md:mb-16">
            <h2 className="text-base-content text-4xl font-semibold tracking-tight sm:text-5xl">
              {t('title')}
            </h2>
            <p className="text-base-content/70 mt-2 text-base leading-7 sm:text-lg">
              {t('subtitle')}
            </p>
          </div>

          <div className="grid gap-4">
            {groups.map((group) => (
              <SkillGroup
                key={group.title}
                title={group.title}
                subtitle={t('cardSubtitle')}
                icon={group.icon}
                skills={group.skills}
                dark={isDarkMode}
                onDetails={setModal}
              />
            ))}
          </div>
        </div>
      </section>

      {modal && <DetailsModal kind={modal} open onClose={() => setModal(null)} />}
    </>
  );
}
