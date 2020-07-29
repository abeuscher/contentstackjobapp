import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Hero from "./hero-inner"

export default function BecomePartnerHero() {
  const data = useStaticQuery(graphql`
    query BecomePartnerHeroQuery {
        csBecomeAPartner {
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
    <Hero data={data.csBecomeAPartner.hero}/>
  )
}
