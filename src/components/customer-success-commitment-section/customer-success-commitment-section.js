import { useStaticQuery, graphql } from "gatsby"
import React, { Component } from "react"

import "./customer-success-commitment-section.scss"

export default function CsCommitmentSection() {
    const data = useStaticQuery(graphql`
    query CustomerSuccessCommitmentQuery {
      csCustomerSuccess {
        commitment_section {
            header
            bg_image {
                url
            }
            bg_dots {
                url
            }
            buckets {
                header
                copy
                bullets
            }
        }
      }
    }
  `)
    let bgStyle = data.csCustomerSuccess.commitment_section.bg_image ? { "backgroundImage": "url('" + data.csCustomerSuccess.commitment_section.bg_image.url + "')" } : {}
    let dotBG = data.csCustomerSuccess.commitment_section.bg_dots ? { "backgroundImage": "url('" + data.csCustomerSuccess.commitment_section.bg_dots.url + "')" } : {}
    return (
        <div className="cs-commitment-section">
            <div className="max-width">
                <h2>{data.csCustomerSuccess.commitment_section.header}</h2>
                <CBucket data={data.csCustomerSuccess.commitment_section.buckets[0]} />
            </div>
            <div className="dots" style={dotBG}></div>
            <div className="bg" style={bgStyle}></div>
            <div className="max-width">
                <CBucket data={data.csCustomerSuccess.commitment_section.buckets[1]} />
            </div>
        </div>
    )
}

class CBucket extends Component {
    render() {
        return (
            <div className="cs-commit-bucket">
                <h3>{this.props.data.header}</h3>
                <p>{this.props.data.copy}</p>
                <ul>
                    {this.props.data.bullets.map((bullet, idx) => (
                        <li key={"bullet-" + idx}>{bullet}</li>
                    ))}
                </ul>
            </div>
        )
    }
}