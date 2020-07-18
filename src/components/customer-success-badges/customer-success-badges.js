import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import "./customer-success-badges.scss"

export default function CsCommitmentSection() {
    const data = useStaticQuery(graphql`
    query CustomerSuccessBadgesQuery {
      csCustomerSuccess {
        badge_section {
            header
            badges {
                url
            }
            primary_cta {
                text
                link
                classname
            }
            secondary_cta {
                text
                link
                classname
            }
        }
      }
    }
  `)
    return (
        <div className="cs-badge-section">
            <div className="max-width">
                <h2>{data.csCustomerSuccess.badge_section.header}</h2>
                <div class="badges">
                    {data.csCustomerSuccess.badge_section.badges.map((badge, idx) => {
                        let bgStyle = badge.url ? { "backgroundImage": "url('" + badge.url + "')" } : {}
                        return (<div className="badge" style={bgStyle}></div>)
                    })}
                </div>
                <div className="buttons">
                    <a className={"button " + data.csCustomerSuccess.badge_section.primary_cta.classname} href={data.csCustomerSuccess.badge_section.primary_cta.link}>
                        {data.csCustomerSuccess.badge_section.primary_cta.text}
                    </a>
                    <a className={"button knockout " + data.csCustomerSuccess.badge_section.secondary_cta.classname} href={data.csCustomerSuccess.badge_section.secondary_cta.link}>
                        {data.csCustomerSuccess.badge_section.secondary_cta.text}
                    </a>
                </div>
            </div>
        </div>
    )
}