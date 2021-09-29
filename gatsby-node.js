const path = require("path");

// MAKE POST PAGE
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    query pageBuild {
      allPrismicNewsPage {
        edges {
          node {
            uid
          }
        }
      }
      allPrismicPageConstructor {
        edges {
          node {
            uid
          }
        }
      }
    }
  `);

  console.log("News page build");
  const news = path.resolve("src/templates/news.js");

  pages.data.allPrismicNewsPage.edges.forEach((edge) => {
    console.log(edge.node.uid);
    createPage({
      path: `/news/${edge.node.uid}/`,
      component: news,
      context: {
        uid: edge.node.uid,
      },
    });
  });

  console.log("Constructors page build");
  const constructor = path.resolve("src/templates/constructor.js");

  pages.data.allPrismicPageConstructor.edges.forEach((edge) => {
    console.log(edge.node.uid);
    createPage({
      path: `/${edge.node.uid}/`,
      component: constructor,
      context: {
        uid: edge.node.uid,
      },
    });
  });
};
