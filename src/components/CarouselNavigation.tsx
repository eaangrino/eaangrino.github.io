interface CarouselNavigationProps {
	onPrevious: () => void;
	onNext: () => void;
	hasPrevious?: boolean;
	hasNext?: boolean;
	className?: string;
}

export default function CarouselNavigation({
	onPrevious,
	onNext,
	hasPrevious = true,
	hasNext = true,
	className = '',
}: CarouselNavigationProps) {
	return (
		<div
			className={`pointer-events-none absolute inset-y-0 right-0 left-0 z-10 flex items-center justify-between ${className}`}>
			{/* Previous Button */}
			<button
				onClick={onPrevious}
				disabled={!hasPrevious}
				className="bg-base-100/90 hover:bg-base-100 pointer-events-auto ml-4 cursor-pointer rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 disabled:cursor-not-allowed disabled:opacity-50"
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

			{/* Next Button */}
			<button
				onClick={onNext}
				disabled={!hasNext}
				className="bg-base-100/90 hover:bg-base-100 pointer-events-auto mr-4 cursor-pointer rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 disabled:cursor-not-allowed disabled:opacity-50"
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
	);
}
