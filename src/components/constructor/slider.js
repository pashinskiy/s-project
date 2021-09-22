import React from "react";
import { makeStyles, useMediaQuery } from "@material-ui/core";

import ArrowRight from "../../images/svg/arrow_right.svg";

const useStyles = makeStyles((theme) => ({
  slider_wrapper: {
    width: "100%",
    overflowX: "hidden",
    position: "relative",
  },
  slider_track: {
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

  nav: {
    width: "100%",
    pointerEvents: "none",

    position: "absolute",
    top: "50%",
    left: 0,
    transform: "translateY(-50%)",

    display: "flex",
    justifyContent: "space-between",
  },
  nav_button: {
    background: theme.palette.background.blue,
    pointerEvents: "auto",

    width: "4.16vw",
    height: "12.91vw",
    padding: "4.58vw 1.25vw",
    borderRadius: "1.73vw 0 0 1.73vw",
    // "@media(min-width: 1440px)": {
    //   width: 60,
    //   height: 186,
    //   padding: "66px 18px",
    //   borderRadius: "25px 0px 0px 25px",
    // },
  },
  mirror: {
    transform: "scaleX(-1)",
  },
}));

/**
 * Слайдер конструктора
 * @module src/components/slider
 * @param {Object} props - объект свойств компонента React
 * @param {Object[]} props.children - массив дочерних компонентов
 */
export default function Slider({ children }) {
  const classes = useStyles();
  const mobile = useMediaQuery("(max-width: 767px)");

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

    track.style.left = -track.children[newIndex].offsetLeft + "px";
    console.log(-track.children[newIndex].offsetLeft + "px")
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
    <div className={classes.slider_wrapper}>
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
          >
            <ArrowRight />
          </button>

          <button
            onClick={() => goSlide(activeIndex + 1)}
            className={classes.nav_button}
          >
            <ArrowRight />
          </button>
        </div>
      )}
    </div>
  );
}
