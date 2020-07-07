import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import SEO from "./seo"

export default function Hero() {
  const data = useStaticQuery(graphql`
    query homeMetaQuery {
      csHomepage {
        url
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
  `)

  return (
    <SEO pageMeta ={data.csHomepage.metadata} url={data.csHomepage.url}/>
  )
}
