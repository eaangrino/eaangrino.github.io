import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface Language {
	code: string;
	name: string;
	flag: string;
	flagSvg: React.ReactElement;
}

// Custom hook to detect if device is mobile
const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkIsMobile = () => {
			setIsMobile(window.innerWidth < 768); // md breakpoint
		};

		checkIsMobile();
		window.addEventListener('resize', checkIsMobile);

		return () => window.removeEventListener('resize', checkIsMobile);
	}, []);

	return isMobile;
};

const languages: Language[] = [
	{
		code: 'en',
		name: 'English',
		flag: '🇺🇸',
		flagSvg: (
			<svg viewBox="0 0 640 480" className="h-4 w-5 rounded-sm">
				<path fill="#B22234" d="M0 0h640v480H0z" />
				<path
					fill="#FFF"
					d="M0 0h640v37H0zM0 74h640v37H0zM0 148h640v37H0zM0 222h640v37H0zM0 296h640v37H0zM0 370h640v37H0zM0 444h640v37H0z"
				/>
				<path fill="#3C3B6E" d="M0 0h320v259H0z" />
				<g fill="#FFF">
					<g id="s">
						<g id="t">
							<g id="u">
								<g id="v">
									<g id="w">
										<path
											id="x"
											d="M24 12l2.163 6.657h7.002l-5.666 4.117 2.163 6.657L24 25.314l-5.662-4.117 2.163-6.657-5.666-4.117h7.002z"
										/>
										<use href="#x" y="24" />
									</g>
									<use href="#w" y="48" />
								</g>
								<use href="#v" y="96" />
							</g>
							<use href="#u" y="192" />
						</g>
						<use href="#t" x="48" />
					</g>
					<use href="#s" x="96" />
					<use href="#s" x="192" />
					<use href="#t" x="240" />
				</g>
			</svg>
		),
	},
	{
		code: 'es',
		name: 'Español',
		flag: '🇨🇴',
		flagSvg: (
			<svg viewBox="0 0 640 480" className="h-4 w-5 rounded-sm">
				<path fill="#FCD116" d="M0 0h640v240H0z" />
				<path fill="#003893" d="M0 240h640v120H0z" />
				<path fill="#CE1126" d="M0 360h640v120H0z" />
			</svg>
		),
	},
];

export default function LanguageSelector() {
	const { i18n, t } = useTranslation('header');
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const isMobile = useIsMobile();

	const resolvedLanguageCode = i18n.language?.toLowerCase().startsWith('en')
		? 'en'
		: 'es';

	const currentLanguage =
		languages.find((lang) => lang.code === resolvedLanguageCode) || languages[0];

	const changeLanguage = (languageCode: string) => {
		i18n.changeLanguage(languageCode);
		setIsOpen(false);
	};

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div className="relative" ref={dropdownRef}>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="btn btn-sm rounded-xl border-base-300/80 bg-base-100/70 px-2.5 shadow-sm hover:bg-base-200/85 md:px-3"
				aria-label={t('languageSelector')}>
				<span className="text-base leading-none">
					{isMobile ? currentLanguage.flag : currentLanguage.flagSvg}
				</span>
				<span className="text-[0.72rem] font-semibold tracking-[0.03em] sm:text-xs">
					{currentLanguage.code.toUpperCase()}
				</span>
				<svg
					className="h-3.5 w-3.5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</button>

			{isOpen && (
				<div className="bg-base-100/95 ring-base-300 absolute top-full right-0 z-50 mt-2 min-w-[150px] rounded-xl shadow-lg ring-1 backdrop-blur-md">
					<div className="py-1">
						{languages.map((language) => (
							<button
								key={language.code}
								onClick={() => changeLanguage(language.code)}
								className={`hover:bg-base-200 flex w-full items-center space-x-3 px-4 py-2 text-sm transition-colors ${
									i18n.language === language.code
										? 'bg-primary/10 text-primary'
										: 'text-base-content'
								}`}>
								<span className="text-base">
									{isMobile ? language.flag : language.flagSvg}
								</span>
								<span className="font-medium">{language.name}</span>
								{i18n.language === language.code && (
									<svg
										className="text-primary ml-auto h-4 w-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
								)}
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
