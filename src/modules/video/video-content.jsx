import { Container, Stack, Typography, useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";

const ReusableVideoContent = ({ title, subTitle, src, height, hasButton }) => {
	const isMobile = window.innerWidth < 768;
	const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("lg"));

	return (
		<>
			<video
				width="100%"
				height={height}
				autoPlay
				muted
				loop
				style={{
					objectFit: "cover",
					width: "100%",
					height: "100%",
					position: isMobile ? "relative" : "absolute",
				}}
			>
				<source src={src} type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			<Stack
				direction="column"
				justifyContent={isDesktop ? "center" : "flex-end"}
				sx={{
					position: "absolute",
					top: isDesktop ? "0" : "auto",
					transform: isDesktop ? "" : "translateY(-110%)",
					textAlign: "left",
					color: "white",
					zIndex: 2,
					borderRadius: "4px",
					width: "100%",
					height: height,
				}}
			>
				<Container maxWidth="xl">
					<Stack
						direction="column"
						justifyContent="center"
						alignItems="center"
					>
						<Typography
							variant="h2"
							component="div"
							color="text.primary"
						>
							{title}
						</Typography>
						<Typography
							variant="h6"
							component="div"
							color="text.primary"
						>
							{subTitle}
						</Typography>
					</Stack>
				</Container>
			</Stack>
		</>
	);
};

ReusableVideoContent.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
	height: PropTypes.string.isRequired,
	hasButton: PropTypes.bool.isRequired,
};

export default ReusableVideoContent;
