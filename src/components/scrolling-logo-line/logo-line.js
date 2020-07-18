import React, { Component } from "react"
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import LazyThumb from "../helpers/lazy-thumb"
import "./scrolling-logo-line.scss"

SwiperCore.use([Autoplay]);
export default class LogoLine extends Component {
    render() {
        return (
            <Swiper
                className={'carousel'}
                autoplay={{delay:3000}}
                slidesPerView={6}
                loop={true}
            >
                {this.props.logos.map((logo, idx) => {
                    if (logo.black_and_white_logo) {
                        return (
                            <SwiperSlide key={"logo-thumb-" + idx}>
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