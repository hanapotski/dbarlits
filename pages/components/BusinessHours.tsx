import { Divider, Stack, Typography } from "@mui/material";

const HOURS = [
  { day: "Monday", hours: "11:00 AM - 9:00 PM" },
  { day: "Tuesday", hours: "CLOSED" },
  { day: "Wednesday", hours: "11:00 AM - 9:00 PM" },
  { day: "Thursday", hours: "11:00 AM - 9:00 PM" },
  { day: "Friday", hours: "11:00 AM - 9:00 PM" },
  { day: "Saturday", hours: "11:00 AM - 9:00 PM" },
  { day: "Sunday", hours: "5:00 PM - 9:00 PM" },
];
export default function BusinessHours() {
  return (
    <Stack sx={{ width: "100vw", padding: 2, maxWidth: 380 }} spacing={1}>
      <Typography
        color="primary"
        variant="h2"
        fontSize="2em"
        align="center"
        fontWeight="bold"
      >
        Business Hours
      </Typography>
      <Divider />
      {HOURS.map(({ day, hours }) => (
        <Stack direction="row" justifyContent="space-between" key={day}>
          <Typography>{day}</Typography>
          <Typography>{hours}</Typography>
        </Stack>
      ))}
      <Divider />
    </Stack>
  );
}
