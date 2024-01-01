import { Container, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

const ReusableVideoContent = ({ title, subTitle, src, height, textAlign }) => {

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
				justifyContent="center"
				sx={{
					position: "absolute",
					backgroundAttachment: "fixed",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					zIndex: 2,
					color: "white",
					textAlign: "center",
					pb: 4,
					pt: 4,
					backgroundColor: "rgba(0,0,0,0.5)",
				}}
			>
				<Container maxWidth="xl">
					<Stack
						direction="column"
						textAlign={textAlign ? textAlign : "left"}
						sx={{ height: "100%" }}
						spacing={3}
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
							textAlign={textAlign ? textAlign : "justify"}
						>
							{subTitle}
						</Typography>
					</Stack>
				</Container>
			</Stack>
		</div>
	);
};

ReusableVideoContent.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
	height: PropTypes.string.isRequired,
	hasButton: PropTypes.bool.isRequired,
	textAlign: PropTypes.string,
};

export default ReusableVideoContent;
