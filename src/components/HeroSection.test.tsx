import { fireEvent, render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';

describe('HeroSection', () => {
	it('keeps the greeting separate and uses the name as the main heading', () => {
		render(<HeroSection />);

		expect(screen.queryByText('eyebrow')).not.toBeInTheDocument();
		expect(screen.getByText('greeting')).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { level: 1, name: 'Edgar Angrino' }),
		).toBeInTheDocument();
	});

	it('keeps mobile hero actions sized to their content instead of stretching', () => {
		render(<HeroSection videoId="abc123" />);

		const playButton = screen.getByRole('button', { name: 'playVideo' });
		const downloadLink = screen.getByRole('link', { name: 'about:downloadCV' });
		const actions = playButton.parentElement;

		expect(actions).toBe(downloadLink.parentElement);
		expect(actions).toHaveClass('items-start');
	});

	it('shows the portrait poster and keeps YouTube unloaded when there is no video id', () => {
		const { container } = render(<HeroSection />);

		const poster = container.querySelector('img[src="/portrait_hero.png"]');
		expect(poster).toBeInTheDocument();
		expect(screen.queryByRole('button', { name: 'playVideo' })).not.toBeInTheDocument();
		expect(container.querySelector('iframe')).not.toBeInTheDocument();
		expect(screen.getByRole('link', { name: 'about:downloadCV' })).toBeInTheDocument();
	});

	it('loads the privacy-enhanced YouTube embed only after the play button is pressed', () => {
		const { container } = render(<HeroSection videoId="abc123" />);

		expect(container.querySelector('iframe')).not.toBeInTheDocument();

		fireEvent.click(screen.getByRole('button', { name: 'playVideo' }));

		const iframe = container.querySelector('iframe');
		expect(iframe).toHaveAttribute(
			'src',
			'https://www.youtube-nocookie.com/embed/abc123?autoplay=1&rel=0',
		);

		fireEvent.click(screen.getByRole('button', { name: 'closeVideo' }));
		expect(container.querySelector('iframe')).not.toBeInTheDocument();
	});
});
