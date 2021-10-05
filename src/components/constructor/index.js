import React from "react";
import { makeStyles } from "@material-ui/core";
import TextOnImage from "./textOnImage";
import ImageSideText from "./imageSideText";
import ImageUnderText from "./imageUnderText";
import TwoImagesUnderText from "./twoImagesUnderText";
import TwoImagesAndTextInRow from "./twoImagesAndTextInRow";
import ImageAndText41 from "./imageAndText41";
import TextOnImageBlueBg from "./textOnImageBlueBg";
import Text from "./text";
import SmallSliderNormalCard from "./smallSliderNormalCard";
import SmallSliderBigCard from "./smallSliderBigCard";
import ScheduleScroll from "./scheduleScroll";
import GrayPanelWithBlocks from "./grayPanelWithBlocks";
import OurTeam from "./ourTeam";
import BigSlider from "./bigSlider";
import SliderWithTitleAndDescription from "./sliderWithTitleAndDescription";
import Ticker from "./ticker";
import Timer from "./timer";
import Gallery from "./gallery";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: "8.33vw",
    "@media(min-width: 1440px)": {
      marginTop: "120px",
    },
    "@media(max-width: 767px)": {
      marginTop: "14.49vw",
    },

    "& > *": {
      marginTop: "8.33vw",
      "@media(min-width: 1440px)": {
        marginTop: "120px",
      },
      "@media(max-width: 767px)": {
        marginTop: "14.49vw",
      },

      "&:first-child": {
        marginTop: 0,
      },
    },
  },
}));

/**
 * Конструктор блоков
 * @module src/components/constructor
 * @param {Object} props - объект свойств компонента React
 * @param {Object[]} props.slices - массив слайсов полученный из prismic
 */
export default function Constructor({ slices }) {
  const classes = useStyles();

  return slices !== null ? (
    <div className={classes.wrapper}>
      {slices.map((slice) => {
        if (slice === null) return null;
        switch (slice.slice_type) {
          case "text_on_image":
            return <TextOnImage slice={slice} key={slice.id} />;
          case "image_side_text":
            return <ImageSideText slice={slice} key={slice.id} />;
          case "image_under_text":
            return <ImageUnderText slice={slice} key={slice.id} />;
          case "two_images_under_text":
            return <TwoImagesUnderText slice={slice} key={slice.id} />;
          case "two_images_and_text_in_row":
            return <TwoImagesAndTextInRow slice={slice} key={slice.id} />;
          case "image_and_text_4_1":
            return <ImageAndText41 slice={slice} key={slice.id} />;
          case "text_on_image_blue_bg":
            return <TextOnImageBlueBg slice={slice} key={slice.id} />;
          case "text":
            return <Text slice={slice} key={slice.id} />;
          case "small_slider":
            return <SmallSliderNormalCard slice={slice} key={slice.id} />;
          case "small_slider_big_photo":
            return <SmallSliderBigCard slice={slice} key={slice.id} />;
          case "big_slider":
            return <BigSlider slice={slice} key={slice.id} />;
          case "slider_with_title_and_description":
            return (
              <SliderWithTitleAndDescription slice={slice} key={slice.id} />
            );
          case "schedule":
            return <ScheduleScroll slice={slice} key={slice.id} />;
          case "gray_panel_with_blocks_text":
            return <GrayPanelWithBlocks slice={slice} key={slice.id} />;
          case "galery":
            return <Gallery slice={slice} key={slice.id} />;
          case "our_team":
            return <OurTeam slice={slice} key={slice.id} />;
          case "ticker":
            return <Ticker slice={slice} key={slice.id} />;
          case "timer":
            return <Timer slice={slice} key={slice.id} />;
          default:
            return null;
        }
      })}
    </div>
  ) : null;
}
