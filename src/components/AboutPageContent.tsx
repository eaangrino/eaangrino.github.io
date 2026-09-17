import { useTranslation } from 'react-i18next';
import ExperienceTimeline, { type ExperienceTimelineEntry } from './ExperienceTimeline';

export default function AboutPageContent() {
	const { t } = useTranslation(['about', 'experience']);

	const aboutParagraphs = [
		t('about:content.paragraph1'),
		t('about:content.paragraph2'),
	];

	const timelineItems: ExperienceTimelineEntry[] = [
		{
			id: 'education-sena',
			title: 'Tecnólogo en Análisis y Desarrollo de Sistemas de Información',
			location: 'SENA Salomia - Cali, Colombia',
			dates: '2017 - 2019',
			type: 'education',
		},
		{
			id: 'work-ip-total',
			title: 'Soporte TI / Desarrollador Java',
			location: 'IP Total Software - Cali, Colombia',
			dates: 'Nov 2018 - Abr 2019',
			type: 'work',
		},
		{
			id: 'work-applivio',
			title: 'Fullstack Developer',
			location: 'Applivio - Remote, Puerto Rico',
			dates: 'Sep 2020 - Present',
			type: 'work',
			isCurrentWork: true,
		},
		{
			id: 'education-mintic',
			title: 'Bootcamp de Inteligencia Artificial Intermedio',
			location: 'MinTIC (Virtual, Colombia)',
			dates: 'Dic 2024 - Ene 2025',
			type: 'education',
		},
	];

	return (
		<div className="px-4 pt-28 pb-16 md:px-8 md:pt-36 md:pb-24">
			<div className="mx-auto max-w-6xl space-y-20 md:space-y-28">
				<section
					id="experience"
					className="scroll-mt-28 md:scroll-mt-32">
					<div className="mb-10 max-w-3xl">
						<p className="text-primary mb-3 text-sm font-semibold tracking-[0.28em] uppercase">
							{t('experience:eyebrow')}
						</p>
						<h2 className="text-base-content text-4xl font-semibold tracking-tight sm:text-5xl">
							{t('experience:title')}
						</h2>
						<p className="text-base-content/70 mt-4 text-base leading-7 sm:text-lg">
							{t('experience:subtitle')}
						</p>
					</div>

					<ExperienceTimeline items={timelineItems} />
				</section>

				<section
					id="about"
					className="border-base-300/60 scroll-mt-28 border-t pt-14 md:scroll-mt-32 md:pt-20">
					<div className="max-w-4xl">
						<p className="text-primary mb-3 text-sm font-semibold tracking-[0.28em] uppercase">
							{t('about:sections.eyebrow')}
						</p>
						<h2 className="text-base-content text-3xl font-semibold tracking-tight sm:text-4xl">
							{t('about:title')}
						</h2>
						<p className="text-base-content/70 mt-4 max-w-3xl text-base leading-7 sm:text-lg">
							{t('about:description')}
						</p>

						<div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-10">
							{aboutParagraphs.map((paragraph, index) => (
								<p
									key={index}
									className="border-primary/30 text-base-content/80 border-l-2 pl-5 text-base leading-8">
									{paragraph}
								</p>
							))}
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
