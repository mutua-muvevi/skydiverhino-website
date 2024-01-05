import ReusableBanner from "../../modules/banner/banner";
import ContentBlocks from "../../modules/content/blocks";
import PropTypes from "prop-types";
import ServicePricing from "./sections/pricing";
import ServiceRequirements from "./sections/requirements";
import ServiceGallery from "./sections/gallery";
import ServiceFAQ from "./sections/faq";
import { Button, Container, Stack, Typography } from "@mui/material";
import IntroDescription from "./sections/intro";

const Services = ({
	bannerHeight,
	banner,
	intro,
	contentBlocks,
	faq,
	requirements,
	prices,
	gallery,
}) => {
	return (
		<div>
			<ReusableBanner
				title={banner.title ? banner.title : "Services"}
				subtitle={
					banner.subtitle
						? banner.subtitle
						: "The latest news from Skydive Rhino"
				}
				type="image"
				src={banner.image}
				height={bannerHeight ? bannerHeight : "70vh"}
			/>
			<IntroDescription
				content={intro}
			/>
			<ContentBlocks
				backgroundImage={contentBlocks.backgroundImage}
				content={contentBlocks.content}
			/>
			<ServicePricing prices={prices} />
			<ServiceRequirements requirements={requirements} />
			<ServiceFAQ faq={faq} backgroundImage={faq.image} />
			<ServiceGallery gallery={gallery} />

			<Container maxWidth="xl" sx={{ py: 10 }}>
				<Stack direction="column" spacing={3}>
					<Button variant="contained">
						<Typography variant="h4">Book Now</Typography>
					</Button>
				</Stack>
			</Container>
		</div>
	);
};

Services.propTypes = {
	content: PropTypes.array,
	bannerImage: PropTypes.string,
	bannerTitle: PropTypes.string,
	bannerSubtitle: PropTypes.string,
	bannerHeight: PropTypes.string,

	banner: PropTypes.object,
	intro: PropTypes.string,
	contentBlocks: PropTypes.object,

	prices: PropTypes.object,
	requirements: PropTypes.object,
	gallery: PropTypes.object,
	faq: PropTypes.object,
};

export default Services;
