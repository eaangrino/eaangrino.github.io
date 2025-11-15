import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
// import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
// import PortfolioSection from '../components/PortfolioSection';
// import CTASection from '../components/CTASection';
// import TestimonialSection from '../components/TestimonialSection';
// import ContactSection from '../components/ContactSection';

export default function Home() {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<SkillsSection />
			<ExperienceSection />
			{/* <ServicesSection /> */}
			{/* <PortfolioSection /> */}
			{/* <TestimonialSection /> */}
			{/* <CTASection /> */}
			<ContactSection />
		</>
	);
}
