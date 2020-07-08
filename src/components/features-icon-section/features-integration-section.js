import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import FeaturesIconSection from "./features-icon-section"

export default function FeaturesIntegrationSection() {
    const data = useStaticQuery(graphql`
    query FeaturesIntegrationQuery {
      csFeaturesMain {
        integrations_section {
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
            header={data.csFeaturesMain.integrations_section.header}
            copy={data.csFeaturesMain.integrations_section.copy}
            buckets={data.csFeaturesMain.integrations_section.buckets}
        />
    )
}
