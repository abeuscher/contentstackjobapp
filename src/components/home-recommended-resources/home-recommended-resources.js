import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import "./home-recommended-resources.scss"

export default function RRSection() {
    const data = useStaticQuery(graphql`
    query RRQuery {
      csHomepage {
        resources_section {
            top_left_resource {
                resource_type
                title
                description
                url
                thumb {
                    url
                }
            }
            top_right_resource {
                resource_type
                title
                url
                thumb {
                    url
                }
            }
            bottom_resource {
                resource_type
                title
                description
                url
                thumb {
                    url
                }
            }
        }
      }
    }
  `)
    return (
        <div className="recommended-resources">
            <div className="max-width">
                <a className="ebook" href={data.csHomepage.resources_section.top_left_resource.url}>
                    <div className="image-pane" style={{ backgroundImage: "url('" + data.csHomepage.resources_section.top_left_resource.thumb.url + "')" }}></div>
                    <div className="text-pane">
                        <h2>{data.csHomepage.resources_section.top_left_resource.title}</h2>
                        <p>{data.csHomepage.resources_section.top_left_resource.description}</p>
                    </div>
                </a>
                <a className="gartner" href={data.csHomepage.resources_section.top_right_resource.url} style={{ backgroundImage: "url('" + data.csHomepage.resources_section.top_right_resource.thumb.url + "')" }}>
                    <h2>{data.csHomepage.resources_section.top_right_resource.title}</h2>
                </a>
                <a className="blog" href={data.csHomepage.resources_section.bottom_resource.url}>
                    <div className="image-pane" style={{ backgroundImage: "url('" + data.csHomepage.resources_section.bottom_resource.thumb.url + "')" }}></div>
                    <div className="text-pane">
                        <h2>{data.csHomepage.resources_section.bottom_resource.title}</h2>
                        <p>{data.csHomepage.resources_section.bottom_resource.description}</p>
                    </div>
                </a>
            </div>
        </div>
    )
}