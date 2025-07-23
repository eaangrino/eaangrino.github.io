import type { ReactNode } from 'react';

interface TabButtonProps {
	id: string;
	label: string;
	icon: ReactNode;
	isActive: boolean;
	onClick: () => void;
	className?: string;
}

export default function TabButton({
	label,
	icon,
	isActive,
	onClick,
	className = '',
}: TabButtonProps) {
	return (
		<button
			onClick={onClick}
			className={`flex cursor-pointer items-center space-x-2 rounded-md px-6 py-3 transition-all duration-300 ${
				isActive
					? 'bg-primary text-primary-content shadow-md'
					: 'text-base-content/70 hover:bg-base-200 hover:text-base-content'
			} ${className}`}>
			{icon}
			<span className="font-medium">{label}</span>
		</button>
	);
}
