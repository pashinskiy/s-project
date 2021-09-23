import React from "react";
import { navigate } from "gatsby";
import { makeStyles, Typography } from "@material-ui/core";

import colors from "../../../templates/colors.json";

import Water from "../../../images/svg/water.svg";
import ArrowLearnMore from "../../../images/svg/arrow_learn_more.svg";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    background: theme.palette.background.main,

    width: "55.55%",
    "@media(max-width: 767px)": {
      width: "100%",
      padding: "0 6.03vw",
    },

    "& > *": {
      marginTop: "1.73vw",
      "@media(max-width: 767px)": {
        marginTop: "4.83vw",
      },

      "&:first-child": {
        marginTop: 0,
      },
    },
  },
  logo: {
    width: "auto",

    height: "10.41vw",
    "@media(max-width: 767px)": {
      height: "24.15vw",
    },
  },
  icon: {
    width: "17.98vw",
    height: "4.31vw",
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
    textAlign: "center",

    padding: "0.48vw 0.76vw",
    fontSize: "1.66vw",
    "@media(max-width: 767px)": {
      padding: "1.2vw 2.41vw",
      fontSize: "4.34vw",
    },

    "&:nth-child(2)": {
      marginLeft: "1.73vw",
      "@media(max-width: 767px)": {
        marginLeft: 0,
        marginTop: "4.83vw",
      },
    },
  },
  title: {
    fontFamily: "'Exo 2'",
    fontWeight: 700,
    lineHeight: 1.2,
    color: theme.palette.color.blue,
    textAlign: "center",

    fontSize: "4.44vw",
    "@media(max-width: 767px)": {
      fontSize: "8.69vw",
    },
  },
  text: {
    fontWeight: 300,
    lineHeight: 1.28,
    color: theme.palette.color.lightBlue,
    textAlign: "center",

    fontSize: "1.25vw",
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
    },
  },
  link: {
    display: "flex",
    alignItems: "center",

    padding: "0.93vw 0",
    "@media(max-width: 767px)": {
      padding: "3.86vw 0",
    },
  },
  link_text: {
    fontWeight: 600,
    lineHeight: 1.28,
    color: theme.palette.color.darkBlue,
    textAlign: "center",

    fontSize: "1.25vw",
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
    },
  },
  link_icon: {
    marginLeft: "1.04vw",
    width: "2.63vw",
    height: "1.04vw",
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
    "@media(max-width: 767px)": {
      padding: "2.41vw 10.86vw",
    },
  },
  button_text: {
    fontWeight: 700,
    lineHeight: 1.28,
    color: theme.palette.color.white,
    textAlign: "center",

    fontSize: "1.66vw",
    "@media(max-width: 767px)": {
      fontSize: "3.86vw",
    },
  },
}));

/**
 * Блок конструктора "Текст"
 * @module src/components/constructor/text
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.slice - объект слайса полученный из prismic
 */
export default function Text({ slice }) {
  const logo = slice.primary.logo;
  const icon_color = slice.primary.icon ?? false;
  const subtitle_1 = slice.primary.accent_subtitle_1 ?? false;
  const subtitle_2 = slice.primary.accent_subtitle_2 ?? false;
  const title = slice.primary.accent_title ?? false;
  const text = slice.primary.text ?? false;
  const link_text = slice.primary.link_text ?? false;
  const text_button = slice.primary.text_button ?? false;
  const content =
    (logo.localFile ?? false) ||
    icon_color ||
    subtitle_1 ||
    subtitle_2 ||
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
      {content ? (
        <div className={classes.content}>
          {logo.localFile ?? false ? (
            <img
              src={logo.localFile.publicURL}
              alt={logo.alt}
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

          {subtitle_1 || subtitle_2 ? (
            <div
              className={classes.subtitles}
              style={{ order: slice.primary.order_subtitles ?? 1 }}
            >
              {subtitle_1 ? (
                <Typography
                  className={classes.subtitle}
                  style={{
                    background: colors[slice.primary.bg_subtitle_1],
                  }}
                >
                  {subtitle_1}
                </Typography>
              ) : null}

              {subtitle_2 ? (
                <Typography
                  className={classes.subtitle}
                  style={{
                    background: colors[slice.primary.bg_subtitle_2],
                  }}
                >
                  {subtitle_2}
                </Typography>
              ) : null}
            </div>
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
