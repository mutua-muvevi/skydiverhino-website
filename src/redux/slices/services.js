import { createSlice } from "@reduxjs/toolkit";
// utils
import axios from "../../utils/axios";

// ----------------------------------------------------------------------

const initialState = {
	isLoading: false,

	//service
	service: null,
	serviceError: null,

	services: null,
	servicesError: null,
};

//the slice
const slice = createSlice({
	name: "services",
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

		//SET SERVICE
		setService(state, action) {
			state.isLoading = false;
			state.service = action.payload;
		},

		setServiceError(state, action) {
			state.isLoading = false;
			state.serviceError = action.payload;
		},

		//SERVICE
		getServiceSuccess(state, action) {
			state.isLoading = false;
			state.service = action.payload;
		},

		getServiceError(state, action) {
			state.isLoading = false;
			state.serviceError = action.payload;
		},

		//SERVICES
		getServicesSuccess(state, action) {
			state.isLoading = false;
			state.services = action.payload;
		},

		getServicesError(state, action) {
			state.isLoading = false;
			state.servicesError = action.payload;
		},
		
	},
});

// Reducer
export default slice.reducer;

// Actions
export const { startLoading, stopLoading } = slice.actions;

// ----------------------------------------------------------------------

//----------------------------services--------------------------------------------
//SET SERVICE FROM ALL SERVICES
export function setService(service) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());

		try {
			dispatch(slice.actions.setService(service));
		} catch (error) {
			dispatch(slice.actions.getServiceError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}


//SERVICE
export function fetchSingleService(serviceID) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());

		try {
			const response = await axios.get(
				`http://localhost:8100/api/service/fetch/single/${serviceID}`,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			const data = await response.data;
			dispatch(slice.actions.getServiceSuccess(data));
			return data;
		} catch (error) {
			dispatch(slice.actions.getServiceError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}

//SERVICES
export function fetchAllServices() {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());

		try {
			const response = await axios.get(
				"http://localhost:8100/api/service/fetch/all",
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			const data = await response.data;
			dispatch(slice.actions.getServicesSuccess(data));
			return data;
		} catch (error) {
			dispatch(slice.actions.getServicesError(error));
			throw error;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}
