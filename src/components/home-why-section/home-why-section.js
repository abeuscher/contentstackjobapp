import { useStaticQuery, graphql } from "gatsby"
import React, { Component } from "react"
import "./home-why-section.scss"

export default function HomeWhySection() {
  const data = useStaticQuery(graphql`
    query WhySectionQuery {
      homepage {
        acf {
            why_section {
                header,
                buckets {
                  header
                  content
                  class
                },
              }
        }
      }
    }
  `)
  return (
    <div className="why-section">
      <h2>{data.homepage.acf.why_section.header}</h2>
      <div class="buckets max-width">
        {data.homepage.acf.why_section.buckets.map((bucket, idx) => (
          <WhyBucket key={"why-bucket-" + idx} bucket={bucket} />
        ))}
      </div>
    </div>
  )
}

class WhyBucket extends Component {
  render() {
    return (
      <div className={"why-bucket" + this.props.bucket.class}>
        <div className="inner">
          <h3>{this.props.bucket.header}</h3>
          <p>{this.props.bucket.content}</p>
        </div>
      </div>
    )
  }
}