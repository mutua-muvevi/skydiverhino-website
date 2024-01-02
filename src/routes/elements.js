import { Suspense, lazy } from "react";
// components
import LoadingScreen from "../components/loading-screen";

// ----------------------------------------------------------------------

const Loadable = (Component) => {
	const LoadableComponent = (props) => (
		<Suspense fallback={<LoadingScreen />}>
			<Component {...props} />
		</Suspense>
	);

	// Assign a display name to the LoadableComponent
	LoadableComponent.displayName = `Loadable(${
		Component.displayName || Component.name || "Component"
	})`;

	return LoadableComponent;
};

// ----------------------------------------------------------------------

//------------------ Lazy load components ------------------
export const LazyHome = Loadable(lazy(() => import("../pages/home/home")));
export const LazyAbout = Loadable(lazy(() => import("../pages/about/about")));
export const LazyContact = Loadable(lazy(() => import("../pages/contact/contact")));
export const LazyNews = Loadable(lazy(() => import("../pages/news/news")));
export const LazyGallery = Loadable(lazy(() => import("../pages/gallery/gallery")));
export const LazyPricing = Loadable(lazy(() => import("../pages/pricing/pricing")));
export const LazyReservation = Loadable(lazy(() => import("../pages/reservation/reservation")));
export const LazyTandem = Loadable(lazy(() => import("../pages/tandem/tandem")));
export const LazyAFF = Loadable(lazy(() => import("../pages/aff/aff")));

//------------------ Terms ans Policy ------------------
export const LazyTerms = Loadable(lazy(() => import("../pages/terms/terms")));
export const LazyPrivacy = Loadable(lazy(() => import("../pages/privacy/privacy")));
export const LazySales = Loadable(lazy(() => import("../pages/sales/sales")));
export const LazyFAQ = Loadable(lazy(() => import("../pages/faq/faq")));

//-------------------Redirects-------------------
export const Page500 = Loadable(lazy(() => import("../pages/redirects/page-500")));
export const Page404 = Loadable(lazy(() => import("../pages/redirects/page-404")));
export const Page403 = Loadable(lazy(() => import("../pages/redirects/page-403")));
export const ComingSoonPage = Loadable(
	lazy(() => import("../pages/redirects/coming-soon"))
);
export const MaintenancePage = Loadable(
	lazy(() => import("../pages/redirects/maintenance"))
); 

