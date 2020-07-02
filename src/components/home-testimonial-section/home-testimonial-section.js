import { useStaticQuery, graphql } from "gatsby"
import React, { Component } from "react"
import Flickity from "react-flickity-component"

import "./home-testimonial-section.scss"

export default function HomeTestimonialSection() {
    const data = useStaticQuery(graphql`
    query TestimonialQuery {
      csHomepage {
        quote_carousel {
            left_panel {
                header
                copy
                cta {
                    text
                    link
                    classname
                }
            }
            slides {
                logo {
                    black_and_white_logo {
                        url
                    }
                }
                quote
                speaker_name
                speaker_job_title
                company_name
            }
        }
      }
    }
  `)
    let MainCarouselObj = null
    const flickityOptions = {
        wrapAround: true,
        lazyLoad: true,
        pageDots: false,
        prevNextButtons: false,
        autoPlay: false
    }
    const tabClick = e => {
        e.preventDefault();
        MainCarouselObj.select(e.target.getAttribute("data-idx"))
    }
    return (
        <div className="testimonial-tab-block">
            <div className="max-width">
                <div className="panels">
                    <div className="left-pane">
                        <h2>{data.csHomepage.quote_carousel.left_panel.header}</h2>
                        <p>{data.csHomepage.quote_carousel.left_panel.copy}</p>
                        <a className={data.csHomepage.quote_carousel.left_panel.cta.classname} href={data.csHomepage.quote_carousel.left_panel.cta.link}>{data.csHomepage.quote_carousel.left_panel.cta.text}</a>
                    </div>
                    <div className="right-pane">
                        <Flickity flickityRef={c => MainCarouselObj = c} options={flickityOptions}>
                            {data.csHomepage.quote_carousel.slides.map((tab, idx) => (<Panel key={"panel-" + idx} tab={tab} />))}
                        </Flickity>
                    </div>
                </div>
                <div className="tabs">
                    {data.csHomepage.quote_carousel.slides.map((tab, idx) => (
                        <button key={"test-label-" + idx} style={{ backgroundImage: "url('" + tab.logo[0].black_and_white_logo.url + "'" }} onClick={tabClick} data-idx={idx}></button>
                    ))}
                </div>
            </div>
        </div>
    )
}
class Panel extends Component {
    render() {
        return (
            <div className="testimonial-tab-panel">
                <div className="inner">
                    <p>{this.props.tab.quote}</p>
                    <cite>{this.props.tab.speaker}{this.props.tab.company_name}</cite>
                </div>
            </div>
        )
    }
}