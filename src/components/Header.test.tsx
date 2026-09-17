import { fireEvent, render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
	it('includes projects in the navigation and scrolls to the projects section', () => {
		const projects = document.createElement('section');
		projects.id = 'projects';
		projects.scrollIntoView = jest.fn();
		document.body.appendChild(projects);

		render(<Header />);

		const projectsButton = screen.getByRole('button', {
			name: 'navigation.projects',
		});

		fireEvent.click(projectsButton);

		expect(projects.scrollIntoView).toHaveBeenCalledWith({
			behavior: 'smooth',
			block: 'start',
		});

		projects.remove();
	});

	it('uses experience as the final primary navigation destination', () => {
		const experience = document.createElement('section');
		experience.id = 'experience';
		experience.scrollIntoView = jest.fn();
		document.body.appendChild(experience);

		render(<Header />);

		const experienceButton = screen.getByRole('button', {
			name: 'navigation.experience',
		});

		fireEvent.click(experienceButton);

		expect(experience.scrollIntoView).toHaveBeenCalledWith({
			behavior: 'smooth',
			block: 'start',
		});
		expect(
			screen.queryByRole('button', { name: 'navigation.about' }),
		).not.toBeInTheDocument();

		experience.remove();
	});
});
