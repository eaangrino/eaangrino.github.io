import SectionHeader from './SectionHeader';
import SkillCard from './SkillCard';
import TechnologyIcon from './TechnologyIcon';
import { useTranslation } from 'react-i18next';

interface SkillCategory {
	name: string;
	icon: React.ReactNode;
	technologies: Array<{
		name: string;
		icon: string;
		color: string;
		isBlack?: boolean;
		iconUrl?: string;
		iconSVG?: string;
	}>;
}

export default function SkillsSection() {
	const { t } = useTranslation('skills');

	const skillCategories: SkillCategory[] = [
		{
			name: t('categories.primary'),
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-6">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09l2.847.813-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.455L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.455L18 2.25l.259 1.036a3.375 3.375 0 0 0 2.455 2.455L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423L16.5 15.75l.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
					/>
				</svg>
			),
			technologies: [
				{
					name: 'Node.js',
					icon: 'N',
					color: 'bg-green-600',
					iconUrl:
						'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
				},
				{
					name: 'TypeScript',
					icon: 'TS',
					color: 'bg-blue-600',
					iconUrl:
						'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
				},
				{
					name: 'React',
					icon: 'R',
					color: 'bg-blue-500',
					iconUrl:
						'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
				},
				{
					name: 'Next.js',
					icon: 'N',
					color: 'bg-black',
					iconUrl: 'https://nextjs.org/favicon.ico',
				},
				{
					name: 'NestJS',
					icon: 'N',
					color: 'bg-red-500',
					iconUrl: '/nestjs.svg',
				},
				{
					name: 'AWS',
					icon: 'A',
					color: 'bg-orange-500',
					iconUrl:
						'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
				},
				{
					name: 'PostgreSQL',
					icon: 'P',
					color: 'bg-blue-500',
					iconUrl:
						'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg',
				},
				{
					name: 'Oracle SQL',
					icon: 'O',
					color: 'bg-red-500',
					iconUrl: '/sql-dev3.svg',
				},
				{
					name: 'MySQL',
					icon: 'M',
					color: 'bg-blue-500',
					iconUrl:
						'https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/mysql/mysql-original-wordmark.svg',
				},
				{
					name: 'Java',
					icon: 'J',
					color: 'bg-orange-500',
					iconUrl:
						'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
				},
				{
					name: '.NET',
					icon: 'N',
					color: 'bg-purple-600',
					iconUrl:
						'https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg',
				},
				{
					name: 'Flutter',
					icon: 'F',
					color: 'bg-blue-500',
					iconUrl:
						'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg',
				},
				{
					name: 'Ionic',
					icon: 'I',
					color: 'bg-blue-500',
					iconUrl: 'https://ionicframework.com/apple-icon-180x180.png',
				},
			],
		},
		{
			name: t('categories.tools'),
			icon: (
				<svg
					className="h-6 w-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
					/>
				</svg>
			),
			technologies: [
				{
					name: 'Docker',
					icon: 'D',
					color: 'bg-blue-500',
					iconUrl: '/docker-icon-svgrepo-com.svg',
				},
				{
					name: 'Git',
					icon: 'G',
					color: 'bg-orange-500',
					iconUrl: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
				},
				{
					name: 'Linux',
					icon: 'L',
					color: 'bg-yellow-500',
					iconUrl:
						'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg',
				},
				{
					name: 'Postman',
					icon: 'P',
					color: 'bg-orange-500',
					iconUrl:
						'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
				},
				{
					name: 'Bash',
					icon: 'B',
					color: 'bg-gray-600',
					isBlack: true,
					iconUrl:
						'https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg',
				},
				{
					name: 'Figma',
					icon: 'F',
					color: 'bg-purple-500',
					iconUrl:
						'https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/figma/figma-original.svg',
				},
				{
					name: 'Codex',
					icon: 'C',
					color: 'bg-green-500',
					iconUrl: 'https://cdn.oaistatic.com/assets/favicon-o20kmmos.svg',
				},
				{
					name: 'DeepSeek',
					icon: 'D',
					color: 'bg-purple-500',
					iconUrl: '/deepseek.svg',
				},
				{
					name: 'ollama',
					icon: 'O',
					color: 'bg-gray-600',
					isBlack: true,
					iconUrl: '/ollama.svg',
					// iconSVG: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" /><path d="M8.5 9L12 12.5L15.5 9" /></svg>`,
				},
				{
					name: 'Gemini',
					icon: 'G',
					color: 'bg-yellow-500',
					iconUrl:
						'https://www.gstatic.com/lamda/images/gemini_sparkle_aurora_33f86dc0c0257da337c63.svg',
				},
				{
					name: 'Claude',
					icon: 'C',
					color: 'bg-yellow-500',
					iconUrl:
						'https://assets-proxy.anthropic.com/claude-ai/v2/assets/v1/cd02a42d9-Vq_H3mgS.svg',
					// iconSVG: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" /><path d="M8.5 9L12 12.5L15.5 9" /></svg>`,
				},
				{
					name: 'Meta AI',
					icon: 'M',
					color: 'bg-blue-500',
					iconUrl: '/metaai-color.svg',
				},
				{
					name: 'MarkText',
					icon: 'M',
					color: 'bg-green-600',
					iconUrl:
						'https://raw.githubusercontent.com/marktext/marktext/refs/heads/develop/resources/icons/128x128/marktext.png',
				},
			],
		},
	];

	return (
		<section
			id="skills"
			className="from-base-100 via-base-200/35 to-base-100 bg-gradient-to-b px-4 pt-28 pb-16 md:px-8 md:pt-36 md:pb-24">
			<div className="mx-auto max-w-6xl">
				<SectionHeader
					title={t('title')}
					subtitle={t('subtitle')}
					className="max-w-3xl text-left"
					titleClassName="text-left text-4xl sm:text-5xl font-semibold tracking-tight"
					subtitleClassName="text-left text-base leading-7 sm:text-lg"
				/>

				<div className="grid gap-4">
					{skillCategories.map((category, index) => (
						<SkillCard
							key={index}
							title={category.name}
							icon={category.icon}
							subtitle={t('cardSubtitle')}>
							<div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
								{category.technologies.map((tech, techIndex) => (
									<TechnologyIcon
										key={techIndex}
										icon={tech.icon}
										color={tech.color}
										iconUrl={tech.iconUrl}
										isBlack={tech.isBlack}
										name={tech.name}
									/>
								))}
							</div>
						</SkillCard>
					))}
				</div>
			</div>
		</section>
	);
}
