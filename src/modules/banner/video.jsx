import { Button, Container, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";

const BannerVideo = ({ title, subtitle, src, height, hasButton  }) => {
	const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("lg"));
	return (
		<div style={{ position: "relative", height: height ? height : "80vh" }}>
		<video
			autoPlay
			muted
			loop
			style={{
				objectFit: "cover",
				width: "100%",
				height: "100%",
				position: "absolute",
				top: 0,
				left: 0,
				zIndex: 1,
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
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				zIndex: 2,
				color: "white",
				textAlign: "center",
				pb:10,
				backgroundColor: "rgba(0,0,0,0.5)",
			}}
		>
			<Container maxWidth="xl">
				<Stack
					direction="column"
					textAlign="left"
					sx={{ height: "100%", width:"100%" }}
					spacing={3}
				>
					<Typography
						variant="h1"
						component="div"
						color="text.primary"
						sx={{textTransform: "uppercase"}}
					>
						{title}
					</Typography>
					<Typography
						variant="h4"
						component="div"
						color="text.primary"
						sx={{display: isDesktop ? "block" : "none"}}
						textAlign="justify"
					>
						{subtitle}
					</Typography>
				</Stack>
			</Container>
		</Stack>
	</div>
	);
};

BannerVideo.propTypes = {
	src: PropTypes.string.isRequired,
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	hasButton: PropTypes.bool,
};

export default BannerVideo;
