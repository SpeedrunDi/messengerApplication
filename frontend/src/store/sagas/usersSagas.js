import {put, takeEvery} from "redux-saga/effects";
import axiosApi from "../../axiosApi";
import {
  registerRequest,
  registerSuccess,
  registerFailure,
  loginSuccess,
  loginFailure,
  loginRequest,
  logoutRequest, logoutSuccess, logoutFailure, facebookLoginSuccess, facebookLoginFailure, facebookLoginRequest
} from "../actions/usersActions";

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

const userSagas = [
  takeEvery(registerRequest, registerUser),
  takeEvery(loginRequest, loginUser),
  takeEvery(facebookLoginRequest, facebookLogin),
  takeEvery(logoutRequest, logoutUser),
];

export default userSagas;