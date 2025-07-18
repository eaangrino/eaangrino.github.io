import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface Language {
	code: string;
	name: string;
	flag: string;
}

const languages: Language[] = [
	{
		code: 'en',
		name: 'English',
		flag: '🇺🇸',
	},
	{
		code: 'es',
		name: 'Español',
		flag: '🇪🇸',
	},
];

export default function LanguageSelector() {
	const { i18n, t } = useTranslation('header');
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	// const currentLanguage =
	// 	languages.find((lang) => lang.code === i18n.language) || languages[0];

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
			{/* Language Toggle Button */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="btn btn-ghost btn-circle btn-sm md:btn-md"
				aria-label={t('languageSelector')}>
				<div className="flex items-center space-x-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
						/>
					</svg>
				</div>
			</button>

			{/* Dropdown Menu */}
			{isOpen && (
				<div className="bg-base-100 ring-base-300 absolute top-full right-0 z-50 mt-2 min-w-[140px] rounded-lg shadow-lg ring-1">
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
								<span className="text-base">{language.flag}</span>
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
