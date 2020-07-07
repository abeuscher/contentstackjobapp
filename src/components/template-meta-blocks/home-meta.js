import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import SEO from "./seo"

export default function Hero() {
  const data = useStaticQuery(graphql`
    query homeMetaQuery {
      csHomepage {
        metadata {
          page_title
          page_description
          page_thumb {
              url
          }
          twitter_title
          twitter_description
          twitter_thumb {
              url
          }
          opengraph_title
          opengraph_description
          opengraph_thumb {
              url
          }
        }        
      }
    }
  `)

  return (
    <SEO pageMeta ={data.csHomepage.metadata}/>
  )
}
