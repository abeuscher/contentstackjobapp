import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import "./become-partner-top-section.scss"

export default function BecomePartnerTopSection() {
    const data = useStaticQuery(graphql`
    query BecomePartnerTopSectionQuery {
      csBecomeAPartner {
        top_section {
            copy
            cta {
                text
                link
                classname
            }
        }
      }
    }
  `)

    return (
        <div className="top-section">
            <div class="max-width">
                <p>{data.csBecomeAPartner.top_section.copy}</p>
                <a href={data.csBecomeAPartner.top_section.cta.link} className={data.csBecomeAPartner.top_section.cta.classname}>{data.csBecomeAPartner.top_section.cta.text}</a>
            </div>
        </div>
    )
}
