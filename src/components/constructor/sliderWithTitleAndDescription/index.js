import React from "react";
import { makeStyles } from "@material-ui/core";
import { GatsbyImage } from "gatsby-plugin-image";

import Slider from "./slider";
import BlockHeaderText from "../../blockHeaderText";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  wrapperTitle: {
    alignSelf: "flex-start",
  },
  wrapperSlider: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
}));

/**
 * Блок конструктора "слайдер с заголовком и описанием"
 * @module src/components/constructor/sliderWithTitleAndDescription
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.slice - объект слайса полученный из prismic
 */
export default function SliderWithTitleAndDescription({ slice }) {
  const classes = useStyles();

  const title_block = slice.primary.title_block;

  const [activeIndex, setActiveIndex] = React.useState(1);
  const subtitle = slice.items[activeIndex].subtitle_item;
  const title = slice.items[activeIndex].title_item;
  const text = slice.items[activeIndex].text_item;

  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapperTitle}>
        <BlockHeaderText text={title_block} />
      </div>

      <div className={classes.wrapperSlider}>
        <Slider
          afterChange={setActiveIndex}
          subtitle={subtitle}
          title={title}
          text={text}
        >
          {slice.items
            .map((item) => {
              const image = item.image_item;

              return image?.localFile ?? false ? (
                <GatsbyImage
                  image={image.localFile.childImageSharp?.gatsbyImageData}
                  alt={image.alt}
                  className={classes.image}
                  imgStyle={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : null;
            })
            .filter((item) => item !== null)}
        </Slider>
      </div>
    </div>
  );
}
