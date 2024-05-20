import { Grid, useMediaQuery } from '@mui/material';
import { useParams } from 'react-router-dom';
import TeacherCard from './TeacherCard';
import { ITeacher } from '~/shared/types';
import { deaneryUrl, teacherUrl } from '~/shared/links';

type TeacherListProps = {
  teachers: ITeacher[];
};

const TeacherList = ({ teachers }: TeacherListProps) => {
  const isDesktop = useMediaQuery('(min-width:769px)');
  const { faculty, department } = useParams();
  return (
    <Grid container mx={isDesktop ? '10%' : ''} spacing={1}>
      {teachers.map((teacher) => {
        return (
          <Grid xs={isDesktop ? 3 : 12} item key={faculty + '/' + teacher.name}>
            <TeacherCard
              key={faculty + '.' + teacher.name}
              name={teacher.name}
              picture={teacher.logo}
              link={
                department
                  ? teacherUrl(faculty, department, teacher.name)
                  : deaneryUrl(faculty, teacher.name)
              }
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default TeacherList;
