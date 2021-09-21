require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `ska-swim.ru`,
    description: `ska-swim`,
    author: `https://ska-swim.ru/`,
    siteUrl: `https://ska-swim.ru/`,
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 100,
          backgroundColor: `transparent`,
          placeholder: "blurred",
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ska-swim.ru`,
        short_name: `ska-swim.ru`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
        icon_options: {
          // For all the options available,
          // please see the section "Additional Resources" below.
          purpose: `any maskable`,
        },
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `ska-swim`,
        accessToken: `${process.env.API_KEY}`,
        schemas: {
          layout: require("./src/schemas/layout.json"),
          header: require("./src/schemas/layout.json"),
          main_page: require("./src/schemas/main_page.json"),
          schedule: require("./src/schemas/schedule.json"),
          coach: require("./src/schemas/coach.json"),
          group: require("./src/schemas/group.json"),
          page_constructor: require("./src/schemas/page_constructor.json"),
          contact: require("./src/schemas/contact.json"),
          news_page: require("./src/schemas/news_page.json"),
          heading_block: require("./src/schemas/heading_block.json"),
        },
        // shouldDownloadImage: () => true,
      },
    },
  ],
};
