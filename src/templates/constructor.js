import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import BreadCrumbs from "../components/breadCrumbs";
import Constructor from "../components/constructor";

const ConstructorPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Новости" />
      <BreadCrumbs
        links={[
          { title: "Новости", href: "/news" },
          {
            title: data.prismicPageConstructor.data.title,
            href: `/${data.prismicPageConstructor.data.uid}`,
          },
        ]}
      />

      <Constructor slices={data.prismicPageConstructor.data.body} />
    </Layout>
  );
};

/**
 * Страница конструктор
 * @module src/templates/constructor
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.data - объект данных полученный из prismic
 */
export default ConstructorPage;

export const query = graphql`
  query Constructor($uid: String!) {
    prismicPageConstructor(uid: { eq: $uid }) {
      id
      uid
      data {
        title
        body {
          ... on PrismicPageConstructorDataBodySchedule {
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
          ... on PrismicPageConstructorDataBodyGalery {
            id
            slice_type
            primary {
              accent_heading {
                text
              }
              accent_heading_color
              gallery_header {
                text
              }
            }
            items {
              gallery_photo {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 1112)
                  }
                }
              }
            }
          }
          ... on PrismicPageConstructorDataBodyGrayPanelWithBlocksText {
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
          ... on PrismicPageConstructorDataBodyOurTeam {
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
          ... on PrismicPageConstructorDataBodyTextOnImage {
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
          ... on PrismicPageConstructorDataBodyImageSideText {
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
          ... on PrismicPageConstructorDataBodyImageUnderText {
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
          ... on PrismicPageConstructorDataBodyTwoImagesUnderText {
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
          ... on PrismicPageConstructorDataBodyTwoImagesAndTextInRow {
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
          ... on PrismicPageConstructorDataBodyImageAndText41 {
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
          ... on PrismicPageConstructorDataBodyTextOnImageBlueBg {
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
          ... on PrismicPageConstructorDataBodyText {
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
          ... on PrismicPageConstructorDataBodySmallSliderBigPhoto {
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
          ... on PrismicPageConstructorDataBodySmallSlider {
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
          ... on PrismicPageConstructorDataBodyBigSlider {
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
          ... on PrismicPageConstructorDataBodyTicker {
            id
            slice_type
            primary {
              text
              color_text
              color_bg
              time
            }
          }
          ... on PrismicPageConstructorDataBodyTimer {
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
          ... on PrismicPageConstructorDataBodyHeader {
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
