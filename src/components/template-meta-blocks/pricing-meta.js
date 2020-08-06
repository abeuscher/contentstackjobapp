import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import SEO from "./seo"

export default function PricingMeta() {
  const data = useStaticQuery(graphql`
    query RicingMetaQuery {
        csRedesignPricing {
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
    <SEO pageMeta={data.csRedesignPricing.metadata} url={data.csRedesignPricing.url}/>
  )
}
