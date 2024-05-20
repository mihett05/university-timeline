import { Box, Grid, Typography } from '@mui/material';
import Markdown from 'react-markdown';

import DepartmentList from '../department/DepartmentList';
import TeacherList from '../teacher/TeacherList';
import ArchiveBreadcrumbs from '~/shared/archive-breadcrumbs';
import { IFaculty } from '~/shared/types';

type FacultyProps = {
  faculty: IFaculty;
};

const Faculty = ({ faculty }: FacultyProps) => {
  const facultyName = faculty.name.trim().split('_').join(' ');
  return (
    <Box>
      <ArchiveBreadcrumbs />
      <Box sx={{ margin: '5%' }}>
        <Typography fontWeight={500} paddingBottom={3}>
          {facultyName}
        </Typography>
        <Grid container>
          <img src={faculty.logo} alt="Фотография факультета" />
          <Typography variant="body1" paddingLeft={3}>
            <Markdown>{faculty.info}</Markdown>
          </Typography>
        </Grid>
      </Box>
      <Grid container sx={{ textAlign: 'center' }}>
        <Grid xs={6} item={true}>
          <Typography>Кафедры факультета:</Typography>
          <DepartmentList departments={faculty.departments} />
        </Grid>
        <Grid xs={6} item={true}>
          <Typography>Преподаватели факультета:</Typography>
          <TeacherList teachers={faculty.deanery} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Faculty;
