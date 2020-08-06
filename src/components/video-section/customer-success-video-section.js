import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import VideoSection from "./video-section"

export default function FeaturesHero() {
  const data = useStaticQuery(graphql`
    query CustomerSuccessVideoQuery {
        csCustomerSuccess {
            video_section {
                header
                video_id
                bg_image {
                  url
                }
            }
        }
    }
  `)

  return (
    <VideoSection header={data.csCustomerSuccess.video_section.header} video_id={data.csCustomerSuccess.video_section.video_id} bg_image={data.csCustomerSuccess.video_section.bg_image}/>
  )
}
