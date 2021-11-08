import * as React from "react";
import { makeStyles } from "@material-ui/core";
import Header from "./header";
import Footer from "./footer";
import Menu from "./menu";
import { graphql, useStaticQuery } from "gatsby";

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    width: "100%",
    margin: "0 auto",
    minHeight: "100vh",
  },
  root: {
    margin: "auto",
    maxWidth: 1440,
    paddingBottom: "1px",
  },
}));

/**
 * Общий макет страниц сайта
 * @module src/components/layout
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.children - дочерние элементы
 */
export default function Layout({ children }) {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    {
      prismicLayout {
        data {
          logo_sport {
            alt
            localFile {
              publicURL
            }
          }
          logo_fitnes {
            alt
            localFile {
              publicURL
            }
          }
          title_sport
          icon_sport {
            alt
            localFile {
              publicURL
            }
          }
          teams {
            text_link
            page_team {
              document {
                ... on PrismicPageConstructor {
                  id
                  uid
                  data {
                    title
                  }
                }
              }
            }
          }
          title_fitnes
          icon_fitnes {
            alt
            localFile {
              publicURL
            }
          }
          workouts {
            text_link
            page_workout {
              document {
                ... on PrismicPageConstructor {
                  id
                  uid
                  data {
                    title
                  }
                }
              }
            }
          }
          documents {
            name
            document {
              localFile {
                publicURL
              }
            }
          }
        }
      }
    }
  `);

  return (
    <div className={classes.mainWrapper}>
      <Header data={data} />
      <main className={classes.root}>{children}</main>
      <Footer data={data} />
      <Menu data={data} />
    </div>
  );
}
