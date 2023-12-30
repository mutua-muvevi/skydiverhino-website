import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

// slices
import ReservationsReducer from "./slices/reservations";
import ServicesReducer from "./slices/services";
import BlogReducer from "./slices/blogs";
import AnnouncementReducer from "./slices/announcements";
import EventReducer from "./slices/events";

// ----------------------------------------------------------------------

const config = {
	key: "root",
	storage,
	whitelist: [
		"reservation",
		"blogs",
		"announcements",
		"services",
		"events",
	],
	blacklist: [],
};

export const rootReducer = combineReducers({

	reservations: ReservationsReducer,
	services: ServicesReducer,
	blog: BlogReducer,
	announcements: AnnouncementReducer,
	events: EventReducer,

});

const persistedReducer = persistReducer(config, rootReducer);

export default persistedReducer;
