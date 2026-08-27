import {
	ArchiveBoxIcon,
	BoltIcon,
	CircleStackIcon,
	CloudArrowUpIcon,
	CommandLineIcon,
	EnvelopeIcon,
	GlobeAltIcon,
	PhoneIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface AwsExperienceModalProps {
	open: boolean;
	onClose: () => void;
}

const awsServices = [
	{ name: 'AWS Lambda', Icon: BoltIcon },
	{ name: 'AWS SAM', Icon: CommandLineIcon },
	{ name: 'Amazon DynamoDB', Icon: CircleStackIcon },
	{ name: 'Amazon S3', Icon: ArchiveBoxIcon },
	{ name: 'Amazon SES', Icon: EnvelopeIcon },
	{ name: 'Amazon Connect', Icon: PhoneIcon },
	{ name: 'AWS Amplify', Icon: CloudArrowUpIcon },
	{ name: 'Amazon Route 53', Icon: GlobeAltIcon },
];

export default function AwsExperienceModal({
	open,
	onClose,
}: AwsExperienceModalProps) {
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
				aria-labelledby="aws-experience-title"
				className="bg-base-100 border-base-300 relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border p-5 shadow-2xl sm:p-7">
				<button
					type="button"
					onClick={onClose}
					autoFocus
					aria-label={t('awsDetails.close')}
					className="btn btn-circle btn-ghost absolute top-3 right-3">
					<XMarkIcon className="h-5 w-5" />
				</button>

				<div className="pr-10">
					<p className="text-primary mb-2 text-xs font-semibold tracking-[0.2em] uppercase">
						{t('awsDetails.eyebrow')}
					</p>
					<h2
						id="aws-experience-title"
						className="text-base-content text-2xl font-semibold tracking-tight sm:text-3xl">
						{t('awsDetails.title')}
					</h2>
				</div>

				<p className="text-base-content/75 mt-4 max-w-2xl text-sm leading-7 sm:text-base">
					{t('awsDetails.intro')}
				</p>

				<div className="mt-7">
					<h3 className="text-base-content text-lg font-semibold">
						{t('awsDetails.servicesTitle')}
					</h3>
					<p className="text-base-content/65 mt-1 text-sm leading-6">
						{t('awsDetails.servicesDescription')}
					</p>

					<div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
						{awsServices.map(({ name, Icon }) => (
							<article
								key={name}
								className="border-base-300 bg-base-200/55 flex min-h-28 flex-col items-center justify-center gap-3 rounded-xl border p-3 text-center">
								<Icon
									aria-hidden="true"
									className="text-primary h-8 w-8"
								/>
								<span className="text-base-content text-sm font-semibold">
									{name}
								</span>
							</article>
						))}
					</div>
				</div>

				<p className="border-primary/30 bg-primary/5 text-base-content/75 mt-7 rounded-xl border p-4 text-sm leading-6 sm:text-base">
					{t('awsDetails.learning')}
				</p>
			</section>
		</div>
	);
}
