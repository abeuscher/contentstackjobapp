import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import SEO from "./seo"

export default function CustomerSuccessMeta() {
  const data = useStaticQuery(graphql`
    query CustomerSuccessMetaQuery {
      csCustomerSuccess {
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
    <SEO pageMeta={data.csCustomerSuccess.metadata} url={data.csCustomerSuccess.url}/>
  )
}
