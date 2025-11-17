import { useState, useEffect } from 'react';

export default function ScrollIndicator() {
	const [isVisible, setIsVisible] = useState(true);
	const [isInHeroSection, setIsInHeroSection] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;
			const footerThreshold = 60; // Hide when 60px from bottom

			// Check if we're in the hero section
			const heroSection = document.getElementById('home');
			if (heroSection) {
				const heroRect = heroSection.getBoundingClientRect();
				const isInHero = heroRect.bottom > 0;
				setIsInHeroSection(isInHero);
			}

			// Hide indicator when near footer
			if (scrollPosition >= documentHeight - footerThreshold) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	if (!isVisible) return null;

	return (
		<div
			className={`fixed bottom-8 z-40 transform transition-all duration-500 ease-in-out ${
				isInHeroSection ? 'left-1/2 -translate-x-1/2' : 'right-8'
			}`}>
			<div className="flex flex-col items-center space-y-2 text-blue-600">
				{/* Chevron Down Icon - Mobile Only */}
				<svg
					className="h-6 w-6 animate-bounce md:hidden"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 9l-7 7-7-7"
					/>
				</svg>

				{/* Mouse Icon - Desktop Only */}
				<div className="hidden h-10 w-6 justify-center rounded-full border-2 border-current md:flex">
					<div className="mt-2 h-3 w-1 animate-bounce rounded-full bg-current"></div>
				</div>

				{/* Text - Desktop Only */}
				<span className="hidden text-sm font-medium md:block">Scroll down</span>

				{/* Arrow - Desktop Only */}
				<svg
					className="hidden h-4 w-4 animate-bounce md:block"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					/>
				</svg>
			</div>
		</div>
	);
}
