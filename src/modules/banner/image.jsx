import {
	Button,
	Container,
	Grid,
	Stack,
	Typography,
	useMediaQuery,
} from "@mui/material";
import PropTypes from "prop-types";

const BannerImage = ({ title, subTitle, src, height, hasButton }) => {
	const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("lg"));
	return (
		<Stack
			direction="column"
			justifyContent={isDesktop ? "center" : "flex-end"}
			sx={{
				backgroundImage: `url(${src})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundAttachment: "fixed",
				width: "100%",
				height: height ? height : "70vh",
				// backgroundColor: "red",
				top:0
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
		// <img
		// 	src={src}
		// 	alt="Banner background"
		// 	style={{
		// 		objectFit: "cover",
		// 		position: isDesktop ? "absolute" : "", // Position it absolutely to fill the banner container
		// 		top: 0,
		// 		left: 0,
		// 		width: "100%",
		// 		height: height ? height : "70vh",
		// 		overflow: "hidden",
		// 		backgroundAttachment: "fixed",
		// 	}}
		// />
	);
};

BannerImage.propTypes = {
	src: PropTypes.string.isRequired,
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
	hasButton: PropTypes.bool,
};

export default BannerImage;
