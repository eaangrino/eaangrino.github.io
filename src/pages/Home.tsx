import AboutPageContent from '../components/AboutPageContent';
import HeroSection from '../components/HeroSection';
import ProjectsShowcase from '../components/ProjectsShowcase';
import SkillsSection from '../components/SkillsSection';

// Add only the YouTube video ID when the presentation is ready.
const HERO_VIDEO_ID = '';

export default function Home() {
	return (
		<article className="from-base-100 via-base-200/40 to-base-100 bg-gradient-to-b">
			<HeroSection videoId={HERO_VIDEO_ID} posterSrc="/portrait_hero_alt.png" />
			<ProjectsShowcase />
			<SkillsSection />
			<AboutPageContent />
		</article>
	);
}
