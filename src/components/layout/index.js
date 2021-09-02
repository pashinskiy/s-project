import * as React from "react";
import { makeStyles } from "@material-ui/core";
import Header from "./header";
import Footer from "./footer";

const useStyles = makeStyles((theme) => ({}));

/**
 * Общий макет страниц сайта
 * @module src/components/layout
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.children - дочерние элементы
 */
export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <>
      <Header />
      <main className={classes.root}>{children}</main>
      <Footer />
    </>
  );
}
