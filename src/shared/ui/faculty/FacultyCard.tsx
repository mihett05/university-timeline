import { Card, CardContent, CardMedia } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface IFacultyCard {
  logo: string;
  name: string;
}

const FacultyCard = ({ logo, name }: IFacultyCard) => {
  const facultyName = name.trim().split('_').join(' ');
  return (
    <Card sx={{ maxWidth: 350, margin: 4, height: 345, mx: 'auto' }}>
      <CardMedia sx={{ height: 200, backgroundSize: 'contain' }} image={logo} title={name} />
      <CardContent sx={{ textAlign: 'center', padding: 5 }}>
        <RouterLink to={`/archive/${name}`} style={{ textDecoration: 'none' }}>
          {facultyName}
        </RouterLink>
      </CardContent>
    </Card>
  );
};

export default FacultyCard;
