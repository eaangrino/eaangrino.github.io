import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme';
import ProjectsData from './projectsData';

const GITHUB_ICON_URL =
	'https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/github/github-original.svg';

export default function ProjectsShowcase() {
	const { t } = useTranslation(['home', 'portfolio']);
	const { isDarkMode } = useTheme();

	return (
		<section
			id="projects"
			className="scroll-mt-28 px-4 py-14 md:scroll-mt-32 md:px-8 md:py-20">
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

				<div className="border-base-300/70 bg-base-100/80 divide-base-300/70 overflow-hidden rounded-2xl border shadow-[0_18px_55px_rgba(15,23,42,0.07)] divide-y backdrop-blur dark:shadow-[0_18px_55px_rgba(255,255,255,0.06)]">
					{ProjectsData.map((project) => {
						const projectLink = project.link;

						return (
							<article
								key={project.id}
								className="flex items-start gap-4 px-4 py-4 sm:gap-5 sm:px-5 sm:py-5">
								<div className="bg-base-200/70 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
									<img
										src={GITHUB_ICON_URL}
										alt="GitHub"
										loading="lazy"
										decoding="async"
										className={`h-7 w-7 object-contain ${
											isDarkMode ? 'brightness-0 invert' : ''
										}`}
									/>
								</div>

								<div className="min-w-0 flex-1">
									<div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
										<div className="min-w-0">
											<h3 className="text-base-content text-lg font-semibold sm:text-xl">
												{t(project.title, { ns: 'portfolio' })}
											</h3>
											<p className="text-base-content/60 mt-1.5 text-sm leading-6">
												{t(project.description, { ns: 'portfolio' })}
											</p>
										</div>

										{projectLink && (
											<a
												href={projectLink}
												target="_blank"
												rel="noreferrer"
												className="text-primary inline-flex shrink-0 items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-75">
												{t('home:projects.visitProject')}
												<ArrowTopRightOnSquareIcon className="h-4 w-4" />
											</a>
										)}
									</div>

									<div className="mt-3">
										<span className="bg-base-200 text-base-content/70 inline-flex rounded-full px-3 py-1.5 text-xs font-medium sm:text-sm">
											{t(project.tech, { ns: 'portfolio' })}
										</span>
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
