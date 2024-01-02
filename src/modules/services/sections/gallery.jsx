import { Card, CardActionArea, Dialog, Stack } from "@mui/material";
import TitleSubtitle from "../../title-subtitle";
import { Masonry } from "@mui/lab";
import { Container } from "@mui/system";
import { useState } from "react";

const images = [
	"https://res.cloudinary.com/dqweh6zte/image/upload/v1692719152/officechest/services/ppqibj8mpvumxmzj7kqb.jpg",
	"https://res.cloudinary.com/dqweh6zte/image/upload/v1693131018/Officechest/users/bgbyh9316o4seul02hgp.jpg",
	"https://res.cloudinary.com/dqweh6zte/image/upload/v1690303441/officechest/services/jog7skpaltedt5a3eips.jpg",
	"https://res.cloudinary.com/dqweh6zte/image/upload/v1693131018/Officechest/users/bgbyh9316o4seul02hgp.jpg",
	"https://res.cloudinary.com/dqweh6zte/image/upload/v1690303441/officechest/services/jog7skpaltedt5a3eips.jpg",
	"https://res.cloudinary.com/dqweh6zte/image/upload/v1692719152/officechest/services/ppqibj8mpvumxmzj7kqb.jpg",
	"https://res.cloudinary.com/dqweh6zte/image/upload/v1692640097/officechest/services/ezqt2maojaypqh0movdm.png",
	"https://res.cloudinary.com/dqweh6zte/image/upload/v1679749553/skydive%20rhino/images/IMG_20230126_072246_564_voxwjd.jpg",
	"https://res.cloudinary.com/dqweh6zte/image/upload/v1679650179/skydive%20rhino/images/IMG_20230124_144004_883_xa4ruw.jpg",
	"https://res.cloudinary.com/dqweh6zte/image/upload/v1673047324/skydive%20rhino/images/skydiving-gd90b87829_1920_ztat2b.jpg",

];

const ServiceGallery = () => {
	const [open, setOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

	const handleOpen = (image) => {
		console.log("open");
		setSelectedImage(image);
		setOpen(true);
	}
	return (
		<div>
			<Container maxWidth="xl" sx={{py: 10}}>
				<Stack direction="column" spacing={3}>
					<TitleSubtitle title="Gallery" subtitle="Our gallery" />
					<div>
							<Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
								{images.map((image, index) => (
									<Card key={index}>
										<CardActionArea onClick={() => handleOpen(image)}>
											<img
												src={image}
												alt={`Image ${index + 1}`}
												style={{
													width: "100%",
													height: "100%",
													objectFit: "cover",
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
						width: "100%",
						objectFit: "cover",
					}}
				/>
			</Dialog>
		</div>
	);
};

export default ServiceGallery;
