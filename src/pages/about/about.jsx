import { Page } from "../../components/page";
import ReusableBanner from "../../modules/banner/banner";
import ContentBlocks from "../../modules/content/blocks";
import ReusableQuote from "../../modules/quote/quote";
import Subscribe from "../../modules/subscribe/subscribe";
import AboutFAQ from "./sections/faq";

const image =
	"https://res.cloudinary.com/dqweh6zte/image/upload/v1704967275/Skydive/about/AFF11_pzd4my.jpg";
const content = [
	{
		title: "Our Mission",
		details: `At Skydive Rhino Kenya, our mission is to share the exhilarating world of skydiving, offering safe and unforgettable experiences that inspire a sense of adventure and accomplishment. Whether it's your first tandem jump or you're advancing through our Accelerated Free Fall (AFF) program, our expert team is committed to creating moments that last a lifetime.`,
		image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1704967269/Skydive/about/Tandem4_zgfufg.jpg",
	},
	{
		title: "Safety First",
		details: `Your safety is our top priority. Our experienced instructors are rigorously trained, and our state-of-the-art equipment adheres to the highest industry standards. From pre-jump briefings to landing, we maintain a commitment to safety, ensuring that every skydiving experience with us is not only thrilling but also secure.`,
		image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1704967271/Skydive/about/Tandem7_lj6nxd.jpg",
	},
	{
		title: "Passionate Instructors",
		details: `Behind every successful jump is a team of passionate and certified instructors. Our instructors bring a wealth of experience and enthusiasm to every dive, guiding you through the intricacies of freefall and parachute control. Their dedication to your adventure and safety makes Skydive Rhino Kenya a trusted choice for skydiving enthusiasts.`,
		image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1704967273/Skydive/about/AFF9_z2d4uw.jpg",
	},
];

const About = () => {
	return (
		<Page title="About us">
			<ReusableBanner
				title="About us"
				subtitle="Who we are and what we do"
				type="image"
				src={image}
				height="70vh"
			/>
			<ReusableQuote content="At Skydive Rhino Kenya, we are more than a skydiving center; we are architects of unforgettable moments, orchestrating the symphony of adrenaline, breathtaking views, and boundless freedom in the Kenyan skies. With a commitment to safety, a team of passionate instructors, and a mission to inspire the thrill-seeker in everyone, our skydiving experiences transcend the ordinary, leaving you with memories that linger as a testament to the extraordinary journey you've undertaken with us." />
			<ContentBlocks
				title="More on us"
				subtitle="Delve into the heart of Skydive Rhino Kenya, where the air is infused with the spirit of adventure and the horizon becomes a canvas for daring dreams. Our narrative unfolds in the vast expanse of Nairobi's skies, where each jump is a chapter written in the language of exhilaration. Join us in the pursuit of the extraordinary, where safety is paramount, our instructors are the architects of airborne thrill, and every dive crafts indelible memories against the backdrop of Kenya's stunning landscapes. Discover the essence of our story, where passion for skydiving meets a commitment to providing a soaring experience unlike any other"
				content={content}
				backgroundImage={image}
			/>
			<AboutFAQ />
			<Subscribe />
		</Page>
	);
};

export default About;
