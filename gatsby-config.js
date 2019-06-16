/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
/* eslint-disable */
module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    "gatsby-plugin-less",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Theo Browne`,
        short_name: `Theo Browne`,
        start_url: `/`,
        background_color: `#E8DDFF`,
        theme_color: `#746f80`,
        display: `standalone`,
      },
    },
  ],
  siteMetadata: {
    description: "Theo Browne, full stack software engineer at Twitch",
    title: "Theo Browne",
    url: "https://t3.gg",
    image: "static/social-media.png",
  },
}
