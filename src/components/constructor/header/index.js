import React from "react";
import { makeStyles } from "@material-ui/core";
import BlockHeaderText from "../../blockHeaderText";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "flex-start",

    marginBottom: "-8.33vw",
    "@media(min-width: 1440px)": {
      marginBottom: "-120px",
    },
    "@media(max-width: 767px)": {
      marginBottom: "-14.49vw",
    },
  },
}));

/**
 * Блок конструктора заголовок
 * @module src/components/constructor/header
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.slice - объект слайса полученный из prismic
 */
export default function Header({ slice }) {
  const classes = useStyles();

  const title_block = slice.primary.header;

  return (
    <div className={classes.wrapper}>
      <BlockHeaderText text={title_block} />
    </div>
  );
}
