import React, { useState } from "react";
import {
  Button,
  Dialog,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import pallete from "../../../templates/colors.json";
import { GatsbyImage } from "gatsby-plugin-image";
import CrossClose from "../../../images/svg/cross_close_white.svg";
import ArrowNext from "../../../images/svg/gallery_arrow_next.svg";
import ArrowButton from "../../../images/svg/button_arrow.svg";

const useStyle = makeStyles((theme) => ({
  root: {
    "& > *": {
      "-webkit-touch-callout": "none",
      "-webkit-user-select": "none",
      "-khtml-user-select": "none",
      "-moz-user-select": "none",
      "-ms-user-select": "none",
      "user-select": "none",
    },
  },
  noDrag: {
    "-webkit-user-select": "none",
    "-khtml-user-select": "none",
    "-moz-user-select": "none",
    "-o-user-select": "none",
    "-ms-user-select": "none",
    "user-select": "none",
    "-webkit-user-drag": "none",
    "-khtml-user-drag": "none",
    "-moz-user-drag": "none",
    "-o-user-drag": "none",
    "-ms-user-drag": "none",
    "user-drag": "none",    
  },

  textAndButton: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: "0px 3.47vw",
    marginBottom: "1.73vw",
    "@media(max-width: 767px)": {
      padding: "0px 6.03vw",
      marginBottom: "4.83vw",
    },
  },

  textContainer: {
    display: "flex",
    flexDirection: "column",
  },

  accentHeadingText: {
    color: theme.palette.color.white,
    fontWeight: 700,
    fontFamily: "Futura PT",
    fontSize: "1.66vw",
    marginBottom: "1.73vw",
    padding: "0.48vw 4.09vw",
    "@media(max-width: 767px)": {
      fontSize: "4.34vw",
      padding: "1.2vw 2.4vw",
      marginBottom: "3.62vw",
    },
  },

  headerText: {
    color: theme.palette.color.blue,
    fontWeight: 700,
    lineHeight: "112.7%",
    fontSize: "4.44vw",
    "@media(max-width: 767px)": {
      fontSize: "8.69vw",
    },
  },

  buttonViewAll: {
    height: "3.47vw",
    padding: "0.9375vw 1.805vw",
    border: "1px solid",
    borderColor: theme.palette.color.blue,
    borderRadius: "4.72vw",
    fontSize: "1.25vw",
    fontWeight: 700,
    color: theme.palette.color.main,
    "& span": {
      "& svg": {
        marginLeft: "0.69vw",
      },
    },
  },

  arrowViewAll: {
    width: "2.7vw",
    height: "1.11vw",
  },

  gridFirst: {
    width: "100%",
    height: "55.55vw",
    flexDirection: "row",
    "@media(max-width: 767px)": {
      flexDirection: "column",
      width: "100vw",
      height: "100%",
    },
  },
  gridSecond: {
    width: "62.5%",
    height: "100%",
    flexDirection: "column",
    "@media(max-width: 767px)": {
      flexDirection: "column",
      width: "100vw",
      height: "100%",
    },
  },
  gridThird: {
    height: "46.25%",
    flexDirection: "row",
    "@media(max-width: 767px)": {
      flexDirection: "column",
      width: "100vw",
      height: "100%",
    },
  },
  gridItemFirst: {
    height: "53.75%",
    paddingBottom: "1.38vw",
    "@media(max-width: 767px)": {
      flexDirection: "column",
      width: "100vw",
      height: "37.16vh",
      paddingBottom: "4.83vw",
    },
  },
  gridItemSecondPhoto: {
    width: "48.888%",
    "@media(max-width: 767px)": {
      flexDirection: "column",
      width: "100vw",
      height: "37.16vh",
      paddingBottom: "4.83vw",
    },
  },
  gridItemThirdPhoto: {
    paddingLeft: "1.38vw",
    width: "48.8%",
    flexGrow: 1,
    "@media(max-width: 767px)": {
      flexGrow: "unset",
      flexDirection: "column",
      paddingLeft: 0,
      width: "100vw",
      height: "37.16vh",
      paddingBottom: "4.83vw",
    },
  },
  gridItemFourth: {
    width: "37.5%",
    height: "100%",
    paddingLeft: "1.38vw",
    "@media(max-width: 767px)": {
      flexDirection: "column",
      paddingLeft: 0,
      width: "100vw",
      height: "66.96vh",
      paddingBottom: "4.83vw",
    },
  },
  image: {
    cursor: "pointer",
    width: "100%",
    height: "100%",
  },
  modalContainer: {
    position: "relative",
  },
  dialogPaper: {
    borderRadius: 0,
    margin: 0,
    boxShadow: "none",
    maxWidth: "unset",
    "@media(max-width: 767px)": {
      width: "100%",
    },
  },
  iconCrossClose: {
    cursor: "pointer",
    zIndex: 1,
    position: "fixed",
    top: "1.38vw",
    right: "1.38vw",
    width: "1.38vw",
    height: "1.38vw",
    "@media(max-width: 767px)": {
      width: "4.83vw",
      height: "4.83vw",
      top: "4.83vw",
      right: "4.83vw",
    },
  },
  arrowLeft: {
    cursor: "pointer",
    marginRight: "1.04vw",
    transform: "scaleX(-1)",
    "@media(max-width: 767px)": {
      marginRight: "3.62vw",
    },
  },
  arrowRight: {
    cursor: "pointer",
    marginLeft: "1.04vw",
    "@media(max-width: 767px)": {
      marginLeft: "3.62vw",
    },
  },
  indexText: {
    fontWeight: 700,
    color: theme.palette.color.white,
  },
  selectorContainer: {
    position: "fixed",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "2.08vw 0",
    "@media(max-width: 767px)": {
      padding: "0px 0px 14.49vw 0px",
    },
  },
  indexSpaceBetween: {
    marginLeft: "1.38vw",
    marginRight: "1.04vw",
  },
  dialogImage: {
    width: "100%",
    height: "100%",
    maxHeight: "80vh",
    maxWidth: "87.5vw",
    "-webkit-transition": "opacity 1s ease-in-out",
    "-moz-transition": "opacity 1s ease-in-out",
    "-o-transition": "opacity 1s ease-in-out",
    transition: "opacity 1s ease-in-out",
    "@media(max-width: 767px)": {
      width: "100vw",
      maxWidth: "unset",
      maxHeight: "75vh",
    },
  },
  buttonAllMobileContainer: {
    position: "relative",
    height: "12.07vw",
    width: "100%",
  },
  buttonAllMobile: {
    position: "absolute",
    right: "6.038vw",
    height: "12.07vw",
    padding: "3.26vw 6.28vw",
    border: "1px solid",
    borderColor: theme.palette.color.blue,
    borderRadius: "16.425vw",
    fontSize: "4.347vw",
    fontWeight: 700,
    fontFamily: "Futura PT,'Exo 2'",
    color: theme.palette.color.main,
    "& span": {
      lineHeight: "50%",
      "& svg": {
        marginLeft: "2.415vw",
        marginTop: "0.48vw",
      },
    },
  },
  arrowViewAllMobile: {
    width: "8.937vw",
    height: "3.86vw",
  },
}));

export default function Gallery({ slice }) {
  const classes = useStyle();
  const mobile = useMediaQuery("(max-width: 767px)");
  const photosArr = slice.items.map((photo) => photo.gallery_photo);

  const [openModal, setOpenModal] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const handleImageNext = () => {
    if (imageIndex < photosArr.length - 1) {
      setImageIndex(imageIndex + 1);
    } else if (imageIndex === photosArr.length - 1) {
      setImageIndex(0);
    }
  };
  const handleImagePrev = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    } else if (imageIndex === 0) {
      setImageIndex(photosArr.length - 1);
    }
  };

  const handleOpenModalImage = (index) => {
    setImageIndex(index);
    setOpenModal(true);
  };
  return (
    <div className={classes.root}>
      <div className={classes.textAndButton}>
        <div className={classes.textContainer}>
          <Typography
            className={classes.accentHeadingText}
            style={{
              backgroundColor: pallete[slice.primary.accent_heading_color],
            }}
          >
            {slice.primary.accent_heading.text}
          </Typography>
          <Typography className={classes.headerText}>
            {slice.primary.gallery_header.text}
          </Typography>
        </div>
        {mobile ? null : (
          <div style={{ alignSelf: "center" }}>
            <Button
              className={classes.buttonViewAll}
              aria-label={"view-all"}
              onClick={(e) => handleOpenModal(e)}
            >
              Смотреть все
              <ArrowButton className={classes.arrowViewAll} />
            </Button>
          </div>
        )}
      </div>
      <Grid container columns={2} className={classes.gridFirst}>
        <Grid container className={classes.gridSecond}>
          <Grid item className={classes.gridItemFirst}>
            <GatsbyImage
              onClick={(e) => handleOpenModalImage(0)}
              image={photosArr[0].localFile.childImageSharp?.gatsbyImageData}
              alt={
                photosArr[0].alt !== null ? photosArr.alt : "gallery-photo-0"
              }
              className={classes.image}
              imgStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Grid>
          <Grid container className={classes.gridThird} columns={2}>
            <Grid item className={classes.gridItemSecondPhoto}>
              <GatsbyImage
                onClick={(e) => handleOpenModalImage(1)}
                image={photosArr[1].localFile.childImageSharp?.gatsbyImageData}
                alt={
                  photosArr[1].alt !== null ? photosArr.alt : "gallery-photo-1"
                }
                className={classes.image}
                imgStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Grid>
            <Grid item className={classes.gridItemThirdPhoto}>
              <GatsbyImage
                onClick={(e) => handleOpenModalImage(2)}
                image={photosArr[2].localFile.childImageSharp?.gatsbyImageData}
                alt={
                  photosArr[2].alt !== null ? photosArr.alt : "gallery-photo-2"
                }
                className={classes.image}
                imgStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItemFourth}>
          <GatsbyImage
            onClick={(e) => handleOpenModalImage(3)}
            image={photosArr[3].localFile.childImageSharp?.gatsbyImageData}
            alt={photosArr[3].alt !== null ? photosArr.alt : "gallery-photo-3"}
            className={classes.image}
            imgStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Grid>
      </Grid>
      {mobile ? (
        <div className={classes.buttonAllMobileContainer}>
          <Button
            className={classes.buttonAllMobile}
            aria-label={"view-all-mobile"}
            onClick={(e) => handleOpenModal(e)}
          >
            Смотреть все
            <ArrowButton className={classes.arrowViewAllMobile} />
          </Button>
        </div>
      ) : null}
      <Dialog
        open={openModal}
        onClose={(e) => handleCloseModal(e)}
        BackdropProps={{
          style: {
            background: "rgba(4, 8, 28, 0.93)",
          },
        }}
        classes={{
          paper: classes.dialogPaper,
        }}
      >
        <CrossClose
          className={classes.iconCrossClose}
          onClick={(e) => handleCloseModal(e)}
        />
        <GatsbyImage
          image={
            photosArr[imageIndex].localFile.childImageSharp?.gatsbyImageData
          }
          alt={
            photosArr[imageIndex].alt !== null
              ? photosArr.alt
              : "gallery-photo-3"
          }
          className={classes.dialogImage}
          imgStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className={classes.selectorContainer}>
          <ArrowNext className={classes.arrowLeft} onClick={handleImagePrev} />
          <Typography className={classes.indexText + " " + classes.noDrag}>
            {imageIndex + 1}
          </Typography>
          <Typography
            className={classes.indexSpaceBetween + " " + classes.indexText + " " + classes.noDrag}
          >
            /
          </Typography>
          <Typography className={classes.indexText + " " + classes.noDrag}>
            {photosArr.length}
          </Typography>
          <ArrowNext className={classes.arrowRight} onClick={handleImageNext} />
        </div>
      </Dialog>
    </div>
  );
}
