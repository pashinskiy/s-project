import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

import colors from "../../../templates/colors.json";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
    display: "flex",
    background: (props) => props.color_bg ?? "transparent",

    height: "12.15vw",
    padding: "2.08vw 0",
    "@media(max-width: 767px)": {
      height: "16.66vw",
      padding: "4.83vw 0",
    },
  },
  text: {
    color: (props) => props.color ?? theme.palette.color.white,
    fontFamily: "'Exo 2'",
    fontWeight: 900,
    lineHeight: 1.2,
    whiteSpace: "nowrap",

    position: "absolute",
    left: "100%",
    animation: "$transitionText infinite linear",
    animationDuration: (props) => `${props.time}ms`,

    fontSize: "6.66vw",
    "@media(max-width: 767px)": {
      fontSize: "5.79vw",
    },
  },
  "@keyframes transitionText": {
    from: {
      transform: "translateX(0)",
    },
    to: {
      transform: "translateX(-100%)",
    },
  },
}));

/**
 * Блок конструктора "Бегущая строка"
 * @module src/components/constructor/ticker
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.slice - объект слайса полученный из prismic
 */
export default function Ticker({ slice }) {
  const classes = useStyles({
    color: colors[slice.primary.color_text],
    color_bg: colors[slice.primary.color_bg],
    time: slice.primary.time ?? 1000,
  });

  return slice.primary.text ? (
    <div className={classes.wrapper}>
      <Typography className={classes.text}>{slice.primary.text}</Typography>
    </div>
  ) : null;
}
