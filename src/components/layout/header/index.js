import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { makeStyles } from "@material-ui/core";

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../../context/GlobalContextProvider";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
  },
}));

/**
 * Шапка сайта
 * @module src/components/header
 */
export default function Header() {
  const classes = useStyles();
  const state = React.useContext(GlobalStateContext);
  const dispatch = React.useContext(GlobalDispatchContext);

  const data = useStaticQuery(graphql`
    {
      prismicHeader {
        data {
          logo_fitnes {
            localFile {
              publicURL
            }
          }
          logo_sport {
            localFile {
              publicURL
            }
          }
        }
      }
    }
  `);

  const image = (function () {
    switch (state.versionSite) {
      case "sport":
        return data.prismicHeader.data.logo_sport;
      case "fitnes":
        return data.prismicHeader.data.logo_fitnes;
      default:
        return data.prismicHeader.data.logo_sport;
    }
  })();

  return (
    <header className={classes.wrapper}>
      <img src={image.localFile.publicURL} alt={image.alt} />
    </header>
  );
}
