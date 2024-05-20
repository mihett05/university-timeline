import { createBrowserRouter } from 'react-router-dom';
import ArchivePage from '~/pages/archive';
import TimeLinePage from '~/pages/timeline';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <TimeLinePage />,
  },
  {
    path: '/archive',
    element: <ArchivePage />,
  },
]);
