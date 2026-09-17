import {
	DocumentArrowDownIcon,
	PlayIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRotatingText } from '../hooks/useRotatingText';

interface HeroSectionProps {
	name?: string;
	videoId?: string;
	posterSrc?: string;
}

export default function HeroSection({
	name = 'Edgar Angrino',
	videoId,
	posterSrc = '/portrait_hero.png',
}: HeroSectionProps) {
	const { t } = useTranslation(['hero', 'about']);
	const [isPlaying, setIsPlaying] = useState(false);

	// Configuration for rotating text
	const TEXT_DURATION = 6000; // 6 seconds per text

	// Get all description texts from translations
	const descriptionTexts = [
		t('description.first'),
		t('description.second'),
		t('description.third'),
		t('description.fourth'),
		t('description.fifth'),
		t('description.sixth'),
		t('description.seventh'),
	];

	const { currentText, isVisible } = useRotatingText({
		texts: descriptionTexts,
		duration: TEXT_DURATION,
	});

	const normalizedVideoId = videoId?.trim();
	const youtubeEmbedUrl = normalizedVideoId
		? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(normalizedVideoId)}?autoplay=1&rel=0`
		: null;

	return (
		<section id="home" className="px-4 pt-28 pb-10 md:px-8 md:pt-36 md:pb-14">
			<div className="mx-auto max-w-6xl">
				<div className="border-base-300/60 bg-base-300 relative isolate min-h-[560px] overflow-hidden rounded-3xl border shadow-[0_24px_80px_rgba(15,23,42,0.18)] sm:min-h-[580px] lg:aspect-video lg:min-h-0">
					{isPlaying && youtubeEmbedUrl ? (
						<div className="absolute inset-0 bg-black">
							<iframe
								src={youtubeEmbedUrl}
								title={t('videoTitle')}
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
								className="h-full w-full border-0"
							/>

							<button
								type="button"
								onClick={() => setIsPlaying(false)}
								aria-label={t('closeVideo')}
								className="btn btn-circle btn-sm absolute top-4 right-4 z-10 border-white/20 bg-black/60 text-white shadow-lg backdrop-blur transition-colors hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
								<XMarkIcon className="h-5 w-5" aria-hidden="true" />
							</button>
						</div>
					) : (
						<>
							<img
								src={posterSrc}
								alt=""
								aria-hidden="true"
								width={1672}
								height={941}
								loading="eager"
								fetchPriority="high"
								decoding="async"
								className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-[64%_center] lg:object-center"
							/>

							<div
								aria-hidden="true"
								className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/20"
							/>
							<div
								aria-hidden="true"
								className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20 md:hidden"
							/>

							<div className="relative z-10 flex min-h-[560px] items-end p-6 sm:min-h-[580px] sm:p-10 md:items-center md:p-12 lg:min-h-full lg:p-14">
								<div className="max-w-2xl text-left text-white">
									<p className="mb-1 text-xl font-medium tracking-tight text-white/80 sm:text-2xl">
										{t('greeting')}
									</p>

									<h1 className="mb-4 text-4xl font-semibold tracking-tight text-primary sm:text-5xl lg:text-[3.5rem]">
										{name}
									</h1>

									<h2 className="mb-5 text-lg text-white/80 sm:text-xl md:text-2xl lg:text-3xl">
										{t('role')}
									</h2>

									<p
										className={`min-h-16 max-w-xl text-sm leading-relaxed text-white/70 transition-opacity duration-300 motion-reduce:transition-none sm:text-base md:min-h-20 md:text-lg ${
											isVisible ? 'opacity-100' : 'opacity-0'
										}`}>
										{currentText}
									</p>

									<div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
										{youtubeEmbedUrl && (
											<button
												type="button"
												onClick={() => setIsPlaying(true)}
												className="btn btn-primary btn-lg gap-2 rounded-xl px-6 shadow-lg transition-transform motion-reduce:transition-none hover:-translate-y-0.5 motion-reduce:hover:translate-y-0">
												<PlayIcon className="h-5 w-5" aria-hidden="true" />
												{t('playVideo')}
											</button>
										)}

										<a
											href="https://drive.google.com/file/d/1q8YK4sP0qsJVj7IhrdUdxWw8VddTOFmG/view?usp=sharing"
											target="_blank"
											rel="noopener noreferrer"
											className={`btn btn-lg gap-2 rounded-xl px-6 shadow-lg transition-transform motion-reduce:transition-none hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 ${
												youtubeEmbedUrl
													? 'border-white/30 bg-black/25 text-white hover:border-white/50 hover:bg-black/40'
													: 'btn-primary'
											}`}>
											<DocumentArrowDownIcon className="h-5 w-5" aria-hidden="true" />
											{t('about:downloadCV')}
										</a>
									</div>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</section>
	);
}
