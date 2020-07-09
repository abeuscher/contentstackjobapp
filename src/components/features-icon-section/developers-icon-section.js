import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import FeaturesIconSection from "./features-icon-section"

export default function FeaturesEnterpriseSection() {
    const data = useStaticQuery(graphql`
    query DevIconQuery {
      csDevelopersCms {
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
            header={data.csDevelopersCms.icon_section.header}
            copy={data.csDevelopersCms.icon_section.copy}
            buckets={data.csDevelopersCms.icon_section.buckets}
        />
    )
}
