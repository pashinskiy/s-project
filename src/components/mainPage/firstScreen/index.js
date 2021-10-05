import React from "react";
import { navigate } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import { makeStyles, Typography } from "@material-ui/core";

import Slider from "./slider";
import CardSlider from "./cardSlider";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
  },
  textBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    marginTop: "1.94vw",
    padding: "0 6.25vw",
    "@media(min-width: 1440px)": {
      marginTop: 28,
      padding: "0 90px",
    },
    "@media(max-width: 767px)": {
      marginTop: "4.83vw",
      padding: "0 8.45vw",
    },
  },
  subtitle: {
    background: theme.palette.background.blue,

    padding: "0.69vw",
    "@media(min-width: 1440px)": {
      padding: 10,
    },
    "@media(max-width: 767px)": {
      width: "70.53vw",
      padding: "1.2vw",
    },
  },
  subtitle_text: {
    fontWeight: 700,
    lineHeight: 1.28,
    color: theme.palette.color.white,
    textAlign: "center",

    fontSize: "1.66vw",
    "@media(min-width: 1440px)": {
      fontSize: 24,
    },
    "@media(max-width: 767px)": {
      fontSize: "2.89vw",
    },
  },
  title_text: {
    fontFamily: "'Exo 2'",
    fontWeight: 900,
    lineHeight: 1.2,
    textTransform: "uppercase",

    fontSize: "9.72vw",
    "@media(min-width: 1440px)": {
      fontSize: 140,
    },
    "@media(max-width: 767px)": {
      marginTop: "2.41vw",
      fontSize: "9.42vw",
    },
  },
  title: {
    width: "100%",
    height: "auto",
    objectFit: "contain",

    marginTop: "1.38vw",
    "@media(min-width: 1440px)": {
      marginTop: 20,
    },
    "@media(max-width: 767px)": {
      marginTop: "2.41vw",
    },
  },
  slider: {
    "@media(max-width: 767px)": {
      order: -1,
    },
  },
  button: {
    background: theme.palette.background.orange,
    alignSelf: "center",
    borderRadius: "100px",

    marginTop: "1.38vw",
    padding: "1.04vw 4.86vw",
    "@media(min-width: 1440px)": {
      marginTop: 20,
      padding: "15px 70px",
    },
    "@media(max-width: 767px)": {
      marginTop: "4.83vw",
      padding: "2.41vw 10.86vw",
    },
  },
  button_text: {
    fontWeight: 700,
    lineHeight: 1.28,
    color: theme.palette.color.white,

    fontSize: "1.66vw",
    "@media(min-width: 1440px)": {
      fontSize: 24,
    },
    "@media(max-width: 767px)": {
      fontSize: "3.86vw",
    },
  },
}));

/**
 * Компонент первого экрана (слайдер с заголовком)
 * @module src/components/mainPage/firstScreen
 */
export default function FirstScreen() {
  const classes = useStyles();

  const { prismicMainPage, allPrismicNewsPage } = useStaticQuery(graphql`
    {
      prismicMainPage {
        data {
          subtitle
          title
          button_text
          button_link
        }
      }
      allPrismicNewsPage {
        nodes {
          id
          uid
          data {
            title
            text
            order
            main_image {
              alt
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 750)
                }
              }
            }
          }
        }
      }
    }
  `);

  // сортируем
  const news = allPrismicNewsPage.nodes.sort((node1, node2) => {
    const a = node1.data.order;
    const b = node2.data.order;

    if (a === b) return 0;
    if (a === null) return 1;
    if (b === null) return -1;
    return a - b;
  });

  function goLink(str) {
    if (!(str ?? false)) return;
    if (str.slice(-1) !== "/") str += "/";

    if (str.slice(0, 4) === "http") {
      const anchor = document.createElement("a");
      anchor.href = str;
      anchor.click();
    } else {
      navigate(str);
    }
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.textBlock}>
        <div className={classes.subtitle}>
          <Typography className={classes.subtitle_text}>
            {prismicMainPage.data.subtitle}
          </Typography>
        </div>

        <Typography className={classes.title_text}>
          {prismicMainPage.data.title}
        </Typography>
      </div>

      <div className={classes.slider}>
        <Slider>
          {news.map((news) => (
            <CardSlider
              image={news.data.main_image}
              title={news.data.title}
              text={news.data.text}
              link={`/news/${news.uid}/`}
              key={news.uid}
            />
          ))}
        </Slider>
      </div>

      <button
        onClick={() => {
          goLink(prismicMainPage.data.button_link);
        }}
        className={classes.button}
        aria-label={prismicMainPage.data.button_text}
      >
        <Typography className={classes.button_text}>
          {prismicMainPage.data.button_text}
        </Typography>
      </button>
    </div>
  );
}
