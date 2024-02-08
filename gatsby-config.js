/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    title: `Canvas Philanthropy`,
    siteUrl: `https://canvasphilanthropy.com/`,
    description: `We support inspirational people instigate meaningful and powerful change in the world. Established in 2015, we shape, launch and grow philanthropic and corporate socially responsible initiatives.`,
    copyright: '©Canvas Philanthropy 2024',
    image: '/canvas-logo-bg.png',
  },
  plugins: [
    `gatsby-plugin-preload-fonts`,
    'gatsby-plugin-webpack-bundle-analyser-v2',
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
