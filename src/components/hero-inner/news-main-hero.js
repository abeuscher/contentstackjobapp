import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Hero from "./hero-inner"

export default function NewsMainHero() {
  const data = useStaticQuery(graphql`
    query NewsMainHeroQuery {
        csNewsMain {
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
    <Hero data={data.csNewsMain.hero}/>
  )
}
