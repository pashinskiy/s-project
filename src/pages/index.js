import * as React from "react";
import { graphql } from "gatsby";

import { GlobalStateContext } from "../context/GlobalContextProvider";

import Layout from "../components/layout";
import Seo from "../components/seo";
import FirstScreen from "../components/mainPage/firstScreen";
import SwitchingBlock from "../components/mainPage/switchingBlock";
import Constructor from "../components/constructor";

const IndexPage = ({ data }) => {
  const state = React.useContext(GlobalStateContext);

  return (
    <Layout>
      <Seo title="СКА Swim" />
      <FirstScreen />
      <SwitchingBlock />

      {state.versionSite === "sport" ? (
        <Constructor slices={data.prismicMainPage.data.body} />
      ) : null}
      {state.versionSite === "fitnes" ? (
        <Constructor slices={data.prismicMainPage.data.body1} />
      ) : null}
    </Layout>
  );
};

/**
 * Главная страница
 * @module src/page/index
 * @param {Object} props - объект свойств компонента React
 * @param {Object} props.data - объект данных полученный из prismic
 */
export default IndexPage;

export const query = graphql`
  {
    prismicMainPage {
      data {
        body {
          ... on PrismicMainPageDataBodySchedule {
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
          ... on PrismicMainPageDataBodyGrayPanelWithBlocksText {
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
          ... on PrismicMainPageDataBodyOurTeam {
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
                            gatsbyImageData
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
          ... on PrismicMainPageDataBodyTextOnImage {
            id
            slice_type
            primary {
              image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData
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
          ... on PrismicMainPageDataBodyImageSideText {
            id
            slice_type
            primary {
              position
              image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData
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
          ... on PrismicMainPageDataBodyImageUnderText {
            id
            slice_type
            primary {
              padding
              image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData
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
          ... on PrismicMainPageDataBodyTwoImagesUnderText {
            id
            slice_type
            primary {
              image_1 {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              image_2 {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData
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
          ... on PrismicMainPageDataBodyTwoImagesAndTextInRow {
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
                    gatsbyImageData
                  }
                }
              }
              image_2 {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
          ... on PrismicMainPageDataBodyImageAndText41 {
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
                    gatsbyImageData
                  }
                }
              }
            }
          }
          ... on PrismicMainPageDataBodyTextOnImageBlueBg {
            id
            slice_type
            primary {
              image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData
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
          ... on PrismicMainPageDataBodyText {
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
          ... on PrismicMainPageDataBodySmallSliderBigPhoto {
            id
            slice_type
            items {
              image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData
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
          ... on PrismicMainPageDataBodySmallSlider {
            id
            slice_type
            items {
              image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData
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
          ... on PrismicMainPageDataBodyBigSlider {
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
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
        body1 {
          ... on PrismicMainPageDataBody1Schedule {
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
          ... on PrismicMainPageDataBody1GrayPanelWithBlocksText {
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
          ... on PrismicMainPageDataBody1OurTeam {
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
                            gatsbyImageData
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
          ... on PrismicMainPageDataBody1TextOnImage {
            id
            slice_type
            primary {
              image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData
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
          ... on PrismicMainPageDataBody1ImageSideText {
            id
            slice_type
            primary {
              position
              image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData
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
          ... on PrismicMainPageDataBody1ImageUnderText {
            id
            slice_type
            primary {
              padding
              image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData
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
          ... on PrismicMainPageDataBody1TwoImagesUnderText {
            id
            slice_type
            primary {
              image_1 {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              image_2 {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData
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
          ... on PrismicMainPageDataBody1TwoImagesAndTextInRow {
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
                    gatsbyImageData
                  }
                }
              }
              image_2 {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
          ... on PrismicMainPageDataBody1ImageAndText41 {
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
                    gatsbyImageData
                  }
                }
              }
            }
          }
          ... on PrismicMainPageDataBody1TextOnImageBlueBg {
            id
            slice_type
            primary {
              image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData
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
          ... on PrismicMainPageDataBody1Text {
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
          ... on PrismicMainPageDataBody1SmallSliderBigPhoto {
            id
            slice_type
            items {
              image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData
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
          ... on PrismicMainPageDataBody1SmallSlider {
            id
            slice_type
            items {
              image {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData
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
          ... on PrismicMainPageDataBody1BigSlider {
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
                    gatsbyImageData
                  }
                }
              }
            }
          }
          ... on PrismicMainPageDataBody1SliderWithTitleAndDescription {
            id
            slice_type
            primary {
              title_block
            }
            items {
              image_item {
                alt
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              subtitle_item
              title_item
              text_item
            }
          }
        }
      }
    }
  }
`;
