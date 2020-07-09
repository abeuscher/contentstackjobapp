import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import SEO from "./seo"

export default function Developers() {
  const data = useStaticQuery(graphql`
    query developersMetaQuery {
      csDevelopersCms {
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
    <SEO pageMeta={data.csDevelopersCms.metadata} url={data.csDevelopersCms.url}/>
  )
}
