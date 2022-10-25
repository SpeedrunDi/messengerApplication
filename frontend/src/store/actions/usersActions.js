import usersSlice from "../slices/usersSlice";

export const {
  getFriendsRequest,
  getFriendsSuccess,
  getFriendsFailure,
  registerRequest,
  registerSuccess,
  registerFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
  facebookLoginRequest,
  facebookLoginSuccess,
  facebookLoginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
  addFriendRequest,
  addFriendSuccess,
  addFriendFailure,
  removeFriendRequest,
  removeFriendSuccess,
  removeFriendFailure
} = usersSlice.actions;