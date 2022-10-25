import React from 'react';
import {Typography} from "@mui/material";
import FormFriend from "../../components/FormFriend/FormFriend";
import {useDispatch, useSelector} from "react-redux";
import {addFriendRequest} from "../../store/actions/usersActions";

const AddFriend = ({history}) => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.users.friendError);

  const addFriend = email => {
    dispatch(addFriendRequest({email, history}));
  };

  return (
    <>
      <Typography
        textAlign="center"
        marginBottom="20px"
        variant="h4"
      >
        Add friend
      </Typography>
      <FormFriend
        error={error}
        addFriend={addFriend}
      />
    </>
  );
};

export default AddFriend;