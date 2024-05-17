import { Grid, useMediaQuery } from '@mui/material';
import { useParams } from 'react-router-dom';
import TeacherCard from './TeacherCard';

const MockTeacher = [
  {
    name: 'Король',
    picture:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FSh5TyYxGTPE%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=7fb4d9e047435e02340460f76d4636a9583020c93977589f39cf17fa2ce58265&ipo=images',
  },
  {
    name: 'Псина Старая',
    picture:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.chitaitext.ru%2Fupload%2Fiblock%2Fb42%2Ffirmennyy-znak.jpg&f=1&nofb=1&ipt=6bc7421867820604f15146428d2e0d987b44fc09cb46071b655079a1401411fb&ipo=images',
  },
];

const TeacherList = () => {
  const isDesktop = useMediaQuery('(min-width:769px)');
  const { faculty } = useParams();
  return (
    <Grid container mx={isDesktop ? '10%' : ''}>
      {MockTeacher.map((teacher: any) => {
        return (
          <Grid xs={isDesktop ? 3 : 6} item={true} key={faculty + '/' + teacher.name}>
            <TeacherCard
              key={faculty + '.' + teacher.name}
              name={teacher.name}
              picture={teacher.picture}
              faculty={faculty}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default TeacherList;
