import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { GatsbyImage } from "gatsby-plugin-image";

import colors from "../../../templates/colors.json";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",

    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",

    marginRight: "3.73%",
    width: "48.13%",
    height: "41.66vw",
    padding: "3.12vw 1.73vw",
    "@media(max-width: 767px)": {
      marginRight: "4.83%",
      width: "84.78%",
      height: "120.77vw",
      padding: "10.86vw 6.03vw",
    },

    "&:last-child": {
      marginRight: 0,
    },
  },
  image: {
    width: "100%",
    height: "100%",

    position: "absolute",
    left: 0,
    top: 0,
    zIndex: -1,
  },
  gradient: {
    width: "100%",
    height: "100%",

    position: "absolute",
    left: 0,
    top: 0,
    zIndex: -1,

    background:
      "linear-gradient(180deg, rgba(28, 70, 246, 0) 40.5%, #1C46F6 77.83%)",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",

    width: "54.93vw",
    "@media(max-width: 767px)": {
      width: "87.92vw",
    },

    "& > *": {
      marginTop: "1.73vw",
      "@media(max-width: 767px)": {
        marginTop: "3.62vw",
      },

    },

    "& *": {
      color: theme.palette.color.white,
    },
  },
  logo: {
    width: "auto",

    height: "9.02vw",
    "@media(max-width: 767px)": {
      height: "16.9vw",
    },
  },
  subtitle: {
    fontWeight: 700,
    lineHeight: 1.28,
    textAlign: "center",
    textTransform: "lowercase",

    padding: "0.48vw 0.76vw",
    fontSize: "1.66vw",
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

    fontSize: "4.44vw",
    "@media(max-width: 767px)": {
      fontSize: "8.69vw",
    },
  },
  text: {
    fontWeight: 300,
    lineHeight: 1.28,

    fontSize: "1.25vw",
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
    },
  },
}));

/**
 * Карточка маленького слайдера нормальных карточек
 * @module src/components/constructor/smallSliderNormalCard/card
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.card - объект карточки полученный из prismic
 */
export default function Card({ card }) {
  const classes = useStyles();

  const image = card.image;
  const subtitle = card.accent_subtitle ?? false;
  const title = card.main_title ?? false;
  const text = card.text ?? false;
  const content = subtitle || title || text;

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

      {content ? <div className={classes.gradient} /> : null}

      {content ? (
        <div className={classes.content}>
          {subtitle ? (
            <Typography
              className={classes.subtitle}
              style={{
                background: colors[card.bg_subtitle],
                order: card.order_subtitle ?? 1,
              }}
            >
              {subtitle}
            </Typography>
          ) : null}

          {title ? (
            <Typography
              className={classes.title}
              style={{ order: card.order_title ?? 2 }}
            >
              {title}
            </Typography>
          ) : null}

          {text ? (
            <Typography
              className={classes.text}
              style={{ order: card.order_text ?? 3 }}
            >
              {text}
            </Typography>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
