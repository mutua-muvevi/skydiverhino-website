import { Card, Stack } from "@mui/material";
import TitleSubtitle from "../../title-subtitle";
import { Masonry } from "@mui/lab";
import { Container } from "@mui/system";

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
	return (
		<div>
			<Container maxWidth="xl" sx={{py: 10}}>
				<Stack direction="column" spacing={3}>
					<TitleSubtitle title="Gallery" subtitle="Our gallery" />
					<div>
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
						</div>
				</Stack>
			</Container>
		</div>
	);
};

export default ServiceGallery;
