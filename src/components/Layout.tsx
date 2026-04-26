import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import SocialMediaBar from './SocialMediaBar';
import { useTheme } from '../hooks/useTheme';
import Seo from './Seo';

interface LayoutProps {
	children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	const { isDarkMode } = useTheme();

	return (
		<div className="bg-base-100 relative min-h-screen overflow-x-hidden">
			<div
				aria-hidden="true"
				className="pointer-events-none fixed inset-0 z-0 transition-all duration-300"
				style={{
					background: isDarkMode
						? `
							radial-gradient(circle at top left, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 42%),
							radial-gradient(circle at bottom right, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0) 40%),
							linear-gradient(180deg, rgba(255,255,255,0.022) 0%, rgba(255,255,255,0.012) 48%, rgba(255,255,255,0.02) 100%)
						`
						: `
							radial-gradient(circle at top left, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0) 36%),
							radial-gradient(circle at bottom right, rgba(230,230,230,0.55) 0%, rgba(230,230,230,0) 42%),
							linear-gradient(180deg, #ffffff 0%, #f7f7f7 48%, #ededed 100%)
						`,
				}}
			/>
			<div className="relative z-10">
				<Seo />
				<Header />
				<SocialMediaBar />
				<main className="relative">{children}</main>
				<Footer />
			</div>
		</div>
	);
}
