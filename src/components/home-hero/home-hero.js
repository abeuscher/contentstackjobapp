import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import SwiperCore, { Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

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
  SwiperCore.use([Autoplay, EffectFade]);
  return (
    <div className="home-hero big-text">
      <div className="bg-carousel-bucket">
        <Swiper className="bg-fader" autoplay={{ delay: 8000 }} effect={"fade"}>
          {data.csHomepage.hero.images.map((image, idx) => {
            return (
              <SwiperSlide key={"hero-slide-" + idx}>
                <div className="bg-slide" style={{ "backgroundImage": "url('" + image.url + "')" }}></div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className="hero-content">
        <h1>{data.csHomepage.hero.header}</h1>
        <p>{data.csHomepage.hero.copy}</p>
        <div className="buttons vertical">
          <a href={data.csHomepage.hero.primary_cta.link} className={"button" + data.csHomepage.hero.primary_cta.classname}>{data.csHomepage.hero.primary_cta.text}</a>
          <a href={data.csHomepage.hero.secondary_cta.link} className={"cta-link " + data.csHomepage.hero.secondary_cta.classname}>{data.csHomepage.hero.secondary_cta.text}</a>
        </div>
      </div>
    </div>
  )
}
