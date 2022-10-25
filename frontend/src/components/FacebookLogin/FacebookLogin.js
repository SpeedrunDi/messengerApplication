import React from 'react';
import FacebookLoginButton from 'react-facebook-login/dist/facebook-login-render-props';
import {useDispatch} from "react-redux";
import {Button} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import {facebookAppId} from "../../config";
import {facebookLoginRequest} from "../../store/actions/usersActions";

const FacebookLogin = ({history}) => {
  const dispatch = useDispatch();

  const facebookResponse = response => {
    dispatch(facebookLoginRequest({user: {...response}, history}));
  };

  return (
    <FacebookLoginButton
      appId={facebookAppId}
      fields="name, email"
      callback={facebookResponse}
      render={props => (
        <Button
          fullWidth
          variant="outlined"
          color="primary"
          startIcon={<FacebookIcon/>}
          onClick={props.onClick}
        >
          Enter with Facebook
        </Button>
      )}
    />
  );
};

export default FacebookLogin;