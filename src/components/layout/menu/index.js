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
  scrollContainer: {
    height: "100%",
    overflowY: "auto",

    width: "26.65vw",
    // "@media(min-width: 1440px)": {
    //   width: 427,
    // },
    "@media(max-width: 767px)": {
      width: "100%",
    },
  },
  menu_wrapper: {
    position: "relative",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    background: theme.palette.background.blue,
    minHeight: "100%",
    "& *": { color: theme.palette.color.white },

    borderRadius: "0 2.43vw 2.43vw 0",
    padding: "4.37vw 2.77vw 0",
    // "@media(min-width: 1440px)": {
    //   borderRadius: "0 35px 35px 0",
    //   padding: "63px 40px 0",
    // },
    "@media(max-width: 767px)": {
      justifyContent: "space-between",
      borderRadius: 0,
      padding: "4.83vw",
    },
  },
  logoAndClose_wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    position: "absolute",
    top: "2.77vw",
    left: "2.77vw",
    // "@media(min-width: 1440px)": {
    //   top: 40,
    //   left: 40,
    // },
    "@media(max-width: 767px)": {
      position: "static",
    },
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
    // "@media(min-width: 1440px)": {
    //   width: 11.5,
    //   height: 23,
    //   marginRight: 20,
    // },
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
    // "@media(min-width: 1440px)": {
    //   fontSize: 18,
    // },
    "@media(max-width: 767px)": {
      fontSize: "4.34vw",
    },
  },
  workout_wrapper: {
    // marginTop: "4.16vw",
    // "@media(min-width: 1440px)": {
    //   marginTop: 60,
    // },
    // "@media(max-width: 767px)": {
    //   marginTop: "9.17vw",
    // },
  },
  titleWithIcon_wrapper: {
    display: "flex",

    alignItems: "center",
    marginTop: "2.77vw",
    // "@media(min-width: 1440px)": {
    //   marginTop: 40,
    // },
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
    // "@media(min-width: 1440px)": {
    //   height: 60,
    //   marginRight: 16,
    // },
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
    // "@media(min-width: 1440px)": {
    //   width: 208,
    //   fontSize: 24,
    // },
    "@media(max-width: 767px)": {
      width: "50.24vw",
      fontSize: "5.79vw",
    },
  },
  listLinks_wrapper: {
    marginTop: "1.38vw",
    // "@media(min-width: 1440px)": {
    //   marginTop: 20,
    // },
    "@media(max-width: 767px)": {
      marginTop: "4.83vw",
    },
  },
  listLinks_button: {
    display: "flex",
    alignItems: "center",

    marginTop: "0.55vw",
    // "@media(min-width: 1440px)": {
    //   marginTop: 8,
    // },
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
    // "@media(min-width: 1440px)": {
    //   width: 7.5,
    //   height: 13.5,
    //   marginRight: 8,
    // },
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
    // "@media(min-width: 1440px)": {
    //   fontSize: 18,
    // },
    "@media(max-width: 767px)": {
      fontSize: "4.34vw",
    },
  },
  separateLinks_wrapper: {
    marginTop: "2.77vw",
    // "@media(min-width: 1440px)": {
    //   marginTop: 40,
    // },
    "@media(max-width: 767px)": {
      marginTop: "9.17vw",
    },
  },
  separateLinks_button: {
    width: "100%",
    textAlign: "left",

    marginTop: "1.38vw",
    // "@media(min-width: 1440px)": {
    //   marginTop: 20,
    // },
    "@media(max-width: 767px)": {
      marginTop: "4.83vw",
    },

    "&:first-child": {
      marginTop: 0,
    },
  },
  separateLinks_text: {
    fontWeight: 700,
    lineHeight: 1.28,

    fontSize: "1.66vw",
    // "@media(min-width: 1440px)": {
    //   fontSize: 24,
    // },
    "@media(max-width: 767px)": {
      fontSize: "5.79vw",
    },
  },
  contacts_wrapper: {
    display: "flex",
    flexDirection: "column",

    marginTop: "1.38vw",
    // "@media(min-width: 1440px)": {
    //   marginTop: 20,
    // },
    "@media(max-width: 767px)": {
      marginTop: "4.83vw",
      flexDirection: "row",
      justifyContent: "flex-start",
    },
  },
  buttonPhone: {
    display: "flex",
    alignItems: "center",

    "@media(max-width: 767px)": {
      order: 1,
      marginLeft: "2.89vw",
    },
  },
  buttonPhone_icon: {
    objectFit: "contain",

    width: "2.91vw",
    height: "2.91vw",
    marginRight: "1.18vw",
    // "@media(min-width: 1440px)": {
    //   width: 42,
    //   height: 42,
    //   marginRight: 17,
    // },
    "@media(max-width: 767px)": {
      width: "10.14vw",
      height: "10.14vw",
      marginRight: "4.1vw",
    },
  },
  buttonPhone_text: {
    fontWeight: 400,
    lineHeight: 1.28,

    fontSize: "1.66vw",
    // "@media(min-width: 1440px)": {
    //   fontSize: 24,
    // },
    "@media(max-width: 767px)": {
      fontSize: "5.79vw",
    },
  },
  socialNetworks_wrapper: {
    display: "flex",

    marginTop: "1.18vw",
    // "@media(min-width: 1440px)": {
    //   marginTop: 17,
    // },
    "@media(max-width: 767px)": {
      marginTop: 0,
    },
  },
  buttonSocialNetwork: {
    display: "flex",

    marginRight: "0.83vw",
    // "@media(min-width: 1440px)": {
    //   marginRight: 12,
    // },
    "@media(max-width: 767px)": {
      marginRight: "2.89vw",
    },

    "&:last-child": {
      marginRight: 0,
    },
  },
  buttonSocialNetwork_icon: {
    objectFit: "contain",

    width: "2.91vw",
    height: "2.91vw",
    // "@media(min-width: 1440px)": {
    //   width: 42,
    //   height: 42,
    // },
    "@media(max-width: 767px)": {
      width: "10.14vw",
      height: "10.14vw",
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

  const { prismicContact } = useStaticQuery(graphql`
    {
      prismicContact {
        data {
          phone_number
          phone_icon {
            alt
            localFile {
              publicURL
            }
          }
          social_networks {
            network_link
            network_icon {
              alt
              localFile {
                publicURL
              }
            }
          }
        }
      }
    }
  `);

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
  function goLink(str, options) {
    const anchor = document.createElement("a");
    anchor.href = str;
    if (options) {
      [...Object.keys(options)].forEach((key) => {
        anchor[key] = options[key];
      });
    }
    anchor.click();
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
        <div className={classes.scrollContainer}>
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
                {mobile ? null : (
                  <img
                    src={iconSport.localFile.publicURL}
                    alt={iconSport.alt}
                    width={1}
                    height={1}
                    className={classes.titleWithIcon_icon}
                  />
                )}

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
                      key={title}
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
                {mobile ? null : (
                  <img
                    src={iconFitnes.localFile.publicURL}
                    alt={iconFitnes.alt}
                    width={1}
                    height={1}
                    className={classes.titleWithIcon_icon}
                  />
                )}

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
                      key={title}
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
                  key={item.title}
                  className={classes.separateLinks_button}
                >
                  <Typography className={classes.separateLinks_text}>
                    {item.title}
                  </Typography>
                </button>
              ))}

              <div className={classes.contacts_wrapper}>
                <button
                  onClick={() =>
                    goLink(`tel:${prismicContact.data.phone_number}`)
                  }
                  className={classes.buttonPhone}
                >
                  <img
                    src={prismicContact.data.phone_icon?.localFile?.publicURL}
                    alt={prismicContact.data.phone_icon?.alt}
                    width={1}
                    height={1}
                    className={classes.buttonPhone_icon}
                  />

                  <Typography className={classes.buttonPhone_text}>
                    {prismicContact.data.phone_number}
                  </Typography>
                </button>

                <div className={classes.socialNetworks_wrapper}>
                  {prismicContact.data.social_networks.map((network) => {
                    const iconPath = network.network_icon?.localFile?.publicURL;
                    const iconAlt = network.network_icon?.alt ?? "social";

                    return iconPath ? (
                      <button
                        onClick={() =>
                          goLink(network.network_link, {
                            target: "_blank",
                            rel: "noreferrer",
                          })
                        }
                        className={classes.buttonSocialNetwork}
                      >
                        <img
                          src={iconPath}
                          alt={iconAlt}
                          width={1}
                          height={1}
                          className={classes.buttonSocialNetwork_icon}
                        />
                      </button>
                    ) : null;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </Modal>
  );
}
