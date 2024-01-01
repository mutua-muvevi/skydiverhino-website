import { Button, Container, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";

const BannerVideo = ({ title, subTitle, src, height, hasButton  }) => {
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
					position: isMobile ? "relative" : "fixed",
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
					transform: isDesktop? "" :"translateY(-110%)",
					textAlign: "left",
					color: "white",
					zIndex: 2,
					borderRadius: "4px",
					width: "100%",
					height: height,
				}}
			>
				<Container maxWidth="xl">
					<Grid container spacing={3}>
						<Grid item xs={12} md={6}>
							<Stack
								direction="column"
								sx={{
									backdropFilter: "blur(2px)",
									width: "max-content",
									paddingRight: 5,
									paddingTop: 5,
									paddingBottom: 5,
								}}
								spacing={3}
							>
								<Stack direction="column">
									<Typography
										variant="h2"
										component="div"
										color="text.primary"
									>
										{title}
									</Typography>
									{isDesktop ? (
										<Typography
											variant="h6"
											component="div"
											color="text.primary"
										>
											{subTitle}
										</Typography>
									) : null}
								</Stack>

								{hasButton ? (
									<Button variant="contained" color="primary">
										Book Now
									</Button>
								) : null}
							</Stack>
						</Grid>
					</Grid>
				</Container>
			</Stack>
		</>
	);
};

BannerVideo.propTypes = {
	src: PropTypes.string.isRequired,
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
	hasButton: PropTypes.bool,
};

export default BannerVideo;
