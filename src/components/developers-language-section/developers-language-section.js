import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import "./developers-language-section.scss"

export default function DevLangSection() {
    const data = useStaticQuery(graphql`
    query DevLangQuery {
      csDevelopersCms {
        language_section {
            header
            copy
            icons {
                text
                icon {
                    url
                }
            }
        }
      }
    }
  `)


    return (
        <div className="developers-language-section max-width">
            <h2>{data.csDevelopersCms.language_section.header}</h2>
            <p>{data.csDevelopersCms.language_section.copy}</p>
            <div className="icons">
                {data.csDevelopersCms.language_section.icons.map((icon, idx) => {
                    let bgStyle = icon.icon ? { "backgroundImage": "url('" + icon.icon.url + "')" } : {}
                    return (<a key={"dev-lang-icon-"+idx} className="icon" style={bgStyle} href={icon.link}>{icon.text}</a>)
                })}
            </div>
        </div>
    )
}
