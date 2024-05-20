import { Box } from '@mui/material';
import Event from './Event';
import { Link as RouterLink } from 'react-router-dom';

const MockData = [
  {
    blockName: 'Основание ПГНИУ',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde molestiae odit numquam repellendus adipisci! Tempore aliquam adipisci, molestiae corrupti vitae illum? Rerum pariatur tempora eaque quos nisi mollitia eius consectetur voluptatibus saepe autem temporibus numquam reprehenderit, iusto nulla accusantium iure maxime consequuntur fugiat voluptatum aliquid quisquam fuga. Quibusdam, corporis reprehenderit commodi iure assumenda, facilis vel illum, ducimus repellendus dolore quidem. Ab minima suscipit quis dignissimos, tempore eius quibusdam deserunt culpa sunt a minus recusandae rerum dolores distinctio blanditiis in consequuntur, provident, cupiditate similique exercitationem pariatur nesciunt? Facilis corrupti assumenda animi, debitis earum illo dolores libero, iure excepturi ut id, dolor tempora inventore natus! Ea reprehenderit, omnis ut inventore, error mollitia sequi vero asperiores saepe temporibus iste sunt ipsam ipsum ab cupiditate? Quisquam consequuntur quae nulla, voluptatem neque laboriosam saepe quidem enim maxime distinctio voluptatum minus earum quas accusantium? Omnis fugit a dolores libero ab necessitatibus at voluptates molestiae fuga praesentium accusantium sapiente modi, blanditiis animi fugiat alias facilis id dicta ad ullam aspernatur consequuntur quam? Est odio quae repudiandae odit sint? Quo repellendus quaerat officia. Vel culpa nam fugiat laborum, est dolore accusantium aspernatur ad rerum rem dolorum vero et eaque explicabo adipisci voluptas ullam delectus tempore exercitationem odio dolorem.',
    objects: [
      {
        year: 1916,
        name: 'Основание ПГНИУ',
      },
      {
        year: 1337,
        name: 'Восстание народа Майя против Усама Бен Ладена',
      },
    ],
    media: [
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F86289.jpg&f=1&nofb=1&ipt=126b566bb61bc1999c3857807dab02f85fcf79fb3c5689ad9411c971cc93af11&ipo=images',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.designyourway.net%2Fblog%2Fwp-content%2Fuploads%2F2018%2F01%2Fcool-computer-backgrounds-8.jpg&f=1&nofb=1&ipt=ed55b85d17d0b138a50267c1ee502952c1f335ef08598c5cf124249646968059&ipo=images',
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F10%2FCool-high-res-backgrounds.jpg&f=1&nofb=1&ipt=36fe7d7ab10b23bbc0108ab256fcffee81299c5ae72395583d4fa5e18e290682&ipo=images',
    ],
  },
  {
    blockName: 'Свержение рептилоидов в мировом правительстве',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rem architecto repudiandae accusamus aliquam voluptate deserunt dolores accusantium optio quas ratione nesciunt fuga, minima ad animi possimus eligendi et dolorum culpa molestias magni impedit voluptas est minus. Nemo numquam adipisci eius voluptatibus officia animi maxime, velit nulla ut sed voluptate eaque mollitia, aperiam ratione qui quibusdam quo cum sint molestiae blanditiis! Aliquam esse dicta officia natus maiores architecto eos exercitationem cumque earum fugit porro, repellendus tenetur blanditiis illum repudiandae deleniti inventore debitis sit nostrum aut voluptate! Officiis dolore blanditiis magni quibusdam facere et maxime quidem, doloremque dolorem vel ut architecto praesentium soluta quos laudantium laborum rerum deleniti fugiat fuga nam assumenda molestiae. Itaque eligendi magnam repellendus dolorum repudiandae? Rerum amet est ea beatae sapiente perferendis nemo voluptas fugit voluptates corporis, in, delectus placeat soluta aut dignissimos quas et architecto voluptatibus ad ab alias quis. Voluptas deserunt eligendi ipsa eaque velit debitis magni facilis aliquid earum quam. Animi soluta commodi natus. Laudantium quaerat non eligendi eum provident molestias reprehenderit veniam porro praesentium, consectetur illum, esse quos doloremque dicta. Aliquam repudiandae, velit eius amet voluptates ex libero reiciendis ducimus saepe id modi suscipit cupiditate vel vero obcaecati accusantium consequuntur aperiam minus iste impedit voluptatum! Porro impedit incidunt aliquam ex ipsam non nobis eaque delectus nisi. Magnam id cupiditate libero! Repellendus repudiandae saepe, at voluptatibus veniam iste tempore ex quos rem eum et obcaecati sed ratione labore temporibus illum quia consequuntur ipsum. Ratione autem doloremque magnam molestias distinctio quisquam aut, sunt nisi aliquam.',
    objects: [
      {
        year: 42,
        name: 'Славяне против ящеров, 1 битва',
      },
      {
        year: 52,
        name: 'Славяне против ящеров, 2 битва',
      },
    ],
    media: [
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F86289.jpg&f=1&nofb=1&ipt=126b566bb61bc1999c3857807dab02f85fcf79fb3c5689ad9411c971cc93af11&ipo=images',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.designyourway.net%2Fblog%2Fwp-content%2Fuploads%2F2018%2F01%2Fcool-computer-backgrounds-8.jpg&f=1&nofb=1&ipt=ed55b85d17d0b138a50267c1ee502952c1f335ef08598c5cf124249646968059&ipo=images',
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F10%2FCool-high-res-backgrounds.jpg&f=1&nofb=1&ipt=36fe7d7ab10b23bbc0108ab256fcffee81299c5ae72395583d4fa5e18e290682&ipo=images',
    ],
  },
];

const EventList = () => {
  return (
    <>
      <RouterLink
        to={'/archive'}
        style={{ position: 'absolute', right: 10, top: 10, textDecoration: 'none' }}
      >
        Архив
      </RouterLink>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {MockData.map((event: any) => {
          return (
            <Event
              name={event.blockName}
              text={event.text}
              objects={event.objects}
              media={event.media}
              key={event.blockName + event.text}
            />
          );
        })}
      </Box>
    </>
  );
};

export default EventList;
