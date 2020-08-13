import { useStaticQuery, graphql } from "gatsby"
import React, { Component } from "react"
import LazyThumb from "../helpers/lazy-thumb"
import SwiperCore, { Autoplay, EffectFade, Thumbs, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "./features-omnichannel-section.scss"

export default function FeaturesOmnichannelSection() {
    const data = useStaticQuery(graphql`
    query FeaturesOmnichannelQuery {
      csFeaturesMain {
        omnichannel_section {
            header
            copy
            tabs {
                header
                copy
                thumb {
                    url
                }
            }
        }
      }
    }
  `)
    return (
        <div className="features-section omnichannel">
            <Carousel data = {data.csFeaturesMain.omnichannel_section} />
        </div>
    )
}

SwiperCore.use([Autoplay, EffectFade, Thumbs, Pagination]);
class Carousel extends Component {
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
            <div className="anim-tab-block max-width">
                <h2 className="small-header">{this.props.data.header}</h2>
                <p>{this.props.data.copy}</p>
                <div className="tabs">
                    {this.props.data.tabs.map((tab, idx) => (
                        <button key={"tab-label-" + idx} onClick={this.tabClick} data-idx={idx}>{tab.header}</button>
                    ))}
                </div>
                <div className="panels">
                    <Swiper
                        onSlideChange={this.slideSwap}
                        effect={"fade"}
                        onSwiper={(swiper) => { this.setState({ swiper: swiper }) }}
                        autoplay={{ "delay": 4500 }}>
                        {this.props.data.tabs.map((tab, idx) => (
                            <SwiperSlide key={"panel-slide-" + idx}
                                onMouseEnter={() => { this.state.swiper.autoplay.stop() }}
                                onMouseLeave={() => { this.state.swiper.autoplay.start() }}>
                                <Panel key={"panel-" + idx} tab={tab} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        )
    }
}

class Panel extends Component {
    render() {
        return (
            <div className="anim-tab-panel">
                <div className="inner">
                    <div className="panel-text">
                        <h3>{this.props.tab.header}</h3>
                        <p>{this.props.tab.copy}</p>
                    </div>
                    <div className="panel-image">
                        <LazyThumb classname="animated" src={this.props.tab.thumb.url} />
                    </div>
                </div>
            </div>
        )
    }
}