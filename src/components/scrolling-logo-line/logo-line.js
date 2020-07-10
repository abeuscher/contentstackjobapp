import React, { Component } from "react"
import Flickity from "react-flickity-component"

import LazyThumb from "../helpers/lazy-thumb"
import "./scrolling-logo-line.scss"
const flickityOptions = {
    wrapAround: true,
    lazyLoad: true,
    pageDots: false,
    autoPlay: 1500
}
export default class LogoLine extends Component {
    render() {
        return (
            <Flickity
                className={'carousel'}
                elementType={'div'}
                options={flickityOptions}
            >
                {this.props.logos.map((logo, idx) => {
                    if (logo.black_and_white_logo) {
                        return (
                            <LazyThumb key={"logo-thumb-" + idx} alt={logo.title} src={logo.black_and_white_logo.url} />
                        )
                    }
                    return null
                })}
            </Flickity>
        )
    }
}