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
		<div className={`mb-10 text-center md:mb-16 ${className}`}>
			<h2
				className={`text-base-content mb-2 text-3xl font-bold sm:text-4xl ${titleClassName}`}>
				{title}
			</h2>
			{subtitle && (
				<p className={`text-base-content/70 text-base sm:text-lg md:text-xl ${subtitleClassName}`}>
					{subtitle}
				</p>
			)}
		</div>
	);
}
