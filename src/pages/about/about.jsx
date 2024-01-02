import { Page } from "../../components/page";
import ReusableBanner from "../../modules/banner/banner";
import ContentBlocks from "../../modules/content/blocks";
import ReusableQuote from "../../modules/quote/quote";
import Subscribe from "../../modules/subscribe/subscribe";
import AboutFAQ from "./sections/faq";

const image ="https://res.cloudinary.com/dqweh6zte/image/upload/v1698335568/skydive%20rhino/videos/skydive_landing_aqzfpy.jpg"
const content = [
	{
		title: "Content One",
		details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus volutpat est, sed consequat tortor ullamcorper ut. Nam ultrices justo ullamcorper bibendum congue. Etiam massa neque, ullamcorper at est quis, aliquet ultrices justo. Vivamus ultrices tortor tortor. In hac habitasse platea dictumst. Ut vitae cursus odio, et consectetur est. Nulla dignissim risus at risus dapibus aliquet. Suspendisse aliquet metus nec nisl laoreet scelerisque non pretium est.`,
		image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1698335568/skydive%20rhino/videos/skydive_landing_aqzfpy.jpg",
	},
	{
		title: "Content Two",
		details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus volutpat est, sed consequat tortor ullamcorper ut. Nam ultrices justo ullamcorper bibendum congue. Etiam massa neque, ullamcorper at est quis, aliquet ultrices justo. Vivamus ultrices tortor tortor. In hac habitasse platea dictumst. Ut vitae cursus odio, et consectetur est. Nulla dignissim risus at risus dapibus aliquet. Suspendisse aliquet metus nec nisl laoreet scelerisque non pretium est.`,
		image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1698335568/skydive%20rhino/videos/skydive_landing_aqzfpy.jpg",
	},
];

const About = () => {
	return (
		<Page title="About us">
			<ReusableBanner
				title="About us"
				subtitle="The latest news from Skydive Rhino"
				type="image"
				src={image}
				height="70vh"
			/>
			<ReusableQuote
				content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus volutpat est, sed consequat tortor ullamcorper ut. Nam ultrices justo ullamcorper bibendum congue. Etiam massa neque, ullamcorper at est quis, aliquet ultrices justo. Vivamus ultrices tortor tortor. In hac habitasse platea dictumst. Ut vitae cursus odio, et consectetur est. Nulla dignissim risus at risus dapibus aliquet. Suspendisse aliquet metus nec nisl laoreet scelerisque non pretium est."
			/>
			<ContentBlocks
				title="Content Blocks"
				subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus volutpat est, sed consequat tortor ullamcorper ut. Nam ultrices justo ullamcorper bibendum congue. Etiam massa neque, ullamcorper at est quis, aliquet ultrices justo."
				content={content}
				backgroundImage={image}
			/>
			<AboutFAQ/>
			<Subscribe/>
		</Page>
	);
};

export default About;
