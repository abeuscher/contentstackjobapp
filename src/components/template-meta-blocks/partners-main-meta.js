import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import SEO from "./seo"

export default function PartnersMainMeta() {
  const data = useStaticQuery(graphql`
    query partnersMetaQuery {
      csPartnersMain {
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
    <SEO pageMeta={data.csPartnersMain.metadata} url={data.csPartnersMain.url}/>
  )
}
