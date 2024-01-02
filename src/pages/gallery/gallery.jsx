import { Page } from "../../components/page";
import ReusableBanner from "../../modules/banner/banner";
import GalleryBody from "./sections/body";

const video = "https://res.cloudinary.com/dqweh6zte/video/upload/v1698327008/skydive%20rhino/videos/skydive_1080p_u3mdwh.mp4"

const Gallery = () => {
	return (
		<Page title="Gallery">
			<ReusableBanner
				type="video"
				src={video}
				height="100%"
				title="Our Gallery"
				subtitle="The best skydiving experience in the world"
			/>
			<GalleryBody/>
		</Page>
	);
};

export default Gallery;
