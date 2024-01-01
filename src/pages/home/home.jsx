import { Page } from "../../components/page";
import ReusableBanner from "../../modules/banner/banner";
import HomeTandem from "./sections/tandem";
import ReusableSpecs from "../../modules/specs";
import HomeAFF from "./sections/aff";
import Subscribe from "../../modules/subscribe";

const video = "https://res.cloudinary.com/dqweh6zte/video/upload/v1698327008/skydive%20rhino/videos/skydive_1080p_u3mdwh.mp4"

const Home = () => {
	return (
		<Page title="Home">
			<ReusableBanner
				type="video"
				src={video}
				height="100vh"
				title="Skydive Rhino"
				subTitle="The best skydiving experience in the world"
			/>
			<HomeTandem/>
			<ReusableSpecs/>
			<HomeAFF/>
			<ReusableSpecs/>
			<Subscribe/>
		</Page>
	);
};

export default Home;
