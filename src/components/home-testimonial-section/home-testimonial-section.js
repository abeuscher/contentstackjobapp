import { useStaticQuery, graphql } from "gatsby"
import React, { Component } from "react"
import SwiperCore, { Autoplay, EffectFade, Thumbs, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

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
                    png_black_and_white {
                        url
                    }
                }
                quote
                speaker_name
                speaker_job_title
                company_name
            }
            quote_icon {
                url
            }
        }
      }
    }
  `)
    return (
        <div className="testimonial-tab-block">
            <Tabs data={data.csHomepage.quote_carousel} />
        </div>
    )
}
SwiperCore.use([Autoplay, EffectFade, Thumbs, Pagination]);
class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            swiper: {}
        }

    }
    tabClick = e => {
        this.setState({
            activeIndex: e.target.getAttribute("data-idx")
        })
        this.state.swiper.slideTo(e.target.getAttribute("data-idx"))
    }
    slideSwap = e => {
        this.setState({
            activeIndex: e.activeIndex
        })
    }
    render() {
        return (
            <div className="max-width">
                <div className="panels">
                    <div className="left-pane">
                        <div className="inner">
                            <h2>{this.props.data.left_panel.header}</h2>
                            <p>{this.props.data.left_panel.copy}</p>
                            <a className={"button hover-orange"} href={this.props.data.left_panel.cta.link}>{this.props.data.left_panel.cta.text}</a>
                        </div>
                    </div>
                    <div className="right-pane">
                        <Swiper
                            onSlideChange={this.slideSwap}
                            effect={"fade"}
                            onSwiper={(swiper) => { this.setState({ swiper: swiper }) }}
                            autoplay={{ "delay": 4500 }}>
                            {this.props.data.slides.map((tab, idx) => (
                                <SwiperSlide key={"panel-slide-" + idx}
                                    onMouseEnter={() => { this.state.swiper.autoplay.stop() }}
                                    onMouseLeave={() => { this.state.swiper.autoplay.start() }}>
                                    <Panel tab={tab} quoteIcon={this.props.data.quote_icon} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className="tabs">
                    {this.props.data.slides.map((tab, idx) => (
                        <button
                            key={"test-label-" + idx}
                            className={this.state.activeIndex === idx ? "active" : ""}
                            style={{ backgroundImage: "url('" + tab.logo[0].png_black_and_white.url + "'" }}
                            onClick={this.tabClick}
                            data-idx={idx}></button>
                    ))}
                </div>
            </div>
        )
    }
}
class Panel extends Component {
    render() {
        let logoStyle = this.props.tab.logo[0].png_black_and_white ? { backgroundImage: "url('" + this.props.tab.logo[0].png_black_and_white.url + "'" } : {}
        let quoteStyle = this.props.quoteIcon ? { backgroundImage: "url('" + this.props.quoteIcon.url + "'" } : {}
        return (
            <div className="testimonial-tab-panel">
                <div className="inner">
                    <div className="top-bar">
                        <div className="logo" style={logoStyle}></div>
                        <div className="fancy-quote" style={quoteStyle}></div>
                    </div>
                    <p>{this.props.tab.quote}</p>
                    <cite>{this.props.tab.speaker}{this.props.tab.company_name}</cite>
                </div>
            </div>
        )
    }
}