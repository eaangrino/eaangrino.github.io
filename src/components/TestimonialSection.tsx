import SectionHeader from './SectionHeader';
import TestimonialCard from './TestimonialCard';

interface Testimonial {
	id: number;
	name: string;
	role: string;
	image: string;
	rating: number;
	text: string;
}

export default function TestimonialSection() {
	const testimonials: Testimonial[] = [
		{
			id: 1,
			name: 'Houda Jemni',
			role: 'Client',
			image: '/testimonials/houda-jemni.jpg',
			rating: 5,
			text: 'I get a good impression, I carry put my project with all possible quality and attention and support 24 hours a day.',
		},
		{
			id: 2,
			name: 'Ismail Ben Youssef',
			role: 'Client',
			image: '/testimonials/ismail-ben-youssef.jpg',
			rating: 5,
			text: 'I get a good impression, I carry put my project with all possible quality and attention and support 24 hours a day.',
		},
	];

	return (
		<section className="bg-base-200 px-4 py-20">
			<div className="container mx-auto max-w-6xl">
				<SectionHeader title="Testimonial" subtitle="My client saying" />

				<div className="grid gap-8 md:grid-cols-2 lg:gap-12">
					{testimonials.map((testimonial) => (
						<TestimonialCard
							key={testimonial.id}
							name={testimonial.name}
							role={testimonial.role}
							image={testimonial.image}
							rating={testimonial.rating}
							text={testimonial.text}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
