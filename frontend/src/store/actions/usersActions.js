import axiosApi from "../../axiosApi";
import usersSlice from "../slices/usersSlice";

// export const facebookLogin = data => {
//   return async dispatch => {
//     try {
//       const response = await axiosApi.post('/users/facebookLogin', data);
//       dispatch(loginUserSuccess(response.data.user));
//     } catch (e) {
//       dispatch(loginUserFailure(e.response.data));
//     }
//   }
// };

export const {
  registerRequest,
  registerSuccess,
  registerFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure
} = usersSlice.actions;