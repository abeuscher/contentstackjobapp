import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import "./home-bottom-cta.scss"

export default function RRSection() {
    const data = useStaticQuery(graphql`
    query BottomCtaQuery {
      homepage {
        acf {
            bottom_cta {
                header,
                top_cta_text,
                top_cta_target,
                bottom_cta_text,
                bottom_cta_target 
              }
        }
      }
    }
  `)
    return (
        <div className="bottom-cta">
            <h2>{data.homepage.acf.bottom_cta.header}</h2>
            <a className="button" href={data.homepage.acf.bottom_cta.top_cta_target}>{data.homepage.acf.bottom_cta.top_cta_text}</ a>
            <a href={data.homepage.acf.bottom_cta.bottom_cta_target}>{data.homepage.acf.bottom_cta.bottom_cta_text}</ a>
        </div>
    )
}