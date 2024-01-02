import { CardMedia, Container, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import PropTypes from "prop-types";
import TitleSubtitle from "../title-subtitle";

const LeftRight = ({ title, subtitle, content, image, backgroundImage }) => {
	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up("md"));

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
					{
						title &&
						<TitleSubtitle
							title={title}
							subtitle={subtitle}
							position="left"
						/>
					}

					<Stack
						direction={isMd ? "row": "column"}
						spacing={3}
						sx={{
							flexWrap: "wrap",
							justifyContent: "center",
						}}
					>
						{
							content.map((text, index) => (
								<Typography key={index} sx={{ flex: 1 }} variant="h4" textAlign="justify">
									{ text }
								</Typography>
							))
						}
						<CardMedia
							component="img"
							height="500"
							image={image}
							alt="green iguana"
							sx={{
								flex: 1,
								objectFit: "cover",
							}}
						/>
					</Stack>
				</Stack>
			</Container>
		</div>
	);
};

LeftRight.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	content: PropTypes.arrayOf(PropTypes.string).isRequired,
	image: PropTypes.string.isRequired,
	backgroundImage: PropTypes.string.isRequired,
};

export default LeftRight;
