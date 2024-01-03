import { Card, Stack, Typography, useTheme } from "@mui/material";
import PropTypes from "prop-types";

const BookingPreview = ({ values }) => {
	const theme = useTheme();

	return (
		<Stack direction="column" spacing={3}>
			<Stack
				direction="column"
				spacing={1}
				sx={{
					borderBottom: `1px dashed ${theme.palette.text.primary}`,
					pb: 3,
				}}
			>
				<Typography variant="h5">Date and time</Typography>

				<Stack direction="row" spacing={1}>
					<Typography variant="body1" color="primary">
						Date
					</Typography>
					<Typography variant="body1">{values.date}</Typography>
				</Stack>

				<Stack direction="row" spacing={1}>
					<Typography variant="body1" color="primary">
						Time
					</Typography>
					<Typography variant="body1">{values.time}</Typography>
				</Stack>
			</Stack>

			<Stack
				direction="column"
				spacing={2}
				sx={{
					borderBottom: `1px dashed ${theme.palette.text.primary}`,
					pb: 3,
				}}
			>
				<Typography variant="h6">Participants</Typography>

				{values.participants.map((participant, index) => (
					<Stack key={index} direction="column" spacing={3}>
						<Typography variant="h6">
							Participant {index + 1}
						</Typography>
						<Stack direction="row" spacing={1}>
							<Typography variant="body1" color="primary">
								Full name
							</Typography>
							<Typography variant="body1">
								{participant.fullname}
							</Typography>
						</Stack>
						<Stack direction="row" spacing={1}>
							<Typography variant="body1" color="primary">
								Email
							</Typography>
							<Typography variant="body1">
								{participant.email}
							</Typography>
						</Stack>
						<Stack direction="row" spacing={1}>
							<Typography variant="body1" color="primary">
								Details
							</Typography>
							<Typography variant="body1">
								{participant.details}
							</Typography>
						</Stack>
						<Stack direction="row" spacing={1}>
							<Typography variant="body1" color="primary">
								Date of Birth
							</Typography>
							<Typography variant="body1">
								{participant.dateOfBirth}
							</Typography>
						</Stack>
						<Stack direction="row" spacing={1}>
							<Typography variant="body1" color="primary">
								Video option
							</Typography>
							<Typography variant="body1">
								{participant.videoOption === true
									? "Yes"
									: "No"}
							</Typography>
						</Stack>
						<Stack direction="row" spacing={1}>
							<Typography variant="body1" color="primary" type="number">
								Weight
							</Typography>
							<Typography variant="body1">
								{participant.weight}
							</Typography>
						</Stack>
						<Stack direction="row" spacing={1}>
							<Typography variant="body1" color="primary">
								Weight Unit
							</Typography>
							<Typography variant="body1">
								{participant.weightUnit}
							</Typography>
						</Stack>
					</Stack>
				))}
			</Stack>

			<Stack
				direction="column"
				spacing={2}
				sx={{
					borderBottom: `1px dashed ${theme.palette.text.primary}`,
					pb: 3,
				}}
			>
				<Typography variant="h6">Agreements</Typography>

				<Stack direction="row" spacing={1}>
					<Typography variant="body1" color="primary">
						Are you above 18 years old?
					</Typography>
					<Typography variant="body1">
						{values.agreements.above18Years === true ? "Yes" : "No"}
					</Typography>
				</Stack>

				<Stack direction="row" spacing={1}>
					<Typography variant="body1" color="primary">
						Do you agree to the terms and conditions?
					</Typography>
					<Typography variant="body1">
						{values.agreements.termsAndConditions === true
							? "Yes"
							: "No"}
					</Typography>
				</Stack>
			</Stack>
		</Stack>
	);
};

BookingPreview.propTypes = {
	values: PropTypes.object.isRequired,
};

export default BookingPreview;
