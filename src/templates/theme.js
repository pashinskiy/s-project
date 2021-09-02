import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    color: {
      main: "#ffffff",
      black: "#070F30",
      blue: "#1B46F5",
      orange: "#FF5B42",
      darkBlue: "#08195E",
      lightBlue: "#545E8A",
    },
    background: {
      main: "#ffffff",
      blue: "#1B46F5",
      orange: "#FF5B42",
    },
    width: {
      limit: "1440px",
    },
  },
  typography: {
    fontFamily: ["Inter"].join(","),
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          overflowX: "hidden",
        },
        body: {
          margin: 0,
          background: "#ffffff",
          "-webkit-background-clip": "border-box",
          backgroundClip: "border-box",
          "-webkit-text-fill-color": "none",
          backgroundColor: "#ffffff",
          color: "#070F30",
        },
      },
    },
    MuiButton: {
      root: {
        "&:hover": {
          backgroundColor: "none",
        },
      },
      text: {
        textTransform: "none",
      },
    },
  },
  props: {
    MuiButton: {
      disableRipple: true,
    },
  },
});

/**
 * Тема оформления (используется библиотекой material-ui)
 * @module src/templates/theme
 */
export default theme;
