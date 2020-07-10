import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import BottomCTA from "./bottom-cta"

export default function PartnersBottomCTA() {
  const data = useStaticQuery(graphql`
    query partnersMainBottomCtaQuery {
      csPartnersMain {
        bottom_cta {
            header
            copy
            primary_cta {
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
    <BottomCTA data={data.csPartnersMain.bottom_cta} />
  )
}
