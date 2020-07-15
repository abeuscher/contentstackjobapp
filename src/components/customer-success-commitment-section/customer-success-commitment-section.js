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
    let dots = <svg className="dots"><pattern id="pattern" x="0" y="0" width="150" height="50" patternUnits="userSpaceOnUse"><circle className="round" cx="15" cy="15" r="15" stroke="none" fill="#5a20b9"></circle></pattern><rect className="rect" x="0" y="0" stroke="#630" strokeWidth="0" fill="url(#pattern)"></rect></svg>
    return (
        <div className="cs-commitment-section">
            <div className="max-width">
                <h2>{data.csCustomerSuccess.commitment_section.header}</h2>
                <CBucket data={data.csCustomerSuccess.commitment_section.buckets[0]}/>
                {dots}
                <div className="bg" style={bgStyle}></div>
                <CBucket data={data.csCustomerSuccess.commitment_section.buckets[1]}/>
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