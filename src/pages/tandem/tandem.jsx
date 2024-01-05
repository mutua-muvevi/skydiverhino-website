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
			"https://storage.googleapis.com/skydiverhino/images/1704298011268-Tandem12.jpg"
		},

		prices: {
			title: "Tandem Pricing",
			subtitle:
				"Explore our competitive pricing for the Accelerated Free Fall course",
			image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1673047324/skydive%20rhino/images/skydiving-gd90b87829_1920_ztat2b.jpg",
			prices: tandemService.prices,
		},

		requirements: {
			title: "Tandem Requirements",
			subtitle: "Requirements for tandem skydiving",

			requirements: tandemService.requirements,
		},

		faq: {
			title: "FAQ",
			subtitle: "Frequently asked questions about tandem skydiving",
			image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1693092854/Officechest/users/vo6vt18bzi8q2xzdjbqp.jpg",
			faq: tandemService.faqs,
		},

		gallery: {
			title: "Out Tandem Gallery",
			subtitle: "Our tandem skydiving gallery",
			images: tandemService.gallery,
		},
	};

	console.log("TANDEM SERVICE", tandemService);

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
