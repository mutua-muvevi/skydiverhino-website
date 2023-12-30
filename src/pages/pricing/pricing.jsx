import { Page } from "../../components/page";
import ReusableBanner from "../../modules/banner";
import PricingBody from "./sections/body";

const Pricing = () => {
	return (
		<Page title="Pricing">
			<ReusableBanner/>
			<PricingBody/>
		</Page>
	);
};

export default Pricing;
