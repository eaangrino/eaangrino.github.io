import Header from './Header';
import SocialMediaBar from './SocialMediaBar';
import ScrollIndicator from './ScrollIndicator';
import Footer from './Footer';
// import ConstructionNotification from './ConstructionNotification';
import { Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
	const location = useLocation();
	return (
		<div className="bg-base-100 min-h-screen">
			<Header />
			<SocialMediaBar />
			<main className="relative">
				<Outlet />
			</main>
			{location.pathname !== '/portfolio' && <ScrollIndicator />}

			{/* <ConstructionNotification /> */}
			{location.pathname !== '/portfolio' && <Footer />}
		</div>
	);
}
