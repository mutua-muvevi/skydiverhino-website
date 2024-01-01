import { Stack } from "@mui/material";
import TitleSubtitle from "../../../modules/title-subtitle";

const HomeTandem = () => {
	return (
		<Stack sx={{p:20}}>
			<Stack>
				<TitleSubtitle
					title="Tandem Skydiving"
					subtitle="The best way to experience skydiving"
					position="left"
				/>
			</Stack>
			<Stack>Lower</Stack>
		</Stack>
	);
};

export default HomeTandem;
