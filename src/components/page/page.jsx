import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { forwardRef } from "react";
// @mui
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// ----------------------------------------------------------------------
const StyledPage = styled(Box)(() => ({
	minHeight: "100%",
}));

const Page = forwardRef(({ children, title = "", meta, ...other }, ref) => (
	<>
		<Helmet>
			<title>{`${title} | Skydive Rhino Kenya`}</title>
			{meta}
		</Helmet>

		<StyledPage ref={ref} {...other}>
			{children}
		</StyledPage>
	</>
));

Page.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string,
	meta: PropTypes.node,
};

Page.displayName = "Page";

export default Page;
