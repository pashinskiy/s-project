import React from "react";
import { makeStyles } from "@material-ui/core";
import BlockHeaderText from "../blockHeaderText";
import { GatsbyImage } from "gatsby-plugin-image";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    "@media(max-width: 767px)": {
        flexDirection: "column",
      },
  },
  coachContainer: {
    display: "flex",
    width: "20.83vw",
    marginRight: "",
    "@media(max-width: 767px)": {
        width: "72.46vw",
      },
  },
}));

export default function OurTeam({ slice }) {
  const classes = useStyle();
  const data = slice.items.map(coach => coach)
//   console.log(data);

  return (
    <>
      <BlockHeaderText text="Наша команда" />
      <div className={classes.root}>
        {data.map((block, i) => {
            console.log(block)
         return (
            <div className={classes.coachContainer}>
              <GatsbyImage
                image={block.coach.document.data.image.localFile.childImageSharp?.gatsbyImageData}
                alt={block.coach.document.data.image.alt !== null ? block.coach.document.data.image.alt : "coach-" + i }
                className={classes.image}
                imgStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              123
            </div>
          )   
        })}
      </div>
    </>
  );
}
