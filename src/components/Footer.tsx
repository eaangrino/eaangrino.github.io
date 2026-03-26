import { useTranslation } from 'react-i18next';

export default function Footer() {
	const { t } = useTranslation('footer');

	const socialLinks = [
		{
			name: 'LinkedIn',
			url: 'https://linkedin.com/in/eaangrino',
			icon: (
				<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
				</svg>
			),
		},
		{
			name: 'GitHub',
			url: 'https://github.com/eaangrino',
			icon: (
				<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
				</svg>
			),
		},
		{
			name: 'Instagram',
			url: 'https://instagram.com/eaangrino',
			icon: (
				<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 3.675A6.162 6.162 0 1 0 12 18a6.162 6.162 0 0 0 0-12.324zm6.406-1.683a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
				</svg>
			),
		},
		{
			name: 'Telegram',
			url: 'https://t.me/eaangrino',
			icon: (
				<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
				</svg>
			),
		},
		{
			name: 'Stackblitz',
			url: 'https://stackblitz.com/@eaangrino',
			icon: (
				<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M10.9923 13.8183H5L15.957 2L13.0077 10.1817H19L8.04304 22L10.9923 13.8183Z" />
				</svg>
			),
		},
	];

	return (
		<footer className="border-base-300/60 bg-base-100 border-t px-4 py-10 md:px-8 md:py-14">
			<aside className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 text-center">
				<svg
					className="text-base-content h-16 w-16 sm:h-20 sm:w-20"
					viewBox="0 0 700 700"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						opacity="0.9"
						d="M319.5 497.5V618L244.5 558V452L319.5 497.5ZM454.75 558L379.75 618V497.5L454.75 452V558ZM215.5 468V558L170 513V437.5L215.5 468ZM529.25 513L483.75 558V468L529.25 437.5V513ZM408.699 81L484.66 218.037L409.25 259.5V333.5L467.75 364L524.758 314.355L573.536 379.214L543.75 409H394.75L349.5 484L304.5 409H155.5L125.714 379.214L174.492 314.355L231.5 364L290 333.5V259.5L154.5 185L111.5 215.5V259.5L142.709 286.678L95.5 349L36 289.5L154.938 81H408.699ZM663.25 289.5L603.75 349L556.541 286.678L587.75 259.5V215.5L544.75 185L524.093 196.356L460.149 81H544.312L663.25 289.5Z"
						fill="currentColor"
					/>
				</svg>

				<p className="text-base-content/70 max-w-xl text-sm leading-7 sm:text-base">
					{t('copyright')} {new Date().getFullYear()}
				</p>

				<div className="text-base-content/80 flex flex-col items-center gap-1 text-sm sm:text-base">
					<span className="font-medium">{t('contactMe')}</span>
					<a
						href="mailto:eaangrino@gmail.com"
						className="text-primary font-semibold transition-opacity hover:opacity-75">
						eaangrino@gmail.com
					</a>
				</div>

				<div className="flex flex-wrap justify-center gap-3 md:hidden">
					{socialLinks.map((link) => (
						<a
							key={link.name}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-circle btn-sm border-base-300 bg-base-100 text-base-content shadow-sm hover:bg-primary hover:text-primary-content"
							aria-label={link.name}
							title={link.name}>
							{link.icon}
						</a>
					))}
				</div>
			</aside>
		</footer>
	);
}
