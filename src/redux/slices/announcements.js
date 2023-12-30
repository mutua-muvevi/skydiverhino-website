import { createSlice } from "@reduxjs/toolkit";
// utils
import axios from "../../utils/axios";

// ----------------------------------------------------------------------

const initialState = {
	isLoading: false,

	announcement: null,
	announcementError: null,

	announcements: null,
	announcementsError: null,

	fetchAllAnnouncements: null,
	fetchAllAnnouncementsError: null,

	fetchSingleAnnouncement: null,
	fetchSingleAnnouncementError: null,
};

//the slice
const slice = createSlice({
	name: "announcements",
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

		//FETCH ALL ANNOUNCEMENTS
		fetchAllAnnouncements(state, action) {
			state.isLoading = false;
			state.announcements = action.payload;
		},

		fetchAllAnnouncementsError(state, action) {
			state.isLoading = false;
			state.announcementsError = action.payload;
		},

		//FETCH SINGLE ANNOUNCEMENT
		fetchSingleAnnouncement(state, action) {
			state.isLoading = false;
			state.announcement = action.payload;
		},

		fetchSingleAnnouncementError(state, action) {
			state.isLoading = false;
			state.announcementError = action.payload;
		},

		//SET ANNOUNCEMENT
		setAnnouncement(state, action) {
			state.isLoading = false;
			state.announcement = action.payload;
		},

		setAnnouncementError(state, action) {
			state.isLoading = false;
			state.announcementError = action.payload;
		},
	},
});

// Reducer
export default slice.reducer;

// Actions
export const { startLoading, stopLoading } = slice.actions;

// ----------------------------------------------------------------------

//----------------------------------fetch all announcements------------------------------------
export function fetchAllAnnouncements(userID, token) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios.get(
				`http://localhost:8100/api/announcement/fetch/all`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: token,
					},
				}
			);

			const data = await response.data;
			dispatch(slice.actions.fetchAllAnnouncements(data));
			return data;
		} catch (error) {
			dispatch(slice.actions.fetchAllAnnouncementsError(error));
			throw error.response;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}

//----------------------------------fetch single announcement------------------------------------
export function fetchSingleAnnouncement(userID, token, id) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios.get(
				`http://localhost:8100/api/announcement/fetch/single/${id}`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: token,
					},
				}
			);

			const data = await response.data;
			dispatch(slice.actions.fetchSingleAnnouncement(data));
			return data;
		} catch (error) {
			dispatch(slice.actions.fetchSingleAnnouncementError(error));
			throw error.response;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}

//---------------------------------set an announcement-------------------------------------
export function setAnnouncement(announcement) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			dispatch(slice.actions.setAnnouncement(announcement));
			return announcement;
		} catch (error) {
			dispatch(slice.actions.setAnnouncementError(error));
			throw error.response;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}