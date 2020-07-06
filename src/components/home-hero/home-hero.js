import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"
import Flickity from "react-flickity-component"

import "./home-hero.scss"

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
  const flickityOptions = {
    wrapAround: true,
    lazyLoad: true,
    pageDots: false,
    prevNextButtons:false,
    autoPlay: 8000
  }
  return (
    <div className="home-hero">
      <div className="bg-carousel-bucket">
        <Flickity className="bg-fader"
          options={flickityOptions}>
          {data.csHomepage.hero.images.map((image, idx) => {
            return (<div key={"hero-slide-" + idx} className="bg-slide" style={{ "backgroundImage": "url('" + image.url + "')" }}></div>)
          })}
        </Flickity>
      </div>
      <div className="hero-content">
        <h1>{data.csHomepage.hero.header}</h1>
        <p>{data.csHomepage.hero.copy}</p>
        <Link to={data.csHomepage.hero.primary_cta.link} className={data.csHomepage.hero.primary_cta.classname}>{data.csHomepage.hero.primary_cta.text}</Link>
        <Link to={data.csHomepage.hero.secondary_cta.link} className={data.csHomepage.hero.secondary_cta.classname}>{data.csHomepage.hero.secondary_cta.text}</Link>
      </div>
    </div>
  )
}
