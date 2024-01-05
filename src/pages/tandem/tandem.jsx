import { Page } from "../../components/page";
import Services from "../../modules/services/services";
import { useSelector } from "../../redux/store";

const Tandem = () => {
	const {
		services: { data: allServices },
	} = useSelector((state) => state.services);

	const tandemService = allServices.find(
		(service) => service.slug === "tandem"
	);

	const tandemServiceData = {
		banner: {
			image: tandemService.thumbnail,
			title: tandemService.name,
			subtitle: "Tanden skydiving with Skydive Rhino",
		},

		introDescription: tandemService.introDescription,

		contentBlocks: {
			content: tandemService.contentBlocks,
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
			title: "Tandem Requirements",
			subtitle: "Requirements for tandem skydiving",

			requirements: [
				{
					title: "Age Requirement",
					details:
						"Participants must be at least 18 years of age. This is a strict requirement, and valid photo identification will be required on the day of the jump to confirm your age.",
				},
				{
					title: "Weight Limit",
					details:
						"There is typically a weight limit for tandem skydiving, usually between 220 to 250 pounds. This limit is for the safety of both the participant and the instructor. Additionally, participants should be within a healthy weight range for their height to ensure the harness fits securely.",
				},
				{
					title: "Physical Fitness",
					details:
						"Participants should be in good physical health. While no specific fitness level is required, you should be able to lift your legs for landing. It's important to inform the skydiving center of any medical conditions or physical limitations beforehand.",
				},
				{
					title: "Clothing and Footwear",
					details:
						"Wear comfortable, weather-appropriate clothing that fits well under a jumpsuit. Shoes should be closed-toed and secure on your feet – no sandals, flip-flops, or heels. Sneakers or athletic shoes are ideal.",
				},
				{
					title: "Training Session",
					details:
						"All tandem jumpers are required to complete a brief training session before the jump. This training covers essential information about the jump process, safety procedures, and what to expect during freefall and landing.",
				},
				{
					title: "Health Considerations",
					details:
						"Inform the skydiving center if you have any health issues such as heart conditions, epilepsy, or previous injuries. Certain conditions may prevent you from safely skydiving. Always consult with a healthcare provider if unsure.",
				},
				{
					title: "Alcohol and Drugs",
					details:
						"You must not be under the influence of alcohol or drugs. These substances can impair your judgment and reflexes, posing a significant safety risk. Most centers will refuse to let you jump if they suspect impairment.",
				},
			],
		},

		faq: {
			title: "FAQ",
			subtitle: "Frequently asked questions about tandem skydiving",
			image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1693092854/Officechest/users/vo6vt18bzi8q2xzdjbqp.jpg",
			faq: [
				{
					question:
						"Do I need any special training before my first skydive?",
					answer: "Absolutely! Before your first skydive, you'll participate in a comprehensive training session. This training is essential to ensure your safety and confidence during the jump. You'll learn about the skydiving gear, the dynamics of freefall, controlling your body in the air, and proper landing techniques. Additionally, you'll be briefed on safety protocols and emergency procedures. This training typically takes about 30 minutes to an hour and is conducted by certified instructors. It's designed to be informative yet easy to understand, even for those with no prior experience in skydiving.",
				},
				{
					question: "How high will we jump from?",
					answer: "Skydiving altitudes can vary, but most jumps occur between 10,000 and 15,000 feet. At these heights, you'll experience about 60 seconds of thrilling freefall, reaching speeds of up to 120 miles per hour. After the parachute deployment, you’ll enjoy a peaceful descent lasting several minutes, allowing you to take in stunning aerial views. The altitude not only provides an exhilarating freefall experience but also ensures enough time for the parachute to deploy safely and for you to enjoy the glide down to the landing area.",
				},
				{
					question: "Is there a weight limit for skydiving?",
					answer: "Yes, skydiving does have a weight limit, which is typically between 220 to 250 pounds. This limit is set for safety reasons and depends on the equipment used by the skydiving center. It's important to know that these limits are not just about the parachute's capacity, but also about the safety of the jumper during landing. Heavier individuals might experience a faster descent and harder landings, which increases the risk of injury. If you're near or above the weight limit, it's best to consult with the skydiving center beforehand for guidance.",
				},
				{
					question: "Can I skydive if I have a medical condition?",
					answer: "If you have a medical condition, it's crucial to consult with your doctor before considering skydiving. While many people with various health conditions can safely skydive, some conditions may increase the risks. These include, but are not limited to, heart problems, epilepsy, and severe physical injuries. It's also important to inform the skydiving center of any medical issues you may have. They can provide additional guidance and take necessary precautions to ensure your safety. Remember, safety is the top priority, and full disclosure of any health concerns is essential.",
				},
				{
					question: "What should I wear for skydiving?",
					answer: "When dressing for skydiving, comfort and safety are key. Opt for casual, fitted clothing suitable for the weather. Loose or baggy clothes can be uncomfortable under the harness and may restrict your movement. Athletic shoes are ideal; avoid sandals, flip-flops, or heavy boots. Most skydiving centers provide jumpsuits that you can wear over your clothes. These jumpsuits are designed to be aerodynamic and protect your clothes during the jump. Also, consider the temperature at altitude; it can be much colder than on the ground. Layers are always a good idea.",
				},
				{
					question: "Can I bring my camera or GoPro?",
					answer: "While capturing your skydive experience is a great idea, for safety reasons, personal cameras and GoPros are usually not allowed, especially for first-time skydivers. Holding onto a camera during a skydive poses significant risks, as it can distract you from essential safety procedures and poses a hazard if dropped. However, most skydiving centers offer professional photo and video packages. Experienced skydiving photographers can accompany you, capturing high-quality images and footage of your entire experience from a perspective you couldn’t achieve on your own.",
				},
				{
					question: "What happens if the parachute doesn't open?",
					answer: "The scenario of a parachute not opening is rare, thanks to stringent safety protocols and equipment checks. However, should this occur, skydiving rigs are equipped with a reserve parachute, which is meticulously packed and inspected by certified professionals. Additionally, an Automatic Activation Device (AAD) is included in modern skydiving gear. This device automatically deploys the reserve parachute if the main one hasn’t opened by a predetermined altitude. These safety measures ensure that even in the unlikely event of a main parachute failure, you have a backup system for a safe landing.",
				},
				{
					question: "Is skydiving safe?",
					answer: "Skydiving is an extreme sport and, like any such activity, comes with inherent risks. However, it is generally safe when conducted through reputable operators who adhere to strict safety standards. Modern equipment, certified and experienced instructors, regular gear inspections, and adherence to safety regulations significantly minimize risks. Additionally, technological advancements like Automatic Activation Devices add an extra layer of safety. While the sensation of jumping out of an airplane can be intimidating, statistically, skydiving has a very low accident rate, especially when compared to other adventure sports.",
				},
				{
					question:
						"How long does the entire skydiving experience take?",
					answer: "While the skydive itself is brief, the entire experience requires a significant portion of your day. You should allocate at least half a day for your skydiving adventure. This time includes registration, a comprehensive training session, gearing up, aircraft ascent, the jump itself, and the debriefing session afterward. The preparation process is thorough, with detailed safety checks and training to ensure everyone’s safety and comfort. The jump includes several minutes of freefall and parachute descent, making the overall experience unforgettable.",
				},
				{
					question: "Can I skydive if I’m afraid of heights?",
					answer: "Many people with a fear of heights find they can skydive without issue. The experience of height in an airplane differs significantly from being at a high point on the ground. The disconnection from the ground often reduces the fear response. However, if you have a fear of heights, it's important to discuss this with your instructor so they can provide additional support and reassurance. Many first-time skydivers are surprised to find that once they jump, the thrill of freefall and the beauty of the descent override their initial fears.",
				},
			],
		},

		gallery: {
			title: "Out Tandem Gallery",
			subtitle: "Our tandem skydiving gallery",
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

	console.log(tandemService);

	return (
		<Page title="Tandem">
			<Services
				bannerHeight="70vh"
				banner={tandemServiceData.banner}
				intro={tandemService.introDescription}
				contentBlocks={tandemServiceData.contentBlocks}
				prices={tandemServiceData.prices}
				requirements={tandemServiceData.requirements}
				faq={tandemServiceData.faq}
				gallery={tandemServiceData.gallery}
			/>
		</Page>
	);
};

export default Tandem;
