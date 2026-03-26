import Header from './Header';
import Footer from './Footer';
import SocialMediaBar from './SocialMediaBar';
import {
	Outlet,
	useLocation,
} from 'react-router-dom';

export default function Layout() {
	const location = useLocation();
	const isPortfolioRoute = location.pathname.startsWith('/portfolio');

	return (
		<div className="bg-base-100 min-h-screen">
			<Header />
			<SocialMediaBar />
			<main className="relative">
				<Outlet />
			</main>
			{!isPortfolioRoute && <Footer />}
		</div>
	);
}
