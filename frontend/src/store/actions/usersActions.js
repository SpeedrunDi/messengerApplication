import usersSlice from "../slices/usersSlice";

export const {
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
  logoutFailure
} = usersSlice.actions;