import { createHashRouter } from 'react-router-dom';
import { Layout } from './components';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';

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
		],
	},
]);
