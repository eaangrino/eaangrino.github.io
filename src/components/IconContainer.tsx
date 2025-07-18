import type { ReactNode } from 'react';

interface IconContainerProps {
	children: ReactNode;
	size?: 'sm' | 'md' | 'lg' | 'xl';
	color?: 'blue' | 'green' | 'purple' | 'orange' | 'red';
	className?: string;
}

export default function IconContainer({
	children,
	size = 'md',
	color = 'blue',
	className = '',
}: IconContainerProps) {
	const sizeClasses = {
		sm: 'w-10 h-10',
		md: 'w-12 h-12',
		lg: 'w-16 h-16',
		xl: 'w-20 h-20',
	};

	const colorClasses = {
		blue: 'bg-primary/10 text-primary',
		green: 'bg-success/10 text-success',
		purple: 'bg-secondary/10 text-secondary',
		orange: 'bg-warning/10 text-warning',
		red: 'bg-error/10 text-error',
	};

	return (
		<div
			className={`flex items-center justify-center ${sizeClasses[size]} ${colorClasses[color]} rounded-lg ${className}`}>
			{children}
		</div>
	);
}
