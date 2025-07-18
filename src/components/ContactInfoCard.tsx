interface ContactInfoCardProps {
	icon: React.ReactNode;
	title: string;
	value: string;
}

export default function ContactInfoCard({
	icon,
	title,
	value,
}: ContactInfoCardProps) {
	return (
		<div className="bg-base-200 hover:bg-base-300 flex items-center gap-4 rounded-lg p-4 transition-colors">
			<div className="bg-primary text-primary-content flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
				{icon}
			</div>
			<div className="flex-1">
				<h3 className="text-base-content text-lg font-semibold">{title}</h3>
				<p className="text-base-content/70">{value}</p>
			</div>
		</div>
	);
}
