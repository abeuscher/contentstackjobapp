module.exports = {
  siteMetadata: {
    title: `ContentStack`,
    description: `contentstack.com.`,
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
        'api_key': 'bltc5a09bf374882538',
        'delivery_token': 'cse163b933a95c7b2101fe2712',
        'environment':'development',
        'expediteBuild':false,
        'type_prefix': `cs`
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`
  ],
}