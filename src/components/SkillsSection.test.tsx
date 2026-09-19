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

	it('opens AWS details without changing the current URL', () => {
		window.history.replaceState({}, '', '/es/');

		render(<SkillsSection />);

		const awsDetailsLink = screen.getByRole('link', {
			name: 'awsDetails.open',
		});
		const currentUrl = window.location.href;

		expect(awsDetailsLink).toHaveAttribute('href', '#aws-details');

		fireEvent.click(awsDetailsLink);

		expect(
			screen.getByRole('dialog', { name: 'awsDetails.title' }),
		).toBeInTheDocument();
		expect(window.location.href).toBe(currentUrl);
	});

	it('does not auto-open AWS details from the URL path', () => {
		window.history.replaceState({}, '', '/es/amazon-web-services/');

		render(<SkillsSection />);

		expect(
			screen.queryByRole('dialog', { name: 'awsDetails.title' }),
		).not.toBeInTheDocument();
	});

});
