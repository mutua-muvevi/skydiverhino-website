import { Page } from "../../components/page";
import ReusableBanner from "../../modules/banner/banner";
import ContentBlocks from "../../modules/content-blocks";
import Subscribe from "../../modules/subscribe";
import Instruments from "./sections/instruments";
import Team from "./sections/team";

const image ="https://res.cloudinary.com/dqweh6zte/image/upload/v1698335568/skydive%20rhino/videos/skydive_landing_aqzfpy.jpg"

const About = () => {
	return (
		<Page title="About us">
			<ReusableBanner
				title="About us"
				subTitle="The latest news from Skydive Rhino"
				type="image"
				src={image}
				height="70vh"
			/>
			<ContentBlocks/>
			<Team/>
			<Instruments/>
			<Subscribe/>
		</Page>
	);
};

export default About;
