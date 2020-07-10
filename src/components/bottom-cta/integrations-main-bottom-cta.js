import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import BottomCTA from "./bottom-cta"

export default function IntegrationsMainBottomCTA() {
  const data = useStaticQuery(graphql`
    query integrationsBottomCtaQuery {
      csIntegrationsMain {
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
    <BottomCTA data={data.csIntegrationsMain.bottom_cta} />
  )
}
