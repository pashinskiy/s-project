import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { GatsbyImage } from "gatsby-plugin-image";

import colors from "../../../templates/colors.json";

import Calendar from "../../../images/svg/calendar.svg";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    marginTop: "1.94vw",
    height: "36.11vw",
    "@media(min-width: 1440px)": {
      marginTop: "28px",
      height: "520px",
    },
    "@media(max-width: 767px)": {
      marginTop: "6.76vw",
      height: "80.43vw",
    },
  },
  image: {
    width: "100%",

    position: "absolute",
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: -1,

    height: "36.11vw",
    "@media(min-width: 1440px)": {
      height: "520px",
    },
    "@media(max-width: 767px)": {
      height: "80.43vw",
    },
  },
  gradient: {
    width: "100%",

    position: "absolute",
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: -1,

    background:
      "linear-gradient(0deg, rgba(28, 70, 246, 0.65), rgba(28, 70, 246, 0.65))",

    height: "36.11vw",
    "@media(min-width: 1440px)": {
      height: "520px",
    },
    "@media(max-width: 767px)": {
      height: "80.43vw",
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    width: "54.93vw",
    "@media(min-width: 1440px)": {
      width: "791px",
    },
    "@media(max-width: 767px)": {
      width: "87.92vw",
    },

    "& > *": {
      marginTop: "1.73vw",
      "@media(min-width: 1440px)": {
        marginTop: "25px",
      },
      "@media(max-width: 767px)": {
        marginTop: "3.62vw",
      },

    },

    "& *": {
      color: theme.palette.color.white,
    },
  },
  subtitle: {
    fontWeight: 700,
    lineHeight: 1.28,
    textAlign: "center",
    textTransform: "lowercase",

    padding: "0.48vw 0.76vw",
    fontSize: "1.66vw",
    "@media(min-width: 1440px)": {
      padding: "7px 11px",
      fontSize: 24,
    },
    "@media(max-width: 767px)": {
      padding: "1.2vw 2.41vw",
      fontSize: "4.34vw",
    },
  },
  title: {
    fontFamily: "'Exo 2'",
    fontWeight: 700,
    lineHeight: 1.2,
    textAlign: "center",

    fontSize: "6.66vw",
    "@media(min-width: 1440px)": {
      fontSize: 96,
    },
    "@media(max-width: 767px)": {
      fontSize: "9.66vw",
    },
  },
  text: {
    fontWeight: 300,
    lineHeight: 1.28,
    textAlign: "center",

    fontSize: "1.25vw",
    "@media(min-width: 1440px)": {
      fontSize: 18,
    },
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
    },
  },
  date: {
    alignSelf: "flex-end",

    display: "flex",
    alignItems: "center",
    
    marginTop: "0.55vw",
    "@media(min-width: 1440px)": {
      marginTop: "8px",
    },
    "@media(max-width: 767px)": {
      marginTop: "1.93vw",
    },
  },
  date_icon: {
    marginRight: "0.83vw",
    width: "2.08vw",
    height: "2.08vw",
    "@media(min-width: 1440px)": {
      marginRight: "12px",
      width: "30px",
      height: "30px",
    },
    "@media(max-width: 767px)": {
      marginRight: "2.89vw",
      width: "7.24vw",
      height: "7.24vw",
    },
  },
  date_text: {
    fontWeight: 700,
    lineHeight: 1.28,

    fontSize: "1.25vw",
    "@media(min-width: 1440px)": {
      fontSize: 18,
    },
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
    },
  },
}));

/**
 * Главная карточка новости
 * @module src/components/newsPage/textOnImageBlueBg
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.news - объект новости полученный из prismic
 */
export default function TextOnImageBlueBg({ news }) {
  const classes = useStyles();

  const image = news.data.main_image;
  const subtitle = news.data.subtitle ?? false;
  const title = news.data.title ?? false;
  const text = news.data.text ?? false;
  const content = subtitle || title || text;

  const dateText = (function () {
    const date = new Date(news.data.date ?? news.first_publication_date);

    const day = date.getDate();
    const month = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ][date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  })();

  return (
    <div className={classes.wrapper}>
      {image?.localFile ?? false ? (
        <GatsbyImage
          image={image.localFile.childImageSharp?.gatsbyImageData}
          alt={image.alt ?? "photo"}
          className={classes.image}
          imgStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : null}

      <div className={classes.gradient} />

      {content ? (
        <div className={classes.content}>
          {subtitle ? (
            <Typography
              className={classes.subtitle}
              style={{
                background: colors[news.data.subtitle_bg],
              }}
            >
              {subtitle}
            </Typography>
          ) : null}

          {title ? (
            <Typography className={classes.title}>{title}</Typography>
          ) : null}

          <div className={classes.date}>
            <div className={classes.date_icon}>
              <Calendar />
            </div>

            <Typography className={classes.date_text}>{dateText}</Typography>
          </div>

          {text ? (
            <Typography className={classes.text}>{text}</Typography>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
