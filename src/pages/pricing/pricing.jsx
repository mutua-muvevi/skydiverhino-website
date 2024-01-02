import { Page } from "../../components/page";
import ReusableBanner from "../../modules/banner/banner";
import PricingBody from "./sections/body";

const image ="https://res.cloudinary.com/dqweh6zte/image/upload/v1698335568/skydive%20rhino/videos/skydive_landing_aqzfpy.jpg"

const Pricing = () => {
	return (
		<Page title="Pricing">
			<ReusableBanner
				title="Pricing"
				subtitle="The latest pricing from Skydive Rhino"
				type="image"
				src={image}
				height="70vh"
			/>
			<PricingBody/>
		</Page>
	);
};

export default Pricing;
