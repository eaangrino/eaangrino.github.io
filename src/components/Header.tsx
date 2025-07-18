import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme';

export default function Header() {
	const { isDarkMode, toggleTheme } = useTheme();
	const { t } = useTranslation('header');
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const navItems = [
		{ name: t('navigation.home'), sectionId: 'home' },
		{ name: t('navigation.about'), sectionId: 'about' },
		{ name: t('navigation.skills'), sectionId: 'skills' },
		{ name: t('navigation.services'), sectionId: 'services' },
		{ name: t('navigation.portfolio'), sectionId: 'portfolio' },
		{ name: t('navigation.contact'), sectionId: 'contact' },
	];

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		// Close mobile menu after navigation
		setIsMobileMenuOpen(false);
	};

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<header className="navbar bg-base-100/95 border-base-300 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-sm">
			<div className="container mx-auto px-4">
				<div className="flex w-full items-center justify-between py-3">
					{/* Logo */}
					<button
						onClick={() => scrollToSection('home')}
						className="text-base-content hover:text-primary cursor-pointer text-xl font-bold transition-colors md:text-2xl">
						{t('logo')}
					</button>

					{/* Desktop Navigation */}
					<nav className="hidden items-center space-x-6 md:flex lg:space-x-8">
						{navItems.map((item) => (
							<button
								key={item.name}
								onClick={() => scrollToSection(item.sectionId)}
								className="text-base-content/70 hover:text-primary cursor-pointer text-sm transition-colors lg:text-base">
								{item.name}
							</button>
						))}
					</nav>

					{/* Right side controls */}
					<div className="flex items-center space-x-2">
						{/* Theme Toggle */}
						<div className="relative">
							{/* Animated background ring */}
							<div className="bg-primary/20 absolute inset-0 animate-ping rounded-full"></div>
							<button
								onClick={toggleTheme}
								className="btn btn-ghost btn-circle btn-sm md:btn-md relative z-10"
								aria-label={t('toggleTheme')}>
								{isDarkMode ? (
									// Sun icon for dark mode (to switch to light)
									<svg
										className="h-4 w-4 md:h-5 md:w-5"
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
									// Moon icon for light mode (to switch to dark)
									<svg
										className="h-4 w-4 md:h-5 md:w-5"
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

						{/* Mobile Menu Button */}
						<button
							onClick={toggleMobileMenu}
							className="btn btn-ghost btn-circle btn-sm md:hidden"
							aria-label={t('toggleMenu')}>
							{isMobileMenuOpen ? (
								// Close icon (X)
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
								// Hamburger icon
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
				</div>

				{/* Mobile Navigation Menu */}
				{isMobileMenuOpen && (
					<div className="border-base-300 border-t py-4 md:hidden">
						<nav className="flex flex-col space-y-4">
							{navItems.map((item) => (
								<button
									key={item.name}
									onClick={() => scrollToSection(item.sectionId)}
									className="text-base-content/70 hover:text-primary hover:bg-base-200 cursor-pointer rounded-lg px-4 py-2 text-left transition-colors">
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
