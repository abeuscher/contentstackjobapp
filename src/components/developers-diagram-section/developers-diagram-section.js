import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import SvgDiagramSection from "./svg-diagram-section"

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
      <SvgDiagramSection data={data.csDevelopersCms.diagram_section}/>
    )
}
