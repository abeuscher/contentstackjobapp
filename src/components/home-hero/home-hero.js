import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"
import "./home-hero.scss"
import BgFader from "../bg-fader/bg-fader"

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
      <BgFader images={data.homepage.acf.hero.hero_images} />
      <div className="hero-content">
        <h1>{data.homepage.acf.hero.header}</h1>
        <p>{data.homepage.acf.hero.subhead}</p>
        <Link className="button" to={data.homepage.acf.hero.top_cta_target}>{data.homepage.acf.hero.top_cta_text}</Link>
        <Link className="cta-link" to={data.homepage.acf.hero.bottom_cta_target}>{data.homepage.acf.hero.bottom_cta_text}</Link>
      </div>
    </div>
  )
}
