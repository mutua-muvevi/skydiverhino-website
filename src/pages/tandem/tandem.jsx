import { Page } from "../../components/page";
import ReusableBanner from "../../modules/banner/banner";
import Services from "../../modules/services/services";

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

const backgroundImageForContent = "https://res.cloudinary.com/dqweh6zte/image/upload/v1693131018/Officechest/users/bgbyh9316o4seul02hgp.jpg"

const Tandem = () => {
	return (
		<Page title="Tandem">
			<Services
				bannerImage={image}
				bannerTitle="Tandem"
				bannerSubtitle="Tanden skydiving with Skydive Rhino"
				bannerHeight="70vh"
				content={content}
				contentBackgroundImage={backgroundImageForContent}

			/>
		</Page>
	);
};

export default Tandem;
