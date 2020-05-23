import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import "./home-silhouette-section.scss"

export default function HomeTestimonialSection() {
  const data = useStaticQuery(graphql`
    query TestimonialQuery {
      homepage {
        acf {
            testimonial_section {
                header
                copy
                cta_text
                cta_target
                testimonials {
                    logo
                    quote
                    speaker
                    company_name
                }
              }
        }
      }
    }
  `)
  return (
    <div className="home-testimonials">
        <div className="left-pane">

        </div>
        <div className="right-pane">

        </div>
    </div>
  )
}