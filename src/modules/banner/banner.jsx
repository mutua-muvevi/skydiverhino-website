import PropTypes from "prop-types";
import {
	Box,
	useMediaQuery,
} from "@mui/material";
import BannerImage from "./image";
import BannerVideo from "./video";

const ReusableBanner = ({ title, subTitle, type, src, height, hasButton }) => {
	const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("lg"));

	return (
		<Box
			sx={{
				height: isDesktop ? "100vh" : "auto",
				overflow: "hidden",
				marginTop: isDesktop ? -20 : -12,
			}}
		>
			{type === "video" ? (
				<BannerVideo
					title={title}
					subTitle={subTitle}
					src={src}
					height={height}
					hasButton={hasButton}
				/>
			) : (
				<BannerImage
					title={title}
					subTitle={subTitle}
					src={src}
					height={height}
					hasButton={hasButton}
				/>
			)}
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
