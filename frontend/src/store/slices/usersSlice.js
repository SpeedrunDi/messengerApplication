import {createSlice} from "@reduxjs/toolkit";

const name = 'users';

export const initialState = {
  user: null,
  registerLoading: false,
  registerError: null,
  loginLoading: false,
  loginError: null,
  logoutLoading: false,
  logoutError: null
};

const usersSlice = createSlice({
  name,
  initialState,
  reducers: {
    registerRequest(state) {
      state.registerLoading = true;
      state.registerError = null;
    },
    registerSuccess(state, {payload: user}) {
      state.registerLoading = false;
      state.user = user;
    },
    registerFailure(state, action) {
      state.loginLoading = false;
      state.loginError = action.payload;
    },
    loginRequest(state) {
      state.registerLoading = true;
      state.registerError = null;
    },
    loginSuccess(state, {payload: user}) {
      state.loginLoading = false;
      state.user = user;
    },
    loginFailure(state, action) {
      state.loginLoading = false;
      state.loginError = action.payload;
    },
    logoutRequest(state) {
      state.loginLoading = true;
      state.logoutError = null;
    },
    logoutSuccess(state) {
      state.logoutLoading = false;
      state.user = null;
    },
    logoutFailure(state, action) {
      state.logoutLoading = false;
      state.logoutError = action.payload;
    }
  }
});

export default usersSlice;















