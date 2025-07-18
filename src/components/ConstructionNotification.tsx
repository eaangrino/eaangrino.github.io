import { useTranslation } from 'react-i18next';

export default function ConstructionNotification() {
	const { t } = useTranslation('construction');

	return (
		<div className="toast toast-start">
			<div className="alert bg-base-200 border-base-300 text-base-content shadow-lg">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					className="h-6 w-6 shrink-0 stroke-current">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
				</svg>
				<span>{t('message')}</span>
			</div>
		</div>
	);
}
