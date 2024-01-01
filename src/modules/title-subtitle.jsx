import { useTheme } from "@emotion/react";
import { Stack, Typography, alpha } from "@mui/material";
import PropTypes from "prop-types";

const TitleSubtitle = ({ title, subtitle, position, color }) => {
	const theme = useTheme();

	return (
		<Stack
			direction="column"
			textAlign={position}
			sx={{
				borderBottom: `1px dashed ${alpha(theme.palette.primary.main, 0.5)}`,
				pb:3
			}}
		>
			<Typography
				variant="h4"
				style={{
					fontSize: "50px",
					textTransform: "uppercase",
					opacity: 0.5,
					position: "relative",
					color: color ? color : "inherit"
				}}
			>
				{title}
			</Typography>
			<Typography variant="h5">{subtitle}</Typography>
		</Stack>
	);
};

TitleSubtitle.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	position: PropTypes.oneOf(["left", "center", "right"]).isRequired,
	color: PropTypes.string,
};

export default TitleSubtitle;
