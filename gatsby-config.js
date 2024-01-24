/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Canvas Philanthropy`,
    siteUrl: `https://canvasphilanthropy.com/`,
    description: `We support inspirational people instigate meaningful and powerful change in the world. Established in 2015, we shape, launch and grow philanthropic and corporate socially responsible initiatives.`,
    copyright: '©Canvas Philanthropy 2024',
  },
  plugins: [
    {
      resolve: 'gatsby-remark-images-grid',
      options: {
        className: 'myCustomClassName',
        gridGap: '20px',
        margin: '20px auto',
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: 'dominantColor',
          backgroundColor: `transparent`,
        },
      },
    },

    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Ivy Ora`,
            file: `https://use.typekit.net/emz5qfb.css`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-line-breaks`],
      },
    },
  ],
};
