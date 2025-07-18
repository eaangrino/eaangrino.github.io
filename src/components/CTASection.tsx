import CTACard from './CTACard';

export default function CTASection() {
	return (
		<section className="bg-base-100 px-4 py-20">
			<div className="container mx-auto max-w-6xl">
				<CTACard
					title="You have a new project"
					description="Contact me now and get 30% discount on your new project."
					buttonText="Contact Me"
					buttonHref="/contact"
				/>
			</div>
		</section>
	);
}
