import React from "react";
import { navigate } from "gatsby";
import { makeStyles, Typography } from "@material-ui/core";
import { GatsbyImage } from "gatsby-plugin-image";

import colors from "../../../templates/colors.json";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
    overflow: "hidden",

    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",

    width: "48.13%",
    height: "41.66vw",
    "@media(min-width: 1440px)": {
      height: "600px",
    },
    "@media(max-width: 767px)": {
      width: "100%",
      height: "120.77vw",
      marginTop: "6.03vw",
    },

    "&:nth-child(n + 3)": {
      marginTop: "3.47vw",
      "@media(max-width: 767px)": {
        marginTop: "6.03vw",
      },
    },

    "&:first-child": {
      marginTop: 0,
    },
  },
  image: {
    width: "100%",

    position: "absolute",
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: -1,

    height: "44.44vw",
    "@media(min-width: 1440px)": {
      height: "640px",
    },
    "@media(max-width: 767px)": {
      height: "124.39vw",
    },
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(180deg, rgba(28, 70, 246, 0) 40.5%, #1C46F6 77.83%)",
  },
  content: {
    position: "relative",
    transform: "translateY(1px)",
    width: "100%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",

    padding: "3.12vw 1.73vw",
    "@media(min-width: 1440px)": {
      padding: "45px 25px",
    },
    "@media(max-width: 767px)": {
      padding: "3.62vw 2.41vw",
    },

    "& > *": {
      color: theme.palette.color.white,

      marginTop: "1.73vw",
      "@media(min-width: 1440px)": {
        marginTop: "25px",
      },
      "@media(max-width: 767px)": {
        marginTop: "4.83vw",
      },

    },
  },
  subtitle: {
    fontWeight: 700,
    lineHeight: 1.28,
    textTransform: "lowercase",
    textAlign: "left",

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
    textAlign: "left",

    fontSize: "4.44vw",
    "@media(min-width: 1440px)": {
      fontSize: 64,
    },
    "@media(max-width: 767px)": {
      fontSize: "8.69vw",
    },
  },
  text: {
    fontWeight: 300,
    lineHeight: 1.28,
    textAlign: "left",

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
 * Карточка новости
 * @module src/components/listNews/card
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.news - объект новости полученный из prismic
 */
export default function Card({ news }) {
  const classes = useStyles();

  const image = news.data.main_image;
  const subtitle = news.data.subtitle ?? false;
  const title = news.data.title ?? false;
  const text = news.data.text ?? false;
  const content = subtitle || title || text;

  function goNews() {
    navigate(`/news/${news.uid}`);
  }

  return (
    <button onClick={goNews} className={classes.wrapper}>
      {image?.localFile ?? false ? (
        <GatsbyImage
          image={image.localFile.childImageSharp?.gatsbyImageData}
          alt={image.alt ?? "photo"}
          className={classes.image}
          imgStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : null}

      <div className={classes.background} />

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

          {text ? (
            <Typography className={classes.text}>{text}</Typography>
          ) : null}
        </div>
      ) : null}
    </button>
  );
}
