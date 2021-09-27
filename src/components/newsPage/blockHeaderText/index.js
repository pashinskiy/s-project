import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  rootText: {
    color: theme.palette.color.blue,
    fontFamily: "'Exo 2'",
    fontWeight: 700,
    lineHeight: 1.2,

    fontSize: "6.66vw",
    marginLeft: "3.47vw",
    marginTop: "1.94vw",
    "@media(max-width: 767px)": {
      fontSize: "8.69vw",
      marginLeft: "6.03vw",
      marginTop: "6.76vw",
    },
  },
}));

export default function BlockHeaderText({ text }) {
  const classes = useStyle();
  return <Typography className={classes.rootText}>{text}</Typography>;
}
