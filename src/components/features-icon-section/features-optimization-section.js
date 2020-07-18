import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import FeaturesIconSection from "./features-icon-section"

import "./features-optimization-section.scss"

export default function FeaturesOptimizationSection() {
    const data = useStaticQuery(graphql`
    query FeaturesOptimizationQuery {
      csFeaturesMain {
        optimization_section {
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
            className="features-optimization"
            header={data.csFeaturesMain.optimization_section.header}
            copy={data.csFeaturesMain.optimization_section.copy}
            buckets={data.csFeaturesMain.optimization_section.buckets}
        />
    )
}
