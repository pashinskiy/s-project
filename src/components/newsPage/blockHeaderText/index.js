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
    "@media(min-width: 1440px)": {
      fontSize: 96,
      marginLeft: 50,
      marginTop:  28,
    },
    "@media(max-width: 767px)": {
      fontSize: "8.69vw",
      marginLeft: "6.03vw",
      marginTop: "6.76vw",
    },
  },
}));

/**
 * Заголовок на странице новостей 
 * @module src/components/newsPage/blockHeaderText
 * @param {Object} props - объект свойств компонента React
 * @param {String} props.text - текст заголовка
 */
export default function BlockHeaderText({ text }) {
  const classes = useStyle();
  return <Typography className={classes.rootText}>{text}</Typography>;
}
