import React, { Component } from "react"
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import LazyThumb from "../helpers/lazy-thumb"
import "./scrolling-logo-line.scss"

SwiperCore.use([Autoplay]);
export default class LogoLine extends Component {
    constructor(props) {
        super(props)
        this.state = {
            swiper: {}
        }
    }
    render() {
        return (
            <Swiper
                className={'carousel'}
                autoplay={{ delay: 3000 }}
                slidesPerView={6}
                onSwiper={(swiper) => { this.setState({ swiper: swiper }) }}
                loop={true}
            >
                {this.props.logos.map((logo, idx) => {
                    if (logo.black_and_white_logo) {
                        return (
                            <SwiperSlide key={"logo-thumb-" + idx}
                                onMouseEnter={() => { this.state.swiper.autoplay.stop() }}
                                onMouseLeave={() => { this.state.swiper.autoplay.start() }}>
                                <LazyThumb alt={logo.title} src={logo.black_and_white_logo.url} />
                            </SwiperSlide>
                        )
                    }
                    return null
                })}
            </Swiper>
        )
    }
}