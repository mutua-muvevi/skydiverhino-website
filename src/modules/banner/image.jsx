import {
	Button,
	Container,
	Grid,
	Stack,
	Typography,
	useMediaQuery,
} from "@mui/material";
import PropTypes from "prop-types";

const BannerImage = ({ title, subtitle, src, height, hasButton }) => {
	const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("lg"));
	return (
		<Stack
			direction="column"
			justifyContent={isDesktop ? "center" : "flex-end"}
			sx={{
				backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${src})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundAttachment: "fixed",
				width: "100%",
				height: height ? height : "70vh",
				top:0
			}}
		>
			<Container maxWidth="xl">
				<Grid container spacing={3}>
					<Grid item xs={12} md={6}>
						<Stack
							direction="column"
							sx={{
								width: "max-content",
								paddingRight: 5,
								paddingTop: 5,
								paddingBottom: 5,
							}}
							spacing={3}
						>
							<Stack direction="column">
								<Typography
									variant="h1"
									component="div"
									color="text.primary"
									sx={{textTransform: "uppercase"}}
								>
									{title}
								</Typography>
								{isDesktop ? (
									<Typography
										variant="h3"
										component="div"
										color="text.primary"
									>
										{subtitle}
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
	);
};

BannerImage.propTypes = {
	src: PropTypes.string.isRequired,
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	hasButton: PropTypes.bool,
};

export default BannerImage;
