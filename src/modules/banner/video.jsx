import PropTypes from "prop-types";

const BannerVideo = ({ src, height }) => {
	return (
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
			}}
		>
			<source src={src} type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	);
};

BannerVideo.propTypes = {
	src: PropTypes.string.isRequired,
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default BannerVideo;
