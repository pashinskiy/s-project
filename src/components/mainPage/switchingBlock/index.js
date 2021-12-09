import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { makeStyles, Typography } from "@material-ui/core";
import { GatsbyImage } from "gatsby-plugin-image";

import { GlobalStateContext } from "../../../context/GlobalContextProvider";

import ToggleButtons from "./toggleButtons";
import SlidingBlock from "./slidingBlock";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    overflowX: "hidden",

    marginTop: "8.33vw",
    "@media(min-width: 1440px)": {
      marginTop: "120px",
    },
    "@media(max-width: 767px)": {
      marginTop: "14.49vw",
    },
  },
  content: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    height: "43.95vw",
    padding: "7.98vw",
    "@media(min-width: 1440px)": {
      height: "633px",
      padding: "115px",
    },
    "@media(max-width: 767px)": {
      height: "124.39vw",
      padding: "12.07vw",
    },
  },
  content_fon: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  shadow: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    background:
      "linear-gradient(0deg, rgba(37, 40, 49, 0.35), rgba(37, 40, 49, 0.35))",
  },
  content_title: {
    fontFamily: "'Exo 2'",
    fontWeight: 700,
    lineHeight: 1.2,
    color: theme.palette.color.white,

    fontSize: "4.44vw",
    "@media(min-width: 1440px)": {
      fontSize: 64,
    },
    "@media(max-width: 767px)": {
      fontSize: "8.69vw",
    },
  },
}));

/**
 * Переключатель версий сайта
 * @module src/components/mainPage/switchingBlock
 */
export default function SwitchingBlock() {
  const classes = useStyles();

  const state = React.useContext(GlobalStateContext);

  const data = useStaticQuery(graphql`
    {
      prismicMainPage {
        data {
          main_title_sport
          image_sport {
            alt
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1440)
              }
            }
          }
          title_sport
          text_sport {
            text
            html
          }
          quote_sport
          author_quote_sport
          main_title_fitnes
          image_fitnes {
            alt
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1440)
              }
            }
          }
          title_fitnes
          text_fitnes {
            text
            html
          }
          quote_fitnes
          author_quote_fitnes
        }
      }
    }
  `);

  const image =
    state.versionSite === "fitnes"
      ? data.prismicMainPage.data.image_fitnes
      : data.prismicMainPage.data.image_sport;

  const title =
    state.versionSite === "fitnes"
      ? data.prismicMainPage.data.main_title_fitnes
      : data.prismicMainPage.data.main_title_sport;

  return (
    <div id="switch_block" className={classes.wrapper}>
      <ToggleButtons />

      <div className={classes.content}>
        <GatsbyImage
          image={image.localFile.childImageSharp?.gatsbyImageData}
          alt={image.alt ?? "fon"}
          className={classes.content_fon}
          imgStyle={{ width: "100%", height: "100%", ojectFit: "cover" }}
        />

        <div className={classes.shadow} />

        <Typography align="center" className={classes.content_title}>
          {title}
        </Typography>

        {state.versionSite === "sport" ? (
          <SlidingBlock
            variant="left"
            title={data.prismicMainPage.data.title_sport}
            text={data.prismicMainPage.data.text_sport.html}
            quote={data.prismicMainPage.data.quote_sport}
            authorQuote={data.prismicMainPage.data.author_quote_sport}
          />
        ) : null}

        {state.versionSite === "fitnes" ? (
          <SlidingBlock
            variant="right"
            title={data.prismicMainPage.data.title_fitnes}
            text={data.prismicMainPage.data.text_fitnes.html}
            quote={data.prismicMainPage.data.quote_fitnes}
            authorQuote={data.prismicMainPage.data.author_quote_fitnes}
          />
        ) : null}
      </div>
    </div>
  );
}
