import React from "react";
import { makeStyles } from "@material-ui/core";
import { GatsbyImage } from "gatsby-plugin-image";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",

    height: "50vw",
    padding: "0 3.47vw",
    "@media(max-width: 767px)": {
      height: "89.37vw",
      padding: "0 2.41vw",
    },
  },
  image: {
    width: "100%",
    height: "100%",

    overflow: "hidden",
    WebkitBackfaceVisibility: "hidden",
    MozBackfaceVisibility: "hidden",
    WebkitTransform: "translate3d(0, 0, 0)",
    MozTransform: "translate3d(0, 0, 0)",

    borderRadius: "2.08vw",
    "@media(max-width: 767px)": {
      borderRadius: "7.24vw",
    },
  },
}));

/**
 * Карточка большого слайдера
 * @module src/components/constructor/bigSlider/card
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.card - объект карточки полученный из prismic
 */
export default function Card({ card }) {
  const classes = useStyles();

  const image = card.photo;

  return image?.localFile ?? false ? (
    <div className={classes.wrapper}>
      <GatsbyImage
        image={image.localFile.childImageSharp?.gatsbyImageData}
        alt={image.alt ?? "photo"}
        className={classes.image}
        imgStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  ) : null;
}
