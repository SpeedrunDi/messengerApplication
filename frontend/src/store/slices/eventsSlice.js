import {createSlice} from "@reduxjs/toolkit";

const name = 'events';

export const initialState = {
  events: [],
  loading: false,
  error: null
};

const eventsSlice = createSlice({
  name,
  initialState,
  reducers: {
    fetchEventsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchEventsSuccess(state, {payload: events}) {
      state.loading = false;
      state.events = events;
    },
    fetchEventsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    createEventsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    createEventsSuccess(state) {
      state.loading = false;
    },
    createEventsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    removeEventRequest(state) {
      state.loading = true;
      state.error = null;
    },
    removeEventSuccess(state) {
      state.loading = false;
    },
    removeEventFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  }
});

export default eventsSlice;