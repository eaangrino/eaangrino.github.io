import { useTranslation } from 'react-i18next';
import Button from './Button';
import StatsCard from './StatsCard';
import SectionHeader from './SectionHeader';

export default function AboutSection() {
	const { t } = useTranslation('about');

	// Calculate years and months of experience since September 20, 2020
	const calculateExperience = () => {
		const startDate = new Date('2020-09-20');
		const currentDate = new Date();

		let years = currentDate.getFullYear() - startDate.getFullYear();
		let months = currentDate.getMonth() - startDate.getMonth();

		// Adjust for negative months
		if (months < 0) {
			years--;
			months += 12;
		}

		return { years, months };
	};

	const { years } = calculateExperience();

	const stats = [
		{
			number: t('stats.experience.number', { years }),
			label: t('stats.experience.label'),
			sublabel: t('stats.experience.sublabel'),
		},
		// {
		// 	number: t('stats.projects.number'),
		// 	label: t('stats.projects.label'),
		// 	sublabel: t('stats.projects.sublabel'),
		// },
		{
			number: t('stats.companies.number'),
			label: t('stats.companies.label'),
			sublabel: t('stats.companies.sublabel'),
		},
	];

	return (
		<section
			id="about"
			className="bg-base-200 flex min-h-screen items-start px-4 pt-24 pb-14 md:items-center md:px-8 md:pt-28 md:pb-20">
			<div className="container mx-auto max-w-6xl">
				{/* Section Header */}
				<SectionHeader
					title={t('title')}
					// subtitle={t('subtitle')}
				/>

				<div className="grid items-center gap-8 md:gap-10 lg:grid-cols-1 lg:gap-12">
					<div className="text-center md:text-center">
						<p className="text-base-content/70 mb-6 text-base leading-relaxed md:text-lg">
							{t('description')}
						</p>

						<div className="bg-base-100 border-base-300 mb-8 rounded-2xl border p-6 text-left shadow-sm md:p-8">
							<p className="text-base-content/80 mb-4 text-base leading-relaxed md:text-lg">
								{t('content.paragraph1')}
							</p>
							<p className="text-base-content/80 mb-4 text-base leading-relaxed md:text-lg">
								{t('content.paragraph2')}
							</p>
							<p className="text-base-content/80 mb-4 text-base leading-relaxed md:text-lg">
								{t('content.paragraph3')}
							</p>
							<p className="text-base-content/80 mb-4 text-base leading-relaxed md:text-lg">
								{t('content.paragraph4')}
							</p>
							<p className="text-base-content/80 mb-4 text-base leading-relaxed md:text-lg">
								{t('content.paragraph5')}
							</p>
							<p className="text-base-content/80 text-base leading-relaxed md:text-lg">
								{t('content.paragraph6')}
							</p>
						</div>

						<div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
							{stats.map((stat, index) => (
								<StatsCard
									key={index}
									number={stat.number}
									label={stat.label}
									sublabel={stat.sublabel}
								/>
							))}
						</div>

						<Button
							variant="primary"
							size="lg"
							icon={
								<svg
									className="h-5 w-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
									/>
								</svg>
							}
							onClick={() => {
								// Aquí puedes implementar la lógica para descargar el CV
								console.log('Downloading CV...');
							}}>
							{t('downloadCV')}
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
