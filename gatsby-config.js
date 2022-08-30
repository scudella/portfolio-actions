module.exports = {
  siteMetadata: {
    title: `Eduardo Scudeller Libardi Portfolio`,
    description: `Eduardo Scudeller Libardi WebDev Portfolio built with GatsbyJS and Strapi`,
    titleTemplate: `%s | Eduardo S. Libardi Portfolio`,
    siteUrl: `https://portfolio.scudella.net.br`,
    // siteUrl: `https://scudella-portfolio.netlify.app`,
    twitterUsername: `@scudella`,
    image: `/mainImg.png`,
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
    `gatsby-plugin-react-helmet`,
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
