import { useTheme } from "@emotion/react";
import { Container, Stack, Typography } from "@mui/material";
import { sentenceCase } from "change-case";
import PropTypes from "prop-types";

const IntroDescription = ({ content, backgroundImage }) => {
	const theme = useTheme();
	return (
		<div
			style={{
				backgroundImage: backgroundImage
					? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`
					: "",
				backgroundSize: "cover",
				backgroundAttachment: "fixed",
				color: backgroundImage ? "#fff" : theme.palette.text.primary,
			}}
		>
			<Container maxWidth="xl">
				<Stack
					sx={{
						paddingTop: 10,
						paddingBottom: 10,
					}}
					spacing={6}
				>
					<Typography
						sx={{ flex: 1 }}
						variant="h4"
						textAlign="justify"
					>
						{content ? sentenceCase(content) : ""}
					</Typography>
				</Stack>
			</Container>
		</div>
	);
};

IntroDescription.propTypes = {
	content: PropTypes.string,
	backgroundImage: PropTypes.string,
};

export default IntroDescription;
