interface StatsCardProps {
	number: string;
	label: string;
	sublabel?: string;
	className?: string;
}

export default function StatsCard({
	number,
	label,
	sublabel,
	className = '',
}: StatsCardProps) {
	return (
		<div className={`text-center ${className}`}>
			<div className="text-primary mb-1 text-3xl font-bold">{number}</div>
			<div className="text-base-content/70 text-sm">
				<div className="font-medium">{label}</div>
				{sublabel && <div>{sublabel}</div>}
			</div>
		</div>
	);
}
