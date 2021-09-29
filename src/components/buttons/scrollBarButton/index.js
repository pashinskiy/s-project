import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import ArrowButton from "../../../images/svg/button_arrow.svg";

const useStyle = makeStyles((theme) => ({
  button: {
    height: "3.47vw",
    padding: "0.9375vw 2.74vw",
    border: "1px solid",
    borderColor: theme.palette.color.blue,
    borderRadius: "4.72vw",
    fontSize: "1.25vw",
    fontWeight: 700,
  },

  arrowAndText: {
    color: "black",
    "& span": {
      "& svg": {
        marginLeft: "0.69vw",
      },
    },
  },
  arrow: {
    width: "2.7vw",
    height: "1.11vw",
  },

  mirrorArrow: {
    transform: "scaleX(-1)",
  },
}));

/**
 * Кнопка для прокрутки
 * @module src/components/buttons/scrollBarButton
 * @param {Object} props - объект свойств компонента React
 * @param {function()} props.onClick - функция при нажатии кнопки
 * @param {String} props.text - текст кнопки
 * @param {Object} props.left - повернуть стрелку кнопки влево
 */

export default function ScrollBarButton({ onClick, text, left }) {
  const classes = useStyle();
  return (
    <Button
      aria-label={"scroll-" + left ? "left" : "right"}
      className={
        text ? classes.button + " " + classes.arrowAndText : classes.button
      }
      onClick={onClick}
    >
      {text}
      <ArrowButton
        className={
          left ? classes.arrow + " " + classes.mirrorArrow : classes.arrow
        }
      />
    </Button>
  );
}
