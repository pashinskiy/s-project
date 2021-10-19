import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import BreadCrumbs from "../components/breadCrumbs";
import TextOnImageBlueBg from "../components/newsPage/textOnImageBlueBg";
import Constructor from "../components/constructor";
import SliderNews from "../components/newsPage/sliderNews";

const NewsPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Новости" />
      <BreadCrumbs
        links={[
          { title: "Новости", href: "/news" },
          {
            title: data.prismicNewsPage.data.title,
            href: `/news/${data.prismicNewsPage.data.uid}`,
          },
        ]}
      />

      <TextOnImageBlueBg news={data.prismicNewsPage} />

      <Constructor slices={data.prismicNewsPage.data.body} />

      <SliderNews
        news={data.allPrismicNewsPage.edges.map((edge) => edge.node)}
        title="Другие новости"
      />
    </Layout>
  );
};

/**
 * Страница новости
 * @module src/templates/news
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.data - объект данных полученный из prismic
 */
export default NewsPage;

export const query = graphql`
  query News($uid: String!) {
    allPrismicNewsPage(filter: { uid: { ne: $uid } }) {
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
                  gatsbyImageData(width: 645)
                }
              }
            }
          }
        }
      }
    }
    prismicNewsPage(uid: { eq: $uid }) {
      id
      uid
      first_publication_date
      data {
        subtitle
        subtitle_bg
        title
        text
        date
        main_image {
          alt
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1440)
            }
          }
        }
        body {
          ... on PrismicNewsPageDataBodySchedule {
            id
            slice_type
            primary {
              schedule {
                document {
                  ... on PrismicSchedule {
                    id
                    data {
                      body {
                        ... on PrismicScheduleDataBody {
                          id
                          items {
                            coach {
                              text
                            }
                            group {
                              text
                            }
                            time_from
                            time_to
                          }
                          primary {
                            color_weekday
                            week_day {
                              text
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          ... on PrismicNewsPageDataBodyGrayPanelWithBlocksText {
            id
            slice_type
            items {
              description_text {
                text
              }
              svg_color
              header_text {
                text
              }
            }
          }
          ... on PrismicNewsPageDataBodyOurTeam {
            id
            slice_type
            items {
              coach {
                document {
                  ... on PrismicCoach {
                    id
                    data {
                      description {
                        text
                      }
                      first_name {
                        text
                      }
                      image {
                        alt
                        localFile {
                          childImageSharp {
                            gatsbyImageData(width: 434)
                          }
                        }
                      }
                      second_name {
                        text
                      }
                      short_decriprtion {
                        text
                      }
                    }
                  }
                }
              }
            }
          }
          ... on PrismicNewsPageDataBodyTextOnImage {
            id
            slice_type
            primary {
              image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 1440)
                  }
                }
              }
              order_subtitle
              accent_subtitle
              bg_subtitle
              order_title
              accent_title
              order_text
              text
              order_link
              link_text
              link
              order_button
              text_button
              link_button
            }
          }
          ... on PrismicNewsPageDataBodyImageSideText {
            id
            slice_type
            primary {
              position
              image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 720)
                  }
                }
              }
              order_logo
              logo {
                alt
                localFile {
                  publicURL
                }
              }
              order_icon
              icon
              order_subtitle
              accent_subtitle
              bg_subtitle
              order_title
              accent_title
              order_text
              text
              order_link
              link_text
              link
              order_button
              text_button
              link_button
            }
          }
          ... on PrismicNewsPageDataBodyImageUnderText {
            id
            slice_type
            primary {
              padding
              image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 1440)
                  }
                }
              }
              order_logo
              logo {
                alt
                localFile {
                  publicURL
                }
              }
              order_icon
              icon
              order_subtitles
              accent_subtitle_1
              bg_subtitle_1
              accent_subtitle_2
              bg_subtitle_2
              order_title
              accent_title
              order_text
              text
              order_link
              link_text
              link
              order_button
              text_button
              link_button
            }
          }
          ... on PrismicNewsPageDataBodyTwoImagesUnderText {
            id
            slice_type
            primary {
              image_1 {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 645)
                  }
                }
              }
              image_2 {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 645)
                  }
                }
              }
              order_logo
              logo {
                alt
                localFile {
                  publicURL
                }
              }
              order_icon
              icon
              order_subtitles
              accent_subtitle_1
              bg_subtitle_1
              accent_subtitle_2
              bg_subtitle_2
              order_title
              accent_title
              order_text
              text
              order_link
              link_text
              link
              order_button
              text_button
              link_button
            }
          }
          ... on PrismicNewsPageDataBodyTwoImagesAndTextInRow {
            id
            slice_type
            primary {
              position_text
              color_bg_text
              title_text
              text
              text_link
              link
              image_1 {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 550)
                  }
                }
              }
              image_2 {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 550)
                  }
                }
              }
            }
          }
          ... on PrismicNewsPageDataBodyImageAndText41 {
            id
            slice_type
            primary {
              position_text
              color_bg_text
              title_text
              text
              text_link
              link
              image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 1110)
                  }
                }
              }
            }
          }
          ... on PrismicNewsPageDataBodyTextOnImageBlueBg {
            id
            slice_type
            primary {
              image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 1440)
                  }
                }
              }
              order_logo
              logo {
                alt
                localFile {
                  publicURL
                }
              }
              order_subtitle
              accent_subtitle
              bg_subtitle
              order_title
              main_title
              order_text
              text
            }
          }
          ... on PrismicNewsPageDataBodyText {
            id
            slice_type
            primary {
              order_logo
              logo {
                alt
                localFile {
                  publicURL
                }
              }
              order_icon
              icon
              order_subtitles
              accent_subtitle_1
              bg_subtitle_1
              accent_subtitle_2
              bg_subtitle_2
              order_title
              accent_title
              order_text
              text
              order_link
              link_text
              link
              order_button
              text_button
              link_button
            }
          }
          ... on PrismicNewsPageDataBodySmallSliderBigPhoto {
            id
            slice_type
            items {
              image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 1440)
                  }
                }
              }
              blue_bg
              order_logo
              logo {
                alt
                localFile {
                  publicURL
                }
              }
              order_subtitle
              accent_subtitle
              bg_subtitle
              order_title
              main_title
              order_text
              text
            }
          }
          ... on PrismicNewsPageDataBodySmallSlider {
            id
            slice_type
            items {
              image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 645)
                  }
                }
              }
              order_subtitle
              accent_subtitle
              bg_subtitle
              order_title
              main_title
              order_text
              text
            }
          }
          ... on PrismicNewsPageDataBodyBigSlider {
            id
            slice_type
            primary {
              order_logo
              logo {
                alt
                localFile {
                  publicURL
                }
              }
              order_icon
              icon
              order_subtitles
              accent_subtitle_1
              bg_subtitle_1
              accent_subtitle_2
              bg_subtitle_2
              order_title
              accent_title
              order_text
              text
              order_link
              link_text
              link
              order_button
              text_button
              link_button
            }
            items {
              photo {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 1340)
                  }
                }
              }
            }
          }
          ... on PrismicNewsPageDataBodyTicker {
            id
            slice_type
            primary {
              text
              color_text
              color_bg
              time
            }
          }
          ... on PrismicNewsPageDataBodyTimer {
            id
            slice_type
            primary {
              timer_title
              timer_title_color
              timer_date
              timer_bg_color
              timer_text
            }
          }
          ... on PrismicNewsPageDataBodyHeader {
            id
            slice_type
            primary {
              header
            }
          }
        }
      }
    }
  }
`;
