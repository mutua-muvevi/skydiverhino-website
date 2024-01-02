import { Page } from "../../components/page";
import ReusableBanner from "../../modules/banner/banner";
import GalleryBody from "./sections/body";

const video = "https://res.cloudinary.com/dqweh6zte/video/upload/v1698327008/skydive%20rhino/videos/skydive_1080p_u3mdwh.mp4";

const gallery = {
	title: "Our Gallery Images",
	subtitle: "Our skydiving gallery Media",
	images: [
		"https://res.cloudinary.com/dqweh6zte/image/upload/v1673047324/skydive%20rhino/images/skydiving-gd90b87829_1920_ztat2b.jpg",
		"https://res.cloudinary.com/dqweh6zte/image/upload/v1692719152/officechest/services/ppqibj8mpvumxmzj7kqb.jpg",
		"https://res.cloudinary.com/dqweh6zte/image/upload/v1693131018/Officechest/users/bgbyh9316o4seul02hgp.jpg",
		"https://res.cloudinary.com/dqweh6zte/image/upload/v1690303441/officechest/services/jog7skpaltedt5a3eips.jpg",
		"https://res.cloudinary.com/dqweh6zte/image/upload/v1692719152/officechest/services/ppqibj8mpvumxmzj7kqb.jpg",
		"https://res.cloudinary.com/dqweh6zte/image/upload/v1679650179/skydive%20rhino/images/IMG_20230124_144004_883_xa4ruw.jpg",
		"https://res.cloudinary.com/dqweh6zte/image/upload/v1693131018/Officechest/users/bgbyh9316o4seul02hgp.jpg",
		"https://res.cloudinary.com/dqweh6zte/image/upload/v1690303441/officechest/services/jog7skpaltedt5a3eips.jpg",
		"https://res.cloudinary.com/dqweh6zte/image/upload/v1692640097/officechest/services/ezqt2maojaypqh0movdm.png",
		"https://res.cloudinary.com/dqweh6zte/image/upload/v1679749553/skydive%20rhino/images/IMG_20230126_072246_564_voxwjd.jpg",
		"https://res.cloudinary.com/dqweh6zte/image/upload/v1679748100/skydive%20rhino/images/jump_school_bbi5jy.jpg",
		"https://res.cloudinary.com/dqweh6zte/image/upload/v1679655247/skydive%20rhino/images/videography-transformed_uiyrb8.jpg"
	],
	//videos too use the reusable iframe for this
}

const Gallery = () => {
	return (
		<Page title="Gallery">
			<ReusableBanner
				type="video"
				src={video}
				height="60vh"
				title="Our Gallery"
				subtitle="The best skydiving experience in the world"
			/>
			<GalleryBody gallery={gallery}/>
		</Page>
	);
};

export default Gallery;
