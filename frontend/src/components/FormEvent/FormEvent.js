import React, {useEffect, useState} from 'react';
import {Alert, Grid} from "@mui/material";
import Button from "@mui/material/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormElement from "../UI/FormElement/FormElement";

const FormEvent = ({error, onSubmit}) => {
  const [state, setState] = useState({
    name: "",
    datetime: "",
    duration: ""
  });
  const [date, setDate] = useState("");
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (error && error.dateMessage) {
      setAlert((
        <Alert severity="error">
          Error! {error.dateMessage}
        </Alert>
      ));
      setDate("");
    }
  }, [error]);

  const submitFormHandler = e => {
    e.preventDefault();

    if (state.datetime === '') {
      return setAlert((
        <Alert severity="error">
          Error! Fill in the date!
        </Alert>
      ));
    }

    onSubmit(state);
  };

  const inputChangeHandler = e => {
    const {name, value} = e.target;

    setState(prevState => {
      return {...prevState, [name]: value};
    });
  };

  const selectDate = e => {
    setDate(e);
    setState(prev => ({
      ...prev,
      datetime: new Date(e)
    }))
  };

  const getFieldError = fieldName => {
    try {
      return error.errors[fieldName].message;
    } catch {
      return undefined;
    }
  };

  return (
    <Grid
      container
      maxWidth="md"
      textAlign="center"
      marginX="auto"
      direction="column"
      rowSpacing={2}
    >
      <FormElement
        required={true}
        label="Name"
        onChange={inputChangeHandler}
        value={state.name}
        name="name"
        error={getFieldError('name')}
      />

      <FormElement
        required={true}
        type="number"
        label="Duration"
        onChange={inputChangeHandler}
        value={state.duration}
        name="duration"
        error={getFieldError('duration')}
      />

      {alert}
      <Grid item xs={12} paddingRight="32px">
        <DatePicker
          required={true}
          selected={date}
          onChange={selectDate}
          showTimeSelect
          name="datetime"
        />
      </Grid>

      <Grid item>
        <Button type="submit" color="primary" variant="contained" onClick={submitFormHandler}>Create</Button>
      </Grid>
    </Grid>
  );
};

export default FormEvent;