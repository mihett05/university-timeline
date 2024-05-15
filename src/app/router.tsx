import { createBrowserRouter } from 'react-router-dom';
import TimeLinePage from '~/pages/timeline';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <TimeLinePage />,
  },
]);
