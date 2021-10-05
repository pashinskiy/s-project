import React from "react";
import { makeStyles, useMediaQuery, Typography } from "@material-ui/core";

import ArrowRight from "../../../images/svg/button_arrow.svg";

const useStyles = makeStyles((theme) => ({
  slider_wrapper: {
    overflowX: "hidden",
    position: "relative",

    display: "flex",
    flexDirection: "column",
  },
  slider_wrapperTrack: {
    position: "relative",

    alignSelf: "center",
    width: "66.8vw",
    height: "38.05vw",
    "@media(min-width: 1440px)": {
      width: "962px",
      height: "548px",
    },
    "@media(max-width: 767px)": {
      alignSelf: "flex-start",
      width: "96.13vw",
      height: "59.17vw",
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
    width: "66.8vw",
    height: "38.05vw",
    padding: "0 0.69vw",
    "@media(min-width: 1440px)": {
      width: "962px",
      height: "548px",
      padding: "0 10px",
    },
    "@media(max-width: 767px)": {
      width: "96.13vw",
      height: "59.17vw",
      padding: "0 4.83vw 0 0",
    },
  },
  bottomBlock: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    marginTop: "2.7vw",
    padding: "0 3.47vw",
    "@media(min-width: 1440px)": {
      marginTop: "39px",
      padding: "0 50px",
    },
    "@media(max-width: 767px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      marginTop: "5.79vw",
      padding: "0 6.03vw",

      "& > *:first-child": {
        marginTop: 0,
      },
    },
  },
  subtitleWrapper: {
    display: "flex",
    alignItems: "center",

    width: "26.73vw",
    "@media(min-width: 1440px)": {
      width: "385px",
    },
    "@media(max-width: 767px)": {
      width: "100%",
    },
  },
  subtitle: {
    fontWeight: 700,
    lineHeight: 1.28,

    fontSize: "2.5vw",
    "@media(min-width: 1440px)": {
      fontSize: 36,
    },
    "@media(max-width: 767px)": {
      fontSize: "5.79vw",
    },
  },
  divider: {
    width: "7.01vw",
    height: "2px",
    background: theme.palette.color.blue,
    marginLeft: "1.66vw",
    "@media(min-width: 1440px)": {
      marginLeft: "24px",
      width: "101px",
    },
  },
  content: {
    width: "39.72vw",
    "@media(min-width: 1440px)": {
      width: "572px",
    },
    "@media(max-width: 767px)": {
      marginTop: "4.83vw",
      width: "100%",
    },
  },
  title: {
    fontFamily: "'Exo 2'",
    fontWeight: 700,
    lineHeight: 1.2,
    color: theme.palette.color.blue,

    fontSize: "4.44vw",
    "@media(min-width: 1440px)": {
      fontSize: 64,
    },
    "@media(max-width: 767px)": {
      fontSize: "8.69vw",
    },
  },
  text: {
    fontWeight: 300,
    lineHeight: 1.28,
    color: theme.palette.color.lightBlue,

    marginTop: "1.04vw",
    fontSize: "1.66vw",
    "@media(min-width: 1440px)": {
      marginTop: "15px",
      fontSize: 24,
    },
    "@media(max-width: 767px)": {
      marginTop: "4.83vw",
      fontSize: "4.34vw",
    },
  },

  nav: {
    display: "flex",
    paddingBottom: "1px",

    "@media(max-width: 767px)": {
      marginTop: "9.66vw",
    },
  },
  nav_button: {
    display: "flex",
    alignItems: "center",
    border: `1px solid ${theme.palette.background.blue}`,
    borderRadius: "100px",

    height: "3.47vw",
    padding: "0 2.74vw",
    "&:first-child": {
      marginRight: "0.55vw",
    },
    "@media(min-width: 1440px)": {
      height: "50px",
      padding: "0 40px",
      "&:first-child": {
        marginRight: "0.55vw",
      },
    },
    "@media(max-width: 767px)": {
      height: "12.77vw",
      padding: "0 13.16vw",
      "&:first-child": {
        marginRight: "1.69vw",
      },
    },
  },
  mirror: {
    transform: "scaleX(-1)",
  },
  nav_button_text: {
    fontWeight: 700,
    lineHeight: 1.28,
    color: theme.palette.color.black,

    marginRight: "0.69vw",
    fontSize: "1.25vw",
    "@media(min-width: 1440px)": {
      marginRight: "10px",
      fontSize: 18,
    },
    "@media(max-width: 767px)": {
      marginRight: "2.41vw",
      fontSize: "4.34vw",
    },
  },
  nav_button_icon: {
    width: "2.63vw",
    height: "0.97vw",
    "@media(min-width: 1440px)": {
      width: "38px",
      height: "14px",
    },
    "@media(max-width: 767px)": {
      width: "9.17vw",
      height: "3.38vw",
    },
  },
}));

/**
 * Слайдер с заголовком и описанием
 * @module src/components/constructor/sliderWithTitleAndDescription/slider
 * @param {Object} props - объект свойств компонента React
 * @param {Object[]} props.children - массив дочерних компонентов
 * @param {Number} props.delay - задержка в мс
 */
export default function Slider({
  children,
  delay,
  afterChange,
  subtitle,
  title,
  text,
}) {
  delay = delay ?? 1000;
  const classes = useStyles();
  const mobile = useMediaQuery("(max-width: 767px)");

  const [track, setTrack] = React.useState(null);
  const [activeIndex, setActiveIndex] = React.useState(1);

  const length = track?.children?.length;

  const ref = React.useCallback((node) => {
    if (node !== null) {
      setTrack(node);
      node.style.left = -node.children[activeIndex].offsetLeft + "px";
      afterChange(activeIndex - 1);
    }
  }, []);

  const doneSlides = [
    ...children.slice(-1),
    ...children,
    ...children.slice(0, 1),
  ].map((child, i) => (
    <div
      key={`slide_${i}`}
      style={{ transition: `all ${delay}ms` }}
      className={classes.card_wrapper}
    >
      {child}
    </div>
  ));

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
    afterChange(newIndex - 1);
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

      <div className={classes.bottomBlock}>
        {subtitle ?? false ? (
          <div className={classes.subtitleWrapper}>
            <Typography className={classes.subtitle}>{subtitle}</Typography>

            {mobile ? null : <div className={classes.divider} />}
          </div>
        ) : null}

        {mobile && title === null && title === null ? null : (
          <div className={classes.content}>
            {title ?? false ? (
              <Typography className={classes.title}>{title}</Typography>
            ) : null}

            {text ?? false ? (
              <Typography className={classes.text}>{text}</Typography>
            ) : null}
          </div>
        )}

        <div className={classes.nav}>
          <button
            onClick={() => goSlide(activeIndex - 1)}
            className={classes.nav_button + " " + classes.mirror}
            aria-label="назад"
          >
            <p className={classes.nav_button_icon}>
              <ArrowRight />
            </p>
          </button>

          <button
            onClick={() => goSlide(activeIndex + 1)}
            className={classes.nav_button}
            aria-label="далее"
          >
            <Typography className={classes.nav_button_text}>Далее</Typography>
            <p className={classes.nav_button_icon}>
              <ArrowRight />
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
