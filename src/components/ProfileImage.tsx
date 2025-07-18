interface ProfileImageProps {
	src?: string;
	alt?: string;
	size?: 'sm' | 'md' | 'lg' | 'xl';
	className?: string;
	rotationDirection?: 'left' | 'right';
}

export default function ProfileImage({
	src,
	alt = 'Profile',
	size = 'lg',
	className = '',
	rotationDirection = 'right',
}: ProfileImageProps) {
	const sizeClasses = {
		sm: 'w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40',
		md: 'w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56',
		lg: 'w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64',
		xl: 'w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72',
	};

	const rotationClasses = {
		left: 'animate-spin',
		right: 'animate-spin',
	};

	return (
		<div className={`relative ${className}`}>
			{/* Background Blob */}
			<div className="absolute inset-0 scale-110 transform rounded-full bg-blue-600/20 blur-3xl transition-all duration-300 ease-in-out group-hover:scale-125"></div>
			<div className="absolute inset-0 scale-105 transform rounded-full bg-gradient-to-br from-blue-400/30 to-blue-600/30 blur-2xl transition-all duration-300 ease-in-out group-hover:scale-120"></div>

			{/* Rotating Pentagon */}
			<div className="absolute inset-0 flex items-center justify-center">
				{/* First Octagon - rotates in the direction specified by the prop */}
				<div
					className={`relative h-full w-full ${rotationClasses[rotationDirection]} hidden sm:block`}
					style={{
						animationDuration: '8s',
						animationDirection:
							rotationDirection === 'left' ? 'reverse' : 'normal',
					}}>
					<svg
						className="text-base-300/40 dark:text-base-content/20 h-full w-full"
						viewBox="0 0 100 100"
						fill="currentColor"
						style={{ transform: 'scale(1.2)' }}>
						<polygon
							points="50,2 70,2 98,30 98,70 70,98 50,98 30,98 2,70 2,30 30,2"
							className="transition-colors duration-300 ease-in-out"
						/>
					</svg>
				</div>

				{/* Second Octagon - rotates in the opposite direction (hidden on mobile) */}
				<div
					className={`absolute h-full w-full ${rotationClasses[rotationDirection]} hidden sm:block`}
					style={{
						animationDuration: '12s',
						animationDirection:
							rotationDirection === 'left' ? 'normal' : 'reverse',
					}}>
					<svg
						className="text-base-300/20 dark:text-base-content/10 h-full w-full"
						viewBox="0 0 100 100"
						fill="currentColor"
						style={{ transform: 'scale(1.2)' }}>
						<polygon
							points="50,2 70,2 98,30 98,70 70,98 50,98 30,98 2,70 2,30 30,2"
							className="transition-colors duration-300 ease-in-out"
						/>
					</svg>
				</div>
			</div>

			{/* Profile Image Container */}
			<div
				className={`group relative ${sizeClasses[size]} overflow-hidden rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-2 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:from-blue-500 hover:to-blue-700`}>
				<div className="h-full w-full overflow-hidden rounded-full bg-white">
					{src ? (
						<img src={src} alt={alt} className="h-full w-full object-cover" />
					) : (
						<div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
							<svg
								className="h-16 w-16 text-gray-400 sm:h-18 sm:w-18 md:h-20 md:w-20"
								fill="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
							</svg>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
