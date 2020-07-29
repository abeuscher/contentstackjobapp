import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import SEO from "./seo"

export default function CmsGuidesMeta() {
  const data = useStaticQuery(graphql`
    query cmsGuidesMainMetaQuery {
      csCmsGuidesMain {
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
    <SEO pageMeta={data.csCmsGuidesMain.metadata} url={data.csCmsGuidesMain.url}/>
  )
}
