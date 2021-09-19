import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { makeStyles, Typography } from "@material-ui/core";

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../../context/GlobalContextProvider";

import IconSport from "../../../images/svg/icon_sport.svg";
import IconFitnes from "../../../images/svg/icon_fitnes.svg";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
  },
  button: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: "1.21vw",
    borderRadius: "1.73vw 1.73vw 0 0",
    "@media(max-width: 767px)": {
      padding: "2.41vw",
      borderRadius: "3.62vw 3.62vw 0 0",
    },

    "& *": {
      color: theme.palette.color.darkBlue,
    },
  },
  button_sport: {
    "& path": {
      fill: theme.palette.color.blue,
    },
  },
  button_sport_active: {
    background: theme.palette.background.blue,
    "& path": {
      fill: theme.palette.color.white,
    },
    "& *": {
      color: theme.palette.color.white,
    },
  },
  button_fitnes: {
    "& path": {
      fill: theme.palette.color.orange,
    },
  },
  button_fitnes_active: {
    background: theme.palette.background.orange,
    "& path": {
      fill: theme.palette.color.white,
    },
    "& *": {
      color: theme.palette.color.white,
    },
  },
  button_icon: {
    width: "6.04vw",
    height: "4.16vw",
    marginRight: "1.11vw",
    "@media(max-width: 767px)": {
      width: "14vw",
      height: "9.66vw",
      marginRight: "1.2vw",
    },
  },
  button_text: {
    fontFamily: "'Exo 2'",
    fontWeight: 700,
    lineHeight: 1.2,

    fontSize: "1.66vw",
    "@media(max-width: 767px)": {
      fontSize: "2.89vw",
    },
  },
}));

/**
 * Блок кнопок переключения
 * @module src/components/mainPage/switchingBlock/toggleButtons
 */
export default function ToggleButtons() {
  const classes = useStyles();

  const state = React.useContext(GlobalStateContext);
  const dispatch = React.useContext(GlobalDispatchContext);

  const data = useStaticQuery(graphql`
    {
      prismicMainPage {
        data {
          button_text_fitnes
          button_text_sport
        }
      }
    }
  `);

  const buttonSportClass =
    state.versionSite === "sport"
      ? classes.button + " " + classes.button_sport_active
      : classes.button + " " + classes.button_sport;
  const buttonFitnesClass =
    state.versionSite === "fitnes"
      ? classes.button + " " + classes.button_fitnes_active
      : classes.button + " " + classes.button_fitnes;

  function setSportVersion() {
    dispatch({ type: "SET_VERSION_SITE", payload: "sport" });
  }
  function setFitnesVersion() {
    dispatch({ type: "SET_VERSION_SITE", payload: "fitnes" });
  }
  return (
    <div className={classes.wrapper}>
      <button
        aria-label="sport club"
        onClick={setSportVersion}
        className={buttonSportClass}
      >
        <div className={classes.button_icon}>
          <IconSport />
        </div>

        <Typography className={classes.button_text}>
          {data.prismicMainPage.data.button_text_sport}
        </Typography>
      </button>

      <button
        aria-label="sport club"
        onClick={setFitnesVersion}
        className={buttonFitnesClass}
      >
        <div className={classes.button_icon}>
          <IconFitnes />
        </div>

        <Typography className={classes.button_text}>
          {data.prismicMainPage.data.button_text_fitnes}
        </Typography>
      </button>
    </div>
  );
}
