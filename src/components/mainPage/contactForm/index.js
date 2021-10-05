import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { makeStyles, Typography } from "@material-ui/core";

import Pattern from "../../../images/svg/pattern.svg";
import Form from "./form";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",

    marginTop: "8.33vw",
    "@media(min-width: 1440px)": {
      marginTop: "120px",
    },
    "@media(max-width: 767px)": {
      marginTop: "14.49vw",
      flexDirection: "column",
    },
  },
  content: {
    position: "relative",
    overflow: "hidden",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    background: theme.palette.background.orange,

    width: "45.13%",
    borderRadius: "0 1.73vw 0 0",
    padding: "8.22vw 3.47vw",
    "@media(min-width: 1440px)": {
      borderRadius: "0 25px 0 0",
      padding: "118.4px 50px",
    },
    "@media(max-width: 767px)": {
      width: "100%",
      borderRadius: "6.03vw 6.03vw 0 0",
      padding: "14.49vw 6.03vw",
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
    "@media(min-width: 1440px)": {
      width: "1438px",
      height: "217px",
    },
    "@media(max-width: 767px)": {
      width: "148.3vw",
      height: "30.72vw",
    },
  },
  title: {
    fontFamily: "'Exo 2'",
    fontWeight: 900,
    lineHeight: 1.4,
    textTransform: "uppercase",

    fontSize: "4.16vw",
    "@media(min-width: 1440px)": {
      fontSize: 60,
    },
    "@media(max-width: 767px)": {
      fontSize: "8.69vw",
      textAlign: "center",
    },
  },
  text: {
    fontWeight: 300,
    lineHeight: 1.4,

    marginTop: "3.47vw",
    fontSize: "1.25vw",
    "@media(min-width: 1440px)": {
      marginTop: "50px",
      fontSize: 18,
    },
    "@media(max-width: 767px)": {
      marginTop: "3.62vw",
      fontSize: "3.38vw",
      textAlign: "center",
    },
  },
}));

/**
 * Блок контактной формы
 * @module src/components/mainPage/contactForm
 */
export default function ContactForm() {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    {
      prismicContactForm {
        data {
          title
          text
        }
      }
    }
  `);

  const title = data.prismicContactForm.data.title ?? false;
  const text = data.prismicContactForm.data.text ?? false;
  const content = title || text;

  return (
    <div className={classes.wrapper}>
      {content ? (
        <div className={classes.content}>
          <div className={classes.pattern}>
            <Pattern />
          </div>

          {title ? (
            <Typography className={classes.title}>{title}</Typography>
          ) : null}

          {text ? (
            <Typography className={classes.text}>{text}</Typography>
          ) : null}
        </div>
      ) : null}

      <Form />
    </div>
  );
}
