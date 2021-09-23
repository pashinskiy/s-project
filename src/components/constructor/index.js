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

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: "8.33vw",
    "@media(max-width: 767px)": {
      marginTop: "14.49vw",
    },

    "& > *": {
      marginTop: "8.33vw",
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

  return (
    <div className={classes.wrapper}>
      {slices.map((slice) => {
        if (slice === null) return null;
        switch (slice.slice_type) {
          case "text_on_image":
            return <TextOnImage slice={slice} />;
          case "image_side_text":
            return <ImageSideText slice={slice} />;
          case "image_under_text":
            return <ImageUnderText slice={slice} />;
          case "two_images_under_text":
            return <TwoImagesUnderText slice={slice} />;
          case "two_images_and_text_in_row":
            return <TwoImagesAndTextInRow slice={slice} />;
          case "image_and_text_4_1":
            return <ImageAndText41 slice={slice} />;
          case "text_on_image_blue_bg":
            return <TextOnImageBlueBg slice={slice} />;
          case "text":
            return <Text slice={slice} />;
          case "small_slider":
            return <SmallSliderNormalCard slice={slice} />;
          case "small_slider_big_photo":
            return <SmallSliderBigCard slice={slice} />;
          case "schedule":
            return <ScheduleScroll slice={slice} />;
          case "gray_panel_with_blocks_text":
            return <GrayPanelWithBlocks slice={slice} />;
          // case "our_team":
          //   return <OurTeam slice={slice} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
