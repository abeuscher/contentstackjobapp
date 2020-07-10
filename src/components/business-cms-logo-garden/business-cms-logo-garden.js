import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import "./business-cms-logo-garden.scss"

export default function BizLogoGarden() {
    const data = useStaticQuery(graphql`
    query BusinessLogoQuery {
      csBusinessCms {
        logo_section {
            header
            logos {
                black_and_white_logo {
                    url
                }
            }
        }
      }
    }
  `)

    return (
        <div className="business-logo-garden max-width">
            <h2>{data.csBusinessCms.logo_section.header}</h2>
            <div className="logos">
                {data.csBusinessCms.logo_section.logos.map((logo, idx) => {
                    let bgStyle = logo.black_and_white_logo ? { "backgroundImage": "url('" + logo.black_and_white_logo.url + "')" } : {}
                    return (<div key={"biz-logo-" + idx} className="logo" style={bgStyle}></div>)
                })}
            </div>
        </div>
    )
}
