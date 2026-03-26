import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import ProjectsData from './projectsData';

export default function ProjectsShowcase() {
	const { t } = useTranslation(['home', 'portfolio']);

	return (
		<section className="px-4 py-14 md:px-8 md:py-20">
			<div className="mx-auto max-w-6xl">
				<div className="mb-10 max-w-3xl">
					<p className="text-primary mb-3 text-sm font-semibold tracking-[0.28em] uppercase">
						{t('home:projects.eyebrow')}
					</p>
					<h2 className="text-base-content text-3xl font-semibold tracking-tight sm:text-4xl">
						{t('home:projects.title')}
					</h2>
					<p className="text-base-content/70 mt-4 max-w-2xl text-base leading-7 sm:text-lg">
						{t('home:projects.description')}
					</p>
				</div>

				<div className="space-y-5">
					{ProjectsData.map((project, index) => {
						const isImageFirst = index % 2 === 1;
						const projectLink = project.link;

						return (
							<article
								key={project.id}
								className={`border-base-300/70 bg-base-100/80 grid overflow-hidden rounded-[2rem] border shadow-[0_22px_70px_rgba(15,23,42,0.08)] backdrop-blur dark:shadow-[0_22px_70px_rgba(255,255,255,0.08)] ${
									isImageFirst
										? 'lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.9fr)]'
										: 'lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.45fr)]'
								}`}>
								<div
									className={`flex flex-col justify-between p-6 sm:p-8 ${
										isImageFirst ? 'lg:order-2' : ''
									}`}>
									<div>
										<p className="text-base-content/45 mb-3 text-xs font-semibold tracking-[0.3em] uppercase">
											{t('home:projects.cardLabel', { index: project.id })}
										</p>
										<h3 className="text-base-content text-2xl font-semibold">
											{t(project.title, { ns: 'portfolio' })}
										</h3>
										<p className="text-base-content/60 mt-3 text-sm leading-7 sm:text-base">
											{t(project.description, { ns: 'portfolio' })}
										</p>
									</div>

									<div className="mt-8 flex flex-wrap items-center gap-3">
										<span className="bg-base-200 text-base-content/70 rounded-full px-4 py-2 text-xs font-medium sm:text-sm">
											{t(project.tech, { ns: 'portfolio' })}
										</span>
										{projectLink && (
											<a
												href={projectLink}
												target="_blank"
												rel="noreferrer"
												className="text-primary inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-75">
												{t('home:projects.visitProject')}
												<ArrowTopRightOnSquareIcon className="h-4 w-4" />
											</a>
										)}
									</div>
								</div>

								<div className={isImageFirst ? 'lg:order-1' : ''}>
									<div className="from-base-200 via-base-100 to-base-200 h-full bg-gradient-to-br p-2 sm:p-3">
										<img
											src={project.image}
											alt={t(project.title, { ns: 'portfolio' })}
											className="h-[260px] w-full rounded-[1.5rem] object-cover md:h-[340px] lg:h-full lg:min-h-[320px]"
										/>
									</div>
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}
