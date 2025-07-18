interface SectionHeaderProps {
	title: string;
	subtitle?: string;
	className?: string;
	titleClassName?: string;
	subtitleClassName?: string;
}

export default function SectionHeader({
	title,
	subtitle,
	className = '',
	titleClassName = '',
	subtitleClassName = '',
}: SectionHeaderProps) {
	return (
		<div className={`mb-16 text-center ${className}`}>
			<h2
				className={`text-base-content mb-2 text-4xl font-bold ${titleClassName}`}>
				{title}
			</h2>
			{subtitle && (
				<p className={`text-base-content/70 text-xl ${subtitleClassName}`}>
					{subtitle}
				</p>
			)}
		</div>
	);
}
