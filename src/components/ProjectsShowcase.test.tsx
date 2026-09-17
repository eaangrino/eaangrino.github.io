import { fireEvent, render, screen } from '@testing-library/react';
import ProjectsShowcase from './ProjectsShowcase';

describe('ProjectsShowcase', () => {
	it('shows five recent projects first and lets the visitor expand and collapse the full list', () => {
		render(<ProjectsShowcase />);

		expect(screen.getByText('project.itemTen.title')).toBeInTheDocument();
		expect(screen.getByText('project.itemSix.title')).toBeInTheDocument();
		expect(screen.queryByText('project.itemFive.title')).not.toBeInTheDocument();

		fireEvent.click(screen.getByRole('button', { name: 'home:projects.showAll' }));
		expect(screen.getByText('project.itemFive.title')).toBeInTheDocument();

		fireEvent.click(screen.getByRole('button', { name: 'home:projects.showLess' }));
		expect(screen.queryByText('project.itemFive.title')).not.toBeInTheDocument();
	});
});
