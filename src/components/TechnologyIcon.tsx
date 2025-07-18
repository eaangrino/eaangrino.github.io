import { useTheme } from '../hooks/useTheme';

interface TechnologyIconProps {
	icon: string;
	color: string;
	size?: 'sm' | 'md' | 'lg';
	className?: string;
	iconUrl?: string;
	isBlack?: boolean;
}

export default function TechnologyIcon({
	icon,
	size = 'md',
	className = '',
	iconUrl,
	isBlack = false,
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

	return (
		<div className={`flex flex-col items-center ${className}`}>
			{iconUrl ? (
				<img src={iconUrl} alt={icon} className={imageClasses} />
			) : (
				<div
					className={`${sizeClasses[size]} flex items-center justify-center`}>
					<span className="text-base-content font-semibold">{icon}</span>
				</div>
			)}
		</div>
	);
}
