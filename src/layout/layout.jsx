// config
import { Outlet } from "react-router-dom";
import { HEADER, NAV } from "../config/global";
import Footer from "./footer";
import Header from "./header";

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
