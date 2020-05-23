import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import "./home-hero.scss"

export default function Hero() {
    const data = useStaticQuery(graphql`
    query HeroQuery {
      homepage {
        acf {
            hero {
            hero_images {
                image
            },
            header,
            subhead,
            top_cta_text,
            top_cta_target,
            bottom_cta_text,
            bottom_cta_target 
            }
        }
      }
    }
  `)

    return (
        <div className="home-hero">
            <div id="bg"></div>
            <h1>{data.homepage.acf.hero.header}</h1>
            <p>{data.homepage.acf.hero.subhead}</p>
            <a className="button" href={data.homepage.acf.hero.top_cta_target}>{data.homepage.acf.hero.top_cta_text}</a>
            <a href={data.homepage.acf.hero.bottom_cta_target}>{data.homepage.acf.hero.bottom_cta_text}</a>
        </div>
    )
}
