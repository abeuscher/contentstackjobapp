import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import BottomCTA from "./bottom-cta"

export default function BizBottomCTA() {
  const data = useStaticQuery(graphql`
    query BecomePartnerBottomCtaQuery {
      csBecomeAPartner {
        bottom_cta {
            header
            copy
        }      
      }
    }
  `)

  return (
    <BottomCTA data={data.csBecomeAPartner.bottom_cta} />
  )
}
