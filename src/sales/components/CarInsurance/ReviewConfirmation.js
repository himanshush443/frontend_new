import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, makeStyles, TextareaAutosize, TextField } from '@material-ui/core';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import InputElement from '../common/InputElement';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    marginTop: '100px'
  },
  inspectionHeading: {
    fontSize: '25px',
    margin: '100px 10px 100px 100px'
  }
})

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ReviewConfirmation() {

  const classes = useStyles()

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={classes.root}>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container>
            <Grid item xs={8}>
              <Typography variant="h5" component="h4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a type specimen book.
              </Typography>
              <Typography className={classes.inspectionHeading} style={{ margin: '20px 0px 10px 0px' }} variant="h8" component="h2">ADDITIONAL COMMENTS</Typography>
              <TextareaAutosize
                minRows={3}
                style={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={4} style={{display: 'flex', justifyContent: 'end'}}>
              <HighlightOffIcon style={{fontSize: '50px', textContent: 'left'}} onClick={handleClose}/>
            </Grid>
            <Grid item xs={7}></Grid>
            <Grid item xs={5} style={{marginTop: '20px'}}>
              <Button style={{
                padding: '10px 50px',
                fontSize: '20px',
                background: '#e07a72 ',
                color: 'white',
              }} variant="contained" href="#contained-buttons">REVIEW DETAILS</Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
