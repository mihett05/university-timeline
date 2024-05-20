import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import Markdown from 'react-markdown';
import { Link as RouterLink, useParams } from 'react-router-dom';
import ArchiveBreadcrumbs from '~/shared/archive-breadcrumbs';
import { translate } from '~/shared/links';
import { ITeacher } from '~/shared/types';

type TeacherProps = {
  teacher: ITeacher;
};

const Teacher = ({ teacher }: TeacherProps) => {
  return (
    <Box>
      <ArchiveBreadcrumbs />
      <Box
        sx={{
          mx: '5%',
        }}
      >
        <Typography fontWeight="bold">{translate(teacher.name)}</Typography>
        <img src={teacher.logo} />
        <Markdown>{teacher.info}</Markdown>
      </Box>
    </Box>
  );
};

export default Teacher;
