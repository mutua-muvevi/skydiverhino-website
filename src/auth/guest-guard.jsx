import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
// routes
import { ALL_ROUTES } from "../routes/path";
// components
import LoadingScreen from "../components/loading-screen";
//
import { useAuthContext } from "./use-auth-context";

// ----------------------------------------------------------------------

GuestGuard.propTypes = {
	children: PropTypes.node,
};

export default function GuestGuard({ children }) {
	const { isAuthenticated, isInitialized } = useAuthContext();

	
	if (isAuthenticated) {
		{console.log("guest guard", ALL_ROUTES.general.home)}
		return <Navigate to={ALL_ROUTES.general.home} />;
	}

	if (!isInitialized ) {
		return <LoadingScreen />;
	}
	return <> {children} </>;
}
