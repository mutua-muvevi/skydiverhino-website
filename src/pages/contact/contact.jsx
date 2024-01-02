import { Page } from "../../components/page";
import ReusableBanner from "../../modules/banner/banner";
import Subscribe from "../../modules/subscribe/subscribe";
import ContactUpperBody from "./sections/body";
import ContactForm from "./sections/form";

const image ="https://res.cloudinary.com/dqweh6zte/image/upload/v1698335568/skydive%20rhino/videos/skydive_landing_aqzfpy.jpg"

const Contact = () => {
	return (
		<Page title="Contact us">
			<ReusableBanner
				title="Contact"
				subtitle="The latest news from Skydive Rhino"
				type="image"
				src={image}
				height="70vh"
			/>
			<ContactUpperBody/>
			<ContactForm/>
			<Subscribe/>
		</Page>
	);
};

export default Contact;
