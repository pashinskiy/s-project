import * as React from "react";
import { graphql } from "gatsby";
import { makeStyles } from "@material-ui/core";

import Layout from "../components/layout";
import Seo from "../components/seo";
import FirstScreen from "../components/mainPage/firstScreen";

const useStyles = makeStyles((theme) => ({}));

const IndexPage = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Seo title="СКА Swim" />
      <FirstScreen />
    </Layout>
  );
};

/**
 * Главная страница
 * @module src/page/index
 */
export default IndexPage;
