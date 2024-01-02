// routes
import {  ALL_ROUTES } from "../../../routes/path";

// components
import Iconify from "../../../components/iconify";

// ----------------------------------------------------------------------

const navConfig = [
	{
		title: "Home",
		icon: <Iconify icon="eva:home-fill" />,
		path: "/main/home",
	},
	{
		title: "About",
		icon: <Iconify icon="ic:round-grain" />,
		path: ALL_ROUTES.ABOUT,
	},
	{
		title: "Tandem",
		icon: <Iconify icon="ic:round-grain" />,
		path: ALL_ROUTES.TANDEM,
	},
	{
		title: "AFF",
		icon: <Iconify icon="ic:round-grain" />,
		path: ALL_ROUTES.AFF,
	},
	{
		title: "News",
		icon: <Iconify icon="ic:round-grain" />,
		path: ALL_ROUTES.NEWS,
	},
	{
		title: "Gallery",
		icon: <Iconify icon="ic:round-grain" />,
		path: ALL_ROUTES.GALLERY,
	},
	{
		title: "Contact",
		icon: <Iconify icon="ic:round-grain" />,
		path: ALL_ROUTES.CONTACT,
	},
];

export default navConfig;
