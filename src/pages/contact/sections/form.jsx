import {
	Button,
	Container,
	Grid,
	InputAdornment,
	Stack,
	useMediaQuery,
} from "@mui/material";
import { alpha, useTheme } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import Textfield from "../../../components/form/textfield/textfield";
import SelectField from "../../../components/form/select/select";
import { countries } from "../../../constants/country";
import Iconify from "../../../components/iconify";
import { LoadingButton } from "@mui/lab";

const servicesOptions = [
	{
		name: "tandem-skydive",
		label: "Tandem Skydive",
	},
	{
		name: "accelerated-freefall",
		label: "Accelerated Freefall",
	},
];

const INITIAL_FORM_STATE = {
	fullname: "",
	email: "",
	city: "",
	country: "",
	leadSource: "Contact Form",
	service: [],
	message: "",
};

const FORM_VALIDATION = Yup.object().shape({
	email: Yup.string()
		.email("Please use a valid email")
		.min(5, "Too short email")
		.max(80, "Too long email")
		.required("Please add an email"),
	fullname: Yup.string().min(5, "Too short name").required("Please add name"),
	city: Yup.string()
		.min(3, "Too short city name")
		.required("Please add city"),
	country: Yup.string(),
	leadSource: Yup.string(),
	service: Yup.string(),
	message: Yup.string()
		.min(20, "Too short message")
		.max(2000, "Too long message")
		.required("Please add a message"),
});

const ContactForm = () => {
	const submitHandler = (values) => {
		console.log(values);
	};

	return (
		<div>
			<Container maxWidth="xl" sx={{ pb: 20 }}>
				<Stack direction="column" spacing={3}>
					<Formik
						initialValues={{
							...INITIAL_FORM_STATE,
						}}
						validationSchema={FORM_VALIDATION}
						onSubmit={submitHandler}
					>
						{({ values, errors, touched, isSubmitting }) => (
							<Form>
								<Grid container spacing={3}>
									<Grid item xs={12} md={6}>
										<Textfield
											fullWidth
											label="Email"
											name="email"
											type="email"
											size="large"
											value={values.email}
											error={
												touched.email &&
												Boolean(errors.email)
											}
											helperText={
												touched.email && errors.email
											}
											variant="outlined"
										/>
									</Grid>

									<Grid item xs={12} md={6}>
										<Textfield
											fullWidth
											label="Fullname"
											name="fullname"
											type="text"
											size="large"
											value={values.fullname}
											error={
												touched.fullname &&
												Boolean(errors.fullname)
											}
											helperText={
												touched.fullname &&
												errors.fullname
											}
											variant="outlined"
										/>
									</Grid>

									<Grid item xs={12} md={6}>
										<Textfield
											fullWidth
											label="City"
											name="city"
											type="text"
											size="large"
											value={values.city}
											error={
												touched.city &&
												Boolean(errors.city)
											}
											helperText={
												touched.city && errors.city
											}
											variant="outlined"
										/>
									</Grid>

									<Grid item xs={12} md={6}>
										<SelectField
											name="country"
											label="Country"
											size="large"
											options={countries}
											defaultValue=""
											MenuProps={{}}
											variant="outlined"
										/>
									</Grid>

									<Grid item xs={12} md={12}>
										<SelectField
											name="service"
											label="Service"
											size="large"
											options={servicesOptions}
											defaultValue=""
											MenuProps={{}}
											variant="outlined"
										/>
									</Grid>

									<Grid item xs={12} md={12}>
										<Textfield
											fullWidth
											label="Message"
											name="message"
											type="text"
											size="large"
											value={values.message}
											error={
												touched.message &&
												Boolean(errors.message)
											}
											helperText={
												touched.message &&
												errors.message
											}
											variant="outlined"
											multiline
											rows={6}
										/>
									</Grid>

									<Grid item xs={12} md={12}>
										<LoadingButton
											type="submit"
											variant="contained"
											loading={isSubmitting}
											size="large"
											color="primary"
											loadingPosition="end"
											sx={{
												width: "250px",
											}}
											endIcon={
												<Iconify icon="mdi:send" />
											}
										>
											Send
										</LoadingButton>
									</Grid>
								</Grid>
							</Form>
						)}
					</Formik>
				</Stack>
			</Container>
		</div>
	);
};

export default ContactForm;
