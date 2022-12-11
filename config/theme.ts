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
      main: "#F3CC55",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        standardInfo: {
          backgroundColor: "#6D499E",
          color: "#F3CC55",
        },
      },
    },
  },
});
export default theme;
