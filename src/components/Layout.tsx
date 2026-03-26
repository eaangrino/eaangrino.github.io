import Header from './Header';
import Footer from './Footer';
import SocialMediaBar from './SocialMediaBar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
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
