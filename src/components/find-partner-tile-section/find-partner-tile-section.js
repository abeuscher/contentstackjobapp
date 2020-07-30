import { useStaticQuery, graphql } from "gatsby"
import React, { Component } from "react"

import "./find-partner-tile-section.scss"

export default function FindPartnerTileSection() {
  const data = useStaticQuery(graphql`
    query PartnersTilesQuery {
        allCsPartnerPosts {
            edges {
                node {
                    title
                    url
                    find_partners_preview_section {
                        company_logo {
                            url
                        }
                        company_name
                        partner_type
                        location
                        short_description
                    }
                }
            }
        }
    }
  `)
  return (
    <div className="integrations-tiles">
      <div className="max-width">
        <PartnerGrid data={data.allCsPartnerPosts.edges} />
      </div>
    </div>
  )
}

class PartnerGrid extends Component {
  render() {
    return (
      <div className="integrations-grid max-width">
        <div className="filter-menu">
          MENU
        </div>
        <div className="partner-grid">
          {this.props.data.map((partner,idx)=>(<div key={"partner-tile"+idx} className="partner-tile"><h2>{partner.node.title}</h2></div>))}
        </div>
      </div>
    )
  }
}