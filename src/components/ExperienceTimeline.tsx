import {
	AcademicCapIcon,
	BriefcaseIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface ExperienceTimelineEntry {
	id: string;
	title: string;
	location: string;
	dates: string;
	type: 'work' | 'education';
	isCurrentWork?: boolean;
}

interface ExperienceTimelineProps {
	items: ExperienceTimelineEntry[];
}

export default function ExperienceTimeline({ items }: ExperienceTimelineProps) {
	const { t } = useTranslation('experience');
	const scrollerRef = useRef<HTMLDivElement>(null);
	const itemRefs = useRef<Array<HTMLElement | null>>([]);
	const [activeIndex, setActiveIndex] = useState(0);

	const scrollToIndex = (index: number) => {
		const scroller = scrollerRef.current;
		const item = itemRefs.current[index];

		if (!scroller || !item) return;

		const behavior: ScrollBehavior = window.matchMedia?.(
			'(prefers-reduced-motion: reduce)',
		).matches
			? 'auto'
			: 'smooth';

		if (typeof scroller.scrollTo === 'function') {
			scroller.scrollTo({
				left: item.offsetLeft,
				behavior,
			});
		} else {
			scroller.scrollLeft = item.offsetLeft;
		}

		setActiveIndex(index);
	};

	const syncActiveIndex = () => {
		const scroller = scrollerRef.current;

		if (!scroller) return;

		let nearestIndex = activeIndex;
		let nearestDistance = Number.POSITIVE_INFINITY;

		itemRefs.current.forEach((item, index) => {
			if (!item) return;

			const distance = Math.abs(item.offsetLeft - scroller.scrollLeft);

			if (distance < nearestDistance) {
				nearestDistance = distance;
				nearestIndex = index;
			}
		});

		if (nearestIndex !== activeIndex) {
			setActiveIndex(nearestIndex);
		}
	};

	return (
		<div>
			<div className="mb-4 flex justify-end gap-2">
				<button
					type="button"
					onClick={() => scrollToIndex(activeIndex - 1)}
					disabled={activeIndex === 0}
					aria-label={t('timeline.previous')}
					className="btn btn-circle btn-sm border-base-300 bg-base-100 text-base-content shadow-sm disabled:opacity-35">
					<ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
				</button>
				<button
					type="button"
					onClick={() => scrollToIndex(activeIndex + 1)}
					disabled={activeIndex === items.length - 1}
					aria-label={t('timeline.next')}
					className="btn btn-circle btn-sm border-base-300 bg-base-100 text-base-content shadow-sm disabled:opacity-35">
					<ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
				</button>
			</div>

			<div
				ref={scrollerRef}
				role="region"
				aria-label={t('timeline.label')}
				tabIndex={0}
				onScroll={syncActiveIndex}
				className="timeline-scrollbar-hidden focus-visible:outline-primary snap-x snap-mandatory overflow-x-auto pt-8 pb-14 scroll-smooth focus-visible:rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:scroll-auto">
				<div className="relative flex w-max gap-5 px-10 sm:px-12">
					<div
						aria-hidden="true"
						className="bg-base-300 absolute top-6 right-0 left-0 h-px md:top-1/2"
					/>

					{items.map((item, index) => {
						const isWork = item.type === 'work';
						const desktopSide = index % 2 === 0 ? 'above' : 'below';
						const Icon = isWork ? BriefcaseIcon : AcademicCapIcon;

						return (
							<article
								key={item.id}
								ref={(element) => {
									itemRefs.current[index] = element;
								}}
								data-timeline-side={desktopSide}
								className="relative h-[270px] w-[82vw] max-w-[20rem] shrink-0 snap-start sm:w-80 md:h-[460px] md:w-[22rem]">
								<div
									aria-hidden="true"
									className={`absolute top-6 left-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-base-100 shadow-sm md:top-1/2 ${
										isWork ? 'bg-primary' : 'bg-accent'
									}`}
								/>

								<div
									aria-hidden="true"
									className={`absolute top-6 left-1/2 h-8 w-px -translate-x-1/2 md:hidden ${
										isWork ? 'bg-primary/60' : 'bg-accent/60'
									}`}
								/>

								<div
									aria-hidden="true"
									className={`absolute left-1/2 hidden h-8 w-px -translate-x-1/2 md:block ${
										desktopSide === 'above' ? 'bottom-1/2' : 'top-1/2'
									} ${isWork ? 'bg-primary/60' : 'bg-accent/60'}`}
								/>

								<div
									className={`border-base-300/70 bg-base-100/95 absolute top-14 right-0 left-0 rounded-[1.4rem] border p-5 shadow-[0_14px_36px_rgba(15,23,42,0.08)] dark:shadow-[0_14px_36px_rgba(255,255,255,0.06)] ${
										desktopSide === 'above'
											? 'md:top-auto md:bottom-[calc(50%+2rem)]'
											: 'md:top-[calc(50%+2rem)]'
									}`}>
									<div className="mb-4 flex flex-wrap items-center gap-2">
										<span
											className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
												isWork
													? 'bg-primary/10 text-primary'
													: 'bg-accent/10 text-accent'
											}`}>
											<Icon className="h-4 w-4" aria-hidden="true" />
											{t(isWork ? 'tabs.work' : 'tabs.education')}
										</span>

										{item.isCurrentWork && (
											<span className="badge badge-success badge-soft badge-sm">
												{t('currentWork')}
											</span>
										)}
									</div>

									<p className="text-base-content/55 mb-2 text-xs font-semibold tracking-[0.08em] uppercase">
										{item.dates}
									</p>
									<h3 className="text-base-content text-lg font-semibold leading-snug sm:text-xl">
										{item.title}
									</h3>
									<p className="text-base-content/65 mt-3 text-sm leading-6">
										{item.location}
									</p>
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</div>
	);
}
