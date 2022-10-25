import {put, takeEvery} from "redux-saga/effects";
import axiosApi from "../../axiosApi";
import {
  createEventsFailure, createEventsRequest,
  createEventsSuccess,
  fetchEventsFailure,
  fetchEventsRequest,
  fetchEventsSuccess
} from "../actions/eventsActions";

export function* fetchEvents() {
  try {
    const {data} = yield axiosApi('/events');

    yield put(fetchEventsSuccess(data));
  } catch (e) {
    yield put(fetchEventsFailure(e));
  }
}

export function* createEvent({payload}) {
  const {eventData, history} = payload;
  try {
    yield axiosApi.post('/events', eventData.eventData);

    yield put(createEventsSuccess());
    history.push('/');
  } catch (e) {
    yield put(createEventsFailure(e.response.data));
  }
}

const eventSagas = [
  takeEvery(fetchEventsRequest, fetchEvents),
  takeEvery(createEventsRequest, createEvent),
];

export default eventSagas;