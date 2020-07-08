import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import FeaturesIconSection from "./features-icon-section"

export default function FeaturesEnterpriseSection() {
    const data = useStaticQuery(graphql`
    query FeaturesEnterpriseQuery {
      csFeaturesMain {
        enterprise_section {
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
            header={data.csFeaturesMain.enterprise_section.header}
            copy={data.csFeaturesMain.enterprise_section.copy}
            buckets={data.csFeaturesMain.enterprise_section.buckets}
        />
    )
}
