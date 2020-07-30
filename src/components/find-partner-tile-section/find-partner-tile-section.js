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
      <div className="integrations-grid">
        <div className="filter-menu">
            <div className="max-width">

            </div>
        </div>
        <div className="partner-grid">
          {this.props.data.map((partner,idx)=>(<PartnerTile key={"partner-tile-"+idx} data={partner.node}/>))}
        </div>
      </div>
    )
  }
}
class PartnerTile extends Component {
    render() {
        return(
            <a className="partner-tile" href={this.props.data.url}>
                <div className="front-panel">
                    <h2>{this.props.data.title}</h2>
                </div>
            </a>
        )
    }
}