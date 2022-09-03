module.exports = {
  siteMetadata: {
    title: `Eduardo Scudeller Libardi Webdev Portfolio`,
    description: `Eduardo Scudeller Libardi WebDev Portfolio showing of some frontend and backend projects`,
    titleTemplate: ` | Eduardo S. Libardi Portfolio`,
    twitterUsername: `@scudella`,
    image: `/mainImg.png`,
    // siteUrl: `https://scudella-portfolio.netlify.app`,
    siteUrl: `https://portfolio.scudella.net.br`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        collectionTypes: [`job`, `project`],
        singleTypes: [`about`],
      },
    },
  ],
}
