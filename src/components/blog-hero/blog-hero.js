import React, { Component } from "react"

import "./blog-hero.scss"

export default class BlogHero extends Component {
    render() {
        let bgStyle = this.props.data.header_bg ? { "backgroundImage": "url('" + this.props.data.header_bg.url + "')" } : {}
        return (
            <div className="blog-hero big-text">
                <div className="hero-content max-width">
                    <div className="blog-thumb" style={bgStyle}></div>
                    {this.props.data.header ? <h1>{this.props.data.header}</h1> : ""}
                </div>
            </div>
        )
    }

}