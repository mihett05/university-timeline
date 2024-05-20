import { Box, Breadcrumbs, Grid, Link, Typography } from '@mui/material';
import { Link as RouterLink, useParams } from 'react-router-dom';
import DepartmentList from '../department/DepartmentList';
import TeacherList from '../teacher/TeacherList';

const Faculty = () => {
  //   const isDesktop = useMediaQuery('(min-width:769px)');
  const { faculty } = useParams();
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
        <Link component={RouterLink} to="/archive/Факультет" underline="hover">
          {facultyName}
        </Link>
      </Breadcrumbs>
      <Box sx={{ margin: '5%' }}>
        <Typography fontWeight={500} paddingBottom={3}>
          {facultyName}
        </Typography>
        <Grid container>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.chitaitext.ru%2Fupload%2Fiblock%2Fb42%2Ffirmennyy-znak.jpg&f=1&nofb=1&ipt=6bc7421867820604f15146428d2e0d987b44fc09cb46071b655079a1401411fb&ipo=images"
            alt="Фотография факультета"
            width={300}
          />
          <Typography variant="body1" paddingLeft={3}>
            Директор/Декан: Левко С.В. <br />
            Дата Основания: 13.37.69 по календарю Майя
          </Typography>
        </Grid>
      </Box>
      <Grid container sx={{ textAlign: 'center' }}>
        <Grid xs={6} item={true}>
          <Typography>Кафедры факультета:</Typography>
          <DepartmentList />
        </Grid>
        <Grid xs={6} item={true}>
          <Typography>Преподаватели факультета:</Typography>
          <TeacherList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Faculty;
