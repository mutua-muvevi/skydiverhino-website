import PropTypes from "prop-types";
import {
	Box,
	useMediaQuery,
} from "@mui/material";
import BannerImage from "./image";
import BannerVideo from "./video";

const ReusableBanner = ({ title, subtitle, type, src, height, hasButton }) => {
	const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("lg"));

	return (
		<Box
			sx={{
				height: isDesktop ? height : "auto",
				overflow: "hidden",
				marginTop: isDesktop ? -20 : -12,
			}}
		>
			{type === "video" ? (
				<BannerVideo
					title={title}
					subtitle={subtitle}
					src={src}
					height={height}
					hasButton={hasButton}
				/>
			) : (
				<BannerImage
					title={title}
					subtitle={subtitle}
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
	subtitle: PropTypes.string.isRequired,
	type: PropTypes.oneOf(["video", "image"]).isRequired,
	src: PropTypes.string.isRequired,
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	hasButton: PropTypes.bool,
};

export default ReusableBanner;
