import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"


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
        <div className="Hero">
            <div id="bg"></div>
            <h1>{data.homepage.acf.hero.header}</h1>
            <p>{data.homepage.acf.hero.subhead}</p>
            <Link className="button" to={data.homepage.acf.hero.top_cta_link}>{data.homepage.acf.hero.top_cta_text}</Link>
            <Link to={data.homepage.acf.hero.bottom_cta_link}>{data.homepage.acf.hero.bottom_cta_text}</Link>
        </div>
    )
}
