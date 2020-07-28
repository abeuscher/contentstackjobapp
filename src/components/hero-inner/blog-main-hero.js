import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Hero from "./hero-inner"

export default function BlogMainHero() {
  const data = useStaticQuery(graphql`
    query BlogMainHeroQuery {
        csBlogMainPage {
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
    <Hero data={data.csBlogMainPage.hero}/>
  )
}
