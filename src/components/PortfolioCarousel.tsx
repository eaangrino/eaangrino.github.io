import type { ReactNode } from 'react';
import Button from './Button';

interface PortfolioItem {
	id: number;
	title: string;
	description: string;
	image: string;
	demoUrl?: string;
	githubUrl?: string;
}

interface PortfolioCarouselProps {
	items: PortfolioItem[];
	currentIndex: number;
	children?: ReactNode;
}

export default function PortfolioCarousel({
	items,
	currentIndex,
}: PortfolioCarouselProps) {
	const currentItem = items[currentIndex];

	return (
		<div className="bg-base-100 relative overflow-hidden rounded-xl shadow-lg">
			<div className="grid gap-0 lg:grid-cols-2">
				{/* Image Section */}
				<div className="relative h-64 overflow-hidden lg:h-96">
					{/* Placeholder for image */}
					<div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-400 to-blue-600">
						<div className="text-center text-white">
							<svg
								className="mx-auto mb-4 h-16 w-16 opacity-50"
								fill="currentColor"
								viewBox="0 0 24 24">
								<path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
							</svg>
							<p className="text-sm opacity-75">Project Image</p>
						</div>
					</div>

					{/* Overlay with purple glow effect */}
					<div className="absolute inset-0 bg-purple-500/20 mix-blend-multiply"></div>
				</div>

				{/* Content Section */}
				<div className="flex flex-col justify-center p-8 lg:p-12">
					<h3 className="text-base-content mb-4 text-3xl font-bold">
						{currentItem.title}
					</h3>

					<p className="text-base-content/70 mb-8 leading-relaxed">
						{currentItem.description}
					</p>

					{/* Action Buttons */}
					<div className="flex flex-wrap gap-4">
						<Button
							href={currentItem.demoUrl}
							variant="primary"
							icon={
								<svg
									className="h-4 w-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/>
								</svg>
							}>
							Demo
						</Button>

						{currentItem.githubUrl && (
							<Button
								href={currentItem.githubUrl}
								variant="outline"
								icon={
									<svg
										className="h-4 w-4"
										fill="currentColor"
										viewBox="0 0 24 24">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
									</svg>
								}>
								Code
							</Button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
