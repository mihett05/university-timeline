import { Card, CardContent } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface IDepartmentCard {
  name?: string;
  faculty?: string;
}

const DepartmentCard = ({ name, faculty }: IDepartmentCard) => {
  const nameToLink = name?.trim().split(' ').join('_');
  return (
    <Card sx={{ maxWidth: 350, margin: 4, height: 200, mx: 'auto' }}>
      <CardContent sx={{ textAlign: 'center', padding: 5 }}>
        <RouterLink
          to={'/archive/' + faculty + '/departments/' + nameToLink}
          style={{ textDecoration: 'none' }}
        >
          {name}
        </RouterLink>
      </CardContent>
    </Card>
  );
};

export default DepartmentCard;
