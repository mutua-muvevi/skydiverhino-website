import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

// slices
import ReservationsReducer from "./slices/reservations";
import ServicesReducer from "./slices/services";
import BlogReducer from "./slices/blogs";
import AnnouncementReducer from "./slices/announcements"
import TermReducer from "./slices/terms";
import ManualReducer from "./slices/manuals";
import CurriculumReducer from "./slices/curriculums";
import VoicemailReducer from "./slices/voicemails";
import EventReducer from "./slices/events";

// ----------------------------------------------------------------------

const config = {
	key: "root",
	storage,
	whitelist: [
		"user",
		"storage",
		"reservation",
		"blogs",
		"announcements",
		"leads",
		"clients",
		"terms",
		"manuals",
		"curriculums",
		"voicemails",
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
	
	terms: TermReducer,
	manuals: ManualReducer,
	curriculum: CurriculumReducer,
	voicemails: VoicemailReducer,
	events: EventReducer,

});

const persistedReducer = persistReducer(config, rootReducer);

export default persistedReducer;
