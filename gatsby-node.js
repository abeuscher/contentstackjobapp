const path = require(`path`)

const buildPageQuery = `query csBuildPageQuery {
                    
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
  })
}