import { useState } from 'react';
import SectionHeader from './SectionHeader';
import TabButton from './TabButton';
import TimelineItem from './TimelineItem';

interface QualificationItem {
	id: number;
	title: string;
	location: string;
	dates: string;
	description?: string;
	graduated?: boolean;
	work?: boolean;
}

interface QualificationTab {
	id: 'education' | 'work';
	label: string;
	icon: React.ReactNode;
	items: QualificationItem[];
}

export default function QualificationSection() {
	const [activeTab, setActiveTab] = useState<'education' | 'work'>('work');

	const qualificationTabs: QualificationTab[] = [
		{
			id: 'work',
			label: 'Work',
			icon: (
				<svg
					className="h-5 w-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
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
				},
			],
		},
		{
			id: 'education',
			label: 'Education',
			icon: (
				<svg
					className="h-5 w-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24">
					<path d="M12 14l9-5-9-5-9 5 9 5z" />
					<path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
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

	const activeTabData = qualificationTabs.find((tab) => tab.id === activeTab);

	return (
		<section className="bg-base-200 px-4 py-20">
			<div className="container mx-auto max-w-4xl">
				<SectionHeader title="Qualification" subtitle="My personal journey" />

				{/* Tabs */}
				<div className="mb-12 flex justify-center">
					<div className="bg-base-100 flex gap-2 rounded-lg p-2 shadow-md">
						{qualificationTabs.map((tab) => (
							<TabButton
								key={tab.id}
								id={tab.id}
								label={tab.label}
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
