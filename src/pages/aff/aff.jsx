import { Page } from "../../components/page";
import ReusableBanner from "../../modules/banner/banner";

const image ="https://res.cloudinary.com/dqweh6zte/image/upload/v1698335568/skydive%20rhino/videos/skydive_landing_aqzfpy.jpg"

const AFF = () => {
	return (
		<Page title="AFF">
			<ReusableBanner
				title="AFF"
				subtitle="The latest news from Skydive Rhino"
				type="image"
				src={image}
				height="70vh"
			/>
			AFF
		</Page>
	);
};

export default AFF;
