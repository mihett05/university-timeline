import { Box, Typography } from '@mui/material';
import Markdown from 'react-markdown';
import ArchiveBreadcrumbs from '~/shared/archive-breadcrumbs';
import { translate } from '~/shared/links';
import { IDepartment } from '~/shared/types';
import TeacherList from '../teacher/TeacherList';

type DepartmentProps = {
  department: IDepartment;
};

const Department = ({ department }: DepartmentProps) => {
  return (
    <Box>
      <ArchiveBreadcrumbs />
      <Box
        sx={{
          mx: '5%',
        }}
      >
        <Typography fontWeight="bold">{translate(department.name)}</Typography>
        <Markdown>{department.info}</Markdown>
        <TeacherList teachers={department.teachers} />
      </Box>
    </Box>
  );
};

export default Department;
