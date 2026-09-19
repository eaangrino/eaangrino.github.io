import {fireEvent, render, screen} from '@testing-library/react';
import ExperienceTimeline from './ExperienceTimeline';

jest.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}));

beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(() => ({matches: false})),
  });
});

describe('ExperienceTimeline', () => {
  it('keeps the desktop cards alternating and exposes an accessible scroll region', () => {
    render(<ExperienceTimeline />);

    const cards = screen.getAllByRole('article');

    expect(cards[0]).toHaveAttribute('data-timeline-side', 'above');
    expect(cards[1]).toHaveAttribute('data-timeline-side', 'below');
    expect(cards[2]).toHaveAttribute('data-timeline-side', 'above');
    expect(screen.getByRole('region', {name: 'timeline.label'})).toBeInTheDocument();
  });

  it('synchronizes the navigation controls after manual timeline scrolling', () => {
    render(<ExperienceTimeline />);

    const cards = screen.getAllByRole('article');
    const scroller = screen.getByRole('region', {name: 'timeline.label'});
    const previous = screen.getByRole('button', {name: 'timeline.previous'});
    const next = screen.getByRole('button', {name: 'timeline.next'});

    Object.defineProperty(cards[0], 'offsetLeft', {configurable: true, value: 0});
    Object.defineProperty(cards[1], 'offsetLeft', {configurable: true, value: 320});
    Object.defineProperty(cards[2], 'offsetLeft', {configurable: true, value: 640});
    Object.defineProperty(cards[3], 'offsetLeft', {configurable: true, value: 960});
    Object.defineProperty(scroller, 'scrollLeft', {configurable: true, writable: true, value: 640});

    expect(previous).toBeDisabled();

    fireEvent.scroll(scroller);

    expect(previous).not.toBeDisabled();
    expect(next).not.toBeDisabled();
  });
});
