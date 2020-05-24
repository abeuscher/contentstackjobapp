module.exports = {
  siteMetadata: {
    title: `ContentStack`,
    description: `Application for job. I used Gatsby starter for base.`,
    author: `Al Beuscher`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-apiserver",
      options: {
        url: `https://beuscher.net/wp-json/wp/v2/cshomepage`,
        method: "get",
        name: `homepage`,
        allowCache: false,
        localSave: true,
        path: `${__dirname}/src/data/homepage/`,
        verboseOutput: false
  
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`
  ],
}