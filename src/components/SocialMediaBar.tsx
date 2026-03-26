import {
	ShareIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import { useRef, useState, type ReactNode } from 'react';

type FabVariant = 'vertical' | 'flower';

type FabTrigger = {
	icon: ReactNode;
	className?: string;
	wrapperClassName?: string;
};

type FabItem = {
	icon: ReactNode;
	tooltip?: string;
	href: string;
	className?: string;
};

type FabAction = {
	icon: ReactNode;
	className?: string;
};

type FabProps = {
	variant?: FabVariant;
	trigger: FabTrigger;
	items: FabItem[];
	mainAction?: FabAction;
	closeAction?: FabAction;
	className?: string;
};

function cx(...classes: Array<string | false | null | undefined>) {
	return classes.filter(Boolean).join(' ');
}

function Fab({
	variant = 'vertical',
	trigger,
	items,
	mainAction,
	closeAction,
	className = '',
}: FabProps) {
	return (
		<div className={cx('fab', variant === 'flower' && 'fab-flower', className)}>
			<div
				tabIndex={0}
				role="button"
				className={cx(trigger.wrapperClassName)}>
				<div className="bg-primary/20 absolute inset-0 animate-ping rounded-full"></div>
				<div className={cx('btn btn-circle btn-lg', trigger.className)}>
					{trigger.icon}
				</div>
			</div>

			{mainAction && (
				<div className="fab-main-action">
					<button className={cx('btn btn-circle btn-lg', mainAction.className)}>
						{mainAction.icon}
					</button>
				</div>
			)}

			{closeAction && (
				<div className="fab-close">
					<span className={cx('btn btn-circle btn-lg', closeAction.className)}>
						{closeAction.icon}
					</span>
				</div>
			)}

			{items.map((item, index) => (
				<div key={index} className="tooltip tooltip-left" data-tip={item.tooltip}>
					<a
						href={item.href}
						target="_blank"
						rel="noopener noreferrer"
						className={cx('btn btn-circle btn-lg', item.className)}
						aria-label={item.tooltip}>
						{item.icon}
					</a>
				</div>
			))}
		</div>
	);
}

export default function SocialMediaBar() {
	const wrapperRef = useRef<HTMLDivElement | null>(null);
	const [isOpen, setIsOpen] = useState(false);

	const items: FabItem[] = [
		{
			href: 'https://linkedin.com/in/eaangrino',
			tooltip: 'LinkedIn',
			className:
				'border-base-300 bg-base-100 text-base-content shadow-lg hover:bg-primary hover:text-primary-content',
			icon: (
				<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
				</svg>
			),
		},
		{
			href: 'https://github.com/eaangrino',
			tooltip: 'GitHub',
			className:
				'border-base-300 bg-base-100 text-base-content shadow-lg hover:bg-primary hover:text-primary-content',
			icon: (
				<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
				</svg>
			),
		},
		{
			href: 'https://instagram.com/eaangrino',
			tooltip: 'Instagram',
			className:
				'border-base-300 bg-base-100 text-base-content shadow-lg hover:bg-primary hover:text-primary-content',
			icon: (
				<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 3.675A6.162 6.162 0 1 0 12 18a6.162 6.162 0 0 0 0-12.324zm6.406-1.683a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
				</svg>
			),
		},
		{
			href: 'https://t.me/eaangrino',
			tooltip: 'Telegram',
			className:
				'border-base-300 bg-base-100 text-base-content shadow-lg hover:bg-primary hover:text-primary-content',
			icon: (
				<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
				</svg>
			),
		},
		{
			href: 'https://stackblitz.com/@eaangrino',
			tooltip: 'Stackblitz',
			className:
				'border-base-300 bg-base-100 text-base-content shadow-lg hover:bg-primary hover:text-primary-content',
			icon: (
				<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M10.9923 13.8183H5L15.957 2L13.0077 10.1817H19L8.04304 22L10.9923 13.8183Z" />
				</svg>
			),
		},
	];

	return (
		<>
			{isOpen && (
				<button
					type="button"
					className="fixed inset-0 z-40 bg-black/20 backdrop-blur-md"
					onClick={() => {
						setIsOpen(false);
						if (document.activeElement instanceof HTMLElement) {
							document.activeElement.blur();
						}
					}}
					aria-label="Close social links"
				/>
			)}

			<div
				ref={wrapperRef}
				className="fixed right-4 bottom-5 z-50 hidden md:block md:right-8 md:bottom-8"
				onFocusCapture={() => setIsOpen(true)}
				onBlurCapture={(event) => {
					if (!wrapperRef.current?.contains(event.relatedTarget as Node | null)) {
						setIsOpen(false);
					}
				}}>
				<div className="relative h-24 w-24">
					<Fab
						variant="vertical"
						className="absolute right-0 bottom-0"
						trigger={{
							icon: <ShareIcon className="h-6 w-6" />,
							className: 'btn-primary shadow-2xl relative z-10',
							wrapperClassName: 'relative',
						}}
						mainAction={{
							icon: <ShareIcon className="h-6 w-6" />,
							className: 'btn-primary shadow-2xl',
						}}
						closeAction={{
							icon: <XMarkIcon className="h-6 w-6" />,
							className: 'btn-primary shadow-2xl',
						}}
						items={items}
					/>
				</div>
			</div>
		</>
	);
}
