import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import FeaturesIconSection from "./features-icon-section"

export default function BusnessIconSection() {
    const data = useStaticQuery(graphql`
    query BizIconQuery {
      csBusinessCms {
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
            header={data.csBusinessCms.icon_section.header}
            copy={data.csBusinessCms.icon_section.copy}
            buckets={data.csBusinessCms.icon_section.buckets}
        />
    )
}
