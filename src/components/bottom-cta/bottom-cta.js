/*
   CTA Section With image background.
 */

import React, { Component } from "react"

import "./bottom-cta.scss"

export default class BottomCTA extends Component {
    render() {
        let bgStyle = this.props.data.bg_image ? { "backgroundImage": "url('" + this.props.data.bg_image.url + "')" } : {}
        return (
            <div className="bottom-cta-section" style={bgStyle}>
                <div className="inner max-width">
                    {this.props.data.header ? <h2 className="centered">{this.props.data.header}</h2> : ""}
                    {this.props.data.copy ? <p className="centered">{this.props.data.copy}</p> : ""}
                    <div className="buttons vertical">
                        {this.props.data.primary_cta ? <a className={"button " + this.props.data.primary_cta.classname} href={this.props.data.primary_cta.link}>{this.props.data.primary_cta.text}</a> : ""}
                        {this.props.data.secondary_cta ? <a className={"cta-link " + this.props.data.secondary_cta.classname} href={this.props.data.secondary_cta.link}>{this.props.data.secondary_cta.text}</a> : ""}
                    </div>
                </div>
            </div>
        )
    }
}