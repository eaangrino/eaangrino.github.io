import { fireEvent, render, screen } from '@testing-library/react';
import ExperienceTimeline, { type ExperienceTimelineEntry } from './ExperienceTimeline';

const items: ExperienceTimelineEntry[] = [
	{
		id: 'education-sena',
		title: 'SENA',
		location: 'Cali',
		dates: '2017 - 2019',
		type: 'education',
	},
	{
		id: 'work-ip-total',
		title: 'IP Total',
		location: 'Cali',
		dates: '2018 - 2019',
		type: 'work',
	},
	{
		id: 'work-applivio',
		title: 'Applivio',
		location: 'Remote',
		dates: '2020 - Present',
		type: 'work',
		isCurrentWork: true,
	},
];

describe('ExperienceTimeline', () => {
	it('alternates timeline cards above and below on desktop while keeping accessible controls', () => {
		render(<ExperienceTimeline items={items} />);

		const cards = screen.getAllByRole('article');

		expect(cards[0]).toHaveAttribute('data-timeline-side', 'above');
		expect(cards[1]).toHaveAttribute('data-timeline-side', 'below');
		expect(cards[2]).toHaveAttribute('data-timeline-side', 'above');
		expect(
			screen.getByRole('region', { name: 'timeline.label' }),
		).toBeInTheDocument();
	});

	it('hides the native scrollbar and reserves space around timeline card shadows', () => {
		const { container } = render(<ExperienceTimeline items={items} />);

		const scroller = screen.getByRole('region', { name: 'timeline.label' });
		const track = scroller.firstElementChild;

		expect(scroller).toHaveClass('timeline-scrollbar-hidden');
		expect(scroller).toHaveClass('pt-8');
		expect(scroller).toHaveClass('pb-14');
		expect(track).toHaveClass('px-10');
		expect(container.querySelector('[data-timeline-side="above"]')).toBeInTheDocument();
	});

	it('advances one timeline item at a time with the navigation buttons', () => {
		render(<ExperienceTimeline items={items} />);

		const previous = screen.getByRole('button', {
			name: 'timeline.previous',
		});
		const next = screen.getByRole('button', { name: 'timeline.next' });

		expect(previous).toBeDisabled();

		fireEvent.click(next);

		expect(previous).not.toBeDisabled();
	});
});
