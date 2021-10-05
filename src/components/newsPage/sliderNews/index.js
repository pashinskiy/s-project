import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Slider from "../../constructor/slider";
import Card from "./card";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: "4.16vw",
    "@media(min-width: 1440px)": {
      marginTop: "60px",
    },
    "@media(max-width: 767px)": {
      marginTop: "4.83vw",
    },
  },
  title: {
    fontFamily: "'Exo 2'",
    fontWeight: 700,
    lineHeight: 1.12,
    color: theme.palette.color.blue,

    marginLeft: "3.47vw",
    marginBottom: "4.16vw",
    fontSize: "2.5vw",
    "@media(min-width: 1440px)": {
      marginLeft: "50px",
      marginBottom: "60px",
      fontSize: 36,
    },
    "@media(max-width: 767px)": {
      marginLeft: "6.03vw",
      marginBottom: "4.83vw",
      fontSize: "8.96vw",
    },
  },
}));

/**
 * Слайдер новостей
 * @module src/components/newsPage/sliderNews
 * @param {Object} props - объект свойств компонента React
 * @param {Object[]} props.news - массив объектов новостей полученный из prismic
 * @param {String} props.title - заголовок блока
 */
export default function SliderNews({ news, title }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {title ? (
        <Typography className={classes.title}>{title}</Typography>
      ) : null}

      <Slider padding mobileScrollBar>
        {news.map((news) => (
          <Card news={news} key={news.uid} />
        ))}
      </Slider>
    </div>
  );
}
