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
            {data.homepage.acf.why_section.buckets.map((bucket,idx) => (
                <WhyBucket key={"why-bucket-"+idx} bucket={bucket} />
            ))}
        </div>
    )
}

class WhyBucket extends Component {
    render() {
        return (
            <div className="why-bucket {this.props.bucket.class}">
                <h2>{this.props.bucket.header}</h2>
                <p>{this.props.bucket.content}</p>
            </div>
        )
    }
}