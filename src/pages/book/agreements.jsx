import { Stack } from "@mui/material"
import CheckBoxField from "../../components/form/checkbox/checkbox"


const BookingAgreements = () => {
  return (
	<Stack direction="column" spacing={3}>
		<CheckBoxField name="agreements.above18Years" label="Are you above 18 years old?" />
		<CheckBoxField name="agreements.termsAndConditions" label="Do you agree to the terms and conditions?" />
	</Stack>
  )
}

export default BookingAgreements
