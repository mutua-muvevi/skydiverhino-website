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
	useTheme,
	useMediaQuery,
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
		venue: "Nairobi Kenya",
		date: "02/01/2024"
	},
	{
		title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lorem turpis, interdum tristique pellentesque ut, euismod sed nulla. Proin sed ex a tortor malesuada dapibus sit amet a lectus. Aenean id accumsan felis. Suspendisse accumsan tempus tortor sed ornare. Nulla facilisi. Duis ornare, lacus in vehicula facilisis, orci odio gravida ante, id vehicula tellus quam id ex. Phasellus porttitor tortor placerat sapien molestie pellentesque vel in est. Donec varius venenatis iaculis.",
		image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1693092854/Officechest/users/vo6vt18bzi8q2xzdjbqp.jpg",
		venue: "Nairobi Kenya",
		date: "02/01/2024"
	},
	{
		title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lorem turpis, interdum tristique pellentesque ut, euismod sed nulla. Proin sed ex a tortor malesuada dapibus sit amet a lectus. Aenean id accumsan felis. Suspendisse accumsan tempus tortor sed ornare. Nulla facilisi. Duis ornare, lacus in vehicula facilisis, orci odio gravida ante, id vehicula tellus quam id ex. Phasellus porttitor tortor placerat sapien molestie pellentesque vel in est. Donec varius venenatis iaculis.",
		image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1690303441/officechest/services/jog7skpaltedt5a3eips.jpg",
		venue: "Nairobi Kenya",
		date: "02/01/2024"
	},
	{
		title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lorem turpis, interdum tristique pellentesque ut, euismod sed nulla. Proin sed ex a tortor malesuada dapibus sit amet a lectus. Aenean id accumsan felis. Suspendisse accumsan tempus tortor sed ornare. Nulla facilisi. Duis ornare, lacus in vehicula facilisis, orci odio gravida ante, id vehicula tellus quam id ex. Phasellus porttitor tortor placerat sapien molestie pellentesque vel in est. Donec varius venenatis iaculis.",
		image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1693092854/Officechest/users/vo6vt18bzi8q2xzdjbqp.jpg",
		venue: "Nairobi Kenya",
		date: "02/01/2024"
	},
];

const HomeEvent = () => {
	const theme = useTheme();
	const isXl = useMediaQuery(theme.breakpoints.up("xl"));
	const isLg = useMediaQuery(theme.breakpoints.up("lg"));
	const isMd = useMediaQuery(theme.breakpoints.up("md"));

	let displayedContent = content;
	if (isXl) {
		displayedContent = content.slice(0, 4);
	} else if (isLg) {
		displayedContent = content.slice(0, 3);
	} else if (isMd) {
		displayedContent = content.slice(0, 2);
	}

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
						color="#fff"
						divider={false}
					/>

					<div>
						<Grid container spacing={3}>
							{displayedContent.map((item, index) => {
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
													<Stack direction="column" spacing={2}>
														<Typography
															gutterBottom
															variant="h5"
															component="div"
															textAlign="justify"
														>
															{sentenceCase(item.title)}
														</Typography>
														<Typography
															variant="body2"
															color="text.secondary"
															textAlign="justify"
														>
															{truncateStr(
																item.content,
																150
															)}
														</Typography>

														<Stack direction="row" spacing={2} >
															<Iconify icon="mdi:calendar-month" />
															<Typography variant="body2" color="text.secondary">
																{item.date}
															</Typography>
														</Stack>

														<Stack direction="row" spacing={2} >
															<Iconify icon="gridicons:location" />
															<Typography variant="body2" color="text.secondary">
																{item.venue}
															</Typography>
														</Stack>
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
