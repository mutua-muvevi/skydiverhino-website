import { Navigate, useRoutes } from "react-router-dom";
import Layout from "../layout/layout";
import {
	ComingSoonPage,
	LazyAbout,
	LazyContact,
	LazyGallery,
	LazyHome,
	LazyNews,
	LazyPricing,
	LazyReservation,
	LazyServices,
	MaintenancePage,
	Page403,
	Page404,
	Page500,
} from "./elements";

import CompactLayout from "../layout/compact";

//-----------------------------------------------------------
export default function Router() {
	return useRoutes([
		{ path: "/", element: <Navigate to="/main/home" replace /> },
		{
			path: "main",
			element: <Layout />,
			children: [
				{ path: "home", element: <LazyHome /> },
				{ path: "about", element: <LazyAbout /> },
				{ path: "contact", element: <LazyContact /> },
				{ path: "news", element: <LazyNews /> },
				{ path: "gallery", element: <LazyGallery /> },
				{ path: "pricing", element: <LazyPricing /> },
				{ path: "reservation", element: <LazyReservation /> },
				{ path: "services", element: <LazyServices /> },
			],
		},
		{ path: "*", element: <Navigate to="/404" replace /> },
		{
			element: <CompactLayout />,
			children: [
				{ path: "coming-soon", element: <ComingSoonPage /> },
				{ path: "maintenance", element: <MaintenancePage /> },
				{ path: "500", element: <Page500 /> },
				{ path: "404", element: <Page404 /> },
				{ path: "403", element: <Page403 /> },
			],
		},
	]);
}
