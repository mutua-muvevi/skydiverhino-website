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


const ServiceRequirements = ({  requirements }) => {
	const theme = useTheme();
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	const summaryColor = requirements.image ? "#fff" : theme.palette.text.primary;
	const expandedColor = theme.palette.text.primary;

	return (
		<div>
			<Container maxWidth="xl" sx={{ py: 10 }}>
				<Stack direction="column" spacing={3}>
					<TitleSubtitle
						title={requirements.title ? requirements.title : "Requirements"}
						subtitle={requirements.subtitle ? requirements.subtitle : "The latest news from Skydive Rhino"}
						position="left"
					/>

					{requirements.requirements.map((item, index) => (
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
									{item.details}
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
	requirements: PropTypes.object
};

export default ServiceRequirements;
