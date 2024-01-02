import { Card, Container, Grid, Stack, Typography } from "@mui/material";
import TitleSubtitle from "../title-subtitle";
import { sentenceCase } from "change-case";
import Masonry from "@mui/lab/Masonry";
import PropTypes from "prop-types";

const ReusableIntroContent = ({
	images,
	content,
	title,
	subTitle,
	backgroundImage,
}) => {
	return (
		<div
			style={{
				backgroundImage: backgroundImage
					? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`
					: "",
				backgroundSize: "cover",
				backgroundAttachment: "fixed",
				color: "#fff"
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
							subtitle={subTitle}
							position="left"
						/>
						<div>
							<Grid container spacing={3}>
								{content.map((text, index) => (
									<Grid item xs={12} md={6} key={index}>
										<Typography
											variant="body1"
											textAlign="justify"
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
										alt={`Tandem Skydiving ${index + 1}`}
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
	subTitle: PropTypes.string.isRequired,
	backgroundImage: PropTypes.string,
};

export default ReusableIntroContent;
