import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme';
import LanguageSelector from './LanguageSelector';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
	const { isDarkMode, toggleTheme } = useTheme();
	const { t } = useTranslation('header');
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	const navItems = [
		{ name: t('navigation.personalWebsite'), link: '/' },
		{ name: t('navigation.skills'), link: '/skills' },
		{ name: t('navigation.about'), link: '/about' },
	];

	const handleNavigation = (path: string) => {
		navigate(path);
		setIsMobileMenuOpen(false);
	};

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<header className="border-base-300/60 bg-base-100/80 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-xl">
			<div className="mx-auto max-w-6xl px-4 md:px-8">
				<div className="flex w-full items-center justify-between py-3">
					<div className="sm:hidden">
						<button
							onClick={toggleMobileMenu}
							className="btn btn-ghost btn-circle btn-sm"
							aria-label={t('toggleMenu')}>
							{isMobileMenuOpen ? (
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
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
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
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							)}
						</button>
					</div>

					<nav className="bg-base-200/80 hidden items-center rounded-full p-0.5 sm:flex">
						{navItems.map((item) => (
							<button
								key={item.name}
								onClick={() => handleNavigation(item.link)}
								className={`cursor-pointer rounded-full px-3 py-1.5 text-[0.88rem] font-medium transition-colors lg:text-sm ${
									location.pathname === item.link
										? 'bg-base-100 text-base-content shadow-sm'
										: 'text-base-content/65 hover:text-base-content'
								}`}>
								{item.name}
							</button>
						))}
					</nav>

					<div className="flex items-center gap-1.5 md:gap-2">
						<div className="relative">
							<div className="bg-primary/20 absolute inset-0 animate-ping rounded-full"></div>
							<button
								onClick={toggleTheme}
								className="btn btn-ghost btn-circle btn-sm relative z-10"
								aria-label={t('toggleTheme')}>
								{isDarkMode ? (
									<svg
										className="h-4 w-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
										/>
									</svg>
								) : (
									<svg
										className="h-4 w-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
										/>
									</svg>
								)}
							</button>
						</div>
						<LanguageSelector />
					</div>
				</div>

				{isMobileMenuOpen && (
					<div className="border-base-300/60 border-t py-3 sm:hidden">
						<nav className="flex flex-col space-y-3">
							{navItems.map((item) => (
								<button
									key={item.name}
									onClick={() => handleNavigation(item.link)}
									className={`cursor-pointer rounded-lg px-3 py-2 text-left text-sm transition-colors ${
										location.pathname === item.link
											? 'bg-base-200 text-base-content'
											: 'text-base-content/70 hover:bg-base-200 hover:text-base-content'
									}`}>
									{item.name}
								</button>
							))}
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}
