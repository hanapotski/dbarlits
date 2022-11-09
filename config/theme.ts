import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    primary: {
      main: "#6D499E",
    },
    secondary: {
      main: "##e0d47a",
    },
    error: {
      main: red.A400,
    },
  },
});
export default theme;
