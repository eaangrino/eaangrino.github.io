import { useTranslation } from 'react-i18next';
import SectionHeader from './SectionHeader';
import ServiceCard from './ServiceCard';

interface Service {
	id: number;
	title: string;
	icon: React.ReactNode;
	description?: string;
}

export default function ServicesSection() {
	const { t } = useTranslation('services');
	const services: Service[] = [
		// {
		// 	id: 1,
		// 	title: 'uiUxDesigner',
		// 	icon: (
		// 		<svg
		// 			className="h-8 w-8"
		// 			fill="none"
		// 			stroke="currentColor"
		// 			viewBox="0 0 24 24">
		// 			<path
		// 				strokeLinecap="round"
		// 				strokeLinejoin="round"
		// 				strokeWidth={2}
		// 				d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
		// 			/>
		// 		</svg>
		// 	),
		// },
		{
			id: 2,
			title: 'frontendDeveloper',
			icon: (
				<svg
					className="h-8 w-8"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
					/>
				</svg>
			),
		},
		{
			id: 3,
			title: 'backendDeveloper',
			icon: (
				<svg
					className="h-8 w-8"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
					/>
				</svg>
			),
		},
		// {
		// 	id: 4,
		// 	title: 'Branding Designer',
		// 	icon: (
		// 		<svg
		// 			className="h-8 w-8"
		// 			fill="none"
		// 			stroke="currentColor"
		// 			viewBox="0 0 24 24">
		// 			<path
		// 				strokeLinecap="round"
		// 				strokeLinejoin="round"
		// 				strokeWidth={2}
		// 				d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
		// 			/>
		// 		</svg>
		// 	),
		// },
	];

	return (
		<section id="services" className="bg-base-100 px-4 py-28">
			<div className="container mx-auto max-w-6xl">
				<SectionHeader title={t('title')} subtitle={t('subtitle')} />

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{services.map((service) => (
						<ServiceCard
							key={service.id}
							title={t(`services.${service.title}`)}
							icon={service.icon}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
