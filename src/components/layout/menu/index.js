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
  menu_wrapper: {
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
  logoAndClose_wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo_button: {
    height: "16.9vw",
  },
  logo_Image: {
    width: "auto",
    height: "100%",
    objectFit: "contain",
  },
  close_wrapper: {
    display: "flex",
    alignItems: "center",
    "@media(max-width: 767px)": {
      flexDirection: "row-reverse",
    },
  },
  close_icon: {
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
  close_text: {
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
  workout_wrapper: {
    marginTop: "4.16vw",
    "@media(min-width: 1440px)": {
      marginTop: 60,
    },
    "@media(max-width: 767px)": {
      marginTop: "9.17vw",
    },
  },
  titleWithIcon_wrapper: {
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
  titleWithIcon_icon: {
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
  titleWithIcon_text: {
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
  listLinks_wrapper: {
    marginTop: "1.38vw",
    "@media(min-width: 1440px)": {
      marginTop: 20,
    },
    "@media(max-width: 767px)": {
      marginTop: "4.83vw",
    },
  },
  listLinks_button: {
    display: "flex",
    alignItems: "center",

    marginTop: "0.55vw",
    "@media(min-width: 1440px)": {
      marginTop: 8,
    },
    "@media(max-width: 767px)": {
      marginTop: "1.93vw",
    },

    "&:first-child": {
      marginTop: 0,
    },
  },
  listLinks_marker: {
    display: "flex",

    width: "0.52vw",
    height: "0.93vw",
    marginRight: "0.55vw",
    "@media(min-width: 1440px)": {
      width: 7.5,
      height: 13.5,
      marginRight: 8,
    },
    "@media(max-width: 767px)": {
      width: "1.81vw",
      height: "3.26vw",
      marginRight: "1.93vw",
    },
  },
  listLinks_text: {
    fontWeight: 400,
    lineHeight: 1.28,

    fontSize: "1.25vw",
    "@media(min-width: 1440px)": {
      fontSize: 18,
    },
    "@media(max-width: 767px)": {
      fontSize: "4.34vw",
    },
  },
  separateLinks_wrapper: {
    marginTop: "5.76vw",
    borderTop: `0.13vw solid ${theme.palette.color.white}`,
    "@media(min-width: 1440px)": {
      marginTop: 83,
      borderWidth: "2px",
    },
    "@media(max-width: 767px)": {
      marginTop: "9.17vw",
      borderWidth: "0.48vw",
    },
  },
  separateLinks_button: {
    width: "100%",
    textAlign: "left",

    marginTop: "1.38vw",
    paddingBottom: "1.38vw",
    borderBottom: `0.13vw solid ${theme.palette.color.white}`,
    "@media(min-width: 1440px)": {
      marginTop: 20,
      paddingBottom: 20,
      borderWidth: "2px",
    },
    "@media(max-width: 767px)": {
      marginTop: "4.83vw",
      paddingBottom: "4.83vw",
      borderWidth: "0.48vw",
    },
  },
  separateLinks_text: {
    fontWeight: 700,
    lineHeight: 1.28,

    fontSize: "1.66vw",
    "@media(min-width: 1440px)": {
      fontSize: 24,
    },
    "@media(max-width: 767px)": {
      fontSize: "5.79vw",
    },
  },
}));

/**
 * Меню сайта
 * @module src/components/layout/menu
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.data - объект ответа graphql
 */
export default function Menu({ data }) {
  const classes = useStyles();
  const state = React.useContext(GlobalStateContext);
  const dispatch = React.useContext(GlobalDispatchContext);
  const mobile = useMediaQuery("(max-width:767px)");

  const imageLogo = data.prismicLayout.data.logo_sport;
  const iconSport = data.prismicLayout.data.icon_sport;
  const iconFitnes = data.prismicLayout.data.icon_fitnes;

  const separateLinks = [
    {
      title: "Расписание тренировок",
      link: "/chedule",
    },
    {
      title: "Новости",
      link: "/news",
    },
  ];

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
        <div className={classes.menu_wrapper}>
          <div className={classes.logoAndClose_wrapper}>
            {mobile ? (
              <button
                onClick={() => goPage("/")}
                aria-label="main page"
                className={classes.logo_button}
              >
                <img
                  src={imageLogo.localFile.publicURL}
                  alt={imageLogo.alt}
                  width={1}
                  height={1}
                  className={classes.logo_Image}
                />
              </button>
            ) : null}

            <button
              onClick={closeMenu}
              aria-label="close menu"
              className={classes.close_wrapper}
            >
              <div className={classes.close_icon}>
                {mobile ? <CrossClose /> : <ArrowClose />}
              </div>

              <Typography className={classes.close_text}>Закрыть</Typography>
            </button>
          </div>

          <div className={classes.workout_wrapper}>
            <div className={classes.titleWithIcon_wrapper}>
              <img
                src={iconSport.localFile.publicURL}
                alt={iconSport.alt}
                width={1}
                height={1}
                className={classes.titleWithIcon_icon}
              />

              <Typography className={classes.titleWithIcon_text}>
                {data.prismicLayout.data.title_sport}
              </Typography>
            </div>

            <div className={classes.listLinks_wrapper}>
              {data.prismicLayout.data.teams.map((team) => {
                const title =
                  team.text_link ?? team.page_team?.document?.data.title;
                const link = `/${team.page_team?.document?.uid}`;

                return title ? (
                  <button
                    onClick={() => goPage(link)}
                    aria-label={title}
                    className={classes.listLinks_button}
                  >
                    <div className={classes.listLinks_marker}>
                      <ArrowMarker />
                    </div>

                    <Typography className={classes.listLinks_text}>
                      {title}
                    </Typography>
                  </button>
                ) : null;
              })}
            </div>

            <div className={classes.titleWithIcon_wrapper}>
              <img
                src={iconFitnes.localFile.publicURL}
                alt={iconFitnes.alt}
                width={1}
                height={1}
                className={classes.titleWithIcon_icon}
              />

              <Typography className={classes.titleWithIcon_text}>
                {data.prismicLayout.data.title_fitnes}
              </Typography>
            </div>

            <div className={classes.listLinks_wrapper}>
              {data.prismicLayout.data.workouts.map((workout) => {
                const title =
                  workout.text_link ??
                  workout.page_workout?.document?.data.title;
                const link = `/${workout.page_workout?.document?.uid}`;

                return title ? (
                  <button
                    onClick={() => goPage(link)}
                    aria-label={title}
                    className={classes.listLinks_button}
                  >
                    <div className={classes.listLinks_marker}>
                      <ArrowMarker />
                    </div>

                    <Typography className={classes.listLinks_text}>
                      {title}
                    </Typography>
                  </button>
                ) : null;
              })}
            </div>
          </div>

          <div className={classes.separateLinks_wrapper}>
            {separateLinks.map((item) => (
              <button
                onClick={() => goPage(item.link)}
                aria-label={item.title}
                className={classes.separateLinks_button}
              >
                <Typography className={classes.separateLinks_text}>
                  {item.title}
                </Typography>
              </button>
            ))}
          </div>
        </div>
      </Slide>
    </Modal>
  );
}
