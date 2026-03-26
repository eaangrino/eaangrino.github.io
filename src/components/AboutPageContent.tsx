import { useTranslation } from 'react-i18next';
import TimelineItem from './TimelineItem';

interface ExperienceItem {
	id: number;
	title: string;
	location: string;
	dates: string;
	graduated?: boolean;
	work?: boolean;
	isCurrentWork?: boolean;
}

export default function AboutPageContent() {
	const { t } = useTranslation(['about', 'experience']);

	const workItems: ExperienceItem[] = [
		{
			id: 1,
			title: 'Fullstack Developer',
			location: 'Applivio - Remote, Puerto Rico',
			dates: 'Sep 2020 - Present',
			work: true,
			isCurrentWork: true,
		},
		{
			id: 2,
			title: 'Soporte TI / Desarrollador Java',
			location: 'IP Total Software - Cali, Colombia',
			dates: 'Nov 2018 - Abr 2019',
			work: true,
		},
	];

	const educationItems: ExperienceItem[] = [
		{
			id: 1,
			title: 'Bootcamp de Inteligencia Artificial Intermedio',
			location: 'MinTIC (Virtual, Colombia)',
			dates: 'Dic 2024 - Ene 2025',
			graduated: true,
		},
		{
			id: 2,
			title: 'Tecnólogo en Análisis y Desarrollo de Sistemas de Información',
			location: 'SENA Salomia - Cali, Colombia',
			dates: '2017 - 2019',
			graduated: true,
		},
	];

	return (
		<div className="px-4 pt-28 pb-16 md:px-8 md:pt-36 md:pb-24">
			<div className="mx-auto max-w-6xl space-y-16">
				<section>
					<div className="mb-10 max-w-3xl">
						<p className="text-primary mb-3 text-sm font-semibold tracking-[0.28em] uppercase">
							{t('about:sections.eyebrow')}
						</p>
						<h1 className="text-base-content text-4xl font-semibold tracking-tight sm:text-5xl">
							{t('experience:title')}
						</h1>
						<p className="text-base-content/70 mt-4 text-base leading-7 sm:text-lg">
							{t('experience:subtitle')}
						</p>
					</div>

					<div className="grid gap-6 lg:grid-cols-2">
						<div className="border-base-300/70 bg-base-200/70 rounded-[2rem] border p-6 shadow-[0_14px_36px_rgba(15,23,42,0.08)] dark:shadow-[0_14px_36px_rgba(255,255,255,0.07)] sm:p-8">
							<h2 className="text-base-content mb-8 text-2xl font-semibold">
								{t('experience:tabs.work')}
							</h2>
							<div className="space-y-6">
								{workItems.map((item, index) => (
									<TimelineItem
										key={item.id}
										title={item.title}
										location={item.location}
										dates={item.dates}
										position={index % 2 === 0 ? 'left' : 'right'}
										work={item.work}
										isCurrentWork={item.isCurrentWork}
									/>
								))}
							</div>
						</div>

						<div className="border-base-300/70 bg-base-200/70 rounded-[2rem] border p-6 shadow-[0_14px_36px_rgba(15,23,42,0.08)] dark:shadow-[0_14px_36px_rgba(255,255,255,0.07)] sm:p-8">
							<h2 className="text-base-content mb-8 text-2xl font-semibold">
								{t('experience:tabs.education')}
							</h2>
							<div className="space-y-6">
								{educationItems.map((item, index) => (
									<TimelineItem
										key={item.id}
										title={item.title}
										location={item.location}
										dates={item.dates}
										position={index % 2 === 0 ? 'left' : 'right'}
										graduated={item.graduated}
									/>
								))}
							</div>
						</div>
					</div>
				</section>

				<section className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
					<div className="lg:sticky lg:top-28">
						<p className="text-primary mb-3 text-sm font-semibold tracking-[0.28em] uppercase">
							{t('about:sections.storyEyebrow')}
						</p>
						<h2 className="text-base-content text-3xl font-semibold tracking-tight sm:text-4xl">
							{t('about:title')}
						</h2>
						<p className="text-base-content/70 mt-4 text-base leading-7 sm:text-lg">
							{t('about:description')}
						</p>
					</div>

					<div className="border-base-300/70 bg-base-100 rounded-[2rem] border p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] dark:shadow-[0_18px_60px_rgba(255,255,255,0.08)] sm:p-8">
						<div className="space-y-5">
							<p className="text-base-content/80 text-base leading-8">
								{t('about:content.paragraph1')}
							</p>
							<p className="text-base-content/80 text-base leading-8">
								{t('about:content.paragraph2')}
							</p>
							<p className="text-base-content/80 text-base leading-8">
								{t('about:content.paragraph3')}
							</p>
							<p className="text-base-content/80 text-base leading-8">
								{t('about:content.paragraph4')}
							</p>
							<p className="text-base-content/80 text-base leading-8">
								{t('about:content.paragraph5')}
							</p>
							<p className="text-base-content/80 text-base leading-8">
								{t('about:content.paragraph6')}
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
