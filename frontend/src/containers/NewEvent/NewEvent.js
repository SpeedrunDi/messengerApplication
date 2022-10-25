import React from 'react';
import {Typography} from "@mui/material";
import FormEvent from "../../components/FormEvent/FormEvent";
import {useDispatch, useSelector} from "react-redux";
import {createEventsRequest} from "../../store/actions/eventsActions";

const NewEvent = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.events.error);

  const onCreateEvent = productData => {
    dispatch(createEventsRequest(productData));
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