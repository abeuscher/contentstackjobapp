import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Hero from "./hero-inner"

export default function DevelopersHero() {
  const data = useStaticQuery(graphql`
    query BusinessHeroQuery {
        csBusinessCms {
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
    <Hero data={data.csBusinessCms.hero}/>
  )
}
