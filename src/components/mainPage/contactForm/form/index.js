import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { makeStyles, Typography } from "@material-ui/core";

import ArrowSelect from "../../../../images/svg/arrow_select.svg";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    flexWrap: "wrap",

    width: "50.69%",
    padding: "3.47vw",
    paddingLeft: 0,
    "@media(max-width: 767px)": {
      width: "100%",
      marginTop: "9.66vw",
      padding: "0 6.03vw",
    },

    "& > *": {
      marginTop: "2.43vw",
      "@media(max-width: 767px)": {
        marginTop: "8.45vw",
      },

      "&:first-child": {
        marginTop: 0,
      },
    },
  },

  fullField: {
    position: "relative",

    width: "100%",
    border: `1px solid ${theme.palette.color.blue}`,
    borderRadius: "100px",
    overflow: "hidden",
    background: theme.palette.background.main,

    padding: "1.04vw 1.38vw",
    "@media(max-width: 767px)": {
      padding: "3.62vw 4.83vw",
    },
  },
  shortField: {
    position: "relative",

    width: "48.52%",
    border: `1px solid ${theme.palette.color.blue}`,
    borderRadius: "100px",
    overflow: "hidden",
    background: theme.palette.background.main,

    padding: "1.04vw 1.38vw",
    "@media(max-width: 767px)": {
      padding: "3.62vw 4.83vw",
    },
  },
  text: {
    display: "flex",
    alignItems: "center",

    fontWeight: 700,
    lineHeight: 1.28,
    color: theme.palette.color.lightBlue,

    fontSize: "1.11vw",
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
    },

    "& font": {
      fontFamily: "Roboto Condensed",
      color: theme.palette.color.orange,

      marginLeft: "0.69vw",
      fontSize: "1.66vw",
      "@media(max-width: 767px)": {
        marginLeft: "2.41vw",
        fontSize: "4.34vw",
      },
    },
  },
  input: {
    position: "absolute",
    top: 0,
    left: 0,

    width: "100%",
    height: "100%",
    border: "none",
    outline: "none",

    padding: "1.04vw 1.38vw",
    "@media(max-width: 767px)": {
      padding: "3.62vw 4.83vw",
    },
  },
  select: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    width: "100%",
    border: `1px solid ${theme.palette.color.blue}`,
    background: theme.palette.background.main,

    borderRadius: "2.01vw",
    padding: "1.28vw 1.38vw",
    "@media(max-width: 767px)": {
      borderRadius: "7vw",
      padding: "3.98vw 4.83vw",
    },
  },
  select_active: {
    borderBottom: "none",

    borderRadius: "2.01vw 2.01vw 0 0",
    "@media(max-width: 767px)": {
      borderRadius: "7vw 7vw 0 0",
    },
  },
  select_icon: {
    transition: "transform 0.2s",

    width: "1.52vw",
    height: "0.83vw",
    "@media(max-width: 767px)": {
      width: "5.31vw",
      height: "2.89vw",
    },
  },
  options: {
    position: "absolute",
    width: "calc(100% + 2px)",
    left: "-1px",
    top: "100%",
    zIndex: 99,

    background: theme.palette.background.main,
    border: `1px solid ${theme.palette.color.blue}`,
    borderTop: "none",

    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

    borderRadius: "0 0 2.01vw 2.01vw",
    padding: "1.04vw 1.38vw",
    "@media(max-width: 767px)": {
      borderRadius: "0 0 7vw 7vw",
      padding: "3.62vw 4.83vw",
    },
  },
  option: {
    fontFamily: "Futura PT",
    fontWeight: 700,
    lineHeight: 1.28,
    color: theme.palette.color.lightBlue,

    marginTop: "0.34vw",
    fontSize: "1.11vw",
    "@media(max-width: 767px)": {
      marginTop: "1.2vw",
      fontSize: "3.38vw",
    },

    "&:first-child": {
      marginTop: 0,
    },

    "&:hover": {
      color: theme.palette.color.blue,
    },
  },
  submitWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",

    marginTop: "4.86vw",
    "@media(max-width: 767px)": {
      marginTop: "13.28vw",
    },
  },
  submit: {
    alignSelf: "center",
    display: "flex",

    background: theme.palette.background.orange,
    borderRadius: "100px",

    fontFamily: "Futura PT",
    fontWeight: 700,
    lineHeight: 1.28,
    color: theme.palette.color.white,

    padding: "1.04vw 5.55vw",
    fontSize: "1.66vw",
    "@media(max-width: 767px)": {
      padding: "2.41vw 10.86vw",
      fontSize: "3.86vw",
    },
  },
}));

/**
 * Контактная форма
 * @module src/components/mainPage/contactForm/form
 */
export default function Form() {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    {
      prismicContactForm {
        data {
          phone_number
          phone_icon {
            alt
            localFile {
              publicURL
            }
          }
          networks {
            network_link
            network_icon {
              localFile {
                publicURL
              }
            }
          }
          directions {
            direction
          }
          button_text
        }
      }
    }
  `);

  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [direction, setDirection] = React.useState("Интересующее направление");
  const [openOptions, SetOpenOptions] = React.useState(false);

  function submit(e) {
    e.preventDefault();
  }

  function changeOpenOptions(e) {
    e.preventDefault();
    SetOpenOptions(!openOptions);
  }

  return (
    <form onSubmit={submit} className={classes.wrapper}>
      <label id="name" className={classes.fullField}>
        <Typography className={classes.text}>
          Ваше имя<font>*</font>
        </Typography>

        <input
          name="name"
          onInput={(e) => setName(e.target.value)}
          style={{ background: name === "" ? "transparent" : "inherit" }}
          className={classes.input + " " + classes.text}
        />
      </label>

      <label id="phone" className={classes.shortField}>
        <Typography className={classes.text}>
          Телефон<font>*</font>
        </Typography>

        <input
          name="phone"
          onInput={(e) => setPhone(e.target.value)}
          style={{ background: phone === "" ? "transparent" : "inherit" }}
          className={classes.input + " " + classes.text}
        />
      </label>

      <label id="email" className={classes.shortField}>
        <Typography className={classes.text}>
          Почта<font>*</font>
        </Typography>

        <input
          name="email"
          onInput={(e) => setEmail(e.target.value)}
          style={{ background: email === "" ? "transparent" : "inherit" }}
          className={classes.input + " " + classes.text}
        />
      </label>

      <button
        id="direction"
        onClick={changeOpenOptions}
        aria-label="направление"
        className={
          classes.select + " " + (openOptions ? classes.select_active : "")
        }
      >
        <Typography className={classes.text}>{direction}</Typography>

        <div
          className={classes.select_icon}
          style={{ transform: openOptions ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <ArrowSelect />
        </div>

        {openOptions ? (
          <div className={classes.options}>
            {data.prismicContactForm.data.directions.map((item) => (
              <button
                onClick={() => setDirection(item.direction)}
                className={classes.option}
              >
                {item.direction}
              </button>
            ))}
          </div>
        ) : null}
      </button>

      <div className={classes.submitWrapper}>
        <button
          aria-label={data.prismicContactForm.data.button_text ?? "Отправить"}
          onClick={submit}
          className={classes.submit}
        >
          {data.prismicContactForm.data.button_text ?? "Отправить"}
        </button>
      </div>
    </form>
  );
}
