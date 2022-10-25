import {createSlice} from "@reduxjs/toolkit";

const name = 'users';

export const initialState = {
  user: null,
  friends: [],
  friendsLoading: false,
  friendsError: null,
  registerLoading: false,
  registerError: null,
  loginLoading: false,
  loginError: null,
  facebookLoginLoading: false,
  facebookLoginError: null,
  logoutLoading: false,
  logoutError: null,
  friendLoading: false,
  friendError: null
};

const usersSlice = createSlice({
  name,
  initialState,
  reducers: {
    getFriendsRequest(state) {
      state.friendsLoading = true;
      state.friendsError = null;
    },
    getFriendsSuccess(state, {payload: friends}) {
      state.friendsLoading = false;
      state.friends = friends;
    },
    getFriendsFailure(state, action) {
      state.friendsLoading = false;
      state.friendsError = action.payload
    },

    registerRequest(state) {
      state.registerLoading = true;
      state.registerError = null;
    },
    registerSuccess(state, {payload: user}) {
      state.registerLoading = false;
      state.user = user;
    },
    registerFailure(state, action) {
      state.registerLoading = false;
      state.registerError = action.payload;
    },

    loginRequest(state) {
      state.loginLoading = true;
      state.loginError = null;
    },
    loginSuccess(state, {payload: user}) {
      state.loginLoading = false;
      state.user = user.user;
    },
    loginFailure(state, action) {
      state.loginLoading = false;
      state.loginError = action.payload;
    },

    facebookLoginRequest(state) {
      state.facebookLoginLoading = true;
      state.facebookLoginError = null;
    },
    facebookLoginSuccess(state, {payload: user}) {
      state.facebookLoginLoading = false;
      state.user = user.user;
    },
    facebookLoginFailure(state, action) {
      state.facebookLoginLoading = false;
      state.facebookLoginError = action.payload;
    },

    logoutRequest(state) {
      state.logoutLoading = true;
      state.logoutError = null;
    },
    logoutSuccess(state) {
      state.logoutLoading = false;
      state.user = null;
    },
    logoutFailure(state, action) {
      state.logoutLoading = false;
      state.logoutError = action.payload;
    },

    addFriendRequest(state) {
      state.friendLoading = true;
      state.friendError = null;
    },
    addFriendSuccess(state) {
      state.friendLoading = false;
    },
    addFriendFailure(state, action) {
      state.friendLoading = false;
      state.friendError = action.payload;
    },

    removeFriendRequest(state) {
      state.friendLoading = true;
      state.friendError = null;
    },
    removeFriendSuccess(state) {
      state.friendLoading = false;
    },
    removeFriendFailure(state, action) {
      state.friendLoading = false;
      state.friendError = action.payload;
    },
  }
});

export default usersSlice;















