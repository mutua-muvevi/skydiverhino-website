import { Card, Container, Grid, Stack, Typography, useTheme } from "@mui/material";
import TitleSubtitle from "../title-subtitle";
import { sentenceCase } from "change-case";
import Masonry from "@mui/lab/Masonry";
import PropTypes from "prop-types";

const ReusableIntroContent = ({
	images,
	content,
	title,
	subtitle,
	backgroundImage,
}) => {
	const theme = useTheme();
	// Function to determine grid item size based on content length and index
	const getGridSize = (index) => {
		const contentLength = content.length;
		// If odd and last item
		if (contentLength % 2 !== 0 && index === contentLength - 1) {
			return 12; // Full width for the last item
		} else {
			return 6; // Half width for all other scenarios
		}
	};

	return (
		<div
			style={{
				backgroundImage: backgroundImage
					? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`
					: "",
				backgroundSize: "cover",
				backgroundAttachment: "fixed",
				color: backgroundImage ? "#fff": theme.palette.text.primary,
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
					<Stack spacing={3}>
						<TitleSubtitle
							title={title}
							subtitle={subtitle}
							position="left"
						/>
						<div>
							<Grid container spacing={3}>
								{content.map((text, index) => (
									<Grid
										item
										xs={12}
										md={getGridSize(index)}
										key={index}
									>
										<Typography
											variant="h4"
											textAlign="justify"
											sx={{fontWeight: 500}}
										>
											{text ? sentenceCase(text) : ""}
										</Typography>
									</Grid>
								))}
							</Grid>
						</div>
					</Stack>
					<Stack>
						<Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
							{images.map((image, index) => (
								<Card key={index}>
									<img
										src={image}
										alt={`Image ${index + 1}`}
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
										}}
									/>
								</Card>
							))}
						</Masonry>
					</Stack>
				</Stack>
			</Container>
		</div>
	);
};

ReusableIntroContent.propTypes = {
	images: PropTypes.arrayOf(PropTypes.string).isRequired,
	content: PropTypes.arrayOf(PropTypes.string).isRequired,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	backgroundImage: PropTypes.string,
};

export default ReusableIntroContent;
