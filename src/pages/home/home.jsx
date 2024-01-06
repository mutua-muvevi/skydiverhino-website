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
	const homepage = {
		banner: {
			src: video,
			title: "Skydive Rhino",
			subtitle: subtitle,
		},
		intro: {
			title: "Skydiving",
			subtitle: "The best skydiving experience in the world",
			image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1698335580/skydive%20rhino/videos/skydive_landing_vwertical_xs68xt.jpg",
			content: content,
		},
		tandem: {
			title: "Tandem",
			subtitle: "The best skydiving experience in the world",
			image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1698335580/skydive%20rhino/videos/skydive_landing_vwertical_xs68xt.jpg",
			content: content,
			gallery: [
				"https://res.cloudinary.com/dqweh6zte/image/upload/v1698335580/skydive%20rhino/videos/skydive_landing_vwertical_xs68xt.jpg",
				"https://res.cloudinary.com/dqweh6zte/image/upload/v1690303441/officechest/services/jog7skpaltedt5a3eips.jpg",
				"https://res.cloudinary.com/dqweh6zte/image/upload/v1693092854/Officechest/users/vo6vt18bzi8q2xzdjbqp.jpg",
				"https://res.cloudinary.com/dqweh6zte/image/upload/v1698335580/skydive%20rhino/videos/skydive_landing_vwertical_xs68xt.jpg",
				"https://res.cloudinary.com/dqweh6zte/image/upload/v1690303441/officechest/services/jog7skpaltedt5a3eips.jpg",
				"https://res.cloudinary.com/dqweh6zte/image/upload/v1693092854/Officechest/users/vo6vt18bzi8q2xzdjbqp.jpg",
			]
		},
		quote: subtitle,
		aff: {
			title: "Accelerated freefall",
			subtitle: "The best skydiving experience in the world",
			image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1698335580/skydive%20rhino/videos/skydive_landing_vwertical_xs68xt.jpg",
			content: content,
			gallery: [
				"https://res.cloudinary.com/dqweh6zte/image/upload/v1698335580/skydive%20rhino/videos/skydive_landing_vwertical_xs68xt.jpg",
				"https://res.cloudinary.com/dqweh6zte/image/upload/v1690303441/officechest/services/jog7skpaltedt5a3eips.jpg",
				"https://res.cloudinary.com/dqweh6zte/image/upload/v1693092854/Officechest/users/vo6vt18bzi8q2xzdjbqp.jpg",
				"https://res.cloudinary.com/dqweh6zte/image/upload/v1698335580/skydive%20rhino/videos/skydive_landing_vwertical_xs68xt.jpg",
				"https://res.cloudinary.com/dqweh6zte/image/upload/v1690303441/officechest/services/jog7skpaltedt5a3eips.jpg",
				"https://res.cloudinary.com/dqweh6zte/image/upload/v1693092854/Officechest/users/vo6vt18bzi8q2xzdjbqp.jpg",
			]
		},
	};
	return (
		<Page title="Home">
			<ReusableBanner
				type="video"
				height="70vh"
				src={homepage.banner.src}
				title={homepage.banner.title}
				subtitle={homepage.banner.subtitle}
			/>
			<LeftRight
				title={homepage.intro.title}
				subtitle={homepage.intro.subtitle}
				image={homepage.intro.image}
				content={homepage.intro.content}
			/>
			<HomeTandem tandem={homepage.tandem}/>
			<ReusableQuote content={homepage.quote} />
			<HomeAFF aff={homepage.aff} />
			<HomeEvent />
			<HomeNews />
			<Subscribe />
		</Page>
	);
};

export default Home;
