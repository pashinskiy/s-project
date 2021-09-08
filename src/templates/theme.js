import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    color: {
      main: "#ffffff",
      black: "#070F30",
      blue: "#1B46F5",
      orange: "#FF3E00",
      darkBlue: "#08195E",
      lightBlue: "#545E8A",
    },
    background: {
      main: "#ffffff",
      blue: "#1B46F5",
      orange: "#FF3E00",
    },
    width: {
      limit: "1440px",
    },
  },
  typography: {
    fontFamily: ["Futura PT", "'Exo 2'"].join(","),
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [
          {
            fontFamily: "Futura PT",
            fontWeight: 700,
            fontStyle: "normal",
            src: "url('/fonts/futura-pt-bold.ttf') format('opentype')",
          },
          {
            fontFamily: "Futura PT",
            fontWeight: 600,
            fontStyle: "normal",
            src: "url('/fonts/futura-pt-heavy.ttf') format('opentype')",
          },
          {
            fontFamily: "Futura PT",
            fontWeight: 500,
            fontStyle: "normal",
            src: "url('/fonts/futura-pt-demi.ttf') format('opentype')",
          },
          {
            fontFamily: "Futura PT",
            fontWeight: 400,
            fontStyle: "normal",
            src: "url('/fonts/futura-pt-medium.ttf') format('opentype')",
          },
          {
            fontFamily: "Futura PT",
            fontWeight: 300,
            fontStyle: "normal",
            src: "url('/fonts/futura-pt-book.ttf') format('opentype')",
          },
        ],
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
        minWidth: 0,
        minHeight: 0,
        padding: 0,
        "&:hover": {
          backgroundColor: "none",
        },
      },
      text: {
        minWidth: 0,
        minHeight: 0,
        padding: 0,
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
