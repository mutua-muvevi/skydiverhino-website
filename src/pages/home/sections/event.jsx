import {
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import TitleSubtitle from "../../../modules/title-subtitle";
import { sentenceCase } from "change-case";
import { truncateStr } from "../../../utils/format-string";
import Iconify from "../../../components/iconify";

const image =
	"https://res.cloudinary.com/dqweh6zte/image/upload/v1690303441/officechest/services/jog7skpaltedt5a3eips.jpg";

const content = [
	{
		title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lorem turpis, interdum tristique pellentesque ut, euismod sed nulla. Proin sed ex a tortor malesuada dapibus sit amet a lectus. Aenean id accumsan felis. Suspendisse accumsan tempus tortor sed ornare. Nulla facilisi. Duis ornare, lacus in vehicula facilisis, orci odio gravida ante, id vehicula tellus quam id ex. Phasellus porttitor tortor placerat sapien molestie pellentesque vel in est. Donec varius venenatis iaculis.",
		image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1690303441/officechest/services/jog7skpaltedt5a3eips.jpg",
		venue: "Nairobi Kenya"
	},
	{
		title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lorem turpis, interdum tristique pellentesque ut, euismod sed nulla. Proin sed ex a tortor malesuada dapibus sit amet a lectus. Aenean id accumsan felis. Suspendisse accumsan tempus tortor sed ornare. Nulla facilisi. Duis ornare, lacus in vehicula facilisis, orci odio gravida ante, id vehicula tellus quam id ex. Phasellus porttitor tortor placerat sapien molestie pellentesque vel in est. Donec varius venenatis iaculis.",
		image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1693092854/Officechest/users/vo6vt18bzi8q2xzdjbqp.jpg",
		venue: "Nairobi Kenya"
	},
	{
		title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lorem turpis, interdum tristique pellentesque ut, euismod sed nulla. Proin sed ex a tortor malesuada dapibus sit amet a lectus. Aenean id accumsan felis. Suspendisse accumsan tempus tortor sed ornare. Nulla facilisi. Duis ornare, lacus in vehicula facilisis, orci odio gravida ante, id vehicula tellus quam id ex. Phasellus porttitor tortor placerat sapien molestie pellentesque vel in est. Donec varius venenatis iaculis.",
		image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1690303441/officechest/services/jog7skpaltedt5a3eips.jpg",
		venue: "Nairobi Kenya"
	},
	{
		title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lorem turpis, interdum tristique pellentesque ut, euismod sed nulla. Proin sed ex a tortor malesuada dapibus sit amet a lectus. Aenean id accumsan felis. Suspendisse accumsan tempus tortor sed ornare. Nulla facilisi. Duis ornare, lacus in vehicula facilisis, orci odio gravida ante, id vehicula tellus quam id ex. Phasellus porttitor tortor placerat sapien molestie pellentesque vel in est. Donec varius venenatis iaculis.",
		image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1693092854/Officechest/users/vo6vt18bzi8q2xzdjbqp.jpg",
		venue: "Nairobi Kenya"
	},
];

const HomeEvent = () => {
	return (
		<Stack
			sx={{
				py: { xs: 5, md: 10, lg: 10 },
				backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundAttachment: "fixed",
			}}
		>
			<Container maxWidth="xl">
				<Stack direction="column" spacing={3}>
					<TitleSubtitle
						title="Events"
						subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					/>

					<div>
						<Grid container spacing={3}>
							{content.map((item, index) => {
								return (
									<Grid
										item
										xs={12}
										md={6}
										lg={4}
										xl={3}
										key={index}
									>
										<Card>
											<CardActionArea>
												<CardMedia
													component="img"
													height="250"
													image={item.image}
													alt="green iguana"
												/>
												<CardContent>
													<Typography
														gutterBottom
														variant="h5"
														component="div"
													>
														{sentenceCase(item.title)}
													</Typography>
													<Typography
														variant="body2"
														color="text.secondary"
													>
														{truncateStr(
															item.content,
															150
														)}
													</Typography>
													<Stack direction="row" spacing={2} sx={{mt:3}}>
														<Iconify icon="mdi:calendar-month" />
														<Typography variant="body2" color="text.secondary">
															{item.venue}
														</Typography>
													</Stack>
												</CardContent>
											</CardActionArea>
										</Card>
									</Grid>
								);
							})}
						</Grid>
					</div>

					<Button
						variant="contained"
						endIcon={<Iconify icon="entypo:arrow-right" />}
					>
						See more
					</Button>
				</Stack>
			</Container>
		</Stack>
	);
};

export default HomeEvent;
