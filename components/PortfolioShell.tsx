import Header from './Header';
import HeroSection from './HeroSection';
import ProjectsShowcase from './ProjectsShowcase';
import SkillsSection from './SkillsSection';
import AboutSection from './AboutSection';
import SocialMediaBar from './SocialMediaBar';
import Footer from './Footer';

export default function PortfolioShell(){
  return <div className="bg-base-100 relative min-h-screen overflow-x-hidden"><div aria-hidden className="floating-surface pointer-events-none fixed inset-0 z-0"/><div className="relative z-10"><Header/><SocialMediaBar/><main><article className="from-base-100 via-base-200/40 to-base-100 bg-gradient-to-b"><HeroSection/><ProjectsShowcase/><SkillsSection/><AboutSection/></article></main><Footer/></div></div>;
}
