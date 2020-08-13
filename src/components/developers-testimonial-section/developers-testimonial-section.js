import { useStaticQuery, graphql } from "gatsby"
import React, { Component } from "react"
import SwiperCore, { Autoplay, EffectFade, Thumbs, Pagination, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


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
SwiperCore.use([Autoplay, EffectFade, Thumbs, Pagination, Controller]);
class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quoteCarousel: {},
            activeIndex: 0,
        }

    }
    tabClick = e => {
        e.preventDefault();
        this.setState({
            activeIndex: e.target.getAttribute("data-idx")
        })
        this.state.quoteCarousel.slideTo(e.target.getAttribute("data-idx"))
    }
    slideSwap = e => {
        this.setState({
            activeIndex: e.activeIndex
        })
    }
    render() {
        return (
            <div className="max-width">
                <h2 className="small-header">{this.props.data.header}</h2>
                <div class="buttons">
                {this.props.data.testimonials.map((tab, idx) => {
                    let bgStyle = tab.logo.length ? { "backgroundImage": "url('" + tab.logo[0].color_logo.url + "')" } : {}
                    return (<button key={"dev-logo-slide-" + idx} className={"logo-slide " + (this.state.activeIndex===idx ? "active" : "")} style={bgStyle} data-idx={idx} onClick={this.tabClick}></button>)
                })}</div>
                <Swiper
                    onSlideChange={this.slideSwap}
                    grabCursor={true}
                    autoHeight={true}
                    onSwiper={(swiper) => { this.setState({ quoteCarousel: swiper }) }}
                    autoplay={{ "delay": 4500 }}>
                    {this.props.data.testimonials.map((tab, idx) => (
                        <SwiperSlide key={"quote-logo-slide-" + idx}
                            onMouseEnter={() => { this.state.quoteCarousel.autoplay.stop() }}
                            onMouseLeave={() => { this.state.quoteCarousel.autoplay.start() }}>
                            <div className="testimonial">
                                <p className="quote">"{tab.quote}"</p>
                                <cite>{tab.speaker_name + ", " + tab.speaker_job_title + " - " + tab.company_name}</cite>
                            </div>
                        </SwiperSlide>))}
                </Swiper>
            </div>
        )
    }
}