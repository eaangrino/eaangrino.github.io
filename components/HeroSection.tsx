'use client';

import {DocumentArrowDownIcon, PlayIcon, XMarkIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {useMemo, useState} from 'react';
import {useRotatingText} from './useRotatingText';

const HERO_IMAGE = '/portrait_hero_alt.png';
const HERO_VIDEO_ID = '';

export default function HeroSection() {
  const hero = useTranslations('hero');
  const about = useTranslations('about');
  const [playing, setPlaying] = useState(false);
  const texts = useMemo(() => ['first','second','third','fourth','fifth','sixth','seventh'].map((key) => hero(`description.${key}`)), [hero]);
  const {currentText, isVisible} = useRotatingText(texts);
  const videoId = HERO_VIDEO_ID.trim();
  const videoUrl = videoId ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0` : null;

  return (
    <section id="home" className="px-4 pt-28 pb-10 md:px-8 md:pt-36 md:pb-14">
      <div className="mx-auto max-w-6xl">
        <div className="border-base-300/60 bg-base-300 relative isolate min-h-[560px] overflow-hidden rounded-3xl border shadow-[0_24px_80px_rgba(15,23,42,0.18)] sm:min-h-[580px] lg:aspect-video lg:min-h-0">
          {playing && videoUrl ? <div className="absolute inset-0 bg-black"><iframe src={videoUrl} title={hero('videoTitle')} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="h-full w-full border-0"/><button type="button" onClick={() => setPlaying(false)} aria-label={hero('closeVideo')} className="btn btn-circle btn-sm absolute top-4 right-4 z-10 bg-black/60 text-white"><XMarkIcon className="h-5 w-5"/></button></div> : <>
            <Image src={HERO_IMAGE} alt="" aria-hidden="true" fill preload sizes="100vw" className="object-cover object-[62%_center] sm:object-[64%_center] lg:object-center" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/20" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20 md:hidden" />
            <div className="relative z-10 flex min-h-[560px] items-end p-6 sm:min-h-[580px] sm:p-10 md:items-center md:p-12 lg:min-h-full lg:p-14">
              <div className="max-w-2xl text-left text-white">
                <p className="mb-1 text-xl font-medium text-white/80 sm:text-2xl">{hero('greeting')}</p>
                <h1 className="text-primary mb-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.5rem]">Edgar Angrino</h1>
                <h2 className="mb-5 text-lg text-white/80 sm:text-xl md:text-2xl lg:text-3xl">{hero('role')}</h2>
                <p className={`min-h-16 max-w-xl text-sm leading-relaxed text-white/70 transition-opacity duration-300 sm:text-base md:min-h-20 md:text-lg ${isVisible ? 'opacity-100' : 'opacity-0'}`}>{currentText}</p>
                <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
                  {videoUrl && <button type="button" onClick={() => setPlaying(true)} className="btn btn-primary btn-lg gap-2 rounded-xl px-6 shadow-lg"><PlayIcon className="h-5 w-5"/>{hero('playVideo')}</button>}
                  <a href="https://drive.google.com/file/d/1q8YK4sP0qsJVj7IhrdUdxWw8VddTOFmG/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg gap-2 rounded-xl px-6 shadow-lg"><DocumentArrowDownIcon className="h-5 w-5"/>{about('downloadCV')}</a>
                </div>
              </div>
            </div>
          </>}
        </div>
      </div>
    </section>
  );
}
