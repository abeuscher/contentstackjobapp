import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Hero from "./hero-inner"

export default function PressMainHero() {
  const data = useStaticQuery(graphql`
    query PressMainHeroQuery {
        csPressMain {
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
    <Hero data={data.csPressMain.hero}/>
  )
}
