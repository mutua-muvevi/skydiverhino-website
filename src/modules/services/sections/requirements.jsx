import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Container,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import TitleSubtitle from "../../title-subtitle";
import { useState } from "react";
import Iconify from "../../../components/iconify";
import PropTypes from "prop-types";

const requirements = [
	{
		title: "Age Requirement",
		content:
			"Participants must be at least 18 years of age. This is a strict requirement, and valid photo identification will be required on the day of the jump to confirm your age.",
	},
	{
		title: "Weight Limit",
		content:
			"There is typically a weight limit for tandem skydiving, usually between 220 to 250 pounds. This limit is for the safety of both the participant and the instructor. Additionally, participants should be within a healthy weight range for their height to ensure the harness fits securely.",
	},
	{
		title: "Physical Fitness",
		content:
			"Participants should be in good physical health. While no specific fitness level is required, you should be able to lift your legs for landing. It's important to inform the skydiving center of any medical conditions or physical limitations beforehand.",
	},
	{
		title: "Clothing and Footwear",
		content:
			"Wear comfortable, weather-appropriate clothing that fits well under a jumpsuit. Shoes should be closed-toed and secure on your feet – no sandals, flip-flops, or heels. Sneakers or athletic shoes are ideal.",
	},
	{
		title: "Training Session",
		content:
			"All tandem jumpers are required to complete a brief training session before the jump. This training covers essential information about the jump process, safety procedures, and what to expect during freefall and landing.",
	},
	{
		title: "Health Considerations",
		content:
			"Inform the skydiving center if you have any health issues such as heart conditions, epilepsy, or previous injuries. Certain conditions may prevent you from safely skydiving. Always consult with a healthcare provider if unsure.",
	},
	{
		title: "Alcohol and Drugs",
		content:
			"You must not be under the influence of alcohol or drugs. These substances can impair your judgment and reflexes, posing a significant safety risk. Most centers will refuse to let you jump if they suspect impairment.",
	},
];

const ServiceRequirements = ({ backgroundImage }) => {
	const theme = useTheme();
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	const summaryColor = backgroundImage ? "#fff" : theme.palette.text.primary;
	const expandedColor = theme.palette.text.primary;

	return (
		<div>
			<Container maxWidth="xl" sx={{ py: 10 }}>
				<Stack direction="column" spacing={3}>
					<TitleSubtitle
						title="Requirements"
						subtitle="What you need to get started"
						position="left"
					/>

					{requirements.map((item, index) => (
						<Accordion key={index} onChange={handleChange(index)}>
							<AccordionSummary
								aria-controls={`panel${index}a-content`}
								id={`panel${index}a-header`}
								expandIcon={
									<Iconify
										icon="mdi:chevron-down"
										sx={{
											color:
												expanded === index
													? expandedColor
													: summaryColor,
										}}
									/>
								}
							>
								<Typography
									variant="h4"
									sx={{
										color:
											expanded === index
												? expandedColor
												: summaryColor,
									}}
								>
									{index + 1}. {item.title}
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography
									variant="h5"
									fontWeight={500}
									textAlign="justify"
								>
									{item.content}
								</Typography>
							</AccordionDetails>
						</Accordion>
					))}
				</Stack>
			</Container>
		</div>
	);
};

ServiceRequirements.propTypes = {
	backgroundImage: PropTypes.string,
};

export default ServiceRequirements;
