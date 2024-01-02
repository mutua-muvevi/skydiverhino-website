import { Page } from "../../components/page";
import ReusableBanner from "../../modules/banner/banner";
import HomeTandem from "./sections/tandem";
import HomeAFF from "./sections/aff";
import Subscribe from "../../modules/subscribe/subscribe";
import HomeNews from "./sections/news";
import HomeEvent from "./sections/event";
import ReusableQuote from "../../modules/quote/quote";
import LeftRight from "../../modules/content/left-right";

const video =
	"https://res.cloudinary.com/dqweh6zte/video/upload/v1698327008/skydive%20rhino/videos/skydive_1080p_u3mdwh.mp4";

const subtitle =
	"Sed sapien felis vestibulum ut dignissim quis sagittis sit amet ipsum donec consectetur at orci quis viverra nullam tempus felis eget nunc feugiat vitae efficitur risus pulvinar sed commodo ligula id purus commodo feugiat etiam aliquet aliquam nisl id venenatis integer et arcu vel justo commodo malesuada donec eget euismod elit aliquam vel ornare augue maecenas sed urna facilisis dictum lacus auctor accumsan ex nullam ex orci placerat sed massa sit amet mollis consectetur neque donec semper suscipit rhoncus class aptent taciti.";

const content = [
	"Sed sapien felis vestibulum ut dignissim quis sagittis sit amet ipsum donec consectetur at orci quis viverra nullam tempus felis eget nunc feugiat vitae efficitur risus pulvinar sed commodo ligula id purus commodo feugiat etiam aliquet aliquam nisl id venenatis integer et arcu vel justo commodo malesuada donec eget euismod elit aliquam vel ornare augue maecenas sed urna facilisis dictum lacus auctor accumsan ex nullam ex orci placerat sed massa sit amet mollis consectetur neque donec semper suscipit rhoncus class aptent taciti.",
];

const Home = () => {
	return (
		<Page title="Home">
			<ReusableBanner
				type="video"
				src={video}
				height="70vh"
				title="Skydive Rhino"
				subTitle={subtitle}
			/>
			<LeftRight
				title="Skydiving"
				subtitle="The best skydiving experience in the world"
				image="https://res.cloudinary.com/dqweh6zte/image/upload/v1698335580/skydive%20rhino/videos/skydive_landing_vwertical_xs68xt.jpg"
				content={content}
			/>
			<HomeTandem />
			<ReusableQuote content={subtitle} />
			<HomeAFF />
			<Subscribe />
			<HomeEvent />
			<HomeNews />
		</Page>
	);
};

export default Home;
