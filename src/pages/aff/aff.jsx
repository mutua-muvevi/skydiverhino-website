import { Page } from "../../components/page";
import Services from "../../modules/services/services";

const AFFServiceData = {
	banner: {
		image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1679749553/skydive%20rhino/images/IMG_20230126_072246_564_voxwjd.jpg",
		title: "Accelerated Free Fall",
		subtitle: "Master skydiving with our AFF program",
	},

	contentBlocks: {
		content: [
			{
				title: "The AFF Program",
				details: `Our Accelerated Free Fall program is designed for those who wish to become competent solo skydivers. The program includes ground training, assisted freefall jumps, and gradual progression towards solo jumps, under the guidance of our experienced instructors.`,
				image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1679749553/skydive%20rhino/images/IMG_20230126_072246_564_voxwjd.jpg",
			},
			{
				title: "Comprehensive Training",
				details: `The AFF course begins with an in-depth ground training session, equipping you with the knowledge and skills needed for solo skydiving. You'll learn about equipment, freefall techniques, canopy control, and emergency procedures.`,
				image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1692640097/officechest/services/ezqt2maojaypqh0movdm.png",
			},
		],
		backgroundImage:
			"https://res.cloudinary.com/dqweh6zte/image/upload/v1693131018/Officechest/users/bgbyh9316o4seul02hgp.jpg",
	},
	prices: {
		title: "AFF Program Pricing",
		subtitle:
			"Explore our competitive pricing for the Accelerated Free Fall course",
		image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1673047324/skydive%20rhino/images/skydiving-gd90b87829_1920_ztat2b.jpg",
		prices: [
			{
				title: "AFF Level 1",
				price: "$350",
				listItems: [
					"Ground training session",
					"First jump with two instructors",
					"Gear rental included",
					"Debriefing and logbook entry",
				],
			},
			{
				title: "AFF Full Course",
				price: "$1,500",
				listItems: [
					"7 levels of progression",
					"All jumps with instructors",
					"All necessary gear rentals",
					"Personal logbook",
					"Graduation certificate upon completion",
				],
			},
			{
				title: "AFF Advanced Package",
				price: "$2,200",
				listItems: [
					"Complete AFF course",
					"5 coached solo jumps",
					"Advanced freefall techniques",
					"Preparation for skydiving license",
				],
			},
		],
	},

	requirements: {
		title: "AFF Requirements",
		subtitle: "Essential prerequisites for joining our AFF program",

		requirements: [
			{
				title: "Age Requirement",
				details:
					"Participants must be at least 18 years old with valid photo identification.",
			},
			{
				title: "Physical Fitness",
				details:
					"Good health and physical fitness are required, with the ability to lift legs for landing.",
			},
			{
				title: "Weight Limit",
				details:
					"Weight limit typically up to 250 pounds, depending on gear availability.",
			},
			{
				title: "Medical Clearance",
				details:
					"Participants with medical conditions must provide clearance from a physician.",
			},
			{
				title: "Prior Skydiving Experience",
				details:
					"Prior tandem skydiving experience is recommended but not mandatory.",
			},
		],
	},

	faq: {
		title: "AFF FAQ",
		subtitle: "Commonly asked questions about our AFF program",
		image:"https://res.cloudinary.com/dqweh6zte/image/upload/v1690303441/officechest/services/jog7skpaltedt5a3eips.jpg",
		faq: [
			{
				question: "How long does the AFF course take?",
				answer: "The duration varies, but typically the course can be completed within a few weeks to a couple of months, depending on weather conditions and individual progression.",
			},
			{
				question: "What if I don’t pass a level?",
				answer: "Each level must be passed to progress. If a level is not completed successfully, it can be repeated until the necessary skills are demonstrated.",
			},
			{
				question: "Is there any classroom training involved?",
				answer: "Yes, the course begins with thorough ground training, covering all aspects of solo skydiving, including safety procedures and equipment knowledge.",
			},
			{
				question: "What happens after completing the AFF course?",
				answer: "After completing all levels, you can continue with coached jumps and work towards a skydiving license, allowing you to skydive solo without instructor supervision.",
			},
			{
				question:
					"Are there any additional costs not included in the course fee?",
				answer: "Course fees generally cover all necessary training and jumps. Additional costs may include repeat levels, membership fees, or personal equipment purchases.",
			},
		],
	},

	gallery: {
		title: "Our AFF Gallery",
		subtitle: "Our accelerated freefall skydiving gallery",
		images: [
			"https://res.cloudinary.com/dqweh6zte/image/upload/v1673047324/skydive%20rhino/images/skydiving-gd90b87829_1920_ztat2b.jpg",
			"https://res.cloudinary.com/dqweh6zte/image/upload/v1692719152/officechest/services/ppqibj8mpvumxmzj7kqb.jpg",
			"https://res.cloudinary.com/dqweh6zte/image/upload/v1693131018/Officechest/users/bgbyh9316o4seul02hgp.jpg",
			"https://res.cloudinary.com/dqweh6zte/image/upload/v1690303441/officechest/services/jog7skpaltedt5a3eips.jpg",
			"https://res.cloudinary.com/dqweh6zte/image/upload/v1692719152/officechest/services/ppqibj8mpvumxmzj7kqb.jpg",
			"https://res.cloudinary.com/dqweh6zte/image/upload/v1679650179/skydive%20rhino/images/IMG_20230124_144004_883_xa4ruw.jpg",
			"https://res.cloudinary.com/dqweh6zte/image/upload/v1693131018/Officechest/users/bgbyh9316o4seul02hgp.jpg",
			"https://res.cloudinary.com/dqweh6zte/image/upload/v1690303441/officechest/services/jog7skpaltedt5a3eips.jpg",
			"https://res.cloudinary.com/dqweh6zte/image/upload/v1692640097/officechest/services/ezqt2maojaypqh0movdm.png",
			"https://res.cloudinary.com/dqweh6zte/image/upload/v1679749553/skydive%20rhino/images/IMG_20230126_072246_564_voxwjd.jpg",
		],
	},
};

const AFF = () => {
	return (
		<Page title="AFF">
			<Services
				bannerHeight="70vh"
				banner={AFFServiceData.banner}
				contentBlocks={AFFServiceData.contentBlocks}
				prices={AFFServiceData.prices}
				requirements={AFFServiceData.requirements}
				faq={AFFServiceData.faq}
				gallery={AFFServiceData.gallery}
			/>
		</Page>
	);
};

export default AFF;
