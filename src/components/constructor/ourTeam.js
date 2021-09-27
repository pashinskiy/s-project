import React from "react";
import { makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import BlockHeaderText from "../blockHeaderText";
import { GatsbyImage } from "gatsby-plugin-image";
import ArrowMore from "../../images/svg/arrow_more.svg";
import { useState } from "react";
import { Dialog } from "@material-ui/core";
import IconCloseDialog from "../../images/svg/icon_close_dialog.svg";

const useStyle = makeStyles((theme) => ({
  rootOurTeam: {
    display: "flex",
    flexDirection: "row",
    marginTop: 0,
    marginRight: "3.47vw",
    marginLeft: "3.47vw",
    "@media(max-width: 767px)": {
      flexDirection: "column",
      marginLeft: "13.76vw",
      marginRight: "13.76vw",
    },
    "& :last-child": {
      marginRight: 0,
    },
  },
  coachContainer: {
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    width: "20.83vw",
    marginRight: "15.27vw",
    "@media(max-width: 767px)": {
      marginRight: 0,
      marginBottom: "7.24vw",
      width: "72.46vw",
    },
  },
  image: {
    width: "20.83vw",
    height: "20.83vw",
    borderRadius: 1000,
    "@media(max-width: 767px)": {
      width: "72.46vw",
      height: "72.46vw",
    },
  },
  coachName: {
    color: theme.palette.color.blue,
    lineHeight: "112.7%",
    fontWeight: 700,
    textAlign: "center",
    fontFamily: "'Exo 2'",
    fontSize: "2.5vw",
    marginTop: "1.73vw",
    "@media(max-width: 767px)": {
      fontSize: "8.69vw",
      marginTop: "6.03vw",
    },
  },
  coachShortAbout: {
    color: theme.palette.color.lightBlue,
    textAlign: "center",
    fontSize: "1.25vw",
    marginTop: "1.73vw",
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
      marginTop: "6.03vw",
    },
  },
  moreContainer: {
    display: "flex",
    alignSelf: "center",
    justifyContent: "space-between",
    width: "13.68vw",
    padding: "0.9375vw 0px 0.9375vw 0px",
    "@media(max-width: 767px)": {
      width: "39.37vw",
      padding: "3.86vw 0px 3.86vw 0px",
    },
  },
  moreText: {
    fontWeight: 500,
    fontSize: "1.25vw",
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
    },
  },
  arrowMore: {
    width: "2.7vw",
    "@media(max-width: 767px)": {
      width: "8.93vw",
    },
  },
  dialogContainer: {
    height: "inherit",
    display: "flex",
    flexDirection: "row",
    "@media(max-width: 767px)": {
      flexDirection: "column",
      height: "100%",
    },
  },
  dialogScrollBody: {
    "@media(max-width: 767px)": {
      padding: "12.06vw 6.03vw",
      overflow: "scroll",
    },
  },
  dialogPaper: {
    borderRadius: 0,
    boxShadow: "0px 4.83vw 16.9vw rgba(4, 22, 94, 0.44)",
    width: "74.3vw",
    height: "42.5vw",
    "@media(max-width: 767px)": {
      maxHeight: "100%",
      margin: 0,
      width: "100%",
      height: "unset",
      // height: "100%",
      maxWidth: "unset",
    },
  },
  iconCloseDialog: {
    cursor: "pointer",
    zIndex: 1,
    position: "absolute",
    top: "0.48vw",
    right: "0.48vw",
    width: "1.38vw",
    height: "1.38vw",
    "@media(max-width: 767px)": {
      width: "4.83vw",
      height: "4.83vw",
    },
  },
  dialogImage: {
    height: "100%",
    width: "30.13vw",
    marginRight: "4.16vw",
    "@media(max-width: 767px)": {
      flexShrink: 0,
      width: "100%",
      height: "44.3vh",
      marginRight: 0,
      marginBottom: "3.9vh",
    },
  },
  dialogCoachName: {
    color: theme.palette.color.blue,
    lineHeight: "112.7%",
    fontWeight: 700,
    textAlign: "center",
    fontSize: "4.44vw",
    marginBottom: "2.08vw",
    "@media(max-width: 767px)": {
      fontSize: "8.69vw",
      marginBottom: "3.62vw",
    },
  },
  dialogDescription: {
    color: theme.palette.color.lightBlue,
    fontSize: "1.11vw",
    maxHeight: "27.77vw",
    "@media(max-width: 767px)": {
      fontSize: "3.38vw",
      overflowY: "auto",
      maxHeight: "unset",
      flexGrow: 1,
      margin: "0px 6.03vw 7.24vw 6.03vw",
    },
  },
  dialogTextContainer: {
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "36.52vw",
    height: "100%",
    "@media(max-width: 767px)": {
      width: "100%",
      padding: "0px 6.03vw 7.24vw 6.03vw",
    },
  },
}));

export default function OurTeam({ slice }) {
  const classes = useStyle();
  const data = slice.items.map((coach) => coach);
  console.log(data);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [coachData, setCoachData] = useState(data[0]);

  const mobile = useMediaQuery("(max-width: 767px)");

  const handleClickOpen = (coachNum) => {
    setCoachData(data[coachNum]);
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <BlockHeaderText text="Наша команда" />
      <div className={classes.rootOurTeam}>
        {data.map((block, i) => {
          return (
            <div
              className={classes.coachContainer}
              onClick={(e) => {
                handleClickOpen(i);
              }}
              onKeyDown={(e) => {
                handleClickOpen(i);
              }}
            >
              <GatsbyImage
                image={
                  block.coach.document.data.image.localFile.childImageSharp
                    ?.gatsbyImageData
                }
                alt={
                  block.coach.document.data.image.alt !== null
                    ? block.coach.document.data.image.alt
                    : "coach-" + i
                }
                className={classes.image}
                imgStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <Typography className={classes.coachName}>
                {block.coach.document.data.first_name.text +
                  " " +
                  block.coach.document.data.second_name.text}
              </Typography>
              <Typography className={classes.coachShortAbout}>
                {block.coach.document.data.short_decriprtion.text}
              </Typography>
              <div className={classes.moreContainer}>
                <Typography className={classes.moreText}>
                  Узнать подробнее
                </Typography>
                <ArrowMore className={classes.arrowMore} />
              </div>
            </div>
          );
        })}
        <Dialog
          open={dialogOpen}
          onClose={handleClose}
          BackdropProps={{
            style: {
              backgroundColor: "white",
              opacity: "0.6",
            },
          }}
          maxWidth={false}
          scroll={"body"}
          style={{ backgroundColor: "transparent"}}
          classes={{ paper: classes.dialogPaper, scrollBody: classes.dialogScrollBody }}
        >
          <IconCloseDialog
            className={classes.iconCloseDialog}
            onClick={handleClose}
          />
          <div style={{width: "100%", height: "100%"}}>
            <div className={classes.dialogContainer}>
              <GatsbyImage
                image={
                  coachData.coach.document.data.image.localFile.childImageSharp
                    ?.gatsbyImageData
                }
                alt={
                  coachData.coach.document.data.image.alt !== null
                    ? coachData.coach.document.data.image.alt
                    : "coach-active"
                }
                className={classes.dialogImage}
                imgStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              {mobile ? (
                <>
                  <Typography className={classes.dialogCoachName}>
                    {coachData.coach.document.data.first_name.text +
                      " " +
                      coachData.coach.document.data.second_name.text}
                  </Typography>
                  <Typography className={classes.dialogDescription}>
                    {coachData.coach.document.data.description.text}
                  </Typography>
                </>
              ) : (
                <div className={classes.dialogTextContainer}>
                  <Typography className={classes.dialogCoachName}>
                    {coachData.coach.document.data.first_name.text +
                      " " +
                      coachData.coach.document.data.second_name.text}
                  </Typography>
                  <Typography className={classes.dialogDescription}>
                    {coachData.coach.document.data.description.text}
                  </Typography>
                </div>
              )}
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
}
