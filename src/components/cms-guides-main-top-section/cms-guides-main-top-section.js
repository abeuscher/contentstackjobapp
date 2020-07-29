import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import "./cms-guides-main-top-section.scss"

export default function CmsGuidesMainTopSection() {
    const data = useStaticQuery(graphql`
    query cmsGuidesMainTopSectionQuery {
      csCmsGuidesMain {
        top_section {
            header
            copy
        }
      }
    }
  `)

    return (
        <div className="top-section">
            <div class="max-width">
                <h2>{data.csCmsGuidesMain.top_section.header}</h2>
                <p>{data.csCmsGuidesMain.top_section.copy}</p>
            </div>
        </div>
    )
}
