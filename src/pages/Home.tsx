import HeroSection from '../components/HeroSection';
import ProjectsShowcase from '../components/ProjectsShowcase';

export default function Home() {
	return (
		<article className="from-base-100 via-base-200/40 to-base-100 bg-gradient-to-b">
			<HeroSection />
			<ProjectsShowcase />
		</article>
	);
}
