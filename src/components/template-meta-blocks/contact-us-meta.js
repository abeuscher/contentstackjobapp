import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import SEO from "./seo"

export default function ContactUsMeta() {
  const data = useStaticQuery(graphql`
    query contactUsMetaQuery {
      csContactUs {
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
    <SEO pageMeta={data.csContactUs.metadata} url={data.csContactUs.url}/>
  )
}
