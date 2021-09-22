import React from "react";
import { makeStyles, Typography, useMediaQuery } from "@material-ui/core";

import ArrowRight from "../../images/svg/button_arrow.svg";

const useStyles = makeStyles((theme) => ({
  slider_wrapper: {
    width: "100%",
    overflowX: "hidden",
    position: "relative",

    display: "flex",
    flexDirection: "column",
  },
  slider_track: {
    width: "100%",

    display: "flex",
    alignItems: "center",
    flexWrap: "nowrap",
    height: "100%",

    position: "relative",
    left: 0,

    "& > *": {
      flexShrink: 0,
    },
  },
  addPadding: {
    padding: "0 3.47vw",
    "@media(max-width: 767px)": {
      padding: 0,
    },
  },

  nav: {
    alignSelf: "flex-end",

    display: "flex",

    marginTop: "1.73vw",
    marginRight: "3.47vw",
    paddingBottom: "1px",
  },
  nav_button: {
    display: "flex",
    alignItems: "center",
    height: "3.47vw",
    padding: "0 2.74vw",
    border: `1px solid ${theme.palette.background.blue}`,
    borderRadius: "100px",
    // "@media(min-width: 1440px)": {
    //   width: 60,
    //   height: 186,
    //   padding: "66px 18px",
    //   borderRadius: "25px 0px 0px 25px",
    // },

    "&:first-child": {
      marginRight: "0.55vw",
    },
  },
  mirror: {
    transform: "scaleX(-1)",
  },
  nav_button_text: {
    marginRight: "0.69vw",

    fontWeight: 700,
    lineHeight: 1.28,
    color: theme.palette.color.black,
    fontSize: "1.25vw",
  },
}));

/**
 * Слайдер конструктора
 * @module src/components/slider
 * @param {Object} props - объект свойств компонента React
 * @param {Object[]} props.children - массив дочерних компонентов
 * @param {Boolean} props.padding - наличие отступов у слайдера
 */
export default function Slider({ children, padding }) {
  const classes = useStyles();
  const mobile = useMediaQuery("(max-width: 767px)");
  const classAddPadding = padding ? classes.addPadding : "";

  const [track, setTrack] = React.useState(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const length = track?.children?.length;

  const ref = React.useCallback((node) => {
    if (node !== null) {
      setTrack(node);
      node.style.left = -node.children[activeIndex].offsetLeft + "px";
    }
  }, []);

  function goSlide(index) {
    let newIndex;
    switch (index) {
      case -1:
        newIndex = length - 1;
        break;
      case length:
        newIndex = 0;
        break;
      default:
        newIndex = index;
    }

    const maxLeft =
      track.offsetWidth -
      track.children[0].offsetWidth * length -
      (track.children[1].offsetLeft - track.children[0].offsetWidth) *
        (length - 1);
    const newLeft = -track.children[newIndex].offsetLeft;
    track.style.left = (newLeft <= maxLeft ? maxLeft : newLeft) + "px";
    setActiveIndex(newIndex);
  }

  function swipe(e) {
    const transition = track.style.transition;
    track.style.transition = "";
    let nextIndex = null;

    let eventScrollX = false;
    const clientX = e.clientX;
    const clientY = e.clientY;
    const left = +track.style.left.slice(0, -2);

    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    document.addEventListener("touchmove", scrollBar);
    document.addEventListener("touchend", deleteScrollBar);

    function deleteScrollBar() {
      track.style.transition = transition;
      if (nextIndex !== null) goSlide(nextIndex);
      document.removeEventListener("touchmove", scrollBar);
      document.removeEventListener("touchend", deleteScrollBar);
    }

    function scrollBar(e) {
      window.scrollTo(scrollX, scrollY);

      const deltaY = e.changedTouches[0].clientY - clientY;
      const deltaX = e.changedTouches[0].clientX - clientX;
      if (Math.abs(deltaY) > 15 && !eventScrollX) {
        deleteScrollBar();
        return;
      }
      if (Math.abs(deltaX) > 15 && !eventScrollX) {
        eventScrollX = true;
      }
      if (!eventScrollX) return;

      track.style.left = left + deltaX + "px";
      if (deltaX > 10) {
        nextIndex = activeIndex - 1;
      } else if (deltaX < -10) {
        nextIndex = activeIndex + 1;
      } else nextIndex = null;
    }
  }

  return (
    <div className={classes.slider_wrapper + " " + classAddPadding}>
      <div
        ref={ref}
        style={{ transition: `left 1s` }}
        onPointerDown={swipe}
        className={classes.slider_track}
      >
        {children}
      </div>

      {mobile ? null : (
        <div className={classes.nav}>
          <button
            onClick={() => goSlide(activeIndex - 1)}
            className={classes.nav_button + " " + classes.mirror}
            aria-label="назад"
          >
            <ArrowRight />
          </button>

          <button
            onClick={() => goSlide(activeIndex + 1)}
            className={classes.nav_button}
            aria-label="далее"
          >
            <Typography className={classes.nav_button_text}>Далее</Typography>
            <ArrowRight />
          </button>
        </div>
      )}
    </div>
  );
}
