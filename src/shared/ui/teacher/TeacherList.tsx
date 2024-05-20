import { Grid, useMediaQuery } from '@mui/material';
import { useParams } from 'react-router-dom';
import TeacherCard from './TeacherCard';

const MockTeacher = [
  {
    name: 'Король',
    picture:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.chitaitext.ru%2Fupload%2Fiblock%2Fb42%2Ffirmennyy-znak.jpg&f=1&nofb=1&ipt=6bc7421867820604f15146428d2e0d987b44fc09cb46071b655079a1401411fb&ipo=images',
  },
  {
    name: 'Псина Старая',
    picture:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.chitaitext.ru%2Fupload%2Fiblock%2Fb42%2Ffirmennyy-znak.jpg&f=1&nofb=1&ipt=6bc7421867820604f15146428d2e0d987b44fc09cb46071b655079a1401411fb&ipo=images',
  },
  {
    name: 'Кто-то еще',
    picture:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.chitaitext.ru%2Fupload%2Fiblock%2Fb42%2Ffirmennyy-znak.jpg&f=1&nofb=1&ipt=6bc7421867820604f15146428d2e0d987b44fc09cb46071b655079a1401411fb&ipo=images',
  },
];

const TeacherList = () => {
  const isDesktop = useMediaQuery('(min-width:769px)');
  const { faculty } = useParams();
  return (
    <Grid container mx={isDesktop ? '10%' : ''} spacing={1}>
      {MockTeacher.map((teacher: any) => {
        return (
          <Grid xs={isDesktop ? 3 : 12} item={true} key={faculty + '/' + teacher.name}>
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
