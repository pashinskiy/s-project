import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import WavesSVG from "./wavesSVG";
import palette from "../../../../templates/colors.json";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginRight: "5.9vw",
    "@media(min-width: 1440px)": {
      marginRight: "85px",
    },
    "@media(max-width: 767px)": {
      marginRight: 0,
      marginBottom: "12.07vw",
    },
  },

  waveSVG: {
    overflow: "hidden",
    WebkitBackfaceVisibility: "hidden",
    MozBackfaceVisibility: "hidden",
    WebkitTransform: "translate3d(0, 0, 0)",
    MozTransform: "translate3d(0, 0, 0)",
    borderRadius: "1000px", 
    width: "4.3vw", //62px на 1440 view px
    marginBottom: "1.73vw",
    "@media(min-width: 1440px)": {
      width: "62px",
      marginBottom: "25px",
    },
    "@media(max-width: 767px)": {
      width: "14.97vw",
      marginBottom: "4.83vw",
    },
  },

  headerText: {
    fontFamily: "'Exo 2'",
    fontWeight: 700,
    lineHeight: "112.7%",
    fontSize: "2.5vw",
    marginBottom: "1.73vw",
    "@media(min-width: 1440px)": {
      fontSize: 36,
      marginBottom: "25px",
    },
    "@media(max-width: 767px)": {
      fontSize: "5.79vw",
      marginBottom: "6.03vw",
    },
  },

  descriptionText: {
    color: theme.palette.color.lightBlue,
    fontSize: "1.25vw",
    "@media(min-width: 1440px)": {
      fontSize: 18,
    },
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
    },
  },
}));

/**
 * Один блок компонента серой панели
 * @module src/components/constructor/grayPanelWithBlocks/HeaderSingleBlock
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.headerBlock - один объект данных из призмика
 */
export default function HeaderSingleBlock({ headerBlock }) {
  const classes = useStyle();
  const colorWave = palette[headerBlock.svg_color];
  return (
    <div className={classes.root}>
      <div className={classes.waveSVG}>
        <WavesSVG color={colorWave} />
      </div>
      <Typography className={classes.headerText}>
        {headerBlock.header_text.text}
      </Typography>

      <Typography className={classes.descriptionText}>
        {headerBlock.description_text.text}
      </Typography>
    </div>
  );
}
