import { Container, Stack } from "@mui/material";
import PropTypes from "prop-types";
import TitleSubtitle from "../title-subtitle";

const ReusableVideoContent = ({ title, subtitle, src, height, textAlign }) => {

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
						<TitleSubtitle
							title={title}
							subtitle={subtitle}
							position="left"
						/>
					</Stack>
				</Container>
			</Stack>
		</div>
	);
};

ReusableVideoContent.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
	height: PropTypes.string.isRequired,
	hasButton: PropTypes.bool.isRequired,
	textAlign: PropTypes.string,
};

export default ReusableVideoContent;
