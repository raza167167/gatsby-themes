require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Gatsby Themes by LekoArts`,
    siteTitleAlt: `Free & Open-Source Gatsby Themes by LekoArts`,
    siteUrl: `https://themes.lekoarts.de`,
    siteDescription: `Get high-quality and customizable Gatsby themes to quickly bootstrap your next site! These professionally created open-source themes let you convert visitors to customers and grow your business.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@lekoarts_de`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Free & Open-Source Gatsby Themes by LekoArts`,
        short_name: `GatsbyThemes`,
        description: `Get high-quality and customizable Gatsby themes to quickly bootstrap your next site! These professionally created open-source themes let you convert visitors to customers and grow your business.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#5A67D8`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
