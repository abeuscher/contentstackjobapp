import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Hero from "./hero-inner"

export default function PartnersHero() {
  const data = useStaticQuery(graphql`
    query IntegrationsHeroQuery {
        csIntegrationsMain {
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
    <Hero data={data.csIntegrationsMain.hero}/>
  )
}
