import PropTypes from "prop-types";
import ReusableIntroContent from "../../../modules/sections/intro-content";


const HomeAFF = ({aff}) => {
	const { title, subtitle, image, content, gallery } = aff
	return  (
		<>
			<ReusableIntroContent
				title={title}
				subtitle={subtitle}
				content={content}
				images={gallery}
				backgroundImage={image}
			/>
		</>
	);
};

HomeAFF.propTypes = {
	aff: PropTypes.object,
};

export default HomeAFF;
