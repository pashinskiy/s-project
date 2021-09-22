import React from "react";
import { makeStyles, useMediaQuery } from "@material-ui/core";

import ArrowRight from "../../../images/svg/arrow_right.svg";

const useStyles = makeStyles((theme) => ({
  slider_wrapper: {
    overflowX: "hidden",
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  slider_wrapperTrack: {
    position: "relative",

    width: "53.05vw",
    height: "29.65vw",
    // "@media(min-width: 1440px)": {
    //   width: 764,
    //   height: 427,
    // },
    "@media(max-width: 767px)": {
      width: "67.63vw",
      height: "67.39vw",
    },
  },
  slider_track: {
    display: "flex",
    alignItems: "center",
    flexWrap: "nowrap",
    height: "100%",

    position: "absolute",
    left: 0,

    "& > *": {
      flexShrink: 0,
    },
  },
  card_wrapper: {
    width: "23.88vw",
    height: "21.59vw",
    padding: "0 0.48vw",
    // "@media(min-width: 1440px)": {
    //   width: 344,
    //   height: 311,
    //   padding: "0 7px",
    // },
    "@media(max-width: 767px)": {
      width: "68.59vw",
      height: "56.03vw",
      padding: "0 1.2vw",
    },
  },
  card_wrapper_active: {
    height: "100%",

    width: "53.05vw",
    // "@media(min-width: 1440px)": {
    //   width: 764,
    // },
    "@media(max-width: 767px)": {
      width: "68.59vw",
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
 * Слайдер на главной странице
 * @module src/components/mainPage/firstScreen/slider
 * @param {Object} props - объект свойств компонента React
 * @param {Object[]} props.children - массив дочерних компонентов
 * @param {Number} props.delay - задержка в мс
 */
export default function Slider({ children, delay }) {
  delay = delay ?? 1000;
  const classes = useStyles();
  const mobile = useMediaQuery("(max-width: 767px)");

  const [track, setTrack] = React.useState(null);
  const [activeIndex, setActiveIndex] = React.useState(1);

  const length = track?.children?.length;
  const activeClass = classes.card_wrapper_active;

  const ref = React.useCallback((node) => {
    if (node !== null) {
      setTrack(node);
      node.style.left = -node.children[activeIndex].offsetLeft + "px";
      node.children[activeIndex].classList.add(activeClass);
    }
  }, []);

  const doneSlides = [
    ...children.slice(-1),
    ...children,
    ...children.slice(0, 1),
  ].map((child, i) => {
    const active = i === activeIndex;

    return (
      <div
        key={`slide_${i}`}
        style={{ transition: `all ${delay}ms` }}
        className={classes.card_wrapper + (active ? ` ${activeClass}` : "")}
      >
        {React.cloneElement(child, { active: active })}
      </div>
    );
  });

  function goSlide(index) {
    let newIndex;
    switch (index) {
      case 0:
        newIndex = length - 2;
        break;
      case length - 1:
        newIndex = 1;
        break;
      default:
        newIndex = index;
    }

    track.style.left = -track.children[0].offsetWidth * newIndex + "px";
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
      <div className={classes.slider_wrapperTrack}>
        <div
          ref={ref}
          style={{ transition: `left ${delay}ms` }}
          onPointerDown={swipe}
          className={classes.slider_track}
        >
          {doneSlides}
        </div>
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
            aria-label="дальше"
          >
            <ArrowRight />
          </button>
        </div>
      )}
    </div>
  );
}
