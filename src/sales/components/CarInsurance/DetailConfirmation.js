import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, makeStyles, TextareaAutosize, TextField } from '@material-ui/core';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import InputElement from '../common/InputElement';
import { Card, CardActions, CardContent, Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    marginTop: '100px'
  },
  inspectionHeading: {
    fontSize: '25px',
    margin: '100px 10px 100px 100px'
  },
  donateNow: {
    listStyleType: 'none',
    margin: '25px 0 0 0',
    padding: 0,
    '& li': {
      float: 'left',
      margin: '0 5px 0 0',
      width: '100px',
      height: '40px',
      position: 'relative'
    },
    '& label': {
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    '& input': {
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    '& input[type="radio"]': {
      opacity: 0.01,
      zIndex: 100,
    },
    '& label:hover': {
      background: '#DDD'
    },
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

export default function DetailConfirmation() {

  const classes = useStyles()

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const card1 = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <ul className={classes.donateNow}>
          <li>
            <input type="radio" id="a25" name="amount" />
            <label for="a25">$25</label>
          </li>
          <li>
            <input type="radio" id="a50" name="amount" />
            <label for="a50">$50</label>
          </li>
          <li>
            <input type="radio" id="a75" name="amount" checked="checked" />
            <label for="a75">$75</label>
          </li>
          <li>
            <input type="radio" id="a100" name="amount" />
            <label for="a100">$100</label>
          </li>
        </ul>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );
  const card2 = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );
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
          <Card variant="outlined">{card1}</Card>
          <Card variant="outlined">{card2}</Card>
          <Grid container>
            <Grid item xs={12}>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. " />
              </FormGroup>
            </Grid>
          </Grid>
        </Box>

      </Modal>
    </div>
  );
}
