interface ContactInfoCardProps {
	icon: React.ReactNode;
	title: string;
	value: string;
	copyAction?: boolean;
}

export default function ContactInfoCard({
	icon,
	title,
	value,
	copyAction = false,
}: ContactInfoCardProps) {
	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(value);
			// You could add a toast notification here if needed
		} catch (err) {
			console.error('Failed to copy text: ', err);
		}
	};

	return (
		<div className="bg-base-200 hover:bg-base-300 relative flex items-center gap-4 rounded-lg p-4 transition-colors">
			{copyAction && (
				<button
					onClick={handleCopy}
					className="text-base-content/60 hover:text-base-content absolute top-2 right-2 cursor-pointer p-1 transition-colors"
					aria-label="Copy to clipboard">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
						/>
					</svg>
				</button>
			)}
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
