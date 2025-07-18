import type { ReactNode } from 'react';
import Button from './Button';

interface CTACardProps {
	title: string;
	description: string;
	buttonText: string;
	buttonHref: string;
	image?: ReactNode;
	backgroundColor?: string;
	className?: string;
}

export default function CTACard({
	title,
	description,
	buttonText,
	buttonHref,
	image,
	backgroundColor = 'bg-blue-600',
	className = '',
}: CTACardProps) {
	return (
		<div
			className={`${backgroundColor} overflow-hidden rounded-2xl shadow-xl ${className}`}>
			<div className="grid gap-0 lg:grid-cols-2">
				{/* Image Section - Left Side */}
				<div className="relative h-64 overflow-hidden lg:h-auto">
					{image ? (
						image
					) : (
						<div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-700 to-blue-800">
							<div className="text-center text-white">
								<svg
									className="mx-auto mb-4 h-24 w-24 opacity-50"
									fill="currentColor"
									viewBox="0 0 24 24">
									<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
								</svg>
								<p className="text-sm opacity-75">Profile Image</p>
							</div>
						</div>
					)}

					{/* Overlay effect */}
					<div className="absolute inset-0 bg-black/10"></div>
				</div>

				{/* Content Section - Right Side */}
				<div className="flex flex-col justify-center p-8 lg:p-12">
					<h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
						{title}
					</h2>

					<p className="mb-8 text-lg leading-relaxed text-blue-100">
						{description}
					</p>

					{/* CTA Button */}
					<Button
						href={buttonHref}
						variant="outline"
						size="lg"
						className="w-fit border-white bg-white text-blue-600 hover:border-gray-100 hover:bg-gray-100"
						icon={
							<svg
								className="h-5 w-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								/>
							</svg>
						}>
						{buttonText}
					</Button>
				</div>
			</div>
		</div>
	);
}
