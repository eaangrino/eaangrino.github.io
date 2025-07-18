import { useState } from 'react';
import SectionHeader from './SectionHeader';
import PortfolioCarousel from './PortfolioCarousel';
import CarouselNavigation from './CarouselNavigation';
import PaginationDots from './PaginationDots';

interface PortfolioItem {
	id: number;
	title: string;
	description: string;
	image: string;
	demoUrl?: string;
	githubUrl?: string;
}

export default function PortfolioSection() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const portfolioItems: PortfolioItem[] = [
		{
			id: 1,
			title: 'Landing Page - Artes Lafaux',
			description:
				'A landing page for a company that sells furniture and interior design services.',
			image: '/portfolio/modern-website.jpg',
			demoUrl: 'https://arteslafaux.github.io',
			githubUrl:
				'https://github.com/arteslafaux/arteslafaux.github.io/tree/prod',
		},
		{
			id: 2,
			title: 'E-commerce Platform',
			description:
				'Full-stack e-commerce solution with payment integration and admin dashboard.',
			image: '/portfolio/ecommerce.jpg',
			demoUrl: 'https://demo.com',
			githubUrl: 'https://github.com',
		},
		{
			id: 3,
			title: 'Mobile App',
			description:
				'Cross-platform mobile application with real-time features and offline support.',
			image: '/portfolio/mobile-app.jpg',
			demoUrl: 'https://demo.com',
			githubUrl: 'https://github.com',
		},
	];

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
	};

	const prevSlide = () => {
		setCurrentIndex(
			(prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length,
		);
	};

	const goToSlide = (index: number) => {
		setCurrentIndex(index);
	};

	return (
		<section id="portfolio" className="bg-base-200 px-4 py-28">
			<div className="container mx-auto max-w-6xl">
				<SectionHeader title="Portfolio" subtitle="Most recent work" />

				{/* Carousel Container with External Navigation */}
				<div className="relative flex items-center gap-4">
					{/* Left Navigation Button */}
					<div className="hidden lg:block">
						<button
							onClick={prevSlide}
							disabled={currentIndex === 0}
							className="bg-base-100/90 hover:bg-base-100 cursor-pointer rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 disabled:cursor-not-allowed disabled:opacity-50"
							aria-label="Previous slide">
							<svg
								className="text-base-content h-6 w-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M15 19l-7-7 7-7"
								/>
							</svg>
						</button>
					</div>

					{/* Carousel Content */}
					<div className="relative flex-1">
						{/* Mobile Navigation - Inside carousel for mobile */}
						<div className="lg:hidden">
							<CarouselNavigation
								onPrevious={prevSlide}
								onNext={nextSlide}
								hasPrevious={currentIndex > 0}
								hasNext={currentIndex < portfolioItems.length - 1}
							/>
						</div>

						<PortfolioCarousel
							items={portfolioItems}
							currentIndex={currentIndex}
						/>
					</div>

					{/* Right Navigation Button */}
					<div className="hidden lg:block">
						<button
							onClick={nextSlide}
							disabled={currentIndex === portfolioItems.length - 1}
							className="bg-base-100/90 hover:bg-base-100 cursor-pointer rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 disabled:cursor-not-allowed disabled:opacity-50"
							aria-label="Next slide">
							<svg
								className="text-base-content h-6 w-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</button>
					</div>
				</div>

				{/* Pagination Dots */}
				<PaginationDots
					totalSlides={portfolioItems.length}
					currentIndex={currentIndex}
					onDotClick={goToSlide}
					className="mt-8"
				/>
			</div>
		</section>
	);
}
