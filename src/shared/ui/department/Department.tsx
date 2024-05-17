import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import { Link as RouterLink, useParams } from 'react-router-dom';

const Department = () => {
  const { department, faculty } = useParams();
  const departmentName = department?.trim().split('_').join(' ');
  const facultyName = faculty?.trim().split('_').join(' ');
  return (
    <Box>
      <Breadcrumbs
        sx={{
          width: '100%',
          margin: '5%',
          mt: 5,
          fontWeight: 600,
        }}
      >
        <Link component={RouterLink} to="/archive" underline="hover">
          Архив
        </Link>
        <Link component={RouterLink} to={'/archive/' + faculty} underline="hover">
          {facultyName}
        </Link>
        <Link
          component={RouterLink}
          to={'/archive/' + faculty + '/departments/' + department}
          underline="hover"
        >
          {departmentName}
        </Link>
      </Breadcrumbs>
      <Typography>{departmentName}</Typography>
    </Box>
  );
};

export default Department;
