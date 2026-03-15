import { createHashRouter } from 'react-router-dom';
import { Layout } from './components';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
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
				path: 'about',
				element: <About />,
			},
			{
				path: 'skills',
				element: <Skills />,
			},
			{
				path: 'experience',
				element: <Experience />,
			},
			{
				path: 'contact',
				element: <Contact />,
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
