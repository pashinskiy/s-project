import React from "react";
import { navigate } from "gatsby";
import { makeStyles, Typography } from "@material-ui/core";
import { GatsbyImage } from "gatsby-plugin-image";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
    width: "100%",
    height: "100%",
    overflowX: "hidden",

    background: (props) =>
      props.fon
        ? "linear-gradient(180deg, rgba(27, 70, 245, 0) 37.46%, #1B46F5 82.55%)"
        : "",

    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",

    padding: "2.91vw 2.36vw",
    // "@media(min-width: 1440px)": {
    //   padding: "42px 34px",
    // },
    "@media(max-width: 767px)": {
      padding: "8.45vw 4.83vw",
    },
  },
  img: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  title: {
    fontFamily: "'Exo 2'",
    fontWeight: 700,
    lineHeight: 1.2,
    color: theme.palette.color.white,
    whiteSpace: "nowrap",

    fontSize: "5vw",
    // "@media(min-width: 1440px)": {
    //   fontSize: 72,
    // },
    "@media(max-width: 767px)": {
      fontSize: "8.69vw",
    },
  },
  subtitle: {
    fontWeight: 300,
    lineHeight: 1.28,
    color: theme.palette.color.white,
    textAlign: "left",

    width: "39.51vw",
    marginTop: "1.73vw",
    fontSize: "1.25vw",
    // "@media(min-width: 1440px)": {
    //   width: 569,
    //   marginTop: 25,
    //   fontSize: 18,
    // },
    "@media(max-width: 767px)": {
      width: "100%",
      marginTop: "4.83vw",
      fontSize: "3.38vw",
    },
  },
}));

/**
 * Карточка главного слайдера
 * @module src/components/mainPage/cardSlider
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.image - объект изображения полученый из prismic
 * @param {String} [props.title] - заголовок карточки
 * @param {String} [props.subtitle] - подзаголовок карточки
 * @param {String} [props.link] - ссылка на страницу
 * @param {Boolean} [props.active=true] - флаг активной карточки
 */
export default function CardSlider({ image, title, subtitle, link, active }) {
  active = active ?? true;

  const fon = active && (title || subtitle);
  const classes = useStyles({ fon });

  function goLink(str) {
    if (str.slice(0, 4) === "http") {
      const anchor = document.createElement("a");
      anchor.href = str;
      anchor.click();
    } else {
      navigate(str);
    }
  }

  return (
    <button onClick={() => goLink(link)} className={classes.wrapper}>
      <GatsbyImage
        image={image.localFile.childImageSharp.gatsbyImageData}
        alt={image.alt}
        className={classes.img}
        imgStyle={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {active ? (
        <>
          {title ? (
            <Typography className={classes.title}>{title}</Typography>
          ) : null}
          {subtitle ? (
            <Typography className={classes.subtitle}>{subtitle}</Typography>
          ) : null}
        </>
      ) : null}
    </button>
  );
}
