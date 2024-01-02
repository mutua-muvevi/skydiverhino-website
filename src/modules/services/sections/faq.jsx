import ReusableFAQ from "../../FAQ/faq";
import PropTypes from "prop-types";

const ServiceFAQ = ({backgroundImage, faq}) => {
	return (
		<div>
			<ReusableFAQ faq={faq} backgroundImage={backgroundImage} />
		</div>
	);
};

ServiceFAQ.propTypes = {
	backgroundImage: PropTypes.string,
	faq: PropTypes.array,
};

export default ServiceFAQ;
