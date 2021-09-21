import React from "react";
import { navigate } from "gatsby";
import { makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import { GatsbyImage } from "gatsby-plugin-image";

import colors from "../../templates/colors.json";

import Pattern from "../../images/svg/pattern.svg";
import ArrowLearnMore from "../../images/svg/arrow_learn_more.svg";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  content: {
    position: "relative",
    overflow: "hidden",

    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",

    width: "22.22%",
    padding: "3.12vw 1.73vw",
    "@media(max-width: 767px)": {
      marginTop: (props) => (props.position === "центр" ? "2.41vw" : 0),
      width: (props) => (props.position === "центр" ? "100%" : "39.61%"),
      height: (props) => (props.position === "центр" ? "62.07vw" : "auto"),
      padding: "4.83vw 2.41vw",
    },

    "& > *": {
      marginTop: "1.04vw",
      "@media(max-width: 767px)": {
        marginTop: "3.62vw",
      },

      "&:first-child": {
        marginTop: 0,
      },
    },

    "& *": {
      color: theme.palette.color.white,
    },
  },
  pattern: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",

    width: "99.86vw",
    height: "15.06vw",
    "@media(max-width: 767px)": {
      width: "148.3vw",
      height: "19.85vw",
    },
  },
  title: {
    fontFamily: "'Exo 2'",
    fontWeight: 700,
    lineHeight: 1.2,

    fontSize: "2.5vw",
    "@media(max-width: 767px)": {
      fontSize: "4.34vw",
    },
  },
  text: {
    fontWeight: 300,
    lineHeight: 1.28,

    fontSize: "1.25vw",
    "@media(max-width: 767px)": {
      fontSize: "2.89vw",
    },
  },
  link: {
    display: "flex",
    alignItems: "center",

    padding: "0.93vw 0",
    "@media(max-width: 767px)": {
      padding: 0,
    },
  },
  link_text: {
    fontWeight: 600,
    lineHeight: 1.28,

    fontSize: "1.25vw",
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
    },
  },
  link_icon: {
    marginLeft: "1.04vw",
    width: "2.63vw",
    height: "1.04vw",

    "& path": {
      fill: theme.palette.color.white,
    },
  },
  image: {
    width: "77.08%",
    height: "41.66vw",
    "@media(max-width: 767px)": {
      width: "57.97%",
      height: "74.87vw",
    },
  },
}));

/**
 * Блок конструктора "изображение и текст (4:1)"
 * @module src/components/constructor/imageAndText41
 * @param {Object} props - объект свойств компонента React
 * @param {Object[]} props.slice - объект слайса полученный из prismic
 */
export default function ImageAndText41({ slice }) {
  const classes = useStyles({ position: slice.primary.position_text });
  const mobile = useMediaQuery("(max-width: 767px)");

  const title = slice.primary.title_text ?? false;
  const text = slice.primary.text ?? false;
  const text_link = slice.primary.text_link ?? false;
  const content = title || text || text_link;
  const image = slice.primary.image;

  const order = slice.primary.position_text === "слева" ? 0 : 1;

  function goLink(str) {
    if (!(str ?? false)) return;
    if (str.slice(-1) !== "/") str += "/";

    if (str.slice(0, 4) === "http") {
      const anchor = document.createElement("a");
      anchor.href = str;
      anchor.click();
    } else {
      navigate(str);
    }
  }

  return (
    <div className={classes.wrapper}>
      {content ? (
        <div
          className={classes.content}
          style={{ background: colors[slice.primary.color_bg_text], order }}
        >
          <div className={classes.pattern}>
            <Pattern />
          </div>

          {title ? (
            <Typography className={classes.title}>{title}</Typography>
          ) : null}

          {text ? (
            <Typography className={classes.text}>{text}</Typography>
          ) : null}

          {text_link ? (
            <button
              onClick={() => goLink(slice.primary.link)}
              className={classes.link}
            >
              <Typography className={classes.link_text}>{text_link}</Typography>

              {mobile ? null : (
                <div className={classes.link_icon}>
                  <ArrowLearnMore />
                </div>
              )}
            </button>
          ) : null}
        </div>
      ) : null}

      {image?.localFile ?? false ? (
        <GatsbyImage
          image={image.localFile.childImageSharp?.gatsbyImageData}
          alt={image.alt}
          className={classes.image}
          imgStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : null}
    </div>
  );
}
