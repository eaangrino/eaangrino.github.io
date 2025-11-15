import { createHashRouter } from 'react-router-dom';
import { Layout } from './components';
import Home from './pages/Home';
import Portfolio from './components/Portfolio';
import PortfolioPreview from './components/PortfolioPreview';

export const router = createHashRouter([
	{
		path: '',
		element: <Layout />,
		children: [
			{
				path: '',
				element: <Home />,
			},
			{
				path: 'portfolio',
				element: <Portfolio />,
				children: [
					{
						path: ':projectId',
						element: <PortfolioPreview />,
					},
				],
			},
		],
	},
]);
