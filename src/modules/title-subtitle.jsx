import { useTheme } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

const TitleSubtitle = ({ title, subtitle, position, color, divider, dividerColor }) => {
	const theme = useTheme();

	return (
		<Stack
			direction="column"
			textAlign={position}
			sx={{
				borderBottom:
					divider === true
						? `1px dashed ${dividerColor ? dividerColor : theme.palette.primary.main}`
						: "none",
				pb: 3,
			}}
		>
			<Typography
				variant="h2"
				style={{
					textTransform: "uppercase",
					position: "relative",
					color: color ? color : "inherit",
				}}
			>
				{title}
			</Typography>
			<Typography
				variant="h3"
				style={{ color: color ? color : "inherit", fontWeight: 500 }}
			>
				{subtitle ? subtitle : ""}
			</Typography>
		</Stack>
	);
};

TitleSubtitle.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	position: PropTypes.oneOf(["left", "center", "right"]),
	color: PropTypes.string,
	divider: PropTypes.bool,
	dividerColor: PropTypes.string,
};

export default TitleSubtitle;
