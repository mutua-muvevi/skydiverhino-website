import { Typography } from "@mui/material";
import { Page } from "../../components/page";
import { useTheme } from "@emotion/react";

const Home = () => {
	const theme = useTheme()
	console.log(theme)
	return (
		<Page title="Home">
			Home
			<Typography variant="subtitle1">subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
			<Typography variant="subtitle2">subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
			<Typography variant="body1">body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
			<Typography variant="body2">body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
			<Typography variant="button">button text</Typography>
			<Typography variant="caption">caption text</Typography>
		</Page>
	);
};

export default Home;
