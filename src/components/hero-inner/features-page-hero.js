import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Hero from "./hero-inner"

export default function FeaturesHero() {
  const data = useStaticQuery(graphql`
    query FeaturesHeroQuery {
        csFeaturesMain {
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
    <Hero data={data.csFeaturesMain.hero}/>
  )
}
