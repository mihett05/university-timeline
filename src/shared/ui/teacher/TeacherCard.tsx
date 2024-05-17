import { Card, CardContent, CardMedia } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface ITeacherCard {
  name?: string;
  picture?: string;
  faculty?: string;
}

const TeacherCard = ({ name, picture, faculty }: ITeacherCard) => {
  const facultyToLink = faculty?.trim().split(' ').join('_');
  const nameToLink = name?.trim().split(' ').join('_');
  return (
    <Card sx={{ maxWidth: 350, margin: 4, height: 345, mx: 'auto' }}>
      <CardMedia sx={{ height: 200 }} image={picture} title={name} />
      <CardContent sx={{ textAlign: 'center', padding: 5 }}>
        <RouterLink
          to={'/archive/' + facultyToLink + '/teachers/' + nameToLink}
          style={{ textDecoration: 'none' }}
        >
          {name}
        </RouterLink>
      </CardContent>
    </Card>
  );
};

export default TeacherCard;
