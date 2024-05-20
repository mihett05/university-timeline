import { Box, Typography } from '@mui/material';

interface IEvent {
  name: string;
  text: string;
  objects: { year: number; name: string }[];
  media: string[];
}

interface IObject {
  year: number;
  name: string;
}

const isImage = (file: string) => {
  const extension = file.split('.').pop();
  if (extension === 'png' || extension === 'jpg' || extension === 'jpeg' || extension === 'svg') {
    return true;
  }
  return false;
};

const Event = ({ name, text, objects, media }: IEvent) => {
  const isMediaEmpty = media.length === 0;
  return (
    <>
      <Typography variant="h4" sx={{ textAlign: 'center' }}>
        {name}
      </Typography>
      <section
        className={name}
        style={{ minHeight: '100vh', display: 'flex', paddingLeft: 100, paddingTop: 5 }}
      >
        <Box sx={{ maxWidth: isMediaEmpty ? '50%' : '30%', display: 'flex', alignSelf: 'center' }}>
          <Typography variant="body1">{text}</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            mx: 'auto',
            maxWidth: '40%',
            paddingTop: 5,
          }}
        >
          {media.map((mediaElement: string) => {
            return isImage(mediaElement) ? (
              <img src={mediaElement} alt={mediaElement} key={mediaElement} />
            ) : (
              <video key={mediaElement}>
                <source src={mediaElement} type="video/mp4" />
              </video>
            );
          })}
        </Box>
        <Box sx={{ maxWidth: '20%', display: 'flex', alignSelf: 'center', paddingRight: 5 }}>
          <ul style={{ listStyleType: 'none' }}>
            {objects.map((element: IObject) => {
              return (
                <li key={element.year + element.name}>
                  <Typography>
                    {element.name} : {element.year} год
                  </Typography>
                </li>
              );
            })}
          </ul>
        </Box>
      </section>
    </>
  );
};

export default Event;
