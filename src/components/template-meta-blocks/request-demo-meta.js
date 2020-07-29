import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import SEO from "./seo"

export default function RequestDemoMeta() {
  const data = useStaticQuery(graphql`
    query requestDemoMetaQuery {
      csRequestDemo {
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
    <SEO pageMeta={data.csRequestDemo.metadata} url={data.csRequestDemo.url}/>
  )
}
