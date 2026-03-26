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
			className={`border-base-300/70 bg-base-100/90 group rounded-[1.5rem] border p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1 dark:shadow-[0_18px_50px_rgba(255,255,255,0.08)] ${className}`}>
			<div className="mb-5 flex items-center rounded-2xl transition-colors duration-300">
				<div className="bg-primary/12 text-primary mr-3 flex h-10 w-10 items-center justify-center rounded-xl">
					<div className="text-primary">{icon}</div>
				</div>
				<div>
					<h3 className="text-base-content text-lg font-semibold">{title}</h3>
					<p className="text-base-content/60 text-xs">{subtitle}</p>
				</div>
			</div>

			{children}
		</div>
	);
}
