import React, {useEffect} from 'react';
import {Typography} from "@mui/material";
import FormEvent from "../../components/FormEvent/FormEvent";
import {useDispatch, useSelector} from "react-redux";
import {createEventsRequest} from "../../store/actions/eventsActions";

const NewEvent = ({history}) => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.events.error);
  const user = useSelector(state => state.users.user);

  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  }, [user, history]);

  const onCreateEvent = eventData => {
    dispatch(createEventsRequest({eventData: {eventData}, history}));
  };

  return (
    <>
      <Typography
        textAlign="center"
        marginBottom="20px"
        variant="h4"
      >
        New event
      </Typography>
      <FormEvent
        error={error}
        onSubmit={onCreateEvent}
      />
    </>
  );
};

export default NewEvent;