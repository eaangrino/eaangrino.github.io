import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionHeader from './SectionHeader';
import TabButton from './TabButton';
import TimelineItem from './TimelineItem';

interface ExperienceItem {
	id: number;
	title: string;
	location: string;
	dates: string;
	description?: string;
	graduated?: boolean;
	work?: boolean;
}

interface ExperienceTab {
	id: 'education' | 'work';
	label: string;
	icon: React.ReactNode;
	items: ExperienceItem[];
}

export default function ExperienceSection() {
	const { t } = useTranslation('experience');
	const [activeTab, setActiveTab] = useState<'education' | 'work'>('work');

	const experienceTabs: ExperienceTab[] = [
		{
			id: 'work',
			label: 'Work',
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-5">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
					/>
				</svg>
			),
			items: [
				{
					id: 1,
					title: 'Fullstack Developer',
					location: 'Applivio - Remote, Puerto Rico',
					dates: 'Sep 2020 - Present',
					description:
						'Desarrollo de soluciones web a medida con React, Node.js y AWS. Mantenimiento, soporte y despliegue en producción.',
					work: true,
				},
				{
					id: 2,
					title: 'Soporte TI / Desarrollador Java',
					location: 'IP Total Software - Cali, Colombia',
					dates: 'Nov 2018 - Abr 2019',
					description:
						'Soporte a aplicaciones Java, manejo de Oracle SQL y administración de servidores Linux.',
					work: true,
					graduated: true,
				},
			],
		},
		{
			id: 'education',
			label: 'Education',
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-5">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
					/>
				</svg>
			),
			items: [
				{
					id: 1,
					title: 'Bootcamp de Inteligencia Artificial Intermedio',
					location: 'MinTIC (Virtual, Colombia)',
					dates: 'Dic 2024 - Ene 2025',
					description:
						'Entrenamiento práctico en fundamentos y aplicaciones de IA para desarrolladores de software.',
					graduated: true,
				},
				{
					id: 2,
					title:
						'Tecnólogo en Análisis y Desarrollo de Sistemas de Información',
					location: 'SENA Salomia - Cali, Colombia',
					dates: '2017 - 2019',
					graduated: true,
				},
				{
					id: 3,
					title: 'Curso de Prompt Engineering con ChatGPT',
					location: 'Platzi - Virtual',
					dates: '2023',
					description:
						'Diseño de prompts efectivos para mejorar la interacción con modelos de lenguaje.',
				},
				{
					id: 4,
					title: 'Curso de Diseño Web con Figma',
					location: 'Platzi - Virtual',
					dates: '2022',
					description:
						'Creación de interfaces modernas y componentes reutilizables con enfoque UX/UI.',
				},
				{
					id: 5,
					title: 'Curso de Fundamentos de TypeScript',
					location: 'Platzi - Virtual',
					dates: '2021',
					description:
						'Conceptos base de tipado estático, interfaces, tipos y estructuras avanzadas en TypeScript.',
				},
				{
					id: 6,
					title: 'Curso Definitivo de HTML y CSS',
					location: 'Platzi - Virtual',
					dates: '2021',
					description:
						'Fundamentos sólidos en maquetación web, buenas prácticas semánticas y diseño responsive.',
				},
				{
					id: 7,
					title: 'AWS Partner: Accreditation (Business)',
					location: 'AWS Partner Network - Virtual',
					dates: '2021',
					description:
						'Certificación orientada a comprender el valor de negocio de las soluciones AWS.',
				},
				{
					id: 8,
					title: 'AWS Partner: Accreditation (Technical)',
					location: 'AWS Partner Network - Virtual',
					dates: '2021',
					description:
						'Certificación técnica de fundamentos de AWS, buenas prácticas y servicios cloud principales.',
				},
			],
		},
	];

	const activeTabData = experienceTabs.find((tab) => tab.id === activeTab);

	return (
		<section className="bg-base-200 px-4 py-20">
			<div className="container mx-auto max-w-4xl">
				<SectionHeader title={t('title')} subtitle={t('subtitle')} />

				{/* Tabs */}
				<div className="mb-12 flex justify-center">
					<div className="bg-base-100 flex gap-2 rounded-lg p-2 shadow-md">
						{experienceTabs.map((tab) => (
							<TabButton
								key={tab.id}
								id={tab.id}
								label={t(`tabs.${tab.id}`)}
								icon={tab.icon}
								isActive={activeTab === tab.id}
								onClick={() => setActiveTab(tab.id)}
							/>
						))}
					</div>
				</div>

				{/* Timeline */}
				<div className="relative">
					{/* Vertical Line - Hidden on mobile */}
					<div className="bg-primary absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 transform md:block"></div>

					{/* Timeline Items */}
					<div className="space-y-8">
						{activeTabData?.items.map((item, index) => (
							<div key={item.id} className="relative">
								{/* Timeline Dot - Hidden on mobile */}
								<div className="border-base-100 bg-primary absolute left-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-4 shadow-md md:block"></div>

								{/* Content */}
								<TimelineItem
									title={item.title}
									location={item.location}
									dates={item.dates}
									position={index % 2 === 0 ? 'left' : 'right'}
									graduated={item.graduated}
									work={item.work}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
