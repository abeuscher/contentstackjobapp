import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Hero from "./hero-inner"

export default function PricingHero() {
    const data = useStaticQuery(graphql`
    query PricingHeroQuery {
        csRedesignPricing {
            hero_section {
                title
                subtext
                background_image {
                  url
                }
            }
        }
    }
  `)
    const heroData = {
        "header": data.csRedesignPricing.hero_section.title.replace(/(<([^>]+)>)/ig," "),
        "copy": data.csRedesignPricing.hero_section.subtext,
        "header_bg": data.csRedesignPricing.hero_section.background_image
    }
    return (
        <Hero data={heroData} />
    )
}
