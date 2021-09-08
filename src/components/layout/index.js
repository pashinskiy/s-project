import * as React from "react";
import { makeStyles } from "@material-ui/core";
import Header from "./header";
import Footer from "./footer";
import Menu from "./menu";

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    width: "100%",
    maxWidth: 1440,
    minHeight: "100vh",
    height: 2000,
  },
}));

/**
 * Общий макет страниц сайта
 * @module src/components/layout
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.children - дочерние элементы
 */
export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.mainWrapper}>
      <Header />
      <main className={classes.root}>{children}</main>
      <Footer />
      <Menu />
    </div>
  );
}
