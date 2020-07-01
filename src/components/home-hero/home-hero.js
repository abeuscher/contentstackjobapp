import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"
import "./home-hero.scss"
import BgFader from "../bg-fader/bg-fader"

export default function Hero() {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      csHomepage {
        hero {
          header
          copy
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
          images {
            url
          }
        }
      }
    }
  `)
  return (
    <div className="home-hero">
      <BgFader images={data.csHomepage.hero.images} />
      <div className="hero-content">
        <h1>{data.csHomepage.hero.header}</h1>
        <p>{data.csHomepage.hero.copy}</p>
        <Link to={data.csHomepage.hero.primary_cta.link} className={data.csHomepage.hero.primary_cta.classname}>{data.csHomepage.hero.primary_cta.text}</Link>
        <Link to={data.csHomepage.hero.secondary_cta.link} className={data.csHomepage.hero.secondary_cta.classname}>{data.csHomepage.hero.secondary_cta.text}</Link>
      </div>
    </div>
  )
}
