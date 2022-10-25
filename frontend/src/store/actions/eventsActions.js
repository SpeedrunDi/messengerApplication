import eventsSlice from "../slices/eventsSlice";

export const {
  fetchEventsRequest,
  fetchEventsSuccess,
  fetchEventsFailure,
  createEventsRequest,
  createEventsSuccess,
  createEventsFailure,
  removeEventRequest,
  removeEventSuccess,
  removeEventFailure
} = eventsSlice.actions;