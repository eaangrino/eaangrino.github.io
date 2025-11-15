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
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
			onClick={() => navigate('/portfolio')}>
			<div
				className={`bg-base-200 rounded-xl p-6 text-white shadow-2xl ${
					isVertical ? 'max-w-md' : 'w-11/12 max-w-3xl'
				}`}
				onClick={(e) => e.stopPropagation()}>
				{/* Imagen o múltiples */}
				<div
					className={`mb-4 flex ${
						Array.isArray(project.image) ? 'flex-row gap-4' : 'flex-col'
					}`}>
					{Array.isArray(project.image) ? (
						<div className="flex w-full flex-row justify-center gap-4">
							{project.image.map((src, i) => (
								<img
									key={i}
									src={src}
									className="max-h-[70vh] w-auto rounded-lg object-contain"
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
							className={`rounded-lg ${isVertical ? 'mx-auto w-72' : 'w-full'}`}
						/>
					)}
				</div>

				<h2 className="text-2xl font-bold">{t(project.title)}</h2>
				<p className="text-primary">{t(project.tech)}</p>
				<p className="mt-4 text-gray-300">{t(project.description)}</p>

				<div className="flex flex-row justify-between">
					<button
						onClick={() => navigate('/portfolio')}
						className="text-primary hover:text-primary/80 mt-6 cursor-pointer font-bold tracking-widest uppercase">
						{t('close')}
					</button>
					{project.link && (
						<button
							onClick={() => window.open(project.link, '_blank')}
							className="mt-6 cursor-pointer font-bold tracking-widest text-green-600 uppercase hover:text-green-300/80">
							{t('link')}
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
