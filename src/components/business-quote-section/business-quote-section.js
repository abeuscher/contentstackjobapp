import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import "./business-quote-section.scss"

export default function BizQuoteSection() {
    const data = useStaticQuery(graphql`
    query bizQuoteQuery {
      csBusinessCms {
        quote_section {
            header
            quote
            quote_source
            cta {
                text
                link
                classname
            }
        }
      }
    }
  `)


    return (
        <div className="business-quote-section max-width">
            <h2>{data.csBusinessCms.quote_section.header}</h2>
            <div className="quote">
                <p>{data.csBusinessCms.quote_section.quote}</p>
                <cite>{data.csBusinessCms.quote_section.quote_source}</cite>
            </div>
            <a
                className={"button knockout" + data.csBusinessCms.quote_section.cta.classname}
                href={data.csBusinessCms.quote_section.cta.link}>
                {data.csBusinessCms.quote_section.cta.text}
            </a>
        </div>
    )
}
