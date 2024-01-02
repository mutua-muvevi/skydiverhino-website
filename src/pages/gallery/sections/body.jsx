import { Card, CardActionArea, Dialog, Stack, useTheme } from "@mui/material";
import { Masonry } from "@mui/lab";
import { Container } from "@mui/system";
import { useState } from "react";
import PropTypes from "prop-types";
import TitleSubtitle from "../../../modules/title-subtitle";


const GalleryBody = ({gallery}) => {
	const [open, setOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);
	const theme = useTheme();

	const handleOpen = (image) => {
		console.log("open");
		setSelectedImage(image);
		setOpen(true);
	};
	return (
		<div>
			<Container maxWidth="xl" sx={{py: 10}}>
				<Stack direction="column" spacing={3}>
					<TitleSubtitle
						title={gallery.title}
						subtitle={gallery.subtitle}
						divider
						dividerColor={theme.palette.text.primary}
					/>
					<div>
						<Masonry columns={{xs: 2, sm: 3, md: 4}} spacing={2}>
							{gallery.images.map((image, index) => (
								<Card key={index}>
									<CardActionArea
										onClick={() => handleOpen(image)}
									>
										<img
											src={image}
											alt={`Image ${index + 1}`}
											style={{
												width: '100%',
												height: '100%',
												objectFit: 'cover',
											}}
										/>
									</CardActionArea>
								</Card>
							))}
						</Masonry>
					</div>
				</Stack>
			</Container>

			<Dialog
				open={open}
				onClose={() => setOpen(false)}
				maxWidth="xl"
				fullWidth
			>
				<img
					src={selectedImage}
					alt="Image"
					style={{
						width: '100%',
						objectFit: 'cover',
					}}
				/>
			</Dialog>
		</div>
	);
};

GalleryBody.propTypes = {
	gallery: PropTypes.object,
};

export default GalleryBody;
