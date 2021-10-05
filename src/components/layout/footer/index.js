import * as React from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";
import { makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import { YMaps, Map, Placemark } from "react-yandex-maps";

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../../context/GlobalContextProvider";

import BurgerMenu from "../../../images/svg/burger_menu.svg";
import Geo from "../../../images/svg/geo.svg";
import ArrowMarker from "../../../images/svg/arrow_marker.svg";
import ArrowRight from "../../../images/svg/arrow_right.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.palette.background.blue,
    "& *": { color: theme.palette.color.white },
  },
  whiteRoundedBlock: {
    position: "relative",
    background: theme.palette.background.main,

    height: "11.11vw",
    borderRadius: "0 0 2.43vw 2.43vw",
    marginBottom: "13.4vw",
    "@media(min-width: 1440px)": {
      height: "160px",
      borderRadius: "0 0 35px 35px",
      marginBottom: "193px",
    },
    "@media(max-width: 767px)": {
      height: "7.24vw",
      borderRadius: "0 0 6.03vw 6.03vw",
      marginBottom: "16.9vw",
    },
  },
  fill: {
    background: "inherit",
    width: "100%",
    height: "2px",
    position: "absolute",
    top: "-1px",
  },
  cloneHeader: {
    "& *": { color: theme.palette.color.main },
    background: "inherit",

    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%)",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "67.5vw",
    height: "10.13vw",
    padding: "0.9vw 1.73vw",
    boxShadow: "0 0 1.04vw rgba(0, 0, 0, 0.08)",
    borderRadius: "1.73vw",
    "@media(min-width: 1440px)": {
      width: 972,
      height: 146,
      padding: "13px 25px",
      boxShadow: "0 0 15px rgba(0, 0, 0, 0.08)",
      borderRadius: 25,
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
  },
  menuTitle: {
    fontWeight: 600,
    lineHeight: 1.28,
    textTransform: "lowercase",

    fontSize: "1.25vw",
    "@media(min-width: 1440px)": {
      fontSize: 18,
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
    textTransform: "lowercase",

    fontSize: "1.25vw",
    "@media(min-width: 1440px)": {
      fontSize: "18px",
    },
  },

  content: {
    margin: "auto",
    width: "100%",
    maxWidth: 1440,
  },

  map: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    padding: "3.47vw",
    "@media(min-width: 1440px)": {
      padding: 50,
    },
    "@media(max-width: 767px)": {
      padding: 0,
    },
  },
  address: {
    display: "flex",
    alignItems: "center",
    margin: "0 auto",
    background: theme.palette.background.orange,

    borderRadius: "1.73vw 1.73vw 0 0",
    padding: "1.38vw 2.77vw 1.38vw 4.16vw",
    "@media(min-width: 1440px)": {
      borderRadius: "25px 25px 0 0",
      padding: "20px 40px 20px 65px",
    },
    "@media(max-width: 767px)": {
      width: "100%",
      padding: "2.89vw 4.34vw",
      borderRadius: 0,
    },
  },
  address_icon: {
    display: "flex",

    width: "3.05vw",
    height: "3.61vw",
    marginRight: "1.45vw",
    "@media(min-width: 1440px)": {
      width: 44,
      height: 52,
      marginRight: 21,
    },
    "@media(max-width: 767px)": {
      width: "10.62vw",
      height: "12.56vw",
      marginRight: "3.62vw",
    },
  },
  address_textBold: {
    fontWeight: 700,
    lineHeight: 1.28,

    fontSize: "1.25vw",
    marginBottom: "0.34vw",
    "@media(min-width: 1440px)": {
      fontSize: 18,
      marginBottom: 5,
    },
    "@media(max-width: 767px)": {
      marginBottom: "1.2vw",
      fontSize: "4.34vw",
    },
  },
  address_textNormal: {
    fontWeight: 400,
    lineHeight: 1.28,

    display: "inline-block",
    marginRight: "2.08vw",
    fontSize: "1.25vw",
    "@media(min-width: 1440px)": {
      marginRight: 30,
      fontSize: 18,
    },
    "@media(max-width: 767px)": {
      marginRight: 0,
      marginBottom: "1.2vw",
      fontSize: "4.34vw",

      width: "100%",
      textAlign: "center",
    },

    "&:last-child": {
      marginRight: 0,
      marginBottom: 0,
    },
  },
  yandexMap_wraper: {
    width: "100%",
    overflow: "hidden",

    height: "34.09vw",
    borderRadius: "2.43vw",
    "@media(min-width: 1440px)": {
      height: 491,
      borderRadius: 35,
    },
    "@media(max-width: 767px)": {
      height: "65.21vw",
      borderRadius: 0,
    },
  },

  footerMenu: {
    display: "flex",
    justifyContent: "space-between",

    padding: "5.55vw 8.33vw",
    "@media(min-width: 1440px)": {
      padding: "80px 120px",
    },
    "@media(max-width: 767px)": {
      flexDirection: "column",
      justifyContent: "flex-start",
      padding: "14.49vw 4.83vw",

      "& > *:nth-child(n+2)": {
        marginTop: "14.49vw",
      },
    },
  },
  titleWithIcon_wrapper: {
    display: "flex",

    alignItems: "center",
    "@media(max-width: 767px)": {
      flexDirection: "column",
      alignItems: "flex-start",
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

    maxWidth: "14.44vw",
    fontSize: "1.66vw",
    "@media(min-width: 1440px)": {
      maxWidth: 208,
      fontSize: 24,
    },
    "@media(max-width: 767px)": {
      maxWidth: "50.24vw",
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
  separateLinks_button: {
    display: "block",

    marginTop: "1.38vw",
    "@media(min-width: 1440px)": {
      marginTop: 20,
    },
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
    "@media(min-width: 1440px)": {
      fontSize: 24,
    },
    "@media(max-width: 767px)": {
      fontSize: "5.79vw",
    },
  },
  documentsAndContacts: {
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",

    display: "flex",
    padding: "0 8.33vw",
    "@media(min-width: 1440px)": {
      padding: "0 120px",
    },
    "@media(max-width: 767px)": {
      display: "block",
      padding: "0 4.83vw",
    },

    "& > *": {
      flexShrink: 0,
    },
  },
  documentsAndContacts_divider: {
    width: "100%",
    background: theme.palette.color.white,

    height: "0.13vw",
    marginBottom: "0.55vw",
    "@media(min-width: 1440px)": {
      height: 2,
      marginBottom: 8,
    },
    "@media(max-width: 767px)": {
      height: "0.48vw",
      marginBottom: "1.93vw",
    },
  },
  documents_wrapper: {
    width: "65.25%",
    marginLeft: "-5.55vw",
    "@media(min-width: 1440px)": {
      marginLeft: -80,
    },
    "@media(max-width: 767px)": {
      width: "100%",
      marginTop: "-2.89vw",
      marginLeft: "-9.66vw",
    },
  },
  documents_link: {
    display: "inline-block",
    fontWeight: 400,
    lineHeight: 1.28,

    marginBottom: "0.34vw",
    marginLeft: "5.55vw",
    fontSize: "1.25vw",
    "@media(min-width: 1440px)": {
      marginBottom: 5,
      marginLeft: 80,
      fontSize: 18,
    },
    "@media(max-width: 767px)": {
      marginTop: "2.89vw",
      marginBottom: 0,
      marginLeft: "9.66vw",
      fontSize: "4.34vw",
    },
  },
  contacts_wrapper: {
    width: "33.08%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "@media(max-width: 767px)": {
      width: "100%",
      justifyContent: "flex-start",
      marginTop: "4.83vw",
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

    width: "1.66vw",
    height: "1.66vw",
    marginRight: "1.18vw",
    "@media(min-width: 1440px)": {
      width: 24,
      height: 24,
      marginRight: 17,
    },
    "@media(max-width: 767px)": {
      width: "5.79vw",
      height: "5.79vw",
      marginRight: "4.1vw",
    },
  },
  buttonPhone_text: {
    fontWeight: 400,
    lineHeight: 1.28,

    fontSize: "1.66vw",
    "@media(min-width: 1440px)": {
      fontSize: 24,
    },
    "@media(max-width: 767px)": {
      fontSize: "5.79vw",
    },
  },
  socialNetworks_wrapper: {
    display: "flex",
  },
  buttonSocialNetwork: {
    display: "flex",

    marginRight: "0.83vw",
    "@media(min-width: 1440px)": {
      marginRight: 12,
    },
    "@media(max-width: 767px)": {
      marginRight: "2.89vw",
    },

    "&:last-child": {
      marginRight: 0,
    },
  },
  buttonSocialNetwork_icon: {
    objectFit: "contain",

    width: "1.66vw",
    height: "1.66vw",
    "@media(min-width: 1440px)": {
      width: 24,
      height: 24,
    },
    "@media(max-width: 767px)": {
      width: "5.79vw",
      height: "5.79vw",
    },
  },
  orangeRoundedBlock: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 auto",
    background: theme.palette.background.orange,

    width: "68.26vw",
    height: "13.12vw",
    borderRadius: "1.73vw 1.73vw 0 0",
    marginTop: "5.55vw",
    padding: "3.26vw",
    "@media(min-width: 1440px)": {
      width: 983,
      height: 189,
      borderRadius: "25px 25px 0 0",
      marginTop: 80,
      padding: 47,
    },
    "@media(max-width: 767px)": {
      width: "85.74vw",
      height: "23.18vw",
      borderRadius: "6.03vw 6.03vw 0 0",
      marginTop: "16.18vw",
      padding: "3.86vw 8.29vw",
    },
  },
  orangeRoundedBlock_title: {
    fontWeight: 300,
    lineHeight: 1.28,

    fontSize: "1.25vw",
    "@media(min-width: 1440px)": {
      fontSize: 18,
    },
    "@media(max-width: 767px)": {
      fontSize: "4.34vw",
    },
  },
  orangeRoundedBlock_variant: {
    fontFamily: "'Exo 2'",
    fontWeight: 700,
    lineHeight: 1.12,

    fontSize: "4.44vw",
    "@media(min-width: 1440px)": {
      fontSize: 64,
    },
    "@media(max-width: 767px)": {
      fontSize: "8.69vw",
    },
  },
  orangeRoundedBlock_icon: {
    display: "flex",

    width: "1.8vw",
    height: "3.77vw",
    "@media(min-width: 1440px)": {
      width: 26,
      height: 54.5,
    },
    "@media(max-width: 767px)": {
      width: "6.28vw",
      height: "13.16vw",
    },
  },
}));

/**
 * Подвал сайта
 * @module src/components/footer
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.data - объект ответа graphql
 */
export default function Footer({ data }) {
  const classes = useStyles();
  const state = React.useContext(GlobalStateContext);
  const dispatch = React.useContext(GlobalDispatchContext);
  const mobile = useMediaQuery("(max-width:767px)");

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
          address
          metro
          bus
          coordinate_x
          coordinate_y
        }
      }
    }
  `);

  const coordinate = [
    prismicContact.data.coordinate_x,
    prismicContact.data.coordinate_y,
  ];

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
  function toogleVersionSite() {
    state.versionSite === "sport" ? goFitnesVersion() : goSportVersion();
  }

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

  function goLink(str, options) {
    if (!(str ?? false)) return;

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
    <footer className={classes.footer}>
      <div className={classes.whiteRoundedBlock}>
        <div className={classes.fill} />

        {mobile ? null : (
          <div className={classes.cloneHeader}>
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
                alt={image.alt ?? "photo"}
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
          </div>
        )}
      </div>

      <div className={classes.content}>
        <div className={classes.map}>
          <div className={classes.address}>
            <div className={classes.address_icon}>
              <Geo />
            </div>

            <div>
              <Typography className={classes.address_textBold}>
                {prismicContact.data.address}
              </Typography>

              <Typography className={classes.address_textNormal}>
                {`Метро: “${prismicContact.data.metro}”`}
              </Typography>
              <Typography className={classes.address_textNormal}>
                {`Автобус: “${prismicContact.data.bus}”`}
              </Typography>
            </div>
          </div>

          <div className={classes.yandexMap_wraper}>
            <YMaps>
              <Map
                defaultState={{
                  center: coordinate,
                  zoom: 15,
                  controls: ["zoomControl", "fullscreenControl"],
                  behaviors: ["drag", "dblClickZoom", "multiTouch"],
                }}
                modules={["control.ZoomControl", "control.FullscreenControl"]}
                width={"100%"}
                height={"100%"}
                options={{
                  suppressMapOpenBlock: true,
                }}
              >
                <Placemark
                  modules={["geoObject.addon.balloon"]}
                  defaultGeometry={coordinate}
                  options={{
                    iconLayout: "default#image",
                    iconImageHref: "/svg/logo_on_map.svg",
                    iconImageSize: [66, 66],
                    iconImageOffset: [-33, -33],
                  }}
                />
              </Map>
            </YMaps>
          </div>
        </div>

        <div className={classes.footerMenu}>
          <div>
            <div className={classes.titleWithIcon_wrapper}>
              <img
                src={iconSport.localFile.publicURL}
                alt={iconSport.alt ?? "photo"}
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
                    onClick={() => navigate(link)}
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

          <div>
            <div className={classes.titleWithIcon_wrapper}>
              <img
                src={iconFitnes.localFile.publicURL}
                alt={iconFitnes.alt ?? "photo"}
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
                    onClick={() => navigate(link)}
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
                onClick={() => navigate(item.link)}
                aria-label={item.title}
                key={item.title}
                className={classes.separateLinks_button}
              >
                <Typography className={classes.separateLinks_text}>
                  {item.title}
                </Typography>
              </button>
            ))}
          </div>
        </div>

        <div className={classes.documentsAndContacts}>
          <div className={classes.documentsAndContacts_divider} />

          <div className={classes.documents_wrapper}>
            {data.prismicLayout.data.documents.map((item) => {
              const url = item.document?.url;
              return (
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  key={item.name}
                  className={classes.documents_link}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          <div className={classes.contacts_wrapper}>
            <button
              onClick={() => goLink(`tel:${prismicContact.data.phone_number}`)}
              className={classes.buttonPhone}
            >
              <img
                src={prismicContact.data.phone_icon?.localFile?.publicURL}
                alt={prismicContact.data.phone_icon?.alt ?? "photo"}
                width={1}
                height={1}
                className={classes.buttonPhone_icon}
              />

              <Typography className={classes.buttonPhone_text}>
                {prismicContact.data.phone_number}
              </Typography>
            </button>

            <div className={classes.socialNetworks_wrapper}>
              {prismicContact.data.social_networks.map((network, i) => {
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
                    aria-label={iconAlt ?? "social"}
                    key={`social_${i}`}
                    className={classes.buttonSocialNetwork}
                  >
                    <img
                      src={iconPath}
                      alt={iconAlt ?? "photo"}
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

        <button
          onClick={toogleVersionSite}
          className={classes.orangeRoundedBlock}
        >
          <div>
            <Typography
              align="left"
              className={classes.orangeRoundedBlock_title}
            >
              Перейти
            </Typography>

            <Typography className={classes.orangeRoundedBlock_variant}>
              {state.versionSite === "sport" ? "Фитнес клуб" : "Спорт клуб"}
            </Typography>
          </div>

          <div className={classes.orangeRoundedBlock_icon}>
            <ArrowRight />
          </div>
        </button>
      </div>
    </footer>
  );
}
