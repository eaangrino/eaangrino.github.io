// src/pages/Portfolio.tsx
import { useTranslation } from 'react-i18next';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import ProjectsData from './projectsData.ts'; // <= crea este archivo igual que SeedData
import Button from './Button.tsx';

export default function Portfolio() {
	const navigate = useNavigate();
	const { t } = useTranslation('portfolio');
	const carouselRef = useRef<HTMLDivElement | null>(null);

	const simulateKey = (key: 'ArrowLeft' | 'ArrowRight') => {
		const keyboardEvent = new KeyboardEvent('keydown', { key });
		document.dispatchEvent(keyboardEvent);
	};

	// Navegación con teclado (misma lógica que tu Collection)
	useEffect(() => {
		const handleKeyPress = (e: KeyboardEvent) => {
			if (!carouselRef.current) return;

			const carousel = carouselRef.current;
			const scrollAmount = 400;
			const maxScroll = carousel.scrollWidth - carousel.clientWidth;
			const threshold = 40;

			if (e.key === 'ArrowRight') {
				if (carousel.scrollLeft >= maxScroll - threshold) {
					carousel.scrollTo({ left: 0, behavior: 'smooth' });
				} else {
					carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
				}
			}

			if (e.key === 'ArrowLeft') {
				if (carousel.scrollLeft <= threshold) {
					carousel.scrollTo({ left: maxScroll, behavior: 'smooth' });
				} else {
					carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
				}
			}
		};

		document.addEventListener('keydown', handleKeyPress);
		return () => document.removeEventListener('keydown', handleKeyPress);
	}, []);

	console.log(ProjectsData);
	return (
		<main className="relative flex min-h-screen w-full flex-col items-center justify-center gap-12 text-gray-200">
			<Outlet />

			{/* Título */}
			<div className="text-center leading-tight">
				<h1 className="mb-4 text-5xl font-extrabold tracking-wide text-white">
					{t('title')}
				</h1>
				<p className="mx-auto max-w-xl text-lg text-gray-300">
					{t('subtitle')}
				</p>
			</div>

			{/* Carousel */}
			<div className="relative flex w-11/12 max-w-6xl flex-col items-center justify-center md:flex-row">
				{/* Botón izquierda */}
				<button
					aria-label="Prev"
					onClick={() => simulateKey('ArrowLeft')}
					className="bg-base-200/80 hover:bg-primary absolute left-0 z-20 hidden rounded-full p-3 text-white shadow-md md:flex">
					<ChevronLeftIcon className="h-6 w-6" />
				</button>

				<div
					ref={carouselRef}
					className="carousel carousel-center bg-base-200 rounded-box w-full space-x-6 scroll-smooth p-8 shadow-lg">
					{ProjectsData.map((project) => (
						<div
							key={project.id}
							className="carousel-item group relative transition-all"
							onClick={() => navigate(`/portfolio/${project.id}`)}>
							{/* Botón ver */}
							<button
								onClick={(e) => {
									e.stopPropagation();
									navigate(`/portfolio/${project.id}`);
								}}
								className="bg-primary hover:bg-primary/80 absolute top-2 right-2 z-20 cursor-pointer rounded-full px-4 py-1 font-semibold text-white shadow-md">
								{t('viewButton')}
							</button>

							<img
								src={
									Array.isArray(project.image)
										? project.image[0]
										: project.image
								}
								className="rounded-box h-96 w-80 object-cover transition-transform duration-500 group-hover:scale-105"
								alt={t(project.title)}
							/>

							<div className="rounded-b-box absolute bottom-0 left-0 w-full bg-white/40 px-4 py-3 backdrop-blur-md">
								<h3 className="text-lg font-semibold text-black">
									{t(project.title)}
								</h3>
							</div>
						</div>
					))}
				</div>

				{/* Botón derecha */}
				<button
					aria-label="Next"
					onClick={() => simulateKey('ArrowRight')}
					className="bg-base-200/80 hover:bg-primary absolute right-0 z-20 hidden rounded-full p-3 text-white shadow-md md:flex">
					<ChevronRightIcon className="h-6 w-6" />
				</button>

				{/* Controles móviles */}
				<div className="mt-6 flex w-full justify-center gap-10 md:hidden">
					<button
						aria-label="Prev-Mobile"
						onClick={() => simulateKey('ArrowLeft')}
						className="bg-base-200/80 hover:bg-primary rounded-full p-4 text-white shadow-md">
						<ChevronLeftIcon className="h-6 w-6" />
					</button>

					<button
						aria-label="Next-Mobile"
						onClick={() => simulateKey('ArrowRight')}
						className="bg-base-200/80 hover:bg-primary rounded-full p-4 text-white shadow-md">
						<ChevronRightIcon className="h-6 w-6" />
					</button>
				</div>
			</div>

			<Button href="/" size="lg">
				{t('backButton')}
			</Button>
		</main>
	);
}
