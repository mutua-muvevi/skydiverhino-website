import { createSlice } from "@reduxjs/toolkit";
// utils
import axios from "../../utils/axios";

// ----------------------------------------------------------------------

const initialState = {
	isLoading: false,

	reservations: null,
	reservationsError: null,

	fetchAllReservations: null,
	fetchAllReservationsError: null,

	fetchSingleReservation: null,
	fetchSingleReservationError: null,
};

//the slice
const slice = createSlice({
	name: "reservations",
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

		//FETCH ALL RESERVATIONS
		fetchAllReservations(state, action) {
			state.isLoading = false;
			state.reservations = action.payload;
		},

		fetchAllReservationsError(state, action) {
			state.isLoading = false;
			state.reservationsError = action.payload;
		},

		//FETCH SINGLE RESERVATION
		fetchSingleReservation(state, action) {
			state.isLoading = false;
			state.fetchSingleReservation = action.payload;
		},

		fetchSingleReservationError(state, action) {
			state.isLoading = false;
			state.fetchSingleReservationError = action.payload;
		},

		//SET RESERVATION
		setReservation(state, action) {
			state.isLoading = false;
			state.reservation = action.payload;
		},

		setReservationError(state, action) {
			state.isLoading = false;
			state.reservationError = action.payload;
		},
	},
});

// Reducer
export default slice.reducer;

// Actions
export const { startLoading, stopLoading, } = slice.actions;

//----------------------------------------------------------------------

//---------------------------------reservations---------------------------------
//ADD RESERVATION
export const addReservation = (values) => async (dispatch) => {
	dispatch(slice.actions.startLoading());
	try {
		const response = await axios.post(
			"http://localhost:8100/api/reservation/post",
			values,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		const data = await response.data;
		dispatch(slice.actions.addReservation(data));
		return data;

	} catch (error) {
		dispatch(slice.actions.addReservationError(error.message));
		throw error.response;

	} finally {
		dispatch(slice.actions.stopLoading());
	}
};

// ----------------------------------set a reservation------------------------------------
export function setReservation(blog) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			dispatch(slice.actions.setReservation(blog));
			return blog;
		} catch (error) {
			dispatch(slice.actions.setReservationError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}