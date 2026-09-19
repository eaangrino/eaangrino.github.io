import {
	ArrowPathIcon,
	CommandLineIcon,
	CubeIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface NodeExperienceModalProps {
	open: boolean;
	onClose: () => void;
}

export default function NodeExperienceModal({
	open,
	onClose,
}: NodeExperienceModalProps) {
	const { t } = useTranslation('skills');

	useEffect(() => {
		if (!open) return;

		const previousOverflow = document.body.style.overflow;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose();
			}
		};

		document.body.style.overflow = 'hidden';
		window.addEventListener('keydown', handleKeyDown);

		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [open, onClose]);

	if (!open) return null;

	const practices = [
		{
			title: t('nodeDetails.versionTitle'),
			description: t('nodeDetails.versionDescription'),
			Icon: ArrowPathIcon,
		},
		{
			title: t('nodeDetails.dockerTitle'),
			description: t('nodeDetails.dockerDescription'),
			Icon: CubeIcon,
		},
		{
			title: t('nodeDetails.pnpmTitle'),
			description: t('nodeDetails.pnpmDescription'),
			Icon: CommandLineIcon,
		},
	];

	return (
		<div
			className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm sm:p-6"
			onMouseDown={(event) => {
				if (event.target === event.currentTarget) {
					onClose();
				}
			}}>
			<section
				role="dialog"
				aria-modal="true"
				aria-labelledby="node-experience-title"
				className="bg-base-100 border-base-300 relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border p-5 shadow-2xl sm:p-7">
				<button
					type="button"
					onClick={onClose}
					autoFocus
					aria-label={t('nodeDetails.close')}
					className="btn btn-circle btn-ghost absolute top-3 right-3">
					<XMarkIcon className="h-5 w-5" />
				</button>

				<div className="pr-10">
					<p className="text-primary mb-2 text-xs font-semibold tracking-[0.2em] uppercase">
						{t('nodeDetails.eyebrow')}
					</p>
					<h2
						id="node-experience-title"
						className="text-base-content text-2xl font-semibold tracking-tight sm:text-3xl">
						{t('nodeDetails.title')}
					</h2>
				</div>

				<p className="text-base-content/75 mt-4 max-w-2xl text-sm leading-7 sm:text-base">
					{t('nodeDetails.intro')}
				</p>

				<div className="mt-7 grid gap-3 sm:grid-cols-3">
					{practices.map(({ title, description, Icon }) => (
						<article
							key={title}
							className="border-base-300 bg-base-200/55 rounded-xl border p-4">
							<Icon
								aria-hidden="true"
								className="text-primary h-7 w-7"
							/>
							<h3 className="text-base-content mt-3 text-sm font-semibold sm:text-base">
								{title}
							</h3>
							<p className="text-base-content/70 mt-2 text-sm leading-6">
								{description}
							</p>
						</article>
					))}
				</div>

				<div className="border-primary/30 bg-primary/5 mt-7 rounded-xl border p-4">
					<h3 className="text-base-content text-sm font-semibold sm:text-base">
						{t('nodeDetails.approachTitle')}
					</h3>
					<p className="text-base-content/75 mt-1 text-sm leading-6 sm:text-base">
						{t('nodeDetails.approachDescription')}
					</p>
				</div>
			</section>
		</div>
	);
}
