import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Areas from './pages/Areas';
import AreaTemplate from './pages/AreaTemplate';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import { AREAS } from './data/areas';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'areas',
        element: <Areas />,
      },
      {
        path: 'locksmith/:slug',
        element: <AreaTemplate />,
        getStaticPaths: () => AREAS.map((a) => `/locksmith/${a.slug}`),
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: '404',
        element: <NotFound />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
