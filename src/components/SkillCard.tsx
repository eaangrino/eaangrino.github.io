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
			className={`group bg-base-200 ring-base-300/60 dark:ring-base-content/5 rounded-xl p-6 shadow-[0_6px_18px_rgba(15,23,42,0.06),0_2px_6px_rgba(15,23,42,0.04)] ring-1 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_24px_rgba(15,23,42,0.09),0_4px_10px_rgba(15,23,42,0.06)] dark:shadow-[0_10px_24px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_14px_30px_rgba(0,0,0,0.26)] ${className}`}>
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
