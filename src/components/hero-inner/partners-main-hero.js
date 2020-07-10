import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Hero from "./hero-inner"

export default function PartnersHero() {
  const data = useStaticQuery(graphql`
    query PartnersHeroQuery {
        csPartnersMain {
                hero {
                header
                copy
                header_bg {
                    url
                }
                primary_cta {
                    text
                    link
                    classname
                }
                secondary_cta {
                    text
                    link
                    classname
                }
            }
        }
    }
  `)

  return (
    <Hero data={data.csPartnersMain.hero}/>
  )
}
