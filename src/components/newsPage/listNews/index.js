import React from "react";
import { makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import Card from "./card";

import ArrowRight from "../../../images/svg/button_arrow.svg";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",

    marginTop: "1.94vw",
    padding: "0 3.47vw",
    "@media(min-width: 1440px)": {
      marginTop: "28px",
      padding: "0 50px",
    },
    "@media(max-width: 767px)": {
      marginTop: "6.76vw",
      padding: 0,
    },
  },
  wrapperCards: {
    display: "flex",
    width: "100%",

    justifyContent: "space-between",
    flexWrap: "wrap",
    "@media(max-width: 767px)": {
      justifyContent: "center",
    },
  },
  nav: {
    alignSelf: "flex-end",
    display: "flex",
    paddingBottom: "1px",

    marginTop: "3.47vw",
    "@media(min-width: 1440px)": {
      marginTop: "50px",
    },
    "@media(max-width: 767px)": {
      alignSelf: "center",
      marginTop: "12.07vw",
    },
  },
  nav_button: {
    display: "flex",
    alignItems: "center",
    border: `1px solid ${theme.palette.background.blue}`,
    borderRadius: "100px",

    height: "3.47vw",
    padding: "0 2.74vw",
    "@media(min-width: 1440px)": {
      height: "50px",
      padding: "0 39.5px",
    },
    "@media(max-width: 767px)": {
      height: "12.07vw",
      padding: "0 9.54vw",
    },

    "&:nth-child(2)": {
      margin: "0 0.55vw",
      "@media(min-width: 1440px)": {
        margin: "0 8px",
      },
      "@media(max-width: 767px)": {
        margin: 0,
        marginLeft: "1.93vw",
      },
    },
    "& > *:first-child": {
      marginRight: "0.69vw",
      "@media(min-width: 1440px)": {
        marginRight: "10px",
      },
      "@media(max-width: 767px)": {
        marginRight: "2.41vw",
      },
    },
  },
  mirror: {
    transform: "scaleX(-1)",
  },
  nav_button_text: {
    fontWeight: 700,
    lineHeight: 1.28,
    color: theme.palette.color.black,

    fontSize: "1.25vw",
    "@media(min-width: 1440px)": {
      fontSize: 18,
    },
    "@media(max-width: 767px)": {
      fontSize: "4.34vw",
    },
  },
  nav_button_icon: {
    width: "2.63vw",
    height: "0.97vw",
    "@media(min-width: 1440px)": {
      width: "38px",
      height: "14px",
    },
    "@media(max-width: 767px)": {
      width: "9.17vw",
      height: "3.38vw",
    },
  },
}));

/**
 * Список карточек новостей
 * @module src/components/listNews
 * @param {Object} props - объект свойств компонента React
 * @param {Object[]} props.news - массив объектов новостей полученный из prismic
 */
export default function ListNews({ news }) {
  const classes = useStyles();
  const mobile = useMediaQuery("(max-width: 767px)");

  const itemsOnPage = 6;
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const numberOfPages = Math.ceil(news.length / itemsOnPage);

  const showItems = news.slice(itemsOnPage * (page - 1), itemsOnPage * page);

  function prev() {
    if (page === 1) return;
    setPage(page - 1);
  }
  function next() {
    if (page === numberOfPages) return;
    setPage(page + 1);
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapperCards}>
        {showItems.map((news) => (
          <Card news={news} key={news.id} />
        ))}
      </div>

      <div className={classes.nav}>
        <button
          onClick={prev}
          aria-label="назад"
          className={classes.nav_button}
        >
          <p className={classes.nav_button_icon + " " + classes.mirror}>
            <ArrowRight />
          </p>

          <Typography className={classes.nav_button_text}>Назад</Typography>
        </button>

        {mobile ? null : (
          <div className={classes.nav_button}>
            <Typography
              className={classes.nav_button_text}
            >{`${page} / ${numberOfPages}`}</Typography>
          </div>
        )}

        <button
          onClick={next}
          aria-label="вперед"
          className={classes.nav_button}
        >
          <Typography className={classes.nav_button_text}>Вперед</Typography>

          <p className={classes.nav_button_icon}>
            <ArrowRight />
          </p>
        </button>
      </div>
    </div>
  );
}
