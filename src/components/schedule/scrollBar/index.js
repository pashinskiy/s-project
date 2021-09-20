import React from "react"
import { makeStyles, Grid, useMediaQuery, Button } from "@material-ui/core"
import ScrollBarButton from "../../buttons/scrollBarButton"

const useStyle = makeStyles(theme => ({
    root: {
      marginBottom: "8.33vw",
      marginLeft: "3.47vw",
      "@media(max-width: 767px)": {
        marginBottom: "7.82vw",
        marginLeft: "6.03vw"
      },
    },
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
      "@media(max-width: 768px)": {
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
      // maxWidth: "1440px",
      flexShrink: 0,
  
      marginLeft: "-2.18vw",
      paddingLeft: "2.18vw",

      "@media(max-width: 767px)": {
        marginLeft: "-6.76vw",
        paddingLeft: "6.76vw",
      },
    },

    buttonContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      marginTop: "1.73vw",
      marginRight: "3.47vw",
      "& button:first-child": {
          marginRight: "0.55vw",
      },
    },
  }))

export default function ScrollBar({ children }){

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
      if (!showPrev) setShowPrev(true)
  
      const translateX = +cardPanel.style.transform.slice(10, -3)
  
      const nextElement = [...cardPanel.children].find(child => {
        return child.offsetLeft > -translateX
      })
      if (nextElement){
        let newTranslateX = -nextElement.offsetLeft
        if (newTranslateX < maxTranslateX) {
          newTranslateX = maxTranslateX
          setShowNext(false)
        }
        cardPanel.style.transform = `translate(${newTranslateX}px)`
      }
    }
  
    function prev() {
      if (!showNext) setShowNext(true)
  
      const translateX = +cardPanel.style.transform.slice(10, -3)
  
      const prevElement = [...cardPanel.children].reverse().find(child => {
        return child.offsetLeft < -translateX
      })
  
      if (prevElement){
        let newTranslateX = 0 - prevElement.offsetLeft
        if (newTranslateX === 0) {
          setShowPrev(false)
        }
        cardPanel.style.transform = `translate(${newTranslateX}px)`
      }
    }

  const classes = useStyle()
  const isMobile = !useMediaQuery("(max-width: 767px)")


    return (
        <div className={classes.root}>
            <Grid container className={classes.wrapper}>
                <Grid
                    container
                    className={classes.wrapperTrack + " " + classes.unselect}
                    style={{ overflow: "visible"}}>
                        <Grid
                        container
                        ref={setRef}
                        onPointerDown={isMobile ? setScrollBar : null}
                        className={classes.track}>
                        {children}
                        </Grid>
                </Grid>
            </Grid>
            {isMobile ? (
              <div className={classes.buttonContainer}>
                <ScrollBarButton onClick={prev} left/>
                <ScrollBarButton onClick={next} text="Далее"/>
              </div>    
            ) : null}
        </div>
      )
}