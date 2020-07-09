import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import BottomCTA from "./bottom-cta"

export default function DevBottomCTA() {
  const data = useStaticQuery(graphql`
    query DevBottomCtaQuery {
      csDevelopersCms {
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
    <BottomCTA data={data.csDevelopersCms.bottom_cta} />
  )
}
