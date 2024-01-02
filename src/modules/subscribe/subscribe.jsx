import {
	Button,
	Container,
	Grid,
	Stack,
	useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import Textfield from "../../components/form/textfield/textfield";
import TitleSubtitle from "../title-subtitle";

const Image =
	"https://res.cloudinary.com/dqweh6zte/image/upload/v1690303441/officechest/services/jog7skpaltedt5a3eips.jpg";
const Person =
	"https://res.cloudinary.com/dqweh6zte/image/upload/v1698335580/skydive%20rhino/videos/skydive_landing_vwertical_xs68xt.jpg";

const emailCapture = {
	title: "Join our mailing list",
	subtitle:
		"Subscribe to our newsletter to get the latest news, updates and amazing offers delivered directly to your inbox.",
};

const INITIAL_FORM_STATE = {
	email: "",
};

const FORM_VALIDATION = Yup.object().shape({
	email: Yup.string()
		.email("Please use a valid email")
		.min(5, "Too short email")
		.max(80, "Too long email")
		.required("Please add an email"),
});

const StyledWrapper = styled(Container)(({ theme }) => ({
	borderRadius: theme.shape.borderRadius,
	backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, 0.7), rgba(0,0,0,0.76)), url(${Image})`,
	backgroundSize: "cover",
}));

const StyledGrid = styled(Grid)(() => ({}));

const StyledGridItemText = styled(Grid)(() => ({
	paddingTop: "50px",
	paddingBottom: "50px",
}));

const StyledButton = styled(Button)(() => ({
	color: "#ffffff",
	borderColor: "#ffffff",
	width: "200px",
	borderRadius: "5px",
}));

const imageStyle = {
	width: "350px",
	position: "relative",
};

const Subscribe = () => {
	const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("lg"));

	const submitHandler = (values) => {
		console.log(values);
	};

	return (
		<>
			<Stack sx={{ py: { xs: 5, md: 10, lg: 20 }, position: "relative", }}>

				<StyledWrapper maxWidth="xl">
					<StyledGrid container spacing={3}>
						<StyledGridItemText
							item
							xs={12}
							sm={12}
							md={12}
							lg={6}
							xl={6}
						>
							<Stack
								direction="column"
								justifyContent="center"
								sx={{ height: "100%" }}
							>
								<Formik
									initialValues={{
										...INITIAL_FORM_STATE,
									}}
									validationSchema={FORM_VALIDATION}
									onSubmit={submitHandler}
								>
									<Form>
										<Stack direction="column" spacing={3}>
											<TitleSubtitle
												title={emailCapture.title}
												subtitle={emailCapture.subtitle}
												position="left"
												color="#fff"
											/>

											<Stack
												spacing={3}
												direction="row"
												alignItems="center"
												justifyContent="left"
											>
												<Textfield
													name="email"
													variant="standard"
													size="small"
													placeholder="Enter your email to subscribe"
													inputColor="#ffffff"
												/>
												<StyledButton
													variant="outlined"
													type="submit"
												>
													Join us
												</StyledButton>
											</Stack>
										</Stack>
									</Form>
								</Formik>
							</Stack>
						</StyledGridItemText>
						{isDesktop && (
							<Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
								<Stack justifyContent="center" alignItems="center">
									<img
										src={Person}
										alt="Subscribe to Afrogorithm Mail List"
										style={imageStyle}
									/>
								</Stack>
							</Grid>
						)}
					</StyledGrid>
				</StyledWrapper>
			</Stack>
		</>
	);
};

export default Subscribe;
