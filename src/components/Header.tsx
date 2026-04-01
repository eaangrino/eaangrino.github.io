import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import LanguageSelector from './LanguageSelector';

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

	useEffect(() => {
		setIsMobileMenuOpen(false);
	}, [location.pathname]);

	return (
		<header className="fixed top-0 right-0 left-0 z-50">
			<div className="mx-auto max-w-6xl px-4 pt-4 md:px-8">
				<div className="border-base-300/60 bg-base-100/78 rounded-2xl border backdrop-blur-xl">
					<div className="flex w-full items-center justify-between py-3 pr-2 pl-3">
						<div className="flex min-w-0 items-center gap-2">
							<button
								onClick={() => setIsMobileMenuOpen((prev) => !prev)}
								className="btn btn-ghost btn-circle btn-sm md:hidden"
								aria-label={t('toggleMenu')}>
							{isMobileMenuOpen ? (
								<svg
									className="h-5 w-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
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
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							)}
						</button>

						<nav className="bg-base-200/80 hidden items-center rounded-full p-0.5 md:flex">
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
					</div>

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
										viewBox="0 0 24 24">
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
										viewBox="0 0 24 24">
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
					<div className="border-base-300/60 border-t px-2 pb-3 md:hidden">
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
		</div>
		</header>
	);
}
