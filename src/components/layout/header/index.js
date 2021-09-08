import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { makeStyles, Typography, useMediaQuery } from "@material-ui/core";

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../../context/GlobalContextProvider";

import BurgerMenu from "../../../images/svg/burger_menu.svg";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",

    height: "12.01vw",
    padding: "0 2.08vw",
    "@media(min-width: 1440px)": {
      height: 173,
      padding: "0 30px",
    },
    "@media(max-width: 767px)": {
      height: "21.73vw",
      padding: "0 4.83vw",
      flexDirection: "row-reverse",
      justifyContent: "space-between",
    },
  },
  menuWrapper: {
    display: "flex",
    alignItems: "center",
    padding: 0,
    border: "none",
    background: "transparent",
    cursor: "pointer",

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
      fontSize: "5.79vw",
    },
  },
  image: {
    width: "auto",
    height: "100%",
  },
}));

/**
 * Шапка сайта
 * @module src/components/header
 */
export default function Header() {
  const classes = useStyles();
  const state = React.useContext(GlobalStateContext);
  const dispatch = React.useContext(GlobalDispatchContext);
  const mobile = useMediaQuery("(max-width:767px)");

  const data = useStaticQuery(graphql`
    {
      prismicHeader {
        data {
          logo_fitnes {
            localFile {
              publicURL
            }
          }
          logo_sport {
            localFile {
              publicURL
            }
          }
          title_fitnes
          title_sport
        }
      }
    }
  `);

  const image = (function () {
    switch (state.versionSite) {
      case "sport":
        return data.prismicHeader.data.logo_sport;
      case "fitnes":
        return data.prismicHeader.data.logo_fitnes;
      default:
        return data.prismicHeader.data.logo_sport;
    }
  })();

  const [showMenu, setShowMenu] = React.useState(false);
  function openMenu() {
    setShowMenu(true);
    document.addEventListener("click", () => setShowMenu(false), {
      once: true,
    });
  }

  return (
    <header className={classes.wrapper}>
      <button
        id="menu"
        aria-label="menu"
        onClick={openMenu}
        className={classes.menuWrapper}
      >
        <span className={classes.menuIcon}>
          <BurgerMenu />
        </span>
        <Typography className={classes.menuTitle}>Меню</Typography>
      </button>

      <img
        src={image.localFile.publicURL}
        alt={image.alt}
        width={1}
        height={1}
        className={classes.image}
      />

      <div className={classes.wrapper}>

      </div>
    </header>
  );
}
