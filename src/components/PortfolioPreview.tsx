// src/pages/PortfolioPreview.tsx
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import ProjectsData from './projectsData';
import { useTranslation } from 'react-i18next';

export default function PortfolioPreview() {
	const { t } = useTranslation('portfolio');
	const navigate = useNavigate();
	const { projectId } = useParams();
	const project = ProjectsData.find((p) => p.id === Number(projectId));

	const [isVertical, setIsVertical] = useState<boolean | null>(null);

	if (!project) return null;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm"
			onClick={() => navigate('/portfolio')}>
			<div
				className={`bg-base-200 my-auto max-h-[90vh] w-full overflow-y-auto rounded-xl p-4 text-white shadow-2xl sm:p-6 ${
					isVertical ? 'max-w-md' : 'max-w-3xl'
				}`}
				onClick={(e) => e.stopPropagation()}>
				{/* Imagen o múltiples */}
				<div
					className={`mb-4 flex ${
						Array.isArray(project.image) ? 'flex-row gap-4' : 'flex-col'
					}`}>
					{Array.isArray(project.image) ? (
						<div className="flex w-full flex-col justify-center gap-4 sm:flex-row">
							{project.image.map((src, i) => (
								<img
									key={i}
									src={src}
									className="max-h-[60vh] w-full rounded-lg object-contain sm:w-auto"
									alt={`${project.title}-${i}`}
								/>
							))}
						</div>
					) : (
						<img
							src={project.image}
							alt={project.title}
							onLoad={(e) => {
								const img = e.currentTarget;
								setIsVertical(img.naturalHeight > img.naturalWidth);
							}}
							className={`rounded-lg object-contain ${isVertical ? 'mx-auto w-full max-w-72' : 'w-full'}`}
						/>
					)}
				</div>

				<h2 className="text-xl font-bold sm:text-2xl">{t(project.title)}</h2>
				<p className="text-primary text-sm sm:text-base">{t(project.tech)}</p>
				<p className="mt-4 text-sm leading-relaxed text-gray-300 sm:text-base">
					{t(project.description)}
				</p>

				<div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
					<button
						onClick={() => navigate('/portfolio')}
						className="text-primary hover:text-primary/80 mt-4 cursor-pointer text-left font-bold tracking-widest uppercase sm:mt-6">
						{t('close')}
					</button>
					{project.link && (
						<button
							onClick={() => window.open(project.link, '_blank')}
							className="mt-0 cursor-pointer text-left font-bold tracking-widest text-green-600 uppercase hover:text-green-300/80 sm:mt-6 sm:text-right">
							{t('link')}
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
