require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteUrl = process.env.MYURL || `https://portfolio.scudella.net.br`

module.exports = {
  siteMetadata: {
    title: `Eduardo Scudeller Libardi Webdev Portfolio`,
    description: `Eduardo Scudeller Libardi WebDev Portfolio showing of some frontend and backend projects`,
    titleTemplate: ` | Eduardo S. Libardi Portfolio`,
    twitterUsername: `@scudella`,
    image: `/mainImg.png`,
    siteUrl: siteUrl,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        accessToken: process.env.STRAPI_TOKEN,
        apiURL: process.env.STRAPI_API_URL || `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        collectionTypes: [`job`, `project`],
        singleTypes: [`about`],
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }`,
        resolveSiteUrl: () => siteUrl,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
  trailingSlash: "always",
}
