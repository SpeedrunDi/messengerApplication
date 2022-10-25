import {put, takeEvery} from "redux-saga/effects";
import axiosApi from "../../axiosApi";
import {
  registerRequest,
  registerSuccess,
  registerFailure,
  loginSuccess,
  loginFailure,
  loginRequest,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
  facebookLoginSuccess,
  facebookLoginFailure,
  facebookLoginRequest,
  addFriendFailure,
  addFriendRequest,
  addFriendSuccess,
  getFriendsSuccess,
  getFriendsFailure,
  getFriendsRequest,
  removeFriendFailure, removeFriendSuccess, removeFriendRequest
} from "../actions/usersActions";

export function* getFriends() {
  try {
    const {data} = yield axiosApi('/users/friends');

    yield put(getFriendsSuccess(data));
  } catch (e) {
    yield put(getFriendsFailure(e));
  }
}

export function* registerUser({payload}) {
  const {user, history} = payload;

  try {
    const {data} = yield axiosApi.post('/users', user);

    yield put(registerSuccess(data));

    history.push('/');
  } catch (e) {
    yield put(registerFailure(e.response.data));
  }
}

export function* loginUser({payload}) {
  const {user, history} = payload;

  try {
    const {data} = yield axiosApi.post('/users/sessions', user);

    yield put(loginSuccess(data));

    history.push('/');
  } catch (e) {
    yield put(loginFailure(e.response.data));
  }
}

export function* facebookLogin({payload}) {
  const {user, history} = payload;

  try {
    const {data} = yield axiosApi.post('/users/facebookLogin', user);

    yield put(facebookLoginSuccess(data));

    history.push('/');
  } catch (e) {
    yield put(facebookLoginFailure(e.response.data));
  }
}

export function* logoutUser({payload}) {
  const history = payload.history;
  try {
    yield axiosApi.delete('/users/sessions');

    yield put(logoutSuccess());

    history.push('/login');
  } catch (e) {
    yield put(logoutFailure(e.response.data));
  }
}

export function* addFriend({payload}) {
  const {email, history} = payload;
  try {
    yield axiosApi.patch('/users', email);

    yield put(addFriendSuccess());

    history.push('/friends');
  } catch (e) {
    yield put(addFriendFailure(e.response.data));
  }
}

export function* removeFriend({payload}) {
  const {id, history} = payload;

  try {
    yield axiosApi.patch('/users/delete_friend/' + id);

    yield put(removeFriendSuccess());
    history.push('/');
  } catch (e) {
    yield put(removeFriendFailure(e));
  }
}

const userSagas = [
  takeEvery(registerRequest, registerUser),
  takeEvery(loginRequest, loginUser),
  takeEvery(facebookLoginRequest, facebookLogin),
  takeEvery(logoutRequest, logoutUser),
  takeEvery(addFriendRequest, addFriend),
  takeEvery(getFriendsRequest, getFriends),
  takeEvery(removeFriendRequest, removeFriend),
];

export default userSagas;