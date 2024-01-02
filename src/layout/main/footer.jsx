import { Link as RouterLink, useLocation } from "react-router-dom";
// @mui
import {
	Box,
	Grid,
	Link,
	Stack,
	Container,
	Typography,
	IconButton,
} from "@mui/material";
// routes
import { ALL_ROUTES } from "../../routes/path";
// _mock
import { _socials } from "../../_mock/arrays";
// components
import Logo from "../../components/logo";
import Iconify from "../../components/iconify";
import { useTheme } from "@emotion/react";
import { fYear } from "../../utils/format-time";

// ----------------------------------------------------------------------

const LINKS = [
	{
		headline: "Minimal",
		children: [
			{ name: "About us", href: ALL_ROUTES.about },
			{ name: "Contact us", href: ALL_ROUTES.contact },
			{ name: "News", href: ALL_ROUTES.NEWS },
		],
	},
	{
		headline: "Legal",
		children: [
			{ name: "Terms and Condition", href: "#" },
			{ name: "Privacy Policy", href: "#" },
		],
	},
	{
		headline: "Contact",
		children: [
			{ name: "support@minimals.cc", href: "#" },
			{ name: "Los Angeles, 359  Hidden Valley Road", href: "#" },
		],
	},
];

const image ="https://res.cloudinary.com/dqweh6zte/image/upload/v1693092854/Officechest/users/vo6vt18bzi8q2xzdjbqp.jpg"

// ----------------------------------------------------------------------

export default function Footer() {
	const { pathname } = useLocation();

	const theme = useTheme();

	const isHome = pathname === "/";

	const simpleFooter = (
		<Box
			component="footer"
			sx={{
				py: 5,
				textAlign: "left",
				position: "relative",
				bgcolor: "background.default",
			}}
		>
			<Container>
				<Logo sx={{ mb: 1, mx: "auto" }} />

				<Typography variant="h6" component="div">
					© All rights reserved
					<Link href="https://skydiverhinokenya.com/"> skydiverhinokenya.com </Link>
				</Typography>
			</Container>
		</Box>
	);

	const mainFooter = (
		<Box
			component="footer"
			sx={{
				position: "relative",
				borderTop: `1px dashed ${theme.palette.text.disabled}`,
				backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${image})`,
				backgroundSize: "cover",
				backgroundAttachment: "fixed",
				color: "#fff",
				py: 10,
			}}
		>

			<Container maxWidth="xl" sx={{ pt: 10 }}>
				<Grid
					container
					justifyContent={{
						xs: "left",
						md: "space-between",
					}}
					sx={{
						textAlign: {
							xs: "left",
							md: "left",
						},
					}}
				>
					<Grid item xs={12} sx={{ mb: 3 }}>
						<Logo sx={{ mx: { xs: "auto", md: "inherit" } }} />
					</Grid>

					<Grid item xs={8} md={3}>
						<Typography variant="h6" sx={{ pr: { md: 5 }, fontWeight:500 }}>
							The starting point for your next project with
							Minimal UI Kit, built on the newest version of
							Material-UI ©, ready to be customized to your style.
						</Typography>

						<Stack
							spacing={1}
							direction="row"
							justifyContent={{ xs: "left", md: "flex-start" }}
							sx={{
								mt: 5,
								mb: { xs: 5, md: 0 },
							}}
						>
							{_socials.map((social) => (
								<IconButton key={social.name}>
									<Iconify icon={social.icon} sx={{color: "#fff"}} />
								</IconButton>
							))}
						</Stack>
					</Grid>

					<Grid item xs={12} md={7}>
						<Stack
							spacing={5}
							justifyContent="space-between"
							direction={{ xs: "column", md: "row" }}
						>
							{LINKS.map((list) => (
								<Stack
									key={list.headline}
									spacing={2}
									alignItems={{
										xs: "left",
										md: "flex-start",
									}}
								>
									<Typography
										component="div"
										variant="h5"
									>
										{list.headline}
									</Typography>

									{list.children.map((link) => (
										<Link
											key={link.name}
											component={RouterLink}
											to={link.href}
											color="inherit"
											variant="body2"
										>
											<Stack direction="row" spacing={1}>
												<Iconify icon="mdi:circle-medium" />
												<Typography variant="body2">
													{link.name}
												</Typography>
											</Stack>
										</Link>
									))}
								</Stack>
							))}
						</Stack>
					</Grid>
				</Grid>

				<Typography
					variant="subtitle1"
					component="div"
					sx={{
						mt: 10,
						pb: 5,
						textAlign: { xs: "left", md: "left" },
					}}
				>
					© {fYear(2021)}. All rights reserved
				</Typography>
			</Container>
		</Box>
	);

	return isHome ? simpleFooter : mainFooter;
}
