import React from "react"
import { makeStyles, Grid, useMediaQuery, Button } from "@material-ui/core"
import ScrollBarButton from "../buttons/scrollBarButton"

const useStyle = makeStyles(theme => ({
    wrapper: {
      width: "100%",
      cursor: "pointer",
      position: "relative",
      overflow: "hidden",
    },
    wrapperTrack: {
      scrollbarWidth: "none",
      "-ms-overflow-style": "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
  
      "& *": {
        flexShrink: 0,
      },
    },
    unselect: {
      "& *": {
        "-webkit-touch-callout": "none" /* iOS Safari */,
        "-webkit-user-select": "none" /* Chrome/Safari/Opera */,
        "-khtml-user-select": "none" /* Konqueror */,
        "-moz-user-select": "none" /* Firefox */,
        "-ms-user-select": "none" /* Internet Explorer/Edge */,
        "user-select": "none",
      },
    },
    track: {
      width: "auto",
      transition: ".3s transform",
      position: "relative",
      boxSizing: "border-box",
  
      touchAction: "none",
      "@media(max-width: 1441px)": {
        width: "100%",
        touchAction: "auto",
        flexWrap: "nowrap",
        overflowX: "scroll",
        scrollbarWidth: "none",
        "-ms-overflow-style": "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      },
    },
    fullScreen: {
      width: "100vw",
      maxWidth: "1440px",
      flexShrink: 0,
  
      marginLeft: "-2.18vw",
      paddingLeft: "2.18vw",
      "@media(min-width: 1440px)": {
        marginLeft: "-28px",
        paddingLeft: "28px",
      },
      "@media(max-width: 767px)": {
        marginLeft: "-6.76vw",
        paddingLeft: "6.76vw",
      },
    },
  }))

export default function ScrollBar({ children, fullScreen }){

    const mobile = useMediaQuery("(max-width: 1441px)")

    const [cardPanel, setCardPanel] = React.useState(null)

    const maxTranslateX =
      cardPanel?.offsetWidth > cardPanel?.parentElement.offsetWidth
        ? cardPanel?.parentElement.offsetWidth - cardPanel?.offsetWidth
        : 0
  
    const [showNext, setShowNext] = React.useState(true)
    const [showPrev, setShowPrev] = React.useState(false)
  
    const setRef = React.useCallback(node => {
      if (node !== null) {
        setCardPanel(node)
      }
    }, [])
  
    function setScrollBar(e) {
      if (maxTranslateX === 0) return
      let eventScroll = null
      const clientY = e.clientY
      const scroll = window.pageYOffset
  
      const transition = window.getComputedStyle(cardPanel).transition
      cardPanel.style.transition = "none"
  
      //отмена перехвата браузера
      cardPanel.ondragstart = () => false
  
      const clientX = e.clientX
      const translateX = +cardPanel.style.transform.slice(10, -3)
  
      document.addEventListener("pointermove", scrollBar)
      document.addEventListener("pointerup", deleteScrollBar)
  
      function deleteScrollBar(e) {
        cardPanel.style.transition = transition
        document.removeEventListener("pointermove", scrollBar)
        document.removeEventListener("pointerup", deleteScrollBar)
        setTimeout(
          () =>
            document.removeEventListener("click", noGoLink, {
              once: true,
              capture: true,
            }),
          0
        )
      }
  
      function scrollBar(e) {
        // if (eventScroll === null) {
        //   eventScroll =
        //     Math.abs(e.clientY - clientY) >= Math.abs(e.clientX - clientX)
        // }
        // if (eventScroll) {
        //   window.scrollTo(0, scroll + clientY - e.clientY)
        //   return
        // }
  
        if (Math.abs(e.clientY - clientY) > 15 && eventScroll === null) {
          eventScroll = true
        }
        if (Math.abs(e.clientX - clientX) > 15 && eventScroll === null) {
          eventScroll = false
          e.preventDefault()
        }
        if (eventScroll === null) return
        if (eventScroll === true) {
          window.scrollTo(0, scroll + clientY - e.clientY)
          return
        }
  
        document.addEventListener("click", noGoLink, {
          once: true,
          capture: true,
        })
        let newTranslateX = translateX + e.clientX - clientX
        if (newTranslateX >= 0) {
          newTranslateX = 0
          setShowPrev(false)
        } else setShowPrev(true)
  
        if (newTranslateX <= maxTranslateX && maxTranslateX !== 0) {
          newTranslateX = maxTranslateX
          setShowNext(false)
        } else setShowNext(true)
  
        cardPanel.style.transform = `translate(${newTranslateX}px)`
      }
  
      function noGoLink(e) {
        e.preventDefault()
      }
    }
  
    function next() {
        console.log(showPrev)
      if (!showPrev) setShowPrev(true)
  
      const translateX = +cardPanel.style.transform.slice(10, -3)
  
      const nextElement = [...cardPanel.children].find(child => {
        return child.offsetLeft > -translateX
      })
  
      let newTranslateX = -nextElement.offsetLeft
      if (newTranslateX < maxTranslateX) {
        newTranslateX = maxTranslateX
        setShowNext(false)
      }
      cardPanel.style.transform = `translate(${newTranslateX}px)`
    }
  
    function prev() {
      if (!showNext) setShowNext(true)
  
      const translateX = +cardPanel.style.transform.slice(10, -3)
  
      const prevElement = [...cardPanel.children].reverse().find(child => {
        return child.offsetLeft < -translateX
      })
  
      let newTranslateX = 0 - prevElement.offsetLeft
      if (newTranslateX === 0) {
        setShowPrev(false)
      }
      cardPanel.style.transform = `translate(${newTranslateX}px)`
    }

  const classes = useStyle()
  const size = fullScreen ? classes.fullScreen : ""

    return (
        <div>
            <Grid container className={classes.wrapper + " " + size}>
                <Grid
                    container
                    className={classes.wrapperTrack + " " + classes.unselect}
                    style={{ overflow: fullScreen ? "visible" : "hidden" }}>
                        <Grid
                        container
                        ref={setRef}
                        onPointerDown={!mobile ? setScrollBar : null}
                        className={classes.track + " " + (mobile ? size : "")}>
                        {children}
                        </Grid>
                </Grid>
            </Grid>
            {/* <ScrollBarButton onClick={next} text="Далее"/> */}
            <Button
            aria-label="вперед"
            onClick={next}
          >123123</Button>
        </div>
      )
}