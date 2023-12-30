import { createSlice } from "@reduxjs/toolkit";
// utils
import axios from "../../utils/axios";

// ----------------------------------------------------------------------

const initialState = {
	isLoading: false,

	blog: null,
	blogError: null,

	blogs: null,
	blogsError: null,

	fetchAllBlogs: null,
	fetchAllBlogsError: null,

	fetchSingleBlog: null,
	fetchSingleBlogError: null,
};

//the slice
const slice = createSlice({
	name: "blogs",
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

		//FETCH ALL BLOGS
		fetchAllBlogs(state, action) {
			state.isLoading = false;
			state.blogs = action.payload;
		},

		fetchAllBlogsError(state, action) {
			state.isLoading = false;
			state.blogsError = action.payload;
		},

		//SET A BLOG
		setBlog(state, action) {
			state.isLoading = false;
			state.blog = action.payload;
		},

		setBlogError(state, action) {
			state.isLoading = false;
			state.blogError = action.payload;
		},

		//FETCH SINGLE BLOG
		fetchSingleBlog(state, action) {
			state.isLoading = false;
			state.fetchSingleBlog = action.payload;
		},

		fetchSingleBlogError(state, action) {
			state.isLoading = false;
			state.fetchSingleBlogError = action.payload;
		},
	},
});

// Reducer
export default slice.reducer;

// Actions
export const { startLoading, stopLoading } = slice.actions;

// ----------------------------------------------------------------------


// ----------------------------------set a blog------------------------------------
export function setBlog(blog) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			dispatch(slice.actions.setBlog(blog));
			return blog;
		} catch (error) {
			dispatch(slice.actions.setBlogError(error));
			throw error.response;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}

//----------------------------------fetch all blogs------------------------------------
export function fetchAllBlogs() {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios.get(
				`http://localhost:8100/api/blog/fetch/all`,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			const data = await response.data;
			dispatch(slice.actions.fetchAllBlogs(data));
			return data;
		} catch (error) {
			dispatch(slice.actions.fetchAllBlogsError(error));
			throw error.response;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}

//----------------------------------fetch single blog------------------------------------
export function fetchSingleBlog(id) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios.get(
				`http://localhost:8100/api/blog/fetch/single/${id}`,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			const data = await response.data;
			dispatch(slice.actions.fetchSingleBlog(data));
			return data;
		} catch (error) {
			dispatch(slice.actions.fetchSingleBlogError(error));
			throw error.response;
		} finally {
			dispatch(slice.actions.stopLoading());
		}
	};
}