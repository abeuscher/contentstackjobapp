import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Hero from "./hero-inner"

export default function PartnersHero() {
  const data = useStaticQuery(graphql`
    query ResourcesHeroQuery {
        csResourcesMain {
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
    <Hero data={data.csResourcesMain.hero}/>
  )
}
