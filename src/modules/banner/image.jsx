import { useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";

const BannerImage = ({ src, height }) => {
	const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("lg"));
	return (
		<img
			src={src}
			alt="Banner background"
			style={{
				objectFit: "cover",
				position: isDesktop ? "absolute" : "", // Position it absolutely to fill the banner container
				top: 0,
				left: 0,
				width: "100%",
				height: height || "70vh", // Default to full view height if height not provided
			}}
		/>
	);
};

BannerImage.propTypes = {
	src: PropTypes.string.isRequired,
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default BannerImage;
