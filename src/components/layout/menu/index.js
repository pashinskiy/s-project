import * as React from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";
import {
  makeStyles,
  Typography,
  useMediaQuery,
  Modal,
  Slide,
} from "@material-ui/core";

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../../context/GlobalContextProvider";

import ArrowClose from "../../../images/svg/arrow_close.svg";
import CrossClose from "../../../images/svg/cross_close.svg";
import ArrowMarker from "../../../images/svg/arrow_marker.svg";

const useStyles = makeStyles((theme) => ({
  wrapperMenu: {
    background: theme.palette.background.blue,
    height: "100%",
    "& *": { color: theme.palette.color.white },

    width: "46.87vw",
    borderRadius: "0 2.43vw 2.43vw 0",
    padding: "2.77vw",
    "@media(min-width: 1440px)": {
      width: 675,
      borderRadius: "0 35px 35px 0",
      padding: 40,
    },
    "@media(max-width: 767px)": {
      width: "100%",
      borderRadius: "8.45vw 0 0 8.45vw ",
      padding: "4.83vw",
    },
  },
  wrapperLogoAndClose: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonLogo: {
    height: "16.9vw",
  },
  imageLogo: {
    width: "auto",
    height: "100%",
    objectFit: "contain",
  },
  wrapperClose: {
    display: "flex",
    alignItems: "center",
    "@media(max-width: 767px)": {
      flexDirection: "row-reverse",
    },
  },
  iconClose: {
    width: "0.79vw",
    height: "1.59vw",
    marginRight: "1.38vw",
    "@media(min-width: 1440px)": {
      width: 11.5,
      height: 23,
      marginRight: 20,
    },
    "@media(max-width: 767px)": {
      width: "2.89vw",
      height: "2.89vw",
      marginRight: 0,
      marginLeft: "4.83vw",
    },
  },
  textClose: {
    fontWeight: 700,
    lineHeight: 1.28,

    fontSize: "1.25vw",
    "@media(min-width: 1440px)": {
      fontSize: 18,
    },
    "@media(max-width: 767px)": {
      fontSize: "4.34vw",
    },
  },
  wrapperWorkout: {
    marginTop: "4.16vw",
    "@media(min-width: 1440px)": {
      marginTop: 60,
    },
    "@media(max-width: 767px)": {
      marginTop: "9.17vw",
    },
  },
  wrapperTitleWithIcon: {
    display: "flex",

    alignItems: "center",
    marginTop: "2.77vw",
    "@media(min-width: 1440px)": {
      marginTop: 40,
    },
    "@media(max-width: 767px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      marginTop: "9.66vw",
    },

    "&:first-child": {
      marginTop: 0,
    },
  },
  imageTitleWithIcon: {
    width: "auto",
    objectFit: "contain",

    height: "4.16vw",
    marginRight: "1.11vw",
    "@media(min-width: 1440px)": {
      height: 60,
      marginRight: 16,
    },
    "@media(max-width: 767px)": {
      height: "9.66vw",
      marginRight: 0,
      marginBottom: "1.93vw",
    },
  },
  textTitleWithIcon: {
    fontWeight: 700,
    lineHeight: 1.28,

    width: "14.44vw",
    fontSize: "1.66vw",
    "@media(min-width: 1440px)": {
      width: 208,
      fontSize: 24,
    },
    "@media(max-width: 767px)": {
      width: "50.24vw",
      fontSize: "5.79vw",
    },
  },
}));

/**
 * Меню сайта
 * @module src/components/layout/menu
 */
export default function Menu() {
  const classes = useStyles();
  const state = React.useContext(GlobalStateContext);
  const dispatch = React.useContext(GlobalDispatchContext);
  const mobile = useMediaQuery("(max-width:767px)");

  const data = useStaticQuery(graphql`
    {
      prismicHeader {
        data {
          logo_sport {
            localFile {
              publicURL
            }
          }
          title_fitnes
          title_sport
          icon_fitnes {
            alt
            localFile {
              publicURL
            }
          }
          icon_sport {
            alt
            localFile {
              publicURL
            }
          }
        }
      }
    }
  `);

  const imageLogo = data.prismicHeader.data.logo_sport;
  const iconSport = data.prismicHeader.data.icon_sport;
  const iconFitnes = data.prismicHeader.data.icon_fitnes;

  function closeMenu() {
    dispatch({ type: "SET_SHOW_MENU", payload: false });
  }
  function goPage(str) {
    closeMenu();
    navigate(str);
  }

  return (
    <Modal
      open={state.showMenu}
      onClose={closeMenu}
      aria-labelledby="modal menu"
      BackdropProps={{ style: { background: "rgba(0,0,0,0.2)" } }}
    >
      <Slide
        direction={mobile ? "left" : "right"}
        in={state.showMenu}
        mountOnEnter
        unmountOnExit
      >
        <div className={classes.wrapperMenu}>
          <div className={classes.wrapperLogoAndClose}>
            {mobile ? (
              <button
                onClick={() => goPage("/")}
                aria-label="main page"
                className={classes.buttonLogo}
              >
                <img
                  src={imageLogo.localFile.publicURL}
                  alt={imageLogo.alt}
                  width={1}
                  height={1}
                  className={classes.imageLogo}
                />
              </button>
            ) : null}

            <button
              onClick={closeMenu}
              aria-label="close menu"
              className={classes.wrapperClose}
            >
              <div className={classes.iconClose}>
                {mobile ? <CrossClose /> : <ArrowClose />}
              </div>
              <Typography className={classes.textClose}>Закрыть</Typography>
            </button>
          </div>

          <div className={classes.wrapperWorkout}>
            <div className={classes.wrapperTitleWithIcon}>
              <img
                src={iconSport.localFile.publicURL}
                alt={iconSport.alt}
                width={1}
                height={1}
                className={classes.imageTitleWithIcon}
              />

              <Typography className={classes.textTitleWithIcon}>
                {data.prismicHeader.data.title_sport}
              </Typography>
            </div>

            <div className={classes.wrapperTitleWithIcon}>
              <img
                src={iconFitnes.localFile.publicURL}
                alt={iconFitnes.alt}
                width={1}
                height={1}
                className={classes.imageTitleWithIcon}
              />

              <Typography className={classes.textTitleWithIcon}>
                {data.prismicHeader.data.title_fitnes}
              </Typography>
            </div>
          </div>
        </div>
      </Slide>
    </Modal>
  );
}
