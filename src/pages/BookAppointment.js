import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import CalendarPicker from "../comps/CalendarPicker";
import dayjs from "dayjs";
function BookAppointment() {
  return (
    <div className="w-full  h-full flex items-start justify-center ">
      <CalendarPicker />
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker label="Basic date time picker" />
      </LocalizationProvider> */}
    </div>
  );
}

export default BookAppointment;
