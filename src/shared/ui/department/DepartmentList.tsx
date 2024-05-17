import { Grid, useMediaQuery } from '@mui/material';
import { useParams } from 'react-router-dom';
import DepartmentCard from './DepartmentCard';

const DepartmentMock = ['Lorem ipsum', 'Бебра-кадабра', 'Прикладная математика и информатика'];

const DepartmentList = () => {
  const isDesktop = useMediaQuery('(min-width:769px)');
  const { faculty } = useParams();
  return (
    <Grid container mx={isDesktop ? '10%' : ''}>
      {DepartmentMock.map((department: any) => {
        return (
          <Grid xs={isDesktop ? 3 : 6} item={true} key={faculty + '/' + department}>
            <DepartmentCard key={faculty + '.' + department} name={department} faculty={faculty} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default DepartmentList;
