import { useStaticQuery, graphql } from "gatsby"
import React, { Component } from "react"
import LazyThumb from "../helpers/lazy-thumb"
import SwiperCore, { Autoplay, EffectFade, Thumbs, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "./home-animated-tabs.scss"
import "swiper/swiper.scss"
import 'swiper/components/pagination/pagination.scss';

export default function HomeAnimatedTabs() {
    const data = useStaticQuery(graphql`
    query AnimatedTabsQuery {
      csHomepage {
        tab_section {
            more_tab_text
            more_tab_link
            tabs {
                header
                copy
                animated_image {
                    url
                }
            }
        }
      }
    }
  `)

    return (
        <Tabs data={data.csHomepage.tab_section} />
    )
}
SwiperCore.use([Autoplay, EffectFade, Thumbs, Pagination]);
class Tabs extends Component {
    constructor(props) {
        super(props)
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
            <div className="home-animated-tabs">
                <div className="max-width">
                    <div className="tabs">
                        {this.props.data.tabs.map((tab, idx) => (
                            <button key={"tab-slide-" + idx} className={this.state.activeIndex === idx ? "active" : ""} onClick={this.tabClick} data-idx={idx}>{tab.header}</button>
                        ))}
                        <a href={this.props.data.more_tab_link}>{this.props.data.more_tab_text}</a>
                    </div>
                    <Swiper
                        onSlideChange={this.slideSwap}
                        effect={"fade"}
                        grabCursor={true}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => { this.setState({ swiper: swiper }) }}
                        autoplay={{ "delay": 4500 }}>
                        {this.props.data.tabs.map((tab, idx) => (
                            <SwiperSlide key={"panel-slide-" + idx} 
                                onMouseEnter={()=>{this.state.swiper.autoplay.stop()}}
                                onMouseLeave={()=>{this.state.swiper.autoplay.start()}}>
                                <Panel tab={tab} />
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
                        <h2>{this.props.tab.header}</h2>
                        <p>{this.props.tab.copy}</p>
                    </div>
                    <div className="panel-image">
                        <LazyThumb classname="animated" src={this.props.tab.animated_image.url} />
                    </div>
                </div>
            </div>
        )
    }
}