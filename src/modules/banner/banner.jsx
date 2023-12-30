import PropTypes from "prop-types";
import {
	Stack,
	Typography,
	Box,
	useMediaQuery,
	Container,
	Button,
	Grid,
} from "@mui/material";
import BannerImage from "./image";
import BannerVideo from "./video";

const ReusableBanner = ({ title, subTitle, type, src, height, hasButton }) => {
	const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("lg"));

	return (
		<Box
			sx={{
				position: "relative",
				height: isDesktop ? "100vh" : "auto",
				overflow: "hidden",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				marginTop: isDesktop ? -20 : -10,
			}}
		>
			{type === "video" ? (
				<BannerVideo src={src} height={height} />
			) : (
				<BannerImage src={src} height={height} />
			)}
			<Stack
				direction="column"
				justifyContent={isDesktop ? "center" : "flex-end"}
				sx={{
					position: "absolute",
					top: "50%",
					transform: "translateY(-50%)",
					textAlign: "left",
					color: "white",
					zIndex: 2,
					borderRadius: "4px",
					width: "100%",
					height: "100%",
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
		</Box>
	);
};

ReusableBanner.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
	type: PropTypes.oneOf(["video", "image"]).isRequired,
	src: PropTypes.string.isRequired,
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	hasButton: PropTypes.bool,
};

export default ReusableBanner;
