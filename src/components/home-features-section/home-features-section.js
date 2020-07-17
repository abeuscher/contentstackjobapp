import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import "./home-features-section.scss"

export default function SilhouetteSection() {
  const data = useStaticQuery(graphql`
    query FeaturesQuery {
      csHomepage {
        features_section {
            dev_section_header
            dev_section_copy
            dev_section_cta {
                text
                link
                classname
            }
            business_section_header
            business_section_copy
            business_section_cta {
                text
                link
                classname
            }
            bg_main {
                url
            }
            silhouette_left {
                url
            }
            silhouette_right {
                url
            }
        }
      }
    }
  `)
  return (
    <div className="home-silhouette">
      <div className="bg-main" style={{ backgroundImage: "url('" + data.csHomepage.features_section.bg_main.url + "'" }}></div>
      <div className="max-width">
        <div className="left-pane">
          <div className="profile-left silhouette" style={{ backgroundImage: "url('" + data.csHomepage.features_section.silhouette_left.url + "'" }}></div>
          <h2>{data.csHomepage.features_section.dev_section_header}</h2>
          <p>{data.csHomepage.features_section.dev_section_copy}</p>
          <a className="button" href={data.csHomepage.features_section.dev_section_cta.link}>{data.csHomepage.features_section.dev_section_cta.text}</a>
        </div>
        <div className="right-pane">
          <div className="profile-right silhouette" style={{ backgroundImage: "url('" + data.csHomepage.features_section.silhouette_right.url + "'" }}></div>
          <h2>{data.csHomepage.features_section.business_section_header}</h2>
          <p>{data.csHomepage.features_section.business_section_copy}</p>
          <a className="button" href={data.csHomepage.features_section.business_section_cta.link}>{data.csHomepage.features_section.business_section_cta.text}</a>
        </div>
      </div>
    </div>
  )
}