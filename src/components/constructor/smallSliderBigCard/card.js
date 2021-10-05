import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { GatsbyImage } from "gatsby-plugin-image";

import colors from "../../../templates/colors.json";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    position: "relative",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    height: "36.11vw",
    "@media(min-width: 1440px)": {
      height: "520px",
    },
    "@media(max-width: 767px)": {
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
  logo: {
    width: "auto",

    height: "9.02vw",
    "@media(min-width: 1440px)": {
      height: "130px",
    },
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
}));

/**
 * Карточка маленького слайдера больших карточек
 * @module src/components/constructor/smallSliderBigCard/card
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.card - объект карточки полученный из prismic
 */
export default function SmallSliderBigCard({ card }) {
  const classes = useStyles();

  const image = card.image;
  const logo = card.logo;
  const subtitle = card.accent_subtitle ?? false;
  const title = card.main_title ?? false;
  const text = card.text ?? false;
  const content = (logo.localFile ?? false) || subtitle || title || text;

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

      {card.blue_bg ? <div className={classes.gradient} /> : null}

      {content ? (
        <div className={classes.content}>
          {logo.localFile ?? false ? (
            <img
              src={logo.localFile.publicURL}
              alt={logo.alt ?? "photo"}
              width={1}
              height={1}
              className={classes.logo}
              style={{ order: card.order_logo ?? 1 }}
            />
          ) : null}

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
