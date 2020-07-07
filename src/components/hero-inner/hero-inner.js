import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"

import "./hero-inner.scss"

function Hero({ data }) {
    let bgStyle = data.header_bg ? { "backgroundImage": "url('" + data.header_bg.url + "')" } : {}
    return (
        <div className="hero" style={bgStyle}>
            <div className="hero-content">
                {data.header ? <h1>{data.header}</h1> : ""}
                {data.copy ? <p>{data.copy}</p> : ""}
                {data.primary_cta ? <Link to={data.primary_cta.link} className={data.primary_cta.classname}>{data.primary_cta.text}</Link> : ""}
                {data.secondary_cta ? <Link to={data.secondary_cta.link} className={data.secondary_cta.classname}>{data.secondary_cta.text}</Link> : ""}
            </div>
        </div>
    )
}
Hero.defaultProps = {
    data: {}
}
Hero.propTypes = {
    data: PropTypes.object
}

export default Hero