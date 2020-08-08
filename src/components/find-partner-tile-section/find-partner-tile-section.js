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
    <div className="find-partner-tiles">
      <div className="max-width">
        <PartnerGrid data={data.allCsPartnerPosts.edges} />
      </div>
    </div>
  )
}

class PartnerGrid extends Component {
  render() {
   
    return (
      <div className="find-partner-widget">
        <div className="filter-menu find-partner-menu">
            <div className="max-width">
              <p>SEARCH</p>
            </div>
        </div>
        <div className="find-partner-grid">
          {this.props.data.map((partner,idx)=>(<PartnerTile key={"partner-tile-"+idx} data={partner.node}/>))}
        </div>
      </div>
    )
  }
}
class PartnerTile extends Component {
    render() {
      let logoStyle = this.props.data.find_partners_preview_section.company_logo ? {"backgroundImage":"url('"+this.props.data.find_partners_preview_section.company_logo.url+"')"} : {}
        return(
            <a className="partner-tile" href={this.props.data.url}>
                <div className="inner">
                  <div class="logo" style={logoStyle}></div>
                    <h3>{this.props.data.title}</h3>
                    <p><strong>{this.props.data.find_partners_preview_section.partner_type}</strong></p>
                    <p><strong>{this.props.data.find_partners_preview_section.location}</strong></p>
                    <p>{this.props.data.find_partners_preview_section.short_description}</p>
                </div>
            </a>
        )
    }
}