import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Hero from "./hero-inner"

export default function FindPartnerHero() {
  const data = useStaticQuery(graphql`
    query FindPartnerHeroQuery {
        csFindAPartner {
                hero {
                header
                copy
                header_bg {
                    url
                }
            }
        }
    }
  `)

  return (
    <Hero data={data.csFindAPartner.hero}/>
  )
}
