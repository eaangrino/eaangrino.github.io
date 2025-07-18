import type { ReactNode } from 'react';
import IconContainer from './IconContainer';

interface ServiceCardProps {
	title: string;
	icon: ReactNode;
	description?: string;
	className?: string;
}

export default function ServiceCard({
	title,
	icon,
	description,
	className = '',
}: ServiceCardProps) {
	return (
		<div
			className={`bg-base-200 rounded-lg p-6 shadow-md transition-shadow hover:shadow-lg ${className}`}>
			<div className="flex flex-col items-center text-center">
				{/* Icon */}
				<IconContainer size="lg" className="mb-4">
					{icon}
				</IconContainer>

				{/* Title */}
				<h3 className="text-base-content mb-4 text-xl font-semibold">
					{title}
				</h3>

				{/* Description (optional) */}
				{description && (
					<p className="text-base-content/70 mb-6 leading-relaxed">
						{description}
					</p>
				)}

				{/* View More Link */}
				<a
					href="#"
					className="text-primary hover:text-primary/80 inline-flex items-center font-medium transition-colors">
					<span>View More</span>
					<svg
						className="ml-1 h-4 w-4"
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
				</a>
			</div>
		</div>
	);
}
