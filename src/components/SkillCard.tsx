import type { ReactNode } from 'react';

interface SkillCardProps {
	title: string;
	subtitle?: string;
	icon: ReactNode;
	children: ReactNode;
	className?: string;
}

export default function SkillCard({
	title,
	subtitle = 'Technologies & Tools',
	icon,
	children,
	className = '',
}: SkillCardProps) {
	return (
		<div
			className={`bg-base-200 rounded-xl p-6 shadow-lg transition-shadow hover:shadow-xl ${className}`}>
			{/* Category Header */}
			<div className="mb-6 flex items-center">
				<div className="bg-primary/10 mr-4 flex h-12 w-12 items-center justify-center rounded-lg">
					<div className="text-primary">{icon}</div>
				</div>
				<div>
					<h3 className="text-base-content text-xl font-semibold">{title}</h3>
					<p className="text-base-content/70 text-sm">{subtitle}</p>
				</div>
			</div>

			{/* Content */}
			{children}
		</div>
	);
}
