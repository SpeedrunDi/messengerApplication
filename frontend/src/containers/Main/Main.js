import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Box, Typography} from "@mui/material";
import {fetchEventsRequest, removeEventRequest} from "../../store/actions/eventsActions";
import EventItem from "../../components/EventItem/EventItem";

const Main = ({history}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.users.user);
  const events = useSelector(state => state.events.events);

  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  }, [user, history]);

  useEffect(() => {
    dispatch(fetchEventsRequest());
  }, [dispatch]);

  const removeEvent = id => {
    dispatch(removeEventRequest(id));
  };

  return (
    <Box>
      <Typography variant="h2" textAlign="center" marginBottom="20px">
        Events
      </Typography>
      {
        events.length !== 0 ? (
          events.map(event => (
            <EventItem event={event} key={event._id} user={user} onDelete={removeEvent}/>
          ))
        ) : <Typography textAlign="center">No events!</Typography>
      }
    </Box>
  );
};

export default Main;