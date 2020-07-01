import { useStaticQuery, graphql } from "gatsby"
import React, { Component } from "react"
import "./home-why-section.scss"

export default function HomeWhySection() {
  const data = useStaticQuery(graphql`
    query WhySectionQuery {
      csHomepage {
        why_section {
          header
          copy
          buckets {
            header
            copy
          }
        }
      }
    }
  `)
  return (
    <div className="why-section">
      <h2>{data.csHomepage.why_section.header}</h2>
      <div className="buckets max-width">
        {data.csHomepage.why_section.buckets.map((bucket, idx) => (
          <WhyBucket key={"why-bucket-" + idx} bucket={bucket} />
        ))}
      </div>
    </div>
  )
}

class WhyBucket extends Component {
  render() {
    return (
      <div className="why-bucket">
        <div className="inner">
          <h3>{this.props.bucket.header}</h3>
          <p>{this.props.bucket.copy}</p>
        </div>
      </div>
    )
  }
}