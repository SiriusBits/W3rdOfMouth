module.exports = {
  siteMetadata: {
    title: 'W3rd of Mouth',
    description: 'A blog that speaks to you',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_separator: `<!-- end -->`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
};