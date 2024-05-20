import { useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import FacultyCard from './FacultyCard';
import type { IFaculty } from '~/shared/types';

type FacultyListProps = {
  faculties: IFaculty[];
};

const FacultyList = ({ faculties }: FacultyListProps) => {
  const isDesktop = useMediaQuery('(min-width:769px)');
  return (
    <Grid container spacing={2} sx={isDesktop ? { m: 5 } : {}}>
      {faculties.map((faculty) => {
        return (
          <Grid xs={isDesktop ? 2 : 6} key={faculty.name + '/' + faculty.logo}>
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
