import { fireEvent, render, screen } from '@testing-library/react';
import SkillsSection from './SkillsSection';

jest.mock('../hooks/useTheme', () => ({
	useTheme: () => ({
		isDarkMode: true,
		toggleTheme: jest.fn(),
	}),
}));

describe('SkillsSection', () => {
	it('renders SKILL.md and AGENTS.md as dark-mode compatible tools', () => {
		render(<SkillsSection />);

		const skillIcon = screen.getByRole('img', { name: 'SKILL.md logo' });
		const agentsIcon = screen.getByRole('img', { name: 'AGENTS.md logo' });

		expect(skillIcon).toHaveAttribute('src', '/skill_md_alt.svg');
		expect(skillIcon).not.toHaveClass('brightness-0', 'invert');
		expect(agentsIcon).toHaveAttribute('src', '/agents_md.svg');
		expect(agentsIcon).toHaveClass('brightness-0', 'invert');
	});

	it('opens Node.js usage details from the technology card', () => {
		render(<SkillsSection />);

		const nodeDetailsLink = screen.getByRole('link', {
			name: 'nodeDetails.open',
		});

		expect(nodeDetailsLink).toHaveAttribute('href', '#nodejs-details');

		fireEvent.click(nodeDetailsLink);

		expect(
			screen.getByRole('dialog', { name: 'nodeDetails.title' }),
		).toBeInTheDocument();
	});

});
