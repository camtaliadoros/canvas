/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Canvas Philanthropy 2024`,
    siteUrl: `https://canvasphilanthropy.com/`,
    description: `We support inspirational people instigate meaningful and powerful change in the world. Established in 2015, we shape, launch and grow philanthropic and corporate socially responsible initiatives.`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-netlify`,
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
            name: `ABCNormal Book`,
            file: `https://db.onlinewebfonts.com/c/bad5d85dec62adc89f2f88300b74dd63?family=ABC+Normal+Book`,
          },
          {
            name: `Ivy Ora`,
            file: `https://use.typekit.net/emz5qfb.css`,
          },
        ],
      },
    },
  ],
};
