import PropTypes from "prop-types";
import ReusableIntroContent from "../../../modules/sections/intro-content";


const HomeTandem = ({tandem}) => {
	const { title, subtitle, image, content, gallery } = tandem
	return (
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

HomeTandem.propTypes = {
	tandem: PropTypes.object,
};

export default HomeTandem;
