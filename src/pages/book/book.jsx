import { useState, useCallback } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
	Alert,
	Box,
	Button,
	Stack,
	Step,
	StepLabel,
	Stepper,
} from "@mui/material";
import BookingDate from "./date";
import BookingParticipants from "./participants";
import BookingAgreements from "./agreements";
import BookingPreview from "./preview";
import Iconify from "../../components/iconify";

const initialValues = {
	date: "",
	time: "",

	participants: [
		{
			fullname: "",
			details: "",
			email: "",
			dateOfBirth: "",
			videoOption: true,
			weight: null,
			weightUnit: "",
		},
	],

	agreements: {
		above18Years: false,
		termsAndConditions: false,
	},
};

const validationSchema = Yup.object().shape({
	date: Yup.string().required("Required"),
	time: Yup.string().required("Required"),

	participants: Yup.array().of(
		Yup.object().shape({
			fullname: Yup.string().required("Fullname is Required"),
			details: Yup.string(),
			email: Yup.string().email("Invalid email").required("Email is Required"),
			dateOfBirth: Yup.string().required("Date of Birth is required"),
			videoOption: Yup.boolean(),
			weight: Yup.number().min(0, "Weight must be greater than 0"),
			weightUnit: Yup.string(),
		})
	),

	agreements: Yup.object().shape({
		above18Years: Yup.boolean().required("Required"),
		termsAndConditions: Yup.boolean().required("Required"),
	}),
});

const steps = ["Date & Time", "Participants", "Agreements", "Preview"];

const Book = () => {
	const [activeStep, setActiveStep] = useState(0);

	const [alertMessage, setAlertMessage] = useState("");
	const [alertSeverity, setAlertSeverity] = useState("info");

	const handleNext = useCallback(() => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	}, []);

	const handleBack = useCallback(() => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	}, []);

	const handleSubmit = async (values, actions) => {
		try {
			console.log(values);
			// const response = await dispatch(addService(me._id, token, values));
			//extract success message
			// const { success, message } = response.data;

			// Set the alert message from the response and determine severity
			// setAlertMessage(message);
			// setAlertSeverity(success ? "success" : "error");

			//close the modal
			// if (success) {
			// 	setTimeout(() => {
			// 		window.location.reload();
			// 	}, 2000);
			// }
		} catch (error) {
			setAlertMessage(error.error || "An error occurred.");
			setAlertSeverity("error");
		}

		actions.setSubmitting(false);
	};

	return (
		<>
			<Stack sx={{ pr: 2, mb: 3 }}>
				<Stepper
					activeStep={activeStep}
					alternativeLabel
					sx={{ mb: 3 }}
				>
					{steps.map((label) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>

				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					{({ values, setFieldValue, isSubmitting }) => (
						<Form>
							{alertMessage && (
								<Alert severity={alertSeverity} sx={{ mb: 2 }}>
									{alertMessage}
								</Alert>
							)}

							{/* date and time */}
							{activeStep === 0 && (
								<BookingDate
									values={values}
									setFieldValue={setFieldValue}
								/>
							)}

							{/* participants */}
							{activeStep === 1 && (
								<BookingParticipants
									values={values}
									setFieldValue={setFieldValue}
								/>
							)}

							{/* agreements */}
							{activeStep === 2 && (
								<BookingAgreements
									values={values}
									setFieldValue={setFieldValue}
								/>
							)}

							{/* preview */}
							{activeStep === 3 && (
								<BookingPreview
									values={values}
								/>
							)}
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									pt: 2,
								}}
							>
								<Button
									color="inherit"
									disabled={activeStep === 0}
									onClick={handleBack}
									sx={{ mr: 1 }}
									startIcon={
										<Iconify icon="mdi:arrow-left" />
									}
									variant="outlined"
								>
									Back
								</Button>
								<Box sx={{ flex: "1 1 auto" }} />
								{activeStep === steps.length - 1 ? (
									// 'Submit' button on the final step
									<Button
										variant="contained"
										type="submit"
										disabled={isSubmitting}
										endIcon={<Iconify icon="mdi:check" />}
									>
										Submit
									</Button>
								) : (
									// 'Next' button on all other steps
									<Button
										variant="contained"
										type="button"
										onClick={handleNext}
										endIcon={
											<Iconify icon="mdi:arrow-right" />
										}
										// disabled={!isValid }
									>
										Next
									</Button>
								)}
							</Box>
						</Form>
					)}
				</Formik>
			</Stack>
		</>
	);
};

export default Book;
