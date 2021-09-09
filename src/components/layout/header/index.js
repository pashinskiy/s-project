import * as React from "react";
import { navigate } from "gatsby";
import { makeStyles, Typography, useMediaQuery } from "@material-ui/core";

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../../context/GlobalContextProvider";

import BurgerMenu from "../../../images/svg/burger_menu.svg";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    background: theme.palette.background.main,

    height: "12.01vw",
    padding: "0 2.08vw",
    "@media(min-width: 1440px)": {
      height: 173,
      padding: "0 30px",
    },
    "@media(max-width: 767px)": {
      position: "sticky",
      zIndex: 999,
      top: 0,
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      height: "21.73vw",
      padding: "2.41vw 4.83vw 1.2vw",
    },
  },
  menuButton: {
    display: "flex",
    alignItems: "center",

    position: "absolute",
    left: "2.08vw",
    "@media(min-width: 1440px)": {
      left: "30px",
    },
    "@media(max-width: 767px)": {
      position: "static",
      flexDirection: "row-reverse",
    },
  },
  menuIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "2.01vw",
    height: "0.97vw",
    marginRight: "1.59vw",
    "@media(min-width: 1440px)": {
      width: 29,
      height: 14,
      marginRight: 23,
    },
    "@media(max-width: 767px)": {
      width: "7vw",
      height: "3.38vw",
      marginRight: 0,
      marginLeft: "5.55vw",
    },
  },
  menuTitle: {
    fontWeight: 600,
    lineHeight: 1.28,

    fontSize: "1.25vw",
    "@media(min-width: 1440px)": {
      fontSize: 18,
    },
    "@media(max-width: 767px)": {
      textTransform: "lowercase",
      fontSize: "5.79vw",
    },
  },
  buttonLogo: {
    height: "100%",
  },
  imageLogo: {
    width: "auto",
    height: "100%",
    objectFit: "contain",
  },
  versionSiteWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    position: "absolute",

    right: "2.08vw",
    "@media(min-width: 1440px)": {
      right: "30px",
    },
  },
  versionSiteButton: {
    marginTop: "0.69vw",
    "@media(min-width: 1440px)": {
      marginTop: "10px",
    },

    "&:first-child": {
      marginTop: 0,
    },
  },
  versionSiteText: {
    fontWeight: 400,
    lineHeight: 1.28,

    fontSize: "1.25vw",
    "@media(min-width: 1440px)": {
      fontSize: "18px",
    },
  },
}));

/**
 * Шапка сайта
 * @module src/components/layout/header
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.data - объект ответа graphql
 */
export default function Header({ data }) {
  const classes = useStyles();
  const state = React.useContext(GlobalStateContext);
  const dispatch = React.useContext(GlobalDispatchContext);
  const mobile = useMediaQuery("(max-width:767px)");

  const image = (function () {
    switch (state.versionSite) {
      case "sport":
        return data.prismicLayout.data.logo_sport;
      case "fitnes":
        return data.prismicLayout.data.logo_fitnes;
      default:
        return data.prismicLayout.data.logo_sport;
    }
  })();

  function openMenu() {
    dispatch({ type: "SET_SHOW_MENU", payload: true });
  }
  function goSportVersion() {
    dispatch({ type: "SET_VERSION_SITE", payload: "sport" });
  }
  function goFitnesVersion() {
    dispatch({ type: "SET_VERSION_SITE", payload: "fitnes" });
  }

  return (
    <header className={classes.wrapper}>
      <button
        aria-label="menu"
        onClick={openMenu}
        className={classes.menuButton}
      >
        <span className={classes.menuIcon}>
          <BurgerMenu />
        </span>
        <Typography className={classes.menuTitle}>Меню</Typography>
      </button>

      <button
        onClick={() => navigate("/")}
        aria-label="main page"
        className={classes.buttonLogo}
      >
        <img
          src={image.localFile.publicURL}
          alt={image.alt}
          width={1}
          height={1}
          className={classes.imageLogo}
        />
      </button>

      {mobile ? null : (
        <div className={classes.versionSiteWrapper}>
          <button
            onClick={goSportVersion}
            aria-label="sport version site"
            className={classes.versionSiteButton}
          >
            <Typography className={classes.versionSiteText}>
              {data.prismicLayout.data.title_sport}
            </Typography>
          </button>

          <button
            onClick={goFitnesVersion}
            aria-label="fitnes version site"
            className={classes.versionSiteButton}
          >
            <Typography className={classes.versionSiteText}>
              {data.prismicLayout.data.title_fitnes}
            </Typography>
          </button>
        </div>
      )}
    </header>
  );
}
