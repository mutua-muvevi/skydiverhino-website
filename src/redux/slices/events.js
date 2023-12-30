import { createSlice } from "@reduxjs/toolkit";
// utils
import axios from "../../utils/axios";

// ----------------------------------------------------------------------

const initialState = {
	isLoading: false,

	events: null,
	eventsError: null,

	fetchAllEvents: null,
	fetchAllEventsError: null,

	fetchSingleEvent: null,
	fetchSingleEventError: null,

	setEvent: null,
	setEventError: null,
};

//the slice
const slice = createSlice({
	name: "events",
	initialState,
	reducers: {
		// START LOADING
		startLoading(state) {
			state.isLoading = true;
		},

		// STOP LOADING
		stopLoading(state) {
			state.isLoading = false;
		},

		//FETCH ALL EVENTS
		fetchAllEvents(state, action) {
			state.isLoading = false;
			state.events = action.payload;
		},

		fetchAllEventsError(state, action) {
			state.isLoading = false;
			state.eventsError = action.payload;
		},

		//FETCH SINGLE EVENT
		fetchSingleEvent(state, action) {
			state.isLoading = false;
			state.event = action.payload;
		},

		fetchSingleEventError(state, action) {
			state.isLoading = false;
			state.eventError = action.payload;
		},

		// SET EVENT
		setEvent(state, action) {
			state.isLoading = false;
			state.setEvent = action.payload;
		},

		setEventError(state, action) {
			state.isLoading = false;
			state.setEventError = action.payload;
		},
	},
});

// Reducer
export default slice.reducer;

// Actions
export const { startLoading, stopLoading } = slice.actions;

// ----------------------------------------------------------------------

//-----------------------fetch all events--------------------------------
export function fetchAllEvents() {
	return async (dispatch) => {
		dispatch(startLoading());

		try {
			const response = await axios.get(
				`http://localhost:8100/api/event/fetch/all`,
			);
			const data = await response.data;
			dispatch(slice.actions.fetchAllEvents(data));
			return data;

		} catch (error) {
			dispatch(slice.actions.fetchAllEventsError(error));
			throw error;

		} finally {
			dispatch(stopLoading());
		}
	};
}

//-----------------------fetch single event--------------------------------
export function fetchSingleEvent(eventID) {
	return async (dispatch) => {
		dispatch(startLoading());

		try {
			const response = await axios.get(
				`http://localhost:8100/api/event/fetch/${eventID}`,
			);
			const data = await response.data;
			dispatch(slice.actions.fetchSingleEvent(data));
			return data;

		} catch (error) {
			dispatch(slice.actions.fetchSingleEventError(error));
			throw error;

		} finally {
			dispatch(stopLoading());
		}
	};
}

//-----------------------set event--------------------------------
export function setEvent(event) {
	return async (dispatch) => {
		dispatch(startLoading());
		try {
			dispatch(slice.actions.setEvent(event));
			return event;

		} catch (error) {
			dispatch(slice.actions.setEventError(error));
			throw error;

		} finally {
			dispatch(stopLoading());
		}
	};
}