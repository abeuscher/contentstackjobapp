import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import "./developers-diagram-section.scss"

export default function DevDiagram() {
    const data = useStaticQuery(graphql`
    query DevDiagramQuery {
      csDevelopersCms {
        diagram_section {
            header
            copy
            diagram_markup
        }
      }
    }
  `)


    return (
        <div className="max-width">
            <h2>{data.csDevelopersCms.diagram_section.header}</h2>
            <p>{data.csDevelopersCms.diagram_section.copy}</p>
            <div className="svg-diagram" dangerouslySetInnerHTML={{__html:data.csDevelopersCms.diagram_section.diagram_markup}}></div>
        </div>
    )
}
