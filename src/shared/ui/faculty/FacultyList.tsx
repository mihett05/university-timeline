import { Grid, useMediaQuery } from '@mui/material';
import FacultyCard from './FacultyCard';
import type { IFaculty } from '~/shared/types';

type FacultyListProps = {
  faculties: IFaculty[];
};

const FacultyList = ({ faculties }: FacultyListProps) => {
  const isDesktop = useMediaQuery('(min-width:769px)');
  return (
    <Grid container spacing={2} sx={{ mx: 'auto', width: '100%' }}>
      {faculties.map((faculty) => {
        return (
          <Grid xs={isDesktop ? 3 : 6} item={true} key={faculty.name + '/' + faculty.logo}>
            <FacultyCard
              key={faculty.name + '.' + faculty.logo}
              name={faculty.name}
              logo={faculty.logo}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default FacultyList;
