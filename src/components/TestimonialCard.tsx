import StarRating from './StarRating';

interface TestimonialCardProps {
	name: string;
	role: string;
	image: string;
	rating: number;
	text: string;
	className?: string;
}

export default function TestimonialCard({
	name,
	role,
	image,
	rating,
	text,
	className = '',
}: TestimonialCardProps) {
	return (
		<div
			className={`bg-base-100 rounded-xl p-6 shadow-md transition-shadow hover:shadow-lg ${className}`}>
			{/* Header with Profile and Rating */}
			<div className="mb-4 flex items-start justify-between">
				<div className="flex items-center space-x-4">
					{/* Profile Image */}
					<div className="bg-base-300 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full">
						{image ? (
							<img
								src={image}
								alt={name}
								className="h-full w-full object-cover"
							/>
						) : (
							<svg
								className="text-base-content/40 h-6 w-6"
								fill="currentColor"
								viewBox="0 0 24 24">
								<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
							</svg>
						)}
					</div>

					{/* Client Info */}
					<div>
						<h3 className="text-base-content font-semibold">{name}</h3>
						<p className="text-base-content/70 text-sm">{role}</p>
					</div>
				</div>

				{/* Star Rating */}
				<StarRating rating={rating} />
			</div>

			{/* Testimonial Text */}
			<p className="text-base-content/80 leading-relaxed">{text}</p>
		</div>
	);
}
