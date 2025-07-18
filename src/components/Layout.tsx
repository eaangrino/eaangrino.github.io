import type { ReactNode } from 'react';
import Header from './Header';
import SocialMediaBar from './SocialMediaBar';
import ScrollIndicator from './ScrollIndicator';
import Footer from './Footer';
import ConstructionNotification from './ConstructionNotification';

interface LayoutProps {
	children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<div className="bg-base-100 min-h-screen">
			<Header />
			<SocialMediaBar />
			<main className="relative">{children}</main>
			<ScrollIndicator />
			<ConstructionNotification />
			<Footer />
		</div>
	);
}
