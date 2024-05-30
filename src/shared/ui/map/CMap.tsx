import {
  AppBar,
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SVGMap from './SVGMap';
import { useEffect, useState } from 'react';
import * as React from 'react';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CMap = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    console.log(document.querySelectorAll('g'));
    document.querySelectorAll('g').forEach((element) => {
      element.addEventListener('click', function (event) {
        console.log('clicked!', event.currentTarget);
        setOpen(true);
      });
    });
  }, []);

  return (
    <>
      <Typography variant="h2" textAlign={'center'}>
        Карта ПГНИУ
      </Typography>
      <SVGMap />
      {open && (
        <Dialog open={open} onClose={handleClose} fullScreen TransitionComponent={Transition}>
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <DialogContent>
            <Box sx={{dislpay: 'flex', alignItems: 'center', alignContent: 'center'}}>
              <img
                src="https://sportishka.com/uploads/posts/2022-11/1667569242_23-sportishka-com-p-krasivie-vodopadi-mira-oboi-23.jpg"
                alt="image1"
                width={400}
              />
              <img
                src="https://sportishka.com/uploads/posts/2022-11/1667569242_23-sportishka-com-p-krasivie-vodopadi-mira-oboi-23.jpg"
                alt="image2"
                width={400}
              />
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptas.
              </Typography>
            </Box>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default CMap;
