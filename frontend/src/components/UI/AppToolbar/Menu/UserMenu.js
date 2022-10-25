import {useState} from "react";
import * as React from 'react';
import {Link, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {logoutRequest} from "../../../../store/actions/usersActions";

const UserMenu = ({user}) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        color="inherit"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Hello, {user.displayName}!
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem component={Link} to="/friends" onClick={handleClose}>Friends</MenuItem>
        <MenuItem component={Link} to="/new_event" onClick={handleClose}>Add event</MenuItem>
        <MenuItem component={Link} to="/add_friend" onClick={handleClose}>Add friend</MenuItem>
        <MenuItem onClick={() => dispatch(logoutRequest({history}))}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
