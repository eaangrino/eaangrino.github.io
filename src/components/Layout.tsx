import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import SocialMediaBar from './SocialMediaBar';
import { Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
	}, [location.pathname]);

	return (
		<div className="bg-base-100 min-h-screen">
			<Header />
			<SocialMediaBar />
			<main className="relative">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
