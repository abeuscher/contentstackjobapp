import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import FeaturesIconSection from "./features-icon-section"


export default function CsIconSection() {
    const data = useStaticQuery(graphql`
    query CsIconQuery {
      csCustomerSuccess {
        icon_section {
            header
            buckets {
                header
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
            header={data.csCustomerSuccess.icon_section.header}
            buckets={data.csCustomerSuccess.icon_section.buckets}
        />
    )
}
