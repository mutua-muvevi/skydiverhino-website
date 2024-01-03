import PropTypes from "prop-types";
import { FieldArray } from "formik";
import Textfield from "../../components/form/textfield/textfield";
import { Box, Button, Stack, useTheme } from "@mui/material";
import SelectField from "../../components/form/select/select";
import CheckBoxField from "../../components/form/checkbox/checkbox";

const weightUnits = [
	{ name: "kg", label: "Kilograms(kg)" },
	{ name: "lbs", label: "Pounds(lb)" },
];

const BookingParticipants = ({ values }) => {
	const theme = useTheme();
	return (
		<FieldArray name="participants">
			{({ push, remove }) => (
				<Box >
					{values.participants.map((participant, index) => (
						<Stack
							key={index}
							direction="column"
							spacing={3}
							sx={{ py: 3, borderBottom: `1px dashed ${theme.palette.text.primary}` }}
						>
							<Textfield
								name={`participants[${index}].fullname`}
								label="Full name"
							/>
							<Textfield
								name={`participants[${index}].email`}
								label="Email"
							/>
							<Textfield
								name={`participants[${index}].dateOfBirth`}
								label="Date of birth"
							/>
							<CheckBoxField
								name={`participants[${index}].videoOption`}
								label="Video option"
							/>
							<Textfield
								name={`participants[${index}].weight`}
								label="Weight"
							/>
							<SelectField
								name={`participants[${index}].weightUnit`}
								label="Weight unit"
								options={weightUnits}
							/>
							
							<Textfield
								name={`participants[${index}].details`}
								label="Brief Description"
								multiline
								rows={4}
							/>
							{values.participants.length > 1 && (
								<Button
									type="button"
									variant="outlined"
									onClick={() => remove(index)}
								>
									Remove the above content block
								</Button>
							)}
						</Stack>
					))}
					<Button
						type="button"
						variant="contained"
						onClick={() =>
							push({
								fullname: "",
								details: "",
								email: "",
								dateOfBirth: "",
								videoOption: "",
								weight: "",
								weightUnit: "",
							})
						}
					>
						Add Another Participants
					</Button>
				</Box>
			)}
		</FieldArray>
	);
};

BookingParticipants.propTypes = {
	values: PropTypes.object.isRequired,
};

export default BookingParticipants;
