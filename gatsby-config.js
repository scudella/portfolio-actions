module.exports = {
  siteMetadata: {
    title: `Scudella WebDev Portfolio`,
    description: `Scudella WebDev Portfolio built with GatsbyJS and Strapi`,
    titleTemplate: `%s | Scudella Portfolio`,
    url: `https://scudella-portfolio.netlify.app`,
    twitterUsername: `@scudella`,
    image: `/mainImage.jpg`,
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
