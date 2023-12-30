import { Page } from "../../components/page";
import ReusableBanner from "../../modules/banner";
import GalleryBody from "./sections/body";

const Gallery = () => {
	return (
		<Page title="Gallery">
			<ReusableBanner/>
			<GalleryBody/>
		</Page>
	);
};

export default Gallery;
