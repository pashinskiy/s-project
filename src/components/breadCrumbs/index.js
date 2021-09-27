import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { Link } from "gatsby";
import Icon from "../../images/svg/bread_crumbs.svg";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",

    marginTop: "1.94vw",
    marginLeft: "3.47vw",
    "@media(max-width: 767px)": {
      marginTop: "6.03vw",
      marginLeft: "6.03vw",
    },
  },
  link: {
    textDecoration: "none",
  },
  text: {
    fontWeight: 700,
    lineHeight: 1.28,

    marginRight: "0.69vw",
    fontSize: "1.25vw",
    "@media(max-width: 767px)": {
      marginRight: "2.41vw",
      fontSize: "4.34vw",
    },
  },
  icon: {
    marginRight: "0.69vw",
    width: "0.37vw",
    height: "0.83vw",
    "@media(max-width: 767px)": {
      marginRight: "2.41vw",
      width: "1.31vw",
      height: "2.89vw",
    },
  },
}));

/**
 * Хлебные крошки
 * @module src/components/breadCrumbs
 * @param {Object} props - объект свойств компонента React
 * @param {Object[]} props.links - массив объектов ссылок
 * @param {Object} props.links[].title - текст ссылки
 * @param {Object} props.links[].href - путь относительно домена
 */
export default function BreadCrumbs({ links }) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Link to="/" className={classes.link}>
        <Typography className={classes.text}>Главная</Typography>
      </Link>

      {links.map((link, i) => (
        <React.Fragment key={link.title}>
          <Icon className={classes.icon} />
          <Link to={link.href} className={classes.link}>
            <Typography
              className={classes.text}
              style={{ fontWeight: i === links.length - 1 ? 400 : 700 }}
            >
              {link.title}
            </Typography>
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
}
