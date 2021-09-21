import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

import BurgerMenuVertical from "../../../images/svg/burger_menu_vertical.svg";
import BigCrossClose from "../../../images/svg/big_cross_close.svg";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "absolute",
    height: "100%",

    width: "51.04vw",
    "@media(max-width: 767px)": {
      width: "90.82vw",
    },
  },
  slideBlock: {
    position: "relative",
    width: "100%",
    height: "100%",
    transition: "left 0.5s, right 0.5s",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    padding: "0 5.69vw",
    "@media(max-width: 767px)": {
      padding: "0 7.24vw",
    },

    "& *": {
      color: theme.palette.color.white,
    },
  },
  blue: {
    background: theme.palette.background.blue,
  },
  orange: {
    background: theme.palette.background.orange,
  },
  slideBlock_button: {
    position: "absolute",
    background: "inherit",
    top: "50%",
    transform: "translate(-1px, -50%)",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "4.16vw",
    height: "12.91vw",
    borderRadius: "0px 1.73vw 1.73vw 0px",
    "@media(max-width: 767px)": {
      width: "9.17vw",
      height: "30.91vw",
      borderRadius: "0px 3.62vw 3.62vw 0px",
    },
  },
  slideBlock_button_mirror: {
    transform: "translate(1px, -50%) scaleX(-1)",
  },
  wrapperCross: {
    position: "absolute",
    top: "50%",
    left: 0,
    transform: "translate(-50%, -50%)",

    width: "2.84vw",
    height: "2.84vw",
    "@media(max-width: 767px)": {
      transform: "translate(0, -50%)",
      width: "6.52vw",
      height: "6.52vw",
    },
  },
  wrapperBurgerMenu: {
    width: "1.8vw",
    height: "6.94vw",
    "@media(max-width: 767px)": {
      width: "4.34vw",
      height: "14.49vw",
    },
  },
  title: {
    fontFamily: "'Exo 2'",
    fontWeight: 700,
    lineHeight: 1.2,

    fontSize: "2.5vw",
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

    "& strong,b": {
      fontWeight: 700,
    },
    "& p": {
      margin: "1.73vw 0 0",
      "@media(max-width: 767px)": {
        margin: "4.83vw 0 0",
      },
    },
  },
  quoteBlock: {
    alignSelf: "center",

    width: "20.27vw",
    marginTop: "5.62vw",
    "@media(max-width: 767px)": {
      width: "100%",
      marginTop: "4.83vw",
    },
  },
  quoteBlock_quote: {
    fontWeight: 700,
    lineHeight: 1.28,

    fontSize: "1.25vw",
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
      textAlign: "right",
    },
  },
  quoteBlock_authorQuote: {
    fontWeight: 300,
    lineHeight: 1.28,
    textAlign: "right",

    fontSize: "1.25vw",
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
    },
  },
}));

/**
 * Выезжающий блок
 * @module src/components/mainPage/slidingBlock
 * @param {Object} props - объект свойств компонента React
 * @param {String} [props.variant=left] - вариант отображения
 * @param {String} [props.title] - заголовок
 * @param {String} [props.text] - текст
 * @param {String} [props.quote] - цитата
 * @param {String} [props.authorQuote] - автор цитаты
 */
export default function SlidingBlock({
  variant,
  title,
  text,
  quote,
  authorQuote,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const classColor = variant === "right" ? classes.orange : classes.blue;
  const positionWrapper = variant === "right" ? { right: 0 } : { left: 0 };
  const positionSlide =
    variant === "right"
      ? { right: open ? 0 : "-100%" }
      : { left: open ? 0 : "-100%" };
  const positionButton =
    variant === "right" ? { right: "100%" } : { left: "100%" };
  const classMirror =
    variant === "right" ? classes.slideBlock_button_mirror : "";

  return title ?? text ?? quote ?? authorQuote ?? false ? (
    <div className={classes.wrapper} style={{ ...positionWrapper }}>
      <div
        className={classes.slideBlock + " " + classColor}
        style={{ ...positionSlide }}
      >
        <button
          onClick={() => setOpen(!open)}
          className={classes.slideBlock_button + " " + classMirror}
          style={{ ...positionButton }}
        >
          {open ? (
            <div className={classes.wrapperCross}>
              <BigCrossClose />
            </div>
          ) : (
            <div className={classes.wrapperBurgerMenu}>
              <BurgerMenuVertical />
            </div>
          )}
        </button>

        {title ?? false ? (
          <Typography className={classes.title}>{title}</Typography>
        ) : null}

        {text ?? false ? (
          <div
            className={classes.text}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        ) : null}

        {quote ?? authorQuote ?? false ? (
          <div className={classes.quoteBlock}>
            {quote ?? false ? (
              <Typography className={classes.quoteBlock_quote}>
                {quote}
              </Typography>
            ) : null}

            {authorQuote ?? false ? (
              <Typography className={classes.quoteBlock_authorQuote}>
                {authorQuote}
              </Typography>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  ) : null;
}
