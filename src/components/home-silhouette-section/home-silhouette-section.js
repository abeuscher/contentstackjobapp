import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import "./home-silhouette-section.scss"

export default function SilhouetteSection() {
  const data = useStaticQuery(graphql`
    query SilhouetteQuery {
      homepage {
        acf {
            silhouette_section {
                left_section_header,
                left_section_copy,
                left_section_cta_text,
                left_section_cta_target,
                right_section_header,
                right_section_copy,
                right_section_cta_text,
                right_section_cta_target 
              }
        }
      }
    }
  `)
  return (
    <div className="home-silhouette">
        <div className="left-pane">
            <h2>{data.homepage.acf.silhouette_section.left_section_header}</h2>
            <p>{data.homepage.acf.silhouette_section.left_section_copy}</p>
            <a className="button" href={data.homepage.acf.silhouette_section.left_section_cta_target}>{data.homepage.acf.silhouette_section.left_section_cta_text}</a>
        </div>
        <div className="right-pane">
            <h2>{data.homepage.acf.silhouette_section.right_section_header}</h2>
            <p>{data.homepage.acf.silhouette_section.right_section_copy}</p>
            <a className="button" href={data.homepage.acf.silhouette_section.right_section_cta_target}>{data.homepage.acf.silhouette_section.right_section_cta_text}</a>
        </div>
    </div>
  )
}