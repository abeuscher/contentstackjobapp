module.exports = {
  siteMetadata: {
    title: `ContentStack`,
    description: `Application for job. I used Gatsby starter for base.`,
    author: `Al Beuscher`,
    siteUrl:`https://applicationforcontentstack.xyz/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-contentstack",
      options: {
        'api_key': 'blt7ef002f7ea3b43f1',
        'delivery_token': 'cs30a96efed683013e4297e173',
        'environment':'development',
        'expediteBuild':false,
        'type_prefix': `cs`
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`
  ],
}