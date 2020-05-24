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
                right_section_cta_target,
                bg_image,
                profile_left,
                profile_right 
              }
        }
      }
    }
  `)
  return (
    <div className="home-silhouette">
      <div className="hover left"></div>
      <div className="hover right"></div>
      <div className="bg-images">
        <div className="bg-main" style={{ backgroundImage: "url('" + data.homepage.acf.silhouette_section.bg_image + "'" }}></div>
        <div className="profile-left silhouette" style={{ backgroundImage: "url('" + data.homepage.acf.silhouette_section.profile_left + "'" }}></div>
        <div className="profile-right silhouette" style={{ backgroundImage: "url('" + data.homepage.acf.silhouette_section.profile_right + "'" }}></div>
      </div>
      <div className="max-width">
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
    </div>
  )
}