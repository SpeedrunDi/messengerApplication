import {put, takeEvery} from "redux-saga/effects";
import axiosApi from "../../axiosApi";
import {
  registerRequest,
  registerSuccess,
  registerFailure,
  loginSuccess,
  loginFailure,
  loginRequest,
  logoutRequest, logoutSuccess, logoutFailure
} from "../actions/usersActions";

export function* registerUser({payload: userData}) {
  try {
    const {data} = yield axiosApi.post('/users', userData);

    yield put(registerSuccess(data));
  } catch (e) {
    yield put(registerFailure(e.response.data));
  }
}

export function* loginUser({payload: userData}) {
  try {
    const {data} = yield axiosApi.post('/users/sessions', userData);

    yield put(loginSuccess(data));
  } catch (e) {
    yield put(loginFailure(e.response.data));
  }
}

export function* logoutUser() {
  try {
    const {data} = yield axiosApi.delete('/users/sessions');

    yield put(logoutSuccess(data));
  } catch (e) {
    yield put(logoutFailure(e.response.data));
  }
}

const userSagas = [
  takeEvery(registerRequest, registerUser),
  takeEvery(loginRequest, loginUser),
  takeEvery(logoutRequest, logoutUser),
];

export default userSagas;