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
                link
                icon {
                    url
                }
            }
        }
      }
    }
  `)


    return (
        <div className="developers-language-section">
            <div className="max-width">
                <h2 className="small-header">{data.csDevelopersCms.language_section.header}</h2>
                <p>{data.csDevelopersCms.language_section.copy}</p>
                <div className="icons">
                    {data.csDevelopersCms.language_section.icons.map((icon, idx) => {
                        let bgStyle = icon.icon ? { "backgroundImage": "url('" + icon.icon.url + "')" } : {}
                        return (<a className="lang-icon-bucket" key={"dev-lang-icon-" + idx} href={icon.link}>
                            <div className="lang-icon" style={bgStyle}></div>
                            <p>{icon.text}</p>
                        </a>)
                    })}
                </div>
            </div>
        </div>
    )
}
