import { Stack } from "@mui/material";
import DateField from "../../components/form/date/date";
import TimeField from "../../components/form/date/time";

// import ReusableCalendar from "../../components/calendar/calendar"

const BookingDate = () => {
	return (
		<Stack direction="column" spacing={3}>
			{/* <ReusableCalendar/> */}
			<DateField name="date" label="Date" />
			<TimeField name="time" label="Time" />
		</Stack>
	);
};

export default BookingDate;
