import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getFriendsRequest, removeFriendRequest} from "../../store/actions/usersActions";
import {Grid, Typography} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const Friends = ({history}) => {
  const dispatch = useDispatch();
  const friends = useSelector(state => state.users.friends);

  useEffect(() => {
    dispatch(getFriendsRequest());
  }, [dispatch]);

  const removeFriend = id => {
    dispatch(removeFriendRequest({id, history}));
  };

  return (
    <>
      <Typography variant="h2" textAlign="center">
        Friends
      </Typography>
      <Grid
        container
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        {
          friends.length !== 0 ? (
            friends.map(friend => (
              <Grid
                key={friend._id}
                item
                container
                justifyContent="space-between"
                alignItems="center"
                width="30%"
                marginX="auto"
                border="1px solid black"
                borderRadius="5px"
                padding="5px 10px"
                marginBottom="20px"
              >
                <Grid item xs={9}>
                  <Typography width="70%" display="inline-block">{friend.displayName}</Typography>
                </Grid>
                <Grid item>
                  <ClearIcon
                    cursor="pointer"
                    onClick={() => removeFriend(friend._id)}
                  />
                </Grid>
              </Grid>
            ))
          ) : <Typography textAlign="center">No friends!</Typography>
        }
      </Grid>
    </>
  );
};

export default Friends;