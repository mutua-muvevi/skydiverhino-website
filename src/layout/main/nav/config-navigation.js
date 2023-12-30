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
		path: ALL_ROUTES.SERVICES,
	},
	{
		title: "AFF",
		icon: <Iconify icon="ic:round-grain" />,
		path: ALL_ROUTES.SERVICES,
	},
	{
		title: "News",
		icon: <Iconify icon="ic:round-grain" />,
		path: ALL_ROUTES.NEWS,
	},
	{
		title: "Contact",
		icon: <Iconify icon="ic:round-grain" />,
		path: ALL_ROUTES.CONTACT,
	},
	{
		title: "Gallery",
		icon: <Iconify icon="ic:round-grain" />,
		path: ALL_ROUTES.GALLERY,
	},
	{
		title: "Pricing",
		icon: <Iconify icon="ic:round-grain" />,
		path: ALL_ROUTES.PRICING,
	},
	// {
	// 	title: "Pages",
	// 	path: "/pages",
	// 	icon: <Iconify icon="eva:file-fill" />,
	// 	children: [
	// 		{
	// 			subheader: "Other",
	// 			items: [
	// 				{ title: "About us", path: ALL_ROUTES.about },
	// 				{ title: "Contact us", path: ALL_ROUTES.contact },
	// 				{ title: "FAQs", path: ALL_ROUTES.faqs },
	// 				{ title: "Pricing", path: ALL_ROUTES.pricing },
	// 				{ title: "Payment", path: ALL_ROUTES.payment },
	// 				{ title: "Maintenance", path: ALL_ROUTES.maintenance },
	// 				{ title: "Coming Soon", path: ALL_ROUTES.comingSoon },
	// 			],
	// 		},
	// 		{
	// 			subheader: "Error",
	// 			items: [
	// 				{ title: "Page 403", path: ALL_ROUTES.page403 },
	// 				{ title: "Page 404", path: ALL_ROUTES.page404 },
	// 				{ title: "Page 500", path: ALL_ROUTES.page500 },
	// 			],
	// 		},
	// 	],
	// },
];

export default navConfig;
