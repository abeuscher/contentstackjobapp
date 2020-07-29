import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import SEO from "./seo"

export default function TryForFreeMeta() {
  const data = useStaticQuery(graphql`
    query tryForFreeMetaQuery {
      csTryForFree {
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
    <SEO pageMeta={data.csTryForFree.metadata} url={data.csTryForFree.url}/>
  )
}
