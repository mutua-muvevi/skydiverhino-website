import { Page } from "../../components/page";
import ReusableBanner from "../../modules/banner";
import HomeTandem from "./sections/tandem";
import ReusableSpecs from "../../modules/specs";
import HomeAFF from "./sections/aff";
import Subscribe from "../../modules/subscribe";

const Home = () => {
	return (
		<Page title="Home">
			<ReusableBanner/>
			<HomeTandem/>
			<ReusableSpecs/>
			<HomeAFF/>
			<ReusableSpecs/>
			<Subscribe/>
		</Page>
	);
};

export default Home;
