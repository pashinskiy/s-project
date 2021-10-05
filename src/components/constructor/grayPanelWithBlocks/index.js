import React from "react";
import { makeStyles } from "@material-ui/core";
import HeaderSingleBlock from "./headerSingleBlock";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "nowrap",
    backgroundColor: "#F3F6FF",
    padding: "3.47vw",
    marginBottom: "8.33vw",
    "@media(min-width: 1440px)": {
      padding: "50px",
      marginBottom: "120px",
    },
    "@media(max-width: 767px)": {
      justifyContent: "unset",
      alignItems: "unset",
      flexDirection: "column",
      padding: "7.24vw 6.03vw 7.24vw 6.03vw",
      marginBottom: "14.49vw",
    },
    "& :last-child": {
      margin: 0,
    },
  },
}));

/**
 * Блок конструктора "серая панель с блоками"
 * @module src/components/constructor/grayPanelWithBlocks
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.slice - объект слайса полученный из prismic
 */

export default function GrayPanelWithBlocks({ slice }) {
  const classes = useStyle();
  const blocks = slice.items.map((item) => item);
  return (
    <div className={classes.root}>
      {blocks.map((block, i) => (
        <HeaderSingleBlock key={"child-" + i} headerBlock={block} />
      ))}
    </div>
  );
}
