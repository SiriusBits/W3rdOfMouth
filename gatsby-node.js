 const path = require('path');

// exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
//   const { createNodeField } = boundActionCreators;
//   if (node.internal.type === 'MarkdownRemark') {
//     const slug = createFilePath({
//       node,
//       getNode,
//       basePath: 'posts',
//     });
//     createNodeField({
//       node,
//       name: 'slug',
//       value: `/posts${slug}`,
//     });
//   }
// };
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulBlogPost {
          edges {
            node {
                slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
        createPage({
          path: node.slug,
          component: path.resolve('./src/posts/PostPage.js'),
          context: {
            slug: node.slug,
          },
        });
        resolve();
      });
    });
  });
};
