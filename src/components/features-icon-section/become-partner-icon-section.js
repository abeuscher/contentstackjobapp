import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import FeaturesIconSection from "./features-icon-section"

export default function BusnessIconSection() {
    const data = useStaticQuery(graphql`
    query BecomePartnerIconQuery {
      csBecomeAPartner {
        icon_section {
            header
            copy
            buckets {
                header
                copy
                icon {
                    url
                }
            }
        }        
      }
    }
  `)

    return (
        <FeaturesIconSection
            header={data.csBecomeAPartner.icon_section.header}
            copy={data.csBecomeAPartner.icon_section.copy}
            buckets={data.csBecomeAPartner.icon_section.buckets}
        />
    )
}
