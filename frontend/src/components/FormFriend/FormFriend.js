import React, {useEffect, useState} from 'react';
import {Alert, Grid} from "@mui/material";
import FormElement from "../UI/FormElement/FormElement";
import Button from "@mui/material/Button";

const FormFriend = ({addFriend, error}) => {
  const [state, setState] = useState({
    email: ""
  });
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (error && error.message) {
      setAlert((
        <Alert severity="error">
          Error! {error.message}!
        </Alert>
      ));
    }
  }, [error]);

  const inputChangeHandler = e => {
    const {name, value} = e.target;

    setState(prevState => {
      return {...prevState, [name]: value};
    });
  };

  const submitFormHandler = e => {
    e.preventDefault();

    addFriend(state);
  };

  return (
    <Grid
      container
      maxWidth="md"
      textAlign="center"
      marginX="auto"
      direction="column"
      rowSpacing={2}
      component="form"
      onSubmit={submitFormHandler}
    >
      {alert}
      <FormElement
        required={true}
        onChange={inputChangeHandler}
        name="email"
        label="Email"
        value={state.email}
      />
      <Grid item>
        <Button type="submit" color="primary" variant="contained">Create</Button>
      </Grid>
    </Grid>
  );
};

export default FormFriend;