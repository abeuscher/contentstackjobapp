import React, { Component } from "react"

import "./hero-inner.scss"

export default class Hero extends Component {
    render() {
        let bgStyle = this.props.data.header_bg ? { "backgroundImage": "url('" + this.props.data.header_bg.url + "')" } : {}
        return (
            <div className="hero big-text" style={bgStyle}>
                <div className="hero-content max-width">
                    {this.props.data.header ? <h1>{this.props.data.header}</h1> : ""}
                    {this.props.data.copy ? <p className="header-copy">{this.props.data.copy}</p> : ""}
                    <div className="buttons">
                        {this.props.data.primary_cta ? <a href={this.props.data.primary_cta.link} className={"button " + this.props.data.primary_cta.classname}>{this.props.data.primary_cta.text}</a> : ""}
                        {this.props.data.secondary_cta ? <a href={this.props.data.secondary_cta.link} className={"button knockout " + this.props.data.secondary_cta.classname}>{this.props.data.secondary_cta.text}</a> : ""}
                    </div>
                </div>
            </div>
        )
    }

}