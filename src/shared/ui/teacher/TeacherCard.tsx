import { Card, CardContent, CardMedia } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { translate } from '~/shared/links';

interface ITeacherCard {
  name: string;
  picture: string;
  link: string;
}

const TeacherCard = ({ name, picture, link }: ITeacherCard) => {
  return (
    <Card sx={{ maxWidth: 350, margin: 4, height: 345, mx: 'auto' }}>
      <CardMedia sx={{ height: 200 }} image={picture} title={name} />
      <CardContent sx={{ textAlign: 'center', padding: 5 }}>
        <RouterLink to={link} style={{ textDecoration: 'none' }}>
          {translate(name)}
        </RouterLink>
      </CardContent>
    </Card>
  );
};

export default TeacherCard;
