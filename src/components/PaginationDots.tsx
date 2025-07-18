interface PaginationDotsProps {
	totalSlides: number;
	currentIndex: number;
	onDotClick: (index: number) => void;
	className?: string;
	activeColor?: string;
	inactiveColor?: string;
}

export default function PaginationDots({
	totalSlides,
	currentIndex,
	onDotClick,
	className = '',
	activeColor = 'bg-primary',
	inactiveColor = 'bg-base-300',
}: PaginationDotsProps) {
	return (
		<div className={`flex justify-center space-x-2 ${className}`}>
			{Array.from({ length: totalSlides }, (_, index) => (
				<button
					key={index}
					onClick={() => onDotClick(index)}
					className={`h-3 w-3 rounded-full transition-colors hover:scale-110 ${
						index === currentIndex
							? activeColor
							: `${inactiveColor} hover:bg-base-400`
					}`}
					aria-label={`Go to slide ${index + 1}`}
				/>
			))}
		</div>
	);
}
