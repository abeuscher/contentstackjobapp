import { useStaticQuery, graphql } from "gatsby"
import React, { Component } from "react"
import Flickity from "react-flickity-component"
import "flickity-as-nav-for"

import "./developers-testimonial-section.scss"

export default function DevTestimonialSection() {
    const data = useStaticQuery(graphql`
    query DevTestimonialQuery {
      csDevelopersCms {
        testimonial_section {
            header
            testimonials {
                quote
                speaker_name
                speaker_job_title
                company_name
                logo {
                    color_logo {
                        url
                    }
                }
            }
        }
      }
    }
  `)
    return (
        <div className="dev-testimonial-block">
            <Tabs data={data.csDevelopersCms.testimonial_section} />
        </div>
    )
}
class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logoCarousel: {},
            quoteCarousel: {}
        }

    }
    flickityLogoOptions = {
        wrapAround: true,
        lazyLoad: true,
        pageDots: false,
        prevNextButtons: false,
        autoPlay: 4500,
        asNavFor: ".quote-carousel"
    }
    flickityQuoteOptions = {
        wrapAround: true,
        lazyLoad: true,
        pageDots: false,
        prevNextButtons: false,
        autoPlay: 4500
    }
    tabClick = e => {
        e.preventDefault();
        this.state.carousel.select(e.target.getAttribute("data-idx"))
    }
    render() {
        return (
            <div className="max-width">
                <h2>{this.props.data.header}</h2>
                {typeof window !== 'undefined' ?
                    <Flickity className="logo-carousel" flickityRef={c => this.setState({ logoCarousel: c })} options={this.flickityLogoOptions}>
                        {this.props.data.testimonials.map((tab, idx) => {
                            let bgStyle = tab.logo.length ? { "backgroundImage": "url('" + tab.logo[0].color_logo.url + "')" } : {}
                            return (
                                <div key={"dev-logo-slide-" + idx} className="logo-slide" style={bgStyle}>
                                </div>
                            )
                        })}
                    </Flickity>
                    : ""}
                {typeof window !== 'undefined' ?
                    <Flickity className="quote-carousel" flickityRef={c => this.setState({ quoteCarousel: c })} options={this.flickityQuoteOptions}>
                        {this.props.data.testimonials.map((tab, idx) => (<div key={"quote-logo-slide-" + idx} className="testimonial"><p className="quote">"{tab.quote}"</p><cite>{tab.speaker_name + ", " + tab.speaker_job_title + " - " + tab.company_name}</cite></div>))}
                    </Flickity>
                    : ""}
            </div>
        )
    }
}