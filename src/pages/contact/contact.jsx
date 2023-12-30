import { Page } from "../../components/page";
import ReusableBanner from "../../modules/banner";
import Subscribe from "../../modules/subscribe";
import ContactUpperBody from "./sections/body";
import ContactForm from "./sections/form";

const Contact = () => {
	return (
		<Page title="Contact us">
			<ReusableBanner/>
			<ContactUpperBody/>
			<ContactForm/>
			<Subscribe/>
		</Page>
	);
};

export default Contact;
