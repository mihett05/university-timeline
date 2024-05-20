import { Card, CardContent } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { translate } from '~/shared/links';

interface DepartmentCardProps {
  name: string;
  faculty: string;
}

const DepartmentCard = ({ name, faculty }: DepartmentCardProps) => {
  console.log([name, translate(name)]);
  return (
    <Card sx={{ maxWidth: 350, margin: 4, height: 200, mx: 'auto' }}>
      <CardContent sx={{ textAlign: 'center', padding: 5 }}>
        <RouterLink
          to={'/archive/' + faculty + '/departments/' + name}
          style={{ textDecoration: 'none' }}
        >
          {translate(name)}
        </RouterLink>
      </CardContent>
    </Card>
  );
};

export default DepartmentCard;
