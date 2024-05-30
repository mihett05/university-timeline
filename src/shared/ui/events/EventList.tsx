import { Box } from '@mui/material';
import Event from './Event';
import { Link as RouterLink } from 'react-router-dom';
import { getEvents } from '~/shared/loader';
import { IEvent } from '~/shared/types';
import { translate } from '~/shared/links';

// const MockData = [
//   {
//     blockName: 'Основание ПГНИУ',
//     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde molestiae odit numquam repellendus adipisci! Tempore aliquam adipisci, molestiae corrupti vitae illum? Rerum pariatur tempora eaque quos nisi mollitia eius consectetur voluptatibus saepe autem temporibus numquam reprehenderit, iusto nulla accusantium iure maxime consequuntur fugiat voluptatum aliquid quisquam fuga. Quibusdam, corporis reprehenderit commodi iure assumenda, facilis vel illum, ducimus repellendus dolore quidem. Ab minima suscipit quis dignissimos, tempore eius quibusdam deserunt culpa sunt a minus recusandae rerum dolores distinctio blanditiis in consequuntur, provident, cupiditate similique exercitationem pariatur nesciunt? Facilis corrupti assumenda animi, debitis earum illo dolores libero, iure excepturi ut id, dolor tempora inventore natus! Ea reprehenderit, omnis ut inventore, error mollitia sequi vero asperiores saepe temporibus iste sunt ipsam ipsum ab cupiditate? Quisquam consequuntur quae nulla, voluptatem neque laboriosam saepe quidem enim maxime distinctio voluptatum minus earum quas accusantium? Omnis fugit a dolores libero ab necessitatibus at voluptates molestiae fuga praesentium accusantium sapiente modi, blanditiis animi fugiat alias facilis id dicta ad ullam aspernatur consequuntur quam? Est odio quae repudiandae odit sint? Quo repellendus quaerat officia. Vel culpa nam fugiat laborum, est dolore accusantium aspernatur ad rerum rem dolorum vero et eaque explicabo adipisci voluptas ullam delectus tempore exercitationem odio dolorem.',
//     objects: [
//       {
//         year: 1916,
//         name: 'Основание ПГНИУ',
//       },
//       {
//         year: 1337,
//         name: 'Восстание народа Майя против Усама Бен Ладена',
//       },
//     ],
//     media: [
//       'https://jcpatriot.com/wp-content/uploads/2016/04/REAL-university-of-florida-pic.jpg',
//       'https://wallpapercave.com/wp/wp2468653.jpg',
//       'https://upload.wikimedia.org/wikipedia/commons/b/bd/Emmanuel_College_Front_Court%2C_Cambridge%2C_UK_-_Diliff.jpg',
//     ],
//   },
//   {
//     blockName: 'Свержение рептилоидов в мировом правительстве',
//     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rem architecto repudiandae accusamus aliquam voluptate deserunt dolores accusantium optio quas ratione nesciunt fuga, minima ad animi possimus eligendi et dolorum culpa molestias magni impedit voluptas est minus. Nemo numquam adipisci eius voluptatibus officia animi maxime, velit nulla ut sed voluptate eaque mollitia, aperiam ratione qui quibusdam quo cum sint molestiae blanditiis! Aliquam esse dicta officia natus maiores architecto eos exercitationem cumque earum fugit porro, repellendus tenetur blanditiis illum repudiandae deleniti inventore debitis sit nostrum aut voluptate! Officiis dolore blanditiis magni quibusdam facere et maxime quidem, doloremque dolorem vel ut architecto praesentium soluta quos laudantium laborum rerum deleniti fugiat fuga nam assumenda molestiae. Itaque eligendi magnam repellendus dolorum repudiandae? Rerum amet est ea beatae sapiente perferendis nemo voluptas fugit voluptates corporis, in, delectus placeat soluta aut dignissimos quas et architecto voluptatibus ad ab alias quis. Voluptas deserunt eligendi ipsa eaque velit debitis magni facilis aliquid earum quam. Animi soluta commodi natus. Laudantium quaerat non eligendi eum provident molestias reprehenderit veniam porro praesentium, consectetur illum, esse quos doloremque dicta. Aliquam repudiandae, velit eius amet voluptates ex libero reiciendis ducimus saepe id modi suscipit cupiditate vel vero obcaecati accusantium consequuntur aperiam minus iste impedit voluptatum! Porro impedit incidunt aliquam ex ipsam non nobis eaque delectus nisi. Magnam id cupiditate libero! Repellendus repudiandae saepe, at voluptatibus veniam iste tempore ex quos rem eum et obcaecati sed ratione labore temporibus illum quia consequuntur ipsum. Ratione autem doloremque magnam molestias distinctio quisquam aut, sunt nisi aliquam.',
//     objects: [
//       {
//         year: 42,
//         name: 'Славяне против ящеров, 1 битва',
//       },
//       {
//         year: 52,
//         name: 'Славяне против ящеров, 2 битва',
//       },
//     ],
//     media: [
//       'https://jcpatriot.com/wp-content/uploads/2016/04/REAL-university-of-florida-pic.jpg',
//       'https://wallpapercave.com/wp/wp2468653.jpg',
//       'https://upload.wikimedia.org/wikipedia/commons/b/bd/Emmanuel_College_Front_Court%2C_Cambridge%2C_UK_-_Diliff.jpg',
//     ],
//   },
// ];

type EventListProps = {
  events: IEvent[];
};

const EventList = ({ events }: EventListProps) => {
  return (
    <Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {events
          .sort(({ name: a }, { name: b }) => {
            if (a < b) {
              return -1;
            } else if (a === b) {
              return 0;
            } else {
              return 1;
            }
          })
          .map((event) => (
            <Event
              name={translate(event.name)}
              text={event.text}
              objects={event.events}
              media={event.medias}
              key={event.name}
            />
          ))}
      </Box>
    </Box>
  );
};

export default EventList;
