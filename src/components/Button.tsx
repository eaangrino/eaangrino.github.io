import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
	children: ReactNode;
	variant?: 'primary' | 'secondary' | 'outline';
	size?: 'sm' | 'md' | 'lg';
	href?: string;
	onClick?: () => void;
	className?: string;
	icon?: ReactNode;
	iconPosition?: 'left' | 'right';
	disabled?: boolean;
	type?: 'button' | 'submit' | 'reset';
}

export default function Button({
	children,
	variant = 'primary',
	size = 'md',
	href,
	onClick,
	className = '',
	icon,
	iconPosition = 'right',
	disabled = false,
	type = 'button',
}: ButtonProps) {
	const baseClasses =
		'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

	const variantClasses = {
		primary:
			'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl focus:ring-blue-500',
		secondary:
			'bg-gray-600 hover:bg-gray-700 text-white shadow-lg hover:shadow-xl focus:ring-gray-500',
		outline:
			'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
	};

	const sizeClasses = {
		sm: 'px-4 py-2 text-sm space-x-1',
		md: 'px-6 py-3 text-base space-x-2',
		lg: 'px-8 py-4 text-lg space-x-2',
	};

	const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

	const content = (
		<>
			{icon && iconPosition === 'left' && icon}
			<span>{children}</span>
			{icon && iconPosition === 'right' && icon}
		</>
	);

	if (href) {
		return (
			<Link to={href} className={classes}>
				{content}
			</Link>
		);
	}

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={classes}>
			{content}
		</button>
	);
}
