const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: 'Story Bangor',
    siteUrl: 'https://www.storybangor.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [autoprefixer()],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-112042091-1',
      },
    },
    {
    resolve: `gatsby-plugin-sitemap`
    },
  ],
  pathPrefix: '/playground',
};
