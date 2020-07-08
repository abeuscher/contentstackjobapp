import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import BottomCTA from "./bottom-cta"

export default function FeaturesMeta() {
  const data = useStaticQuery(graphql`
    query featuresBottomCtaQuery {
      csFeaturesMain {
        bottom_cta {
            header
            primary_cta {
                text
                link
                classname
            }
            secondary_cta {
                text
                link
                classname
            }
            bg_image {
                url
            }
        }      
      }
    }
  `)

  return (
    <BottomCTA data={data.csFeaturesMain.bottom_cta} />
  )
}
