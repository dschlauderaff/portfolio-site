module.exports = {
  siteMetadata: {
    title: `Dave's Gatsby blog`,
    author: `Dave Schlauderaff`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [] //gatsby remark transformer has plugins available; they go here
      }
    },
  ],
}
