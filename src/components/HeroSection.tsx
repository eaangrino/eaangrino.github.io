import { useTranslation } from 'react-i18next';
import Button from './Button';
import ProfileImage from './ProfileImage';
import { useRotatingText } from '../hooks/useRotatingText';

interface HeroSectionProps {
	name?: string;
}

export default function HeroSection({
	name = 'Edgar Angrino',
}: HeroSectionProps) {
	const { t } = useTranslation('hero');

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

	return (
		<section
			id="home"
			className="flex min-h-screen items-start justify-center px-4 pt-24 pb-12 md:items-center md:px-8 md:pt-24 md:pb-16">
			<div className="container mx-auto max-w-6xl">
				<div className="grid items-center gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12">
					{/* Content */}
					<div className="text-center md:text-center lg:text-left">
						<h1 className="text-base-content mb-4 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
							{t('greeting')} <span className="text-primary">{name}</span>
						</h1>

						<h2 className="text-base-content/70 mb-5 text-lg sm:text-xl md:text-2xl lg:text-3xl">
							{t('role')}
						</h2>

						<p
							className={`text-base-content/60 mx-auto min-h-16 max-w-lg text-sm leading-relaxed transition-opacity duration-300 sm:text-base md:mx-auto md:min-h-20 md:text-lg lg:mx-0 ${
								isVisible ? 'opacity-100' : 'opacity-0'
							}`}>
							{currentText}
						</p>

						<Button
							href="/contact"
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
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							}>
							{t('contactButton')}
						</Button>
					</div>

					{/* Profile Image */}
					<div className="order-first flex justify-center md:justify-center lg:order-last">
						<ProfileImage
							size="xl"
							rotationDirection="right"
							src="/1687745637419.jpeg"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
