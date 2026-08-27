import type { MouseEventHandler } from 'react';
import { useTheme } from '../hooks/useTheme';

interface TechnologyIconProps {
	icon: string;
	color: string;
	size?: 'sm' | 'md' | 'lg';
	name?: string;
	className?: string;
	iconUrl?: string;
	isBlack?: boolean;
	href?: string;
	onClick?: MouseEventHandler<HTMLAnchorElement>;
	highlighted?: boolean;
	detailsLabel?: string;
}

export default function TechnologyIcon({
	icon,
	size = 'md',
	name = '',
	className = '',
	iconUrl,
	isBlack = false,
	href,
	onClick,
	highlighted = false,
	detailsLabel,
}: TechnologyIconProps) {
	const { isDarkMode } = useTheme();

	const sizeClasses = {
		sm: 'w-8 h-8',
		md: 'w-12 h-12',
		lg: 'w-16 h-16',
	};

	// Apply white filter only when isBlack is true AND in dark mode
	// In light mode, show the original image without any filter
	const imageClasses = `${sizeClasses[size]} object-contain ${
		isBlack && isDarkMode ? 'brightness-0 invert' : ''
	}`;

	const accessibleName = name || icon;

	const figure = (
		<figure
			className={`bg-base-200/65 flex min-h-[96px] flex-col items-center justify-center gap-2.5 rounded-xl border px-3 py-3.5 text-center transition-all ${
				highlighted
					? 'border-primary ring-primary/30 hover:bg-base-200/90 ring-1'
					: 'border-base-300/70'
			} ${className}`}>
			<div className="flex h-11 w-11 items-center justify-center">
				{iconUrl ? (
					<img
						src={iconUrl}
						alt={`${accessibleName} logo`}
						loading="lazy"
						decoding="async"
						className={imageClasses}
					/>
				) : (
					<div
						className={`${sizeClasses[size]} flex items-center justify-center`}>
						<span className="text-base-content font-semibold">{icon}</span>
					</div>
				)}
			</div>
			<figcaption className="text-base-content text-center text-[0.8rem] leading-tight font-semibold">
				{name}
			</figcaption>
		</figure>
	);

	if (!href) {
		return figure;
	}

	return (
		<a
			href={href}
			onClick={onClick}
			aria-haspopup="dialog"
			aria-label={detailsLabel || accessibleName}
			className="focus-visible:outline-primary block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2">
			{figure}
		</a>
	);
}
