import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Hero from "./hero-inner"

export default function CmsGuidesMainHero() {
  const data = useStaticQuery(graphql`
    query cmsGuidesMainHeroQuery {
        csCmsGuidesMain {
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
    <Hero data={data.csCmsGuidesMain.hero}/>
  )
}
