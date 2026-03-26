import { useTranslation } from 'react-i18next';
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
			className="flex items-start justify-center px-4 pt-28 pb-10 md:px-8 md:pt-36 md:pb-14">
			<div className="mx-auto max-w-4xl">
				<div className="text-center lg:text-left">
					<p className="text-primary mb-3 text-sm font-semibold tracking-[0.28em] uppercase">
						{t('eyebrow')}
					</p>
					<h1 className="text-base-content mb-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
						{t('greeting')} <span className="text-primary">{name}</span>
					</h1>

					<h2 className="text-base-content/70 mb-5 text-lg sm:text-xl md:text-2xl lg:text-3xl">
						{t('role')}
					</h2>

					<p
						className={`text-base-content/60 mx-auto min-h-16 max-w-2xl text-sm leading-relaxed transition-opacity duration-300 sm:text-base md:min-h-20 md:text-lg lg:mx-0 ${
							isVisible ? 'opacity-100' : 'opacity-0'
						}`}>
						{currentText}
					</p>
				</div>
			</div>
		</section>
	);
}
