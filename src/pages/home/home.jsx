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



const Home = () => {
	const homepage = {
		banner: {
			src: video,
			title: "Skydive Rhino",
			subtitle: "Welcome to the best skydiving experience in the world",
		},
		intro: {
			title: "Skydiving",
			subtitle: "The best skydiving experience in the world",
			image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1698335580/skydive%20rhino/videos/skydive_landing_vwertical_xs68xt.jpg",
			content: ["At Skydive Rhino Kenya, our expertise soars as high as the altitudes we conquer. What sets us apart is not just the rush of freefall or the stunning panoramas of the landscape below; it's the unwavering dedication to excellence that propels every jump. Our team comprises seasoned professionals who breathe and live the art of skydiving, ensuring that each moment in the air is not merely an adventure but a masterpiece meticulously crafted for your exhilaration. From meticulously maintained equipment to a commitment to the highest safety standards, we bring a harmonious blend of passion and precision to the skydiving experience. With Skydive Rhino Kenya, you're not just choosing a jump; you're choosing the pinnacle of expertise and the promise of an extraordinary adventure.",]
		},
		tandem: {
			title: "Tandem",
			subtitle: "The best skydiving experience in the world",
			image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1698335580/skydive%20rhino/videos/skydive_landing_vwertical_xs68xt.jpg",
			content: ["At Skydive Rhino Kenya, we proudly stake our claim as the purveyors of the world's premier tandem skydiving experience. What sets us apart is a perfect fusion of passion, safety, and unparalleled expertise. Our seasoned instructors are not just professionals; they are enthusiasts who live and breathe the exhilaration of freefall. From the moment you entrust us with your adventure, you're not merely a participant; you're a co-creator of a thrilling narrative, guided by experts with a wealth of experience. Our commitment to safety is unwavering, with meticulously maintained equipment and rigorous adherence to industry-leading standards. The awe-inspiring landscapes of Vipingo serve as the canvas for our tandem jumps, offering an unparalleled backdrop to an adventure that transcends boundaries. Choose Skydive Rhino Kenya for an experience that goes beyond tandem skydiving; choose us for the extraordinary, the exceptional, and the absolute best in the world."],
			gallery: [
				"https://res.cloudinary.com/dqweh6zte/image/upload/v1704967629/Skydive/about/AFF5_y640k7.jpg",
				"https://res.cloudinary.com/dqweh6zte/image/upload/v1704967272/Skydive/about/Tandem9_gd8elt.jpg",
				"https://res.cloudinary.com/dqweh6zte/image/upload/v1704967272/Skydive/about/Tandem13_gks8k3.jpg",
				"https://res.cloudinary.com/dqweh6zte/image/upload/v1704967988/Skydive/about/preparing-to-skydive-6995007_fhy3cx.jpg",
				"https://res.cloudinary.com/dqweh6zte/image/upload/v1704967272/Skydive/about/Tandem12_j0n42d.jpg",
				"https://res.cloudinary.com/dqweh6zte/image/upload/v1704967269/Skydive/about/Tandem6_jlsubd.jpg",
			]
		},
		quote: "At Skydive Rhino Kenya, our commitment to providing exceptional service is not just a promise; it's ingrained in every aspect of your skydiving journey. Our dedication to quality service goes beyond the thrill of freefall; it extends to the seamless experience we craft for every adventurer. From the moment you inquire about our services to the exhilarating descent and safe landing, our team ensures that your journey is marked by professionalism, attention to detail, and a genuine passion for delivering a top-tier skydiving experience. Our customer-centric approach is woven into the fabric of Skydive Rhino Kenya, ensuring that your adventure is not only extraordinary but also supported by a team that values your safety, satisfaction, and the creation of memories that last a lifetime.",
		aff: {
			title: "Accelerated freefall",
			subtitle: "The best skydiving experience in the world",
			image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1704968550/Skydive/about/AFF1_znre24.jpg",
			content: ["At Skydive Rhino Kenya, our distinction as the unrivaled provider of Accelerated Free Fall (AFF) training extends far beyond the breathtaking skies of the landscape; it resides in the very core of our commitment to excellence. What sets us apart as the world's premier AFF service provider is our unwavering dedication to empowering individuals to become certified solo skydivers. Our meticulously designed AFF program, guided by seasoned instructors, ensures a seamless progression through training levels, offering an unparalleled blend of safety, expertise, and personalized guidance. The journey to solo skydiving with Skydive Rhino Kenya is not just a course; it's an immersive experience meticulously crafted for individuals seeking the pinnacle of adventure. Choose us for a transformative journey that transcends the ordinary, and let the skies become your canvas for mastering the art of free fall."],
			gallery: [
				"https://res.cloudinary.com/dqweh6zte/image/upload/v1704967275/Skydive/about/AFF11_pzd4my.jpg",
				"https://res.cloudinary.com/dqweh6zte/image/upload/v1704967272/Skydive/about/AFF12_i5tpfm.jpg",
				"https://res.cloudinary.com/dqweh6zte/image/upload/v1704967268/Skydive/about/AFF7_nwpd7p.jpg",
				"https://res.cloudinary.com/dqweh6zte/image/upload/v1704968547/Skydive/about/AFF2_ev2dqf.jpg",
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
