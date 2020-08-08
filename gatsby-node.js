const path = require(`path`)

const buildPageQuery = `query csBuildPageQuery {
                    
                    #CMS Guide Query
                    allCsEvergreenDetailPages {
                      edges {
                        node {
                          title
                          url
                          banner_section {
                            title
                            desc
                            background_image {
                              url
                            }
                          }
                          content
                          tiles_section {
                            title
                            content
                            tiles {
                              title
                              desc
                              image {
                                url
                              }
                              cta {
                                title
                                link
                                open_in_new_tab
                                open_in_new_window
                              }
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

                    #Integrations Pages Query
                    allCsIntegrationsPages {
                      edges {
                        node {
                          title
                          url
                          about_section {
                            logo {
                              color_logo_with_text {
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
                            bg_desktop {
                              url
                            }
                            bg_mobile {
                              url
                            }
                            buckets {
                              header
                              copy
                            }
                          }
                          setup_section {
                            header
                            subhead
                            copy
                            bg_desktop {
                              url
                            }
                            bg_mobile {
                              url
                            }                            
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

                    #Respurce Gate Query
                    allCsResourceGates {
                      edges {
                        node {
                          title
                          url
                          page_content {
                            header
                            copy
                          }
                          form_section {
                            header_image {
                              url
                            }
                            header
                            form_id
                            resource_link
                            known_visitor_copy
                            show_resource_to_known_visitor
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

                    #Partner Pages
                    allCsPartnerPosts {
                      edges {
                        node {
                          title
                          url
                          find_partners_preview_section {
                            company_logo {
                              url
                            }
                            company_name
                            partner_type
                            location
                          }
                          company_section {
                            title
                            partner_type
                            headline
                            long_description
                            link {
                              title
                              href
                            }
                          }
                          contact_section {
                            partner_details {
                              title
                              desc
                            }
                            contact_cta {
                              title
                              open_in_new_tab_
                              link
                              email_subject
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
                      totalCount
                    }
                  }`;

exports.createPages = ({ actions, graphql }) => {

  const { createPage } = actions

  return graphql(buildPageQuery).then(result => {

    if (result.errors) {
      throw result.errors
    }

    // Pair Pages with Templates
    const pagesToBeBuilt = [
      {
        data: result.data.allCsBlogPost.edges,
        template: path.resolve(`src/templates/blog-post.js`)
      },
      {
        data: result.data.allCsHomeCompanyPressPost.edges,
        template: path.resolve(`src/templates/press-article.js`)
      },
      {
        data: result.data.allCsIntegrationsPages.edges,
        template: path.resolve(`src/templates/integration-page.js`)
      },
      {
        data: result.data.allCsEvergreenDetailPages.edges,
        template: path.resolve(`src/templates/cms-guide.js`)
      },
      {
        data: result.data.allCsPartnerPosts.edges,
        template: path.resolve(`src/templates/partner-page.js`)
      },
      {
        data: result.data.allCsResourceGates.edges,
        template: path.resolve(`src/templates/resource-gate.js`)
      },
    ]
    // Build Pages
    pagesToBeBuilt.forEach(page => {
      page.data.forEach(pageData => {
        createPage({
          path: `${pageData.node.url}`,
          component: page.template,
          context: pageData.node,
        })
      })
    })
  })
}