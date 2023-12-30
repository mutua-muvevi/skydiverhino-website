import { Page } from "../../components/page";
import ReusableBanner from "../../modules/banner";
import ContentBlocks from "../../modules/content-blocks";
import Subscribe from "../../modules/subscribe";
import Instruments from "./sections/instruments";
import Team from "./sections/team";

const About = () => {
	return (
		<Page title="About us">
			<ReusableBanner/>
			<ContentBlocks/>
			<Team/>
			<Instruments/>
			<Subscribe/>
		</Page>
	);
};

export default About;
