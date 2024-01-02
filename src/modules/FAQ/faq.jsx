import { useState } from "react";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Container,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import PropTypes from "prop-types";
import Iconify from "../../components/iconify";
import TitleSubtitle from "../title-subtitle";

const ReusableFAQ = ({ faq, backgroundImage }) => {
	const theme = useTheme();
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	const summaryColor = backgroundImage ? "#fff" : theme.palette.text.primary;
	const expandedColor = theme.palette.text.primary;

	return (
		<Stack
			sx={{
				backgroundImage: backgroundImage
					? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`
					: "",
				backgroundSize: "cover",
				backgroundAttachment: "fixed",
				color: summaryColor,
				paddingTop: 10,
				paddingBottom: 10,
			}}
		>
			<Container maxWidth="xl">
				<Stack direction="column" spacing={5}>
					<TitleSubtitle
						title={faq.title ? faq.title : "Frequently Asked Questions"}
						subtitle="Here are some of the most common questions we get asked about skydiving."
						divider
						dividerColor="#fff"
					/>

					{faq.faq.map((item, index) => (
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
									{index+1}. {item.question}
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography
									variant="h5"
									fontWeight={500}
									textAlign="justify"
								>
									{item.answer}
								</Typography>
							</AccordionDetails>
						</Accordion>
					))}
				</Stack>
			</Container>
		</Stack>
	);
};

ReusableFAQ.propTypes = {
	faq: PropTypes.array.isRequired,
	backgroundImage: PropTypes.string,
};

export default ReusableFAQ;
