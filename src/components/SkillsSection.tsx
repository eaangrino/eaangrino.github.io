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
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-6">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
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
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-6">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
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
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-6">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z"
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
			],
		},
		{
			name: t('categories.backendGood'),
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
						d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z"
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
				{
					name: 'NestJS',
					icon: 'N',
					color: 'bg-red-500',
					iconUrl: 'https://nestjs.com/logo-small-gradient.d792062c.svg',
				},
				{
					name: 'TypeORM',
					icon: 'T',
					color: 'bg-purple-500',
					iconUrl: '/typeorm.svg',
				},
				{
					name: 'Sequelize',
					icon: 'S',
					color: 'bg-purple-500',
					iconUrl: 'https://sequelize.org/img/logo.svg',
				},
			],
		},
		{
			name: t('categories.databaseGood'),
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
						d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
					/>
				</svg>
			),
			technologies: [
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
			],
		},
		{
			name: t('categories.devopsStrong'),
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
						d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
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
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-6">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
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
				{
					name: 'DynamoDB',
					icon: 'D',
					color: 'bg-orange-500',
					iconUrl:
						'https://a.b.cdn.console.awsstatic.com/a/v1/AN2R6BU3DBLYCROPWJWYQWM62AYYLMXTM5V7AHNGQIU34L2VIEEA/icon/6f419a45e63123b4c16bd679549610f6-87862c68693445999110bbd6a467ce88.svg',
				},
			],
		},
		{
			name: t('categories.mobileBasic'),
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
				{
					name: 'Figma',
					icon: 'F',
					color: 'bg-purple-500',
					iconUrl:
						'https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/figma/figma-original.svg',
				},
				{
					name: 'DeepSeek',
					icon: 'D',
					color: 'bg-purple-500',
					iconUrl: '/deepseek.svg',
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
							<div className="grid grid-cols-5 gap-4">
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
