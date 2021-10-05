import React from "react";
import { navigate } from "gatsby";
import { makeStyles, Typography } from "@material-ui/core";
import { GatsbyImage } from "gatsby-plugin-image";

import colors from "../../../templates/colors.json";

import Water from "../../../images/svg/water.svg";
import ArrowLearnMore from "../../../images/svg/arrow_learn_more.svg";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    padding: "0 3.47vw",
    "@media(min-width: 1440px)": {
      padding: "0 50px",  
    },
    "@media(max-width: 767px)": {
      flexDirection: "column",
      padding: 0,
    },
  },
  image: {
    width: "53.73%",
    height: "34.72vw",
    "@media(min-width: 1440px)": {
      height: "500px",
    },
    "@media(max-width: 767px)": {
      order: 1,
      width: "100%",
      height: "120.77vw",
      marginTop: "4.83vw",
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",

    background: theme.palette.background.main,

    width: "42.53%",
    "@media(max-width: 767px)": {
      width: "100%",
      padding: "0 6.03vw",
      order: -1,
    },

    "& > *": {
      marginTop: "1.73vw",
      "@media(min-width: 1440px)": {
        marginTop: "25px",
      },
      "@media(max-width: 767px)": {
        marginTop: "4.83vw",
      },

    },
  },
  logo: {
    width: "auto",

    height: "10.41vw",
    "@media(min-width: 1440px)": {
      height: "150px",
    },
    "@media(max-width: 767px)": {
      height: "24.15vw",
    },
  },
  icon: {
    width: "17.98vw",
    height: "4.31vw",
    "@media(min-width: 1440px)": {
      width: "259px",
      height: "62px",
    },
    "@media(max-width: 767px)": {
      width: "43.96vw",
      height: "10.55vw",
    },

    "& path": {
      fill: (props) => colors[props.icon_color] ?? "",
    },
  },
  subtitle: {
    fontWeight: 700,
    lineHeight: 1.28,
    color: theme.palette.color.white,
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
    color: theme.palette.color.blue,

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
    color: theme.palette.color.lightBlue,

    fontSize: "1.25vw",
    "@media(min-width: 1440px)": {
      fontSize: 18,
    },
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
    },
  },
  link: {
    display: "flex",
    alignItems: "center",

    padding: "0.93vw 0",
    "@media(min-width: 1440px)": {
      padding: "13.5px 0",
    },
    "@media(max-width: 767px)": {
      padding: "3.86vw 0",
    },
  },
  link_text: {
    fontWeight: 600,
    lineHeight: 1.28,
    color: theme.palette.color.darkBlue,

    fontSize: "1.25vw",
    "@media(min-width: 1440px)": {
      fontSize: 18,
    },
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
    },
  },
  link_icon: {
    marginLeft: "1.04vw",
    width: "2.63vw",
    height: "1.04vw",
    "@media(min-width: 1440px)": {
      marginLeft: "15px",
      width: "38px",
      height: "15px",
    },
    "@media(max-width: 767px)": {
      marginLeft: "3.62vw",
      width: "8.69vw",
      height: "3.62vw",
    },
  },
  button: {
    borderRadius: "100px",
    background: theme.palette.background.orange,

    padding: "1.04vw 5.55vw",
    "@media(min-width: 1440px)": {
      padding: "15px 80px",
    },
    "@media(max-width: 767px)": {
      padding: "2.41vw 10.86vw",
    },
  },
  button_text: {
    fontWeight: 700,
    lineHeight: 1.28,
    color: theme.palette.color.white,

    fontSize: "1.66vw",
    "@media(min-width: 1440px)": {
      fontSize: 24,
    },
    "@media(max-width: 767px)": {
      fontSize: "3.86vw",
    },
  },
}));

/**
 * Блок конструктора "изображение сбоку текста"
 * @module src/components/constructor/imageSideText
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.slice - объект слайса полученный из prismic
 */
export default function ImageSideText({ slice }) {
  const image = slice.primary.image;
  const logo = slice.primary.logo;
  const icon_color = slice.primary.icon !== "none" ? slice.primary.icon : false;
  const subtitle = slice.primary.accent_subtitle ?? false;
  const title = slice.primary.accent_title ?? false;
  const text = slice.primary.text ?? false;
  const link_text = slice.primary.link_text ?? false;
  const text_button = slice.primary.text_button ?? false;
  const content =
    (logo.localFile ?? false) ||
    icon_color ||
    subtitle ||
    title ||
    text ||
    link_text ||
    text_button;

  const classes = useStyles({ icon_color });

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
      {image?.localFile ?? false ? (
        <GatsbyImage
          image={image.localFile.childImageSharp?.gatsbyImageData}
          alt={image.alt ?? "photo"}
          className={classes.image}
          imgStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
          style={{ order: slice.primary.position ? 0 : 1 }}
        />
      ) : null}

      {content ? (
        <div className={classes.content}>
          {logo.localFile ?? false ? (
            <img
              src={logo.localFile.publicURL}
              alt={logo.alt ?? "photo"}
              width={1}
              height={1}
              className={classes.logo}
              style={{ order: slice.primary.order_logo ?? 1 }}
            />
          ) : null}

          {icon_color ? (
            <div
              className={classes.icon}
              style={{ order: slice.primary.order_icon ?? 1 }}
            >
              <Water />
            </div>
          ) : null}

          {subtitle ? (
            <Typography
              className={classes.subtitle}
              style={{
                background: colors[slice.primary.bg_subtitle],
                order: slice.primary.order_subtitle ?? 1,
              }}
            >
              {subtitle}
            </Typography>
          ) : null}

          {title ? (
            <Typography
              className={classes.title}
              style={{ order: slice.primary.order_title ?? 2 }}
            >
              {title}
            </Typography>
          ) : null}

          {text ? (
            <Typography
              className={classes.text}
              style={{ order: slice.primary.order_text ?? 3 }}
            >
              {text}
            </Typography>
          ) : null}

          {link_text ? (
            <button
              onClick={() => goLink(slice.primary.link)}
              className={classes.link}
              style={{ order: slice.primary.order_link ?? 4 }}
            >
              <Typography className={classes.link_text}>{link_text}</Typography>

              <div className={classes.link_icon}>
                <ArrowLearnMore />
              </div>
            </button>
          ) : null}

          {text_button ? (
            <button
              onClick={() => goLink(slice.primary.link_button)}
              className={classes.button}
              style={{ order: slice.primary.order_button ?? 5 }}
            >
              <Typography className={classes.button_text}>
                {text_button}
              </Typography>
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
