import PropTypes from "prop-types";
import { useRef, useState } from "react";
// @mui
import { useTheme } from "@mui/material/styles";
import { Box, Button, AppBar, Toolbar, Container } from "@mui/material";
// hooks
import useOffSetTop from "../../hooks/use-offset-top";
import useResponsive from "../../hooks/use-responsive";
// utils
import { bgBlur } from "../../utils/css-styles";
// config
import { HEADER } from "../../config/global";
// components
import Logo from "../../components/logo";
//
import navConfig from "./nav/config-navigation";
import NavMobile from "./nav/mobile";
import NavDesktop from "./nav/desktop";
import ModalComponent from "../../components/modal/modal";
import Book from "../../pages/book/book";

// ----------------------------------------------------------------------

export default function Header() {
	const [open, setOpen] = useState(false);
	const carouselRef = useRef(null);

	const theme = useTheme();

	const isDesktop = useResponsive("up", "md");

	const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);

	const handleBookModal = () => {
		setOpen(true);
	};

	return (
		<>
			<AppBar
				ref={carouselRef}
				color="transparent"
				sx={{
					boxShadow: 0,
					borderBottom: `1px dashed ${theme.palette.text.disabled}`,
				}}
			>
				<Toolbar
					disableGutters
					sx={{
						height: {
							xs: HEADER.H_MOBILE,
							md: HEADER.H_MAIN_DESKTOP,
						},
						transition: theme.transitions.create(
							["height", "background-color"],
							{
								easing: theme.transitions.easing.easeInOut,
								duration: theme.transitions.duration.shorter,
							}
						),
						...(isOffset && {
							...bgBlur({ color: theme.palette.background.default }),
							height: {
								md: HEADER.H_MAIN_DESKTOP - 16,
							},
						}),
					}}
				>
					<Container
						maxWidth="xl"
						sx={{ height: 1, display: "flex", alignItems: "center" }}
					>
						<Logo />

						<Box sx={{ flexGrow: 1 }} />

						{isDesktop && (
							<NavDesktop isOffset={isOffset} data={navConfig} />
						)}

						<Button
							variant="contained"
							type="button"
							onClick={handleBookModal}
						>
							Book Now
						</Button>

						{!isDesktop && (
							<NavMobile isOffset={isOffset} data={navConfig} />
						)}
					</Container>
				</Toolbar>

				{isOffset && <Shadow />}
			</AppBar>

			<ModalComponent
				title="Book Now"
				open={open}
				onClose={() => setOpen(false)}
				height={700}
				maxWidth="lg"
			>
				<Book onClose={() => setOpen(false)} />
			</ModalComponent>
		</>
	);
}

// ----------------------------------------------------------------------

Shadow.propTypes = {
	sx: PropTypes.object,
};

function Shadow({ sx, ...other }) {
	return (
		<Box
			sx={{
				left: 0,
				right: 0,
				bottom: 0,
				height: 24,
				zIndex: -1,
				m: "auto",
				borderRadius: "50%",
				position: "absolute",
				width: `calc(100% - 48px)`,
				boxShadow: (theme) => theme.customShadows.z8,
				...sx,
			}}
			{...other}
		/>
	);
}
