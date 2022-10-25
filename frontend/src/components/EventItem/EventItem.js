import React from 'react';
import {Grid, Typography} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

const EventItem = ({event}) => {
  let datetime = new Date(event.datetime);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-around"
      border="2px solid black"
      marginBottom="20px"
      padding="10px"
      borderRadius="5px"
    >
      <Grid item xs={5}>
        <Typography>
          {datetime.toString()}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>
          <b>Name: </b>
          {event.name}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>
          <b>Duration: </b>
          {event.duration} hours
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <ClearIcon
          cursor="pointer"
          sx={{marginLeft: "50%"}}
        />
      </Grid>
    </Grid>
  );
};

export default EventItem;