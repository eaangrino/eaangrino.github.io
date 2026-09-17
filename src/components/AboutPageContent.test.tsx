import { render, screen } from '@testing-library/react';
import AboutPageContent from './AboutPageContent';

describe('AboutPageContent', () => {
	it('keeps experience and about as separate semantic destinations', () => {
		const { container } = render(<AboutPageContent />);

		const experience = container.querySelector('section#experience');
		const about = container.querySelector('section#about');

		expect(experience).toBeInTheDocument();
		expect(about).toBeInTheDocument();
		expect(experience).not.toBe(about);
		expect(screen.getByText('experience:eyebrow')).toBeInTheDocument();
	});

	it('keeps the about copy concise and limited to two supporting paragraphs', () => {
		render(<AboutPageContent />);

		expect(screen.getByText('about:content.paragraph1')).toBeInTheDocument();
		expect(screen.getByText('about:content.paragraph2')).toBeInTheDocument();
		expect(screen.queryByText('about:content.paragraph3')).not.toBeInTheDocument();
	});
});
