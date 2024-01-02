import {
	Card,
	CardContent,
	Container,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import Iconify from "../../../components/iconify";
import Iframe from "../../../components/iframe";

const contactItems = [
	{
		icon: "material-symbols:mark-email-read-rounded",
		title: "Email",
		subtitle: "info@skydiverhinokenya.com",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec aliquam ipsum. Curabitur sed lobortis justo, eu iaculis ex. Aliquam",
	},
	{
		icon: "tabler:phone-filled",
		title: "Call us",
		subtitle: "+254 700 000 000, +254 700 000 001",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec aliquam ipsum. Curabitur sed lobortis justo, eu iaculis ex. Aliquam",
	},
	{
		icon: "zondicons:location",
		title: "Location",
		subtitle: "Nairobi, Kenya",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec aliquam ipsum. Curabitur sed lobortis justo, eu iaculis ex. Aliquam",
	},
];

const ContactUpperBody = () => {
	const mapSource =
		"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.025703915275!2d36.8014604820656!3d-1.321938834203717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1044928e4f75%3A0xa3cdc31c68174a47!2sLengai%20House!5e0!3m2!1sen!2ske!4v1704234603953!5m2!1sen!2ske";

	return (
		<div>
			<Container maxWidth="xl" sx={{ py: 10 }}>
				<Stack direction="column" spacing={3}>
					<div>
						<Grid container spacing={3}>
							{contactItems.map((item, index) => (
								<Grid item xs={12}  md={4} key={index}>
									<Card>
										<CardContent>
											<Stack
												direction="column"
												spacing={3}
											>
												<Iconify
													icon={item.icon}
													width={45}
												/>
												<Stack direction="column">
													<Typography variant="h5">
														{item.title}
													</Typography>
													<Typography
														variant="h6"
														color="text.secondary"
													>
														{item.subtitle}
													</Typography>
												</Stack>
												<Typography variant="body1">
													{item.text}
												</Typography>
											</Stack>
										</CardContent>
									</Card>
								</Grid>
							))}
						</Grid>
					</div>

					<Card>
						<Iframe
							src={mapSource}
							title="Skydive Rhino Kenya Location"
							style={{
								height: "50vh",
								border: "0",
								width: "100%",
							}}
						/>
					</Card>
				</Stack>
			</Container>
		</div>
	);
};

export default ContactUpperBody;
