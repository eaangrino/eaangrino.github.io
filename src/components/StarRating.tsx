interface StarRatingProps {
	rating: number;
	maxRating?: number;
	size?: 'sm' | 'md' | 'lg';
	className?: string;
}

export default function StarRating({
	rating,
	maxRating = 5,
	size = 'md',
	className = '',
}: StarRatingProps) {
	const sizeClasses = {
		sm: 'w-3 h-3',
		md: 'w-4 h-4',
		lg: 'w-5 h-5',
	};

	return (
		<div className={`flex items-center space-x-1 ${className}`}>
			{Array.from({ length: maxRating }, (_, index) => (
				<svg
					key={index}
					className={`${sizeClasses[size]} ${
						index < rating ? 'text-warning fill-current' : 'text-base-300'
					}`}
					fill="currentColor"
					viewBox="0 0 24 24">
					<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
				</svg>
			))}
		</div>
	);
}
