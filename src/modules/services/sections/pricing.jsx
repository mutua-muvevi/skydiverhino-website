import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Container,
	Stack,
	Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import TitleSubtitle from "../../title-subtitle";
import Iconify from "../../../components/iconify";
import { useTheme } from "@emotion/react";

const ServicePricing = ({ prices }) => {
	const theme = useTheme();

	return (
		<div
			style={{
				backgroundImage: prices.image
					? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${prices.image})`
					: "",
				backgroundSize: "cover",
				backgroundAttachment: "fixed",
				color: prices.image ? "#fff" : theme.palette.text.primary,
			}}
		>
			<Container maxWidth="xl" sx={{ py: 10 }}>
				<Stack direction="column" spacing={3}>
					<TitleSubtitle
						title={prices.title}
						subtitle={prices.subtitle}
						divider
						dividerColor="#fff"
					/>

					{prices && prices.prices
						? prices.prices.map((price, index) => (
								<Accordion
									key={index}
									sx={{
										backgroundColor:
											theme.palette.background.default,
									}}
								>
									<AccordionSummary
										expandIcon={
											<Iconify
												icon="mdi:chevron-down"
											/>
										}
									>
										<Stack
											direction="row"
											justifyContent="space-between"
											sx={{ width: "100%" }}
										>
											<Typography variant="h4">
												{price.title}
											</Typography>
											<Typography variant="h4">
												{price.price.amount}{" "}{price.price.currency}
											</Typography>
										</Stack>
									</AccordionSummary>

									<AccordionDetails
										sx={{
											backgroundColor:
												theme.palette.background
													.default,
										}}
									>
										{price.listItems
											? price.listItems.map(
													(item, index) => (
														<Stack
															direction="row"
															alignItems="center"
															spacing={3}
															key={index}
														>
															<Iconify icon="ph:check-square" />

															<Typography variant="h5">
																{item}
															</Typography>
														</Stack>
													)
											)
											: ""}
									</AccordionDetails>
								</Accordion>
						))
						: ""}
				</Stack>
			</Container>
		</div>
	);
};

ServicePricing.propTypes = {
	prices: PropTypes.object,
};

export default ServicePricing;
