import { Page } from "../../components/page";
import ReusableBanner from "../../modules/banner/banner";
import HomeTandem from "./sections/tandem";
import ReusableSpecs from "../../modules/specs";
import HomeAFF from "./sections/aff";
import Subscribe from "../../modules/subscribe/subscribe";
import ReusableVideoContent from "../../modules/video/video-content";

const video =
	"https://res.cloudinary.com/dqweh6zte/video/upload/v1698327008/skydive%20rhino/videos/skydive_1080p_u3mdwh.mp4";

const subtitle =
	"Sed sapien felis vestibulum ut dignissim quis sagittis sit amet ipsum donec consectetur at orci quis viverra nullam tempus felis eget nunc feugiat vitae efficitur risus pulvinar sed commodo ligula id purus commodo feugiat etiam aliquet aliquam nisl id venenatis integer et arcu vel justo commodo malesuada donec eget euismod elit aliquam vel ornare augue maecenas sed urna facilisis dictum lacus auctor accumsan ex nullam ex orci placerat sed massa sit amet mollis consectetur neque donec semper suscipit rhoncus class aptent taciti.";

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
			<HomeTandem />
			<ReusableVideoContent
				src={video}
				title="Tandem Skydiving"
				subTitle={subtitle}
				height="70vh"
			/>
			<HomeAFF />
			<ReusableVideoContent
				src={video}
				title="Accelerated Freefall"
				subTitle={subtitle}
				height="70vh"
			/>
			<Subscribe />
		</Page>
	);
};

export default Home;
