import { useTheme } from "@emotion/react";
import { Container, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

const ReusableQuote = ({ content, backgroundImage }) => {
	const theme = useTheme();
	return (
		<Stack
			direction="column"
			justifyContent="center"
			sx={{
				backgroundAttachment: "fixed",
				color: theme.palette.text.primary,
				textAlign: "left",
				backgroundImage: backgroundImage
					? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`
					: "",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				py: { xs: 5, md: 10 },
				minHeight: "50vh",
			}}
		>
			<Container maxWidth="xl">
				<Typography
					variant="h4"
					component="div"
					sx={{
						position: "relative",
						"&::before": {
							content: "open-quote",
							fontFamily: "'Material Icons'", // Ensure you have the Material Icons font loaded
							fontSize: "5rem", // Adjust the size as needed
							color: theme.palette.text.primary,
							opacity: 0.5,
							position: "absolute",
							top: 0,
							left: 0,
							transform: "translateY(-100%) translateX(-10px)", // Adjust position as needed
							zIndex: 1,
						},
					}}
				>
					{content}
				</Typography>
			</Container>
		</Stack>
	);
};

ReusableQuote.propTypes = {
	content: PropTypes.string.isRequired,
	backgroundImage: PropTypes.string,
};

export default ReusableQuote;
