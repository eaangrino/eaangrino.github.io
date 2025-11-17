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
			className={`group bg-base-200 rounded-xl p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${className}`}>
			{/* Category Header */}
			<div className="group-hover:bg-primary/10 -m-2 mb-6 flex items-center rounded-lg p-2 transition-colors duration-300">
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
