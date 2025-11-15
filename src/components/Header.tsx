import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme';
import LanguageSelector from './LanguageSelector';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Header() {
	const { isDarkMode, toggleTheme } = useTheme();
	const { t } = useTranslation('header');
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const isPortfolio = location.pathname.startsWith('/portfolio');

	const navItems = [
		{ name: t('navigation.home'), sectionId: 'home', link: '/' },
		{ name: t('navigation.about'), sectionId: 'about' },
		{ name: t('navigation.skills'), sectionId: 'skills' },
		// { name: t('navigation.services'), sectionId: 'services' },
		{ name: t('navigation.portfolio'), link: 'portfolio' },
		{ name: t('navigation.contact'), sectionId: 'contact' },
	];

	const filteredItems = isPortfolio
		? navItems.filter((i) => i.link === '/' || i.link === 'portfolio')
		: navItems;

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
		<header className="navbar bg-base-100/65 border-base-300 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-sm">
			<div className="container mx-auto px-4">
				<div className="flex w-full items-center justify-between py-3">
					{/* Logo */}
					<div className="flex flex-row gap-6">
						<svg
							className="h-10 w-10"
							viewBox="0 0 700 700"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								opacity="0.9"
								d="M319.5 497.5V618L244.5 558V452L319.5 497.5ZM454.75 558L379.75 618V497.5L454.75 452V558ZM215.5 468V558L170 513V437.5L215.5 468ZM529.25 513L483.75 558V468L529.25 437.5V513ZM408.699 81L484.66 218.037L409.25 259.5V333.5L467.75 364L524.758 314.355L573.536 379.214L543.75 409H394.75L349.5 484L304.5 409H155.5L125.714 379.214L174.492 314.355L231.5 364L290 333.5V259.5L154.5 185L111.5 215.5V259.5L142.709 286.678L95.5 349L36 289.5L154.938 81H408.699ZM663.25 289.5L603.75 349L556.541 286.678L587.75 259.5V215.5L544.75 185L524.093 196.356L460.149 81H544.312L663.25 289.5Z"
								fill="white"
							/>
						</svg>
						<button
							onClick={() => scrollToSection('home')}
							className="text-base-content hover:text-primary cursor-pointer text-xl font-bold transition-colors md:text-2xl">
							{t('logo')}
						</button>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden items-center space-x-6 md:flex lg:space-x-8">
						{filteredItems.map((item) => (
							<button
								key={item.name}
								onClick={() => {
									if (isPortfolio) {
										// En /portfolio SIEMPRE navega con link
										navigate(item.link === '/' ? '/' : `/${item.link}`);
									} else {
										// En / usa scroll cuando tenga sectionId
										if (item.sectionId) scrollToSection(item.sectionId);
										else if (item.link) navigate(`/${item.link}`);
									}
								}}
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
						{/* Language Selector */}
						<LanguageSelector />

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
							{filteredItems.map((item) => (
								<button
									key={item.name}
									onClick={() => {
										if (isPortfolio) {
											// En /portfolio SIEMPRE usar navigate
											navigate(item.link === '/' ? '/' : `/${item.link}`);
										} else {
											// En la raíz, scroll si existe sectionId
											if (item.sectionId) {
												scrollToSection(item.sectionId);
											} else if (item.link) {
												navigate(`/${item.link}`);
											}
										}
										setIsMobileMenuOpen(false);
									}}
									className="text-base-content/70 hover:text-primary hover:bg-base-200 cursor-pointer rounded-lg px-4 py-2 text-left transition-colors">
									{item.name}
								</button>
							))}

							{/* Mobile Language Selector */}
							<div className="border-base-300 border-t pt-4">
								<div className="flex items-center justify-between">
									<span className="text-base-content/70 text-sm font-medium">
										Language / Idioma
									</span>
									<LanguageSelector />
								</div>
							</div>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}
