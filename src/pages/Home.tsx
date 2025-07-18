import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import QualificationSection from '../components/QualificationSection';
import ServicesSection from '../components/ServicesSection';
// import PortfolioSection from '../components/PortfolioSection';
// import CTASection from '../components/CTASection';
// import TestimonialSection from '../components/TestimonialSection';
// import ContactSection from '../components/ContactSection';

export default function Home() {
	return (
		<Layout>
			<HeroSection />
			<AboutSection />
			<SkillsSection />
			<QualificationSection />
			<ServicesSection />
			{/* <PortfolioSection /> */}
			{/* <TestimonialSection /> */}
			{/* <CTASection /> */}
			{/* <ContactSection /> */}
		</Layout>
	);
}
