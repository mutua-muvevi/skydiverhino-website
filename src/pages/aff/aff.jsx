import { Page } from "../../components/page";
import Services from "../../modules/services/services";

import { useSelector } from "../../redux/store";

const AFF = () => {

	const {
		services: { data: allServices },
	} = useSelector((state) => state.services);

	const affService = allServices.find(
		(service) => service.slug === "aff"
	);
	
	const AFFServiceData = {
		banner: {
			image: affService.thumbnail,
			title: affService.name,
			subtitle: "Accelerated Free fall skydiving with Skydive Rhino",
		},

		introDescription: affService.introDescription,

		contentBlocks: {
			content: affService.contentBlocks,
			backgroundImage:
			"https://storage.googleapis.com/skydiverhino/images/1704298011268-Tandem12.jpg"
		},

		prices: {
			title: "Accelerated Free fall Pricing",
			subtitle:
				"Explore our competitive pricing for the Accelerated Free Fall course",
			image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1673047324/skydive%20rhino/images/skydiving-gd90b87829_1920_ztat2b.jpg",
			prices: affService.prices,
		},

		requirements: {
			title: "Accelerated Free fall Requirements",
			subtitle: "Requirements for tandem skydiving",

			requirements: affService.requirements,
		},

		faq: {
			title: "FAQ",
			subtitle: "Frequently asked questions about tandem skydiving",
			image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1693092854/Officechest/users/vo6vt18bzi8q2xzdjbqp.jpg",
			faq: affService.faqs,
		},

		gallery: {
			title: "Our Accelerated Free fall Gallery",
			subtitle: "Our tandem skydiving gallery",
			images: affService.gallery,
		},
	};
	return (
		<Page title="AFF">
			<Services
				bannerHeight="70vh"
				banner={AFFServiceData.banner}
				intro={AFFServiceData.introDescription}
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
