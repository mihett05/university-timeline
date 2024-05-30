import { createBrowserRouter } from 'react-router-dom';
import ArchivePage from '~/pages/archive';
import DepartmentPage from '~/pages/department';
import FacultyPage from '~/pages/faculty';
import MapPage from '~/pages/map';
import TeacherPage from '~/pages/teacher';
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
  {
    path: '/archive/:faculty',
    element: <FacultyPage />,
  },
  {
    path: '/archive/:faculty/departments/:department',
    element: <DepartmentPage />,
  },
  {
    path: '/archive/:faculty/teachers/:teacher',
    element: <TeacherPage />,
  },
  {
    path: '/map',
    element: <MapPage />,
  },
]);
