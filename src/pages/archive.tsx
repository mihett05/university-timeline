import { useLoaderData } from 'react-router-dom';
import FacultyList from '~/shared/ui/faculty/FacultyList';
import type { IFaculty } from '~/shared/types';

const ArchivePage = () => {
  const faculties = useLoaderData() as IFaculty[];
  return <FacultyList faculties={faculties} />;
};

export default ArchivePage;
