const path = require(`path`)

const buildPageQuery = `query csBuildPageQuery {
                    

                    #Integrations Pages Query
                    allCsIntegrationsPages {
                      edges {
                        node {
                          title
                          url
                          about_section {
                            logo {
                              color_logo {
                                url
                              }
                            }
                            copy
                            header_image_mobile {
                              url
                            }
                            header_image {
                              url
                            }
                          }
                          overview_section {
                            header
                            copy
                            thumb {
                              url
                            }
                          }
                          use_cases_section {
                            header
                            subhead
                            buckets {
                              header
                              copy
                            }
                          }
                          setup_section {
                            header
                            subhead
                            copy
                          }
                          bottom_section {
                            header
                            copy
                            bg_image {
                              url
                            }
                          }
                          metadata {
                            page_title
                            page_description
                            page_thumb {
                                url
                            }
                            twitter_title
                            twitter_description
                            opengraph_title
                            opengraph_description
                          }
                        }
                      }
                    }

                    #Press Post Query
                    allCsHomeCompanyPressPost {
                      edges {
                        node {
                          title
                          url
                          date
                          seo {
                              description
                          }
                        }
                      }        
                    }

                    # Blog Post Query
                    allCsBlogPost(limit: 200, sort: {fields: date, order: DESC}) { 
                      edges {
                        node {
                          id
                          title
                          url
                          date
                          image {
                            url
                            title
                          }
                          author {
                            title
                            uid
                          }
                          body
                          category {
                            title
                          }
                        }
                      }
                      totalCount
                    }
                  }`;

exports.createPages = ({ actions, graphql }) => {

  const { createPage } = actions

  return graphql(buildPageQuery).then(result => {

    if (result.errors) {
      throw result.errors
    }

    // Build Blog Posts
    result.data.allCsBlogPost.edges.forEach(blogPost => {
      createPage({
        path: `${blogPost.node.url}`,
        component: path.resolve(`src/templates/blog-post.js`),
        context: blogPost.node,
      })
    })
    result.data.allCsHomeCompanyPressPost.edges.forEach(blogPost => {
      createPage({
        path: `${blogPost.node.url}`,
        component: path.resolve(`src/templates/press-article.js`),
        context: blogPost.node,
      })
    })
    result.data.allCsIntegrationsPages.edges.forEach(blogPost => {
      createPage({
        path: `${blogPost.node.url}`,
        component: path.resolve(`src/templates/integration-page.js`),
        context: blogPost.node,
      })
    })
  })
}