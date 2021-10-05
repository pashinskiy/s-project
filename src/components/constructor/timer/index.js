import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

import colors from "../../../templates/colors.json";

import Pattern from "../../../images/svg/pattern_timer.svg";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& > *": {
      marginTop: "3.47vw",
      "@media(min-width: 1440px)": {
        marginTop: "50px",
      },
      "@media(max-width: 767px)": {
        marginTop: "9.66vw",
      },

      "&:first-child": {
        marginTop: 0,
      },
    },
  },
  title: {
    fontFamily: "'Exo 2'",
    fontWeight: 800,
    lineHeight: 1.12,
    textAlign: "center",
    textTransform: "uppercase",

    fontSize: "6.66vw",
    "@media(min-width: 1440px)": {
      fontSize: 96,
    },
    "@media(max-width: 767px)": {
      fontSize: "13.28vw",
    },
  },
  timer: {
    position: "relative",
    width: "100%",

    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",

    height: "16.45vw",
    padding: "2.56vw 0",
    "@media(min-width: 1440px)": {
      height: "237px",
      padding: "37px 0",
    },
    "@media(max-width: 767px)": {
      height: "30.91vw",
      padding: "5.55vw 0",
    },
  },
  pattern: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    width: "99.86vw",
    height: "12.36vw",
    "@media(min-width: 1440px)": {
      width: "1438px",
      height: "178px",  
    },
    "@media(max-width: 767px)": {
      width: "148.3vw",
      height: "24.15vw",
    },
  },
  timer_item: {
    position: "relative",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    height: "11.31vw",
    "@media(min-width: 1440px)": {
      height: "163px",
    },
    "@media(max-width: 767px)": {
      height: "19.8vw",
    },
  },
  timer_item_big_text: {
    fontWeight: 700,
    lineHeight: 1.12,
    color: theme.palette.color.white,

    fontSize: "9.02vw",
    "@media(min-width: 1440px)": {
      fontSize: 130,
    },
    "@media(max-width: 767px)": {
      fontSize: "13.28vw",
    },
  },
  timer_item_small_text: {
    position: "absolute",
    bottom: 0,

    fontWeight: 300,
    lineHeight: 1.12,
    color: theme.palette.color.white,

    fontSize: "2.5vw",
    "@media(min-width: 1440px)": {
      fontSize: 36,
    },
    "@media(max-width: 767px)": {
      fontSize: "4.34vw",
    },
  },
  timer_item_colon: {
    fontWeight: 600,
    lineHeight: 1.12,
    color: theme.palette.color.white,

    margin: "0 2.08vw",
    padding: "0.69vw",
    fontSize: "6.66vw",
    "@media(min-width: 1440px)": {
      margin: "0 30px",
      padding: "10px",
      fontSize: 96,
    },
    "@media(max-width: 767px)": {
      margin: "0 3.62vw",
      padding: "2.41vw",
      fontSize: "13.28vw",
    },
  },
  text: {
    fontWeight: 300,
    lineHeight: 1.28,
    color: theme.palette.color.lightBlue,
    textAlign: "center",

    padding: "0 15.48vw",
    fontSize: "1.66vw",
    "@media(min-width: 1440px)": {
      padding: "0 223px",
      fontSize: 24,
    },
    "@media(max-width: 767px)": {
      padding: "0 6.03vw",
      fontSize: "3.38vw",
    },
  },
}));

/**
 * Блок конструктора "Таймер"
 * @module src/components/constructor/timer
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.slice - объект слайса полученный из prismic
 */
export default function Timer({ slice }) {
  const title = slice.primary.timer_title ?? false;
  const text = slice.primary.timer_text ?? false;

  const [days, setDays] = React.useState(false);
  const [hours, setHours] = React.useState(false);
  const [minuts, setMinuts] = React.useState(false);

  const classes = useStyles();

  function getTime() {
    if (slice.primary.timer_date === null) return;

    const delta = new Date(slice.primary.timer_date) - Date.now();

    let newDays = Math.floor(delta / (1000 * 60 * 60 * 24));
    let newHours = Math.floor(
      (delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let newMinuts = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));

    newDays = newDays < 10 ? "0" + newDays : newDays;
    newHours = newHours < 10 ? "0" + newHours : newHours;
    newMinuts = newMinuts < 10 ? "0" + newMinuts : newMinuts;

    if (days !== newDays) setDays(newDays);
    if (hours !== newHours) setHours(newHours);
    if (minuts !== newMinuts) setMinuts(newMinuts);
  }

  React.useEffect(() => {
    const idInterval = setInterval(getTime, 1000);

    return () => {
      clearInterval(idInterval);
    };
  }, []);

  return (
    <div className={classes.wrapper}>
      {title ? (
        <Typography
          className={classes.title}
          style={{ color: colors[slice.primary.timer_title_color] }}
        >
          {title}
        </Typography>
      ) : null}

      <div
        className={classes.timer}
        style={{ background: colors[slice.primary.timer_bg_color] }}
      >
        <div className={classes.pattern}>
          <Pattern />
        </div>

        <div className={classes.timer_item}>
          <Typography className={classes.timer_item_big_text}>
            {days}
          </Typography>

          <Typography className={classes.timer_item_small_text}>
            дней
          </Typography>
        </div>

        <Typography className={classes.timer_item_colon}>:</Typography>

        <div className={classes.timer_item}>
          <Typography className={classes.timer_item_big_text}>
            {hours}
          </Typography>

          <Typography className={classes.timer_item_small_text}>
            часов
          </Typography>
        </div>

        <Typography className={classes.timer_item_colon}>:</Typography>

        <div className={classes.timer_item}>
          <Typography className={classes.timer_item_big_text}>
            {minuts}
          </Typography>

          <Typography className={classes.timer_item_small_text}>
            минут
          </Typography>
        </div>
      </div>

      {text ? <Typography className={classes.text}>{text}</Typography> : null}
    </div>
  );
}
