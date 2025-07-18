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
			name: t('categories.frontendStrong'),
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
						d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
					/>
				</svg>
			),
			technologies: [
				{
					name: 'TypeScript',
					icon: 'TS',
					color: 'bg-blue-600',
					iconUrl:
						'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
				},
				{
					name: 'React',
					icon: '⚛️',
					color: 'bg-blue-500',
					iconUrl:
						'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
				},
				{
					name: 'Vite',
					icon: 'V',
					color: 'bg-purple-500',
					iconUrl: 'https://vite.dev/logo.svg',
				},
				{
					name: 'Tailwind CSS',
					icon: 'T',
					color: 'bg-cyan-500',
					iconUrl:
						'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
				},
				{
					name: 'DaisyUI',
					icon: 'D',
					color: 'bg-purple-600',
					iconUrl:
						'https://img.daisyui.com/images/daisyui-logo/daisyui-logomark.svg',
				},
				{
					name: 'Redux',
					icon: 'R',
					color: 'bg-purple-500',
					iconUrl:
						'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
				},
				{
					name: 'Axios',
					icon: 'A',
					color: 'bg-purple-600',
					iconUrl: 'https://axios-http.com/assets/favicon.ico',
				},
			],
		},
		{
			name: t('categories.frontendGood'),
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
						d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
					/>
				</svg>
			),
			technologies: [
				{
					name: 'Angular',
					icon: 'A',
					color: 'bg-red-500',
					iconUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
				},
				{
					name: 'Next.js',
					icon: 'N',
					color: 'bg-black',
					iconUrl: 'https://nextjs.org/favicon.ico',
				},
				{
					name: 'TanStack Query',
					icon: 'T',
					color: 'bg-orange-500',
					iconUrl: 'https://tanstack.com/favicon.ico',
				},
				{
					name: 'Zustand',
					icon: 'Z',
					color: 'bg-purple-500',
					iconUrl: 'https://zustand-demo.pmnd.rs/favicon.ico',
				},
			],
		},
		{
			name: t('categories.backendStrong'),
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
					name: 'TypeScript',
					icon: 'TS',
					color: 'bg-blue-600',
					iconUrl:
						'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
				},
				{
					name: 'Node.js',
					icon: 'N',
					color: 'bg-green-600',
					iconUrl:
						'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
				},
				{
					name: 'Express.js',
					icon: 'E',
					color: 'bg-gray-600',
					isBlack: true,
					iconUrl:
						'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg',
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
					iconUrl: 'https://www.oracle.com/a/ocom/img/sql-dev3.svg',
				},
			],
		},
		{
			name: t('categories.backendGood'),
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
					name: '.NET Core',
					icon: 'N',
					color: 'bg-purple-600',
					iconUrl:
						'https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg',
				},
				{
					name: 'Java',
					icon: 'J',
					color: 'bg-orange-500',
					iconUrl:
						'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
				},
			],
		},
		{
			name: t('categories.devopsStrong'),
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
						d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
					/>
				</svg>
			),
			technologies: [
				{
					name: 'Route 53',
					icon: 'R',
					color: 'bg-green-500',
					iconUrl:
						'https://a.b.cdn.console.awsstatic.com/a/v1/HNYUD5LSRDESBT7YPQWDDWYOM2WXFQZBY44MBW4XDC4S2NIYAG4Q/icon/f5d2c00d40914bff4f82f29f9ef768bc-53a84099cf556710383a52b4612a8612.svg',
				},
				{
					name: 'Amplify',
					icon: 'A',
					color: 'bg-purple-500',
					iconUrl:
						'https://a.b.cdn.console.awsstatic.com/a/v1/FZWU7QTHKFSAFINJXIT6LM6IFFFZXRJNFG2Y5GLC3HF6JMOCJEVQ/icon/9da5a168cf8194c8ee5ed192a443d563-674375b53bc8ae94f48cfdb5c81e8363.svg',
				},
			],
		},
		{
			name: t('categories.devopsBasic'),
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
						d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
					/>
				</svg>
			),
			technologies: [
				{
					name: 'AWS',
					icon: 'A',
					color: 'bg-orange-500',
					iconUrl:
						'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
				},
				{
					name: 'EC2',
					icon: 'E',
					color: 'bg-orange-500',
					iconUrl:
						'https://a.b.cdn.console.awsstatic.com/a/v1/RHSMMGZKYJXPPNI2IOC6Z63HJEW4FD5ZYMKJSXD7HQ5IPUTQR2TQ/icon/d88319dfa5d204f019b4284149886c59-7d586ea82f792b61a8c87de60565133d.svg',
				},
				{
					name: 'S3',
					icon: 'S',
					color: 'bg-orange-500',
					iconUrl:
						'https://a.b.cdn.console.awsstatic.com/a/v1/DKY2SIL5N3MJQCULDNOQE7TKLNQIUXRSOHBJKJGQAHLZO7TLH3TQ/icon/c0828e0381730befd1f7a025057c74fb-43acc0496e64afba82dbc9ab774dc622.svg',
				},
				{
					name: 'RDS',
					icon: 'R',
					color: 'bg-orange-500',
					iconUrl:
						'https://a.b.cdn.console.awsstatic.com/a/v1/6JW3RZSXOZ4EFR2HZBU6IIOCUZEIFKRK6JZDCUDHQVQXRMAORYWQ/icon/1d374ed2a6bcf601d7bfd4fc3dfd3b5d-c9f69416d978016b3191175f35e59226.svg',
				},
				{
					name: 'Lambda',
					icon: 'L',
					color: 'bg-orange-500',
					iconUrl:
						'https://a.b.cdn.console.awsstatic.com/a/v1/BMZQS7MWY7VIUF7PXETK3ULHIXZQQOURXD3AK46KD7UE6WMRLUSA/icon/945f3fc449518a73b9f5f32868db466c-926961f91b072604c42b7f39ce2eaf1c.svg',
				},
				{
					name: 'Docker',
					icon: 'D',
					color: 'bg-blue-500',
					iconUrl:
						'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg',
				},
				{
					name: 'Serverless',
					icon: 'S',
					color: 'bg-red-500',
					iconUrl:
						'https://www.vectorlogo.zone/logos/serverless/serverless-icon.svg',
				},
				{
					name: 'Terraform',
					icon: 'T',
					color: 'bg-purple-500',
					iconUrl:
						'https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg',
				},
			],
		},
		{
			name: t('categories.mobileGood'),
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
						d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
					/>
				</svg>
			),
			technologies: [
				{
					name: 'Flutter',
					icon: 'F',
					color: 'bg-blue-500',
					iconUrl:
						'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg',
				},
				{
					name: 'Dart',
					icon: 'D',
					color: 'bg-blue-600',
					iconUrl:
						'https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg',
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
					name: 'ChatGPT',
					icon: 'C',
					color: 'bg-green-500',
					iconUrl: 'https://cdn.oaistatic.com/assets/favicon-o20kmmos.svg',
				},
			],
		},
	];

	return (
		<section id="skills" className="bg-base-100 px-4 py-28">
			<div className="container mx-auto max-w-6xl">
				<SectionHeader title={t('title')} subtitle={t('subtitle')} />

				<div className="grid gap-8 md:grid-cols-2">
					{skillCategories.map((category, index) => (
						<SkillCard key={index} title={category.name} icon={category.icon}>
							<div className="grid grid-cols-4 gap-4">
								{category.technologies.map((tech, techIndex) => (
									<TechnologyIcon
										key={techIndex}
										icon={tech.icon}
										color={tech.color}
										iconUrl={tech.iconUrl}
										isBlack={tech.isBlack}
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
