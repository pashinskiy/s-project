import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import ListNews from "../components/newsPage/listNews";
import BlockHeaderText from "../components/newsPage/blockHeaderText";
import BreadCrumbs from "../components/breadCrumbs";

const NewsPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Новости" />
      <BreadCrumbs links={[{ title: "Новости", href: "/news" }]} />
      <BlockHeaderText text="Последние новости" variant="news_title" />
      <ListNews news={data.allPrismicNewsPage.edges.map((edge) => edge.node)} />
    </Layout>
  );
};

/**
 * Страница новостей
 * @module src/page/news
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.data - объект данных полученный из prismic
 */
export default NewsPage;

export const query = graphql`
  {
    allPrismicNewsPage {
      edges {
        node {
          id
          uid
          data {
            order
            subtitle
            subtitle_bg
            title
            text
            main_image {
              alt
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  }
`;
