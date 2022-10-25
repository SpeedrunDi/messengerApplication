import {put, takeEvery} from "redux-saga/effects";
import axiosApi from "../../axiosApi";
import {
  createEventsFailure, createEventsRequest,
  createEventsSuccess,
  fetchEventsFailure,
  fetchEventsRequest,
  fetchEventsSuccess, removeEventFailure, removeEventRequest, removeEventSuccess
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

export function* removeEvent({payload: id}) {
  try {
    yield axiosApi.delete('/events/' + id);

    yield put(removeEventSuccess());
  } catch (e) {
    yield put(removeEventFailure(e));
  }
}

const eventSagas = [
  takeEvery(fetchEventsRequest, fetchEvents),
  takeEvery(createEventsRequest, createEvent),
  takeEvery(removeEventRequest, removeEvent),
];

export default eventSagas;