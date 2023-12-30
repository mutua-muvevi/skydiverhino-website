import { Page } from "../../components/page";
import ReusableBanner from "../../modules/banner";
import Subscribe from "../../modules/subscribe";
import NewsBody from "./sections/body";

const News = () => {
	return (
		<Page title="News">
			<ReusableBanner/>
			<NewsBody/>
			<Subscribe/>
		</Page>
	);
};

export default News;
