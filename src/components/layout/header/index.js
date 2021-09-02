import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

/**
 * Шапка сайта
 * @module src/components/header
 */
export default function Header() {
  const classes = useStyles();

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

  return (
    <header>
      <img src={data.prismicHeader.data.logo_sport.localFile.publicURL} />
    </header>
  );
}
